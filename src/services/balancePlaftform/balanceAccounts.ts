import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { BalanceAccount, BalanceAccountInfo, BalanceAccountUpdateRequest, BalanceSweepConfigurationsResponse, ObjectSerializer, PaginatedPaymentInstrumentsResponse, SweepConfigurationV2 } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import BalancePlatformResource from "../resource/balancePlaftformResource";

// @TODO PW-7013: make this change at the spec level?
export type SweepConfigurationV2Create = Omit<SweepConfigurationV2, 'id'>;
export type SweepConfigurationV2Update = Partial<SweepConfigurationV2>;

class BalanceAccounts extends Service {
    public async create(request: BalanceAccountInfo): Promise<BalanceAccount> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts`);
        const response = await getJsonResponse<BalanceAccountInfo, BalanceAccount>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "BalanceAccount");
    }

    public async listSweeps(balanceAccountId: string, requestOptions?: IRequest.Options): Promise<BalanceSweepConfigurationsResponse> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts/${balanceAccountId}/sweeps`);
        const response = await getJsonResponse<string, BalanceSweepConfigurationsResponse>(
            resource,
            '',
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BalanceSweepConfigurationsResponse");
    }

    public async createSweep(balanceAccountId: string, request: SweepConfigurationV2Create): Promise<SweepConfigurationV2> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts/${balanceAccountId}/sweeps`);
        const response = await getJsonResponse<SweepConfigurationV2Create, SweepConfigurationV2>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "SweepConfigurationV2");
    }

    public async deleteSweep(balanceAccountId: string, sweepId: string): Promise<void> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`);
        await getJsonResponse<string, string>(
            resource,
            '',
            { method: "DELETE" }
        );
    }

    public async retrieveSweep(balanceAccountId: string, sweepId: string): Promise<SweepConfigurationV2> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`);
        const response = await getJsonResponse<string, SweepConfigurationV2>(
            resource,
            '',
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "SweepConfigurationV2");
    }

    public async updateSweep(balanceAccountId: string, sweepId: string, request: SweepConfigurationV2Update): Promise<SweepConfigurationV2> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`);
        const response = await getJsonResponse<SweepConfigurationV2Update, SweepConfigurationV2>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "SweepConfigurationV2");
    }

    public async retrieve(id: string): Promise<BalanceAccount> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts/${id}`);
        const response = await getJsonResponse<string, BalanceAccount>(
            resource,
            '',
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BalanceAccount");
    }

    public async update(id: string, request: BalanceAccountUpdateRequest): Promise<BalanceAccount> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts/${id}`);
        const response = await getJsonResponse<BalanceAccountUpdateRequest, BalanceAccount>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "BalanceAccount");
    }

    public async listPaymentInstruments(id: string, requestOptions?: IRequest.Options): Promise<PaginatedPaymentInstrumentsResponse> {
        const resource = new BalancePlatformResource(this, `/balanceAccounts/${id}/paymentInstruments`);
        const response = await getJsonResponse<string, PaginatedPaymentInstrumentsResponse>(
            resource,
            '',
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaginatedPaymentInstrumentsResponse");
    }

}

export default BalanceAccounts;
