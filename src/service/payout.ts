/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import Client from "../client";
import Service from "../service";
import DeclineThirdParty from "./resource/payout/declineThirdParty";
import StoreDetail from "./resource/payout/storeDetail";
import SubmitThirdParty from "./resource/payout/submitThirdParty";
import ConfirmThirdParty from "./resource/payout/confirmThirdParty";
import StoreDetailAndSubmitThirdParty from "./resource/payout/storeDetailAndSubmitThirdParty";
import {
    ModifyRequest,
    ModifyResponse,
    StoreDetailAndSubmitRequest,
    StoreDetailAndSubmitResponse, StoreDetailRequest, StoreDetailResponse, SubmitRequest, SubmitResponse
} from "../typings/payout";
import getJsonResponse from "../helpers/getJsonResponse";

class Payout extends Service {
    private readonly _storeDetailAndSubmitThirdParty: StoreDetailAndSubmitThirdParty;
    private readonly _confirmThirdParty: ConfirmThirdParty;
    private readonly _declineThirdParty: DeclineThirdParty;
    private readonly _storeDetail: StoreDetail;
    private readonly _submitThirdParty: SubmitThirdParty;

    public constructor(client: Client) {
        super(client);

        this._storeDetailAndSubmitThirdParty = new StoreDetailAndSubmitThirdParty(this);
        this._confirmThirdParty = new ConfirmThirdParty(this);
        this._declineThirdParty = new DeclineThirdParty(this);
        this._storeDetail = new StoreDetail(this);
        this._submitThirdParty = new SubmitThirdParty(this);
    }

    public async storeDetailAndSubmitThirdParty(request: StoreDetailAndSubmitRequest): Promise<StoreDetailAndSubmitResponse> {
        return await getJsonResponse<StoreDetailAndSubmitRequest, StoreDetailAndSubmitResponse>(
            this._storeDetailAndSubmitThirdParty,
            request
        );
    }

    public async confirmThirdParty(request: ModifyRequest): Promise<ModifyResponse> {
        return await getJsonResponse<ModifyRequest, ModifyResponse>(
            this._confirmThirdParty,
            request
        );
    }

    public async declineThirdParty(request: ModifyRequest): Promise<ModifyResponse> {
        return await getJsonResponse<ModifyRequest, ModifyResponse>(
            this._declineThirdParty,
            request
        );
    }

    public async storeDetail(request: StoreDetailRequest): Promise<StoreDetailResponse> {
        return await getJsonResponse<StoreDetailRequest, StoreDetailResponse>(
            this._storeDetail,
            request
        );
    }

    public async submitThirdparty(request: SubmitRequest): Promise<SubmitResponse> {
        return await getJsonResponse<SubmitRequest, SubmitResponse>(
            this._submitThirdParty,
            request
        );
    }
}

export default Payout;