/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

export * from './accountInfo';
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
export * from './afterpayDetails';
export * from './amazonPayDetails';
export * from './amount';
export * from './androidPayDetails';
export * from './applePayDetails';
export * from './applicationInfo';
export * from './avs';
export * from './bacsDirectDebitDetails';
export * from './bankAccount';
export * from './billDeskDetails';
export * from './blikDetails';
export * from './browserInfo';
export * from './card';
export * from './cardDetails';
export * from './cellulantDetails';
export * from './checkoutAwaitAction';
export * from './checkoutBalanceCheckRequest';
export * from './checkoutBalanceCheckResponse';
export * from './checkoutBankTransferAction';
export * from './checkoutCancelOrderRequest';
export * from './checkoutCancelOrderResponse';
export * from './checkoutCreateOrderRequest';
export * from './checkoutCreateOrderResponse';
export * from './checkoutDonationAction';
export * from './checkoutOneTimePasscodeAction';
export * from './checkoutOrder';
export * from './checkoutOrderResponse';
export * from './checkoutQrCodeAction';
export * from './checkoutRedirectAction';
export * from './checkoutSDKAction';
export * from './checkoutThreeDS2Action';
export * from './checkoutUtilityRequest';
export * from './checkoutUtilityResponse';
export * from './checkoutVoucherAction';
export * from './commonField';
export * from './company';
export * from './configuration';
export * from './createPaymentAmountUpdateRequest';
export * from './createPaymentCancelRequest';
export * from './createPaymentCaptureRequest';
export * from './createPaymentLinkRequest';
export * from './createPaymentRefundRequest';
export * from './createPaymentReversalRequest';
export * from './createStandalonePaymentCancelRequest';
export * from './detailsRequest';
export * from './deviceRenderOptions';
export * from './dokuDetails';
export * from './dotpayDetails';
export * from './dragonpayDetails';
export * from './econtextVoucherDetails';
export * from './entercashDetails';
export * from './externalPlatform';
export * from './forexQuote';
export * from './fraudCheckResult';
export * from './fraudResult';
export * from './genericIssuerPaymentMethodDetails';
export * from './giropayDetails';
export * from './googlePayDetails';
export * from './idealDetails';
export * from './inputDetail';
export * from './installmentOption';
export * from './installments';
export * from './installmentsNumber';
export * from './item';
export * from './klarnaDetails';
export * from './lianLianPayDetails';
export * from './lineItem';
export * from './mandate';
export * from './masterpassDetails';
export * from './mbwayDetails';
export * from './merchantDevice';
export * from './merchantRiskIndicator';
export * from './mobilePayDetails';
export * from './molPayDetails';
export * from './name';
export * from './openInvoiceDetails';
export * from './payPalDetails';
export * from './payUUpiDetails';
export * from './payWithGoogleDetails';
export * from './paymentAmountUpdateResource';
export * from './paymentCancelResource';
export * from './paymentCaptureResource';
export * from './paymentCompletionDetails';
export * from './paymentDetails';
export * from './paymentDetailsResponse';
export * from './paymentLinkResource';
export * from './paymentMethod';
export * from './paymentMethodGroup';
export * from './paymentMethodsRequest';
export * from './paymentMethodsResponse';
export * from './paymentRefundResource';
export * from './paymentRequest';
export * from './paymentResponse';
export * from './paymentReversalResource';
export * from './paymentSetupRequest';
export * from './paymentSetupResponse';
export * from './paymentVerificationRequest';
export * from './paymentVerificationResponse';
export * from './qiwiWalletDetails';
export * from './ratepayDetails';
export * from './recurring';
export * from './recurringDetail';
export * from './redirect';
export * from './responseAdditionalData3DSecure';
export * from './responseAdditionalDataBillingAddress';
export * from './responseAdditionalDataCard';
export * from './responseAdditionalDataCommon';
export * from './responseAdditionalDataDeliveryAddress';
export * from './responseAdditionalDataInstallments';
export * from './responseAdditionalDataNetworkTokens';
export * from './responseAdditionalDataOpi';
export * from './responseAdditionalDataPayPal';
export * from './responseAdditionalDataSepa';
export * from './riskData';
export * from './sDKEphemPubKey';
export * from './samsungPayDetails';
export * from './sepaDirectDebitDetails';
export * from './serviceError';
export * from './serviceError2';
export * from './shopperInput';
export * from './shopperInteractionDevice';
export * from './split';
export * from './splitAmount';
export * from './standalonePaymentCancelResource';
export * from './storedDetails';
export * from './storedPaymentMethod';
export * from './storedPaymentMethodDetails';
export * from './subInputDetail';
export * from './threeDS2RequestData';
export * from './threeDS2ResponseData';
export * from './threeDS2Result';
export * from './threeDSecureData';
export * from './updatePaymentLinkRequest';
export * from './upiDetails';
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
import { AfterpayDetails } from './afterpayDetails';
import { AmazonPayDetails } from './amazonPayDetails';
import { Amount } from './amount';
import { AndroidPayDetails } from './androidPayDetails';
import { ApplePayDetails } from './applePayDetails';
import { ApplicationInfo } from './applicationInfo';
import { Avs } from './avs';
import { BacsDirectDebitDetails } from './bacsDirectDebitDetails';
import { BankAccount } from './bankAccount';
import { BillDeskDetails } from './billDeskDetails';
import { BlikDetails } from './blikDetails';
import { BrowserInfo } from './browserInfo';
import { Card } from './card';
import { CardDetails } from './cardDetails';
import { CellulantDetails } from './cellulantDetails';
import { CheckoutAwaitAction } from './checkoutAwaitAction';
import { CheckoutBalanceCheckRequest } from './checkoutBalanceCheckRequest';
import { CheckoutBalanceCheckResponse } from './checkoutBalanceCheckResponse';
import { CheckoutBankTransferAction } from './checkoutBankTransferAction';
import { CheckoutCancelOrderRequest } from './checkoutCancelOrderRequest';
import { CheckoutCancelOrderResponse } from './checkoutCancelOrderResponse';
import { CheckoutCreateOrderRequest } from './checkoutCreateOrderRequest';
import { CheckoutCreateOrderResponse } from './checkoutCreateOrderResponse';
import { CheckoutDonationAction } from './checkoutDonationAction';
import { CheckoutOneTimePasscodeAction } from './checkoutOneTimePasscodeAction';
import { CheckoutOrder } from './checkoutOrder';
import { CheckoutOrderResponse } from './checkoutOrderResponse';
import { CheckoutQrCodeAction } from './checkoutQrCodeAction';
import { CheckoutRedirectAction } from './checkoutRedirectAction';
import { CheckoutSDKAction } from './checkoutSDKAction';
import { CheckoutThreeDS2Action } from './checkoutThreeDS2Action';
import { CheckoutUtilityRequest } from './checkoutUtilityRequest';
import { CheckoutUtilityResponse } from './checkoutUtilityResponse';
import { CheckoutVoucherAction } from './checkoutVoucherAction';
import { CommonField } from './commonField';
import { Company } from './company';
import { Configuration } from './configuration';
import { CreatePaymentAmountUpdateRequest } from './createPaymentAmountUpdateRequest';
import { CreatePaymentCancelRequest } from './createPaymentCancelRequest';
import { CreatePaymentCaptureRequest } from './createPaymentCaptureRequest';
import { CreatePaymentLinkRequest } from './createPaymentLinkRequest';
import { CreatePaymentRefundRequest } from './createPaymentRefundRequest';
import { CreatePaymentReversalRequest } from './createPaymentReversalRequest';
import { CreateStandalonePaymentCancelRequest } from './createStandalonePaymentCancelRequest';
import { DetailsRequest } from './detailsRequest';
import { DeviceRenderOptions } from './deviceRenderOptions';
import { DokuDetails } from './dokuDetails';
import { DotpayDetails } from './dotpayDetails';
import { DragonpayDetails } from './dragonpayDetails';
import { EcontextVoucherDetails } from './econtextVoucherDetails';
import { EntercashDetails } from './entercashDetails';
import { ExternalPlatform } from './externalPlatform';
import { ForexQuote } from './forexQuote';
import { FraudCheckResult } from './fraudCheckResult';
import { FraudResult } from './fraudResult';
import { GenericIssuerPaymentMethodDetails } from './genericIssuerPaymentMethodDetails';
import { GiropayDetails } from './giropayDetails';
import { GooglePayDetails } from './googlePayDetails';
import { IdealDetails } from './idealDetails';
import { InputDetail } from './inputDetail';
import { InstallmentOption } from './installmentOption';
import { Installments } from './installments';
import { InstallmentsNumber } from './installmentsNumber';
import { Item } from './item';
import { KlarnaDetails } from './klarnaDetails';
import { LianLianPayDetails } from './lianLianPayDetails';
import { LineItem } from './lineItem';
import { Mandate } from './mandate';
import { MasterpassDetails } from './masterpassDetails';
import { MbwayDetails } from './mbwayDetails';
import { MerchantDevice } from './merchantDevice';
import { MerchantRiskIndicator } from './merchantRiskIndicator';
import { MobilePayDetails } from './mobilePayDetails';
import { MolPayDetails } from './molPayDetails';
import { Name } from './name';
import { OpenInvoiceDetails } from './openInvoiceDetails';
import { PayPalDetails } from './payPalDetails';
import { PayUUpiDetails } from './payUUpiDetails';
import { PayWithGoogleDetails } from './payWithGoogleDetails';
import { PaymentAmountUpdateResource } from './paymentAmountUpdateResource';
import { PaymentCancelResource } from './paymentCancelResource';
import { PaymentCaptureResource } from './paymentCaptureResource';
import { PaymentCompletionDetails } from './paymentCompletionDetails';
import { PaymentDetails } from './paymentDetails';
import { PaymentDetailsResponse } from './paymentDetailsResponse';
import { PaymentLinkResource } from './paymentLinkResource';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodGroup } from './paymentMethodGroup';
import { PaymentMethodsRequest } from './paymentMethodsRequest';
import { PaymentMethodsResponse } from './paymentMethodsResponse';
import { PaymentRefundResource } from './paymentRefundResource';
import { PaymentRequest } from './paymentRequest';
import { PaymentResponse } from './paymentResponse';
import { PaymentReversalResource } from './paymentReversalResource';
import { PaymentSetupRequest } from './paymentSetupRequest';
import { PaymentSetupResponse } from './paymentSetupResponse';
import { PaymentVerificationRequest } from './paymentVerificationRequest';
import { PaymentVerificationResponse } from './paymentVerificationResponse';
import { QiwiWalletDetails } from './qiwiWalletDetails';
import { RatepayDetails } from './ratepayDetails';
import { Recurring } from './recurring';
import { RecurringDetail } from './recurringDetail';
import { Redirect } from './redirect';
import { ResponseAdditionalData3DSecure } from './responseAdditionalData3DSecure';
import { ResponseAdditionalDataBillingAddress } from './responseAdditionalDataBillingAddress';
import { ResponseAdditionalDataCard } from './responseAdditionalDataCard';
import { ResponseAdditionalDataCommon } from './responseAdditionalDataCommon';
import { ResponseAdditionalDataDeliveryAddress } from './responseAdditionalDataDeliveryAddress';
import { ResponseAdditionalDataInstallments } from './responseAdditionalDataInstallments';
import { ResponseAdditionalDataNetworkTokens } from './responseAdditionalDataNetworkTokens';
import { ResponseAdditionalDataOpi } from './responseAdditionalDataOpi';
import { ResponseAdditionalDataPayPal } from './responseAdditionalDataPayPal';
import { ResponseAdditionalDataSepa } from './responseAdditionalDataSepa';
import { RiskData } from './riskData';
import { SDKEphemPubKey } from './sDKEphemPubKey';
import { SamsungPayDetails } from './samsungPayDetails';
import { SepaDirectDebitDetails } from './sepaDirectDebitDetails';
import { ServiceError } from './serviceError';
import { ServiceError2 } from './serviceError2';
import { ShopperInput } from './shopperInput';
import { ShopperInteractionDevice } from './shopperInteractionDevice';
import { Split } from './split';
import { SplitAmount } from './splitAmount';
import { StandalonePaymentCancelResource } from './standalonePaymentCancelResource';
import { StoredDetails } from './storedDetails';
import { StoredPaymentMethod } from './storedPaymentMethod';
import { StoredPaymentMethodDetails } from './storedPaymentMethodDetails';
import { SubInputDetail } from './subInputDetail';
import { ThreeDS2RequestData } from './threeDS2RequestData';
import { ThreeDS2ResponseData } from './threeDS2ResponseData';
import { ThreeDS2Result } from './threeDS2Result';
import { ThreeDSecureData } from './threeDSecureData';
import { UpdatePaymentLinkRequest } from './updatePaymentLinkRequest';
import { UpiDetails } from './upiDetails';
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
        "AchDetails.TypeEnum": AchDetails.TypeEnum,
        "AdditionalDataCommon.IndustryUsageEnum": AdditionalDataCommon.IndustryUsageEnum,
        "AfterpayDetails.TypeEnum": AfterpayDetails.TypeEnum,
        "AmazonPayDetails.TypeEnum": AmazonPayDetails.TypeEnum,
        "AndroidPayDetails.TypeEnum": AndroidPayDetails.TypeEnum,
        "ApplePayDetails.FundingSourceEnum": ApplePayDetails.FundingSourceEnum,
        "ApplePayDetails.TypeEnum": ApplePayDetails.TypeEnum,
        "Avs.EnabledEnum": Avs.EnabledEnum,
        "BacsDirectDebitDetails.TypeEnum": BacsDirectDebitDetails.TypeEnum,
        "BillDeskDetails.TypeEnum": BillDeskDetails.TypeEnum,
        "BlikDetails.TypeEnum": BlikDetails.TypeEnum,
        "CardDetails.FundingSourceEnum": CardDetails.FundingSourceEnum,
        "CardDetails.TypeEnum": CardDetails.TypeEnum,
        "CellulantDetails.TypeEnum": CellulantDetails.TypeEnum,
        "CheckoutAwaitAction.TypeEnum": CheckoutAwaitAction.TypeEnum,
        "CheckoutBalanceCheckRequest.RecurringProcessingModelEnum": CheckoutBalanceCheckRequest.RecurringProcessingModelEnum,
        "CheckoutBalanceCheckRequest.ShopperInteractionEnum": CheckoutBalanceCheckRequest.ShopperInteractionEnum,
        "CheckoutBalanceCheckResponse.ResultCodeEnum": CheckoutBalanceCheckResponse.ResultCodeEnum,
        "CheckoutBankTransferAction.TypeEnum": CheckoutBankTransferAction.TypeEnum,
        "CheckoutCancelOrderResponse.ResultCodeEnum": CheckoutCancelOrderResponse.ResultCodeEnum,
        "CheckoutCreateOrderResponse.ResultCodeEnum": CheckoutCreateOrderResponse.ResultCodeEnum,
        "CheckoutDonationAction.TypeEnum": CheckoutDonationAction.TypeEnum,
        "CheckoutOneTimePasscodeAction.TypeEnum": CheckoutOneTimePasscodeAction.TypeEnum,
        "CheckoutQrCodeAction.TypeEnum": CheckoutQrCodeAction.TypeEnum,
        "CheckoutRedirectAction.TypeEnum": CheckoutRedirectAction.TypeEnum,
        "CheckoutSDKAction.TypeEnum": CheckoutSDKAction.TypeEnum,
        "CheckoutThreeDS2Action.TypeEnum": CheckoutThreeDS2Action.TypeEnum,
        "CheckoutVoucherAction.TypeEnum": CheckoutVoucherAction.TypeEnum,
        "Configuration.CardHolderNameEnum": Configuration.CardHolderNameEnum,
        "CreatePaymentAmountUpdateRequest.ReasonEnum": CreatePaymentAmountUpdateRequest.ReasonEnum,
        "CreatePaymentLinkRequest.RecurringProcessingModelEnum": CreatePaymentLinkRequest.RecurringProcessingModelEnum,
        "CreatePaymentLinkRequest.RequiredShopperFieldsEnum": CreatePaymentLinkRequest.RequiredShopperFieldsEnum,
        "DeviceRenderOptions.SdkInterfaceEnum": DeviceRenderOptions.SdkInterfaceEnum,
        "DeviceRenderOptions.SdkUiTypeEnum": DeviceRenderOptions.SdkUiTypeEnum,
        "DokuDetails.TypeEnum": DokuDetails.TypeEnum,
        "DotpayDetails.TypeEnum": DotpayDetails.TypeEnum,
        "DragonpayDetails.TypeEnum": DragonpayDetails.TypeEnum,
        "EcontextVoucherDetails.TypeEnum": EcontextVoucherDetails.TypeEnum,
        "EntercashDetails.TypeEnum": EntercashDetails.TypeEnum,
        "GenericIssuerPaymentMethodDetails.TypeEnum": GenericIssuerPaymentMethodDetails.TypeEnum,
        "GiropayDetails.TypeEnum": GiropayDetails.TypeEnum,
        "GooglePayDetails.FundingSourceEnum": GooglePayDetails.FundingSourceEnum,
        "GooglePayDetails.TypeEnum": GooglePayDetails.TypeEnum,
        "IdealDetails.TypeEnum": IdealDetails.TypeEnum,
        "InstallmentOption.PlansEnum": InstallmentOption.PlansEnum,
        "Installments.PlanEnum": Installments.PlanEnum,
        "KlarnaDetails.TypeEnum": KlarnaDetails.TypeEnum,
        "LianLianPayDetails.TypeEnum": LianLianPayDetails.TypeEnum,
        "LineItem.TaxCategoryEnum": LineItem.TaxCategoryEnum,
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
        "PayPalDetails.SubtypeEnum": PayPalDetails.SubtypeEnum,
        "PayPalDetails.TypeEnum": PayPalDetails.TypeEnum,
        "PayUUpiDetails.TypeEnum": PayUUpiDetails.TypeEnum,
        "PayWithGoogleDetails.FundingSourceEnum": PayWithGoogleDetails.FundingSourceEnum,
        "PayWithGoogleDetails.TypeEnum": PayWithGoogleDetails.TypeEnum,
        "PaymentAmountUpdateResource.ReasonEnum": PaymentAmountUpdateResource.ReasonEnum,
        "PaymentAmountUpdateResource.StatusEnum": PaymentAmountUpdateResource.StatusEnum,
        "PaymentCancelResource.StatusEnum": PaymentCancelResource.StatusEnum,
        "PaymentCaptureResource.StatusEnum": PaymentCaptureResource.StatusEnum,
        "PaymentDetails.TypeEnum": PaymentDetails.TypeEnum,
        "PaymentDetailsResponse.ResultCodeEnum": PaymentDetailsResponse.ResultCodeEnum,
        "PaymentLinkResource.RecurringProcessingModelEnum": PaymentLinkResource.RecurringProcessingModelEnum,
        "PaymentLinkResource.StatusEnum": PaymentLinkResource.StatusEnum,
        "PaymentMethod.FundingSourceEnum": PaymentMethod.FundingSourceEnum,
        "PaymentMethodsRequest.ChannelEnum": PaymentMethodsRequest.ChannelEnum,
        "PaymentRefundResource.StatusEnum": PaymentRefundResource.StatusEnum,
        "PaymentRequest.ChannelEnum": PaymentRequest.ChannelEnum,
        "PaymentRequest.EntityTypeEnum": PaymentRequest.EntityTypeEnum,
        "PaymentRequest.RecurringProcessingModelEnum": PaymentRequest.RecurringProcessingModelEnum,
        "PaymentRequest.ShopperInteractionEnum": PaymentRequest.ShopperInteractionEnum,
        "PaymentResponse.ResultCodeEnum": PaymentResponse.ResultCodeEnum,
        "PaymentReversalResource.StatusEnum": PaymentReversalResource.StatusEnum,
        "PaymentSetupRequest.ChannelEnum": PaymentSetupRequest.ChannelEnum,
        "PaymentSetupRequest.EntityTypeEnum": PaymentSetupRequest.EntityTypeEnum,
        "PaymentSetupRequest.ShopperInteractionEnum": PaymentSetupRequest.ShopperInteractionEnum,
        "PaymentVerificationResponse.ResultCodeEnum": PaymentVerificationResponse.ResultCodeEnum,
        "QiwiWalletDetails.TypeEnum": QiwiWalletDetails.TypeEnum,
        "RatepayDetails.TypeEnum": RatepayDetails.TypeEnum,
        "Recurring.ContractEnum": Recurring.ContractEnum,
        "Recurring.TokenServiceEnum": Recurring.TokenServiceEnum,
        "RecurringDetail.FundingSourceEnum": RecurringDetail.FundingSourceEnum,
        "Redirect.MethodEnum": Redirect.MethodEnum,
        "ResponseAdditionalDataCommon.FraudResultTypeEnum": ResponseAdditionalDataCommon.FraudResultTypeEnum,
        "ResponseAdditionalDataCommon.MerchantAdviceCodeEnum": ResponseAdditionalDataCommon.MerchantAdviceCodeEnum,
        "ResponseAdditionalDataCommon.RecurringProcessingModelEnum": ResponseAdditionalDataCommon.RecurringProcessingModelEnum,
        "SamsungPayDetails.FundingSourceEnum": SamsungPayDetails.FundingSourceEnum,
        "SamsungPayDetails.TypeEnum": SamsungPayDetails.TypeEnum,
        "SepaDirectDebitDetails.TypeEnum": SepaDirectDebitDetails.TypeEnum,
        "ShopperInput.BillingAddressEnum": ShopperInput.BillingAddressEnum,
        "ShopperInput.DeliveryAddressEnum": ShopperInput.DeliveryAddressEnum,
        "ShopperInput.PersonalDetailsEnum": ShopperInput.PersonalDetailsEnum,
        "Split.TypeEnum": Split.TypeEnum,
        "StandalonePaymentCancelResource.StatusEnum": StandalonePaymentCancelResource.StatusEnum,
        "StoredPaymentMethodDetails.TypeEnum": StoredPaymentMethodDetails.TypeEnum,
        "ThreeDS2RequestData.ChallengeIndicatorEnum": ThreeDS2RequestData.ChallengeIndicatorEnum,
        "ThreeDS2RequestData.TransactionTypeEnum": ThreeDS2RequestData.TransactionTypeEnum,
        "ThreeDSecureData.AuthenticationResponseEnum": ThreeDSecureData.AuthenticationResponseEnum,
        "ThreeDSecureData.DirectoryResponseEnum": ThreeDSecureData.DirectoryResponseEnum,
        "UpdatePaymentLinkRequest.StatusEnum": UpdatePaymentLinkRequest.StatusEnum,
        "UpiDetails.TypeEnum": UpiDetails.TypeEnum,
        "VippsDetails.TypeEnum": VippsDetails.TypeEnum,
        "VisaCheckoutDetails.FundingSourceEnum": VisaCheckoutDetails.FundingSourceEnum,
        "VisaCheckoutDetails.TypeEnum": VisaCheckoutDetails.TypeEnum,
        "WeChatPayDetails.TypeEnum": WeChatPayDetails.TypeEnum,
        "WeChatPayMiniProgramDetails.TypeEnum": WeChatPayMiniProgramDetails.TypeEnum,
        "ZipDetails.TypeEnum": ZipDetails.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountInfo": AccountInfo,
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
    "AfterpayDetails": AfterpayDetails,
    "AmazonPayDetails": AmazonPayDetails,
    "Amount": Amount,
    "AndroidPayDetails": AndroidPayDetails,
    "ApplePayDetails": ApplePayDetails,
    "ApplicationInfo": ApplicationInfo,
    "Avs": Avs,
    "BacsDirectDebitDetails": BacsDirectDebitDetails,
    "BankAccount": BankAccount,
    "BillDeskDetails": BillDeskDetails,
    "BlikDetails": BlikDetails,
    "BrowserInfo": BrowserInfo,
    "Card": Card,
    "CardDetails": CardDetails,
    "CellulantDetails": CellulantDetails,
    "CheckoutAwaitAction": CheckoutAwaitAction,
    "CheckoutBalanceCheckRequest": CheckoutBalanceCheckRequest,
    "CheckoutBalanceCheckResponse": CheckoutBalanceCheckResponse,
    "CheckoutBankTransferAction": CheckoutBankTransferAction,
    "CheckoutCancelOrderRequest": CheckoutCancelOrderRequest,
    "CheckoutCancelOrderResponse": CheckoutCancelOrderResponse,
    "CheckoutCreateOrderRequest": CheckoutCreateOrderRequest,
    "CheckoutCreateOrderResponse": CheckoutCreateOrderResponse,
    "CheckoutDonationAction": CheckoutDonationAction,
    "CheckoutOneTimePasscodeAction": CheckoutOneTimePasscodeAction,
    "CheckoutOrder": CheckoutOrder,
    "CheckoutOrderResponse": CheckoutOrderResponse,
    "CheckoutQrCodeAction": CheckoutQrCodeAction,
    "CheckoutRedirectAction": CheckoutRedirectAction,
    "CheckoutSDKAction": CheckoutSDKAction,
    "CheckoutThreeDS2Action": CheckoutThreeDS2Action,
    "CheckoutUtilityRequest": CheckoutUtilityRequest,
    "CheckoutUtilityResponse": CheckoutUtilityResponse,
    "CheckoutVoucherAction": CheckoutVoucherAction,
    "CommonField": CommonField,
    "Company": Company,
    "Configuration": Configuration,
    "CreatePaymentAmountUpdateRequest": CreatePaymentAmountUpdateRequest,
    "CreatePaymentCancelRequest": CreatePaymentCancelRequest,
    "CreatePaymentCaptureRequest": CreatePaymentCaptureRequest,
    "CreatePaymentLinkRequest": CreatePaymentLinkRequest,
    "CreatePaymentRefundRequest": CreatePaymentRefundRequest,
    "CreatePaymentReversalRequest": CreatePaymentReversalRequest,
    "CreateStandalonePaymentCancelRequest": CreateStandalonePaymentCancelRequest,
    "DetailsRequest": DetailsRequest,
    "DeviceRenderOptions": DeviceRenderOptions,
    "DokuDetails": DokuDetails,
    "DotpayDetails": DotpayDetails,
    "DragonpayDetails": DragonpayDetails,
    "EcontextVoucherDetails": EcontextVoucherDetails,
    "EntercashDetails": EntercashDetails,
    "ExternalPlatform": ExternalPlatform,
    "ForexQuote": ForexQuote,
    "FraudCheckResult": FraudCheckResult,
    "FraudResult": FraudResult,
    "GenericIssuerPaymentMethodDetails": GenericIssuerPaymentMethodDetails,
    "GiropayDetails": GiropayDetails,
    "GooglePayDetails": GooglePayDetails,
    "IdealDetails": IdealDetails,
    "InputDetail": InputDetail,
    "InstallmentOption": InstallmentOption,
    "Installments": Installments,
    "InstallmentsNumber": InstallmentsNumber,
    "Item": Item,
    "KlarnaDetails": KlarnaDetails,
    "LianLianPayDetails": LianLianPayDetails,
    "LineItem": LineItem,
    "Mandate": Mandate,
    "MasterpassDetails": MasterpassDetails,
    "MbwayDetails": MbwayDetails,
    "MerchantDevice": MerchantDevice,
    "MerchantRiskIndicator": MerchantRiskIndicator,
    "MobilePayDetails": MobilePayDetails,
    "MolPayDetails": MolPayDetails,
    "Name": Name,
    "OpenInvoiceDetails": OpenInvoiceDetails,
    "PayPalDetails": PayPalDetails,
    "PayUUpiDetails": PayUUpiDetails,
    "PayWithGoogleDetails": PayWithGoogleDetails,
    "PaymentAmountUpdateResource": PaymentAmountUpdateResource,
    "PaymentCancelResource": PaymentCancelResource,
    "PaymentCaptureResource": PaymentCaptureResource,
    "PaymentCompletionDetails": PaymentCompletionDetails,
    "PaymentDetails": PaymentDetails,
    "PaymentDetailsResponse": PaymentDetailsResponse,
    "PaymentLinkResource": PaymentLinkResource,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodGroup": PaymentMethodGroup,
    "PaymentMethodsRequest": PaymentMethodsRequest,
    "PaymentMethodsResponse": PaymentMethodsResponse,
    "PaymentRefundResource": PaymentRefundResource,
    "PaymentRequest": PaymentRequest,
    "PaymentResponse": PaymentResponse,
    "PaymentReversalResource": PaymentReversalResource,
    "PaymentSetupRequest": PaymentSetupRequest,
    "PaymentSetupResponse": PaymentSetupResponse,
    "PaymentVerificationRequest": PaymentVerificationRequest,
    "PaymentVerificationResponse": PaymentVerificationResponse,
    "QiwiWalletDetails": QiwiWalletDetails,
    "RatepayDetails": RatepayDetails,
    "Recurring": Recurring,
    "RecurringDetail": RecurringDetail,
    "Redirect": Redirect,
    "ResponseAdditionalData3DSecure": ResponseAdditionalData3DSecure,
    "ResponseAdditionalDataBillingAddress": ResponseAdditionalDataBillingAddress,
    "ResponseAdditionalDataCard": ResponseAdditionalDataCard,
    "ResponseAdditionalDataCommon": ResponseAdditionalDataCommon,
    "ResponseAdditionalDataDeliveryAddress": ResponseAdditionalDataDeliveryAddress,
    "ResponseAdditionalDataInstallments": ResponseAdditionalDataInstallments,
    "ResponseAdditionalDataNetworkTokens": ResponseAdditionalDataNetworkTokens,
    "ResponseAdditionalDataOpi": ResponseAdditionalDataOpi,
    "ResponseAdditionalDataPayPal": ResponseAdditionalDataPayPal,
    "ResponseAdditionalDataSepa": ResponseAdditionalDataSepa,
    "RiskData": RiskData,
    "SDKEphemPubKey": SDKEphemPubKey,
    "SamsungPayDetails": SamsungPayDetails,
    "SepaDirectDebitDetails": SepaDirectDebitDetails,
    "ServiceError": ServiceError,
    "ServiceError2": ServiceError2,
    "ShopperInput": ShopperInput,
    "ShopperInteractionDevice": ShopperInteractionDevice,
    "Split": Split,
    "SplitAmount": SplitAmount,
    "StandalonePaymentCancelResource": StandalonePaymentCancelResource,
    "StoredDetails": StoredDetails,
    "StoredPaymentMethod": StoredPaymentMethod,
    "StoredPaymentMethodDetails": StoredPaymentMethodDetails,
    "SubInputDetail": SubInputDetail,
    "ThreeDS2RequestData": ThreeDS2RequestData,
    "ThreeDS2ResponseData": ThreeDS2ResponseData,
    "ThreeDS2Result": ThreeDS2Result,
    "ThreeDSecureData": ThreeDSecureData,
    "UpdatePaymentLinkRequest": UpdatePaymentLinkRequest,
    "UpiDetails": UpiDetails,
    "VippsDetails": VippsDetails,
    "VisaCheckoutDetails": VisaCheckoutDetails,
    "WeChatPayDetails": WeChatPayDetails,
    "WeChatPayMiniProgramDetails": WeChatPayMiniProgramDetails,
    "ZipDetails": ZipDetails,
}

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

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
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

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
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
