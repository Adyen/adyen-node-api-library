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
import PayoutResource from "./resource/payout/payout";
import StoreDetailAndSubmitThirdParty from "./resource/payout/storeDetailAndSubmitThirdParty";
import {
    ModifyRequest,
    ModifyResponse,
    StoreDetailAndSubmitRequest,
    StoreDetailAndSubmitResponse, StoreDetailRequest, StoreDetailResponse, SubmitRequest, SubmitResponse, PayoutRequest, PayoutResponse
} from "../typings/payout";
import getJsonResponse from "../helpers/getJsonResponse";

class Payout extends Service {
    private readonly _storeDetailAndSubmitThirdParty: StoreDetailAndSubmitThirdParty;
    private readonly _confirmThirdParty: ConfirmThirdParty;
    private readonly _declineThirdParty: DeclineThirdParty;
    private readonly _storeDetail: StoreDetail;
    private readonly _submitThirdParty: SubmitThirdParty;
    private readonly _payout: PayoutResource;

    public constructor(client: Client) {
        super(client);

        this._storeDetailAndSubmitThirdParty = new StoreDetailAndSubmitThirdParty(this);
        this._confirmThirdParty = new ConfirmThirdParty(this);
        this._declineThirdParty = new DeclineThirdParty(this);
        this._storeDetail = new StoreDetail(this);
        this._submitThirdParty = new SubmitThirdParty(this);
        this._payout = new PayoutResource(this);
    }

    public storeDetailAndSubmitThirdParty(request: StoreDetailAndSubmitRequest): Promise<StoreDetailAndSubmitResponse> {
        return getJsonResponse<StoreDetailAndSubmitRequest, StoreDetailAndSubmitResponse>(
            this._storeDetailAndSubmitThirdParty,
            request
        );
    }

    public confirmThirdParty(request: ModifyRequest): Promise<ModifyResponse> {
        return getJsonResponse<ModifyRequest, ModifyResponse>(
            this._confirmThirdParty,
            request
        );
    }

    public declineThirdParty(request: ModifyRequest): Promise<ModifyResponse> {
        return getJsonResponse<ModifyRequest, ModifyResponse>(
            this._declineThirdParty,
            request
        );
    }

    public storeDetail(request: StoreDetailRequest): Promise<StoreDetailResponse> {
        return getJsonResponse<StoreDetailRequest, StoreDetailResponse>(
            this._storeDetail,
            request
        );
    }

    public submitThirdparty(request: SubmitRequest): Promise<SubmitResponse> {
        return getJsonResponse<SubmitRequest, SubmitResponse>(
            this._submitThirdParty,
            request
        );
    }

    public payout(request: PayoutRequest): Promise<PayoutResponse> {
        return getJsonResponse<PayoutRequest, PayoutResponse>(
          this._payout,
          request
        );
    }
}

export default Payout;