
![Node js](https://user-images.githubusercontent.com/62436079/207373079-9cf9377f-f530-4b02-a515-9b64ef7b06e7.png)

# Adyen API library for Node.js 
[![Build Status](https://github.com/adyen/Adyen-node-api-library/actions/workflows/npmpublish.yml/badge.svg)](https://github.com/Adyen/adyen-node-api-library/actions/workflows/npmpublish.yml)
[![Coverage Status](https://coveralls.io/repos/github/Adyen/adyen-node-api-library/badge.svg?branch=main)](https://coveralls.io/github/Adyen/adyen-node-api-library?branch=main)
[![Downloads](https://img.shields.io/npm/dm/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@adyen/api-library.svg)
[![Version](https://img.shields.io/npm/v/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Adyen_adyen-node-api-library&metric=alert_status)](https://sonarcloud.io/dashboard?id=Adyen_adyen-node-api-library)

This is the official Adyen API library for Node.js that we recommend for integrating with Adyen APIs.

## Supported APIs

This library supports the following:

| API name                                                                                                   | API version | Description                                                                                                                                                                                                                                                                                                                              | API object                                                                                                                                                                                                                       |
|------------------------------------------------------------------------------------------------------------|:-----------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [BIN Lookup API](https://docs.adyen.com/api-explorer/BinLookup/54/overview)                                |     v54     | The BIN Lookup API provides endpoints for retrieving information based on a given BIN.                                                                                                                                                                                                                                                   | [BinLookup](/src/services/binLookupApi.ts)                                                                                                                              |
| [Checkout API](https://docs.adyen.com/api-explorer/Checkout/71/overview)                                   |     v71     | Our latest integration for accepting online payments.                                                                                                                                                                                                                                                                                    | [CheckoutAPI](/src/services/checkout/index.ts)                                                                                                                          |
| [Configuration API](https://docs.adyen.com/api-explorer/balanceplatform/2/overview)                        |     v2      | The Configuration API enables you to create a platform where you can onboard your users as account holders and create balance accounts, cards, and business accounts.                                                                                                                                                                    | [BalancePlatform](/src/services/balancePlatform/index.ts)                                                                                                               |
| [DataProtection API](https://docs.adyen.com/development-resources/data-protection-api)                     |     v1      | Adyen Data Protection API provides a way for you to process [Subject Erasure Requests](https://gdpr-info.eu/art-17-gdpr/) as mandated in GDPR. Use our API to submit a request to delete shopper's data, including payment details and other related information (for example, delivery address or shopper email)                        | [DataProtection](/src/services/dataProtectionApi.ts)                                                                                                                    |
| [Legal Entity Management API](https://docs.adyen.com/api-explorer/legalentity/3/overview)                  |     v3      | Manage legal entities that contain information required for verification.                                                                                                                                                                                                                                                                | [LegalEntityManagement](/src/services/legalEntityManagement/index.ts)                                                                                                   |
| [Local/Cloud-based Terminal API](https://docs.adyen.com/point-of-sale/terminal-api-reference)              |      -      | Our point-of-sale integration.                                                                                                                                                                                                                                                                                                           | [TerminalLocalAPI](/src/services/terminalLocalAPI.ts) or [TerminalCloudAPI](/src/services/terminalCloudAPI.ts) |
| [Management API](https://docs.adyen.com/api-explorer/Management/3/overview)                                |     v3      | Configure and manage your Adyen company and merchant accounts, stores, and payment terminals.                                                                                                                                                                                                                                            | [Management](/src/services/management/index.ts)                                                                                                                         |
| [Payments API](https://docs.adyen.com/api-explorer/Payment/68/overview)                                    |     v68     | Our classic integration for online payments.                                                                                                                                                                                                                                                                                             | [ClassicIntegrationAPI](/src/services/paymentApi.ts)                                                                                                                    |
| [Payouts API](https://docs.adyen.com/api-explorer/Payout/68/overview)                                      |     v68     | Endpoints for sending funds to your customers.                                                                                                                                                                                                                                                                                           | [Payout](/src/services/payout/index.ts)                                                                                                                                 |
| [Platforms APIs](https://docs.adyen.com/platforms/api)                                                     |      -      | Set of APIs when using Adyen for Platforms. This API is used for the classic integration.                                                                                                                                                                                                                                                | [Platforms](/src/services/platforms.ts)                                                                                                                                 |
| [Account API](https://docs.adyen.com/api-explorer/Account/6/overview)                                      |     v6      | Provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and verification-related documents.                                                                                                                                    | [Account](/src/services/platforms.ts)                                                                                                                                   |
| [Fund API](https://docs.adyen.com/api-explorer/Fund/6/overview)                                            |     v6      | Provides endpoints for managing the funds in the accounts on your platform. These management operations include, for example, the transfer of funds from one account to another, the payout of funds to an account holder, and the retrieval of balances in an account.                                                                  | [Fund](/src/services/platforms.ts)                                                                                                                                      |
| [Hosted onboarding API](https://docs.adyen.com/api-explorer/Hop/6/overview)                                |     v6      | Provides endpoints that you can use to generate links to Adyen-hosted pages, such as an onboarding page or a PCI compliance questionnaire. You can provide these links to your account holders so that they can complete their onboarding.                                                                                               | [HostedOnboardingPage](/src/services/platforms.ts)                                                                                                                      |
| [Notification Configuration API](https://docs.adyen.com/api-explorer/NotificationConfiguration/6/overview) |     v6      | Provides endpoints for setting up and testing notifications that inform you of events on your platform, for example when a verification check or a payout has been completed.                                                                                                                                                            | [NotificationConfiguration](/src/services/resource/platforms/notificationConfiguration.ts)                                                                              |
| [POS Terminal Management API](https://docs.adyen.com/api-explorer/postfmapi/1/overview)                    |     ~~v1~~     | ~~Endpoints for managing your point-of-sale payment terminals.~~ ‼️ Deprecated: use instead the [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview) for the management of your terminal fleet.                                                                                                                                                                                                                                                                             | [~~TerminalManagement~~](/src/services/terminalManagementApi.ts)                                                                                                            |
| [Recurring API](https://docs.adyen.com/api-explorer/Recurring/68/overview)                                 |     v68     | Endpoints for managing saved payment details.                                                                                                                                                                                                                                                                                            | [Recurring](/src/services/recurringApi.ts)                                                                                                                              |
| [Session Authentication API](https://docs.adyen.com/api-explorer/sessionauthentication/1/overview)                             |    **v1**       |                                                                                                                                                                                                                                                                           Create and manage the JSON Web Tokens (JWT) required for integrating [Onboarding](https://docs.adyen.com/platforms/onboard-users/components) and [Platform Experience](https://docs.adyen.com/platforms/build-user-dashboards) components.                          | [SessionAuthentication](/src/services/sessionAuthentication)        |
| [Stored Value API](https://docs.adyen.com/payment-methods/gift-cards/stored-value-api)                     |     v46     | Manage both online and point-of-sale gift cards and other stored-value cards.                                                                                                                                                                                                                                                            | [StoredValue](/src/services/storedValueApi.ts)                                                                                                                          |
| [Transfers API](https://docs.adyen.com/api-explorer/transfers/4/overview)                                  |     v4      | The Transfers API provides endpoints that can be used to get information about all your transactions, move funds within your balance platform or send funds from your balance platform to a transfer instrument.                                                                                                                         | [Transfers](/src/services/transfers/index.ts)                                                                                                                           |
| [Disputes API](https://docs.adyen.com/api-explorer/Disputes/30/overview)                                   |     v30     | You can use the [Disputes API](https://docs.adyen.com/risk-management/disputes-api) to automate the dispute handling process so that you can respond to disputes and chargebacks as soon as they are initiated. The Disputes API lets you retrieve defense reasons, supply and delete defense documents, and accept or defend disputes.  | [Disputes](/src/services/disputesApi.ts)                                                                                                                                |
| [POS Mobile API](https://docs.adyen.com/api-explorer/possdk/68/overview)                                   |     v68     | The POS Mobile API is used in the mutual authentication flow between an Adyen Android or iOS [POS Mobile SDK](https://docs.adyen.com/point-of-sale/ipp-mobile/) and the Adyen payments platform. The POS Mobile SDK for Android or iOS devices enables businesses to accept in-person payments using a commercial off-the-shelf (COTS) device like a phone. For example, Tap to Pay transactions, or transactions on a mobile device in combination with a card reader | [POS Mobile](/src/services/posMobileApi.ts)                                                                                                                                |
| [Payments App API](https://docs.adyen.com/api-explorer/payments-app/1/overview)                                   |    v1     | The Payments App API is used to Board and manage the Adyen Payments App on your Android mobile devices. | [PaymentsAppApi](src/services/paymentsApp/paymentsAppApi.ts)

## Supported Webhook versions
The library supports all webhooks under the following model directories:

| Webhooks                                                                                          | Description                                                                                                                                                                                 | Model Name                                                     | Supported Version |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------|
| [Authentication Webhooks](https://docs.adyen.com/api-explorer/acs-webhook/1/overview)             | Adyen sends this webhook when the process of cardholder authentication is finalized, whether it is completed successfully, fails, or expires.                                               | [AcsWebhooks](src/typings/acsWebhooks)                         | **v1**            |
| [Balance Webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/1/overview)             | Adyen sends webhooks to inform you of balance changes in your balance platform.                                                                                                                                       | [balancewebhooks](src/main/java/com/adyen/model/balancewebhooks)                     | **v1**            |
| [Configuration Webhooks](https://docs.adyen.com/api-explorer/balanceplatform-webhooks/2/overview) | You can use these webhooks to build your implementation. For example, you can use this information to update internal statuses when the status of a capability is changed.                  | [ConfigurationNotification](src/typings/configurationWebhooks) | **v2**            |
| [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/4/overview)             | You can use these webhooks to build your implementation. For example, you can use this information to update balances in your own dashboards or to keep track of incoming funds.            | [TransferNotification](src/typings/transferWebhooks)           | **v4**            |
| [Report Webhooks](https://docs.adyen.com/api-explorer/report-webhooks/1/overview)                 | You can download reports programmatically by making an HTTP GET request, or manually from your Balance Platform Customer Area                                                               | [ReportNotification](src/typings/reportWebhooks)               | **v1**            |
| [Management Webhooks](https://docs.adyen.com/api-explorer/ManagementNotification/3/overview)      | Adyen uses webhooks to inform your system about events that happen with your Adyen company and merchant accounts, stores, payment terminals, and payment methods when using Management API. | [ManagementWebhooks](src/typings/managementWebhooks)           | **v3**            |
| [Notification Webhooks](https://docs.adyen.com/api-explorer/Webhooks/1/overview)                  | We use webhooks to send you updates about payment status updates, newly available reports, and other events that you can subscribe to. For more information, refer to our documentation     | [Notification](src/typings/notification)                       | **v1**            |
| [Transaction Webhooks](https://docs.adyen.com/api-explorer/transaction-webhooks/4/overview)                  | Adyen sends webhooks to inform your system about incoming and outgoing transfers in your platform. You can use these webhooks to build your implementation. For example, you can use this information to update balances in your own dashboards or to keep track of incoming funds.     | [TransactionWebhooks](src/typings/transactionWebhooks)                       | **v4**            |
| [Tokenization Webhooks](https://docs.adyen.com/api-explorer/Tokenization-webhooks/1/overview)      | Adyen sends webhooks to inform you about the creation and changes to the recurring tokens.                                                                                                                         | [tokenizationwebhooks](src/main/java/com/adyen/model/tokenizationwebhooks)                                    | **v1**            |

For more information, refer to our [documentation](https://docs.adyen.com/) or the [API Explorer](https://docs.adyen.com/api-explorer/).

## Before you begin

Before you begin to integrate:

- [Create an Adyen test account](https://docs.adyen.com/get-started-with-adyen#test-account).
- [Set up your API credentials](https://docs.adyen.com/development-resources/api-credentials).
- [Install Node.js](https://nodejs.org/en/download/) version 18 or later.

## Installation

Install the [Node.JS package](https://www.npmjs.com/package/@adyen/api-library):

``` bash
npm install --save @adyen/api-library
```

Alternatively, you can download the [release on GitHub](https://github.com/Adyen/adyen-node-api-library/releases).

## Updating

To update the Node.JS package:

``` bash
npm update @adyen/api-library
```

Check for breaking changes on the [releases page](https://github.com/Adyen/adyen-node-api-library/releases/).

## Usage

``` javascript
// Step 1: Require the parts of the module you want to use
const { Client, CheckoutAPI, EnvironmentEnum} = require('@adyen/api-library');

// Step 2: Initialize the client object
const client = new Client({apiKey: "YOUR_API_KEY", environment: EnvironmentEnum.TEST}); 

// Step 3: Initialize the API object
const checkoutApi = new CheckoutAPI(client);

// Step 4: Create the request object
  const paymentRequest = {
    amount: {
      currency: "USD",
      value: 1000 // value in minor units
    },
    reference: "Your order number",
    paymentMethod: {
      type: "scheme",
      encryptedCardNumber: "test_4111111111111111",
      encryptedExpiryMonth: "test_03",
      encryptedExpiryYear: "test_2030",
      encryptedSecurityCode: "test_737"
    },
    shopperReference: "YOUR_UNIQUE_SHOPPER_ID_IOfW3k9G2PvXFu2j",
    storePaymentMethod: true,
    shopperInteraction: "Ecommerce",
    recurringProcessingModel: "CardOnFile",
    returnUrl: "https://your-company.com/...",
    merchantAccount: "YOUR_MERCHANT_ACCOUNT"
  };
  
// Step 5: Make the request
checkoutApi.PaymentsApi.payments(paymentRequest)
  .then(paymentResponse => console.log(paymentResponse.pspReference))
  .catch(error => console.log(error));
```
If you want to pass query string parameters, you can use the `params` field from [IRequest](/src/typings/requestOptions.ts) (also used for idempotency-key and other header fields). 
The method descriptions contain an example of the possible values you can send to the API for the query parameters, just as stated in the API explorer.
```javascript
const requestOptions: IRequest.Options = {
    params: {
        limit: "5",
        offset: "10"
    }
};
await balancePlatformService.AccountHoldersApi.getAllBalanceAccountsOfAccountHolder("AH32272223222B5CM4MWJ892H", requestOptions);
```

### Step 1: Require the parts of the module you want to use

Use the Node.js `require` function to load the `Client` and API objects from the Adyen module. For the name of the API objects, see [Supported APIs](#supported-apis).

For example, to use the [Checkout API](https://docs.adyen.com/api-explorer/Checkout/70/overview):

``` javascript
const { Client, CheckoutAPI, EnvironmentEnum} = require('@adyen/api-library');
```

### Step 2: Initialize the client object

Initialize the client object, passing the following:
- `apiKey`: The API key you [generated from the Customer Area](https://docs.adyen.com/development-resources/api-credentials#generate-api-key).
- `environment`: For the test environment, use **TEST**. For the live environment, use **LIVE**.

For example:

``` javascript
const client = new Client({apiKey: "YOUR_API_KEY", environment: EnvironmentEnum.TEST}); 
```

### Step 3: Initialize the API object

Initialize the API object you want to use, passing the `client` object from the previous step. 

For example, for the [Checkout API](https://docs.adyen.com/api-explorer/Checkout/70/overview):

``` javascript
const checkoutApi = new CheckoutAPI(client);
```

### Step 4: Create the request object

Create a the request object. For example, for a request to the `/payments` endpoint:

``` javascript
  const paymentRequest = {
    amount: {
      currency: "USD",
      value: 1000 // value in minor units
    },
    reference: "Your order number",
    paymentMethod: {
      type: "scheme",
      encryptedCardNumber: "test_4111111111111111",
      encryptedExpiryMonth: "test_03",
      encryptedExpiryYear: "test_2030",
      encryptedSecurityCode: "test_737"
    },
    shopperReference: "YOUR_UNIQUE_SHOPPER_ID_IOfW3k9G2PvXFu2j",
    storePaymentMethod: true,
    shopperInteraction: "Ecommerce",
    recurringProcessingModel: "CardOnFile",
    returnUrl: "https://your-company.com/...",
    merchantAccount: "YOUR_MERCHANT_ACCOUNT"
  };
```

### Step 5: Make the request

Use the API object's method to make the request. For example, to make a request to the `/payments` endpoint using the `CheckoutAPI` object:

```
checkoutApi.PaymentsApi.payments(paymentRequest)
  .then(paymentResponse => console.log(paymentResponse.pspReference))
  .catch(error => console.log(error));
```
### Client setup when going live

For APIS that require your [Live URL Prefix](https://docs.adyen.com/development-resources/live-endpoints#live-url-prefix) (Binlookup, BalanceControl, Checkout, Payout and Recurring) the client is set up as follows in order to start processing live payments:
``` typescript
const { Client, EnvironmentEnum } = require('@adyen/api-library');

const client = new Client({apiKey: "YOUR_API_KEY", environment: EnvironmentEnum.LIVE, liveEndpointUrlPrefix: "YOUR_LIVE_URL_PREFIX"}); 
```

### Usage in TypeScript

Alternatively, you can use the `Types` included in this module for Typescript and `async` syntax.

``` typescript
  const { Client, EnvironmentEnum, CheckoutAPI, Types } = require('@adyen/api-library');
  const client = new Client({apiKey: "YOUR_API_KEY", environment: EnvironmentEnum.LIVE, liveEndpointUrlPrefix: "YOUR_LIVE_URL_PREFIX"});

  const makePaymentsRequest = async () => {
    const paymentsRequest : Types.checkout.PaymentRequest = {
      amount: {
        currency: "USD",
        value: 1000 // Value in minor units.
      },
      reference: "Your order number",
      paymentMethod: {
        type: Types.checkout.CardDetails.TypeEnum.Scheme,
        encryptedCardNumber: "test_4111111111111111",
        encryptedExpiryMonth: "test_03",
        encryptedExpiryYear: "test_2030",
        encryptedSecurityCode: "test_737"
      },
      shopperReference: "YOUR_UNIQUE_SHOPPER_ID_IOfW3k9G2PvXFu2j",
      storePaymentMethod: true,
      shopperInteraction: Types.checkout.PaymentRequest.ShopperInteractionEnum.Ecommerce,
      recurringProcessingModel: Types.checkout.PaymentRequest.RecurringProcessingModelEnum.CardOnFile,
      returnUrl: "https://your-company.com/...",
      merchantAccount: "YOUR_MERCHANT_ACCOUNT"
    };
    const checkoutAPI = new CheckoutAPI(client);
    const paymentResponse : Types.checkout.PaymentResponse = await checkoutAPI.PaymentsApi.payments(paymentsRequest);
    console.log(paymentResponse.pspReference);
  }

  makePaymentsRequest();
```

#### Deserializing JSON Strings
In some setups you might need to deserialize JSON strings to request objects. For example, when using the libraries in combination with [Dropin/Components](https://github.com/Adyen/adyen-web). Please use the built-in deserialization functions:
``` typescript
// Import the required model class
import { checkout } from "../typings";

// Deserialize using built-in ObjectSerializer class
const requestJson: JSON = JSON.parse(`YOUR_JSON_STRING`);
const paymentRequest: checkout.PaymentRequest = await checkout.ObjectSerializer.deserialize(requestJson,"PaymentRequest");
```
 
### Custom HTTP client configuration

By default, [Node.js https](https://nodejs.org/api/https.html) is used to make API requests. Alternatively, you can set a custom `HttpClient` for your `Client` object.

**Note**: when using your custom `HttpClient`, you must define all required properties (API key, content-type, timeouts, etc..) 

For example, to set `axios` as your HTTP client:

``` javascript
const {Client, Config} = require('@adyen/api-library');
const axios = require("axios");
// ... more code
const config = new Config();
const client = new Client({
  config,
  httpClient: {
    async request(endpoint, json, config, isApiKeyRequired, requestOptions) {
        const response = await axios({
            method: 'POST',
            url: endpoint,
            data: JSON.parse(json),
            headers: {
                "X-API-Key": config.apiKey,
                "Content-type": "application/json"
            },
        });

        return response.data;
    }
  }
});
// ... more code
```

### Parsing and Authenticating Banking Webhooks
Parse an AccountHolderNotificationRequest webhook;
``` typescript
let bankingWebhookHandler = new BankingWebhookHandler(YOUR_BANKING_WEBHOOK);
const accountHolderNotificationRequest: AccountHolderNotificationRequest = bankingWebhookHandler.getAccountHolderNotificationRequest();
const genericWebhook = bankingWebhookHandler.getGenericWebhook();
```
You can also parse the webhook with a generic type, in case you do not know the webhook type in advance. In this case you can check the instance of the webhook in order to parse it to the respective type (or just use it dynamically);
``` typescript
let bankingWebhookHandler = new BankingWebhookHandler(YOUR_BANKING_WEBHOOK);
const genericWebhook = bankingWebhookHandler.getGenericWebhook();
```
Verify the authenticity (where you retrieve the hmac key from the CA and the signature from the webhook header);
``` typescript
const isValid = hmacValidator.validateBankingHMAC("YOUR_HMAC_KEY", "YOUR_HMAC_SIGNATURE", jsonString)
```
### Management Webhooks
Management webhooks are verified the exact same way as the banking webhooks. To parse them however, instead you use:
``` typescript
let managementWebhookHandler = new ManagementWebhookHandler(YOUR_MANAGEMENT_WEBHOOK);
const genericWebhook = managementWebhookHandler.getGenericWebhook();
```

### Proxy configuration

To configure a proxy connection, set the `proxy` property of your `HttpURLConnectionClient` object.

For example:

``` javascript
const {HttpURLConnectionClient, Client, Config} = require('@adyen/api-library');
// ... more code
const config = new Config();
const client = new Client({ config });
const httpClient = new HttpURLConnectionClient();
httpClient.proxy = { host: "http://google.com", port: 8888,  };

client.setEnvironment(EnvironmentEnum.TEST);
client.httpClient = httpClient;

// ... more code
```

### Using the Cloud Terminal API 
For In-Person Payments integrations with the [Cloud Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/), you must initialise the Client **setting the closest** [Region](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/#cloud):
``` javascript
// Step 1: Require the parts of the module you want to use
const {Client, TerminalCloudAPI} from "@adyen/api-library";
const { Config, EnvironmentEnum, RegionEnum } = require("@adyen/api-library");

// Step 2: Initialize the client object
const config = new Config({
    apiKey: "YOUR_API_KEY",
    environment: EnvironmentEnum.LIVE,
    region: RegionEnum.US
});
const client = new Client(config);

// Step 3: Initialize the API object
const terminalCloudAPI = new TerminalCloudAPI(client);

// Step 4: Create the request object
const serviceID = "123456789";
const saleID = "POS-SystemID12345";
const POIID = "Your Device Name(eg V400m-123456789)";

// Use a unique transaction for every transaction you perform
const transactionID = "TransactionID";
const paymentRequest: SaleToPOIRequest = {
    MessageHeader: {
        MessageClass: MessageClassType.Service,
        MessageCategory: MessageCategoryType.Payment,
        MessageType: MessageType.Request,
        ProtocolVersion: "3.0",
        ServiceID: serviceID,
        SaleID: saleID,
        POIID: POIID
    },
    PaymentRequest: {
        SaleData: {
            SaleTransactionID: {
                TransactionID: transactionID,
                TimeStamp: this.GetDate().toISOString()
            },

            SaleToAcquirerData: {
                applicationInfo: {
                    merchantApplication: {
                        version: "1",
                        name: "test",
                    }
                }
            }
        },
        PaymentTransaction: {
            AmountsReq: {
                Currency: "EUR",
                RequestedAmount: 1000
            }
        }
    }
};

// Step 5: Make the request
const terminalAPIResponse: terminal.TerminalApiResponse = await terminalCloudAPI.sync(paymentRequest);
```

#### Optional: perform an abort request

To perform an [abort request](https://docs.adyen.com/point-of-sale/basic-tapi-integration/cancel-a-transaction/) you can use the following example:
``` javascript
const abortRequest: SaleToPOIRequest = {
    MessageHeader: {
        MessageClass: MessageClassType.Service,
        MessageCategory: MessageCategoryType.Abort,
        MessageType: MessageType.Request,
        ProtocolVersion: "3.0",
        // Different serviceID than the one you're aborting
        ServiceID: "Different service ID",
        SaleID: saleID,
        POIID: POIID
    },
    AbortRequest: {
        AbortReason: "MerchantAbort",
        MessageReference: {
            MessageCategory: MessageCategoryEnum.Payment,
            SaleID: saleID,
            // Service ID of the payment you're aborting
            ServiceID: serviceID,
            POIID: POIID
        }

    }
};
const terminalAPIResponse: terminal.TerminalApiResponse = await terminalCloudAPI.sync(abortRequest);
```

#### Optional: perform a status request

To perform a [status request](https://docs.adyen.com/point-of-sale/basic-tapi-integration/verify-transaction-status/) you can use the following example:
``` javascript
const statusRequest: SaleToPOIRequest = {
    MessageHeader: {
        MessageClass: MessageClassType.Service,
        MessageCategory: MessageCategoryType.TransactionStatus,
        MessageType: MessageType.Request,
        ProtocolVersion: "3.0",
        ServiceID: "Different service ID",
        SaleID: saleID,
        POIID: POIID
    },
    TransactionStatusRequest: {
        ReceiptReprintFlag: true,
        DocumentQualifier: [DocumentQualifierEnum.CashierReceipt, DocumentQualifierEnum.CustomerReceipt],
        MessageReference: {
            SaleID: saleID,
            // serviceID of the transaction you want the status update for
            ServiceID: serviceID,
            MessageCategory: MessageCategoryEnum.Payment
        }
    }
};
const terminalAPIResponse: terminal.TerminalApiResponse = await terminalCloudAPI.sync(statusRequest);
```

### Using the Local Terminal API Integration
The procedure to send In-Person requests using [Terminal API over Local Connection](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/local/) is similar to the Cloud Terminal API one, however, additional encryption details are required to perform the requests. Make sure to [install the certificate as described here](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/local/#protect-communications)
```javascript
// Step 1: Require the parts of the module you want to use
const {Client, TerminalLocalAPI} from "@adyen/api-library";

// Step 2: Add your Certificate Path and Local Endpoint to the config path. Install the certificate and save it in your project folder as "cert.cer"
const config: Config = new Config();
config.certificatePath = "./cert.cer";
config.terminalApiLocalEndpoint = "The IP of your terminal (eg https://192.168.47.169)";
config.apiKey = "YOUR_API_KEY_HERE";

// Step 3: Setup a security password for your terminal in CA, and import the security key object:
const securityKey: SecurityKey = {
    AdyenCryptoVersion: 1,
    KeyIdentifier: "keyIdentifier",
    KeyVersion: 1,
    Passphrase: "passphrase",
};

// Step 4 Initialize the client and the API objects
client = new Client({ config });
const terminalLocalAPI = new TerminalLocalAPI(client);

// Step 5: Create the request object
const paymentRequest: SaleToPOIRequest = {
// Similar to the saleToPOIRequest used for Cloud API
}

// Step 6: Make the request
const terminalApiResponse: terminal.TerminalApiResponse = await terminalLocalAPI.request(paymentRequest, securityKey);
```
## Using the Local Terminal API Integration without Encryption (Only on TEST)
If you wish to develop the Local Terminal API integration parallel to your encryption implementation, you can opt for the unencrypted version. Be sure to remove any encryption details from the CA terminal config page. 
```javascript
// Step 1: Require the parts of the module you want to use
const {Client, TerminalLocalAPIUnencrypted} from "@adyen/api-library";

// Step 2: Add your Certificate Path and Local Endpoint to the config path. Install the certificate and save it in your project folder as "cert.cer"
const config: Config = new Config();
config.terminalApiLocalEndpoint = "The IP of your terminal (eg https://192.168.47.169)";
config.apiKey = "YOUR_API_KEY_HERE";

// Step 3 Initialize the client and the API objects
client = new Client({ config });
const terminalLocalAPI = new TerminalLocalAPIUnencrypted(client);

// Step 4: Create the request object
const paymentRequest: SaleToPOIRequest = {
// Similar to the saleToPOIRequest used for Cloud API
}

// Step 5: Make the request
const terminalApiResponse: terminal.TerminalApiResponse = await terminalLocalAPI.request(paymentRequest);
```
### Using the Cloud Terminal API Integration (async)
If you choose to integrate [Terminal API over Cloud](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/) **asynchronously**, you need to follow similar steps to initialize the client and prepare the request object. However the response will be asynchronous:
* a successful request will return `200` status code and `ok` as response body. Make sure to setup the [event notifications](https://docs.adyen.com/point-of-sale/design-your-integration/notifications/event-notifications/)
* a request that fails will return `200` status code and the `TerminalApiResponse` as response body
``` typescript
// Step 1: Require the parts of the module you want to use
const {Client, TerminalCloudAPI} from "@adyen/api-library";

// Step 2: Initialize the client object
const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST"});

// Step 3: Initialize the API object
const terminalCloudAPI = new TerminalCloudAPI(client);

// Step 4: Create the request object
const serviceID = "123456789";
const saleID = "POS-SystemID12345";
const POIID = "Your Device Name(eg V400m-123456789)";

// Use a unique transaction for every transaction you perform
const transactionID = "TransactionID";
const paymentRequest: SaleToPOIRequest = {
    MessageHeader: {
        MessageClass: MessageClassType.Service,
        MessageCategory: MessageCategoryType.Payment,
        MessageType: MessageType.Request,
        ProtocolVersion: "3.0",
        ServiceID: serviceID,
        SaleID: saleID,
        POIID: POIID
    },
    PaymentRequest: {
        SaleData: {
            SaleTransactionID: {
                TransactionID: transactionID,
                TimeStamp: new Date().toISOString()
            },

            SaleToAcquirerData: {
                applicationInfo: {
                    merchantApplication: {
                        version: "1",
                        name: "test",
                    }
                }
            }
        },
        PaymentTransaction: {
            AmountsReq: {
                Currency: "EUR",
                RequestedAmount: 1000
            }
        }
    }
};

// Step 5: Make the request
const response = await terminalCloudAPI.async(paymentRequest);
// handle both `string` and `TerminalApiResponse`
if (typeof response === "string") {
  // request was successful
  console.log("response:", response); // should be 'ok'
} else {
  // request failed: see details in the EventNotification object
  console.log("EventToNotify:", response.SaleToPOIRequest?.EventNotification?.EventToNotify);
  console.log("EventDetails:", response.SaleToPOIRequest?.EventNotification?.EventDetails);
}
```

## Feedback
We value your input! Help us enhance our API Libraries and improve the integration experience by providing your feedback. Please take a moment to fill out [our feedback form](https://forms.gle/A4EERrR6CWgKWe5r9) to share your thoughts, suggestions or ideas. 

## Example integration

Clone our [Node.js example integration](https://github.com/adyen-examples/adyen-node-online-payments) to see how the Adyen API library for Node.js can be used. The integration includes code comments that highlight key features and concepts.

## Contributing 

We strongly encourage you to contribute to this repository by:

* Adding new features and functionality.
* Fixing bugs and issues.
* Making general improvements.

To learn how to create a pull request, read our [contribution guidelines](CONTRIBUTING.md).

## Support

To request a feature, report a bug, or report a security vulnerability, [create a GitHub issue](https://github.com/Adyen/adyen-node-api-library/issues/new/choose). 

For other questions, contact our [support team](https://www.adyen.help).

## License

This repository is available under the [MIT license](LICENSE).

## See also

* [Example integration](https://github.com/adyen-examples/adyen-node-online-payments)
