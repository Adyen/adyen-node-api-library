# Adyen Node.js API Library
![Node.js CI](https://github.com/Adyen/adyen-node-api-library/workflows/Node.js%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/Adyen/adyen-node-api-library/badge.svg?branch=master)](https://coveralls.io/github/Adyen/adyen-node-api-library?branch=master)
[![Downloads](https://img.shields.io/npm/dm/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@adyen/api-library.svg)
[![Version](https://img.shields.io/npm/v/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Adyen_adyen-node-api-library&metric=alert_status)](https://sonarcloud.io/dashboard?id=Adyen_adyen-node-api-library)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Adyen/adyen-node-api-library.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Adyen/adyen-node-api-library/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Adyen/adyen-node-api-library.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Adyen/adyen-node-api-library/context:javascript)

This is the officially supported NodeJS library for using Adyen's APIs.

## Integration
The Library supports all APIs under the following services:

* [Checkout API](https://docs.adyen.com/api-explorer/#/CheckoutService/v67/overview): Our latest integration for accepting online payments. Current supported version: **v67**
* [Payments API](https://docs.adyen.com/api-explorer/#/Payment/v64/overview): Our classic integration for online payments. Current supported version: **v64**
* [Recurring API](https://docs.adyen.com/api-explorer/#/Recurring/v49/overview): Endpoints for managing saved payment details. Current supported version: **v49**
* [Payouts API](https://docs.adyen.com/api-explorer/#/Payout/v64/overview): Endpoints for sending funds to your customers. Current supported version: **v64**
* [Platforms APIs](https://docs.adyen.com/platforms/api): Set of APIs when using Adyen for Platforms. 
  * [Account API](https://docs.adyen.com/api-explorer/#/Account/v6/overview) Current supported version: **v6**
  * [Fund API](https://docs.adyen.com/api-explorer/#/Fund/v6/overview) Current supported version: **v6**
  * [Notification Configuration API](https://docs.adyen.com/api-explorer/#/NotificationConfigurationService/v6/overview) Current supported version: **v6**
* [Local/Cloud-based Terminal API](https://docs.adyen.com/point-of-sale/terminal-api-reference): Our point-of-sale integration.
* [BIN lookup API](https://docs.adyen.com/api-explorer/#/BinLookup/v50/overview): The BIN Lookup API provides endpoints for retrieving information based on a given BIN.  Current supported version: **v50**

For more information, refer to our [documentation](https://docs.adyen.com/) or the [API Explorer](https://docs.adyen.com/api-explorer/).

## Prerequisites
-   [Adyen test account](https://docs.adyen.com/get-started-with-adyen)
-   [API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). For testing, your API credential needs to have the [API PCI Payments role](https://docs.adyen.com/development-resources/api-credentials#roles).
-   Node 10 or higher

## Installation

You can use NPM to add our library to your project

### NPM

```bash
npm install --save @adyen/api-library
```

Alternatively, you can download the [release on GitHub](https://github.com/Adyen/adyen-node-api-library/releases).


## Using the library

### General use with API key
 
Set up the client as a singleton resource; you can then use it to create service objects for the API calls that you make to Adyen:
 
```typescript
    const client = new Client({apiKey: "YOUR_API_KEY", environment: "TEST"});
``` 
### General use with API key for live environment
 ```typescript
     const client = new Client({apiKey: "YOUR_API_KEY", environment: "LIVE"});
 ``` 
### General use with basic auth
```typescript
    const client = new Client({username: "YOUR_USERNAME", password: "YOUR_PASSWORD", environment: "TEST"});
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
* New features and functionality
* Resolved bug fixes and issues
* Any general improvements

Read our [**contribution guidelines**](CONTRIBUTING.md) to find out how to create a pull request.

## Support
If you have a feature request, or spotted a bug or a technical problem, create a GitHub issue. For other questions, contact our [support team](https://support.adyen.com/).

## Licence
This repository is available under the [MIT license](LICENSE).

## See also
* [example integration](https://github.com/adyen-examples/adyen-node-online-payments)
