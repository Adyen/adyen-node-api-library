export * from "./models";

import { AccountInfo } from "./accountInfo";
import { AcctInfo } from "./acctInfo";
import { AchDetails } from "./achDetails";
import { AdditionalData3DSecure } from "./additionalData3DSecure";
import { AdditionalDataAirline } from "./additionalDataAirline";
import { AdditionalDataCarRental } from "./additionalDataCarRental";
import { AdditionalDataCommon } from "./additionalDataCommon";
import { AdditionalDataLevel23 } from "./additionalDataLevel23";
import { AdditionalDataLodging } from "./additionalDataLodging";
import { AdditionalDataOpenInvoice } from "./additionalDataOpenInvoice";
import { AdditionalDataOpi } from "./additionalDataOpi";
import { AdditionalDataRatepay } from "./additionalDataRatepay";
import { AdditionalDataRetry } from "./additionalDataRetry";
import { AdditionalDataRisk } from "./additionalDataRisk";
import { AdditionalDataRiskStandalone } from "./additionalDataRiskStandalone";
import { AdditionalDataSubMerchant } from "./additionalDataSubMerchant";
import { AdditionalDataTemporaryServices } from "./additionalDataTemporaryServices";
import { AdditionalDataWallets } from "./additionalDataWallets";
import { Address } from "./address";
import { AffirmDetails } from "./affirmDetails";
import { AfterpayDetails } from "./afterpayDetails";
import { Agency } from "./agency";
import { Airline } from "./airline";
import { AmazonPayDetails } from "./amazonPayDetails";
import { Amount } from "./amount";
import { Amounts } from "./amounts";
import { AncvDetails } from "./ancvDetails";
import { AndroidPayDetails } from "./androidPayDetails";
import { ApplePayDetails } from "./applePayDetails";
import { ApplePayDonations } from "./applePayDonations";
import { ApplePaySessionRequest } from "./applePaySessionRequest";
import { ApplePaySessionResponse } from "./applePaySessionResponse";
import { ApplicationInfo } from "./applicationInfo";
import { AuthenticationData } from "./authenticationData";
import { BacsDirectDebitDetails } from "./bacsDirectDebitDetails";
import { BalanceCheckRequest } from "./balanceCheckRequest";
import { BalanceCheckResponse } from "./balanceCheckResponse";
import { BillDeskDetails } from "./billDeskDetails";
import { BillingAddress } from "./billingAddress";
import { BlikDetails } from "./blikDetails";
import { BrowserInfo } from "./browserInfo";
import { CancelOrderRequest } from "./cancelOrderRequest";
import { CancelOrderResponse } from "./cancelOrderResponse";
import { CardBrandDetails } from "./cardBrandDetails";
import { CardDetails } from "./cardDetails";
import { CardDetailsRequest } from "./cardDetailsRequest";
import { CardDetailsResponse } from "./cardDetailsResponse";
import { CardDonations } from "./cardDonations";
import { CashAppDetails } from "./cashAppDetails";
import { CellulantDetails } from "./cellulantDetails";
import { CheckoutAwaitAction } from "./checkoutAwaitAction";
import { CheckoutBankAccount } from "./checkoutBankAccount";
import { CheckoutBankTransferAction } from "./checkoutBankTransferAction";
import { CheckoutDelegatedAuthenticationAction } from "./checkoutDelegatedAuthenticationAction";
import { CheckoutNativeRedirectAction } from "./checkoutNativeRedirectAction";
import { CheckoutOrderResponse } from "./checkoutOrderResponse";
import { CheckoutQrCodeAction } from "./checkoutQrCodeAction";
import { CheckoutRedirectAction } from "./checkoutRedirectAction";
import { CheckoutSDKAction } from "./checkoutSDKAction";
import { CheckoutSessionInstallmentOption } from "./checkoutSessionInstallmentOption";
import { CheckoutSessionThreeDS2RequestData } from "./checkoutSessionThreeDS2RequestData";
import { CheckoutThreeDS2Action } from "./checkoutThreeDS2Action";
import { CheckoutVoucherAction } from "./checkoutVoucherAction";
import { CommonField } from "./commonField";
import { Company } from "./company";
import { CreateCheckoutSessionRequest } from "./createCheckoutSessionRequest";
import { CreateCheckoutSessionResponse } from "./createCheckoutSessionResponse";
import { CreateOrderRequest } from "./createOrderRequest";
import { CreateOrderResponse } from "./createOrderResponse";
import { DeliveryAddress } from "./deliveryAddress";
import { DeliveryMethod } from "./deliveryMethod";
import { DetailsRequestAuthenticationData } from "./detailsRequestAuthenticationData";
import { DeviceRenderOptions } from "./deviceRenderOptions";
import { DokuDetails } from "./dokuDetails";
import { Donation } from "./donation";
import { DonationCampaign } from "./donationCampaign";
import { DonationCampaignsRequest } from "./donationCampaignsRequest";
import { DonationCampaignsResponse } from "./donationCampaignsResponse";
import { DonationPaymentRequest } from "./donationPaymentRequest";
import { DonationPaymentRequestPaymentMethodClass } from "./donationPaymentRequestPaymentMethod";
import { DonationPaymentResponse } from "./donationPaymentResponse";
import { DragonpayDetails } from "./dragonpayDetails";
import { EBankingFinlandDetails } from "./eBankingFinlandDetails";
import { EcontextVoucherDetails } from "./econtextVoucherDetails";
import { EftDetails } from "./eftDetails";
import { EncryptedOrderData } from "./encryptedOrderData";
import { EnhancedSchemeData } from "./enhancedSchemeData";
import { ExternalPlatform } from "./externalPlatform";
import { FastlaneDetails } from "./fastlaneDetails";
import { ForexQuote } from "./forexQuote";
import { FraudCheckResult } from "./fraudCheckResult";
import { FraudResult } from "./fraudResult";
import { FundOrigin } from "./fundOrigin";
import { FundRecipient } from "./fundRecipient";
import { GenericIssuerPaymentMethodDetails } from "./genericIssuerPaymentMethodDetails";
import { GooglePayDetails } from "./googlePayDetails";
import { GooglePayDonations } from "./googlePayDonations";
import { IdealDetails } from "./idealDetails";
import { IdealDonations } from "./idealDonations";
import { InputDetail } from "./inputDetail";
import { InstallmentOption } from "./installmentOption";
import { Installments } from "./installments";
import { Item } from "./item";
import { KlarnaDetails } from "./klarnaDetails";
import { Leg } from "./leg";
import { LineItem } from "./lineItem";
import { ListStoredPaymentMethodsResponse } from "./listStoredPaymentMethodsResponse";
import { Mandate } from "./mandate";
import { MasterpassDetails } from "./masterpassDetails";
import { MbwayDetails } from "./mbwayDetails";
import { MerchantDevice } from "./merchantDevice";
import { MerchantRiskIndicator } from "./merchantRiskIndicator";
import { MobilePayDetails } from "./mobilePayDetails";
import { MolPayDetails } from "./molPayDetails";
import { Name } from "./name";
import { OpenInvoiceDetails } from "./openInvoiceDetails";
import { Passenger } from "./passenger";
import { PayByBankAISDirectDebitDetails } from "./payByBankAISDirectDebitDetails";
import { PayByBankDetails } from "./payByBankDetails";
import { PayPalDetails } from "./payPalDetails";
import { PayPayDetails } from "./payPayDetails";
import { PayToDetails } from "./payToDetails";
import { PayUUpiDetails } from "./payUUpiDetails";
import { PayWithGoogleDetails } from "./payWithGoogleDetails";
import { PayWithGoogleDonations } from "./payWithGoogleDonations";
import { Payment } from "./payment";
import { PaymentAmountUpdateRequest } from "./paymentAmountUpdateRequest";
import { PaymentAmountUpdateResponse } from "./paymentAmountUpdateResponse";
import { PaymentCancelRequest } from "./paymentCancelRequest";
import { PaymentCancelResponse } from "./paymentCancelResponse";
import { PaymentCaptureRequest } from "./paymentCaptureRequest";
import { PaymentCaptureResponse } from "./paymentCaptureResponse";
import { PaymentCompletionDetails } from "./paymentCompletionDetails";
import { PaymentDetails } from "./paymentDetails";
import { PaymentDetailsRequest } from "./paymentDetailsRequest";
import { PaymentDetailsResponse } from "./paymentDetailsResponse";
import { PaymentLinkRequest } from "./paymentLinkRequest";
import { PaymentLinkResponse } from "./paymentLinkResponse";
import { PaymentMethod } from "./paymentMethod";
import { PaymentMethodGroup } from "./paymentMethodGroup";
import { PaymentMethodIssuer } from "./paymentMethodIssuer";
import { PaymentMethodToStore } from "./paymentMethodToStore";
import { PaymentMethodUPIApps } from "./paymentMethodUPIApps";
import { PaymentMethodsRequest } from "./paymentMethodsRequest";
import { PaymentMethodsResponse } from "./paymentMethodsResponse";
import { PaymentRefundRequest } from "./paymentRefundRequest";
import { PaymentRefundResponse } from "./paymentRefundResponse";
import { PaymentRequest } from "./paymentRequest";
import { PaymentRequestPaymentMethodClass } from "./paymentRequestPaymentMethod";
import { PaymentResponse } from "./paymentResponse";
import { PaymentResponseActionClass } from "./paymentResponseAction";
import { PaymentReversalRequest } from "./paymentReversalRequest";
import { PaymentReversalResponse } from "./paymentReversalResponse";
import { PaypalUpdateOrderRequest } from "./paypalUpdateOrderRequest";
import { PaypalUpdateOrderResponse } from "./paypalUpdateOrderResponse";
import { Phone } from "./phone";
import { PixDetails } from "./pixDetails";
import { PixRecurring } from "./pixRecurring";
import { PlatformChargebackLogic } from "./platformChargebackLogic";
import { PseDetails } from "./pseDetails";
import { RakutenPayDetails } from "./rakutenPayDetails";
import { RatepayDetails } from "./ratepayDetails";
import { Recurring } from "./recurring";
import { ResponseAdditionalData3DSecure } from "./responseAdditionalData3DSecure";
import { ResponseAdditionalDataBillingAddress } from "./responseAdditionalDataBillingAddress";
import { ResponseAdditionalDataCard } from "./responseAdditionalDataCard";
import { ResponseAdditionalDataCommon } from "./responseAdditionalDataCommon";
import { ResponseAdditionalDataDomesticError } from "./responseAdditionalDataDomesticError";
import { ResponseAdditionalDataInstallments } from "./responseAdditionalDataInstallments";
import { ResponseAdditionalDataNetworkTokens } from "./responseAdditionalDataNetworkTokens";
import { ResponseAdditionalDataOpi } from "./responseAdditionalDataOpi";
import { ResponseAdditionalDataSepa } from "./responseAdditionalDataSepa";
import { ResponsePaymentMethod } from "./responsePaymentMethod";
import { RiskData } from "./riskData";
import { RivertyDetails } from "./rivertyDetails";
import { SDKEphemPubKey } from "./sDKEphemPubKey";
import { SamsungPayDetails } from "./samsungPayDetails";
import { SepaDirectDebitDetails } from "./sepaDirectDebitDetails";
import { ServiceError } from "./serviceError";
import { SessionResultResponse } from "./sessionResultResponse";
import { ShopperInteractionDevice } from "./shopperInteractionDevice";
import { Split } from "./split";
import { SplitAmount } from "./splitAmount";
import { StandalonePaymentCancelRequest } from "./standalonePaymentCancelRequest";
import { StandalonePaymentCancelResponse } from "./standalonePaymentCancelResponse";
import { StoredPaymentMethod } from "./storedPaymentMethod";
import { StoredPaymentMethodDetails } from "./storedPaymentMethodDetails";
import { StoredPaymentMethodRequest } from "./storedPaymentMethodRequest";
import { StoredPaymentMethodResource } from "./storedPaymentMethodResource";
import { SubInputDetail } from "./subInputDetail";
import { SubMerchant } from "./subMerchant";
import { SubMerchantInfo } from "./subMerchantInfo";
import { Surcharge } from "./surcharge";
import { TaxTotal } from "./taxTotal";
import { ThreeDS2RequestData } from "./threeDS2RequestData";
import { ThreeDS2RequestFields } from "./threeDS2RequestFields";
import { ThreeDS2ResponseData } from "./threeDS2ResponseData";
import { ThreeDS2Result } from "./threeDS2Result";
import { ThreeDSRequestData } from "./threeDSRequestData";
import { ThreeDSRequestorAuthenticationInfo } from "./threeDSRequestorAuthenticationInfo";
import { ThreeDSRequestorPriorAuthenticationInfo } from "./threeDSRequestorPriorAuthenticationInfo";
import { ThreeDSecureData } from "./threeDSecureData";
import { Ticket } from "./ticket";
import { TravelAgency } from "./travelAgency";
import { TwintDetails } from "./twintDetails";
import { UpdatePaymentLinkRequest } from "./updatePaymentLinkRequest";
import { UpiCollectDetails } from "./upiCollectDetails";
import { UpiIntentDetails } from "./upiIntentDetails";
import { UtilityRequest } from "./utilityRequest";
import { UtilityResponse } from "./utilityResponse";
import { VippsDetails } from "./vippsDetails";
import { VisaCheckoutDetails } from "./visaCheckoutDetails";
import { WeChatPayDetails } from "./weChatPayDetails";
import { WeChatPayMiniProgramDetails } from "./weChatPayMiniProgramDetails";
import { ZipDetails } from "./zipDetails";

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

