import Service from "../../../service";
import Resource from "../../resource";
declare type Endpoints = "/accountHolderBalance" | "/accountHolderTransactionList" | "/payoutAccountHolder" | "/transferFunds" | "/refundFundsTransfer" | "/setupBeneficiary" | "/refundNotPaidOutTransfers";
declare class PlatformsFund extends Resource {
    constructor(service: Service, endpoint: Endpoints);
}
export default PlatformsFund;
