import { CheckoutAPI } from "../../../src";
import { createIntegrationTestClient } from "../helpers/client";
import { getSharedIntegrationTestEnvironment } from "../helpers/environment";

interface CheckoutTestContext {
    checkout: CheckoutAPI;
    merchantAccount: string;
}

export function createCheckoutTestContext(): CheckoutTestContext {
    const environment = getSharedIntegrationTestEnvironment();
    const client = createIntegrationTestClient(environment.apiKey);

    return {
        checkout: new CheckoutAPI(client),
        merchantAccount: environment.merchantAccount
    };
}
