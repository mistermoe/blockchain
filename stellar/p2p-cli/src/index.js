import ora from 'ora';
import prompts from 'prompts';
import { Asset, Keypair, Server, NotFoundError, TransactionBuilder, Operation } from 'stellar-sdk';


const ASSETS = {
    'USD': new Asset('USD', 'GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX'),
    'EUR': new Asset('EUR', 'GDI73WJ4SX7LOG3XZDJC3KCK6ED6E5NBYK2JUBQSPBCNNWEG3ZN7T75U'),
    'GBP': new Asset('GBP', 'GCF6EWJCVLWLWY6NPX7LZSH4OHDNFG3WKHU3NBYL7QBH2AZMHVNVQMPY')
};

// add prompt to ask if user wants to use testnet or mainnet
const server = new Server('https://horizon-testnet.stellar.org');

async function main() {
    const questions = [
        {
          type: 'password',
          name: 'sourceSecretKey',
          message: 'Provide your secret key'
        },
        {
            type: 'text',
            name: 'destAddress',
            message: 'Where are you wanting to send money to? (destination address)'
        },
        {
            type: 'select',
            name: 'sourceAsset',
            message: 'What currency will you be using?',
            choices: [
              { title: 'USD', value: ASSETS.USD },
              { title: 'GBP', value: ASSETS.GBP  },
              { title: 'EUR', value: ASSETS.EUR  },
            ],
        },
        {
            type: 'select',
            name: 'destAsset',
            message: 'What currency do you want the destination to receive in the destination currency?',
            choices: [
              { title: 'USD', value: ASSETS.USD },
              { title: 'GBP', value: ASSETS.GBP  },
              { title: 'EUR', value: ASSETS.EUR  },
            ],
        },
        {
            type: 'number',
            name: 'destAmount',
            message: 'How much do you want the destination to receive?',
            initial: 0,
            float: true,
            style: 'default'
        }
    ];

    const req = await prompts(questions);

    
    const sourceKeypair = Keypair.fromSecret(req.sourceSecretKey);
    
    const sourceAcct = await getAccount(sourceKeypair.publicKey);
    if (!sourceAcct) {
        console.log('Source account does not exist');
        process.exit(0);
    }
    
    //! TODO: add ability to use federated address
    const destAcct = await getAccount(req.destAddress);
    if (!destAcct) {
        console.log('Destination account does not exist');
        process.exit(0);
    }
    
    const bestPath = await getBestReceivePath(req.sourceAsset, req.sourceAmt, req.destAsset);
    
    const strictReceiveOp = Operation.pathPaymentStrictReceive({
        destination: req.destAddress,
        sendAsset: req.sourceAsset,
        destAsset: req.destAsset,
        destAmount: req.destAmount,
        path: bestPath
    })
    
    
    const transaction = new TransactionBuilder(sourceAcct)
        .addOperation(strictReceiveOp)
        .setTimeout(30)
        .build();
    
    transaction.sign(sourceKeypair);
    
    const spinner = ora(`Sending ${req.destAmount} ${req.destAsset.code} to [${req.destAddress}]...`).start();
    
    //! TODO: add error handling
    const resp = await server.submitTransaction(transaction);

    spinner.succeed(`${req.destAmount} ${req.destAsset.code} sent to ${req.destAddress}! txn id -> ${resp.hash}`);
    
}

async function getAccount(publicKey) {
    try {
        return await server.loadAccount(publicKey);
    } catch (error) {
        if (error instanceof NotFoundError) {
            return;
        } else {
            throw error;
        }
    }
}

async function getBestReceivePath(sourceAsset, sourceAmt, destAsset) {
    const paths = await server.strictReceivePaths(sourceAsset, sourceAmt, destAsset);

    //! TODO: find best path after bug is fixed in `strictReceivePath`
}

(async () => {
    try {
        await main();
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
})();