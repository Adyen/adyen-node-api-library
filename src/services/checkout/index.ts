import { PaymentLinksApi } from "./paymentLinksApi";
import { PaymentsApi } from "./paymentsApi";
import { ModificationsApi } from "./modificationsApi";
import { OrdersApi } from "./ordersApi";
import { RecurringApi } from "./recurringApi";
import { UtilityApi } from "./utilityApi";
import { ClassicCheckoutSDKApi } from "./classicCheckoutSDKApi";
import ApiKeyAuthenticatedService from "../../apiKeyAuthenticatedService";
import Client from "../../client";

export default class CheckoutAPI extends ApiKeyAuthenticatedService {
    public constructor(client: Client) {
        super(client);
    }
    
    public get PaymentLinksApi() {
        return new PaymentLinksApi(this.client);
    }

    public get PaymentsApi() {
        return new PaymentsApi(this.client);
    }

    public get ModificationsApi() {
        return new ModificationsApi(this.client);
    }

    public get OrdersApi() {
        return new OrdersApi(this.client);
    }

    public get RecurringApi() {
        return new RecurringApi(this.client);
    }

    public get UtilityApi() {
        return new UtilityApi(this.client);
    }

    public get ClassicCheckoutSDKApi() {
        return new ClassicCheckoutSDKApi(this.client);
    }
}