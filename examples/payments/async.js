const TerminalAPI = require("./terminalApi");
const terminalAPI = new TerminalAPI();

const asyncPayment = async () => {
    console.log("Starting transaction...");
    const sentRequest = await terminalAPI.paymentRequestAsync();

    console.log("Request sent. Waiting to retrieve status...");
    setTimeout(async () => {
        console.log("Retrieving status...");
        const statusResponse = await terminalAPI.transactionStatusRequestSync(sentRequest);

        const {TransactionStatusResponse} = statusResponse.SaleToPOIResponse;
        if (TransactionStatusResponse && TransactionStatusResponse.Response.Result === 'Success') {
            console.log("Response [result:%s data:%s]",
                statusResponse.SaleToPOIResponse.TransactionStatusResponse.RepeatedMessageResponse.RepeatedResponseMessageBody.PaymentResponse.Response.Result,
                statusResponse.SaleToPOIResponse.TransactionStatusResponse.RepeatedMessageResponse.RepeatedResponseMessageBody.PaymentResponse.Response.AdditionalResponse
            );
        } else {
            console.log("Response [result:%s]", statusResponse.SaleToPOIResponse.TransactionStatusResponse.Response.Result)
        }
    }, 10000);
}

