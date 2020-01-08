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

    public storeDetailAndSubmitThirdParty(request: IPayouts.StoreDetailAndSubmitRequest): Promise<IPayouts.StoreDetailAndSubmitResponse> {
        return getJsonResponse<IPayouts.StoreDetailAndSubmitRequest, IPayouts.StoreDetailAndSubmitResponse>(
            this._storeDetailAndSubmitThirdParty,
            request
        );
    }

    public confirmThirdParty(request: IPayouts.ModifyRequest): Promise<IPayouts.ModifyResponse> {
        return getJsonResponse<IPayouts.ModifyRequest, IPayouts.ModifyResponse>(
            this._confirmThirdParty,
            request
        );
    }

    public declineThirdParty(request: IPayouts.ModifyRequest): Promise<IPayouts.ModifyResponse> {
        return getJsonResponse<IPayouts.ModifyRequest, IPayouts.ModifyResponse>(
            this._declineThirdParty,
            request
        );
    }

    public storeDetail(request: IPayouts.StoreDetailRequest): Promise<IPayouts.StoreDetailResponse> {
        return getJsonResponse<IPayouts.StoreDetailRequest, IPayouts.StoreDetailResponse>(
            this._storeDetail,
            request
        );
    }

    public submitThirdparty(request: IPayouts.SubmitRequest): Promise<IPayouts.SubmitResponse> {
        return getJsonResponse<IPayouts.SubmitRequest, IPayouts.SubmitResponse>(
            this._submitThirdParty,
            request
        );
    }

    public payout(request: IPayouts.PayoutRequest): Promise<IPayouts.PayoutResponse> {
        return getJsonResponse<IPayouts.PayoutRequest, IPayouts.PayoutResponse>(
            this._payout,
            request
        );
    }
}

export default Payout;