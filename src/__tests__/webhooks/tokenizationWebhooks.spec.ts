import { TokenizationAlreadyExistingDetailsNotificationRequest } from "../../typings/tokenizationWebhooks/tokenizationAlreadyExistingDetailsNotificationRequest";
import { TokenizationCreatedDetailsNotificationRequest } from "../../typings/tokenizationWebhooks/tokenizationCreatedDetailsNotificationRequest";
import { TokenizationDisabledDetailsNotificationRequest } from "../../typings/tokenizationWebhooks/tokenizationDisabledDetailsNotificationRequest";
import { TokenizationUpdatedDetailsNotificationRequest } from "../../typings/tokenizationWebhooks/tokenizationUpdatedDetailsNotificationRequest";
import { TokenizationWebhooksHandler } from "../../typings/tokenizationWebhooks/tokenizationWebhooksHandler";

describe("TokenizationWebhooksHandler", () => {
    it("should deserialize TokenizationAlreadyExistingDetailsNotificationRequest", () => {
        const json = {
            "createdAt": "2025-06-30T16:40:23+02:00",
            "eventId": "QBQQ9DLNRHHKGK38",
            "environment": "test",
            "data": {
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
                "type": "visastandarddebit",
                "operation": "alreadyExisting",
                "shopperReference": "YOUR_SHOPPER_REFERENCE"
            },
            "type": "recurring.token.alreadyExisting"
        };
        const handler = new TokenizationWebhooksHandler(JSON.stringify(json));
        const request = handler.getTokenizationAlreadyExistingDetailsNotificationRequest();
        expect(request).toBeTruthy();
        expect(request.type).toBe(TokenizationAlreadyExistingDetailsNotificationRequest.TypeEnum.RecurringTokenAlreadyExisting);
        expect(request.data.type).toBe("visastandarddebit");
        // test GenericWebhook
        const genericWebhook = handler.getGenericWebhook();
        expect(genericWebhook).toBeInstanceOf(TokenizationAlreadyExistingDetailsNotificationRequest);
        expect(genericWebhook.type).toBe("recurring.token.alreadyExisting");
    });

    it("should deserialize TokenizationCreatedDetailsNotificationRequest", () => {
        const json = {
            "createdAt": "2025-06-30T16:40:23+02:00",
            "eventId": "QBQQ9DLNRHHKGK38",
            "environment": "test",
            "data": {
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
                "type": "visastandarddebit",
                "operation": "created",
                "shopperReference": "YOUR_SHOPPER_REFERENCE"
            },
            "type": "recurring.token.created"
        };
        const handler = new TokenizationWebhooksHandler(JSON.stringify(json));
        const request = handler.getTokenizationCreatedDetailsNotificationRequest();
        expect(request).toBeTruthy();
        expect(request.type).toBe(TokenizationCreatedDetailsNotificationRequest.TypeEnum.RecurringTokenCreated);
        expect(request.data.type).toBe("visastandarddebit");
        // test GenericWebhook
        const genericWebhook = handler.getGenericWebhook();
        expect(genericWebhook).toBeInstanceOf(TokenizationCreatedDetailsNotificationRequest);
        expect(genericWebhook.type).toBe("recurring.token.created");
    });

    it("should deserialize TokenizationUpdatedDetailsNotificationRequest", () => {
        const json = {
            "createdAt": "2025-06-30T16:40:23+02:00",
            "eventId": "QBQQ9DLNRHHKGK38",
            "environment": "test",
            "data": {
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
                "type": "visastandarddebit",
                "operation": "updated",
                "shopperReference": "YOUR_SHOPPER_REFERENCE"
            },
            "type": "recurring.token.updated"
        };
        const handler = new TokenizationWebhooksHandler(JSON.stringify(json));
        const request = handler.getTokenizationUpdatedDetailsNotificationRequest();
        expect(request).toBeTruthy();
        expect(request.type).toBe(TokenizationUpdatedDetailsNotificationRequest.TypeEnum.RecurringTokenUpdated);
        expect(request.data.type).toBe("visastandarddebit");
        // test GenericWebhook
        const genericWebhook = handler.getGenericWebhook();
        expect(genericWebhook).toBeInstanceOf(TokenizationUpdatedDetailsNotificationRequest);
        expect(genericWebhook.type).toBe("recurring.token.updated");
    });

    it("should deserialize TokenizationDisabledDetailsNotificationRequest", () => {
        const json = {
            "createdAt": "2025-06-30T16:40:23+02:00",
            "eventId": "QBQQ9DLNRHHKGK38",
            "environment": "test",
            "data": {
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
                "type": "visastandarddebit",
                "shopperReference": "YOUR_SHOPPER_REFERENCE"
            },
            "type": "recurring.token.disabled"
        };
        const handler = new TokenizationWebhooksHandler(JSON.stringify(json));
        const request = handler.getTokenizationDisabledDetailsNotificationRequest();
        expect(request).toBeTruthy();
        expect(request.type).toBe(TokenizationDisabledDetailsNotificationRequest.TypeEnum.RecurringTokenDisabled);
        expect(request.data.type).toBe("visastandarddebit");
        // test GenericWebhook
        const genericWebhook = handler.getGenericWebhook();
        expect(genericWebhook).toBeInstanceOf(TokenizationDisabledDetailsNotificationRequest);
        expect(genericWebhook.type).toBe("recurring.token.disabled");
    });

    it("should throw error for unknown type", () => {
        const json = {
            type: "unknown.type",
            data: {}
        };
        const handler = new TokenizationWebhooksHandler(JSON.stringify(json));
        expect(() => handler.getGenericWebhook()).toThrow("Could not parse the json payload");
    });

    it("should throw SyntaxError for invalid JSON", () => {
        expect(() => new TokenizationWebhooksHandler("{ invalid json }")).toThrow(SyntaxError);
    });
});