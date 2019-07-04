const TerminalAPI = require("./terminalApi");
const terminalAPI = new TerminalAPI();

const syncPayment = async () => {
    console.log("Starting transaction...");
    const paymentsResponse = await terminalAPI.paymentRequestSync();

    console.log("Response [result:%s data:%s]",
        paymentsResponse.SaleToPOIResponse.PaymentResponse.Response.Result,
        paymentsResponse.SaleToPOIResponse.PaymentResponse.Response.AdditionalResponse
    );
};

