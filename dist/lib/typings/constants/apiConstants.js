"use strict";
/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRANSACTION_NOT_PERMITTED = "Transaction Not Permitted";
exports.CVC_DECLINED = "CVC Declined";
exports.RESTRICTED_CARD = "Restricted Card";
exports.PAYMENT_DETAIL_NOT_FOUND = "803 PaymentDetail not found";
exports.REFUSED = "Refused";
exports.REFUSAL_REASON_RAW = "refusalReasonRaw";
exports.PAYMENT_METHOD = "paymentMethod";
exports.EXPIRY_DATE = "expiryDate";
exports.CARD_BIN = "cardBin";
exports.CARD_HOLDER_NAME = "cardHolderName";
exports.CARD_SUMMARY = "cardSummary";
exports.THREE_D_OFFERERED = "threeDOffered";
exports.THREE_D_AUTHENTICATED = "threeDAuthenticated";
exports.AVS_RESULT = "avsResult";
exports.PAYMENT_TOKEN = "payment.token";
exports.FRAUD_RESULT_TYPE = "fraudResultType";
exports.FRAUD_MANUAL_REVIEW = "fraudManualReview";
exports.AUTH_CODE = "authCode";
exports.BOLETO_BARCODE_REFERENCE = "boletobancario.barCodeReference";
exports.BOLETO_DATA = "boletobancario.data";
exports.BOLETO_DUE_DATE = "boletobancario.dueDate";
exports.BOLETO_URL = "boletobancario.url";
exports.BOLETO_EXPIRATION_DATE = "boletobancario.expirationDate";
exports.MULTIBANCO_ENTITY = "comprafacil.entity";
exports.MULTIBANCO_AMOUNT = "comprafacil.amount";
exports.MULTIBANCO_DEADLINE = "comprafacil.deadline";
exports.MULTIBANCO_REFERENCE = "comprafacil.reference";
exports.HMAC_SIGNATURE = "hmacSignature";
exports.JSON = "card.encrypted.json";
exports.BOLETO_SANTANDER = "boletobancario_santander";
exports.NUMBER = "number";
exports.EXPIRY_MONTH = "expiryMonth";
exports.EXPIRY_YEAR = "expiryYear";
exports.CVC = "cvc";
exports.ENCRYPTED_CARD_NUMBER = "encryptedCardNumber";
exports.ENCRYPTED_EXPIRY_MONTH = "encryptedExpiryMonth";
exports.ENCRYPTED_EXPIRY_YEAR = "encryptedExpiryYear";
exports.ENCRYPTED_SECURITY_CODE = "encryptedSecurityCode";
exports.METHOD_TYPE = "type";
exports.HOLDER_NAME = "holderName";
exports.RECURRING_DETAIL_REFERENCE = "recurringDetailReference";
exports.STORE_DETAILS = "storeDetails";
exports.MD = "MD";
exports.PAREQ = "PaReq";
exports.TYPE_SCHEME = "scheme";
exports.IDEMPOTENCY_KEY = "Idempotency-Key";
exports.ACCEPT_CHARSET = "Accept-Charset";
exports.USER_AGENT = "User-Agent";
exports.METHOD_POST = "POST";
exports.CONTENT_TYPE = "Content-Type";
exports.API_KEY = "X-API-Key";
exports.APPLICATION_JSON_TYPE = "application/json";
//# sourceMappingURL=apiConstants.js.map