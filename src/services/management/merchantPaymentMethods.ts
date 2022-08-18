import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { ObjectSerializer, PaymentMethod, PaymentMethodResponse, PaymentMethodSetupInfo, UpdatePaymentMethodInfo } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";

class MerchantPaymentMethods extends Service {
    /**
     * Get all payment methods
     */
    public async listPaymentMethodSettings(merchantId: string, requestOptions?: IRequest.Options): Promise<PaymentMethodResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/paymentMethodSettings`);
        const response = await getJsonResponse<string, PaymentMethodResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethodResponse");
    }

    /**
     * Request a payment method
     */
    public async create(merchantId: string, request: PaymentMethodSetupInfo): Promise<PaymentMethod> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/paymentMethodSettings`);
        const response = await getJsonResponse<PaymentMethodSetupInfo, PaymentMethod>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethod");
    }

    /**
     * Get payment method details
     */
    public async retrieve(merchantId: string, paymentMethodId: string): Promise<PaymentMethod> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/paymentMethodSettings/${paymentMethodId}`);
        const response = await getJsonResponse<string, PaymentMethod>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethod");
    }

    /**
     * Update a payment method
     */
    public async update(merchantId: string, paymentMethodId: string, request: UpdatePaymentMethodInfo): Promise<PaymentMethod> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/paymentMethodSettings/${paymentMethodId}`);
        const response = await getJsonResponse<UpdatePaymentMethodInfo, PaymentMethod>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethod");
    }
}

export default MerchantPaymentMethods;
