# Cloud device API

The [Cloud device API](https://docs.adyen.com/api-explorer/cloud-device-api/1/overview) is our solution to create best-in-class in-person payments integrations.

With the Cloud device API you can:

- send Terminal API requests to a cloud endpoint. You can use this communication method when it is not an option to send Terminal API requests over your local network directly to a payment terminal.
- check the cloud connection of a payment terminal or of a device used in a Mobile solution for in-person payments.

## Benefits of the Cloud device API

The Cloud device API offers the following benefits:
- access to API logs in the Customer Area for troubleshooting errors
- using a version strategy for the API endpoints for controlled and safer rollouts
- improved reliability and security (OAuth support)

New features and products will be released exclusively on the Cloud device API.

## Use the Cloud device API

### Setup

First you must initialize the Client (see an example on TEST):
``` typescript
// Import the required classes
import { Client, Config, EnvironmentEnum, CloudDeviceAPI } from "@adyen/api-library";
import {
    MessageCategory,
    MessageClass,
    MessageType,
    SaleToPOIRequest,
} from "@adyen/api-library/lib/src/typings/tapi/models";
import { CloudDeviceApiRequest } from "@adyen/api-library/lib/src/typings/clouddevice/models";

// Setup Client on TEST
const client = new Client(new Config({ apiKey: "YOUR_API_KEY", environment: EnvironmentEnum.TEST }));

const cloudDeviceAPI = new CloudDeviceAPI(client);
```
On the LIVE environment you must **set the closest** [Region](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/#cloud):
``` typescript
import { Client, Config, EnvironmentEnum, RegionEnum, CloudDeviceAPI } from "@adyen/api-library";

// Setup Client on LIVE (Region is required)
const client = new Client(new Config({
    apiKey: "YOUR_API_KEY",
    environment: EnvironmentEnum.LIVE,
    region: RegionEnum.US, // set to the region closest to your terminals
}));

const cloudDeviceAPI = new CloudDeviceAPI(client);
```

### Send a payment SYNC request

The `sync` and `async` endpoints require `merchantAccount` and `deviceId` as parameters, in addition to the request body. Make sure the `POIID` in the `MessageHeader` matches the `deviceId`.

``` typescript
const request: CloudDeviceApiRequest = {
    SaleToPOIRequest: {
        MessageHeader: {
            ProtocolVersion: "3.0",
            MessageClass: MessageClass.Service,
            MessageCategory: MessageCategory.Payment,
            MessageType: MessageType.Request,
            SaleID: "001",
            ServiceID: "001",
            POIID: "P400Plus-123456789",
        },
        PaymentRequest: {
            SaleData: {
                SaleTransactionID: {
                    TransactionID: "001",
                    TimeStamp: new Date(),
                },
            },
            PaymentTransaction: {
                AmountsReq: {
                    Currency: "EUR",
                    RequestedAmount: 1,
                },
            },
        },
    },
};

const response = await cloudDeviceAPI.CloudDeviceApi.sync("myMerchant", "P400Plus-123456789", request);
console.log(response.SaleToPOIResponse);
```

### Send a payment ASYNC request

If you choose to receive the response asynchronously, you only need to use a different method (`async`).
Don't forget to set up [event notifications](https://docs.adyen.com/point-of-sale/design-your-integration/notifications/event-notifications/) in the Customer Area to be able to receive the Cloud device API responses.

``` typescript
// define the request (same as per sync)
const response = await cloudDeviceAPI.CloudDeviceApi.async("myMerchant", "P400Plus-123456789", request);

if (response.Result === "ok") {
    // success
} else {
    // request failed: see details in the EventNotification object
    const eventNotification = response.SaleToPOIRequest?.EventNotification;
    console.log("EventToNotify:", eventNotification?.EventToNotify);
    console.log("EventDetails:", eventNotification?.EventDetails);
}
```

### Verify the status of the terminals

The Cloud device API allows your integration to check the status of the terminals.

``` typescript
// list of payment terminals or SDK mobile installation IDs
const connectedDevices = await cloudDeviceAPI.CloudDeviceApi.getConnectedDevices("myMerchant");
console.log(connectedDevices.uniqueDeviceIds);
// ["P400Plus-123456789", "AMS1-000168242800763"]

// optionally filter by store
const storeDevices = await cloudDeviceAPI.CloudDeviceApi.getConnectedDevices("myMerchant", "YOUR_STORE_ID");

// check the payment terminal or SDK mobile installation ID
const deviceStatus = await cloudDeviceAPI.CloudDeviceApi.getDeviceStatus("myMerchant", "AMS1-000168242800763");
console.log(deviceStatus.status);
// ONLINE
```

### Protect cloud communication

The Adyen Node.js library supports encrypting request and response payloads, allowing you to secure communication between your integration and the cloud.

Provide the encryption credentials configured on the Terminal in your Customer Area, and use `EncryptedCloudDeviceApi` instead of `CloudDeviceApi`. For details on how to set up these credentials (`AdyenCryptoVersion`, `KeyIdentifier`, `KeyVersion`, and `Passphrase`) in the Customer Area, see [Protect communications](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/local/#protect-communications).

``` typescript
import { EncryptedCloudDeviceApi } from "@adyen/api-library/lib/src/services/clouddevice/encryptedCloudDeviceApi";
import { EncryptionCredentialDetails } from "@adyen/api-library/lib/src/security/clouddevice/encryptionCredentialDetails";

// Encryption credentials from the Terminal configuration on CA
const encryptionCredentialDetails: EncryptionCredentialDetails = {
    adyenCryptoVersion: 1,
    keyIdentifier: "CryptoKeyIdentifier12345",
    keyVersion: 1,
    passphrase: "p@ssw0rd123456",
};

// Use EncryptedCloudDeviceApi instead of CloudDeviceApi
const encryptedCloudDeviceApi = new EncryptedCloudDeviceApi(client, encryptionCredentialDetails);

const response = await encryptedCloudDeviceApi.sync("TestMerchantAccount", "V400m-123456789", request);
console.log(response);
```

In case of asynchronous integration, you can decrypt the payload of the event notifications using the `decryptNotification()` method.

``` typescript
// JSON with encrypted SaleToPOIResponse (for async responses) or SaleToPOIRequest (for event notifications)
const payload = "...";

const decryptedPayload = encryptedCloudDeviceApi.decryptNotification(payload);
console.log(decryptedPayload);
```

## Helper classes

### PredefinedContentHelper

When your integration receives a Display event notification, the terminal sends a `DisplayRequest` with an `OutputContent` that contains a `PredefinedContent.ReferenceID`. This field is a query-string that encodes the event type and transaction context.

`PredefinedContentHelper` parses the `ReferenceID` and exposes typed accessors so you don't have to hand-roll query-string parsing.

``` typescript
import { PredefinedContentHelper, DisplayNotificationEvent } from "@adyen/api-library";

// referenceId comes from DisplayRequest.OutputContent.PredefinedContent.ReferenceID
const referenceId = "TransactionID=oLkO001517998574000&TimeStamp=2018-02-07T10%3a16%3a14.000Z&event=PIN_ENTERED";

const helper = new PredefinedContentHelper(referenceId);

const event = helper.getEvent(); // DisplayNotificationEvent.PIN_ENTERED or null
if (event === DisplayNotificationEvent.PIN_ENTERED) {
    console.log("Customer is entering PIN");
}

console.log(helper.getTransactionId()); // "oLkO001517998574000"
console.log(helper.getTimeStamp());     // "2018-02-07T10:16:14.000Z"
console.log(helper.toObject());         // { TransactionID: "...", TimeStamp: "...", event: "PIN_ENTERED" }
```

The `DisplayNotificationEvent` enum contains all supported event values, such as `CARD_INSERTED`, `WAIT_FOR_PIN`, `PIN_ENTERED`, `TENDER_FINAL`, and others.

### SaleDataHelper

The `SaleData.SaleToAcquirerData` field carries sale information intended for the acquirer, encoded either as Base64 JSON or as form-encoded key-value pairs. `SaleDataHelper` wraps a `SaleData` object, auto-detects the format, and decodes it into a typed `SaleToAcquirerData` object.

``` typescript
import { SaleDataHelper, Types } from "@adyen/api-library";

const saleData = new Types.tapi.SaleData();
saleData.SaleToAcquirerData = "shopperEmail=foo@bar.com&currency=EUR&metadata.orderId=42";

// returns the parsed SaleToAcquirerData, or null if the field is absent or unparsable
const acquirerData = new SaleDataHelper(saleData).getSaleToAcquirerData();
console.log(acquirerData);
// {
//   shopperEmail: "foo@bar.com",
//   currency: "EUR",
//   metadata: { orderId: "42" }
// }
```

### SaleToAcquirerDataParser

Use `SaleToAcquirerDataParser` directly when you have the raw string, or when you want to build and encode a `SaleToAcquirerData` payload yourself. It exposes `parse` (auto-detects the format), the explicit `fromBase64` / `fromKeyValuePairs` decoders, and the `toJson` / `toBase64` serializers.

``` typescript
import { SaleToAcquirerDataParser, SaleToAcquirerData, RecurringProcessingModel } from "@adyen/api-library";

// Parse a raw value, auto-detecting Base64 JSON vs key-value pairs
const parsed = SaleToAcquirerDataParser.parse("shopperEmail=foo@bar.com&tenderOption=AskGratuity");

// Build a payload and encode it for SaleData.SaleToAcquirerData
const data: SaleToAcquirerData = {
    merchantAccount: "TestMerchant",
    currency: "EUR",
    shopperReference: "shopper-123",
    recurringProcessingModel: RecurringProcessingModel.CardOnFile,
    metadata: { orderId: "42" },
};

const encoded = SaleToAcquirerDataParser.toBase64(data); // Base64 string, ready to assign to SaleData.SaleToAcquirerData
```
