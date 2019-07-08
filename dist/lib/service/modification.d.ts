import Client from "../client";
import Service from "../service";
import { ModificationRequest, ModificationResult } from "../typings/payments";
import { RequestOptions } from "../typings/requestOptions";
declare class Modification extends Service {
    private readonly _cancelOrRefund;
    private readonly _cancel;
    private readonly _capture;
    private readonly _refund;
    private readonly _adjustAuthorisation;
    private readonly _technicalCancel;
    constructor(client: Client);
    capture(captureRequest: ModificationRequest, requestOptions?: RequestOptions): Promise<ModificationResult>;
    cancelOrRefund(cancelOrRefundRequest: ModificationRequest, requestOptions?: RequestOptions): Promise<ModificationResult>;
    refund(refundRequest: ModificationRequest, requestOptions?: RequestOptions): Promise<ModificationResult>;
    cancel(cancelRequest: ModificationRequest, requestOptions?: RequestOptions): Promise<ModificationResult>;
    technicalCancel(technicalCancelRequest: ModificationRequest, requestOptions?: RequestOptions): Promise<ModificationResult>;
    adjustAuthorisation(adjustAuthorisationRequest: ModificationRequest, requestOptions?: RequestOptions): Promise<ModificationResult>;
}
export default Modification;
