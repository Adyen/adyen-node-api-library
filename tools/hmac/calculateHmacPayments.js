// script to calculate the HMAC signature of Payments webhooks (where the signature is calculated considering
// a subset of the fields in the payload - i.e. NotificationRequestItem object)
// Note: HMAC signature is found in the AdditionalData object of the request payload
//
// Run with: `node calculateHmacPayments.js {hmacKey} {path to JSON file}
//
// cd tools/hmac
// node calculateHmacPayments.js 11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB payload.json

const fs = require('fs');
const { hmacValidator } = require('@adyen/api-library');

// Ensure correct arguments
if (process.argv.length !== 4) {
    console.error("Usage: node calculateHmacPayments.js <hmacKey> <payloadFile>");
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

// Load and parse JSON file
let jsonData;
let payload;

try {
    payload = fs.readFileSync(payloadFile, 'utf8');
    jsonData = JSON.parse(payload);
} catch (error) {
    console.error("Error: Invalid JSON in payload file.");
    process.exit(1);
}

// Validate JSON structure
if (!jsonData.notificationItems || !Array.isArray(jsonData.notificationItems)) {
    console.error("Error: 'notificationItems' key is missing or not an array.");
    process.exit(1);
}

// Extract the first (and only) NotificationRequestItem
const notificationRequestItem = jsonData.notificationItems[0]?.NotificationRequestItem;

if (!notificationRequestItem) {
    console.error("Error: 'NotificationRequestItem' is not found.");
    process.exit(1);
}

//console.log(notificationRequestItem)

const validator = new hmacValidator()
const hmacSignature = validator.calculateHmac(notificationRequestItem, hmacKey);

console.log('********');
console.log(`Payload file: ${payloadFile}`);
console.log(`Payload length: ${payload.length} characters`);
/*
// uncomment if needed
const newlineCount = (payload.match(/\n/g) || []).length;
const spaceCount = (payload.match(/ /g) || []).length;

console.log(`Newline count: ${newlineCount}`);
console.log(`Space count: ${spaceCount}`);
*/
console.log('********');
console.log(`HMAC signature: ${hmacSignature}`);
process.exit(0);
