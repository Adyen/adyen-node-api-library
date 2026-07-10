# Migrating from Terminal (Cloud) API to Cloud device API

## Introduction

The Adyen Node.js API Library now includes the [Cloud device API](https://docs.adyen.com/api-explorer/cloud-device-api/1/overview), a modern replacement for the [Terminal (Cloud) API](https://docs.adyen.com/api-explorer/terminal-api/1/overview) for In-Person Payments cloud integrations.

The Terminal (Cloud) API (`TerminalCloudAPI`) uses hand-crafted models in the `src/typings/terminal` package. The Cloud device API (`CloudDeviceAPI`) is generated from the [Cloud device API OpenAPI specification](https://github.com/Adyen/adyen-openapi/blob/main/yaml/CloudDeviceService-v1.yaml), just like all other services in this library. This means the models and service classes are always in sync with the API, follow the same patterns as the rest of the library (`ObjectSerializer` serialization, `attributeTypeMap`, etc.), and benefit from the automated update process.

Because the Cloud device API models (`src/typings/tapi`) are generated from the spec rather than hand-crafted, there are differences in class names, enum naming conventions, field types, and properties. This guide describes these differences and what to be aware of when adopting the Cloud device API.

## Benefits of the Cloud device API

The Cloud device API introduces several improvements over the Terminal (Cloud) API:

- **API logs in the Customer Area**: troubleshoot errors using the API logs available in your Customer Area.
- **Versioned endpoints**: the API uses a version strategy for controlled and safer rollouts.
- **Improved security**: supports OAuth authentication alongside API key authentication.
- **Device management endpoints**: query connected devices and check their status directly from your integration.
- **New features**: new In-Person Payments features and products are released exclusively on the Cloud device API.

### Who should migrate?

- **New integrations**: use the Cloud device API from the start. See the [Cloud device API documentation](CloudDeviceApi.md).
- **Updating your cloud integration**: consider migrating to the Cloud device API to benefit from the improvements listed above.
- **Not making changes**: you can continue using the Terminal (Cloud) API. It remains functional, but you will miss out on the benefits of the Cloud device API.

## Prerequisites

Before you start using the Cloud device API, make sure the following are in place.

### API key role

Your API key must have the **Cloud device API** user role assigned. You can manage roles in the Customer Area under **Developers > API credentials**.

### Live environment: region configuration

On the TEST environment, no region configuration is needed. On the LIVE environment, you must configure `region` to the region closest to your terminals:

``` typescript
import { Client, Config, EnvironmentEnum, RegionEnum, CloudDeviceAPI } from "@adyen/api-library";

const client = new Client(new Config({
    apiKey: "YOUR_API_KEY",
    environment: EnvironmentEnum.LIVE,
    region: RegionEnum.EU, // set to the region closest to your terminals
}));

const cloudDeviceAPI = new CloudDeviceAPI(client);
```

See the [Terminal API cloud documentation](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/#cloud) for available regions.

## Key differences

The following sections describe the key differences between the Terminal (Cloud) API and the Cloud device API.

### Service class and endpoints

The Cloud device API uses the `CloudDeviceAPI` service class instead of `TerminalCloudAPI`:

| | Terminal (Cloud) API | Cloud device API |
|---|---|---|
| Service class | `TerminalCloudAPI` | `CloudDeviceAPI` (exposes `.CloudDeviceApi`) |
| Request wrapper | `terminal.TerminalAPIRequest` (`SaleToPOIRequest`) | `clouddevice.CloudDeviceApiRequest` |
| Response wrapper | `terminal.TerminalApiResponse` | `clouddevice.CloudDeviceApiResponse` |
| Async response | `string` (`"ok"`) or `TerminalApiResponse` | `clouddevice.CloudDeviceApiAsyncResponse` |

The Cloud device API `sync` and `async` methods require `merchantAccount` and `deviceId` as parameters, in addition to the request body. Make sure the `POIID` in the `MessageHeader` matches the `deviceId`.

**Cloud device API:**
``` typescript
// make a sync request
const response = await cloudDeviceAPI.CloudDeviceApi.sync("myMerchant", "P400Plus-123456789", cloudDeviceApiRequest);

// get the list of connected devices for a given merchant account
const devices = await cloudDeviceAPI.CloudDeviceApi.getConnectedDevices("myMerchant");
```

### Model package

The Terminal (Cloud) API uses hand-crafted models in `src/typings/terminal`. The Cloud device API uses models generated from the OpenAPI specification in `src/typings/tapi`.

| Terminal (Cloud) API (`terminal`) | Cloud device API (`tapi`) |
|---|---|
| `SaleToPOIRequest` | `SaleToPOIRequest` |
| `MessageHeader` | `MessageHeader` |
| `MessageCategoryType` | `MessageCategory` (renamed, see below) |
| `PaymentRequest` | `PaymentRequest` |
| `AmountsReq` | `AmountsReq` |

### Renamed classes and enums

#### Enum classes (dropped `Type` suffix)

Several enum classes are named differently in the Cloud device API to match the OpenAPI specification. The `Type` suffix has been dropped:

| Old name (`terminal`)       | New name (`tapi`)       |
|-----------------------------|-------------------------|
| `AlignmentType`             | `Alignment`             |
| `CharacterHeightType`       | `CharacterHeight`       |
| `CharacterStyleType`        | `CharacterStyle`        |
| `CharacterWidthType`        | `CharacterWidth`        |
| `DeviceType`                | `Device`                |
| `DocumentQualifierType`     | `DocumentQualifier`     |
| `ErrorConditionType`        | `ErrorCondition`        |
| `EventToNotifyType`         | `EventToNotify`         |
| `GlobalStatusType`          | `GlobalStatus`          |
| `IdentificationSupportType` | `IdentificationSupport` |
| `InfoQualifyType`           | `InfoQualify`           |
| `InputCommandType`          | `InputCommand`          |
| `LoyaltyHandlingType`       | `LoyaltyHandling`       |
| `MenuEntryTagType`          | `MenuEntryTag`          |
| `MessageCategoryType`       | `MessageCategory`       |
| `MessageClassType`          | `MessageClass`          |
| `OutputFormatType`          | `OutputFormat`          |
| `PeriodUnitType`            | `PeriodUnit`            |
| `PINFormatType`             | `PINFormat`             |
| `PrinterStatusType`         | `PrinterStatus`         |
| `ResponseModeType`          | `ResponseMode`          |
| `ResultType`                | `Result`                |
| `ReversalReasonType`        | `ReversalReason`        |
| `SoundActionType`           | `SoundAction`           |
| `SoundFormatType`           | `SoundFormat`           |
| `TrackFormatType`           | `TrackFormat`           |
| `TransactionActionType`     | `TransactionAction`     |

**Note**: enums that already end with `Type` in the spec (for example, `MessageType`, `TokenRequestedType`, `AccountType`) are **not** renamed.

#### Model classes

Some classes are also renamed to adopt the name of the model in the OpenAPI specification.

| Terminal (Cloud) API (`terminal`) | Cloud device API (`tapi`) |
|-----------------------------------|---------------------------|
| `CheckTypeCodeType`               | `TypeCode`                |
| `TransactionIdentification`       | `TransactionIDType`       |
| `CardholderPIN`                   | `CardHolderPIN`           |
| `SignaturePoint`                  | `Point`                   |
| `LoyaltyAccountId`                | `LoyaltyAccountID`        |
| `StoredValueAccountId`            | `StoredValueAccountID`    |
| `TerminalApiRequest`              | `TerminalAPIRequest`      |
| `TerminalApiResponse`             | `TerminalAPIResponse`     |

### Type changes

Some field types differ in the generated models.

#### Timestamp fields: `object` -> `Date`

The Cloud device API models use `Date` for timestamp fields (`DateTime`, `ExpiryDateTime`, `TimeStamp`), whereas the Terminal (Cloud) API models used a generic `{ [key: string]: any }` type. Always provide a `Date`:

**Terminal (Cloud) API:**
``` typescript
SaleTransactionID: {
    TransactionID: "001",
    TimeStamp: new Date().toISOString(),
}
```

**Cloud device API:**
``` typescript
SaleTransactionID: {
    TransactionID: "001",
    TimeStamp: new Date(),
}
```

#### Inline enums promoted to standalone enum classes

More than 40 properties that were previously inline enums (for example, `Response.ErrorConditionEnum`) are now standalone enum classes (for example, `ErrorCondition`). Import the enum from `src/typings/tapi/models` instead of accessing it through the parent class.

#### `string` -> `number`

Several fields changed from `string` to `number` in the Cloud device API, including `AcquirerID`, `POIReconciliationID`, `CardCountryCode`, `PAN`, and `IMEI`.

#### Complex types replaced with `string`

- `ContentInformation` -> `string` for `ProtectedCardData`, `ProtectedSignature`, `Password`, `ProtectedMobileData`
- `SaleToAcquirerData` (class) -> `string` on `saleData`

#### Array -> single value

`ForceEntryMode`, `ServicesEnabled`, and `AuthenticationMethod` are single values instead of arrays.

### Property changes

Some properties were renamed, added, or removed. The most relevant renames:

| File | Terminal (Cloud) API | Cloud device API |
|------|----------------------|------------------|
| `iCCResetData` | `AtrValue` | `ATRValue` |
| `soundContent` | `Value` | `Text` |
| `storedValueAccountID` | `Value` | `StoredValueID` |
| `trackData` | `Value` | `TrackValue` |
| `paymentResult` | `InstalmentType` | `Instalment` |

New properties in the Cloud device API include `PaymentReceipt` (`balanceInquiryResponse`, `storedValueResponse`), `HostReconciliationID` (`paymentAcquirerData`), `ProtectedCardData` and `StoredValueAccountID` (`paymentInstrumentData`), and `TokenRequestStatus` (`loginResponse`).

### Enum value differences

| Enum | Removed values | Added values |
|------|----------------|--------------|
| `CharacterStyle` | `Underlined` | `Underline` |
| `EventToNotify` | `NetworkConnected`, `NetworkDisconnected` | `UseAnotherCardForPreauth` |
| `MessageCategory` | `Batch`, `CardReaderAPDU`, `CardReaderInit`, `CardReaderPowerOff`, `PIN`, `Sound`, `Transmit` | `None` |
| `TrackFormat` | `JisI`, `JisIi` | (none) |

### Async response handling

The async response handling differs between the two APIs. The Terminal (Cloud) API `async` method returns a plain `string` (`"ok"`) on success, or a `TerminalApiResponse` on failure. The Cloud device API wraps the response in `CloudDeviceApiAsyncResponse`.

**Terminal (Cloud) API:**
``` typescript
const response = await terminalCloudAPI.async(terminalAPIRequest);
if (typeof response === "string") {
    // success ("ok")
} else {
    // failed: response.SaleToPOIRequest?.EventNotification
}
```

**Cloud device API:**
``` typescript
const response = await cloudDeviceAPI.CloudDeviceApi.async("myMerchant", "P400Plus-123456789", cloudDeviceApiRequest);

if (response.Result === "ok") {
    // success
} else {
    // request failed: check EventNotification for error details
    const eventNotification = response.SaleToPOIRequest?.EventNotification;
}
```

### Device management (new)

The Cloud device API includes endpoints for device management that are not available in the Terminal (Cloud) API:

``` typescript
// List connected devices for a merchant account
const devices = await cloudDeviceAPI.CloudDeviceApi.getConnectedDevices("myMerchant");
console.log(devices.uniqueDeviceIds);

// Check the status of a specific device
const status = await cloudDeviceAPI.CloudDeviceApi.getDeviceStatus("myMerchant", "P400Plus-123456789");
console.log(status.status);
```

## Side-by-side comparison

### Terminal (Cloud) API
``` typescript
import { Client, Config, EnvironmentEnum, TerminalCloudAPI } from "@adyen/api-library";
import {
    MessageCategoryType,
    MessageClassType,
    MessageType,
    SaleToPOIRequest,
} from "@adyen/api-library/lib/src/typings/terminal/models";

const client = new Client(new Config({ apiKey: "YOUR_API_KEY", environment: EnvironmentEnum.TEST }));
const terminalCloudAPI = new TerminalCloudAPI(client);

const paymentRequest: SaleToPOIRequest = {
    MessageHeader: {
        ProtocolVersion: "3.0",
        MessageClass: MessageClassType.Service,
        MessageCategory: MessageCategoryType.Payment,
        MessageType: MessageType.Request,
        SaleID: "001",
        ServiceID: "001",
        POIID: "P400Plus-123456789",
    },
    PaymentRequest: {
        SaleData: {
            SaleTransactionID: {
                TransactionID: "001",
                TimeStamp: new Date().toISOString(),
            },
        },
        PaymentTransaction: {
            AmountsReq: { Currency: "EUR", RequestedAmount: 1 },
        },
    },
};

const response = await terminalCloudAPI.sync({ SaleToPOIRequest: paymentRequest });
```

### Cloud device API
``` typescript
import { Client, Config, EnvironmentEnum, CloudDeviceAPI } from "@adyen/api-library";
import {
    MessageCategory,
    MessageClass,
    MessageType,
    SaleToPOIRequest,
} from "@adyen/api-library/lib/src/typings/tapi/models";
import { CloudDeviceApiRequest } from "@adyen/api-library/lib/src/typings/clouddevice/models";

const client = new Client(new Config({ apiKey: "YOUR_API_KEY", environment: EnvironmentEnum.TEST }));
const cloudDeviceAPI = new CloudDeviceAPI(client);

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
                AmountsReq: { Currency: "EUR", RequestedAmount: 1 },
            },
        },
    },
};

// Note: make sure POIID matches the deviceId parameter
const response = await cloudDeviceAPI.CloudDeviceApi.sync("myMerchant", "P400Plus-123456789", request);
```

## Models not available in the Cloud device API

Some models present in the `terminal` package are not available in the `tapi` package because they are not part of the current OpenAPI specification. These represent features that were never supported by the Terminal (Cloud) API:

- `BatchRequest` / `BatchResponse`
- `LoyaltyRequest`
- `PINRequest` / `PINResponse`
- `CardReaderInitRequest` / `CardReaderInitResponse`
- `CardReaderPowerOffRequest` / `CardReaderPowerOffResponse`
- `SoundRequest` / `SoundResponse`
- `TransmitRequest` / `TransmitResponse`
- `ContentInformation`

The `terminal` message-level security and crypto types (for example, `SecurityKey`, `EnvelopedData`, `SignedData`) are also absent from the `tapi` package. To secure cloud communication with the Cloud device API, use `EncryptedCloudDeviceApi` instead (see [Protect cloud communication](CloudDeviceApi.md#protect-cloud-communication)).

If your integration requires these models, please [create a new issue](https://github.com/Adyen/adyen-node-api-library/issues), so we can understand your needs and provide you with the necessary help.

## Testing and validation
Perform a thorough validation of the migration.

### 1. Unit tests

- Verify that your request objects serialize to the same JSON structure with the new models. Compare with the expected JSON payloads from your existing test data.
- Pay special attention to the renamed fields and type changes described above.

### 2. Integration tests on TEST environment

- Point the `CloudDeviceAPI` to the test environment (`EnvironmentEnum.TEST`).
- Run your most common payment flows: payment, reversal, refund, and reconciliation.
- Verify that the response structure is parsed correctly, especially the fields with type changes (`Date`, `number`).
- Test your async flow to confirm event notifications are received and can be parsed.
- Test with a POS terminal.

### 3. Validate response handling

- Check that `PaymentResponse`, `ReversalResponse`, and other response models deserialize without errors.
- Confirm that boolean field handling works correctly without the old default-value helpers.

### 4. Device management (new)

- Use `getConnectedDevices()` and `getDeviceStatus()` to validate your terminal connectivity before running transaction tests.

### 5. Rollout strategy

- Consider running the Cloud device API integration in parallel with your existing Terminal (Cloud) API integration.
- Observe traffic (with the Customer Area API Logs or your own observability tools) to validate the API requests and responses.
- Compare the results of both integrations to ensure functional equivalence.

## Further resources

- [Cloud device API documentation](CloudDeviceApi.md)
- [Cloud device API Explorer](https://docs.adyen.com/api-explorer/cloud-device-api/1/overview)
- [Terminal API documentation](TerminalApi.md)
- [In-Person Payments documentation](https://docs.adyen.com/point-of-sale/)
