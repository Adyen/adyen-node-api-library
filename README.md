# Adyen Node.js API Library
![Node.js CI](https://github.com/Adyen/adyen-node-api-library/workflows/Node.js%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/Adyen/adyen-node-api-library/badge.svg?branch=main)](https://coveralls.io/github/Adyen/adyen-node-api-library?branch=main)
[![Downloads](https://img.shields.io/npm/dm/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@adyen/api-library.svg)
[![Version](https://img.shields.io/npm/v/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Adyen_adyen-node-api-library&metric=alert_status)](https://sonarcloud.io/dashboard?id=Adyen_adyen-node-api-library)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Adyen/adyen-node-api-library.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Adyen/adyen-node-api-library/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Adyen/adyen-node-api-library.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Adyen/adyen-node-api-library/context:javascript)

This is the officially supported NodeJS library for using Adyen's APIs.

## Integration
The Library supports all APIs under the following services:
| API | Description | Service Name | Supported version |
| --- | ----------- | ------------ | ----------------- | 
|[BIN lookup API](https://docs.adyen.com/api-explorer/#/BinLookup/v52/overview) | The BIN Lookup API provides endpoints for retrieving information based on a given BIN. | BinLookup | **v52** |
| [Checkout API](https://docs.adyen.com/api-explorer/#/CheckoutService/v69/overview)| Our latest integration for accepting online payments. | CheckoutAPI | **v69** |
| [Configuration API](https://docs.adyen.com/api-explorer/#/balanceplatform/v2/overview)| The Configuration API enables you to create a platform where you can onboard your users as account holders and create balance accounts, cards, and business accounts. | BalancePlatform | **v2** |
| [Legal Entity Management API](https://docs.adyen.com/api-explorer/#/legalentity/v2/overview)| Manage legal entities that contain information required for verification. | LegalEntityManagement | **v2** |
| [Local/Cloud-based Terminal API](https://docs.adyen.com/point-of-sale/terminal-api-reference)| Our point-of-sale integration. | TerminalLocalAPI or TerminalCloudAPI | - |
| [Management API](https://docs.adyen.com/api-explorer/#/ManagementService/v1/overview)| Configure and manage your Adyen company and merchant accounts, stores, and payment terminals. | Management | **v1** |
| [Payments API](https://docs.adyen.com/api-explorer/#/Payment/v68/overview)| Our classic integration for online payments. | ClassicIntegrationAPI | **v68** |
| [Payouts API](https://docs.adyen.com/api-explorer/#/Payout/v68/overview)| Endpoints for sending funds to your customers. | Payout | **v68** |
| [Platforms APIs](https://docs.adyen.com/platforms/api)| Set of APIs when using Adyen for Platforms. This API is used for the classic integration. | Platforms | - |
  | [Account API](https://docs.adyen.com/api-explorer/#/Account/v6/overview) | *Platforms subclass* | Account | **v6** |
  | [Fund API](https://docs.adyen.com/api-explorer/#/Fund/v6/overview) | *Platforms subclass* | Fund | **v6** |
  | [Hosted onboarding API](https://docs.adyen.com/api-explorer/#/Hop/v6/overview)| *Platforms subclass* | HostedOnboardingPage | **v6** |
  | [Notification Configuration API](https://docs.adyen.com/api-explorer/#/NotificationConfigurationService/v6/overview) | *Platforms subclass* | NotificationConfiguration | **v6** |
| [Platforms Notifications Webhooks](https://docs.adyen.com/api-explorer/#/NotificationService/v6/overview) || *Models only* | **v6** |
| [POS Terminal Management API](https://docs.adyen.com/api-explorer/#/postfmapi/v1/overview)| Endpoints for managing your point-of-sale payment terminals. | TerminalManagement | **v1** |
| [Recurring API](https://docs.adyen.com/api-explorer/#/Recurring/v68/overview)| Endpoints for managing saved payment details. | Recurring | **v68** |
| [Stored Value API](https://docs.adyen.com/payment-methods/gift-cards/stored-value-api) | Manage both online and point-of-sale gift cards and other stored-value cards. | StoredValue | **v46** |
| [Transfers API](https://docs.adyen.com/api-explorer/transfers/3/overview) | The Transfers API provides endpoints that you can use to get information about all your transactions, move funds within your balance platform or send funds from your balance platform to a transfer instrument. | Transfers | **v3** |
| [Webhooks](https://docs.adyen.com/api-explorer/Webhooks/1/overview) | We use webhooks to send you notifications about payment status updates, newly available reports, and other events that you can subscribe to. For more information, refer to our [documentation](https://docs.adyen.com/development-resources/webhooks). | *Models only* | **v1**





For more information, refer to our [documentation](https://docs.adyen.com/) or the [API Explorer](https://docs.adyen.com/api-explorer/).

## Prerequisites
-   [Adyen test account](https://docs.adyen.com/get-started-with-adyen)
-   [API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). For testing, your API credential needs to have the [API PCI Payments role](https://docs.adyen.com/development-resources/api-credentials#roles).
-   Node 12 or higher
****
## Installation

You can use NPM to add our library to your project

### NPM

```bash
npm install --save @adyen/api-library
```

Alternatively, you can download the [release on GitHub](https://github.com/Adyen/adyen-node-api-library/releases).


## Using the library

### Client initialisation
#### General use with API key
 
Set up the client as a singleton resource; you can then use it to create service objects for the API calls that you make to Adyen:
 
```typescript
  const { Client } = require('@adyen/api-library');
  const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST"});
``` 
#### General use with API key for live environment
 ```typescript
  const { Client } = require('@adyen/api-library');
  const client = new Client({apiKey: "YOUR_API_KEY", environment: "LIVE"});
 ``` 
#### General use with basic auth
```typescript
  const { Client } = require('@adyen/api-library');
  const client = new Client({username: "YOUR_USERNAME", password: "YOUR_PASSWORD", environment: "TEST"});
``` 

### Consuming Services
Every API the library supports is represented by a service object. The name of the service matching the corresponding API is listed in the [Integrations](#integration) section of this document.
```javascript
  const { Client, CheckoutAPI	} = require('@adyen/api-library');
  const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST"});

  const paymentRequest = {
    amount: {
      currency: "USD",
      value: 1000
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
  const checkoutAPI = new CheckoutAPI(client);
  checkoutAPI.payments(paymentRequest)
    .then( paymentResponse => console.log(paymentResponse.pspReference))
    .catch(error => console.log(error));
```

Alternatively you can make use of the Types included in this library using Typescript, and/or use the async syntax:
```typescript
  const { Client, CheckoutAPI } = require('@adyen/api-library');
  const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST"});

  import { Types } from '@adyen/api-library';

  const doPaymentsRequest= async ()  => {
    const paymentRequest : Types.checkout.PaymentRequest = {
      amount: {
        currency: "USD",
        value: 1000
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
    const paymentResponse : Types.checkout.PaymentResponse = await checkoutAPI.payments(paymentRequest);
    console.log(paymentResponse.pspReference);
  }

  doPaymentsRequest();
```
 
### Custom HTTP Client Configuration
By default, NodeJS [https](https://nodejs.org/api/https.html) will be used to submit requests to the API. But you can change that by injecting your own HttpClient on your client instance. In the example below, we use `axios`:

```javascript
const {Client, Config} = require('@adyen/api-library');
const axios = require("axios");
...
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
...
```

## Proxy configuration

You can configure a proxy connection by injecting your own HttpURLConnectionClient on your client instance and changing the `proxy` setter value.

Example:
```javascript
const {HttpURLConnectionClient, Client, Config} = require('@adyen/api-library');
...
const config = new Config();
const client = new Client({ config });
const httpClient = new HttpURLConnectionClient();
httpClient.proxy = { host: "http://google.com", port: 8888,  };

client.setEnvironment('TEST');
client.httpClient = httpClient;
...
```

### Example integration
 
For a closer look at how our NodeJS library works, clone our [example integration](https://github.com/adyen-examples/adyen-node-online-payments). This includes commented code, highlighting key features and concepts, and examples of API calls that can be made using the library.

## Contributing 
We strongly encourage you to join us in contributing to this repository so everyone can benefit from:
| New features and functionality
| Resolved bug fixes and issues
| Any general improvements

Read our [**contribution guidelines**](CONTRIBUTING.md) to find out how to create a pull request.

## Support
If you have a feature request, or spotted a bug or a technical problem, create a GitHub issue. For other questions, contact our [support team](https://www.adyen.help).

## Licence
This repository is available under the [MIT license](LICENSE).

## See also
| [example integration](https://github.com/adyen-examples/adyen-node-online-payments)
