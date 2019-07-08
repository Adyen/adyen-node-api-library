import Client from "../client";
import Service from "../service";
import { ModifyRequest, ModifyResponse, StoreDetailAndSubmitRequest, StoreDetailAndSubmitResponse, StoreDetailRequest, StoreDetailResponse, SubmitRequest, SubmitResponse } from "../typings/payout";
declare class Payout extends Service {
    private readonly _storeDetailAndSubmitThirdParty;
    private readonly _confirmThirdParty;
    private readonly _declineThirdParty;
    private readonly _storeDetail;
    private readonly _submitThirdParty;
    constructor(client: Client);
    storeDetailAndSubmitThirdParty(request: StoreDetailAndSubmitRequest): Promise<StoreDetailAndSubmitResponse>;
    confirmThirdParty(request: ModifyRequest): Promise<ModifyResponse>;
    declineThirdParty(request: ModifyRequest): Promise<ModifyResponse>;
    storeDetail(request: StoreDetailRequest): Promise<StoreDetailResponse>;
    submitThirdparty(request: SubmitRequest): Promise<SubmitResponse>;
}
export default Payout;
