# Adyen Node.js API Library
[![Build Status](https://travis-ci.org/Adyen/adyen-node-api-library.svg?branch=master)](https://travis-ci.org/Adyen/adyen-node-api-library)
[![Coverage Status](https://coveralls.io/repos/github/Adyen/adyen-node-api-library/badge.svg?branch=master)](https://coveralls.io/github/Adyen/adyen-node-api-library?branch=master)
[![Downloads](https://img.shields.io/npm/dm/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@adyen/api-library.svg)
[![Version](https://img.shields.io/npm/v/@adyen/api-library.svg)](https://www.npmjs.com/package/@adyen/api-library)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Adyen_adyen-node-api-library&metric=alert_status)](https://sonarcloud.io/dashboard?id=Adyen_adyen-node-api-library)

The Adyen API Library for NodeJS enables you to work with Adyen APIs and Hosted Payment Pages.

## Integration
The Library supports all APIs under the following services:

* [x] checkout
* [x] checkout utility
* [x] payments
* [x] modifications
* [x] payouts
* [x] recurring
* [x] notifications
* [x] BIN lookup

## Requirements

* Node 8.1.1 or higher

## Installation

You can use NPM to add our library to your project

### NPM

```bash
npm install --save @adyen/api-library
```

## Documentation
* https://docs.adyen.com/developers/development-resources/libraries
* https://docs.adyen.com/developers/checkout/api-integration

## HTTP Client Configuration

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

## Support

If you have any problems, questions or suggestions, create an issue here or send your inquiry to support@adyen.com.

## Licence

MIT license. For more information, see the LICENSE file.
