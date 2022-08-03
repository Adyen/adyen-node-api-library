import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { ObjectSerializer, PaymentInstrumentGroup, PaymentInstrumentGroupInfo, TransactionRulesResponse } from "../../typings/balancePlatform/models";
import BalancePlatformResource from "../resource/balancePlaftformResource";

class PaymentInstrumentGroups extends Service {
    public async create(request: PaymentInstrumentGroupInfo): Promise<PaymentInstrumentGroup> {
        const resource = new BalancePlatformResource(this, `/paymentInstrumentGroups`);
        const response = await getJsonResponse<PaymentInstrumentGroupInfo, PaymentInstrumentGroup>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentInstrumentGroup");
    }

    public async retrieve(id: string): Promise<PaymentInstrumentGroup> {
        const resource = new BalancePlatformResource(this, `/paymentInstrumentGroups/${id}`);
        const response = await getJsonResponse<string, PaymentInstrumentGroup>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentInstrumentGroup");
    }

    public async listTransactionRules(id: string): Promise<TransactionRulesResponse> {
        const resource = new BalancePlatformResource(this, `/paymentInstrumentGroups/${id}/transactionRules`);
        const response = await getJsonResponse<string, TransactionRulesResponse>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TransactionRulesResponse");
    }
}

export default PaymentInstrumentGroups;

