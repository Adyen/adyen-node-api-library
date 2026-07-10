# Release Notes

## Checkout API v72

This release upgrades the Checkout API from v71 to v72. All service endpoints now target `https://checkout-test.adyen.com/v72`.

### Breaking Changes

#### `DirectDebitAuDetails`
- `holderName` is now **required** (was optional). Consumers must always provide this field.

#### `Donation`
- `donationType` is now **optional** and deprecated. Use `type` instead.

#### `DonationPaymentRequest`
- `additionalData` removed.
- `conversionId` removed (deprecated since Checkout API v68, use `checkoutAttemptId`).
- `deliverAt` removed.
- `threeDSAuthenticationOnly` removed (deprecated since Checkout API v69, use `authenticationData.authenticationOnly`).

#### `PaymentAmountUpdateRequest`
- `enhancedSchemeData` removed. Use the new `mpiData` field instead.

#### `PaymentRequest`
- `conversionId` removed (deprecated since Checkout API v68, use `checkoutAttemptId`).

#### `StandalonePaymentCancelRequest`
- `enhancedSchemeData` removed.

---

### New Features

#### `PaymentAmountUpdateRequest`
- New `adjustAuthType` field (`PaymentAmountUpdateRequest.AdjustAuthTypeEnum`). Possible values: `cardholderInitiatedTransaction`, `merchantInitiatedTransaction`.
- New `adjustAuthorisationData` field (string) for [synchronous authorization adjustments](https://docs.adyen.com/online-payments/adjust-authorisation).
- New `mpiData` field (`ThreeDSecureData`) replacing `enhancedSchemeData`.
