import Service from "../service";
import Client from "../client";

// Deprecated classes
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

// Recommended classes
import APICredentialsCompanyLevelApi from './management/aPICredentialsCompanyLevelApi';
import APICredentialsMerchantLevelApi from './management/aPICredentialsMerchantLevelApi';
import APIKeyCompanyLevelApi from './management/aPIKeyCompanyLevelApi';
import APIKeyMerchantLevelApi from './management/aPIKeyMerchantLevelApi';
import AccountCompanyLevelApi from './management/accountCompanyLevelApi';
import AccountMerchantLevelApi from './management/accountMerchantLevelApi';
import AccountStoreLevelApi from './management/accountStoreLevelApi';
import AllowedOriginsCompanyLevelApi from './management/allowedOriginsCompanyLevelApi';
import AllowedOriginsMerchantLevelApi from './management/allowedOriginsMerchantLevelApi';
import ClientKeyCompanyLevelApi from './management/clientKeyCompanyLevelApi';
import ClientKeyMerchantLevelApi from './management/clientKeyMerchantLevelApi';
import MyAPICredentialApi from './management/myAPICredentialApi';
import PaymentMethodsMerchantLevelApi from './management/paymentMethodsMerchantLevelApi';
import PayoutSettingsMerchantLevelApi from './management/payoutSettingsMerchantLevelApi';
import TerminalActionsCompanyLevelApi from './management/terminalActionsCompanyLevelApi';
import TerminalActionsTerminalLevelApi from './management/terminalActionsTerminalLevelApi';
import TerminalOrdersCompanyLevelApi from './management/terminalOrdersCompanyLevelApi';
import TerminalOrdersMerchantLevelApi from './management/terminalOrdersMerchantLevelApi';
import TerminalSettingsCompanyLevelApi from './management/terminalSettingsCompanyLevelApi';
import TerminalSettingsMerchantLevelApi from './management/terminalSettingsMerchantLevelApi';
import TerminalSettingsStoreLevelApi from './management/terminalSettingsStoreLevelApi';
import TerminalSettingsTerminalLevelApi from './management/terminalSettingsTerminalLevelApi';
import TerminalsTerminalLevelApi from './management/terminalsTerminalLevelApi';
import UsersCompanyLevelApi from './management/usersCompanyLevelApi';
import UsersMerchantLevelApi from './management/usersMerchantLevelApi';
import WebhooksCompanyLevelApi from './management/webhooksCompanyLevelApi';
import WebhooksMerchantLevelApi from './management/webhooksMerchantLevelApi';

class Management extends Service {
    public constructor(client: Client) {
        super(client);
    }

    /**
     * @deprecated
     */
    public get Me() {
        const meApi = new MeApi(this.client);
        return meApi.Me;
    }

    /**
     * @deprecated
     */
    public get MerchantAccount() {
        return new MerchantAccount(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantAllowedOrigins() {
        return new MerchantAllowedOrigins(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantApiCredentials() {
        return new MerchantApiCredentials(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantApiKey() {
        return new MerchantApiKey(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantClientKey() {
        return new MerchantClientKey(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantPaymentMethods() {
        return new MerchantPaymentMethods(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantPayoutSettings() {
        return new MerchantPayoutSettings(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantTerminalOrders() {
        return new MerchantTerminalOrders(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantTerminalSettings() {
        return new MerchantTerminalSettings(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantUsers() {
        return new MerchantUsers(this.client);
    }

    /**
     * @deprecated
     */
    public get MerchantWebhooks() {
        return new MerchantWebhooks(this.client);
    }

    // ## Recommended classes

    public get APICredentialsCompanyLevelApi() {
        return new APICredentialsCompanyLevelApi(this.client);
    }
    public get APICredentialsMerchantLevelApi() {
        return new APICredentialsMerchantLevelApi(this.client);
    }
    public get APIKeyCompanyLevelApi() {
        return new APIKeyCompanyLevelApi(this.client);
    }
    public get APIKeyMerchantLevelApi() {
        return new APIKeyMerchantLevelApi(this.client);
    }
    public get AccountCompanyLevelApi() {
        return new AccountCompanyLevelApi(this.client);
    }
    public get AccountMerchantLevelApi() {
        return new AccountMerchantLevelApi(this.client);
    }
    public get AccountStoreLevelApi() {
        return new AccountStoreLevelApi(this.client);
    }
    public get AllowedOriginsCompanyLevelApi() {
        return new AllowedOriginsCompanyLevelApi(this.client);
    }
    public get AllowedOriginsMerchantLevelApi() {
        return new AllowedOriginsMerchantLevelApi(this.client);
    }
    public get ClientKeyCompanyLevelApi() {
        return new ClientKeyCompanyLevelApi(this.client);
    }
    public get ClientKeyMerchantLevelApi() {
        return new ClientKeyMerchantLevelApi(this.client);
    }
    public get MyAPICredentialApi() {
        return new MyAPICredentialApi(this.client);
    }
    public get PaymentMethodsMerchantLevelApi() {
        return new PaymentMethodsMerchantLevelApi(this.client);
    }
    public get PayoutSettingsMerchantLevelApi() {
        return new PayoutSettingsMerchantLevelApi(this.client);
    }
    public get TerminalActionsCompanyLevelApi() {
        return new TerminalActionsCompanyLevelApi(this.client);
    }
    public get TerminalActionsTerminalLevelApi() {
        return new TerminalActionsTerminalLevelApi(this.client);
    }
    public get TerminalOrdersCompanyLevelApi() {
        return new TerminalOrdersCompanyLevelApi(this.client);
    }
    public get TerminalOrdersMerchantLevelApi() {
        return new TerminalOrdersMerchantLevelApi(this.client);
    }
    public get TerminalSettingsCompanyLevelApi() {
        return new TerminalSettingsCompanyLevelApi(this.client);
    }
    public get TerminalSettingsMerchantLevelApi() {
        return new TerminalSettingsMerchantLevelApi(this.client);
    }
    public get TerminalSettingsStoreLevelApi() {
        return new TerminalSettingsStoreLevelApi(this.client);
    }
    public get TerminalSettingsTerminalLevelApi() {
        return new TerminalSettingsTerminalLevelApi(this.client);
    }
    public get TerminalsTerminalLevelApi() {
        return new TerminalsTerminalLevelApi(this.client);
    }
    public get UsersCompanyLevelApi() {
        return new UsersCompanyLevelApi(this.client);
    }
    public get UsersMerchantLevelApi() {
        return new UsersMerchantLevelApi(this.client);
    }
    public get WebhooksCompanyLevelApi() {
        return new WebhooksCompanyLevelApi(this.client);
    }
    public get WebhooksMerchantLevelApi() {
        return new WebhooksMerchantLevelApi(this.client);
    }
}

export default Management;
