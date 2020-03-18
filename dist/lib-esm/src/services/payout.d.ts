import Client from "../client";
import Service from "../service";
declare class Payout extends Service {
    private readonly _storeDetailAndSubmitThirdParty;
    private readonly _confirmThirdParty;
    private readonly _declineThirdParty;
    private readonly _storeDetail;
    private readonly _submitThirdParty;
    private readonly _payout;
    constructor(client: Client);
    storeDetailAndSubmitThirdParty(request: IPayouts.StoreDetailAndSubmitRequest): Promise<IPayouts.StoreDetailAndSubmitResponse>;
    confirmThirdParty(request: IPayouts.ModifyRequest): Promise<IPayouts.ModifyResponse>;
    declineThirdParty(request: IPayouts.ModifyRequest): Promise<IPayouts.ModifyResponse>;
    storeDetail(request: IPayouts.StoreDetailRequest): Promise<IPayouts.StoreDetailResponse>;
    submitThirdparty(request: IPayouts.SubmitRequest): Promise<IPayouts.SubmitResponse>;
    payout(request: IPayouts.PayoutRequest): Promise<IPayouts.PayoutResponse>;
}
export default Payout;
