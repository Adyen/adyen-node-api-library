import Client from "../client";
import Service from "../service";
import { ApplicationInfo } from "../typings/applicationInfo";
import { IRequest } from "../typings/requestOptions";
interface AppInfo {
    applicationInfo?: ApplicationInfo;
}
declare type GenericRequest<T> = T & AppInfo;
declare class Modification extends Service {
    private readonly _cancelOrRefund;
    private readonly _cancel;
    private readonly _capture;
    private readonly _refund;
    private readonly _adjustAuthorisation;
    private readonly _technicalCancel;
    constructor(client: Client);
    capture(captureRequest: GenericRequest<IPayments.ModificationRequest>, requestOptions?: IRequest.Options): Promise<IPayments.ModificationResult>;
    cancelOrRefund(cancelOrRefundRequest: GenericRequest<IPayments.ModificationRequest>, requestOptions?: IRequest.Options): Promise<IPayments.ModificationResult>;
    refund(refundRequest: GenericRequest<IPayments.ModificationRequest>, requestOptions?: IRequest.Options): Promise<IPayments.ModificationResult>;
    cancel(cancelRequest: GenericRequest<IPayments.ModificationRequest>, requestOptions?: IRequest.Options): Promise<IPayments.ModificationResult>;
    technicalCancel(technicalCancelRequest: GenericRequest<IPayments.ModificationRequest>, requestOptions?: IRequest.Options): Promise<IPayments.ModificationResult>;
    adjustAuthorisation(adjustAuthorisationRequest: GenericRequest<IPayments.ModificationRequest>, requestOptions?: IRequest.Options): Promise<IPayments.ModificationResult>;
}
export default Modification;
