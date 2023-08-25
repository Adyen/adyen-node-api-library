/*
 * Adyen NodeJS API Library
 * Copyright (c) 2023 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import {configurationWebhooks} from "../typings";
import {acsWebhooks} from "../typings"
import {reportWebhooks} from "../typings";
import {transferWebhooks} from "../typings";

class BankingWebhookHandler {
    private readonly payload: string;

    public constructor(jsonPayload: string) {
        this.payload = JSON.parse(jsonPayload)
    }

    // Return generic webhook type
    public getGenericWebhook(): acsWebhooks.AuthenticationNotificationRequest
        | configurationWebhooks.AccountHolderNotificationRequest
        | configurationWebhooks.BalanceAccountNotificationRequest
        | configurationWebhooks.PaymentNotificationRequest
        | configurationWebhooks.SweepConfigurationNotificationRequest
        | configurationWebhooks.CardOrderNotificationRequest
        | reportWebhooks.ReportNotificationRequest
        | transferWebhooks.TransferNotificationRequest {
        const type = this.payload['type'];

        if(Object.values(acsWebhooks.AuthenticationNotificationRequest.TypeEnum).includes(type)){
            return this.getAuthenticationNotificationRequest();
        }

        if(Object.values(configurationWebhooks.AccountHolderNotificationRequest.TypeEnum).includes(type)){
            return this.getAccountHolderNotificationRequest();
        }

        if(Object.values(configurationWebhooks.BalanceAccountNotificationRequest.TypeEnum).includes(type)){
            return this.getBalanceAccountNotificationRequest();
        }

        if(Object.values(configurationWebhooks.CardOrderNotificationRequest.TypeEnum).includes(type)){
            return this.getCardOrderNotificationRequest();
        }

        if(Object.values(configurationWebhooks.PaymentNotificationRequest.TypeEnum).includes(type)){
            return this.getPaymentNotificationRequest();
        }

        if(Object.values(configurationWebhooks.SweepConfigurationNotificationRequest.TypeEnum).includes(type)){
            return this.getSweepConfigurationNotificationRequest();
        }

        if(Object.values(reportWebhooks.ReportNotificationRequest.TypeEnum).includes(type)){
            return this.getReportNotificationRequest();
        }

        if(Object.values(transferWebhooks.TransferNotificationRequest.TypeEnum).includes(type)){
            return this.getTransferNotificationRequest();
        }

        throw new Error("Could not parse the json payload: " + this.payload)
    }

    public getAuthenticationNotificationRequest(): acsWebhooks.AuthenticationNotificationRequest {
        return acsWebhooks.ObjectSerializer.deserialize(this.payload, "AuthenticationNotificationRequest");
    }

    public getAccountHolderNotificationRequest(): configurationWebhooks.AccountHolderNotificationRequest {
        return configurationWebhooks.ObjectSerializer.deserialize(this.payload, "AccountHolderNotificationRequest");
    }

    public getBalanceAccountNotificationRequest(): configurationWebhooks.BalanceAccountNotificationRequest {
        return configurationWebhooks.ObjectSerializer.deserialize(this.payload, "BalanceAccountNotificationRequest");
    }

    public getCardOrderNotificationRequest(): configurationWebhooks.CardOrderNotificationRequest {
        return configurationWebhooks.ObjectSerializer.deserialize(this.payload, "CardOrderNotificationRequest");
    }

    public getPaymentNotificationRequest(): configurationWebhooks.PaymentNotificationRequest {
        return configurationWebhooks.ObjectSerializer.deserialize(this.payload, "PaymentNotificationRequest");
    }

    public getSweepConfigurationNotificationRequest(): configurationWebhooks.SweepConfigurationNotificationRequest {
        return configurationWebhooks.ObjectSerializer.deserialize(this.payload, "SweepConfigurationNotificationRequest");
    }

    public getReportNotificationRequest(): reportWebhooks.ReportNotificationRequest {
        return reportWebhooks.ObjectSerializer.deserialize(this.payload, "ReportNotificationRequest");
    }

    public getTransferNotificationRequest(): transferWebhooks.TransferNotificationRequest {
        return transferWebhooks.ObjectSerializer.deserialize(this.payload, "TransferNotificationRequest");
    }
}

export default BankingWebhookHandler;