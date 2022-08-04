import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { ObjectSerializer, TransactionRule, TransactionRuleInfo, TransactionRuleResponse } from "../../typings/balancePlatform/models";
import BalancePlatformResource from "../resource/balancePlaftformResource";

// @TODO PW-7013: make this change at the spec level?
export type TransactionRuleInfoUpdate = Partial<TransactionRuleInfo>;

class TransactionRules extends Service {
    public async create(request: TransactionRuleInfo): Promise<TransactionRule> {
        const resource = new BalancePlatformResource(this, "/transactionRules");
        const response = await getJsonResponse<TransactionRuleInfo, TransactionRule>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TransactionRule");
    }
    public async retrieve(transactionRuleId: string): Promise<TransactionRuleResponse> {
        const resource = new BalancePlatformResource(this, `/transactionRules/${transactionRuleId}`);
        const response = await getJsonResponse<string, TransactionRuleResponse>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TransactionRuleResponse");
    }

    public async update(transactionRuleId: string, request: TransactionRuleInfoUpdate): Promise<TransactionRule> {
        const resource = new BalancePlatformResource(this, `/transactionRules/${transactionRuleId}`);
        const response = await getJsonResponse<TransactionRuleInfoUpdate, TransactionRule>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TransactionRule");
    }

    public async delete(transactionRuleId: string): Promise<TransactionRule> {
        const resource = new BalancePlatformResource(this, `/transactionRules/${transactionRuleId}`);
        const response = await getJsonResponse<string, TransactionRule>(
            resource,
            "",
            { method: "DELETE" }
        );
        return ObjectSerializer.deserialize(response, "TransactionRule");
    }
}

export default TransactionRules;
