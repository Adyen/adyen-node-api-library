import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { ObjectSerializer, PaymentInstrument, PaymentInstrumentInfo, PaymentInstrumentUpdateRequest, TransactionRulesResponse } from "../../typings/balancePlatform/models";
import BalancePlatformResource from "../resource/balancePlaftformResource";

class PaymentInstruments extends Service {
    public async create(request: PaymentInstrumentInfo): Promise<PaymentInstrument> {
        const resource = new BalancePlatformResource(this, `/paymentInstruments`);
        const response = await getJsonResponse<PaymentInstrumentInfo, PaymentInstrument>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentInstrument");
    }

    public async retrieve(id: string): Promise<PaymentInstrument> {
        const resource = new BalancePlatformResource(this, `/paymentInstruments/${id}`);
        const response = await getJsonResponse<string, PaymentInstrument>(
            resource,
            '',
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentInstrument");
    }

    public async update(id: string, request: PaymentInstrumentUpdateRequest): Promise<PaymentInstrument> {
        const resource = new BalancePlatformResource(this, `/paymentInstruments/${id}`);
        const response = await getJsonResponse<PaymentInstrumentUpdateRequest, PaymentInstrument>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "PaymentInstrument");
    }

    public async listTransactionRules(id: string): Promise<TransactionRulesResponse> {
        const resource = new BalancePlatformResource(this, `/paymentInstruments/${id}/transactionRules`);
        const response = await getJsonResponse<string, TransactionRulesResponse>(
            resource,
            '',
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TransactionRulesResponse");
    }
}

export default PaymentInstruments;
