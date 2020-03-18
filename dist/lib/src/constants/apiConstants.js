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
var ApiConstants;
(function (ApiConstants) {
    ApiConstants["TRANSACTION_NOT_PERMITTED"] = "Transaction Not Permitted";
    ApiConstants["CVC_DECLINED"] = "CVC Declined";
    ApiConstants["RESTRICTED_CARD"] = "Restricted Card";
    ApiConstants["PAYMENT_DETAIL_NOT_FOUND"] = "803 PaymentDetail not found";
    ApiConstants["REFUSED"] = "Refused";
    ApiConstants["REFUSAL_REASON_RAW"] = "refusalReasonRaw";
    ApiConstants["PAYMENT_METHOD"] = "paymentMethod";
    ApiConstants["EXPIRY_DATE"] = "expiryDate";
    ApiConstants["CARD_BIN"] = "cardBin";
    ApiConstants["CARD_HOLDER_NAME"] = "cardHolderName";
    ApiConstants["CARD_SUMMARY"] = "cardSummary";
    ApiConstants["THREE_D_OFFERERED"] = "threeDOffered";
    ApiConstants["THREE_D_AUTHENTICATED"] = "threeDAuthenticated";
    ApiConstants["AVS_RESULT"] = "avsResult";
    ApiConstants["PAYMENT_TOKEN"] = "payment.token";
    ApiConstants["FRAUD_RESULT_TYPE"] = "fraudResultType";
    ApiConstants["FRAUD_MANUAL_REVIEW"] = "fraudManualReview";
    ApiConstants["AUTH_CODE"] = "authCode";
    ApiConstants["BOLETO_BARCODE_REFERENCE"] = "boletobancario.barCodeReference";
    ApiConstants["BOLETO_DATA"] = "boletobancario.data";
    ApiConstants["BOLETO_DUE_DATE"] = "boletobancario.dueDate";
    ApiConstants["BOLETO_URL"] = "boletobancario.url";
    ApiConstants["BOLETO_EXPIRATION_DATE"] = "boletobancario.expirationDate";
    ApiConstants["MULTIBANCO_ENTITY"] = "comprafacil.entity";
    ApiConstants["MULTIBANCO_AMOUNT"] = "comprafacil.amount";
    ApiConstants["MULTIBANCO_DEADLINE"] = "comprafacil.deadline";
    ApiConstants["MULTIBANCO_REFERENCE"] = "comprafacil.reference";
    ApiConstants["HMAC_SIGNATURE"] = "hmacSignature";
    ApiConstants["JSON"] = "card.encrypted.json";
    ApiConstants["BOLETO_SANTANDER"] = "boletobancario_santander";
    ApiConstants["NUMBER"] = "number";
    ApiConstants["EXPIRY_MONTH"] = "expiryMonth";
    ApiConstants["EXPIRY_YEAR"] = "expiryYear";
    ApiConstants["CVC"] = "cvc";
    ApiConstants["ENCRYPTED_CARD_NUMBER"] = "encryptedCardNumber";
    ApiConstants["ENCRYPTED_EXPIRY_MONTH"] = "encryptedExpiryMonth";
    ApiConstants["ENCRYPTED_EXPIRY_YEAR"] = "encryptedExpiryYear";
    ApiConstants["ENCRYPTED_SECURITY_CODE"] = "encryptedSecurityCode";
    ApiConstants["METHOD_TYPE"] = "type";
    ApiConstants["HOLDER_NAME"] = "holderName";
    ApiConstants["RECURRING_DETAIL_REFERENCE"] = "recurringDetailReference";
    ApiConstants["STORE_DETAILS"] = "storeDetails";
    ApiConstants["MD"] = "MD";
    ApiConstants["PAREQ"] = "PaReq";
    ApiConstants["TYPE_SCHEME"] = "scheme";
    ApiConstants["IDEMPOTENCY_KEY"] = "Idempotency-Key";
    ApiConstants["ACCEPT_CHARSET"] = "Accept-Charset";
    ApiConstants["USER_AGENT"] = "User-Agent";
    ApiConstants["METHOD_POST"] = "POST";
    ApiConstants["CONTENT_TYPE"] = "Content-Type";
    ApiConstants["API_KEY"] = "X-API-Key";
    ApiConstants["APPLICATION_JSON_TYPE"] = "application/json";
})(ApiConstants = exports.ApiConstants || (exports.ApiConstants = {}));
//# sourceMappingURL=apiConstants.js.map