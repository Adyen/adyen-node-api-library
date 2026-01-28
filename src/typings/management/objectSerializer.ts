export * from "./models";

import { AccelInfo } from "./accelInfo";
import { AdditionalCommission } from "./additionalCommission";
import { AdditionalSettings } from "./additionalSettings";
import { AdditionalSettingsResponse } from "./additionalSettingsResponse";
import { Address } from "./address";
import { AffirmInfo } from "./affirmInfo";
import { AfterpayTouchInfo } from "./afterpayTouchInfo";
import { AlipayPlusInfo } from "./alipayPlusInfo";
import { AllowedOrigin } from "./allowedOrigin";
import { AllowedOriginsResponse } from "./allowedOriginsResponse";
import { AmexInfo } from "./amexInfo";
import { Amount } from "./amount";
import { AndroidApp } from "./androidApp";
import { AndroidAppError } from "./androidAppError";
import { AndroidAppsResponse } from "./androidAppsResponse";
import { AndroidCertificate } from "./androidCertificate";
import { AndroidCertificatesResponse } from "./androidCertificatesResponse";
import { ApiCredential } from "./apiCredential";
import { ApiCredentialLinks } from "./apiCredentialLinks";
import { ApplePayInfo } from "./applePayInfo";
import { BcmcInfo } from "./bcmcInfo";
import { BillingEntitiesResponse } from "./billingEntitiesResponse";
import { BillingEntity } from "./billingEntity";
import { CardholderReceipt } from "./cardholderReceipt";
import { CartesBancairesInfo } from "./cartesBancairesInfo";
import { ClearpayInfo } from "./clearpayInfo";
import { Commission } from "./commission";
import { Company } from "./company";
import { CompanyApiCredential } from "./companyApiCredential";
import { CompanyLinks } from "./companyLinks";
import { CompanyUser } from "./companyUser";
import { Configuration } from "./configuration";
import { Connectivity } from "./connectivity";
import { Contact } from "./contact";
import { CreateAllowedOriginRequest } from "./createAllowedOriginRequest";
import { CreateApiCredentialResponse } from "./createApiCredentialResponse";
import { CreateCompanyApiCredentialRequest } from "./createCompanyApiCredentialRequest";
import { CreateCompanyApiCredentialResponse } from "./createCompanyApiCredentialResponse";
import { CreateCompanyUserRequest } from "./createCompanyUserRequest";
import { CreateCompanyUserResponse } from "./createCompanyUserResponse";
import { CreateCompanyWebhookRequest } from "./createCompanyWebhookRequest";
import { CreateMerchantApiCredentialRequest } from "./createMerchantApiCredentialRequest";
import { CreateMerchantRequest } from "./createMerchantRequest";
import { CreateMerchantResponse } from "./createMerchantResponse";
import { CreateMerchantUserRequest } from "./createMerchantUserRequest";
import { CreateMerchantWebhookRequest } from "./createMerchantWebhookRequest";
import { CreateUserResponse } from "./createUserResponse";
import { Currency } from "./currency";
import { CustomNotification } from "./customNotification";
import { DataCenter } from "./dataCenter";
import { DinersInfo } from "./dinersInfo";
import { EventUrl } from "./eventUrl";
import { ExternalTerminalAction } from "./externalTerminalAction";
import { ForceRebootDetails } from "./forceRebootDetails";
import { GenerateApiKeyResponse } from "./generateApiKeyResponse";
import { GenerateClientKeyResponse } from "./generateClientKeyResponse";
import { GenerateHmacKeyResponse } from "./generateHmacKeyResponse";
import { GenericPmWithTdiInfo } from "./genericPmWithTdiInfo";
import { GivexInfo } from "./givexInfo";
import { GooglePayInfo } from "./googlePayInfo";
import { Gratuity } from "./gratuity";
import { Hardware } from "./hardware";
import { IdName } from "./idName";
import { InstallAndroidAppDetails } from "./installAndroidAppDetails";
import { InstallAndroidCertificateDetails } from "./installAndroidCertificateDetails";
import { InstalledAPKs } from "./installedAPKs";
import { InvalidField } from "./invalidField";
import { JCBInfo } from "./jCBInfo";
import { Key } from "./key";
import { KlarnaInfo } from "./klarnaInfo";
import { Links } from "./links";
import { LinksElement } from "./linksElement";
import { ListCompanyApiCredentialsResponse } from "./listCompanyApiCredentialsResponse";
import { ListCompanyResponse } from "./listCompanyResponse";
import { ListCompanyUsersResponse } from "./listCompanyUsersResponse";
import { ListExternalTerminalActionsResponse } from "./listExternalTerminalActionsResponse";
import { ListMerchantApiCredentialsResponse } from "./listMerchantApiCredentialsResponse";
import { ListMerchantResponse } from "./listMerchantResponse";
import { ListMerchantUsersResponse } from "./listMerchantUsersResponse";
import { ListStoresResponse } from "./listStoresResponse";
import { ListTerminalsResponse } from "./listTerminalsResponse";
import { ListWebhooksResponse } from "./listWebhooksResponse";
import { LocalShopperStatement } from "./localShopperStatement";
import { Localization } from "./localization";
import { LocalizedInformation } from "./localizedInformation";
import { Logo } from "./logo";
import { MeApiCredential } from "./meApiCredential";
import { MealVoucherFRInfo } from "./mealVoucherFRInfo";
import { Merchant } from "./merchant";
import { MerchantLinks } from "./merchantLinks";
import { MinorUnitsMonetaryValue } from "./minorUnitsMonetaryValue";
import { ModelFile } from "./modelFile";
import { Moto } from "./moto";
import { Name } from "./name";
import { Name2 } from "./name2";
import { Nexo } from "./nexo";
import { Notification } from "./notification";
import { NotificationUrl } from "./notificationUrl";
import { NyceInfo } from "./nyceInfo";
import { OfflineProcessing } from "./offlineProcessing";
import { Opi } from "./opi";
import { OrderItem } from "./orderItem";
import { PaginationLinks } from "./paginationLinks";
import { Passcodes } from "./passcodes";
import { PayAtTable } from "./payAtTable";
import { PayByBankPlaidInfo } from "./payByBankPlaidInfo";
import { PayMeInfo } from "./payMeInfo";
import { PayPalInfo } from "./payPalInfo";
import { PayToInfo } from "./payToInfo";
import { Payment } from "./payment";
import { PaymentMethod } from "./paymentMethod";
import { PaymentMethodResponse } from "./paymentMethodResponse";
import { PaymentMethodSetupInfo } from "./paymentMethodSetupInfo";
import { PayoutSettings } from "./payoutSettings";
import { PayoutSettingsRequest } from "./payoutSettingsRequest";
import { PayoutSettingsResponse } from "./payoutSettingsResponse";
import { Profile } from "./profile";
import { PulseInfo } from "./pulseInfo";
import { ReceiptOptions } from "./receiptOptions";
import { ReceiptPrinting } from "./receiptPrinting";
import { Referenced } from "./referenced";
import { Refunds } from "./refunds";
import { ReleaseUpdateDetails } from "./releaseUpdateDetails";
import { ReprocessAndroidAppResponse } from "./reprocessAndroidAppResponse";
import { RequestActivationResponse } from "./requestActivationResponse";
import { RestServiceError } from "./restServiceError";
import { ScheduleTerminalActionsRequest } from "./scheduleTerminalActionsRequest";
import { ScheduleTerminalActionsRequestActionDetailsClass } from "./scheduleTerminalActionsRequestActionDetails";
import { ScheduleTerminalActionsResponse } from "./scheduleTerminalActionsResponse";
import { SepaDirectDebitInfo } from "./sepaDirectDebitInfo";
import { Settings } from "./settings";
import { ShippingLocation } from "./shippingLocation";
import { ShippingLocationsResponse } from "./shippingLocationsResponse";
import { Signature } from "./signature";
import { SodexoInfo } from "./sodexoInfo";
import { SofortInfo } from "./sofortInfo";
import { SplitConfiguration } from "./splitConfiguration";
import { SplitConfigurationList } from "./splitConfigurationList";
import { SplitConfigurationLogic } from "./splitConfigurationLogic";
import { SplitConfigurationRule } from "./splitConfigurationRule";
import { Standalone } from "./standalone";
import { StarInfo } from "./starInfo";
import { Store } from "./store";
import { StoreAndForward } from "./storeAndForward";
import { StoreCreationRequest } from "./storeCreationRequest";
import { StoreCreationWithMerchantCodeRequest } from "./storeCreationWithMerchantCodeRequest";
import { StoreLocation } from "./storeLocation";
import { StoreSplitConfiguration } from "./storeSplitConfiguration";
import { SubMerchantData } from "./subMerchantData";
import { SupportedCardTypes } from "./supportedCardTypes";
import { Surcharge } from "./surcharge";
import { SvsInfo } from "./svsInfo";
import { SwishInfo } from "./swishInfo";
import { TapToPay } from "./tapToPay";
import { Terminal } from "./terminal";
import { TerminalActionScheduleDetail } from "./terminalActionScheduleDetail";
import { TerminalAssignment } from "./terminalAssignment";
import { TerminalConnectivity } from "./terminalConnectivity";
import { TerminalConnectivityBluetooth } from "./terminalConnectivityBluetooth";
import { TerminalConnectivityCellular } from "./terminalConnectivityCellular";
import { TerminalConnectivityEthernet } from "./terminalConnectivityEthernet";
import { TerminalConnectivityWifi } from "./terminalConnectivityWifi";
import { TerminalInstructions } from "./terminalInstructions";
import { TerminalModelsResponse } from "./terminalModelsResponse";
import { TerminalOrder } from "./terminalOrder";
import { TerminalOrderRequest } from "./terminalOrderRequest";
import { TerminalOrdersResponse } from "./terminalOrdersResponse";
import { TerminalProduct } from "./terminalProduct";
import { TerminalProductPrice } from "./terminalProductPrice";
import { TerminalProductsResponse } from "./terminalProductsResponse";
import { TerminalReassignmentRequest } from "./terminalReassignmentRequest";
import { TerminalReassignmentTarget } from "./terminalReassignmentTarget";
import { TerminalSettings } from "./terminalSettings";
import { TestCompanyWebhookRequest } from "./testCompanyWebhookRequest";
import { TestOutput } from "./testOutput";
import { TestWebhookRequest } from "./testWebhookRequest";
import { TestWebhookResponse } from "./testWebhookResponse";
import { TicketInfo } from "./ticketInfo";
import { Timeouts } from "./timeouts";
import { TransactionDescriptionInfo } from "./transactionDescriptionInfo";
import { TwintInfo } from "./twintInfo";
import { UninstallAndroidAppDetails } from "./uninstallAndroidAppDetails";
import { UninstallAndroidCertificateDetails } from "./uninstallAndroidCertificateDetails";
import { Unreferenced } from "./unreferenced";
import { UpdatableAddress } from "./updatableAddress";
import { UpdateCompanyApiCredentialRequest } from "./updateCompanyApiCredentialRequest";
import { UpdateCompanyUserRequest } from "./updateCompanyUserRequest";
import { UpdateCompanyWebhookRequest } from "./updateCompanyWebhookRequest";
import { UpdateMerchantApiCredentialRequest } from "./updateMerchantApiCredentialRequest";
import { UpdateMerchantUserRequest } from "./updateMerchantUserRequest";
import { UpdateMerchantWebhookRequest } from "./updateMerchantWebhookRequest";
import { UpdatePaymentMethodInfo } from "./updatePaymentMethodInfo";
import { UpdatePayoutSettingsRequest } from "./updatePayoutSettingsRequest";
import { UpdateSplitConfigurationLogicRequest } from "./updateSplitConfigurationLogicRequest";
import { UpdateSplitConfigurationRequest } from "./updateSplitConfigurationRequest";
import { UpdateSplitConfigurationRuleRequest } from "./updateSplitConfigurationRuleRequest";
import { UpdateStoreRequest } from "./updateStoreRequest";
import { UploadAndroidAppResponse } from "./uploadAndroidAppResponse";
import { UploadAndroidCertificateResponse } from "./uploadAndroidCertificateResponse";
import { Url } from "./url";
import { User } from "./user";
import { ValuelinkInfo } from "./valuelinkInfo";
import { VippsInfo } from "./vippsInfo";
import { WeChatPayInfo } from "./weChatPayInfo";
import { WeChatPayPosInfo } from "./weChatPayPosInfo";
import { Webhook } from "./webhook";
import { WebhookLinks } from "./webhookLinks";
import { WifiProfiles } from "./wifiProfiles";

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
    "AccelInfo.ProcessingTypeEnum",
    "AffirmInfo.PricePlanEnum",
    "AmexInfo.ServiceLevelEnum",
    "AndroidApp.StatusEnum",
    "Connectivity.SimcardStatusEnum",
    "CreateCompanyWebhookRequest.CommunicationFormatEnum",
    "CreateCompanyWebhookRequest.EncryptionProtocolEnum",
    "CreateCompanyWebhookRequest.FilterMerchantAccountTypeEnum",
    "CreateCompanyWebhookRequest.NetworkTypeEnum",
    "CreateMerchantWebhookRequest.CommunicationFormatEnum",
    "CreateMerchantWebhookRequest.EncryptionProtocolEnum",
    "CreateMerchantWebhookRequest.NetworkTypeEnum",
    "DinersInfo.ServiceLevelEnum",
    "ForceRebootDetails.TypeEnum",
    "GivexInfo.PaymentFlowEnum",
    "InstallAndroidAppDetails.TypeEnum",
    "InstallAndroidCertificateDetails.TypeEnum",
    "JCBInfo.ServiceLevelEnum",
    "KlarnaInfo.RegionEnum",
    "Notification.CategoryEnum",
    "NyceInfo.ProcessingTypeEnum",
    "PayAtTable.AuthenticationMethodEnum",
    "PayAtTable.PaymentInstrumentEnum",
    "PaymentMethod.VerificationStatusEnum",
    "PaymentMethodResponse.TypesWithErrorsEnum",
    "PaymentMethodSetupInfo.ShopperInteractionEnum",
    "PaymentMethodSetupInfo.TypeEnum",
    "PayoutSettings.PriorityEnum",
    "PayoutSettings.VerificationStatusEnum",
    "PulseInfo.ProcessingTypeEnum",
    "ReleaseUpdateDetails.TypeEnum",
    "ScheduleTerminalActionsRequestActionDetails.TypeEnum",
    "SplitConfigurationLogic.AcquiringFeesEnum",
    "SplitConfigurationLogic.AdyenCommissionEnum",
    "SplitConfigurationLogic.AdyenFeesEnum",
    "SplitConfigurationLogic.AdyenMarkupEnum",
    "SplitConfigurationLogic.ChargebackEnum",
    "SplitConfigurationLogic.ChargebackCostAllocationEnum",
    "SplitConfigurationLogic.InterchangeEnum",
    "SplitConfigurationLogic.PaymentFeeEnum",
    "SplitConfigurationLogic.RefundEnum",
    "SplitConfigurationLogic.RefundCostAllocationEnum",
    "SplitConfigurationLogic.RemainderEnum",
    "SplitConfigurationLogic.SchemeFeeEnum",
    "SplitConfigurationLogic.SurchargeEnum",
    "SplitConfigurationLogic.TipEnum",
    "SplitConfigurationRule.CardRegionEnum",
    "SplitConfigurationRule.FundingSourceEnum",
    "SplitConfigurationRule.ShopperInteractionEnum",
    "StarInfo.ProcessingTypeEnum",
    "Store.StatusEnum",
    "TerminalAssignment.StatusEnum",
    "TerminalConnectivityCellular.StatusEnum",
    "TransactionDescriptionInfo.TypeEnum",
    "UninstallAndroidAppDetails.TypeEnum",
    "UninstallAndroidCertificateDetails.TypeEnum",
    "UpdateCompanyWebhookRequest.CommunicationFormatEnum",
    "UpdateCompanyWebhookRequest.EncryptionProtocolEnum",
    "UpdateCompanyWebhookRequest.FilterMerchantAccountTypeEnum",
    "UpdateCompanyWebhookRequest.NetworkTypeEnum",
    "UpdateMerchantWebhookRequest.CommunicationFormatEnum",
    "UpdateMerchantWebhookRequest.EncryptionProtocolEnum",
    "UpdateMerchantWebhookRequest.NetworkTypeEnum",
    "UpdateSplitConfigurationLogicRequest.AcquiringFeesEnum",
    "UpdateSplitConfigurationLogicRequest.AdyenCommissionEnum",
    "UpdateSplitConfigurationLogicRequest.AdyenFeesEnum",
    "UpdateSplitConfigurationLogicRequest.AdyenMarkupEnum",
    "UpdateSplitConfigurationLogicRequest.ChargebackEnum",
    "UpdateSplitConfigurationLogicRequest.ChargebackCostAllocationEnum",
    "UpdateSplitConfigurationLogicRequest.InterchangeEnum",
    "UpdateSplitConfigurationLogicRequest.PaymentFeeEnum",
    "UpdateSplitConfigurationLogicRequest.RefundEnum",
    "UpdateSplitConfigurationLogicRequest.RefundCostAllocationEnum",
    "UpdateSplitConfigurationLogicRequest.RemainderEnum",
    "UpdateSplitConfigurationLogicRequest.SchemeFeeEnum",
    "UpdateSplitConfigurationLogicRequest.SurchargeEnum",
    "UpdateSplitConfigurationLogicRequest.TipEnum",
    "UpdateStoreRequest.StatusEnum",
    "ValuelinkInfo.PinSupportEnum",
    "Webhook.CommunicationFormatEnum",
    "Webhook.EncryptionProtocolEnum",
    "Webhook.FilterMerchantAccountTypeEnum",
    "Webhook.NetworkTypeEnum",
]);

