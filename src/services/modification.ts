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
import AdjustAuthorisation from "./resource/modification/adjustAuthorisation";
import Cancel from "./resource/modification/cancel";
import CancelOrRefund from "./resource/modification/cancelOrRefund";
import Capture from "./resource/modification/capture";
import Refund from "./resource/modification/refund";
import TechnicalCancel from "./resource/modification/technicalCancel";

class Modification extends Service {
    public readonly cancelOrRefund: CancelOrRefund;
    public readonly cancel: Cancel;
    public readonly capture: Capture;
    public readonly refund: Refund;
    public readonly adjustAuthorisation: AdjustAuthorisation;
    public readonly technicalCancel: TechnicalCancel;

    public constructor(client: Client) {
        super(client);
        this.capture = new Capture(this);
        this.cancelOrRefund = new CancelOrRefund(this);
        this.cancel = new Cancel(this);
        this.refund = new Refund(this);
        this.adjustAuthorisation = new AdjustAuthorisation(this);
        this.technicalCancel = new TechnicalCancel(this);
    }

}

export default Modification;
