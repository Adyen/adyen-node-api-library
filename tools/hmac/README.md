## HMAC Tools

This folder contains the scripts/tool to calculate the HMAC signature of the webhook payload.  
They can be used to troubleshoot the HMAC signature calculation. See [Webhooks documentation](https://docs.adyen.com/development-resources/webhooks/) page.

Check `tools/hmac/package.json` to confirm the Adyen Node API library version

Note: make sure you are using the HMAC key used to generate the signature associated with the payload in the JSON file

### Payments webhooks

Copy the content of the webhook in the payload.json (or provide a different file), then run with: 
`node calculateHmacPayments.js {hmacKey} {path to JSON file}`
```
cd tools/hmac
npm install 

npm list @adyen/api-library // check version of library and update if needed

node calculateHmacPayments.js 11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB payload.json
```

### Platform webhooks (AfP, Management API, etc..)

Copy the content of the webhook in the payload2.json (or provide a different file), then run with: 
`node calculateHmacPlatform.js {hmacKey} {path to JSON file}`
```
cd tools/hmac
npm install 

npm list @adyen/api-library // check version of library and update if needed

node calculateHmacPlatform.js 11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB payload2.json
```

### Calculate KCV of the HMAC key

Run `calculateKcv` passing the HMAC key:
`node calculateKcv.js {hmacKey}`
```
cd tools/hmac

node calculateKcv.js 00727DB817A85C8503AD29EAD1523DB869AF0E536893BB3046C92DE7CB045CB1
```
