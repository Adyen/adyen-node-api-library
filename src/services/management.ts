import Service from "../service";
import Client from "../client";

import MeApi from "./management/meApi";
import MerchantAccount from "./management/merchantAccount";
import MerchantAllowedOrigins from "./management/merchantAllowedOrigins";
import MerchantApiCredentials from "./management/merchantApiCredentials";
import MerchantApiKey from "./management/merchantApiKey";
import MerchantClientKey from "./management/merchantClientKey";
import MerchantPaymentMethods from "./management/merchantPaymentMethods";
import MerchantPayoutSettings from "./management/merchantPayoutSettings";
import MerchantTerminalOrders from "./management/merchantTerminalOrders";
import MerchantTerminalSettings from "./management/merchantTerminalSettings";
import MerchantUsers from "./management/merchantUsers";
import MerchantWebhooks from "./management/merchantWebhooks";
import AllowedOriginsMerchantLevelApi from "./management/allowedOriginsMerchantLevelApi";
import APICredentialsCompanyLevelApi from "./management/aPICredentialsCompanyLevelApi";

class Management extends Service {
    public constructor(client: Client) {
        super(client);
    }

    public get Me() {
        const meApi = new MeApi(this.client);
        return meApi.Me;
    }

    public get MerchantAccount() {
        return new MerchantAccount(this.client);
    }

    public get MerchantAllowedOrigins() {
        return new MerchantAllowedOrigins(this.client);
    }

    public get MerchantApiCredentials() {
        return new MerchantApiCredentials(this.client);
    }

    public get MerchantApiKey() {
        return new MerchantApiKey(this.client);
    }

    public get MerchantClientKey() {
        return new MerchantClientKey(this.client);
    }

    public get MerchantPaymentMethods() {
        return new MerchantPaymentMethods(this.client);
    }

    public get MerchantPayoutSettings() {
        return new MerchantPayoutSettings(this.client);
    }

    public get MerchantTerminalOrders() {
        return new MerchantTerminalOrders(this.client);
    }

    public get MerchantTerminalSettings() {
        return new MerchantTerminalSettings(this.client);
    }

    public get MerchantUsers() {
        return new MerchantUsers(this.client);
    }

    public get MerchantWebhooks() {
        return new MerchantWebhooks(this.client);
    }

    public get AllowedOriginsMerchantLevelApi() {
        return new AllowedOriginsMerchantLevelApi(this.client);
    }

    public get APICredentialsCompanyLevelApi() {
        return new APICredentialsCompanyLevelApi(this.client);
    }
}

export default Management;