let typeMap: {[index: string]: any} = {
    "AccelInfo": AccelInfo,
    "AdditionalCommission": AdditionalCommission,
    "AdditionalSettings": AdditionalSettings,
    "AdditionalSettingsResponse": AdditionalSettingsResponse,
    "Address": Address,
    "AffirmInfo": AffirmInfo,
    "AfterpayTouchInfo": AfterpayTouchInfo,
    "AlipayPlusInfo": AlipayPlusInfo,
    "AllowedOrigin": AllowedOrigin,
    "AllowedOriginsResponse": AllowedOriginsResponse,
    "AmexInfo": AmexInfo,
    "Amount": Amount,
    "AndroidApp": AndroidApp,
    "AndroidAppError": AndroidAppError,
    "AndroidAppsResponse": AndroidAppsResponse,
    "AndroidCertificate": AndroidCertificate,
    "AndroidCertificatesResponse": AndroidCertificatesResponse,
    "ApiCredential": ApiCredential,
    "ApiCredentialLinks": ApiCredentialLinks,
    "ApplePayInfo": ApplePayInfo,
    "BcmcInfo": BcmcInfo,
    "BillingEntitiesResponse": BillingEntitiesResponse,
    "BillingEntity": BillingEntity,
    "CardholderReceipt": CardholderReceipt,
    "CartesBancairesInfo": CartesBancairesInfo,
    "ClearpayInfo": ClearpayInfo,
    "Commission": Commission,
    "Company": Company,
    "CompanyApiCredential": CompanyApiCredential,
    "CompanyLinks": CompanyLinks,
    "CompanyUser": CompanyUser,
    "Configuration": Configuration,
    "Connectivity": Connectivity,
    "Contact": Contact,
    "CreateAllowedOriginRequest": CreateAllowedOriginRequest,
    "CreateApiCredentialResponse": CreateApiCredentialResponse,
    "CreateCompanyApiCredentialRequest": CreateCompanyApiCredentialRequest,
    "CreateCompanyApiCredentialResponse": CreateCompanyApiCredentialResponse,
    "CreateCompanyUserRequest": CreateCompanyUserRequest,
    "CreateCompanyUserResponse": CreateCompanyUserResponse,
    "CreateCompanyWebhookRequest": CreateCompanyWebhookRequest,
    "CreateMerchantApiCredentialRequest": CreateMerchantApiCredentialRequest,
    "CreateMerchantRequest": CreateMerchantRequest,
    "CreateMerchantResponse": CreateMerchantResponse,
    "CreateMerchantUserRequest": CreateMerchantUserRequest,
    "CreateMerchantWebhookRequest": CreateMerchantWebhookRequest,
    "CreateUserResponse": CreateUserResponse,
    "Currency": Currency,
    "CustomNotification": CustomNotification,
    "DataCenter": DataCenter,
    "DinersInfo": DinersInfo,
    "EventUrl": EventUrl,
    "ExternalTerminalAction": ExternalTerminalAction,
    "ForceRebootDetails": ForceRebootDetails,
    "GenerateApiKeyResponse": GenerateApiKeyResponse,
    "GenerateClientKeyResponse": GenerateClientKeyResponse,
    "GenerateHmacKeyResponse": GenerateHmacKeyResponse,
    "GenericPmWithTdiInfo": GenericPmWithTdiInfo,
    "GivexInfo": GivexInfo,
    "GooglePayInfo": GooglePayInfo,
    "Gratuity": Gratuity,
    "Hardware": Hardware,
    "IdName": IdName,
    "InstallAndroidAppDetails": InstallAndroidAppDetails,
    "InstallAndroidCertificateDetails": InstallAndroidCertificateDetails,
    "InstalledAPKs": InstalledAPKs,
    "InvalidField": InvalidField,
    "JCBInfo": JCBInfo,
    "Key": Key,
    "KlarnaInfo": KlarnaInfo,
    "Links": Links,
    "LinksElement": LinksElement,
    "ListCompanyApiCredentialsResponse": ListCompanyApiCredentialsResponse,
    "ListCompanyResponse": ListCompanyResponse,
    "ListCompanyUsersResponse": ListCompanyUsersResponse,
    "ListExternalTerminalActionsResponse": ListExternalTerminalActionsResponse,
    "ListMerchantApiCredentialsResponse": ListMerchantApiCredentialsResponse,
    "ListMerchantResponse": ListMerchantResponse,
    "ListMerchantUsersResponse": ListMerchantUsersResponse,
    "ListStoresResponse": ListStoresResponse,
    "ListTerminalsResponse": ListTerminalsResponse,
    "ListWebhooksResponse": ListWebhooksResponse,
    "LocalShopperStatement": LocalShopperStatement,
    "Localization": Localization,
    "LocalizedInformation": LocalizedInformation,
    "Logo": Logo,
    "MeApiCredential": MeApiCredential,
    "MealVoucherFRInfo": MealVoucherFRInfo,
    "Merchant": Merchant,
    "MerchantLinks": MerchantLinks,
    "MinorUnitsMonetaryValue": MinorUnitsMonetaryValue,
    "ModelFile": ModelFile,
    "Moto": Moto,
    "Name": Name,
    "Name2": Name2,
    "Nexo": Nexo,
    "Notification": Notification,
    "NotificationUrl": NotificationUrl,
    "NyceInfo": NyceInfo,
    "OfflineProcessing": OfflineProcessing,
    "Opi": Opi,
    "OrderItem": OrderItem,
    "PaginationLinks": PaginationLinks,
    "Passcodes": Passcodes,
    "PayAtTable": PayAtTable,
    "PayByBankPlaidInfo": PayByBankPlaidInfo,
    "PayMeInfo": PayMeInfo,
    "PayPalInfo": PayPalInfo,
    "PayToInfo": PayToInfo,
    "Payment": Payment,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodResponse": PaymentMethodResponse,
    "PaymentMethodSetupInfo": PaymentMethodSetupInfo,
    "PayoutSettings": PayoutSettings,
    "PayoutSettingsRequest": PayoutSettingsRequest,
    "PayoutSettingsResponse": PayoutSettingsResponse,
    "Profile": Profile,
    "PulseInfo": PulseInfo,
    "ReceiptOptions": ReceiptOptions,
    "ReceiptPrinting": ReceiptPrinting,
    "Referenced": Referenced,
    "Refunds": Refunds,
    "ReleaseUpdateDetails": ReleaseUpdateDetails,
    "ReprocessAndroidAppResponse": ReprocessAndroidAppResponse,
    "RequestActivationResponse": RequestActivationResponse,
    "RestServiceError": RestServiceError,
    "ScheduleTerminalActionsRequest": ScheduleTerminalActionsRequest,
    "ScheduleTerminalActionsRequestActionDetails": ScheduleTerminalActionsRequestActionDetailsClass,
    "ScheduleTerminalActionsResponse": ScheduleTerminalActionsResponse,
    "SepaDirectDebitInfo": SepaDirectDebitInfo,
    "Settings": Settings,
    "ShippingLocation": ShippingLocation,
    "ShippingLocationsResponse": ShippingLocationsResponse,
    "Signature": Signature,
    "SodexoInfo": SodexoInfo,
    "SofortInfo": SofortInfo,
    "SplitConfiguration": SplitConfiguration,
    "SplitConfigurationList": SplitConfigurationList,
    "SplitConfigurationLogic": SplitConfigurationLogic,
    "SplitConfigurationRule": SplitConfigurationRule,
    "Standalone": Standalone,
    "StarInfo": StarInfo,
    "Store": Store,
    "StoreAndForward": StoreAndForward,
    "StoreCreationRequest": StoreCreationRequest,
    "StoreCreationWithMerchantCodeRequest": StoreCreationWithMerchantCodeRequest,
    "StoreLocation": StoreLocation,
    "StoreSplitConfiguration": StoreSplitConfiguration,
    "SubMerchantData": SubMerchantData,
    "SupportedCardTypes": SupportedCardTypes,
    "Surcharge": Surcharge,
    "SvsInfo": SvsInfo,
    "SwishInfo": SwishInfo,
    "TapToPay": TapToPay,
    "Terminal": Terminal,
    "TerminalActionScheduleDetail": TerminalActionScheduleDetail,
    "TerminalAssignment": TerminalAssignment,
    "TerminalConnectivity": TerminalConnectivity,
    "TerminalConnectivityBluetooth": TerminalConnectivityBluetooth,
    "TerminalConnectivityCellular": TerminalConnectivityCellular,
    "TerminalConnectivityEthernet": TerminalConnectivityEthernet,
    "TerminalConnectivityWifi": TerminalConnectivityWifi,
    "TerminalInstructions": TerminalInstructions,
    "TerminalModelsResponse": TerminalModelsResponse,
    "TerminalOrder": TerminalOrder,
    "TerminalOrderRequest": TerminalOrderRequest,
    "TerminalOrdersResponse": TerminalOrdersResponse,
    "TerminalProduct": TerminalProduct,
    "TerminalProductPrice": TerminalProductPrice,
    "TerminalProductsResponse": TerminalProductsResponse,
    "TerminalReassignmentRequest": TerminalReassignmentRequest,
    "TerminalReassignmentTarget": TerminalReassignmentTarget,
    "TerminalSettings": TerminalSettings,
    "TestCompanyWebhookRequest": TestCompanyWebhookRequest,
    "TestOutput": TestOutput,
    "TestWebhookRequest": TestWebhookRequest,
    "TestWebhookResponse": TestWebhookResponse,
    "TicketInfo": TicketInfo,
    "Timeouts": Timeouts,
    "TransactionDescriptionInfo": TransactionDescriptionInfo,
    "TwintInfo": TwintInfo,
    "UninstallAndroidAppDetails": UninstallAndroidAppDetails,
    "UninstallAndroidCertificateDetails": UninstallAndroidCertificateDetails,
    "Unreferenced": Unreferenced,
    "UpdatableAddress": UpdatableAddress,
    "UpdateCompanyApiCredentialRequest": UpdateCompanyApiCredentialRequest,
    "UpdateCompanyUserRequest": UpdateCompanyUserRequest,
    "UpdateCompanyWebhookRequest": UpdateCompanyWebhookRequest,
    "UpdateMerchantApiCredentialRequest": UpdateMerchantApiCredentialRequest,
    "UpdateMerchantUserRequest": UpdateMerchantUserRequest,
    "UpdateMerchantWebhookRequest": UpdateMerchantWebhookRequest,
    "UpdatePaymentMethodInfo": UpdatePaymentMethodInfo,
    "UpdatePayoutSettingsRequest": UpdatePayoutSettingsRequest,
    "UpdateSplitConfigurationLogicRequest": UpdateSplitConfigurationLogicRequest,
    "UpdateSplitConfigurationRequest": UpdateSplitConfigurationRequest,
    "UpdateSplitConfigurationRuleRequest": UpdateSplitConfigurationRuleRequest,
    "UpdateStoreRequest": UpdateStoreRequest,
    "UploadAndroidAppResponse": UploadAndroidAppResponse,
    "UploadAndroidCertificateResponse": UploadAndroidCertificateResponse,
    "Url": Url,
    "User": User,
    "ValuelinkInfo": ValuelinkInfo,
    "VippsInfo": VippsInfo,
    "WeChatPayInfo": WeChatPayInfo,
    "WeChatPayPosInfo": WeChatPayPosInfo,
    "Webhook": Webhook,
    "WebhookLinks": WebhookLinks,
    "WifiProfiles": WifiProfiles,
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
