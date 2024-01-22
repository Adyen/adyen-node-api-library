// Generated using typescript-generator version 2.14.505 on 2019-06-06 08:35:05.

import { ApplicationInfo } from "./applicationInfo";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AbortRequest {
    MessageReference: MessageReference;
    AbortReason: string;
    DisplayOutput?: DisplayOutput;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AdminRequest {
    ServiceIdentification?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AdminResponse {
    Response: Response;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AlgorithmIdentifier {
    Parameter?: Parameter;
    Algorithm: AlgorithmType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AllowedProduct {
    ProductLabel?: string;
    AdditionalProductInfo?: string;
    ProductCode: string;
    EanUpc?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Amount {
    value?: number;
    Currency?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AmountsReq {
    Currency: string;
    RequestedAmount?: number;
    CashBackAmount?: number;
    TipAmount?: number;
    PaidAmount?: number;
    MinimumAmountToDeliver?: number;
    MaximumCashBackAmount?: number;
    MinimumSplitAmount?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AmountsResp {
    Currency?: string;
    AuthorizedAmount: number;
    TotalRebatesAmount?: number;
    TotalFeesAmount?: number;
    CashBackAmount?: number;
    TipAmount?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AreaSize {
    X: string;
    Y: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface AuthenticatedData {
    keyTransportOrKEK?: any[];
    MACAlgorithm: AlgorithmIdentifier;
    EncapsulatedContent: EncapsulatedContent;
    Version?: VersionType;
    MAC: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface BalanceInquiryRequest {
    PaymentAccountReq?: PaymentAccountReq;
    LoyaltyAccountReq?: LoyaltyAccountReq;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface BalanceInquiryResponse {
    Response: Response;
    PaymentAccountStatus?: PaymentAccountStatus;
    LoyaltyAccountStatus?: LoyaltyAccountStatus;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface BatchRequest {
    TransactionToPerform?: TransactionToPerform[];
    RemoveAllFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface BatchResponse {
    Response: Response;
    PerformedTransaction?: PerformedTransaction[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CapturedSignature {
    AreaSize?: AreaSize;
    SignaturePoint: SignaturePoint[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardAcquisitionRequest {
    SaleData: SaleData;
    CardAcquisitionTransaction: CardAcquisitionTransaction;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardAcquisitionResponse {
    Response: Response;
    SaleData: SaleData;
    POIData: POIData;
    PaymentBrand?: string[];
    PaymentInstrumentData?: PaymentInstrumentData;
    LoyaltyAccount?: LoyaltyAccount[];
    CustomerOrder?: CustomerOrder[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardAcquisitionTransaction {
    AllowedPaymentBrand?: string[];
    AllowedLoyaltyBrand?: string[];
    ForceEntryMode?: ForceEntryModeType[];
    LoyaltyHandling?: LoyaltyHandlingType;
    CustomerLanguage?: string;
    ForceCustomerSelectionFlag?: boolean;
    TotalAmount?: number;
    PaymentType?: PaymentType;
    CashBackFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardData {
    ProtectedCardData?: ContentInformation;
    SensitiveCardData?: SensitiveCardData;
    AllowedProductCode?: string[];
    AllowedProduct?: AllowedProduct[];
    PaymentToken?: PaymentToken;
    CustomerOrder?: CustomerOrder[];
    PaymentBrand?: string;
    MaskedPan?: string;
    PaymentAccountRef?: string;
    EntryMode?: EntryModeType[];
    CardCountryCode?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardReaderAPDURequest {
    APDUData?: any;
    APDUClass: any;
    APDUInstruction: any;
    APDUPar1: any;
    APDUPar2: any;
    APDUExpectedLength?: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardReaderAPDUResponse {
    Response: Response;
    APDUData?: any;
    CardStatusWords: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardReaderInitRequest {
    ForceEntryMode?: ForceEntryModeType[];
    DisplayOutput?: DisplayOutput;
    WarmResetFlag?: boolean;
    LeaveCardFlag?: boolean;
    MaxWaitingTime?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardReaderInitResponse {
    Response: Response;
    TrackData?: TrackData[];
    ICCResetData?: ICCResetData;
    EntryMode?: EntryModeType[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardReaderPowerOffRequest {
    DisplayOutput?: DisplayOutput;
    MaxWaitingTime?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardReaderPowerOffResponse {
    Response: Response;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CardholderPIN {
    EncrPINBlock: ContentInformation;
    PINFormat: PINFormatType;
    AdditionalInput?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CashHandlingDevice {
    CoinsOrBills: CoinsOrBills[];
    CashHandlingOKFlag: boolean;
    Currency: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CheckData {
    BankID?: string;
    AccountNumber?: string;
    CheckNumber?: string;
    TrackData?: TrackData;
    CheckCardNumber?: string;
    Type?: CheckTypeCodeType;
    Country?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CoinsOrBills {
    UnitValue: number;
    Number: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface ContentInformation {
    EnvelopedData?: EnvelopedData;
    AuthenticatedData?: AuthenticatedData;
    SignedData?: SignedData;
    DigestedData?: DigestedData;
    NamedKeyEncryptedData?: NamedKeyEncryptedData;
    ContentType: ContentType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CurrencyConversion {
    ConvertedAmount: Amount;
    Commission?: number;
    Declaration?: string;
    CustomerApprovedFlag?: boolean;
    Rate?: number;
    Markup?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface CustomerOrder {
    AdditionalInformation?: string;
    CustomerOrderID: string;
    OpenOrderState?: boolean;
    StartDate: XMLGregorianCalendar;
    EndDate?: XMLGregorianCalendar;
    ForecastedAmount: number;
    CurrentAmount: number;
    Currency?: string;
    AccessedBy?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface DiagnosisRequest {
    AcquirerID?: string[];
    POIID?: string;
    HostDiagnosisFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface DiagnosisResponse {
    Response: Response;
    LoggedSaleID?: string[];
    POIStatus?: POIStatus;
    HostStatus?: HostStatus[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface DigestedData {
    DigestAlgorithm: AlgorithmIdentifier;
    EncapsulatedContent: EncapsulatedContent;
    Digest: any;
    Version?: VersionType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface DisplayOutput {
    OutputContent: OutputContent;
    MenuEntry?: MenuEntry[];
    OutputSignature?: any;
    ResponseRequiredFlag?: boolean;
    MinimumDisplayTime?: number;
    Device: DeviceType;
    InfoQualify: InfoQualifyType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface DisplayRequest {
    DisplayOutput: DisplayOutput[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface DisplayResponse {
    OutputResult: OutputResult[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface EnableServiceRequest {
    ServicesEnabled?: ServicesEnabledType[];
    DisplayOutput?: DisplayOutput;
    TransactionAction: TransactionActionType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface EnableServiceResponse {
    Response: Response;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface EncapsulatedContent {
    Content?: any;
    ContentType: ContentType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface EncryptedContent {
    ContentEncryptionAlgorithm: AlgorithmIdentifier;
    EncryptedData: any;
    ContentType: ContentType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface EnvelopedData {
    keyTransportOrKEK?: any[];
    EncryptedContent: EncryptedContent;
    Version?: VersionType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface EventNotification {
    EventDetails?: string;
    RejectedMessage?: any;
    DisplayOutput?: DisplayOutput;
    TimeStamp: XMLGregorianCalendar;
    EventToNotify: EventToNotifyType;
    MaintenanceRequiredFlag?: boolean;
    CustomerLanguage?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface GeographicCoordinates {
    Latitude: string;
    Longitude: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Geolocation {
    GeographicCoordinates?: GeographicCoordinates;
    UTMCoordinates?: UTMCoordinates;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface GetTotalsRequest {
    TotalDetails?: TotalDetailsType[];
    TotalFilter?: TotalFilter;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface GetTotalsResponse {
    Response: Response;
    TransactionTotals?: TransactionTotals[];
    POIReconciliationID: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface HostStatus {
    AcquirerID: string;
    IsReachableFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface ICCResetData {
    ATRValue?: any;
    CardStatusWords?: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Input {
    ConfirmedFlag?: boolean;
    FunctionKey?: string;
    TextInput?: string;
    DigitInput?: string;
    Password?: ContentInformation;
    MenuEntryNumber?: number;
    InputCommand: InputCommandType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface InputData {
    DefaultInputString?: string;
    StringMask?: string;
    Device: DeviceType;
    InfoQualify: InfoQualifyType;
    InputCommand: InputCommandType;
    NotifyCardInputFlag?: boolean;
    MaxInputTime?: number;
    ImmediateResponseFlag?: boolean;
    MinLength?: number;
    MaxLength?: number;
    MaxDecimalLength?: number;
    WaitUserValidationFlag?: boolean;
    FromRightToLeftFlag?: boolean;
    MaskCharactersFlag?: boolean;
    BeepKeyFlag?: boolean;
    GlobalCorrectionFlag?: boolean;
    DisableCancelFlag?: boolean;
    DisableCorrectFlag?: boolean;
    DisableValidFlag?: boolean;
    MenuBackFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface InputRequest {
    DisplayOutput?: DisplayOutput;
    InputData: InputData;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface InputResponse {
    OutputResult?: OutputResult;
    InputResult: InputResult;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface InputResult {
    Response: Response;
    Input?: Input;
    Device: DeviceType;
    InfoQualify: InfoQualifyType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface InputUpdate {
    MessageReference: MessageReference;
    OutputContent: OutputContent;
    MenuEntry?: MenuEntry[];
    OutputSignature?: any;
    MinLength?: number;
    MaxLength?: number;
    MaxDecimalLength?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Instalment {
    Instalment?: InstalmentType[];
    SequenceNumber?: number;
    PlanID?: string;
    Period?: number;
    PeriodUnit?: PeriodUnitType;
    FirstPaymentDate?: string;
    TotalNbOfPayments?: number;
    CumulativeAmount?: number;
    FirstAmount?: number;
    Charges?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Issuer {
    RelativeDistinguishedName: RelativeDistinguishedName[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface IssuerAndSerialNumber {
    Issuer: Issuer;
    SerialNumber: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface KEK {
    KEKIdentifier: KEKIdentifier;
    KeyEncryptionAlgorithm: AlgorithmIdentifier;
    Version?: VersionType;
    EncryptedKey: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface KEKIdentifier {
    KeyIdentifier: string;
    KeyVersion: string;
    DerivationIdentifier?: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface KeyTransport {
    RecipientIdentifier: RecipientIdentifier;
    KeyEncryptionAlgorithm: AlgorithmIdentifier;
    Version?: VersionType;
    EncryptedKey: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoginRequest {
    DateTime: XMLGregorianCalendar;
    SaleSoftware: SaleSoftware;
    SaleTerminalData?: SaleTerminalData;
    TrainingModeFlag?: boolean;
    OperatorLanguage: string;
    OperatorID?: string;
    ShiftNumber?: string;
    TokenRequestedType?: TokenRequestedType;
    CustomerOrderReq?: CustomerOrderReqType[];
    POISerialNumber?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoginResponse {
    Response: Response;
    POISystemData?: POISystemData;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LogoutRequest {
    MaintenanceAllowed?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LogoutResponse {
    Response: Response;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyAccount {
    LoyaltyAccountID: LoyaltyAccountID;
    LoyaltyBrand?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyAccountID {
    value?: string;
    EntryMode: EntryModeType[];
    IdentificationType: IdentificationType;
    IdentificationSupport?: IdentificationSupportType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyAccountReq {
    CardAcquisitionReference?: TransactionIdentification;
    LoyaltyAccountID?: LoyaltyAccountID;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyAccountStatus {
    LoyaltyAccount: LoyaltyAccount;
    CurrentBalance?: number;
    LoyaltyUnit?: LoyaltyUnitType;
    Currency?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyAcquirerData {
    ApprovalCode?: string;
    LoyaltyTransactionID?: TransactionIdentification;
    LoyaltyAcquirerID?: string;
    HostReconciliationID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyAmount {
    value?: number;
    LoyaltyUnit?: LoyaltyUnitType;
    Currency?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyData {
    CardAcquisitionReference?: TransactionIdentification;
    LoyaltyAccountID?: LoyaltyAccountID;
    LoyaltyAmount?: LoyaltyAmount;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyRequest {
    SaleData: SaleData;
    LoyaltyTransaction: LoyaltyTransaction;
    LoyaltyData?: LoyaltyData[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyResponse {
    Response: Response;
    SaleData: SaleData;
    POIData: POIData;
    LoyaltyResult?: LoyaltyResult[];
    PaymentReceipt?: PaymentReceipt[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyResult {
    LoyaltyAccount: LoyaltyAccount;
    LoyaltyAmount?: LoyaltyAmount;
    LoyaltyAcquirerData?: LoyaltyAcquirerData;
    Rebates?: Rebates;
    CurrentBalance?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyTotals {
    TransactionType: TransactionType;
    TransactionCount: number;
    TransactionAmount: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface LoyaltyTransaction {
    OriginalPOITransaction?: OriginalPOITransaction;
    TransactionConditions?: TransactionConditions;
    SaleItem?: SaleItem[];
    LoyaltyTransactionType: LoyaltyTransactionType;
    Currency?: string;
    TotalAmount?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface MenuEntry {
    PredefinedContent?: PredefinedContent;
    OutputText?: OutputText[];
    OutputXHTML?: any;
    MenuEntryTag?: MenuEntryTagType;
    OutputFormat: OutputFormatType;
    DefaultSelectedFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface MessageHeader {
    ProtocolVersion?: string;
    MessageClass: MessageClassType;
    MessageCategory: MessageCategoryType;
    MessageType: MessageType;
    ServiceID?: string;
    DeviceID?: string;
    SaleID: string;
    POIID: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface MessageReference {
    MessageCategory?: MessageCategoryType;
    ServiceID?: string;
    DeviceID?: string;
    SaleID?: string;
    POIID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface MobileData {
    MobileCountryCode?: string;
    Geolocation?: Geolocation;
    ProtectedMobileData?: ContentInformation;
    SensitiveMobileData?: SensitiveMobileData;
    MobileNetworkCode?: string;
    MaskedMSISDN?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface NamedKeyEncryptedData {
    KeyName?: string;
    EncryptedContent: EncryptedContent;
    Version?: VersionType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface ObjectFactory {
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface OriginalPOITransaction {
    POITransactionID?: TransactionIdentification;
    ApprovalCode?: string;
    HostTransactionID?: TransactionIdentification;
    SaleID?: string;
    POIID?: string;
    ReuseCardDataFlag?: boolean;
    CustomerLanguage?: string;
    AcquirerID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface OutputBarcode {
    value?: string;
    BarcodeType?: BarcodeType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface OutputContent {
    PredefinedContent?: PredefinedContent;
    OutputText?: OutputText[];
    OutputXHTML?: any;
    OutputBarcode?: OutputBarcode;
    OutputFormat: OutputFormatType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface OutputResult {
    Response: Response;
    Device: DeviceType;
    InfoQualify: InfoQualifyType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface OutputText {
    Text?: string;
    CharacterSet?: number;
    Font?: string;
    StartRow?: number;
    StartColumn?: number;
    Color?: ColorType;
    CharacterWidth?: CharacterWidthType;
    CharacterHeight?: CharacterHeightType;
    CharacterStyle?: CharacterStyleType;
    Alignment?: AlignmentType;
    EndOfLineFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PINRequest {
    CardholderPIN?: CardholderPIN;
    PINRequestType: PINRequestType;
    PINVerifMethod?: string;
    AdditionalInput?: string;
    PINEncAlgorithm?: string;
    PINFormat?: PINFormatType;
    KeyReference?: string;
    MaxWaitingTime?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PINResponse {
    Response: Response;
    CardholderPIN?: CardholderPIN;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface POIData {
    POITransactionID: TransactionIdentification;
    POIReconciliationID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface POIProfile {
    ServiceProfiles?: ServiceProfilesType[];
    GenericProfile?: GenericProfileType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface POISoftware {
    ManufacturerID: string;
    ApplicationName: string;
    SoftwareVersion: string;
    CertificationCode: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface POIStatus {
    CashHandlingDevice?: CashHandlingDevice[];
    GlobalStatus: GlobalStatusType;
    SecurityOKFlag?: boolean;
    PEDOKFlag?: boolean;
    CardReaderOKFlag?: boolean;
    PrinterStatus?: PrinterStatusType;
    CommunicationOKFlag?: boolean;
    FraudPreventionFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface POISystemData {
    DateTime: XMLGregorianCalendar;
    POISoftware: POISoftware;
    POITerminalData?: POITerminalData;
    POIStatus?: POIStatus;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface POITerminalData {
    POICapabilities: POICapabilitiesType[];
    POIProfile?: POIProfile;
    TerminalEnvironment: TerminalEnvironmentType;
    POISerialNumber: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Parameter {
    InitialisationVector?: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentAccountReq {
    CardAcquisitionReference?: TransactionIdentification;
    PaymentInstrumentData?: PaymentInstrumentData;
    AccountType?: AccountType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentAccountStatus {
    PaymentInstrumentData?: PaymentInstrumentData;
    PaymentAcquirerData?: PaymentAcquirerData;
    LoyaltyAccountStatus?: LoyaltyAccountStatus;
    Currency?: string;
    CurrentBalance?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentAcquirerData {
    AcquirerTransactionID?: TransactionIdentification;
    ApprovalCode?: string;
    AcquirerID?: string;
    MerchantID: string;
    AcquirerPOIID: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentData {
    CardAcquisitionReference?: TransactionIdentification;
    RequestedValidityDate?: string;
    Instalment?: Instalment;
    CustomerOrder?: CustomerOrder;
    PaymentInstrumentData?: PaymentInstrumentData;
    PaymentType?: PaymentType;
    SplitPaymentFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentInstrumentData {
    CardData?: CardData;
    CheckData?: CheckData;
    MobileData?: MobileData;
    PaymentInstrumentType: PaymentInstrumentType;
    StoredValueAccountID: StoredValueAccountID;
    ProtectedCardData: ContentInformation;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentReceipt {
    OutputContent: OutputContent;
    DocumentQualifier: DocumentQualifierType;
    IntegratedPrintFlag?: boolean;
    RequiredSignatureFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentRequest {
    SaleData: SaleData;
    PaymentTransaction: PaymentTransaction;
    PaymentData?: PaymentData;
    LoyaltyData?: LoyaltyData[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentResponse {
    Response: Response;
    SaleData: SaleData;
    POIData: POIData;
    PaymentResult?: PaymentResult;
    LoyaltyResult?: LoyaltyResult[];
    PaymentReceipt?: PaymentReceipt[];
    CustomerOrder?: CustomerOrder[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentResult {
    PaymentInstrumentData?: PaymentInstrumentData;
    AmountsResp?: AmountsResp;
    Instalment?: Instalment;
    CurrencyConversion?: CurrencyConversion[];
    CapturedSignature?: CapturedSignature;
    ProtectedSignature?: ContentInformation;
    PaymentAcquirerData?: PaymentAcquirerData;
    PaymentType?: PaymentType;
    MerchantOverrideFlag?: boolean;
    CustomerLanguage?: string;
    OnlineFlag?: boolean;
    AuthenticationMethod?: AuthenticationMethodType[];
    ValidityDate?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentToken {
    TokenRequestedType: TokenRequestedType;
    TokenValue: string;
    ExpiryDateTime?: XMLGregorianCalendar;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentTotals {
    TransactionType: TransactionType;
    TransactionCount: number;
    TransactionAmount: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PaymentTransaction {
    AmountsReq: AmountsReq;
    OriginalPOITransaction?: OriginalPOITransaction;
    TransactionConditions?: TransactionConditions;
    SaleItem?: SaleItem[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PerformedTransaction {
    Response: Response;
    SaleData?: SaleData;
    POIData: POIData;
    PaymentResult?: PaymentResult;
    LoyaltyResult?: LoyaltyResult[];
    ReversedAmount?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PredefinedContent {
    ReferenceID: string;
    Language?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PrintOutput {
    OutputContent: OutputContent;
    OutputSignature?: any;
    DocumentQualifier: DocumentQualifierType;
    ResponseMode: ResponseModeType;
    IntegratedPrintFlag?: boolean;
    RequiredSignatureFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PrintRequest {
    PrintOutput: PrintOutput;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface PrintResponse {
    Response: Response;
    DocumentQualifier: DocumentQualifierType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Rebates {
    TotalRebate?: number;
    RebateLabel?: string;
    SaleItemRebate?: SaleItemRebate[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface RecipientIdentifier {
    IssuerAndSerialNumber: IssuerAndSerialNumber;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface ReconciliationRequest {
    AcquirerID?: string[];
    ReconciliationType: ReconciliationType;
    POIReconciliationID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface ReconciliationResponse {
    Response: Response;
    TransactionTotals?: TransactionTotals[];
    ReconciliationType: ReconciliationType;
    POIReconciliationID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface RelativeDistinguishedName {
    Attribute: string;
    AttributeValue: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface RepeatedMessageResponse {
    RepeatedResponseMessageBody: RepeatedResponseMessageBody;
    MessageHeader: MessageHeader;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface RepeatedMessageResponseBody {
    LoyaltyResponse?: LoyaltyResponse;
    PaymentResponse?: PaymentResponse;
    ReversalResponse?: ReversalResponse;
    StoredValueResponse?: StoredValueResponse;
    CardAcquisitionResponse?: CardAcquisitionResponse;
    CardReaderAPDUResponse?: CardReaderAPDUResponse;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface RepeatedResponseMessageBody {
    LoyaltyResponse?: LoyaltyResponse;
    PaymentResponse?: PaymentResponse;
    ReversalResponse?: ReversalResponse;
    StoredValueResponse?: StoredValueResponse;
    CardAcquisitionResponse?: CardAcquisitionResponse;
    CardReaderAPDUResponse?: CardReaderAPDUResponse;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Response {
    AdditionalResponse?: string;
    Result: ResultType;
    ErrorCondition?: ErrorConditionType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface ReversalRequest {
    OriginalPOITransaction: OriginalPOITransaction;
    CustomerOrderID?: CustomerOrder;
    SaleReferenceID?: string;
    ReversalReason: ReversalReasonType;
    ReversedAmount?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface ReversalResponse {
    Response: Response;
    POIData?: POIData;
    OriginalPOITransaction?: OriginalPOITransaction;
    PaymentReceipt?: PaymentReceipt[];
    ReversedAmount?: number;
    CustomerOrderID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleData {
    SaleTransactionID: TransactionIdentification;
    SaleTerminalData?: SaleTerminalData;
    SponsoredMerchant?: SponsoredMerchant[];
    SaleToPOIData?: string;
    SaleToAcquirerData?: SaleToAcquirerData;
    SaleToIssuerData?: SaleToIssuerData;
    OperatorID?: string;
    OperatorLanguage?: string;
    ShiftNumber?: string;
    SaleReferenceID?: string;
    TokenRequestedType?: TokenRequestedType;
    CustomerOrderID?: string;
    CustomerOrderReq?: CustomerOrderReqType[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleItem {
    UnitOfMeasure?: UnitOfMeasureType;
    Quantity?: number;
    UnitPrice?: number;
    TaxCode?: string;
    SaleChannel?: string;
    ProductLabel?: string;
    AdditionalProductInfo?: string;
    ItemID: number;
    ProductCode: string;
    EanUpc?: string;
    ItemAmount: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleItemRebate {
    UnitOfMeasure?: UnitOfMeasureType;
    Quantity?: number;
    RebateLabel?: string;
    ItemID: number;
    ProductCode: string;
    EanUpc?: string;
    ItemAmount?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleProfile {
    ServiceProfiles?: ServiceProfilesType[];
    GenericProfile?: GenericProfileType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleSoftware {
    ManufacturerID: string;
    ApplicationName: string;
    SoftwareVersion: string;
    CertificationCode: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleTerminalData {
    SaleCapabilities?: SaleCapabilitiesType[];
    SaleProfile?: SaleProfile;
    TerminalEnvironment?: TerminalEnvironmentType;
    TotalsGroupID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleToIssuerData {
    StatementReference?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleToPOIRequest {
    MessageHeader: MessageHeader;
    AbortRequest?: AbortRequest;
    BalanceInquiryRequest?: BalanceInquiryRequest;
    BatchRequest?: BatchRequest;
    CardAcquisitionRequest?: CardAcquisitionRequest;
    AdminRequest?: AdminRequest;
    DiagnosisRequest?: DiagnosisRequest;
    DisplayRequest?: DisplayRequest;
    EnableServiceRequest?: EnableServiceRequest;
    EventNotification?: EventNotification;
    GetTotalsRequest?: GetTotalsRequest;
    InputRequest?: InputRequest;
    InputUpdate?: InputUpdate;
    LoginRequest?: LoginRequest;
    LogoutRequest?: LogoutRequest;
    LoyaltyRequest?: LoyaltyRequest;
    PaymentRequest?: PaymentRequest;
    PINRequest?: PINRequest;
    PrintRequest?: PrintRequest;
    CardReaderInitRequest?: CardReaderInitRequest;
    CardReaderAPDURequest?: CardReaderAPDURequest;
    CardReaderPowerOffRequest?: CardReaderPowerOffRequest;
    ReconciliationRequest?: ReconciliationRequest;
    ReversalRequest?: ReversalRequest;
    SoundRequest?: SoundRequest;
    StoredValueRequest?: StoredValueRequest;
    TransactionStatusRequest?: TransactionStatusRequest;
    TransmitRequest?: TransmitRequest;
    SecurityTrailer?: ContentInformation;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleToPOIResponse {
    MessageHeader: MessageHeader;
    BalanceInquiryResponse?: BalanceInquiryResponse;
    BatchResponse?: BatchResponse;
    CardAcquisitionResponse?: CardAcquisitionResponse;
    AdminResponse?: AdminResponse;
    DiagnosisResponse?: DiagnosisResponse;
    DisplayResponse?: DisplayResponse;
    EnableServiceResponse?: EnableServiceResponse;
    GetTotalsResponse?: GetTotalsResponse;
    InputResponse?: InputResponse;
    LoginResponse?: LoginResponse;
    LogoutResponse?: LogoutResponse;
    LoyaltyResponse?: LoyaltyResponse;
    PaymentResponse?: PaymentResponse;
    PINResponse?: PINResponse;
    PrintResponse?: PrintResponse;
    CardReaderInitResponse?: CardReaderInitResponse;
    CardReaderAPDUResponse?: CardReaderAPDUResponse;
    CardReaderPowerOffResponse?: CardReaderPowerOffResponse;
    ReconciliationResponse?: ReconciliationResponse;
    ReversalResponse?: ReversalResponse;
    SoundResponse?: SoundResponse;
    StoredValueResponse?: StoredValueResponse;
    TransactionStatusResponse?: TransactionStatusResponse;
    TransmitResponse?: TransmitResponse;
    SecurityTrailer?: ContentInformation;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SensitiveCardData {
    TrackData?: TrackData[];
    PAN?: string;
    CardSeqNumb?: string;
    ExpiryDate?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SensitiveMobileData {
    MSISDN: string;
    IMSI?: string;
    IMEI?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SignaturePoint {
    X: string;
    Y: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SignedData {
    DigestAlgorithm: AlgorithmIdentifier[];
    EncapsulatedContent: EncapsulatedContent;
    Certificate?: any[];
    Signer: Signer[];
    Version?: VersionType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Signer {
    SignerIdentifier: SignerIdentifier;
    DigestAlgorithm: AlgorithmIdentifier;
    SignatureAlgorithm: AlgorithmIdentifier;
    Signature: any;
    Version?: VersionType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SignerIdentifier {
    IssuerAndSerialNumber: IssuerAndSerialNumber;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SoundContent {
    value?: string;
    SoundFormat?: SoundFormatType;
    Language?: string;
    ReferenceID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SoundRequest {
    SoundContent: SoundContent;
    ResponseMode?: ResponseModeType;
    SoundAction: SoundActionType;
    SoundVolume?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SoundResponse {
    Response: Response;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SponsoredMerchant {
    MerchantName: string;
    MerchantAddress?: string;
    MerchantCountry: string;
    MerchantCategoryCode: string;
    RegistrationID: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface SaleToAcquirerData {
    applicationInfo?: ApplicationInfo;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface StoredValueAccountID {
    value?: string;
    StoredValueAccountType: StoredValueAccountType;
    StoredValueProvider?: string;
    OwnerName?: string;
    ExpiryDate?: string;
    EntryMode: EntryModeType[];
    IdentificationType: IdentificationType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface StoredValueAccountStatus {
    StoredValueAccountID: StoredValueAccountID;
    CurrentBalance?: number;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface StoredValueData {
    StoredValueAccountID?: StoredValueAccountID;
    OriginalPOITransaction?: OriginalPOITransaction;
    StoredValueProvider?: string;
    StoredValueTransactionType: StoredValueTransactionType;
    ProductCode?: string;
    EanUpc?: string;
    ItemAmount: number;
    Currency: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface StoredValueRequest {
    SaleData: SaleData;
    StoredValueData: StoredValueData[];
    CustomerLanguage?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface StoredValueResponse {
    Response: Response;
    SaleData: SaleData;
    POIData: POIData;
    StoredValueResult?: StoredValueResult[];
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface StoredValueResult {
    StoredValueAccountStatus: StoredValueAccountStatus;
    HostTransactionID?: TransactionIdentification;
    StoredValueTransactionType: StoredValueTransactionType;
    ProductCode: string;
    EanUpc?: string;
    ItemAmount: number;
    Currency: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TotalFilter {
    POIID?: string;
    SaleID?: string;
    OperatorID?: string;
    ShiftNumber?: string;
    TotalsGroupID?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TrackData {
    value?: string;
    TrackNumb?: number;
    TrackFormat?: TrackFormatType;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TransactionConditions {
    AllowedPaymentBrand?: string[];
    AcquirerID?: string[];
    AllowedLoyaltyBrand?: string[];
    ForceEntryMode?: ForceEntryModeType[];
    DebitPreferredFlag?: boolean;
    LoyaltyHandling?: LoyaltyHandlingType;
    CustomerLanguage?: string;
    ForceOnlineFlag?: boolean;
    MerchantCategoryCode?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TransactionIdentification {
    TransactionID: string;
    TimeStamp: XMLGregorianCalendar;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TransactionStatusRequest {
    MessageReference?: MessageReference;
    DocumentQualifier?: DocumentQualifierType[];
    ReceiptReprintFlag?: boolean;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TransactionStatusResponse {
    Response: Response;
    MessageReference?: MessageReference;
    RepeatedMessageResponse?: RepeatedMessageResponse;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TransactionToPerform {
    PaymentRequest?: PaymentRequest;
    LoyaltyRequest?: LoyaltyRequest;
    ReversalRequest?: ReversalRequest;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TransactionTotals {
    PaymentTotals?: PaymentTotals[];
    LoyaltyTotals?: LoyaltyTotals[];
    PaymentInstrumentType: PaymentInstrumentType;
    AcquirerID?: string;
    ErrorCondition?: ErrorConditionType;
    HostReconciliationID?: string;
    CardBrand?: string;
    POIID?: string;
    SaleID?: string;
    OperatorID?: string;
    ShiftNumber?: string;
    TotalsGroupID?: string;
    PaymentCurrency?: string;
    LoyaltyUnit?: LoyaltyUnitType;
    LoyaltyCurrency?: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TransmitRequest {
    Message: any;
    WaitResponseFlag?: boolean;
    MaximumTransmitTime: number;
    DestinationAddress: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface TransmitResponse {
    Response: Response;
    Message?: any;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface UTMCoordinates {
    UTMZone: string;
    UTMEastward: string;
    UTMNorthward: string;
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface XMLGregorianCalendar extends Cloneable {
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export interface Cloneable {
}

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type AccountType = "Default" | "Savings" | "Checking" | "CreditCard" | "Universal" | "Investment" | "CardTotals" | "EpurseCard";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type AlgorithmType = "id-retail-cbc-mac" | "id-retail-cbc-mac-sha-256" | "id-ukpt-wrap " | "id-dukpt-wrap" | "des-ede3-ecb" | "des-ede3-cbc" | "id-sha256" | "sha256WithRSAEncryption" | "rsaEncryption";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type AlignmentType = "Left" | "Right" | "Centred" | "Justified";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type AttributeType = "id-at-commonName" | "id-at-localityName" | "id-at-organizationName" | "id-at-organizationalUnitName" | "id-at-countryName";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type AuthenticationMethodType = "Bypass" | "ManualVerification" | "MerchantAuthentication" | "OfflinePIN" | "OnlinePIN" | "PaperSignature" | "SecuredChannel" | "SecureCertificate" | "SecureNoCertificate" | "SignatureCapture" | "UnknownMethod";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type BarcodeType = "EAN8" | "EAN13" | "UPCA" | "Code25" | "Code128" | "PDF417" | "QRCODE";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type CharacterHeightType = "SingleHeight" | "DoubleHeight" | "HalfHeight";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type CharacterStyleType = "Normal" | "Bold" | "Italic" | "Underlined";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type CharacterWidthType = "SingleWidth" | "DoubleWidth";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type CheckTypeCodeType = "Personal" | "Company";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ColorType = "White" | "Black" | "Red" | "Green" | "Blue" | "Yellow" | "Magenta" | "Cyan";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ContentType = "id-data" | "id-signedData" | "id-envelopedData" | "id-digestedData" | "id-encryptedData" | "id-ct-authData";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type CustomerOrderReqType = "Open" | "Closed" | "Both";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type DeviceType = "CashierDisplay" | "CustomerDisplay" | "CashierInput" | "CustomerInput";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type DocumentQualifierType = "SaleReceipt" | "CashierReceipt" | "CustomerReceipt" | "Document" | "Voucher" | "Journal";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type EntryModeType = "RFID" | "Keyed" | "Manual" | "File" | "Scanned" | "MagStripe" | "ICC" | "SynchronousICC" | "Tapped" | "Contactless" | "Mobile";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ErrorConditionType = "Aborted" | "Busy" | "Cancel" | "DeviceOut" | "InsertedCard" | "InProgress" | "LoggedOut" | "MessageFormat" | "NotAllowed" | "NotFound" | "PaymentRestriction" | "Refusal" | "UnavailableDevice" | "UnavailableService" | "InvalidCard" | "UnreachableHost" | "WrongPIN";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type EventToNotifyType = "BeginMaintenance" | "EndMaintenance" | "Shutdown" | "Initialised" | "OutOfOrder" | "Completed" | "Abort" | "SaleWakeUp" | "SaleAdmin" | "CustomerLanguage" | "KeyPressed" | "SecurityAlarm" | "StopAssistance" | "CardInserted" | "CardRemoved" | "Reject";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ForceEntryModeType = "RFID" | "Keyed" | "Manual" | "File" | "Scanned" | "MagStripe" | "ICC" | "SynchronousICC" | "Tapped" | "Contactless" | "CheckReader";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type GenericProfileType = "Basic" | "Standard" | "Extended";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type GlobalStatusType = "OK" | "Busy" | "Maintenance" | "Unreachable";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type IdentificationSupportType = "NoCard" | "LoyaltyCard" | "HybridCard" | "LinkedCard";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type IdentificationType = "PAN" | "ISOTrack2" | "BarCode" | "AccountNumber" | "PhoneNumber";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type InfoQualifyType = "Status" | "Error" | "Display" | "Sound" | "Input" | "POIReplication" | "CustomerAssistance" | "Receipt" | "Document" | "Voucher";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type InputCommandType = "GetAnyKey" | "GetConfirmation" | "SiteManager" | "TextString" | "DigitString" | "DecimalString" | "GetFunctionKey" | "GetMenuEntry" | "Password";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type InstalmentType = "DeferredInstalments" | "EqualInstalments" | "InequalInstalments";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type LoyaltyHandlingType = "Forbidden" | "Processed" | "Allowed" | "Proposed" | "Required";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type LoyaltyTransactionType = "Award" | "Rebate" | "Redemption" | "AwardRefund" | "RebateRefund" | "RedemptionRefund";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type LoyaltyUnitType = "Point" | "Monetary";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type MenuEntryTagType = "Selectable" | "NonSelectable" | "SubMenu" | "NonSelectableSubMenu";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type MessageCategoryType = "Abort" | "Admin" | "BalanceInquiry" | "Batch" | "CardAcquisition" | "CardReaderAPDU" | "CardReaderInit" | "CardReaderPowerOff" | "Diagnosis" | "Display" | "EnableService" | "Event" | "GetTotals" | "Input" | "InputUpdate" | "Login" | "Logout" | "Loyalty" | "Payment" | "PIN" | "Print" | "Reconciliation" | "Reversal" | "Sound" | "StoredValue" | "TransactionStatus" | "Transmit";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type MessageClassType = "Service" | "Device" | "Event";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type MessageType = "Request" | "Response" | "Notification";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type OutputFormatType = "MessageRef" | "Text" | "XHTML" | "BarCode";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type PINFormatType = "ISO0" | "ISO1" | "ISO2" | "ISO3";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type PINRequestType = "PINVerify" | "PINVerifyOnly" | "PINEnter";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type POICapabilitiesType = "CashierDisplay" | "CashierError" | "CashierInput" | "CustomerDisplay" | "CustomerError" | "CustomerInput" | "PrinterReceipt" | "PrinterDocument" | "PrinterVoucher" | "MagStripe" | "ICC" | "EMVContactless" | "CashHandling";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type PaymentInstrumentType = "Card" | "Check" | "Mobile" | "StoredValue" | "Cash";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type PaymentType = "Normal" | "Refund" | "OneTimeReservation" | "FirstReservation" | "UpdateReservation" | "Completion" | "CashAdvance" | "CashDeposit" | "Recurring" | "Instalment" | "IssuerInstalment" | "PaidOut";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type PeriodUnitType = "Daily" | "Weekly" | "Monthly" | "Annual";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type PrinterStatusType = "OK" | "PaperLow" | "NoPaper" | "PaperJam" | "OutOfOrder";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ReconciliationType = "SaleReconciliation" | "AcquirerSynchronisation" | "AcquirerReconciliation" | "PreviousReconciliation";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ResponseModeType = "NotRequired" | "Immediate" | "PrintEnd" | "SoundEnd";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ResultType = "Success" | "Failure" | "Partial";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ReversalReasonType = "CustCancel" | "MerchantCancel" | "Malfunction" | "Unable2Compl";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type SaleCapabilitiesType = "CashierStatus" | "CashierError" | "CashierDisplay" | "POIReplication" | "CashierInput" | "CustomerAssistance" | "CustomerDisplay" | "CustomerError" | "CustomerInput" | "PrinterReceipt" | "PrinterDocument" | "PrinterVoucher" | "MagStripe" | "ICC" | "EMVContactless";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ServiceProfilesType = "Synchro" | "Batch" | "OneTimeRes" | "Reservation" | "Loyalty" | "StoredValue" | "PIN" | "CardReader" | "Sound" | "Communication";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type ServicesEnabledType = "CardAcquisition" | "Payment" | "Loyalty";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type SoundActionType = "StartSound" | "StopSound" | "SetDefaultVolume";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type SoundFormatType = "SoundRef" | "MessageRef" | "Text";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type StoredValueAccountType = "GiftCard" | "PhoneCard" | "Other";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type StoredValueTransactionType = "Reserve" | "Activate" | "Load" | "Unload" | "Reverse" | "Duplicate";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type TerminalEnvironmentType = "Attended" | "SemiAttended" | "Unattended";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type TokenRequestedType = "Transaction" | "Customer";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type TotalDetailsType = "POIID" | "SaleID" | "OperatorID" | "ShiftNumber" | "TotalsGroupID";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type TrackFormatType = "ISO" | "JIS-I" | "JIS-II" | "AAMVA" | "CMC-7" | "E-13B";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type TransactionActionType = "StartTransaction" | "AbortTransaction";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type TransactionType = "Debit" | "Credit" | "ReverseDebit" | "ReverseCredit" | "OneTimeReservation" | "CompletedDeffered" | "FirstReservation" | "UpdateReservation" | "CompletedReservation" | "CashAdvance" | "IssuerInstalment" | "Declined" | "Failed" | "Award" | "ReverseAward" | "Redemption" | "ReverseRedemption" | "Rebate" | "ReverseRebate";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type UnitOfMeasureType = "Case" | "Foot" | "UKGallon" | "USGallon" | "Gram" | "Inch" | "Kilogram" | "Pound" | "Meter" | "Centimetre" | "Litre" | "Centilitre" | "Ounce" | "Quart" | "Pint" | "Mile" | "Kilometre" | "Yard" | "Other";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
export  type VersionType = "v0" | "v1" | "v2" | "v3" | "v4" | "v5";
