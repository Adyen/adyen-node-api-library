/*
 * Adyen NodeJS API Library
 * Copyright (c) 2023 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import {configurationWebhooks, acsWebhooks, reportWebhooks, transferWebhooks, transactionWebhooks, negativeBalanceWarningWebhooks, balanceWebhooks} from "../typings";

class BankingWebhookHandler {
    private readonly payload: string;

    public constructor(jsonPayload: string) {
        this.payload = JSON.parse(jsonPayload);
    }

    // Return generic webhook type
    public getGenericWebhook(): acsWebhooks.AuthenticationNotificationRequest
        | acsWebhooks.RelayedAuthenticationRequest
        | balanceWebhooks.BalanceAccountBalanceNotificationRequest
        | configurationWebhooks.AccountHolderNotificationRequest
        | configurationWebhooks.BalanceAccountNotificationRequest
        | configurationWebhooks.PaymentNotificationRequest
        | configurationWebhooks.SweepConfigurationNotificationRequest
        | configurationWebhooks.CardOrderNotificationRequest
        | negativeBalanceWarningWebhooks.NegativeBalanceCompensationWarningNotificationRequest
        | reportWebhooks.ReportNotificationRequest
        | transferWebhooks.TransferNotificationRequest
        | transactionWebhooks.TransactionNotificationRequestV4 {
        const type = this.payload["type"];

        if(Object.values(acsWebhooks.AuthenticationNotificationRequest.TypeEnum).includes(type)){
            return this.getAuthenticationNotificationRequest();
        }

        if(Object.values(configurationWebhooks.AccountHolderNotificationRequest.TypeEnum).includes(type)){
            return this.getAccountHolderNotificationRequest();
        }

        if(Object.values(configurationWebhooks.BalanceAccountNotificationRequest.TypeEnum).includes(type)){
            return this.getBalanceAccountBalanceNotificationRequest();
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

        if(Object.values(negativeBalanceWarningWebhooks.NegativeBalanceCompensationWarningNotificationRequest.TypeEnum).includes(type)){
            return this.getNegativeBalanceCompensationWarningNotificationRequest();
        }

        if(Object.values(reportWebhooks.ReportNotificationRequest.TypeEnum).includes(type)){
            return this.getReportNotificationRequest();
        }

        if(Object.values(transferWebhooks.TransferNotificationRequest.TypeEnum).includes(type)){
            return this.getTransferNotificationRequest();
        }

        if(Object.values(transactionWebhooks.TransactionNotificationRequestV4.TypeEnum).includes(type)){
            return this.getTransactionNotificationRequest();
        }

        if(Object.values(balanceWebhooks.BalanceAccountBalanceNotificationRequest.TypeEnum).includes(type)){
            return this.BalanceAccountBalanceNotificationRequest();
        }

        if(!type && this.payload["paymentInstrumentId"]){
            // ad-hoc fix for the relayed authentication request
            // if type is undefined but paymentInstrumentId is present then it is a relayedAuthenticationRequest
            return this.getRelayedAuthenticationRequest();
        }

        throw new Error("Could not parse the json payload: " + this.payload);
    }

    public getAuthenticationNotificationRequest(): acsWebhooks.AuthenticationNotificationRequest {
        return acsWebhooks.ObjectSerializer.deserialize(this.payload, "AuthenticationNotificationRequest");
    }

    public getRelayedAuthenticationRequest(): acsWebhooks.RelayedAuthenticationRequest {
        return acsWebhooks.ObjectSerializer.deserialize(this.payload, "RelayedAuthenticationRequest");
    }

    public getBalanceAccountBalanceNotificationRequest(): balanceWebhooks.BalanceAccountBalanceNotificationRequest {
        return balanceWebhooks.ObjectSerializer.deserialize(this.payload, "BalanceAccountBalanceNotificationRequest");
    }

    public getAccountHolderNotificationRequest(): configurationWebhooks.AccountHolderNotificationRequest {
        return configurationWebhooks.ObjectSerializer.deserialize(this.payload, "AccountHolderNotificationRequest");
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
    
    public getNegativeBalanceCompensationWarningNotificationRequest(): negativeBalanceWarningWebhooks.NegativeBalanceCompensationWarningNotificationRequest {
        return negativeBalanceWarningWebhooks.ObjectSerializer.deserialize(this.payload, "NegativeBalanceCompensationWarningNotificationRequest");
    }

    public getReportNotificationRequest(): reportWebhooks.ReportNotificationRequest {
        return reportWebhooks.ObjectSerializer.deserialize(this.payload, "ReportNotificationRequest");
    }

    public getTransferNotificationRequest(): transferWebhooks.TransferNotificationRequest {
        return transferWebhooks.ObjectSerializer.deserialize(this.payload, "TransferNotificationRequest");
    }

    public getTransactionNotificationRequest(): transactionWebhooks.TransactionNotificationRequestV4 {
        return transactionWebhooks.ObjectSerializer.deserialize(this.payload, "TransactionNotificationRequestV4");
    }

    public BalanceAccountBalanceNotificationRequest(): balanceWebhooks.BalanceAccountBalanceNotificationRequest {
        return balanceWebhooks.ObjectSerializer.deserialize(this.payload, "BalanceAccountBalanceNotificationRequest");
    }
}

export default BankingWebhookHandler;