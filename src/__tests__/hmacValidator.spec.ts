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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import HmacValidator from "../utils/hmacValidator";
import { AdditionalData, NotificationItem, NotificationRequestItem } from "../typings/notification/models";
import { ApiConstants } from "../constants/apiConstants";
import NotificationRequest from "../notification/notificationRequest";

const key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
const expectedSign = "ZNBPtI+oDyyRrLyD1XirkKnQgIAlFc07Vj27TeHsDRE=";

const notificationRequestItem: { NotificationRequestItem: NotificationRequestItem } = {
    NotificationRequestItem : {
        pspReference: "pspReference",
        originalReference: "originalReference",
        merchantAccountCode: "merchantAccount",
        merchantReference: "reference",
        amount: {currency: "EUR", value: 1000},
        eventCode: NotificationRequestItem.EventCodeEnum.REPORTAVAILABLE,
        eventDate: "2019-09-21T11:45:24.637Z",
        paymentMethod: "VISA",
        reason: "reason",
        success: NotificationRequestItem.SuccessEnum.True,
        additionalData: { [ApiConstants.HMAC_SIGNATURE]: expectedSign },
    }
};
const notification = new NotificationRequest({
    live: "false",
    notificationItems: [notificationRequestItem as unknown as NotificationItem]
});

describe("HMAC Validator", function (): void {
    let hmacValidator: HmacValidator;
    beforeEach(() => {
        hmacValidator = new HmacValidator();
    });

    it("should get correct data", function (): void {
        const dataToSign = hmacValidator.getDataToSign({merchantAccount: "ACC", currencyCode: "EUR"});
        expect(dataToSign).toEqual("currencyCode:merchantAccount:EUR:ACC");
    });
    it("should get correct data with escaped characters", function (): void {
        const dataToSign = hmacValidator.getDataToSign({currencyCode: "EUR", merchantAccount: "ACC:\\", sessionValidity: "2019-09-21T11:45:24.637Z"});
        expect(dataToSign).toEqual("currencyCode:merchantAccount:sessionValidity:EUR:ACC\\:\\\\:2019-09-21T11\\:45\\:24.637Z");
    });
    it("should encrypt correctly", function (): void {
        const data = "countryCode:currencyCode:merchantAccount:merchantReference:paymentAmount:sessionValidity:skinCode:NL:EUR:MagentoMerchantTest2:TEST-PAYMENT-2017-02-01-14\\:02\\:05:199:2017-02-02T14\\:02\\:05+01\\:00:PKz2KML1";
        const encrypted = hmacValidator.calculateHmac(data, "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00");
        expect(encrypted).toEqual("34oR8T1whkQWTv9P+SzKyp8zhusf9n0dpqrm9nsqSJs=");
    });
    it("should get correct data to sign", function (): void {
        const data = hmacValidator.getDataToSign(notification.notificationItems![0]);
        expect(data).toEqual("pspReference:originalReference:merchantAccount:reference:1000:EUR:REPORT_AVAILABLE:true");
    });

    it("should have valid hmac", function (): void {
        const encrypted = hmacValidator.calculateHmac(notification.notificationItems![0], key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notification.notificationItems![0], key)).toBeTruthy();
    });

    it("should have invalid hmac", function (): void {
        const invalidNotification = {
            ...notification.notificationItems![0],
            additionalData: { [ApiConstants.HMAC_SIGNATURE as keyof AdditionalData]: "notValidSign" }
        };
        const result = hmacValidator.validateHMAC(invalidNotification, key);
        expect(result).toBeFalsy();
    });

    it("should throw error with missing hmac signature", function(): void {
        expect.assertions(1);
        const notificationRequestItemNoAdditionalData: NotificationRequestItem = {
            pspReference: "pspReference",
            originalReference: "originalReference",
            merchantAccountCode: "merchantAccount",
            merchantReference: "reference",
            amount: {currency: "EUR", value: 1000},
            eventCode: NotificationRequestItem.EventCodeEnum.REPORTAVAILABLE,
            eventDate: "2019-09-21T11:45:24.637Z",
            paymentMethod: "VISA",
            reason: "reason",
            success: NotificationRequestItem.SuccessEnum.True,
            additionalData: { },
        };
        try {
        hmacValidator.validateHMAC(notificationRequestItemNoAdditionalData, key);
        } catch(error) {
            expect(error.message).toEqual(`Missing ${ApiConstants.HMAC_SIGNATURE}`);
        }
    });

    it("should test hmac", function () {
        const data = "countryCode:currencyCode:merchantAccount:merchantReference:paymentAmount:sessionValidity:skinCode:NL:EUR:MagentoMerchantTest2:TEST-PAYMENT-2017-02-01-14\\:02\\:05:199:2017-02-02T14\\:02\\:05+01\\:00:PKz2KML1";
        const key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
        const hmacValidator = new HmacValidator();
        const encrypted = hmacValidator.calculateHmac(data, key);
        expect(encrypted).toEqual("34oR8T1whkQWTv9P+SzKyp8zhusf9n0dpqrm9nsqSJs=");
    });

    it("should validate HMAC", function () {
        expect(hmacValidator.validateHMAC(notification.notificationItems![0], key)).toBeTruthy();
    });

    it("should have valid notification request item HMAC", function () {
        const expectedSign = "ipnxGCaUZ4l8TUW75a71/ghd2Fe5ffvX0pV4TLTntIc=";
        const notificationRequestItem = { NotificationRequestItem: {
            pspReference: "pspReference",
            originalReference: "originalReference",
            merchantAccountCode: "merchantAccount",
            merchantReference: "reference",
            amount: { currency: "EUR", value: 1000 },
            eventCode: "EVENT",
            success: "true",
            additionalData: { [ApiConstants.HMAC_SIGNATURE]: expectedSign }
        }} as unknown as NotificationItem;
        const notification = new NotificationRequest({
            live: "false",
            notificationItems: [notificationRequestItem]
        });
        const data = hmacValidator.getDataToSign(notification.notificationItems![0]);
        expect("pspReference:originalReference:merchantAccount:reference:1000:EUR:EVENT:true").toEqual(data);
        const encrypted = hmacValidator.calculateHmac(notification.notificationItems![0], key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notification.notificationItems![0], key)).toBeTruthy();
        notification.notificationItems![0].additionalData![ApiConstants.HMAC_SIGNATURE] = "notValidSign";
        expect(hmacValidator.validateHMAC(notification.notificationItems![0], key)).toBeFalsy();
    });
});