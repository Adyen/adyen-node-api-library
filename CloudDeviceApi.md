# Cloud Device API 

The [Cloud Device API](https://docs.adyen.com/api-explorer/cloud-device-api/1/overview) is our solution to create best-in-class In-person Payments integrations. 

With the Cloud device API you can:

- Send Terminal API requests to a cloud endpoint. You can use this communication method when it is not an option to send Terminal API requests over your local network directly to a payment terminal.
- Check the cloud connection of a payment terminal or of a device used in a Mobile solution for in-person payments.

## Benefits of the Cloud Device API

The Cloud Device API offers the following benefits:
- access to API logs in the Customer Area for troubleshooting errors
- using a version strategy for the API endpoints for controlled and safer rollouts
- improved reliability and security (OAuth support)

New features and products will be released exclusively on the Cloud Device API

## Use the Cloud Device API 

### Setup

First you must initialise the Client **setting the closest** [Region](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/#cloud):
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

// Step 3: Initialize the Cloud Device API service
const cloudDeviceAPI = new CloudDeviceAPI(client);
```

### Send a payment request

```javascript

// define the messageHeader
const messageHeader: MessageHeader = {
    MessageCategory: MessageCategoryType.Payment,
    MessageClass: MessageClassType.Service,
    MessageType: MessageType.Request,
    POIID: "V400m-123456789",
    ProtocolVersion: "3.0",
    SaleID: "POS-123", // Your unique ID for the system where you send this request from
    ServiceID: "abvc-efgh",  // Your unique ID for this request
};

// define the paymentRequest
const paymentRequest: PaymentRequest = {
    PaymentTransaction: {
        AmountsReq: {
            Currency: "EUR",
            RequestedAmount: 1,
        },
    },
    SaleData: {
        SaleTransactionID: {
            TimeStamp: "2025-09-11T08:51:30.698Z",
            TransactionID: "abc1234567890",
        },
        SaleToAcquirerData: {
            applicationInfo: {
                merchantApplication: {
                    version: "1",
                    name: "test"
                }
            },
            metadata: {
                someMetaDataKey1: "YOUR_VALUE",
                someMetaDataKey2: "YOUR_VALUE"
            },
        }
    },
};

// define the request
const cloudDeviceApiRequest: CloudDeviceApiRequest = {
    SaleToPOIRequest: {
        MessageHeader: messageHeader,
        PaymentRequest: paymentRequest,
    },
};

// perform the sync call
const response = await cloudDeviceAPI.sendSync(
    "YOUR_MERCHANT_ACCOUNT",
    "V400m-123456789",
    cloudDeviceApiRequest
);
```


### Send a payment ASYNC request

If you choose to receive the response asynchronously, you only need to use a different method (`sendAsync()`). 
Don't forget to set up [event notifications](https://docs.adyen.com/point-of-sale/design-your-integration/notifications/event-notifications/) in the CA to be able to receive the Cloud Device API responses.

```javascript

// define the request
const cloudDeviceApiRequest: CloudDeviceApiRequest = {
    SaleToPOIRequest: {
        MessageHeader: messageHeader,
        PaymentRequest: paymentRequest,
    },
};

// perform the async call
const response = await cloudDeviceAPI.sendAsync(
    "YOUR_MERCHANT_ACCOUNT",
    "V400m-123456789",
    cloudDeviceApiRequest
);

// handle both `string` and `CloudDeviceApiResponse`
if (typeof response === "string") {
  // request was successful
  console.log("response:", response); // should be 'ok'
} else {
  // request failed: see details in the EventNotification object
  console.log("EventToNotify:", response.SaleToPOIRequest?.EventNotification?.EventToNotify);
  console.log("EventDetails:", response.SaleToPOIRequest?.EventNotification?.EventDetails);
}
```

### Verity the status of the terminals

The Cloud Device API allows your integration to check the status of the terminals.

```javascript

// list of payment terminals or SDK mobile installation IDs
const connectedDevices: ConnectedDevicesResponse = await cloudDeviceAPI.getConnectedDevices("YOUR_MERCHANT_ACCOUNT");
console.log(connectedDevices.uniqueDeviceIds);

// check the payment terminal or SDK mobile installation ID 
const deviceStatus: DeviceStatusResponse = await cloudDeviceAPI.getDeviceStatus("YOUR_MERCHANT_ACCOUNT", "V400m-123456789");
console.log(deviceStatus.status);

```

### Error handling

In case of error try-catch the `CloudDeviceApiError` to understand what went wrong.

```javascript
try {
    const response = await client.sendSync("YOUR_MERCHANT_ACCOUNT", "V400m-123456789", cloudDeviceApiRequest);
    console.log("response:", response);
    } catch (err) {
        if (err instanceof CloudDeviceApiError) {
            console.error("CloudDevice API failed:", err.message);
            console.error("Cause:", err.cause);
        }
    }  
```

### Protect cloud communication

The Adyen Node.js library supports encrypting request and response payloads, allowing you to secure communication between your integration and the cloud. 

```javascript

//  Encryption credentials from the Terminal configuration on CA
const encryptionCredentialDetails: EncryptionCredentialDetails = {
    AdyenCryptoVersion: 1,
    KeyIdentifier: "myKeyIdentifier",
    KeyVersion: "myKeyVersion",
    Passphrase: "myPassphrase"
};

const response: CloudDeviceApiResponse = await cloudDeviceAPI.sendEncryptedSync("YOUR_MERCHANT_ACCOUNT", "V400m-123456789", cloudDeviceApiRequest, encryptionCredentialDetails);
console.log("response:", response);
```

In case of asynchronous integration, you can decrypt the payload of the event notification using `decryptNotification()` method.

```javascript

const response: string = await cloudDeviceAPI.decryptNotification("", encryptionCredentialDetails);
console.log("response:", response);

```