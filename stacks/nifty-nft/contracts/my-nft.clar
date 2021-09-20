;; use the SIP090 interface (testnet)
(impl-trait 'ST1C8T7A0TRM3MZS83FJMVSHBW84WR8PYDBQRRJ1N.nft-trait.nft-trait)


(define-non-fungible-token doowop uint)

;; Store the last issues token ID
(define-data-var last-id uint u0)

;; Claim a new NFT
(define-public (claim)
  (mint tx-sender))

;; SIP009: Transfer token to a specified principal
(define-public (transfer (token-id uint) (sender principal) (recipient principal))
  (if (and
        (is-eq tx-sender sender))
      ;; Make sure to replace doowop
      (match (nft-transfer? doowop token-id sender recipient)
        success (ok success)
        error (err error))
      (err u500)))

;; SIP009: Get the owner of the specified token ID
(define-read-only (get-owner (token-id uint))
  ;; Make sure to replace doowop
  (ok (nft-get-owner? doowop token-id)))

;; SIP009: Get the last token ID
(define-read-only (get-last-token-id)
  (ok (var-get last-id)))

;; SIP009: Get the token URI. You can set it to any other URI
(define-read-only (get-token-uri (token-id uint))
  (ok (some "https://gist.githubusercontent.com/mistermoe/d06e14d27e794180c6d3daeed6f120bf/raw/99bb7301149b695e5cf3e1e88503fdc38c522e22/stx-nft-metadata.json")))

;; Internal - Mint new NFT
(define-private (mint (new-owner principal))
    (let ((next-id (+ u1 (var-get last-id))))
      ;; Make sure to replace doowop
      (match (nft-mint? doowop next-id new-owner)
        success
          (begin
            (var-set last-id next-id)
            (ok true))
        error (err error))))