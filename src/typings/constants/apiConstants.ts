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

export const TRANSACTION_NOT_PERMITTED = "Transaction Not Permitted";
export const CVC_DECLINED = "CVC Declined";
export const RESTRICTED_CARD = "Restricted Card";
export const PAYMENT_DETAIL_NOT_FOUND = "803 PaymentDetail not found";
export const REFUSED = "Refused";

export const REFUSAL_REASON_RAW = "refusalReasonRaw";
export const PAYMENT_METHOD = "paymentMethod";
export const EXPIRY_DATE = "expiryDate";
export const CARD_BIN = "cardBin";
export const CARD_HOLDER_NAME = "cardHolderName";
export const CARD_SUMMARY = "cardSummary";
export const THREE_D_OFFERERED = "threeDOffered";
export const THREE_D_AUTHENTICATED = "threeDAuthenticated";
export const AVS_RESULT = "avsResult";
export const PAYMENT_TOKEN = "payment.token";
export const FRAUD_RESULT_TYPE = "fraudResultType";
export const FRAUD_MANUAL_REVIEW = "fraudManualReview";
export const AUTH_CODE = "authCode";

export const BOLETO_BARCODE_REFERENCE = "boletobancario.barCodeReference";
export const BOLETO_DATA = "boletobancario.data";
export const BOLETO_DUE_DATE = "boletobancario.dueDate";
export const BOLETO_URL = "boletobancario.url";
export const BOLETO_EXPIRATION_DATE = "boletobancario.expirationDate";

export const MULTIBANCO_ENTITY = "comprafacil.entity";
export const MULTIBANCO_AMOUNT = "comprafacil.amount";
export const MULTIBANCO_DEADLINE = "comprafacil.deadline";
export const MULTIBANCO_REFERENCE = "comprafacil.reference";

export const HMAC_SIGNATURE = "hmacSignature";

export const JSON = "card.encrypted.json";

export const BOLETO_SANTANDER = "boletobancario_santander";

export const NUMBER = "number";
export const EXPIRY_MONTH = "expiryMonth";
export const EXPIRY_YEAR = "expiryYear";
export const CVC = "cvc";
export const ENCRYPTED_CARD_NUMBER = "encryptedCardNumber";
export const ENCRYPTED_EXPIRY_MONTH = "encryptedExpiryMonth";
export const ENCRYPTED_EXPIRY_YEAR = "encryptedExpiryYear";
export const ENCRYPTED_SECURITY_CODE = "encryptedSecurityCode";
export const METHOD_TYPE = "type";
export const HOLDER_NAME = "holderName";
export const RECURRING_DETAIL_REFERENCE = "recurringDetailReference";
export const STORE_DETAILS = "storeDetails";

export const MD = "MD";
export const PAREQ = "PaReq";

export const TYPE_SCHEME = "scheme";

export const IDEMPOTENCY_KEY = "Idempotency-Key";
export const ACCEPT_CHARSET = "Accept-Charset";
export const USER_AGENT = "User-Agent";
export const METHOD_POST = "POST";
export const CONTENT_TYPE = "Content-Type";
export const API_KEY = "X-API-Key";
export const APPLICATION_JSON_TYPE = "application/json";
