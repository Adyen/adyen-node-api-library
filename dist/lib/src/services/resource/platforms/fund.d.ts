import Service from "../../../service";
import Resource from "../../resource";
declare enum Endpoints {
    accountHolderBalance = "/accountHolderBalance",
    accountHolderTransactionList = "/accountHolderTransactionList",
    payoutAccountHolder = "/payoutAccountHolder",
    transferFunds = "/transferFunds",
    refundFundsTransfer = "/refundFundsTransfer",
    setupBeneficiary = "/setupBeneficiary",
    refundNotPaidOutTransfers = "/refundNotPaidOutTransfers"
}
declare class PlatformsFund extends Resource {
    constructor(service: Service, endpoint: Endpoints);
}
export default PlatformsFund;
