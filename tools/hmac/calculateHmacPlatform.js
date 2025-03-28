// script to calculate the HMAC signature of Banking/Management webhooks (where the signature is calculated over the
// entire webhook payload)
//
// Run with: `node calculateHmacPlatform.js {hmacKey} {path to JSON file}`
//
// cd tools/hmac
// node calculateHmacPlatform.js 11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB payload2.json

const fs = require('fs');
const crypto = require('crypto');

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

console.log(`Calculating HMAC signature with payload from '${payloadFile}'`);

// Load payload as raw string
let payload;
try {
    payload = fs.readFileSync(payloadFile, 'utf8');
} catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
}

// Calculate HMAC signature
function calculateHmacSignature(hmacKey, payload) {
    const key = Buffer.from(hmacKey, 'hex');
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(payload, 'utf8');
    return hmac.digest('base64');
}

const signature = calculateHmacSignature(hmacKey, payload);

console.log(`HMAC signature: ${signature}`);
process.exit(0);
