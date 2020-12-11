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
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
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

class Payouts extends Service {
    public readonly storeDetailAndSubmitThirdParty: StoreDetailAndSubmitThirdParty;
    public readonly confirmThirdParty: ConfirmThirdParty;
    public readonly declineThirdParty: DeclineThirdParty;
    public readonly storeDetail: StoreDetail;
    public readonly submitThirdParty: SubmitThirdParty;
    public readonly payout: PayoutResource;

    public constructor(client: Client) {
        super(client);

        this.storeDetailAndSubmitThirdParty = new StoreDetailAndSubmitThirdParty(this);
        this.confirmThirdParty = new ConfirmThirdParty(this);
        this.declineThirdParty = new DeclineThirdParty(this);
        this.storeDetail = new StoreDetail(this);
        this.submitThirdParty = new SubmitThirdParty(this);
        this.payout = new PayoutResource(this);
    }
}

export default Payouts;
