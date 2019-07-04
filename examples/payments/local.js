const TerminalAPI = require("./terminalApi");
const terminalAPI = new TerminalAPI();

const localPayment = async () => {
    const paymentsResponse = await terminalAPI.paymentRequestLocal();

    console.log("Response [result:%s data:%s]",
        paymentsResponse.SaleToPOIResponse.PaymentResponse.Response.Result,
        paymentsResponse.SaleToPOIResponse.PaymentResponse.Response.AdditionalResponse
    );
};