let enumsMap: Set<string> = new Set<string>([
    "AccountInfo.AccountAgeIndicatorEnum",
    "AccountInfo.AccountChangeIndicatorEnum",
    "AccountInfo.AccountTypeEnum",
    "AccountInfo.DeliveryAddressUsageIndicatorEnum",
    "AccountInfo.PasswordChangeIndicatorEnum",
    "AccountInfo.PaymentAccountIndicatorEnum",
    "AcctInfo.ChAccAgeIndEnum",
    "AcctInfo.ChAccChangeIndEnum",
    "AcctInfo.ChAccPwChangeIndEnum",
    "AcctInfo.PaymentAccIndEnum",
    "AcctInfo.ShipAddressUsageIndEnum",
    "AcctInfo.ShipNameIndicatorEnum",
    "AcctInfo.SuspiciousAccActivityEnum",
    "AchDetails.AccountHolderTypeEnum",
    "AchDetails.BankAccountTypeEnum",
    "AchDetails.TypeEnum",
    "AdditionalData3DSecure.ChallengeWindowSizeEnum",
    "AdditionalDataCommon.IndustryUsageEnum",
    "AffirmDetails.TypeEnum",
    "AfterpayDetails.TypeEnum",
    "AmazonPayDetails.TypeEnum",
    "AncvDetails.TypeEnum",
    "AndroidPayDetails.TypeEnum",
    "ApplePayDetails.FundingSourceEnum",
    "ApplePayDetails.TypeEnum",
    "ApplePayDonations.FundingSourceEnum",
    "ApplePayDonations.TypeEnum",
    "AuthenticationData.AttemptAuthenticationEnum",
    "BacsDirectDebitDetails.TypeEnum",
    "BalanceCheckRequest.RecurringProcessingModelEnum",
    "BalanceCheckRequest.ShopperInteractionEnum",
    "BalanceCheckResponse.ResultCodeEnum",
    "BillDeskDetails.TypeEnum",
    "BlikDetails.TypeEnum",
    "CancelOrderResponse.ResultCodeEnum",
    "CardDetails.FundingSourceEnum",
    "CardDetails.TypeEnum",
    "CardDonations.FundingSourceEnum",
    "CardDonations.TypeEnum",
    "CashAppDetails.TypeEnum",
    "CellulantDetails.TypeEnum",
    "CheckoutAwaitAction.TypeEnum",
    "CheckoutBankAccount.AccountTypeEnum",
    "CheckoutBankTransferAction.TypeEnum",
    "CheckoutDelegatedAuthenticationAction.TypeEnum",
    "CheckoutNativeRedirectAction.TypeEnum",
    "CheckoutQrCodeAction.TypeEnum",
    "CheckoutRedirectAction.TypeEnum",
    "CheckoutSDKAction.TypeEnum",
    "CheckoutSessionInstallmentOption.PlansEnum",
    "CheckoutSessionThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum",
    "CheckoutThreeDS2Action.TypeEnum",
    "CheckoutVoucherAction.TypeEnum",
    "CreateCheckoutSessionRequest.ChannelEnum",
    "CreateCheckoutSessionRequest.ModeEnum",
    "CreateCheckoutSessionRequest.RecurringProcessingModelEnum",
    "CreateCheckoutSessionRequest.ShopperInteractionEnum",
    "CreateCheckoutSessionRequest.StoreFiltrationModeEnum",
    "CreateCheckoutSessionRequest.StorePaymentMethodModeEnum",
    "CreateCheckoutSessionResponse.ChannelEnum",
    "CreateCheckoutSessionResponse.ModeEnum",
    "CreateCheckoutSessionResponse.RecurringProcessingModelEnum",
    "CreateCheckoutSessionResponse.ShopperInteractionEnum",
    "CreateCheckoutSessionResponse.StoreFiltrationModeEnum",
    "CreateCheckoutSessionResponse.StorePaymentMethodModeEnum",
    "CreateOrderResponse.ResultCodeEnum",
    "DeliveryMethod.TypeEnum",
    "DeviceRenderOptions.SdkInterfaceEnum",
    "DeviceRenderOptions.SdkUiTypeEnum",
    "DokuDetails.TypeEnum",
    "DonationPaymentRequest.ChannelEnum",
    "DonationPaymentRequest.RecurringProcessingModelEnum",
    "DonationPaymentRequest.ShopperInteractionEnum",
    "DonationPaymentRequestPaymentMethod.FundingSourceEnum",
    "DonationPaymentRequestPaymentMethod.TypeEnum",
    "DonationPaymentResponse.StatusEnum",
    "DragonpayDetails.TypeEnum",
    "EBankingFinlandDetails.TypeEnum",
    "EcontextVoucherDetails.TypeEnum",
    "EftDetails.TypeEnum",
    "FastlaneDetails.TypeEnum",
    "FundRecipient.WalletPurposeEnum",
    "GenericIssuerPaymentMethodDetails.TypeEnum",
    "GooglePayDetails.FundingSourceEnum",
    "GooglePayDetails.TypeEnum",
    "GooglePayDonations.FundingSourceEnum",
    "GooglePayDonations.TypeEnum",
    "IdealDetails.TypeEnum",
    "IdealDonations.TypeEnum",
    "InstallmentOption.PlansEnum",
    "Installments.PlanEnum",
    "KlarnaDetails.TypeEnum",
    "Mandate.AmountRuleEnum",
    "Mandate.BillingAttemptsRuleEnum",
    "Mandate.FrequencyEnum",
    "MasterpassDetails.FundingSourceEnum",
    "MasterpassDetails.TypeEnum",
    "MbwayDetails.TypeEnum",
    "MerchantRiskIndicator.DeliveryAddressIndicatorEnum",
    "MerchantRiskIndicator.DeliveryTimeframeEnum",
    "MobilePayDetails.TypeEnum",
    "MolPayDetails.TypeEnum",
    "OpenInvoiceDetails.TypeEnum",
    "PayByBankAISDirectDebitDetails.TypeEnum",
    "PayByBankDetails.TypeEnum",
    "PayPalDetails.SubtypeEnum",
    "PayPalDetails.TypeEnum",
    "PayPayDetails.TypeEnum",
    "PayToDetails.TypeEnum",
    "PayUUpiDetails.TypeEnum",
    "PayWithGoogleDetails.FundingSourceEnum",
    "PayWithGoogleDetails.TypeEnum",
    "PayWithGoogleDonations.FundingSourceEnum",
    "PayWithGoogleDonations.TypeEnum",
    "Payment.ResultCodeEnum",
    "PaymentAmountUpdateRequest.IndustryUsageEnum",
    "PaymentAmountUpdateResponse.IndustryUsageEnum",
    "PaymentAmountUpdateResponse.StatusEnum",
    "PaymentCancelResponse.StatusEnum",
    "PaymentCaptureResponse.StatusEnum",
    "PaymentDetails.TypeEnum",
    "PaymentDetailsResponse.ResultCodeEnum",
    "PaymentLinkRequest.RecurringProcessingModelEnum",
    "PaymentLinkRequest.RequiredShopperFieldsEnum",
    "PaymentLinkRequest.StorePaymentMethodModeEnum",
    "PaymentLinkResponse.RecurringProcessingModelEnum",
    "PaymentLinkResponse.RequiredShopperFieldsEnum",
    "PaymentLinkResponse.StatusEnum",
    "PaymentLinkResponse.StorePaymentMethodModeEnum",
    "PaymentMethod.FundingSourceEnum",
    "PaymentMethodsRequest.ChannelEnum",
    "PaymentMethodsRequest.StoreFiltrationModeEnum",
    "PaymentRefundRequest.MerchantRefundReasonEnum",
    "PaymentRefundResponse.MerchantRefundReasonEnum",
    "PaymentRefundResponse.StatusEnum",
    "PaymentRequest.ChannelEnum",
    "PaymentRequest.EntityTypeEnum",
    "PaymentRequest.IndustryUsageEnum",
    "PaymentRequest.RecurringProcessingModelEnum",
    "PaymentRequest.ShopperInteractionEnum",
    "PaymentRequestPaymentMethod.AccountHolderTypeEnum",
    "PaymentRequestPaymentMethod.BankAccountTypeEnum",
    "PaymentRequestPaymentMethod.TypeEnum",
    "PaymentRequestPaymentMethod.FundingSourceEnum",
    "PaymentResponse.ResultCodeEnum",
    "PaymentResponseAction.TypeEnum",
    "PaymentReversalResponse.StatusEnum",
    "PaypalUpdateOrderResponse.StatusEnum",
    "PixDetails.TypeEnum",
    "PixRecurring.FrequencyEnum",
    "PlatformChargebackLogic.BehaviorEnum",
    "PseDetails.TypeEnum",
    "RakutenPayDetails.TypeEnum",
    "RatepayDetails.TypeEnum",
    "Recurring.ContractEnum",
    "Recurring.TokenServiceEnum",
    "ResponseAdditionalDataCard.CardProductIdEnum",
    "ResponseAdditionalDataCommon.FraudResultTypeEnum",
    "ResponseAdditionalDataCommon.FraudRiskLevelEnum",
    "ResponseAdditionalDataCommon.RecurringProcessingModelEnum",
    "ResponseAdditionalDataCommon.TokenizationStoreOperationTypeEnum",
    "RivertyDetails.TypeEnum",
    "SamsungPayDetails.FundingSourceEnum",
    "SamsungPayDetails.TypeEnum",
    "SepaDirectDebitDetails.TypeEnum",
    "SessionResultResponse.StatusEnum",
    "Split.TypeEnum",
    "StandalonePaymentCancelResponse.StatusEnum",
    "StoredPaymentMethodDetails.TypeEnum",
    "StoredPaymentMethodRequest.RecurringProcessingModelEnum",
    "ThreeDS2RequestData.AcctTypeEnum",
    "ThreeDS2RequestData.AddrMatchEnum",
    "ThreeDS2RequestData.ChallengeIndicatorEnum",
    "ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum",
    "ThreeDS2RequestData.TransTypeEnum",
    "ThreeDS2RequestData.TransactionTypeEnum",
    "ThreeDS2RequestFields.AcctTypeEnum",
    "ThreeDS2RequestFields.AddrMatchEnum",
    "ThreeDS2RequestFields.ChallengeIndicatorEnum",
    "ThreeDS2RequestFields.ThreeDSRequestorChallengeIndEnum",
    "ThreeDS2RequestFields.TransTypeEnum",
    "ThreeDS2RequestFields.TransactionTypeEnum",
    "ThreeDS2Result.ChallengeCancelEnum",
    "ThreeDS2Result.ExemptionIndicatorEnum",
    "ThreeDS2Result.ThreeDSRequestorChallengeIndEnum",
    "ThreeDSRequestData.ChallengeWindowSizeEnum",
    "ThreeDSRequestData.DataOnlyEnum",
    "ThreeDSRequestData.NativeThreeDSEnum",
    "ThreeDSRequestData.ThreeDSVersionEnum",
    "ThreeDSRequestorAuthenticationInfo.ThreeDSReqAuthMethodEnum",
    "ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum",
    "ThreeDSecureData.AuthenticationResponseEnum",
    "ThreeDSecureData.ChallengeCancelEnum",
    "ThreeDSecureData.DirectoryResponseEnum",
    "TwintDetails.TypeEnum",
    "UpdatePaymentLinkRequest.StatusEnum",
    "UpiCollectDetails.TypeEnum",
    "UpiIntentDetails.TypeEnum",
    "VippsDetails.TypeEnum",
    "VisaCheckoutDetails.FundingSourceEnum",
    "VisaCheckoutDetails.TypeEnum",
    "WeChatPayDetails.TypeEnum",
    "WeChatPayMiniProgramDetails.TypeEnum",
    "ZipDetails.TypeEnum",
]);

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
    "Agency": Agency,
    "Airline": Airline,
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
    "DonationPaymentRequestPaymentMethod": DonationPaymentRequestPaymentMethodClass,
    "DonationPaymentResponse": DonationPaymentResponse,
    "DragonpayDetails": DragonpayDetails,
    "EBankingFinlandDetails": EBankingFinlandDetails,
    "EcontextVoucherDetails": EcontextVoucherDetails,
    "EftDetails": EftDetails,
    "EncryptedOrderData": EncryptedOrderData,
    "EnhancedSchemeData": EnhancedSchemeData,
    "ExternalPlatform": ExternalPlatform,
    "FastlaneDetails": FastlaneDetails,
    "ForexQuote": ForexQuote,
    "FraudCheckResult": FraudCheckResult,
    "FraudResult": FraudResult,
    "FundOrigin": FundOrigin,
    "FundRecipient": FundRecipient,
    "GenericIssuerPaymentMethodDetails": GenericIssuerPaymentMethodDetails,
    "GooglePayDetails": GooglePayDetails,
    "GooglePayDonations": GooglePayDonations,
    "IdealDetails": IdealDetails,
    "IdealDonations": IdealDonations,
    "InputDetail": InputDetail,
    "InstallmentOption": InstallmentOption,
    "Installments": Installments,
    "Item": Item,
    "KlarnaDetails": KlarnaDetails,
    "Leg": Leg,
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
    "Passenger": Passenger,
    "PayByBankAISDirectDebitDetails": PayByBankAISDirectDebitDetails,
    "PayByBankDetails": PayByBankDetails,
    "PayPalDetails": PayPalDetails,
    "PayPayDetails": PayPayDetails,
    "PayToDetails": PayToDetails,
    "PayUUpiDetails": PayUUpiDetails,
    "PayWithGoogleDetails": PayWithGoogleDetails,
    "PayWithGoogleDonations": PayWithGoogleDonations,
    "Payment": Payment,
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
    "PaymentRequestPaymentMethod": PaymentRequestPaymentMethodClass,
    "PaymentResponse": PaymentResponse,
    "PaymentResponseAction": PaymentResponseActionClass,
    "PaymentReversalRequest": PaymentReversalRequest,
    "PaymentReversalResponse": PaymentReversalResponse,
    "PaypalUpdateOrderRequest": PaypalUpdateOrderRequest,
    "PaypalUpdateOrderResponse": PaypalUpdateOrderResponse,
    "Phone": Phone,
    "PixDetails": PixDetails,
    "PixRecurring": PixRecurring,
    "PlatformChargebackLogic": PlatformChargebackLogic,
    "PseDetails": PseDetails,
    "RakutenPayDetails": RakutenPayDetails,
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
    "Surcharge": Surcharge,
    "TaxTotal": TaxTotal,
    "ThreeDS2RequestData": ThreeDS2RequestData,
    "ThreeDS2RequestFields": ThreeDS2RequestFields,
    "ThreeDS2ResponseData": ThreeDS2ResponseData,
    "ThreeDS2Result": ThreeDS2Result,
    "ThreeDSRequestData": ThreeDSRequestData,
    "ThreeDSRequestorAuthenticationInfo": ThreeDSRequestorAuthenticationInfo,
    "ThreeDSRequestorPriorAuthenticationInfo": ThreeDSRequestorPriorAuthenticationInfo,
    "ThreeDSecureData": ThreeDSecureData,
    "Ticket": Ticket,
    "TravelAgency": TravelAgency,
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

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

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
            if (enumsMap.has(expectedType)) {
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
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    /**
     * Serializes a value into a plain JSON-compatible object based on its type.
     *
     * Supports primitives, arrays, maps, dates, enums, and classes defined in `typeMap`.
     * Falls back to raw data if type is unknown or lacks `getAttributeTypeMap()`.
     *
     * @param data - The value to serialize.
     * @param type - The expected type name as a string.
     * @param format - Format hint (e.g. "date" or "date-time"). Default is an empty string.
     * @returns A JSON-compatible representation of `data`.
     */
    public static serialize(data: any, type: string, format: string = ""): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            const clazz = typeMap[type];

            // Safe check for getAttributeTypeMap
            if (typeof clazz.getAttributeTypeMap !== "function") {
                return { ...data }; // fallback: shallow copy
            }

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    /**
     * Deserializes a plain JSON-compatible object into a typed instance.
     *
     * Handles primitives, arrays, maps, dates, enums, and known classes from `typeMap`.
     * Uses discriminators when available to resolve polymorphic types.
     * Falls back to raw data if the type is unknown or lacks `getAttributeTypeMap()`.
     *
     * @param data - The raw input to deserialize.
     * @param type - The expected type name as a string.
     * @param format - Format hint (e.g. "date" or "date-time"). Default is an empty string.
     * @returns A deserialized instance or value of `data`.
     */
    public static deserialize(data: any, type: string, format: string = ""): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();

            // Safe check for getAttributeTypeMap
            if (typeof typeMap[type].getAttributeTypeMap !== "function") {
                Object.assign(instance, data); // fallback: shallow copy
                return instance;
            }

            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
