// script to calculate the HMAC signature of Banking/Management webhooks (where the signature is calculated over the
// entire webhook payload)
//
// Run with: `node calculateHmacPlatform.js {hmacKey} {path to JSON file}`
//
// cd tools/hmac
// node calculateHmacPlatform.js 11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB payload2.json

const fs = require('fs');
const { hmacValidator } = require('@adyen/api-library');


// Ensure correct arguments
if (process.argv.length !== 4) {
    console.error("Usage: node calculateHmacPlatform.js <hmacKey> <payloadFile>");
    process.exit(1);
}

const hmacKey = process.argv[2];
const payloadFile = process.argv[3];

// Check if file exists
if (!fs.existsSync(payloadFile)) {
    console.error(`Error: File '${payloadFile}' not found.`);
    process.exit(1);
}

console.log(`Calculating HMAC signature...`);

// Load payload as raw string
let payload;

try {
    payload = fs.readFileSync(payloadFile, 'utf8');
} catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
}

const validator = new hmacValidator()
const hmacSignature = validator.calculateHmac(payload, hmacKey);

console.log('********');
console.log(`Payload file: ${payloadFile}`);
console.log(`Payload length: ${payload.length} characters`);
/*
// uncomment if needed to log number of new lines and number of spaces: this can be useful to confirm the payload sent by Adyen
// is the same as the one you receive/parse

const newlineCount = (payload.match(/\n/g) || []).length;
const spaceCount = (payload.match(/ /g) || []).length;

console.log(`Newline count: ${newlineCount}`);
console.log(`Space count: ${spaceCount}`);
*/
console.log('********');

console.log(`HMAC signature: ${hmacSignature}`);
process.exit(0);
