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

import { SaleData } from "../../typings/tapi/saleData";
import { SaleToAcquirerData } from "./saleToAcquirerData";
import { parse } from "./saleToAcquirerDataParser";

/**
 * A helper class to work with `SaleData` from the TAPI (Cloud device API) model.
 *
 * The `SaleToAcquirerData` field supports two formats:
 * - Base64-encoded JSON: a JSON object encoded as a Base64 string.
 * - Key-value pairs: form-encoded pairs using `&` as separator
 *   (e.g. `shopperEmail=foo@bar.com&tenderOption=AskGratuity`).
 *
 * This helper auto-detects the format and parses it into a {@link SaleToAcquirerData} object.
 */
export class SaleDataHelper {
    private saleData: SaleData;

    /**
     * Constructs a helper instance wrapping the provided {@link SaleData}.
     *
     * @param saleData The {@link SaleData} instance to wrap.
     */
    constructor(saleData: SaleData) {
        if (!saleData) {
            throw new Error("saleData must not be null");
        }
        this.saleData = saleData;
    }

    /**
     * Parses the `SaleToAcquirerData` field into a {@link SaleToAcquirerData} object.
     * Supports both Base64-encoded JSON and form-encoded key-value pair formats.
     *
     * @returns The parsed {@link SaleToAcquirerData}, or `null` if the field is absent
     * or cannot be parsed.
     */
    getSaleToAcquirerData(): SaleToAcquirerData | null {
        const raw = this.saleData.SaleToAcquirerData;
        if (!raw || raw.trim() === "") {
            return null;
        }
        try {
            return parse(raw);
        } catch {
            return null;
        }
    }
}
