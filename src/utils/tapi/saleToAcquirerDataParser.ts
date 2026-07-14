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
 * Adyen NodeJS API Library
 * Copyright (c) 2026 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import { RecurringProcessingModel, SaleToAcquirerData } from "./saleToAcquirerData";

const RECURRING_PROCESSING_MODELS = Object.values(RecurringProcessingModel) as string[];

/**
 * Parses and serializes {@link SaleToAcquirerData} objects from/to their wire formats.
 *
 * Supports two formats:
 * - Base64-encoded JSON: a JSON object encoded as a Base64 string.
 * - Key-value pairs: form-encoded pairs using `&` as separator
 *   (e.g. `shopperEmail=foo@bar.com&tenderOption=AskGratuity`).
 */

/**
 * Parses a raw `SaleToAcquirerData` string, auto-detecting the format.
 *
 * - If the string is valid Base64 and decodes to a JSON object, it is parsed as JSON.
 * - Otherwise it is parsed as form-encoded key-value pairs.
 *
 * @param raw The raw `SaleToAcquirerData` string.
 * @returns Parsed {@link SaleToAcquirerData}.
 */
export function parse(raw: string): SaleToAcquirerData {
    const decoded = tryDecodeBase64Json(raw);
    if (decoded !== null) {
        return decoded;
    }
    return fromKeyValuePairs(raw);
}

/**
 * Decodes a Base64-encoded JSON string into a {@link SaleToAcquirerData} object.
 *
 * @param base64 Base64-encoded JSON string.
 * @returns Decoded {@link SaleToAcquirerData}.
 */
export function fromBase64(base64: string): SaleToAcquirerData {
    try {
        const json = Buffer.from(base64, "base64").toString("utf8");
        return JSON.parse(json) as SaleToAcquirerData;
    } catch (e) {
        throw new Error(`Failed to deserialize SaleToAcquirerData: ${(e as Error).message}`);
    }
}

/**
 * Parses a form-encoded key-value pair string (e.g.
 * `shopperEmail=foo@bar.com&tenderOption=AskGratuity`) into a {@link SaleToAcquirerData} object.
 * Metadata fields use dotted notation: `metadata.key=value`.
 *
 * @param keyValuePairs Form-encoded key-value string using `&` as separator.
 * @returns Parsed {@link SaleToAcquirerData}.
 */
export function fromKeyValuePairs(keyValuePairs: string): SaleToAcquirerData {
    const data: SaleToAcquirerData = {};
    const metadata: Record<string, string> = {};
    const additionalData: Record<string, string> = {};

    const params = new URLSearchParams(keyValuePairs);
    for (const [key, value] of params) {
        if (key.startsWith("metadata.")) {
            metadata[key.substring("metadata.".length)] = value;
            continue;
        }
        switch (key) {
            case "shopperEmail":
                data.shopperEmail = value;
                break;
            case "shopperReference":
                data.shopperReference = value;
                break;
            case "shopperStatement":
                data.shopperStatement = value;
                break;
            case "recurringContract":
                data.recurringContract = value;
                break;
            case "recurringDetailName":
                data.recurringDetailName = value;
                break;
            case "recurringTokenService":
                data.recurringTokenService = value;
                break;
            case "recurringProcessingModel":
                data.recurringProcessingModel = RECURRING_PROCESSING_MODELS.includes(value)
                    ? (value as RecurringProcessingModel)
                    : undefined;
                break;
            case "store":
                data.store = value;
                break;
            case "merchantAccount":
                data.merchantAccount = value;
                break;
            case "currency":
                data.currency = value;
                break;
            case "tenderOption":
                data.tenderOption = value;
                break;
            case "authorisationType":
                data.authorisationType = value;
                break;
            case "ssc":
                data.ssc = value;
                break;
            case "redemptionType":
                data.redemptionType = value;
                break;
            default:
                additionalData[key] = value;
                break;
        }
    }

    if (Object.keys(metadata).length > 0) {
        data.metadata = metadata;
    }
    if (Object.keys(additionalData).length > 0) {
        data.additionalData = additionalData;
    }
    return data;
}

/**
 * Serializes a {@link SaleToAcquirerData} object to a JSON string.
 *
 * @param data The object to serialize.
 * @returns JSON string representation.
 */
export function toJson(data: SaleToAcquirerData): string {
    return JSON.stringify(data);
}

/**
 * Encodes a {@link SaleToAcquirerData} object to a Base64-encoded JSON string.
 *
 * @param data The object to encode.
 * @returns Base64-encoded JSON representation.
 */
export function toBase64(data: SaleToAcquirerData): string {
    return Buffer.from(toJson(data), "utf8").toString("base64");
}

/**
 * Attempts to decode a Base64-encoded JSON object. Returns null when the input is not
 * valid Base64 or does not decode to a JSON object.
 */
function tryDecodeBase64Json(raw: string): SaleToAcquirerData | null {
    try {
        const decoded = Buffer.from(raw, "base64").toString("utf8");
        // Reject inputs that are not round-trip safe Base64 (e.g. plain key-value strings).
        if (Buffer.from(decoded, "utf8").toString("base64").replace(/=+$/, "") !== raw.replace(/=+$/, "")) {
            return null;
        }
        if (decoded.trim().startsWith("{")) {
            return JSON.parse(decoded) as SaleToAcquirerData;
        }
        return null;
    } catch {
        return null;
    }
}
