## HMAC Tools

This folder contains PHP scripts to calculate the HMAC signature of the webhook payload.  
They can be used to troubleshoot the HMAC signature calculation.

Note: make sure you are using the HMAC key used to generate the signature associated with the payload in the JSON file

### Payments webhooks

Copy the content of the webhook in the payload.json (or provide a different file), then run with: 
`node calculateHmacPayments.js {hmacKey} {path to JSON file}`
```
cd tools/hmac
node calculateHmacPayments.js 11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB payload.json
```

