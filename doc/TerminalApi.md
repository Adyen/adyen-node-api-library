### Using the Terminal API 
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
