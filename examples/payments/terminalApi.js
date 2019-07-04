const {Client, Config, TerminalCloudAPI, TerminalLocalAPI} = require("../../src");

class TerminalApi {
    terminalCloudAPI;
    terminalLocalAPI;

    constructor() {
        const merchantAccount = "[MERCHANT ACCOUNT]";
        const xApiKey = "[X_API_KEY]";

        const config = new Config();
        config.merchantAccount = merchantAccount;
        config.apiKey = xApiKey; // alternatively you can authenticate with your username + password
        // config.username = "[USERNAME]"
        // config.password = "[PASSWORD]"


        const client = new Client({config});
        client.setEnvironment("[LIVE | TEST]");

        this.terminalCloudAPI = new TerminalCloudAPI(client);

        const localConfig = new Config();
        localConfig.merchantAccount = merchantAccount;
        localConfig.apiKey = xApiKey; // or username + password
        localConfig.terminalApiLocalEndpoint = "[PROTOCOL]//[TERMINAL_IP]:[PORT]";

        const localClient = new Client({config: localConfig});
        this.terminalLocalAPI = new TerminalLocalAPI(localClient);
    }

    async paymentRequestLocal() {
        const paymentsRequest = this.createPaymentRequest();
        const securityKey = {
            keyVersion: 1,
            adyenCryptoVersion: 1,
            keyIdentifier: "[CRYPTO_KEY_IDENTIFIER]",
            passphrase: "[CRYPTO_KEY_PASSPHRASE]"
        };
        return this.terminalLocalAPI.request(paymentsRequest, securityKey);
    }

    paymentRequestSync() {
        const paymentsRequest = this.createPaymentRequest();

        console.log(`Payment [poiId:${paymentsRequest.SaleToPOIRequest.MessageHeader.POIID} serviceId:${paymentsRequest.SaleToPOIRequest.MessageHeader.ServiceID} saleId:${paymentsRequest.SaleToPOIRequest.MessageHeader.SaleID} amount:${paymentsRequest.SaleToPOIRequest.PaymentRequest.PaymentTransaction.AmountsReq.RequestedAmount} ${paymentsRequest.SaleToPOIRequest.PaymentRequest.PaymentTransaction.AmountsReq.Currency}]`)

        return this.terminalCloudAPI.sync(paymentsRequest);
    }

    async paymentRequestAsync() {
        const paymentsRequest = this.createPaymentRequest();

        console.log(`Payment [poiId:${paymentsRequest.SaleToPOIRequest.MessageHeader.POIID} serviceId:${paymentsRequest.SaleToPOIRequest.MessageHeader.ServiceID} saleId:${paymentsRequest.SaleToPOIRequest.MessageHeader.SaleID} amount:${paymentsRequest.SaleToPOIRequest.PaymentRequest.PaymentTransaction.AmountsReq.RequestedAmount} ${paymentsRequest.SaleToPOIRequest.PaymentRequest.PaymentTransaction.AmountsReq.Currency}]`);

        const response = await this.terminalCloudAPI.async(paymentsRequest);

        return response === "ok" ? paymentsRequest : undefined;
    }

    createPaymentRequest() {
        const saleToPOIRequest = {};

        const messageHeader = this.createMessageHeader("Payment");
        saleToPOIRequest.MessageHeader = messageHeader;

        const paymentRequest = {};

        const saleData = {};
        const transactionIdentification = {};
        transactionIdentification.TransactionID = "[TRANSACTION_ID]";
        transactionIdentification.TimeStamp = new Date().toISOString();
        saleData.SaleTransactionID = transactionIdentification;

        const paymentTransation = {};
        const amountsReq = {};
        amountsReq.Currency = "EUR";
        amountsReq.RequestedAmount = 1;
        paymentTransation.AmountsReq = amountsReq;

        paymentRequest.SaleData = saleData;
        paymentRequest.PaymentTransaction = paymentTransation;

        saleToPOIRequest.PaymentRequest = paymentRequest;

        const terminalApiRequest = {};
        terminalApiRequest.SaleToPOIRequest = saleToPOIRequest;

        return terminalApiRequest;
    }

    createMessageHeader(messageCategoryType) {
        const id = new Date().getTime() % 1000000000;

        const messageHeader = {};
        messageHeader.ProtocolVersion = "3.0";
        messageHeader.MessageClass = "Service";
        messageHeader.MessageCategory = messageCategoryType;
        messageHeader.MessageType = "Request";
        messageHeader.SaleID = id.toString();
        messageHeader.ServiceID = id.toString();
        messageHeader.POIID = "[POI_ID]";

        return messageHeader;
    }

    createTransactionStatusRequest(paymentRequest) {
        const saleToPOIRequest = {};

        const messageHeader = this.createMessageHeader("TransactionStatus");
        saleToPOIRequest.MessageHeader = messageHeader;

        const transactionStatusRequest = {};
        const messageReference = {};
        messageReference.MessageCategory = "Payment";
        messageReference.SaleID = paymentRequest.SaleToPOIRequest.MessageHeader.SaleID;
        messageReference.ServiceID = paymentRequest.SaleToPOIRequest.MessageHeader.ServiceID;

        transactionStatusRequest.MessageReference = messageReference;

        saleToPOIRequest.TransactionStatusRequest = transactionStatusRequest;

        const terminalAPIRequest = {};
        terminalAPIRequest.SaleToPOIRequest = saleToPOIRequest;

        return terminalAPIRequest;
    }

    transactionStatusRequestSync(terminalAPIRequest) {
        const transactionStatusRequest = this.createTransactionStatusRequest(terminalAPIRequest);
        return this.terminalCloudAPI.sync(transactionStatusRequest);
    }
}

module.exports = TerminalApi;
