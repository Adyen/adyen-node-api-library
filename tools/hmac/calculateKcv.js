// script to calculate the KVC of the HMAC key
//
// Run with: `node calculateKcv.js {hmacKey} 
//
// cd tools/hmac
// node calculateKcv.js 00727DB817A85C8503AD29EAD1523DB869AF0E536893BB3046C92DE7CB045CB1 should return 9540DA
const crypto = require('crypto');

// Ensure correct arguments
if (process.argv.length !== 3) {
    console.error("Usage: node calculateKcv.js <hexHmacKey>");
    process.exit(1);
}

console.log(`Calculating KCV...`);

const hmacKey = process.argv[2];
// Convert the hex stringc
const keyBuffer = Buffer.from(hmacKey, 'hex');

const algorithm = 'sha256';

const hmacSignature = crypto.createHmac(algorithm, keyBuffer).update("00000000").digest();

// Take the last 3 bytes (6 hex characters) for the KCV
const kcv = Buffer.from(hmacSignature.subarray(hmacSignature.length - 3)).toString('hex').toUpperCase();

console.log('********');
console.log(`KCV: ${kcv}`);
