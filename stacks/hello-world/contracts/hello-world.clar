;; public functions, declared using `define-public` are callable from other
;; smart contracts
(
  define-public (say-hi) 
  (ok "hello-world")
)

;; read-only functions are implicitly public.They're unable to write/modify anything
(
  define-read-only (echo-number (val int))
  (ok val)
)