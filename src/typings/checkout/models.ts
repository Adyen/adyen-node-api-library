import localVarRequest from 'request';

export * from './accountInfo';
export * from './acctInfo';
export * from './achDetails';
export * from './additionalData3DSecure';
export * from './additionalDataAirline';
export * from './additionalDataCarRental';
export * from './additionalDataCommon';
export * from './additionalDataLevel23';
export * from './additionalDataLodging';
export * from './additionalDataOpenInvoice';
export * from './additionalDataOpi';
export * from './additionalDataRatepay';
export * from './additionalDataRetry';
export * from './additionalDataRisk';
export * from './additionalDataRiskStandalone';
export * from './additionalDataSubMerchant';
export * from './additionalDataTemporaryServices';
export * from './additionalDataWallets';
export * from './address';
export * from './affirmDetails';
export * from './afterpayDetails';
export * from './amazonPayDetails';
export * from './amount';
export * from './amounts';
export * from './ancvDetails';
export * from './androidPayDetails';
export * from './applePayDetails';
export * from './applePayDonations';
export * from './applePaySessionRequest';
export * from './applePaySessionResponse';
export * from './applicationInfo';
export * from './authenticationData';
export * from './bacsDirectDebitDetails';
export * from './balanceCheckRequest';
export * from './balanceCheckResponse';
export * from './billDeskDetails';
export * from './billingAddress';
export * from './blikDetails';
export * from './browserInfo';
export * from './cancelOrderRequest';
export * from './cancelOrderResponse';
export * from './cardBrandDetails';
export * from './cardDetails';
export * from './cardDetailsRequest';
export * from './cardDetailsResponse';
export * from './cardDonations';
export * from './cashAppDetails';
export * from './cellulantDetails';
export * from './checkoutAwaitAction';
export * from './checkoutBankAccount';
export * from './checkoutBankTransferAction';
export * from './checkoutDelegatedAuthenticationAction';
export * from './checkoutNativeRedirectAction';
export * from './checkoutOrderResponse';
export * from './checkoutQrCodeAction';
export * from './checkoutRedirectAction';
export * from './checkoutSDKAction';
export * from './checkoutSessionInstallmentOption';
export * from './checkoutSessionThreeDS2RequestData';
export * from './checkoutThreeDS2Action';
export * from './checkoutVoucherAction';
export * from './commonField';
export * from './company';
export * from './createCheckoutSessionRequest';
export * from './createCheckoutSessionResponse';
export * from './createOrderRequest';
export * from './createOrderResponse';
export * from './deliveryAddress';
export * from './deliveryMethod';
export * from './detailsRequestAuthenticationData';
export * from './deviceRenderOptions';
export * from './dokuDetails';
export * from './donation';
export * from './donationCampaign';
export * from './donationCampaignsRequest';
export * from './donationCampaignsResponse';
export * from './donationPaymentRequest';
export * from './donationPaymentRequestPaymentMethod';
export * from './donationPaymentResponse';
export * from './dotpayDetails';
export * from './dragonpayDetails';
export * from './eBankingFinlandDetails';
export * from './econtextVoucherDetails';
export * from './eftDetails';
export * from './encryptedOrderData';
export * from './externalPlatform';
export * from './fastlaneDetails';
export * from './forexQuote';
export * from './fraudCheckResult';
export * from './fraudResult';
export * from './fundOrigin';
export * from './fundRecipient';
export * from './genericIssuerPaymentMethodDetails';
export * from './giropayDetails';
export * from './googlePayDetails';
export * from './googlePayDonations';
export * from './idealDetails';
export * from './idealDonations';
export * from './inputDetail';
export * from './installmentOption';
export * from './installments';
export * from './item';
export * from './klarnaDetails';
export * from './lineItem';
export * from './listStoredPaymentMethodsResponse';
export * from './mandate';
export * from './masterpassDetails';
export * from './mbwayDetails';
export * from './merchantDevice';
export * from './merchantRiskIndicator';
export * from './mobilePayDetails';
export * from './molPayDetails';
export * from './name';
export * from './openInvoiceDetails';
export * from './payByBankAISDirectDebitDetails';
export * from './payByBankDetails';
export * from './payPalDetails';
export * from './payPayDetails';
export * from './payToDetails';
export * from './payUUpiDetails';
export * from './payWithGoogleDetails';
export * from './payWithGoogleDonations';
export * from './paymentAmountUpdateRequest';
export * from './paymentAmountUpdateResponse';
export * from './paymentCancelRequest';
export * from './paymentCancelResponse';
export * from './paymentCaptureRequest';
export * from './paymentCaptureResponse';
export * from './paymentCompletionDetails';
export * from './paymentDetails';
export * from './paymentDetailsRequest';
export * from './paymentDetailsResponse';
export * from './paymentLinkRequest';
export * from './paymentLinkResponse';
export * from './paymentMethod';
export * from './paymentMethodGroup';
export * from './paymentMethodIssuer';
export * from './paymentMethodToStore';
export * from './paymentMethodUPIApps';
export * from './paymentMethodsRequest';
export * from './paymentMethodsResponse';
export * from './paymentRefundRequest';
export * from './paymentRefundResponse';
export * from './paymentRequest';
export * from './paymentRequestPaymentMethod';
export * from './paymentResponse';
export * from './paymentResponseAction';
export * from './paymentReversalRequest';
export * from './paymentReversalResponse';
export * from './paypalUpdateOrderRequest';
export * from './paypalUpdateOrderResponse';
export * from './phone';
export * from './pixDetails';
export * from './pixRecurring';
export * from './platformChargebackLogic';
export * from './pseDetails';
export * from './ratepayDetails';
export * from './recurring';
export * from './responseAdditionalData3DSecure';
export * from './responseAdditionalDataBillingAddress';
export * from './responseAdditionalDataCard';
export * from './responseAdditionalDataCommon';
export * from './responseAdditionalDataDomesticError';
export * from './responseAdditionalDataInstallments';
export * from './responseAdditionalDataNetworkTokens';
export * from './responseAdditionalDataOpi';
export * from './responseAdditionalDataSepa';
export * from './responsePaymentMethod';
export * from './riskData';
export * from './rivertyDetails';
export * from './sDKEphemPubKey';
export * from './samsungPayDetails';
export * from './sepaDirectDebitDetails';
export * from './serviceError';
export * from './sessionResultResponse';
export * from './shopperInteractionDevice';
export * from './split';
export * from './splitAmount';
export * from './standalonePaymentCancelRequest';
export * from './standalonePaymentCancelResponse';
export * from './storedPaymentMethod';
export * from './storedPaymentMethodDetails';
export * from './storedPaymentMethodRequest';
export * from './storedPaymentMethodResource';
export * from './subInputDetail';
export * from './subMerchant';
export * from './subMerchantInfo';
export * from './taxTotal';
export * from './threeDS2RequestData';
export * from './threeDS2RequestFields';
export * from './threeDS2ResponseData';
export * from './threeDS2Result';
export * from './threeDSRequestData';
export * from './threeDSRequestorAuthenticationInfo';
export * from './threeDSRequestorPriorAuthenticationInfo';
export * from './threeDSecureData';
export * from './twintDetails';
export * from './updatePaymentLinkRequest';
export * from './upiCollectDetails';
export * from './upiIntentDetails';
export * from './utilityRequest';
export * from './utilityResponse';
export * from './vippsDetails';
export * from './visaCheckoutDetails';
export * from './weChatPayDetails';
export * from './weChatPayMiniProgramDetails';
export * from './zipDetails';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountInfo } from './accountInfo';
import { AcctInfo } from './acctInfo';
import { AchDetails } from './achDetails';
import { AdditionalData3DSecure } from './additionalData3DSecure';
import { AdditionalDataAirline } from './additionalDataAirline';
import { AdditionalDataCarRental } from './additionalDataCarRental';
import { AdditionalDataCommon } from './additionalDataCommon';
import { AdditionalDataLevel23 } from './additionalDataLevel23';
import { AdditionalDataLodging } from './additionalDataLodging';
import { AdditionalDataOpenInvoice } from './additionalDataOpenInvoice';
import { AdditionalDataOpi } from './additionalDataOpi';
import { AdditionalDataRatepay } from './additionalDataRatepay';
import { AdditionalDataRetry } from './additionalDataRetry';
import { AdditionalDataRisk } from './additionalDataRisk';
import { AdditionalDataRiskStandalone } from './additionalDataRiskStandalone';
import { AdditionalDataSubMerchant } from './additionalDataSubMerchant';
import { AdditionalDataTemporaryServices } from './additionalDataTemporaryServices';
import { AdditionalDataWallets } from './additionalDataWallets';
import { Address } from './address';
import { AffirmDetails } from './affirmDetails';
import { AfterpayDetails } from './afterpayDetails';
import { AmazonPayDetails } from './amazonPayDetails';
import { Amount } from './amount';
import { Amounts } from './amounts';
import { AncvDetails } from './ancvDetails';
import { AndroidPayDetails } from './androidPayDetails';
import { ApplePayDetails } from './applePayDetails';
import { ApplePayDonations } from './applePayDonations';
import { ApplePaySessionRequest } from './applePaySessionRequest';
import { ApplePaySessionResponse } from './applePaySessionResponse';
import { ApplicationInfo } from './applicationInfo';
import { AuthenticationData } from './authenticationData';
import { BacsDirectDebitDetails } from './bacsDirectDebitDetails';
import { BalanceCheckRequest } from './balanceCheckRequest';
import { BalanceCheckResponse } from './balanceCheckResponse';
import { BillDeskDetails } from './billDeskDetails';
import { BillingAddress } from './billingAddress';
import { BlikDetails } from './blikDetails';
import { BrowserInfo } from './browserInfo';
import { CancelOrderRequest } from './cancelOrderRequest';
import { CancelOrderResponse } from './cancelOrderResponse';
import { CardBrandDetails } from './cardBrandDetails';
import { CardDetails } from './cardDetails';
import { CardDetailsRequest } from './cardDetailsRequest';
import { CardDetailsResponse } from './cardDetailsResponse';
import { CardDonations } from './cardDonations';
import { CashAppDetails } from './cashAppDetails';
import { CellulantDetails } from './cellulantDetails';
import { CheckoutAwaitAction } from './checkoutAwaitAction';
import { CheckoutBankAccount } from './checkoutBankAccount';
import { CheckoutBankTransferAction } from './checkoutBankTransferAction';
import { CheckoutDelegatedAuthenticationAction } from './checkoutDelegatedAuthenticationAction';
import { CheckoutNativeRedirectAction } from './checkoutNativeRedirectAction';
import { CheckoutOrderResponse } from './checkoutOrderResponse';
import { CheckoutQrCodeAction } from './checkoutQrCodeAction';
import { CheckoutRedirectAction } from './checkoutRedirectAction';
import { CheckoutSDKAction } from './checkoutSDKAction';
import { CheckoutSessionInstallmentOption } from './checkoutSessionInstallmentOption';
import { CheckoutSessionThreeDS2RequestData } from './checkoutSessionThreeDS2RequestData';
import { CheckoutThreeDS2Action } from './checkoutThreeDS2Action';
import { CheckoutVoucherAction } from './checkoutVoucherAction';
import { CommonField } from './commonField';
import { Company } from './company';
import { CreateCheckoutSessionRequest } from './createCheckoutSessionRequest';
import { CreateCheckoutSessionResponse } from './createCheckoutSessionResponse';
import { CreateOrderRequest } from './createOrderRequest';
import { CreateOrderResponse } from './createOrderResponse';
import { DeliveryAddress } from './deliveryAddress';
import { DeliveryMethod } from './deliveryMethod';
import { DetailsRequestAuthenticationData } from './detailsRequestAuthenticationData';
import { DeviceRenderOptions } from './deviceRenderOptions';
import { DokuDetails } from './dokuDetails';
import { Donation } from './donation';
import { DonationCampaign } from './donationCampaign';
import { DonationCampaignsRequest } from './donationCampaignsRequest';
import { DonationCampaignsResponse } from './donationCampaignsResponse';
import { DonationPaymentRequest } from './donationPaymentRequest';
import { DonationPaymentRequestPaymentMethod } from './donationPaymentRequestPaymentMethod';
import { DonationPaymentResponse } from './donationPaymentResponse';
import { DotpayDetails } from './dotpayDetails';
import { DragonpayDetails } from './dragonpayDetails';
import { EBankingFinlandDetails } from './eBankingFinlandDetails';
import { EcontextVoucherDetails } from './econtextVoucherDetails';
import { EftDetails } from './eftDetails';
import { EncryptedOrderData } from './encryptedOrderData';
import { ExternalPlatform } from './externalPlatform';
import { FastlaneDetails } from './fastlaneDetails';
import { ForexQuote } from './forexQuote';
import { FraudCheckResult } from './fraudCheckResult';
import { FraudResult } from './fraudResult';
import { FundOrigin } from './fundOrigin';
import { FundRecipient } from './fundRecipient';
import { GenericIssuerPaymentMethodDetails } from './genericIssuerPaymentMethodDetails';
import { GiropayDetails } from './giropayDetails';
import { GooglePayDetails } from './googlePayDetails';
import { GooglePayDonations } from './googlePayDonations';
import { IdealDetails } from './idealDetails';
import { IdealDonations } from './idealDonations';
import { InputDetail } from './inputDetail';
import { InstallmentOption } from './installmentOption';
import { Installments } from './installments';
import { Item } from './item';
import { KlarnaDetails } from './klarnaDetails';
import { LineItem } from './lineItem';
import { ListStoredPaymentMethodsResponse } from './listStoredPaymentMethodsResponse';
import { Mandate } from './mandate';
import { MasterpassDetails } from './masterpassDetails';
import { MbwayDetails } from './mbwayDetails';
import { MerchantDevice } from './merchantDevice';
import { MerchantRiskIndicator } from './merchantRiskIndicator';
import { MobilePayDetails } from './mobilePayDetails';
import { MolPayDetails } from './molPayDetails';
import { Name } from './name';
import { OpenInvoiceDetails } from './openInvoiceDetails';
import { PayByBankAISDirectDebitDetails } from './payByBankAISDirectDebitDetails';
import { PayByBankDetails } from './payByBankDetails';
import { PayPalDetails } from './payPalDetails';
import { PayPayDetails } from './payPayDetails';
import { PayToDetails } from './payToDetails';
import { PayUUpiDetails } from './payUUpiDetails';
import { PayWithGoogleDetails } from './payWithGoogleDetails';
import { PayWithGoogleDonations } from './payWithGoogleDonations';
import { PaymentAmountUpdateRequest } from './paymentAmountUpdateRequest';
import { PaymentAmountUpdateResponse } from './paymentAmountUpdateResponse';
import { PaymentCancelRequest } from './paymentCancelRequest';
import { PaymentCancelResponse } from './paymentCancelResponse';
import { PaymentCaptureRequest } from './paymentCaptureRequest';
import { PaymentCaptureResponse } from './paymentCaptureResponse';
import { PaymentCompletionDetails } from './paymentCompletionDetails';
import { PaymentDetails } from './paymentDetails';
import { PaymentDetailsRequest } from './paymentDetailsRequest';
import { PaymentDetailsResponse } from './paymentDetailsResponse';
import { PaymentLinkRequest } from './paymentLinkRequest';
import { PaymentLinkResponse } from './paymentLinkResponse';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodGroup } from './paymentMethodGroup';
import { PaymentMethodIssuer } from './paymentMethodIssuer';
import { PaymentMethodToStore } from './paymentMethodToStore';
import { PaymentMethodUPIApps } from './paymentMethodUPIApps';
import { PaymentMethodsRequest } from './paymentMethodsRequest';
import { PaymentMethodsResponse } from './paymentMethodsResponse';
import { PaymentRefundRequest } from './paymentRefundRequest';
import { PaymentRefundResponse } from './paymentRefundResponse';
import { PaymentRequest } from './paymentRequest';
import { PaymentRequestPaymentMethod } from './paymentRequestPaymentMethod';
import { PaymentResponse } from './paymentResponse';
import { PaymentResponseAction } from './paymentResponseAction';
import { PaymentReversalRequest } from './paymentReversalRequest';
import { PaymentReversalResponse } from './paymentReversalResponse';
import { PaypalUpdateOrderRequest } from './paypalUpdateOrderRequest';
import { PaypalUpdateOrderResponse } from './paypalUpdateOrderResponse';
import { Phone } from './phone';
import { PixDetails } from './pixDetails';
import { PixRecurring } from './pixRecurring';
import { PlatformChargebackLogic } from './platformChargebackLogic';
import { PseDetails } from './pseDetails';
import { RatepayDetails } from './ratepayDetails';
import { Recurring } from './recurring';
import { ResponseAdditionalData3DSecure } from './responseAdditionalData3DSecure';
import { ResponseAdditionalDataBillingAddress } from './responseAdditionalDataBillingAddress';
import { ResponseAdditionalDataCard } from './responseAdditionalDataCard';
import { ResponseAdditionalDataCommon } from './responseAdditionalDataCommon';
import { ResponseAdditionalDataDomesticError } from './responseAdditionalDataDomesticError';
import { ResponseAdditionalDataInstallments } from './responseAdditionalDataInstallments';
import { ResponseAdditionalDataNetworkTokens } from './responseAdditionalDataNetworkTokens';
import { ResponseAdditionalDataOpi } from './responseAdditionalDataOpi';
import { ResponseAdditionalDataSepa } from './responseAdditionalDataSepa';
import { ResponsePaymentMethod } from './responsePaymentMethod';
import { RiskData } from './riskData';
import { RivertyDetails } from './rivertyDetails';
import { SDKEphemPubKey } from './sDKEphemPubKey';
import { SamsungPayDetails } from './samsungPayDetails';
import { SepaDirectDebitDetails } from './sepaDirectDebitDetails';
import { ServiceError } from './serviceError';
import { SessionResultResponse } from './sessionResultResponse';
import { ShopperInteractionDevice } from './shopperInteractionDevice';
import { Split } from './split';
import { SplitAmount } from './splitAmount';
import { StandalonePaymentCancelRequest } from './standalonePaymentCancelRequest';
import { StandalonePaymentCancelResponse } from './standalonePaymentCancelResponse';
import { StoredPaymentMethod } from './storedPaymentMethod';
import { StoredPaymentMethodDetails } from './storedPaymentMethodDetails';
import { StoredPaymentMethodRequest } from './storedPaymentMethodRequest';
import { StoredPaymentMethodResource } from './storedPaymentMethodResource';
import { SubInputDetail } from './subInputDetail';
import { SubMerchant } from './subMerchant';
import { SubMerchantInfo } from './subMerchantInfo';
import { TaxTotal } from './taxTotal';
import { ThreeDS2RequestData } from './threeDS2RequestData';
import { ThreeDS2RequestFields } from './threeDS2RequestFields';
import { ThreeDS2ResponseData } from './threeDS2ResponseData';
import { ThreeDS2Result } from './threeDS2Result';
import { ThreeDSRequestData } from './threeDSRequestData';
import { ThreeDSRequestorAuthenticationInfo } from './threeDSRequestorAuthenticationInfo';
import { ThreeDSRequestorPriorAuthenticationInfo } from './threeDSRequestorPriorAuthenticationInfo';
import { ThreeDSecureData } from './threeDSecureData';
import { TwintDetails } from './twintDetails';
import { UpdatePaymentLinkRequest } from './updatePaymentLinkRequest';
import { UpiCollectDetails } from './upiCollectDetails';
import { UpiIntentDetails } from './upiIntentDetails';
import { UtilityRequest } from './utilityRequest';
import { UtilityResponse } from './utilityResponse';
import { VippsDetails } from './vippsDetails';
import { VisaCheckoutDetails } from './visaCheckoutDetails';
import { WeChatPayDetails } from './weChatPayDetails';
import { WeChatPayMiniProgramDetails } from './weChatPayMiniProgramDetails';
import { ZipDetails } from './zipDetails';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountInfo.AccountAgeIndicatorEnum": AccountInfo.AccountAgeIndicatorEnum,
        "AccountInfo.AccountChangeIndicatorEnum": AccountInfo.AccountChangeIndicatorEnum,
        "AccountInfo.AccountTypeEnum": AccountInfo.AccountTypeEnum,
        "AccountInfo.DeliveryAddressUsageIndicatorEnum": AccountInfo.DeliveryAddressUsageIndicatorEnum,
        "AccountInfo.PasswordChangeIndicatorEnum": AccountInfo.PasswordChangeIndicatorEnum,
        "AccountInfo.PaymentAccountIndicatorEnum": AccountInfo.PaymentAccountIndicatorEnum,
        "AcctInfo.ChAccAgeIndEnum": AcctInfo.ChAccAgeIndEnum,
        "AcctInfo.ChAccChangeIndEnum": AcctInfo.ChAccChangeIndEnum,
        "AcctInfo.ChAccPwChangeIndEnum": AcctInfo.ChAccPwChangeIndEnum,
        "AcctInfo.PaymentAccIndEnum": AcctInfo.PaymentAccIndEnum,
        "AcctInfo.ShipAddressUsageIndEnum": AcctInfo.ShipAddressUsageIndEnum,
        "AcctInfo.ShipNameIndicatorEnum": AcctInfo.ShipNameIndicatorEnum,
        "AcctInfo.SuspiciousAccActivityEnum": AcctInfo.SuspiciousAccActivityEnum,
        "AchDetails.AccountHolderTypeEnum": AchDetails.AccountHolderTypeEnum,
        "AchDetails.BankAccountTypeEnum": AchDetails.BankAccountTypeEnum,
        "AchDetails.TypeEnum": AchDetails.TypeEnum,
        "AdditionalData3DSecure.ChallengeWindowSizeEnum": AdditionalData3DSecure.ChallengeWindowSizeEnum,
        "AdditionalDataCommon.IndustryUsageEnum": AdditionalDataCommon.IndustryUsageEnum,
        "AffirmDetails.TypeEnum": AffirmDetails.TypeEnum,
        "AfterpayDetails.TypeEnum": AfterpayDetails.TypeEnum,
        "AmazonPayDetails.TypeEnum": AmazonPayDetails.TypeEnum,
        "AncvDetails.TypeEnum": AncvDetails.TypeEnum,
        "AndroidPayDetails.TypeEnum": AndroidPayDetails.TypeEnum,
        "ApplePayDetails.FundingSourceEnum": ApplePayDetails.FundingSourceEnum,
        "ApplePayDetails.TypeEnum": ApplePayDetails.TypeEnum,
        "ApplePayDonations.FundingSourceEnum": ApplePayDonations.FundingSourceEnum,
        "ApplePayDonations.TypeEnum": ApplePayDonations.TypeEnum,
        "AuthenticationData.AttemptAuthenticationEnum": AuthenticationData.AttemptAuthenticationEnum,
        "BacsDirectDebitDetails.TypeEnum": BacsDirectDebitDetails.TypeEnum,
        "BalanceCheckRequest.RecurringProcessingModelEnum": BalanceCheckRequest.RecurringProcessingModelEnum,
        "BalanceCheckRequest.ShopperInteractionEnum": BalanceCheckRequest.ShopperInteractionEnum,
        "BalanceCheckResponse.ResultCodeEnum": BalanceCheckResponse.ResultCodeEnum,
        "BillDeskDetails.TypeEnum": BillDeskDetails.TypeEnum,
        "BlikDetails.TypeEnum": BlikDetails.TypeEnum,
        "CancelOrderResponse.ResultCodeEnum": CancelOrderResponse.ResultCodeEnum,
        "CardDetails.FundingSourceEnum": CardDetails.FundingSourceEnum,
        "CardDetails.TypeEnum": CardDetails.TypeEnum,
        "CardDonations.FundingSourceEnum": CardDonations.FundingSourceEnum,
        "CardDonations.TypeEnum": CardDonations.TypeEnum,
        "CashAppDetails.TypeEnum": CashAppDetails.TypeEnum,
        "CellulantDetails.TypeEnum": CellulantDetails.TypeEnum,
        "CheckoutAwaitAction.TypeEnum": CheckoutAwaitAction.TypeEnum,
        "CheckoutBankAccount.AccountTypeEnum": CheckoutBankAccount.AccountTypeEnum,
        "CheckoutBankTransferAction.TypeEnum": CheckoutBankTransferAction.TypeEnum,
        "CheckoutDelegatedAuthenticationAction.TypeEnum": CheckoutDelegatedAuthenticationAction.TypeEnum,
        "CheckoutNativeRedirectAction.TypeEnum": CheckoutNativeRedirectAction.TypeEnum,
        "CheckoutQrCodeAction.TypeEnum": CheckoutQrCodeAction.TypeEnum,
        "CheckoutRedirectAction.TypeEnum": CheckoutRedirectAction.TypeEnum,
        "CheckoutSDKAction.TypeEnum": CheckoutSDKAction.TypeEnum,
        "CheckoutSessionInstallmentOption.PlansEnum": CheckoutSessionInstallmentOption.PlansEnum,
        "CheckoutSessionThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum": CheckoutSessionThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum,
        "CheckoutThreeDS2Action.TypeEnum": CheckoutThreeDS2Action.TypeEnum,
        "CheckoutVoucherAction.TypeEnum": CheckoutVoucherAction.TypeEnum,
        "CreateCheckoutSessionRequest.ChannelEnum": CreateCheckoutSessionRequest.ChannelEnum,
        "CreateCheckoutSessionRequest.ModeEnum": CreateCheckoutSessionRequest.ModeEnum,
        "CreateCheckoutSessionRequest.RecurringProcessingModelEnum": CreateCheckoutSessionRequest.RecurringProcessingModelEnum,
        "CreateCheckoutSessionRequest.ShopperInteractionEnum": CreateCheckoutSessionRequest.ShopperInteractionEnum,
        "CreateCheckoutSessionRequest.StoreFiltrationModeEnum": CreateCheckoutSessionRequest.StoreFiltrationModeEnum,
        "CreateCheckoutSessionRequest.StorePaymentMethodModeEnum": CreateCheckoutSessionRequest.StorePaymentMethodModeEnum,
        "CreateCheckoutSessionResponse.ChannelEnum": CreateCheckoutSessionResponse.ChannelEnum,
        "CreateCheckoutSessionResponse.ModeEnum": CreateCheckoutSessionResponse.ModeEnum,
        "CreateCheckoutSessionResponse.RecurringProcessingModelEnum": CreateCheckoutSessionResponse.RecurringProcessingModelEnum,
        "CreateCheckoutSessionResponse.ShopperInteractionEnum": CreateCheckoutSessionResponse.ShopperInteractionEnum,
        "CreateCheckoutSessionResponse.StoreFiltrationModeEnum": CreateCheckoutSessionResponse.StoreFiltrationModeEnum,
        "CreateCheckoutSessionResponse.StorePaymentMethodModeEnum": CreateCheckoutSessionResponse.StorePaymentMethodModeEnum,
        "CreateOrderResponse.ResultCodeEnum": CreateOrderResponse.ResultCodeEnum,
        "DeliveryMethod.TypeEnum": DeliveryMethod.TypeEnum,
        "DeviceRenderOptions.SdkInterfaceEnum": DeviceRenderOptions.SdkInterfaceEnum,
        "DeviceRenderOptions.SdkUiTypeEnum": DeviceRenderOptions.SdkUiTypeEnum,
        "DokuDetails.TypeEnum": DokuDetails.TypeEnum,
        "DonationPaymentRequest.ChannelEnum": DonationPaymentRequest.ChannelEnum,
        "DonationPaymentRequest.RecurringProcessingModelEnum": DonationPaymentRequest.RecurringProcessingModelEnum,
        "DonationPaymentRequest.ShopperInteractionEnum": DonationPaymentRequest.ShopperInteractionEnum,
        "DonationPaymentRequestPaymentMethod.FundingSourceEnum": DonationPaymentRequestPaymentMethod.FundingSourceEnum,
        "DonationPaymentRequestPaymentMethod.TypeEnum": DonationPaymentRequestPaymentMethod.TypeEnum,
        "DonationPaymentResponse.StatusEnum": DonationPaymentResponse.StatusEnum,
        "DotpayDetails.TypeEnum": DotpayDetails.TypeEnum,
        "DragonpayDetails.TypeEnum": DragonpayDetails.TypeEnum,
        "EBankingFinlandDetails.TypeEnum": EBankingFinlandDetails.TypeEnum,
        "EcontextVoucherDetails.TypeEnum": EcontextVoucherDetails.TypeEnum,
        "EftDetails.TypeEnum": EftDetails.TypeEnum,
        "FastlaneDetails.TypeEnum": FastlaneDetails.TypeEnum,
        "FundRecipient.WalletPurposeEnum": FundRecipient.WalletPurposeEnum,
        "GenericIssuerPaymentMethodDetails.TypeEnum": GenericIssuerPaymentMethodDetails.TypeEnum,
        "GiropayDetails.TypeEnum": GiropayDetails.TypeEnum,
        "GooglePayDetails.FundingSourceEnum": GooglePayDetails.FundingSourceEnum,
        "GooglePayDetails.TypeEnum": GooglePayDetails.TypeEnum,
        "GooglePayDonations.FundingSourceEnum": GooglePayDonations.FundingSourceEnum,
        "GooglePayDonations.TypeEnum": GooglePayDonations.TypeEnum,
        "IdealDetails.TypeEnum": IdealDetails.TypeEnum,
        "IdealDonations.TypeEnum": IdealDonations.TypeEnum,
        "InstallmentOption.PlansEnum": InstallmentOption.PlansEnum,
        "Installments.PlanEnum": Installments.PlanEnum,
        "KlarnaDetails.TypeEnum": KlarnaDetails.TypeEnum,
        "Mandate.AmountRuleEnum": Mandate.AmountRuleEnum,
        "Mandate.BillingAttemptsRuleEnum": Mandate.BillingAttemptsRuleEnum,
        "Mandate.FrequencyEnum": Mandate.FrequencyEnum,
        "MasterpassDetails.FundingSourceEnum": MasterpassDetails.FundingSourceEnum,
        "MasterpassDetails.TypeEnum": MasterpassDetails.TypeEnum,
        "MbwayDetails.TypeEnum": MbwayDetails.TypeEnum,
        "MerchantRiskIndicator.DeliveryAddressIndicatorEnum": MerchantRiskIndicator.DeliveryAddressIndicatorEnum,
        "MerchantRiskIndicator.DeliveryTimeframeEnum": MerchantRiskIndicator.DeliveryTimeframeEnum,
        "MobilePayDetails.TypeEnum": MobilePayDetails.TypeEnum,
        "MolPayDetails.TypeEnum": MolPayDetails.TypeEnum,
        "OpenInvoiceDetails.TypeEnum": OpenInvoiceDetails.TypeEnum,
        "PayByBankAISDirectDebitDetails.TypeEnum": PayByBankAISDirectDebitDetails.TypeEnum,
        "PayByBankDetails.TypeEnum": PayByBankDetails.TypeEnum,
        "PayPalDetails.SubtypeEnum": PayPalDetails.SubtypeEnum,
        "PayPalDetails.TypeEnum": PayPalDetails.TypeEnum,
        "PayPayDetails.TypeEnum": PayPayDetails.TypeEnum,
        "PayToDetails.TypeEnum": PayToDetails.TypeEnum,
        "PayUUpiDetails.TypeEnum": PayUUpiDetails.TypeEnum,
        "PayWithGoogleDetails.FundingSourceEnum": PayWithGoogleDetails.FundingSourceEnum,
        "PayWithGoogleDetails.TypeEnum": PayWithGoogleDetails.TypeEnum,
        "PayWithGoogleDonations.FundingSourceEnum": PayWithGoogleDonations.FundingSourceEnum,
        "PayWithGoogleDonations.TypeEnum": PayWithGoogleDonations.TypeEnum,
        "PaymentAmountUpdateRequest.IndustryUsageEnum": PaymentAmountUpdateRequest.IndustryUsageEnum,
        "PaymentAmountUpdateResponse.IndustryUsageEnum": PaymentAmountUpdateResponse.IndustryUsageEnum,
        "PaymentAmountUpdateResponse.StatusEnum": PaymentAmountUpdateResponse.StatusEnum,
        "PaymentCancelResponse.StatusEnum": PaymentCancelResponse.StatusEnum,
        "PaymentCaptureResponse.StatusEnum": PaymentCaptureResponse.StatusEnum,
        "PaymentDetails.TypeEnum": PaymentDetails.TypeEnum,
        "PaymentDetailsResponse.ResultCodeEnum": PaymentDetailsResponse.ResultCodeEnum,
        "PaymentLinkRequest.RecurringProcessingModelEnum": PaymentLinkRequest.RecurringProcessingModelEnum,
        "PaymentLinkRequest.RequiredShopperFieldsEnum": PaymentLinkRequest.RequiredShopperFieldsEnum,
        "PaymentLinkRequest.StorePaymentMethodModeEnum": PaymentLinkRequest.StorePaymentMethodModeEnum,
        "PaymentLinkResponse.RecurringProcessingModelEnum": PaymentLinkResponse.RecurringProcessingModelEnum,
        "PaymentLinkResponse.RequiredShopperFieldsEnum": PaymentLinkResponse.RequiredShopperFieldsEnum,
        "PaymentLinkResponse.StatusEnum": PaymentLinkResponse.StatusEnum,
        "PaymentLinkResponse.StorePaymentMethodModeEnum": PaymentLinkResponse.StorePaymentMethodModeEnum,
        "PaymentMethod.FundingSourceEnum": PaymentMethod.FundingSourceEnum,
        "PaymentMethodsRequest.ChannelEnum": PaymentMethodsRequest.ChannelEnum,
        "PaymentMethodsRequest.StoreFiltrationModeEnum": PaymentMethodsRequest.StoreFiltrationModeEnum,
        "PaymentRefundRequest.MerchantRefundReasonEnum": PaymentRefundRequest.MerchantRefundReasonEnum,
        "PaymentRefundResponse.MerchantRefundReasonEnum": PaymentRefundResponse.MerchantRefundReasonEnum,
        "PaymentRefundResponse.StatusEnum": PaymentRefundResponse.StatusEnum,
        "PaymentRequest.ChannelEnum": PaymentRequest.ChannelEnum,
        "PaymentRequest.EntityTypeEnum": PaymentRequest.EntityTypeEnum,
        "PaymentRequest.IndustryUsageEnum": PaymentRequest.IndustryUsageEnum,
        "PaymentRequest.RecurringProcessingModelEnum": PaymentRequest.RecurringProcessingModelEnum,
        "PaymentRequest.ShopperInteractionEnum": PaymentRequest.ShopperInteractionEnum,
        "PaymentRequestPaymentMethod.AccountHolderTypeEnum": PaymentRequestPaymentMethod.AccountHolderTypeEnum,
        "PaymentRequestPaymentMethod.BankAccountTypeEnum": PaymentRequestPaymentMethod.BankAccountTypeEnum,
        "PaymentRequestPaymentMethod.TypeEnum": PaymentRequestPaymentMethod.TypeEnum,
        "PaymentRequestPaymentMethod.FundingSourceEnum": PaymentRequestPaymentMethod.FundingSourceEnum,
        "PaymentResponse.ResultCodeEnum": PaymentResponse.ResultCodeEnum,
        "PaymentResponseAction.TypeEnum": PaymentResponseAction.TypeEnum,
        "PaymentReversalResponse.StatusEnum": PaymentReversalResponse.StatusEnum,
        "PaypalUpdateOrderResponse.StatusEnum": PaypalUpdateOrderResponse.StatusEnum,
        "PixDetails.TypeEnum": PixDetails.TypeEnum,
        "PixRecurring.FrequencyEnum": PixRecurring.FrequencyEnum,
        "PlatformChargebackLogic.BehaviorEnum": PlatformChargebackLogic.BehaviorEnum,
        "PseDetails.TypeEnum": PseDetails.TypeEnum,
        "RatepayDetails.TypeEnum": RatepayDetails.TypeEnum,
        "Recurring.ContractEnum": Recurring.ContractEnum,
        "Recurring.TokenServiceEnum": Recurring.TokenServiceEnum,
        "ResponseAdditionalDataCard.CardProductIdEnum": ResponseAdditionalDataCard.CardProductIdEnum,
        "ResponseAdditionalDataCommon.FraudResultTypeEnum": ResponseAdditionalDataCommon.FraudResultTypeEnum,
        "ResponseAdditionalDataCommon.RecurringProcessingModelEnum": ResponseAdditionalDataCommon.RecurringProcessingModelEnum,
        "ResponseAdditionalDataCommon.TokenizationStoreOperationTypeEnum": ResponseAdditionalDataCommon.TokenizationStoreOperationTypeEnum,
        "RivertyDetails.TypeEnum": RivertyDetails.TypeEnum,
        "SamsungPayDetails.FundingSourceEnum": SamsungPayDetails.FundingSourceEnum,
        "SamsungPayDetails.TypeEnum": SamsungPayDetails.TypeEnum,
        "SepaDirectDebitDetails.TypeEnum": SepaDirectDebitDetails.TypeEnum,
        "SessionResultResponse.StatusEnum": SessionResultResponse.StatusEnum,
        "Split.TypeEnum": Split.TypeEnum,
        "StandalonePaymentCancelResponse.StatusEnum": StandalonePaymentCancelResponse.StatusEnum,
        "StoredPaymentMethodDetails.TypeEnum": StoredPaymentMethodDetails.TypeEnum,
        "StoredPaymentMethodRequest.RecurringProcessingModelEnum": StoredPaymentMethodRequest.RecurringProcessingModelEnum,
        "ThreeDS2RequestData.AcctTypeEnum": ThreeDS2RequestData.AcctTypeEnum,
        "ThreeDS2RequestData.AddrMatchEnum": ThreeDS2RequestData.AddrMatchEnum,
        "ThreeDS2RequestData.ChallengeIndicatorEnum": ThreeDS2RequestData.ChallengeIndicatorEnum,
        "ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum": ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum,
        "ThreeDS2RequestData.TransTypeEnum": ThreeDS2RequestData.TransTypeEnum,
        "ThreeDS2RequestData.TransactionTypeEnum": ThreeDS2RequestData.TransactionTypeEnum,
        "ThreeDS2RequestFields.AcctTypeEnum": ThreeDS2RequestFields.AcctTypeEnum,
        "ThreeDS2RequestFields.AddrMatchEnum": ThreeDS2RequestFields.AddrMatchEnum,
        "ThreeDS2RequestFields.ChallengeIndicatorEnum": ThreeDS2RequestFields.ChallengeIndicatorEnum,
        "ThreeDS2RequestFields.ThreeDSRequestorChallengeIndEnum": ThreeDS2RequestFields.ThreeDSRequestorChallengeIndEnum,
        "ThreeDS2RequestFields.TransTypeEnum": ThreeDS2RequestFields.TransTypeEnum,
        "ThreeDS2RequestFields.TransactionTypeEnum": ThreeDS2RequestFields.TransactionTypeEnum,
        "ThreeDS2Result.ChallengeCancelEnum": ThreeDS2Result.ChallengeCancelEnum,
        "ThreeDS2Result.ExemptionIndicatorEnum": ThreeDS2Result.ExemptionIndicatorEnum,
        "ThreeDS2Result.ThreeDSRequestorChallengeIndEnum": ThreeDS2Result.ThreeDSRequestorChallengeIndEnum,
        "ThreeDSRequestData.ChallengeWindowSizeEnum": ThreeDSRequestData.ChallengeWindowSizeEnum,
        "ThreeDSRequestData.DataOnlyEnum": ThreeDSRequestData.DataOnlyEnum,
        "ThreeDSRequestData.NativeThreeDSEnum": ThreeDSRequestData.NativeThreeDSEnum,
        "ThreeDSRequestData.ThreeDSVersionEnum": ThreeDSRequestData.ThreeDSVersionEnum,
        "ThreeDSRequestorAuthenticationInfo.ThreeDSReqAuthMethodEnum": ThreeDSRequestorAuthenticationInfo.ThreeDSReqAuthMethodEnum,
        "ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum": ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum,
        "ThreeDSecureData.AuthenticationResponseEnum": ThreeDSecureData.AuthenticationResponseEnum,
        "ThreeDSecureData.ChallengeCancelEnum": ThreeDSecureData.ChallengeCancelEnum,
        "ThreeDSecureData.DirectoryResponseEnum": ThreeDSecureData.DirectoryResponseEnum,
        "TwintDetails.TypeEnum": TwintDetails.TypeEnum,
        "UpdatePaymentLinkRequest.StatusEnum": UpdatePaymentLinkRequest.StatusEnum,
        "UpiCollectDetails.TypeEnum": UpiCollectDetails.TypeEnum,
        "UpiIntentDetails.TypeEnum": UpiIntentDetails.TypeEnum,
        "VippsDetails.TypeEnum": VippsDetails.TypeEnum,
        "VisaCheckoutDetails.FundingSourceEnum": VisaCheckoutDetails.FundingSourceEnum,
        "VisaCheckoutDetails.TypeEnum": VisaCheckoutDetails.TypeEnum,
        "WeChatPayDetails.TypeEnum": WeChatPayDetails.TypeEnum,
        "WeChatPayMiniProgramDetails.TypeEnum": WeChatPayMiniProgramDetails.TypeEnum,
        "ZipDetails.TypeEnum": ZipDetails.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountInfo": AccountInfo,
    "AcctInfo": AcctInfo,
    "AchDetails": AchDetails,
    "AdditionalData3DSecure": AdditionalData3DSecure,
    "AdditionalDataAirline": AdditionalDataAirline,
    "AdditionalDataCarRental": AdditionalDataCarRental,
    "AdditionalDataCommon": AdditionalDataCommon,
    "AdditionalDataLevel23": AdditionalDataLevel23,
    "AdditionalDataLodging": AdditionalDataLodging,
    "AdditionalDataOpenInvoice": AdditionalDataOpenInvoice,
    "AdditionalDataOpi": AdditionalDataOpi,
    "AdditionalDataRatepay": AdditionalDataRatepay,
    "AdditionalDataRetry": AdditionalDataRetry,
    "AdditionalDataRisk": AdditionalDataRisk,
    "AdditionalDataRiskStandalone": AdditionalDataRiskStandalone,
    "AdditionalDataSubMerchant": AdditionalDataSubMerchant,
    "AdditionalDataTemporaryServices": AdditionalDataTemporaryServices,
    "AdditionalDataWallets": AdditionalDataWallets,
    "Address": Address,
    "AffirmDetails": AffirmDetails,
    "AfterpayDetails": AfterpayDetails,
    "AmazonPayDetails": AmazonPayDetails,
    "Amount": Amount,
    "Amounts": Amounts,
    "AncvDetails": AncvDetails,
    "AndroidPayDetails": AndroidPayDetails,
    "ApplePayDetails": ApplePayDetails,
    "ApplePayDonations": ApplePayDonations,
    "ApplePaySessionRequest": ApplePaySessionRequest,
    "ApplePaySessionResponse": ApplePaySessionResponse,
    "ApplicationInfo": ApplicationInfo,
    "AuthenticationData": AuthenticationData,
    "BacsDirectDebitDetails": BacsDirectDebitDetails,
    "BalanceCheckRequest": BalanceCheckRequest,
    "BalanceCheckResponse": BalanceCheckResponse,
    "BillDeskDetails": BillDeskDetails,
    "BillingAddress": BillingAddress,
    "BlikDetails": BlikDetails,
    "BrowserInfo": BrowserInfo,
    "CancelOrderRequest": CancelOrderRequest,
    "CancelOrderResponse": CancelOrderResponse,
    "CardBrandDetails": CardBrandDetails,
    "CardDetails": CardDetails,
    "CardDetailsRequest": CardDetailsRequest,
    "CardDetailsResponse": CardDetailsResponse,
    "CardDonations": CardDonations,
    "CashAppDetails": CashAppDetails,
    "CellulantDetails": CellulantDetails,
    "CheckoutAwaitAction": CheckoutAwaitAction,
    "CheckoutBankAccount": CheckoutBankAccount,
    "CheckoutBankTransferAction": CheckoutBankTransferAction,
    "CheckoutDelegatedAuthenticationAction": CheckoutDelegatedAuthenticationAction,
    "CheckoutNativeRedirectAction": CheckoutNativeRedirectAction,
    "CheckoutOrderResponse": CheckoutOrderResponse,
    "CheckoutQrCodeAction": CheckoutQrCodeAction,
    "CheckoutRedirectAction": CheckoutRedirectAction,
    "CheckoutSDKAction": CheckoutSDKAction,
    "CheckoutSessionInstallmentOption": CheckoutSessionInstallmentOption,
    "CheckoutSessionThreeDS2RequestData": CheckoutSessionThreeDS2RequestData,
    "CheckoutThreeDS2Action": CheckoutThreeDS2Action,
    "CheckoutVoucherAction": CheckoutVoucherAction,
    "CommonField": CommonField,
    "Company": Company,
    "CreateCheckoutSessionRequest": CreateCheckoutSessionRequest,
    "CreateCheckoutSessionResponse": CreateCheckoutSessionResponse,
    "CreateOrderRequest": CreateOrderRequest,
    "CreateOrderResponse": CreateOrderResponse,
    "DeliveryAddress": DeliveryAddress,
    "DeliveryMethod": DeliveryMethod,
    "DetailsRequestAuthenticationData": DetailsRequestAuthenticationData,
    "DeviceRenderOptions": DeviceRenderOptions,
    "DokuDetails": DokuDetails,
    "Donation": Donation,
    "DonationCampaign": DonationCampaign,
    "DonationCampaignsRequest": DonationCampaignsRequest,
    "DonationCampaignsResponse": DonationCampaignsResponse,
    "DonationPaymentRequest": DonationPaymentRequest,
    "DonationPaymentRequestPaymentMethod": DonationPaymentRequestPaymentMethod,
    "DonationPaymentResponse": DonationPaymentResponse,
    "DotpayDetails": DotpayDetails,
    "DragonpayDetails": DragonpayDetails,
    "EBankingFinlandDetails": EBankingFinlandDetails,
    "EcontextVoucherDetails": EcontextVoucherDetails,
    "EftDetails": EftDetails,
    "EncryptedOrderData": EncryptedOrderData,
    "ExternalPlatform": ExternalPlatform,
    "FastlaneDetails": FastlaneDetails,
    "ForexQuote": ForexQuote,
    "FraudCheckResult": FraudCheckResult,
    "FraudResult": FraudResult,
    "FundOrigin": FundOrigin,
    "FundRecipient": FundRecipient,
    "GenericIssuerPaymentMethodDetails": GenericIssuerPaymentMethodDetails,
    "GiropayDetails": GiropayDetails,
    "GooglePayDetails": GooglePayDetails,
    "GooglePayDonations": GooglePayDonations,
    "IdealDetails": IdealDetails,
    "IdealDonations": IdealDonations,
    "InputDetail": InputDetail,
    "InstallmentOption": InstallmentOption,
    "Installments": Installments,
    "Item": Item,
    "KlarnaDetails": KlarnaDetails,
    "LineItem": LineItem,
    "ListStoredPaymentMethodsResponse": ListStoredPaymentMethodsResponse,
    "Mandate": Mandate,
    "MasterpassDetails": MasterpassDetails,
    "MbwayDetails": MbwayDetails,
    "MerchantDevice": MerchantDevice,
    "MerchantRiskIndicator": MerchantRiskIndicator,
    "MobilePayDetails": MobilePayDetails,
    "MolPayDetails": MolPayDetails,
    "Name": Name,
    "OpenInvoiceDetails": OpenInvoiceDetails,
    "PayByBankAISDirectDebitDetails": PayByBankAISDirectDebitDetails,
    "PayByBankDetails": PayByBankDetails,
    "PayPalDetails": PayPalDetails,
    "PayPayDetails": PayPayDetails,
    "PayToDetails": PayToDetails,
    "PayUUpiDetails": PayUUpiDetails,
    "PayWithGoogleDetails": PayWithGoogleDetails,
    "PayWithGoogleDonations": PayWithGoogleDonations,
    "PaymentAmountUpdateRequest": PaymentAmountUpdateRequest,
    "PaymentAmountUpdateResponse": PaymentAmountUpdateResponse,
    "PaymentCancelRequest": PaymentCancelRequest,
    "PaymentCancelResponse": PaymentCancelResponse,
    "PaymentCaptureRequest": PaymentCaptureRequest,
    "PaymentCaptureResponse": PaymentCaptureResponse,
    "PaymentCompletionDetails": PaymentCompletionDetails,
    "PaymentDetails": PaymentDetails,
    "PaymentDetailsRequest": PaymentDetailsRequest,
    "PaymentDetailsResponse": PaymentDetailsResponse,
    "PaymentLinkRequest": PaymentLinkRequest,
    "PaymentLinkResponse": PaymentLinkResponse,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodGroup": PaymentMethodGroup,
    "PaymentMethodIssuer": PaymentMethodIssuer,
    "PaymentMethodToStore": PaymentMethodToStore,
    "PaymentMethodUPIApps": PaymentMethodUPIApps,
    "PaymentMethodsRequest": PaymentMethodsRequest,
    "PaymentMethodsResponse": PaymentMethodsResponse,
    "PaymentRefundRequest": PaymentRefundRequest,
    "PaymentRefundResponse": PaymentRefundResponse,
    "PaymentRequest": PaymentRequest,
    "PaymentRequestPaymentMethod": PaymentRequestPaymentMethod,
    "PaymentResponse": PaymentResponse,
    "PaymentResponseAction": PaymentResponseAction,
    "PaymentReversalRequest": PaymentReversalRequest,
    "PaymentReversalResponse": PaymentReversalResponse,
    "PaypalUpdateOrderRequest": PaypalUpdateOrderRequest,
    "PaypalUpdateOrderResponse": PaypalUpdateOrderResponse,
    "Phone": Phone,
    "PixDetails": PixDetails,
    "PixRecurring": PixRecurring,
    "PlatformChargebackLogic": PlatformChargebackLogic,
    "PseDetails": PseDetails,
    "RatepayDetails": RatepayDetails,
    "Recurring": Recurring,
    "ResponseAdditionalData3DSecure": ResponseAdditionalData3DSecure,
    "ResponseAdditionalDataBillingAddress": ResponseAdditionalDataBillingAddress,
    "ResponseAdditionalDataCard": ResponseAdditionalDataCard,
    "ResponseAdditionalDataCommon": ResponseAdditionalDataCommon,
    "ResponseAdditionalDataDomesticError": ResponseAdditionalDataDomesticError,
    "ResponseAdditionalDataInstallments": ResponseAdditionalDataInstallments,
    "ResponseAdditionalDataNetworkTokens": ResponseAdditionalDataNetworkTokens,
    "ResponseAdditionalDataOpi": ResponseAdditionalDataOpi,
    "ResponseAdditionalDataSepa": ResponseAdditionalDataSepa,
    "ResponsePaymentMethod": ResponsePaymentMethod,
    "RiskData": RiskData,
    "RivertyDetails": RivertyDetails,
    "SDKEphemPubKey": SDKEphemPubKey,
    "SamsungPayDetails": SamsungPayDetails,
    "SepaDirectDebitDetails": SepaDirectDebitDetails,
    "ServiceError": ServiceError,
    "SessionResultResponse": SessionResultResponse,
    "ShopperInteractionDevice": ShopperInteractionDevice,
    "Split": Split,
    "SplitAmount": SplitAmount,
    "StandalonePaymentCancelRequest": StandalonePaymentCancelRequest,
    "StandalonePaymentCancelResponse": StandalonePaymentCancelResponse,
    "StoredPaymentMethod": StoredPaymentMethod,
    "StoredPaymentMethodDetails": StoredPaymentMethodDetails,
    "StoredPaymentMethodRequest": StoredPaymentMethodRequest,
    "StoredPaymentMethodResource": StoredPaymentMethodResource,
    "SubInputDetail": SubInputDetail,
    "SubMerchant": SubMerchant,
    "SubMerchantInfo": SubMerchantInfo,
    "TaxTotal": TaxTotal,
    "ThreeDS2RequestData": ThreeDS2RequestData,
    "ThreeDS2RequestFields": ThreeDS2RequestFields,
    "ThreeDS2ResponseData": ThreeDS2ResponseData,
    "ThreeDS2Result": ThreeDS2Result,
    "ThreeDSRequestData": ThreeDSRequestData,
    "ThreeDSRequestorAuthenticationInfo": ThreeDSRequestorAuthenticationInfo,
    "ThreeDSRequestorPriorAuthenticationInfo": ThreeDSRequestorPriorAuthenticationInfo,
    "ThreeDSecureData": ThreeDSecureData,
    "TwintDetails": TwintDetails,
    "UpdatePaymentLinkRequest": UpdatePaymentLinkRequest,
    "UpiCollectDetails": UpiCollectDetails,
    "UpiIntentDetails": UpiIntentDetails,
    "UtilityRequest": UtilityRequest,
    "UtilityResponse": UtilityResponse,
    "VippsDetails": VippsDetails,
    "VisaCheckoutDetails": VisaCheckoutDetails,
    "WeChatPayDetails": WeChatPayDetails,
    "WeChatPayMiniProgramDetails": WeChatPayMiniProgramDetails,
    "ZipDetails": ZipDetails,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
