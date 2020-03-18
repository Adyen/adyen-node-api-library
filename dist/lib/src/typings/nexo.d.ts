import { ApplicationInfo } from "./applicationInfo";
export interface AbortRequest {
    MessageReference: MessageReference;
    AbortReason: string;
    DisplayOutput?: DisplayOutput;
}
export interface AdminRequest {
    ServiceIdentification?: string;
}
export interface AdminResponse {
    Response: Response;
}
export interface AlgorithmIdentifier {
    Parameter?: Parameter;
    Algorithm: AlgorithmType;
}
export interface AllowedProduct {
    ProductLabel?: string;
    AdditionalProductInfo?: string;
    ProductCode: string;
    EanUpc?: string;
}
export interface Amount {
    value?: number;
    Currency?: string;
}
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
export interface AmountsResp {
    Currency?: string;
    AuthorizedAmount: number;
    TotalRebatesAmount?: number;
    TotalFeesAmount?: number;
    CashBackAmount?: number;
    TipAmount?: number;
}
export interface AreaSize {
    X: string;
    Y: string;
}
export interface AuthenticatedData {
    keyTransportOrKEK?: any[];
    MACAlgorithm: AlgorithmIdentifier;
    EncapsulatedContent: EncapsulatedContent;
    Version?: VersionType;
    MAC: any;
}
export interface BalanceInquiryRequest {
    PaymentAccountReq?: PaymentAccountReq;
    LoyaltyAccountReq?: LoyaltyAccountReq;
}
export interface BalanceInquiryResponse {
    Response: Response;
    PaymentAccountStatus?: PaymentAccountStatus;
    LoyaltyAccountStatus?: LoyaltyAccountStatus;
}
export interface BatchRequest {
    TransactionToPerform?: TransactionToPerform[];
    RemoveAllFlag?: boolean;
}
export interface BatchResponse {
    Response: Response;
    PerformedTransaction?: PerformedTransaction[];
}
export interface CapturedSignature {
    AreaSize?: AreaSize;
    SignaturePoint: SignaturePoint[];
}
export interface CardAcquisitionRequest {
    SaleData: SaleData;
    CardAcquisitionTransaction: CardAcquisitionTransaction;
}
export interface CardAcquisitionResponse {
    Response: Response;
    SaleData: SaleData;
    POIData: POIData;
    PaymentBrand?: string[];
    PaymentInstrumentData?: PaymentInstrumentData;
    LoyaltyAccount?: LoyaltyAccount[];
    CustomerOrder?: CustomerOrder[];
}
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
export interface CardReaderAPDURequest {
    APDUData?: any;
    APDUClass: any;
    APDUInstruction: any;
    APDUPar1: any;
    APDUPar2: any;
    APDUExpectedLength?: any;
}
export interface CardReaderAPDUResponse {
    Response: Response;
    APDUData?: any;
    CardStatusWords: any;
}
export interface CardReaderInitRequest {
    ForceEntryMode?: ForceEntryModeType[];
    DisplayOutput?: DisplayOutput;
    WarmResetFlag?: boolean;
    LeaveCardFlag?: boolean;
    MaxWaitingTime?: number;
}
export interface CardReaderInitResponse {
    Response: Response;
    TrackData?: TrackData[];
    ICCResetData?: ICCResetData;
    EntryMode?: EntryModeType[];
}
export interface CardReaderPowerOffRequest {
    DisplayOutput?: DisplayOutput;
    MaxWaitingTime?: number;
}
export interface CardReaderPowerOffResponse {
    Response: Response;
}
export interface CardholderPIN {
    EncrPINBlock: ContentInformation;
    PINFormat: PINFormatType;
    AdditionalInput?: string;
}
export interface CashHandlingDevice {
    CoinsOrBills: CoinsOrBills[];
    CashHandlingOKFlag: boolean;
    Currency: string;
}
export interface CheckData {
    BankID?: string;
    AccountNumber?: string;
    CheckNumber?: string;
    TrackData?: TrackData;
    CheckCardNumber?: string;
    Type?: CheckTypeCodeType;
    Country?: string;
}
export interface CoinsOrBills {
    UnitValue: number;
    Number: number;
}
export interface ContentInformation {
    EnvelopedData?: EnvelopedData;
    AuthenticatedData?: AuthenticatedData;
    SignedData?: SignedData;
    DigestedData?: DigestedData;
    NamedKeyEncryptedData?: NamedKeyEncryptedData;
    ContentType: ContentType;
}
export interface CurrencyConversion {
    ConvertedAmount: Amount;
    Commission?: number;
    Declaration?: string;
    CustomerApprovedFlag?: boolean;
    Rate?: number;
    Markup?: number;
}
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
export interface DiagnosisRequest {
    AcquirerID?: string[];
    POIID?: string;
    HostDiagnosisFlag?: boolean;
}
export interface DiagnosisResponse {
    Response: Response;
    LoggedSaleID?: string[];
    POIStatus?: POIStatus;
    HostStatus?: HostStatus[];
}
export interface DigestedData {
    DigestAlgorithm: AlgorithmIdentifier;
    EncapsulatedContent: EncapsulatedContent;
    Digest: any;
    Version?: VersionType;
}
export interface DisplayOutput {
    OutputContent: OutputContent;
    MenuEntry?: MenuEntry[];
    OutputSignature?: any;
    ResponseRequiredFlag?: boolean;
    MinimumDisplayTime?: number;
    Device: DeviceType;
    InfoQualify: InfoQualifyType;
}
export interface DisplayRequest {
    DisplayOutput: DisplayOutput[];
}
export interface DisplayResponse {
    OutputResult: OutputResult[];
}
export interface EnableServiceRequest {
    ServicesEnabled?: ServicesEnabledType[];
    DisplayOutput?: DisplayOutput;
    TransactionAction: TransactionActionType;
}
export interface EnableServiceResponse {
    Response: Response;
}
export interface EncapsulatedContent {
    Content?: any;
    ContentType: ContentType;
}
export interface EncryptedContent {
    ContentEncryptionAlgorithm: AlgorithmIdentifier;
    EncryptedData: any;
    ContentType: ContentType;
}
export interface EnvelopedData {
    keyTransportOrKEK?: any[];
    EncryptedContent: EncryptedContent;
    Version?: VersionType;
}
export interface EventNotification {
    EventDetails?: string;
    RejectedMessage?: any;
    DisplayOutput?: DisplayOutput;
    TimeStamp: XMLGregorianCalendar;
    EventToNotify: EventToNotifyType;
    MaintenanceRequiredFlag?: boolean;
    CustomerLanguage?: string;
}
export interface GeographicCoordinates {
    Latitude: string;
    Longitude: string;
}
export interface Geolocation {
    GeographicCoordinates?: GeographicCoordinates;
    UTMCoordinates?: UTMCoordinates;
}
export interface GetTotalsRequest {
    TotalDetails?: TotalDetailsType[];
    TotalFilter?: TotalFilter;
}
export interface GetTotalsResponse {
    Response: Response;
    TransactionTotals?: TransactionTotals[];
    POIReconciliationID: string;
}
export interface HostStatus {
    AcquirerID: string;
    IsReachableFlag?: boolean;
}
export interface ICCResetData {
    ATRValue?: any;
    CardStatusWords?: any;
}
export interface Input {
    ConfirmedFlag?: boolean;
    FunctionKey?: string;
    TextInput?: string;
    DigitInput?: string;
    Password?: ContentInformation;
    MenuEntryNumber?: number;
    InputCommand: InputCommandType;
}
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
export interface InputRequest {
    DisplayOutput?: DisplayOutput;
    InputData: InputData;
}
export interface InputResponse {
    OutputResult?: OutputResult;
    InputResult: InputResult;
}
export interface InputResult {
    Response: Response;
    Input?: Input;
    Device: DeviceType;
    InfoQualify: InfoQualifyType;
}
export interface InputUpdate {
    MessageReference: MessageReference;
    OutputContent: OutputContent;
    MenuEntry?: MenuEntry[];
    OutputSignature?: any;
    MinLength?: number;
    MaxLength?: number;
    MaxDecimalLength?: number;
}
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
export interface Issuer {
    RelativeDistinguishedName: RelativeDistinguishedName[];
}
export interface IssuerAndSerialNumber {
    Issuer: Issuer;
    SerialNumber: number;
}
export interface KEK {
    KEKIdentifier: KEKIdentifier;
    KeyEncryptionAlgorithm: AlgorithmIdentifier;
    Version?: VersionType;
    EncryptedKey: any;
}
export interface KEKIdentifier {
    KeyIdentifier: string;
    KeyVersion: string;
    DerivationIdentifier?: any;
}
export interface KeyTransport {
    RecipientIdentifier: RecipientIdentifier;
    KeyEncryptionAlgorithm: AlgorithmIdentifier;
    Version?: VersionType;
    EncryptedKey: any;
}
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
export interface LoginResponse {
    Response: Response;
    POISystemData?: POISystemData;
}
export interface LogoutRequest {
    MaintenanceAllowed?: boolean;
}
export interface LogoutResponse {
    Response: Response;
}
export interface LoyaltyAccount {
    LoyaltyAccountID: LoyaltyAccountID;
    LoyaltyBrand?: string;
}
export interface LoyaltyAccountID {
    value?: string;
    EntryMode: EntryModeType[];
    IdentificationType: IdentificationType;
    IdentificationSupport?: IdentificationSupportType;
}
export interface LoyaltyAccountReq {
    CardAcquisitionReference?: TransactionIdentification;
    LoyaltyAccountID?: LoyaltyAccountID;
}
export interface LoyaltyAccountStatus {
    LoyaltyAccount: LoyaltyAccount;
    CurrentBalance?: number;
    LoyaltyUnit?: LoyaltyUnitType;
    Currency?: string;
}
export interface LoyaltyAcquirerData {
    ApprovalCode?: string;
    LoyaltyTransactionID?: TransactionIdentification;
    LoyaltyAcquirerID?: string;
    HostReconciliationID?: string;
}
export interface LoyaltyAmount {
    value?: number;
    LoyaltyUnit?: LoyaltyUnitType;
    Currency?: string;
}
export interface LoyaltyData {
    CardAcquisitionReference?: TransactionIdentification;
    LoyaltyAccountID?: LoyaltyAccountID;
    LoyaltyAmount?: LoyaltyAmount;
}
export interface LoyaltyRequest {
    SaleData: SaleData;
    LoyaltyTransaction: LoyaltyTransaction;
    LoyaltyData?: LoyaltyData[];
}
export interface LoyaltyResponse {
    Response: Response;
    SaleData: SaleData;
    POIData: POIData;
    LoyaltyResult?: LoyaltyResult[];
    PaymentReceipt?: PaymentReceipt[];
}
export interface LoyaltyResult {
    LoyaltyAccount: LoyaltyAccount;
    LoyaltyAmount?: LoyaltyAmount;
    LoyaltyAcquirerData?: LoyaltyAcquirerData;
    Rebates?: Rebates;
    CurrentBalance?: number;
}
export interface LoyaltyTotals {
    TransactionType: TransactionType;
    TransactionCount: number;
    TransactionAmount: number;
}
export interface LoyaltyTransaction {
    OriginalPOITransaction?: OriginalPOITransaction;
    TransactionConditions?: TransactionConditions;
    SaleItem?: SaleItem[];
    LoyaltyTransactionType: LoyaltyTransactionType;
    Currency?: string;
    TotalAmount?: number;
}
export interface MenuEntry {
    PredefinedContent?: PredefinedContent;
    OutputText?: OutputText[];
    OutputXHTML?: any;
    MenuEntryTag?: MenuEntryTagType;
    OutputFormat: OutputFormatType;
    DefaultSelectedFlag?: boolean;
}
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
export interface MessageReference {
    MessageCategory?: MessageCategoryType;
    ServiceID?: string;
    DeviceID?: string;
    SaleID?: string;
    POIID?: string;
}
export interface MobileData {
    MobileCountryCode?: string;
    Geolocation?: Geolocation;
    ProtectedMobileData?: ContentInformation;
    SensitiveMobileData?: SensitiveMobileData;
    MobileNetworkCode?: string;
    MaskedMSISDN?: string;
}
export interface NamedKeyEncryptedData {
    KeyName?: string;
    EncryptedContent: EncryptedContent;
    Version?: VersionType;
}
export interface ObjectFactory {
}
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
export interface OutputBarcode {
    value?: string;
    BarcodeType?: BarcodeType;
}
export interface OutputContent {
    PredefinedContent?: PredefinedContent;
    OutputText?: OutputText[];
    OutputXHTML?: any;
    OutputBarcode?: OutputBarcode;
    OutputFormat: OutputFormatType;
}
export interface OutputResult {
    Response: Response;
    Device: DeviceType;
    InfoQualify: InfoQualifyType;
}
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
export interface PINResponse {
    Response: Response;
    CardholderPIN?: CardholderPIN;
}
export interface POIData {
    POITransactionID: TransactionIdentification;
    POIReconciliationID?: string;
}
export interface POIProfile {
    ServiceProfiles?: ServiceProfilesType[];
    GenericProfile?: GenericProfileType;
}
export interface POISoftware {
    ManufacturerID: string;
    ApplicationName: string;
    SoftwareVersion: string;
    CertificationCode: string;
}
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
export interface POISystemData {
    DateTime: XMLGregorianCalendar;
    POISoftware: POISoftware;
    POITerminalData?: POITerminalData;
    POIStatus?: POIStatus;
}
export interface POITerminalData {
    POICapabilities: POICapabilitiesType[];
    POIProfile?: POIProfile;
    TerminalEnvironment: TerminalEnvironmentType;
    POISerialNumber: string;
}
export interface Parameter {
    InitialisationVector?: any;
}
export interface PaymentAccountReq {
    CardAcquisitionReference?: TransactionIdentification;
    PaymentInstrumentData?: PaymentInstrumentData;
    AccountType?: AccountType;
}
export interface PaymentAccountStatus {
    PaymentInstrumentData?: PaymentInstrumentData;
    PaymentAcquirerData?: PaymentAcquirerData;
    LoyaltyAccountStatus?: LoyaltyAccountStatus;
    Currency?: string;
    CurrentBalance?: number;
}
export interface PaymentAcquirerData {
    AcquirerTransactionID?: TransactionIdentification;
    ApprovalCode?: string;
    AcquirerID?: string;
    MerchantID: string;
    AcquirerPOIID: string;
}
export interface PaymentData {
    CardAcquisitionReference?: TransactionIdentification;
    RequestedValidityDate?: string;
    Instalment?: Instalment;
    CustomerOrder?: CustomerOrder;
    PaymentInstrumentData?: PaymentInstrumentData;
    PaymentType?: PaymentType;
    SplitPaymentFlag?: boolean;
}
export interface PaymentInstrumentData {
    CardData?: CardData;
    CheckData?: CheckData;
    MobileData?: MobileData;
    PaymentInstrumentType: PaymentInstrumentType;
    StoredValueAccountID: StoredValueAccountID;
    ProtectedCardData: ContentInformation;
}
export interface PaymentReceipt {
    OutputContent: OutputContent;
    DocumentQualifier: DocumentQualifierType;
    IntegratedPrintFlag?: boolean;
    RequiredSignatureFlag?: boolean;
}
export interface PaymentRequest {
    SaleData: SaleData;
    PaymentTransaction: PaymentTransaction;
    PaymentData?: PaymentData;
    LoyaltyData?: LoyaltyData[];
}
export interface PaymentResponse {
    Response: Response;
    SaleData: SaleData;
    POIData: POIData;
    PaymentResult?: PaymentResult;
    LoyaltyResult?: LoyaltyResult[];
    PaymentReceipt?: PaymentReceipt[];
    CustomerOrder?: CustomerOrder[];
}
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
export interface PaymentToken {
    TokenRequestedType: TokenRequestedType;
    TokenValue: string;
    ExpiryDateTime?: XMLGregorianCalendar;
}
export interface PaymentTotals {
    TransactionType: TransactionType;
    TransactionCount: number;
    TransactionAmount: number;
}
export interface PaymentTransaction {
    AmountsReq: AmountsReq;
    OriginalPOITransaction?: OriginalPOITransaction;
    TransactionConditions?: TransactionConditions;
    SaleItem?: SaleItem[];
}
export interface PerformedTransaction {
    Response: Response;
    SaleData?: SaleData;
    POIData: POIData;
    PaymentResult?: PaymentResult;
    LoyaltyResult?: LoyaltyResult[];
    ReversedAmount?: number;
}
export interface PredefinedContent {
    ReferenceID: string;
    Language?: string;
}
export interface PrintOutput {
    OutputContent: OutputContent;
    OutputSignature?: any;
    DocumentQualifier: DocumentQualifierType;
    ResponseMode: ResponseModeType;
    IntegratedPrintFlag?: boolean;
    RequiredSignatureFlag?: boolean;
}
export interface PrintRequest {
    PrintOutput: PrintOutput;
}
export interface PrintResponse {
    Response: Response;
    DocumentQualifier: DocumentQualifierType;
}
export interface Rebates {
    TotalRebate?: number;
    RebateLabel?: string;
    SaleItemRebate?: SaleItemRebate[];
}
export interface RecipientIdentifier {
    IssuerAndSerialNumber: IssuerAndSerialNumber;
}
export interface ReconciliationRequest {
    AcquirerID?: string[];
    ReconciliationType: ReconciliationType;
    POIReconciliationID?: string;
}
export interface ReconciliationResponse {
    Response: Response;
    TransactionTotals?: TransactionTotals[];
    ReconciliationType: ReconciliationType;
    POIReconciliationID?: string;
}
export interface RelativeDistinguishedName {
    Attribute: string;
    AttributeValue: string;
}
export interface RepeatedMessageResponse {
    RepeatedResponseMessageBody: RepeatedResponseMessageBody;
    MessageHeader: MessageHeader;
}
export interface RepeatedMessageResponseBody {
    LoyaltyResponse?: LoyaltyResponse;
    PaymentResponse?: PaymentResponse;
    ReversalResponse?: ReversalResponse;
    StoredValueResponse?: StoredValueResponse;
    CardAcquisitionResponse?: CardAcquisitionResponse;
    CardReaderAPDUResponse?: CardReaderAPDUResponse;
}
export interface RepeatedResponseMessageBody {
    LoyaltyResponse?: LoyaltyResponse;
    PaymentResponse?: PaymentResponse;
    ReversalResponse?: ReversalResponse;
    StoredValueResponse?: StoredValueResponse;
    CardAcquisitionResponse?: CardAcquisitionResponse;
    CardReaderAPDUResponse?: CardReaderAPDUResponse;
}
export interface Response {
    AdditionalResponse?: string;
    Result: ResultType;
    ErrorCondition?: ErrorConditionType;
}
export interface ReversalRequest {
    OriginalPOITransaction: OriginalPOITransaction;
    CustomerOrderID?: CustomerOrder;
    SaleReferenceID?: string;
    ReversalReason: ReversalReasonType;
    ReversedAmount?: number;
}
export interface ReversalResponse {
    Response: Response;
    POIData?: POIData;
    OriginalPOITransaction?: OriginalPOITransaction;
    PaymentReceipt?: PaymentReceipt[];
    ReversedAmount?: number;
    CustomerOrderID?: string;
}
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
export interface SaleItemRebate {
    UnitOfMeasure?: UnitOfMeasureType;
    Quantity?: number;
    RebateLabel?: string;
    ItemID: number;
    ProductCode: string;
    EanUpc?: string;
    ItemAmount?: number;
}
export interface SaleProfile {
    ServiceProfiles?: ServiceProfilesType[];
    GenericProfile?: GenericProfileType;
}
export interface SaleSoftware {
    ManufacturerID: string;
    ApplicationName: string;
    SoftwareVersion: string;
    CertificationCode: string;
}
export interface SaleTerminalData {
    SaleCapabilities?: SaleCapabilitiesType[];
    SaleProfile?: SaleProfile;
    TerminalEnvironment?: TerminalEnvironmentType;
    TotalsGroupID?: string;
}
export interface SaleToIssuerData {
    StatementReference?: string;
}
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
export interface SensitiveCardData {
    TrackData?: TrackData[];
    PAN?: string;
    CardSeqNumb?: string;
    ExpiryDate?: string;
}
export interface SensitiveMobileData {
    MSISDN: string;
    IMSI?: string;
    IMEI?: string;
}
export interface SignaturePoint {
    X: string;
    Y: string;
}
export interface SignedData {
    DigestAlgorithm: AlgorithmIdentifier[];
    EncapsulatedContent: EncapsulatedContent;
    Certificate?: any[];
    Signer: Signer[];
    Version?: VersionType;
}
export interface Signer {
    SignerIdentifier: SignerIdentifier;
    DigestAlgorithm: AlgorithmIdentifier;
    SignatureAlgorithm: AlgorithmIdentifier;
    Signature: any;
    Version?: VersionType;
}
export interface SignerIdentifier {
    IssuerAndSerialNumber: IssuerAndSerialNumber;
}
export interface SoundContent {
    value?: string;
    SoundFormat?: SoundFormatType;
    Language?: string;
    ReferenceID?: string;
}
export interface SoundRequest {
    SoundContent: SoundContent;
    ResponseMode?: ResponseModeType;
    SoundAction: SoundActionType;
    SoundVolume?: number;
}
export interface SoundResponse {
    Response: Response;
}
export interface SponsoredMerchant {
    MerchantName: string;
    MerchantAddress?: string;
    MerchantCountry: string;
    MerchantCategoryCode: string;
    RegistrationID: string;
}
export interface SaleToAcquirerData {
    applicationInfo?: ApplicationInfo;
}
export interface StoredValueAccountID {
    value?: string;
    StoredValueAccountType: StoredValueAccountType;
    StoredValueProvider?: string;
    OwnerName?: string;
    ExpiryDate?: string;
    EntryMode: EntryModeType[];
    IdentificationType: IdentificationType;
}
export interface StoredValueAccountStatus {
    StoredValueAccountID: StoredValueAccountID;
    CurrentBalance?: number;
}
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
export interface StoredValueRequest {
    SaleData: SaleData;
    StoredValueData: StoredValueData[];
    CustomerLanguage?: string;
}
export interface StoredValueResponse {
    Response: Response;
    SaleData: SaleData;
    POIData: POIData;
    StoredValueResult?: StoredValueResult[];
}
export interface StoredValueResult {
    StoredValueAccountStatus: StoredValueAccountStatus;
    HostTransactionID?: TransactionIdentification;
    StoredValueTransactionType: StoredValueTransactionType;
    ProductCode: string;
    EanUpc?: string;
    ItemAmount: number;
    Currency: string;
}
export interface TotalFilter {
    POIID?: string;
    SaleID?: string;
    OperatorID?: string;
    ShiftNumber?: string;
    TotalsGroupID?: string;
}
export interface TrackData {
    value?: string;
    TrackNumb?: number;
    TrackFormat?: TrackFormatType;
}
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
export interface TransactionIdentification {
    TransactionID: string;
    TimeStamp: XMLGregorianCalendar;
}
export interface TransactionStatusRequest {
    MessageReference?: MessageReference;
    DocumentQualifier?: DocumentQualifierType[];
    ReceiptReprintFlag?: boolean;
}
export interface TransactionStatusResponse {
    Response: Response;
    MessageReference?: MessageReference;
    RepeatedMessageResponse?: RepeatedMessageResponse;
}
export interface TransactionToPerform {
    PaymentRequest?: PaymentRequest;
    LoyaltyRequest?: LoyaltyRequest;
    ReversalRequest?: ReversalRequest;
}
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
export interface TransmitRequest {
    Message: any;
    WaitResponseFlag?: boolean;
    MaximumTransmitTime: number;
    DestinationAddress: string;
}
export interface TransmitResponse {
    Response: Response;
    Message?: any;
}
export interface UTMCoordinates {
    UTMZone: string;
    UTMEastward: string;
    UTMNorthward: string;
}
export interface XMLGregorianCalendar extends Cloneable {
}
export interface Cloneable {
}
export declare type AccountType = "Default" | "Savings" | "Checking" | "CreditCard" | "Universal" | "Investment" | "CardTotals" | "EpurseCard";
export declare type AlgorithmType = "id-retail-cbc-mac" | "id-retail-cbc-mac-sha-256" | "id-ukpt-wrap " | "id-dukpt-wrap" | "des-ede3-ecb" | "des-ede3-cbc" | "id-sha256" | "sha256WithRSAEncryption" | "rsaEncryption";
export declare type AlignmentType = "Left" | "Right" | "Centred" | "Justified";
export declare type AttributeType = "id-at-commonName" | "id-at-localityName" | "id-at-organizationName" | "id-at-organizationalUnitName" | "id-at-countryName";
export declare type AuthenticationMethodType = "Bypass" | "ManualVerification" | "MerchantAuthentication" | "OfflinePIN" | "OnlinePIN" | "PaperSignature" | "SecuredChannel" | "SecureCertificate" | "SecureNoCertificate" | "SignatureCapture" | "UnknownMethod";
export declare type BarcodeType = "EAN8" | "EAN13" | "UPCA" | "Code25" | "Code128" | "PDF417" | "QRCODE";
export declare type CharacterHeightType = "SingleHeight" | "DoubleHeight" | "HalfHeight";
export declare type CharacterStyleType = "Normal" | "Bold" | "Italic" | "Underlined";
export declare type CharacterWidthType = "SingleWidth" | "DoubleWidth";
export declare type CheckTypeCodeType = "Personal" | "Company";
export declare type ColorType = "White" | "Black" | "Red" | "Green" | "Blue" | "Yellow" | "Magenta" | "Cyan";
export declare type ContentType = "id-data" | "id-signedData" | "id-envelopedData" | "id-digestedData" | "id-encryptedData" | "id-ct-authData";
export declare type CustomerOrderReqType = "Open" | "Closed" | "Both";
export declare type DeviceType = "CashierDisplay" | "CustomerDisplay" | "CashierInput" | "CustomerInput";
export declare type DocumentQualifierType = "SaleReceipt" | "CashierReceipt" | "CustomerReceipt" | "Document" | "Voucher" | "Journal";
export declare type EntryModeType = "RFID" | "Keyed" | "Manual" | "File" | "Scanned" | "MagStripe" | "ICC" | "SynchronousICC" | "Tapped" | "Contactless" | "Mobile";
export declare type ErrorConditionType = "Aborted" | "Busy" | "Cancel" | "DeviceOut" | "InsertedCard" | "InProgress" | "LoggedOut" | "MessageFormat" | "NotAllowed" | "NotFound" | "PaymentRestriction" | "Refusal" | "UnavailableDevice" | "UnavailableService" | "InvalidCard" | "UnreachableHost" | "WrongPIN";
export declare type EventToNotifyType = "BeginMaintenance" | "EndMaintenance" | "Shutdown" | "Initialised" | "OutOfOrder" | "Completed" | "Abort" | "SaleWakeUp" | "SaleAdmin" | "CustomerLanguage" | "KeyPressed" | "SecurityAlarm" | "StopAssistance" | "CardInserted" | "CardRemoved" | "Reject";
export declare type ForceEntryModeType = "RFID" | "Keyed" | "Manual" | "File" | "Scanned" | "MagStripe" | "ICC" | "SynchronousICC" | "Tapped" | "Contactless" | "CheckReader";
export declare type GenericProfileType = "Basic" | "Standard" | "Extended";
export declare type GlobalStatusType = "OK" | "Busy" | "Maintenance" | "Unreachable";
export declare type IdentificationSupportType = "NoCard" | "LoyaltyCard" | "HybridCard" | "LinkedCard";
export declare type IdentificationType = "PAN" | "ISOTrack2" | "BarCode" | "AccountNumber" | "PhoneNumber";
export declare type InfoQualifyType = "Status" | "Error" | "Display" | "Sound" | "Input" | "POIReplication" | "CustomerAssistance" | "Receipt" | "Document" | "Voucher";
export declare type InputCommandType = "GetAnyKey" | "GetConfirmation" | "SiteManager" | "TextString" | "DigitString" | "DecimalString" | "GetFunctionKey" | "GetMenuEntry" | "Password";
export declare type InstalmentType = "DeferredInstalments" | "EqualInstalments" | "InequalInstalments";
export declare type LoyaltyHandlingType = "Forbidden" | "Processed" | "Allowed" | "Proposed" | "Required";
export declare type LoyaltyTransactionType = "Award" | "Rebate" | "Redemption" | "AwardRefund" | "RebateRefund" | "RedemptionRefund";
export declare type LoyaltyUnitType = "Point" | "Monetary";
export declare type MenuEntryTagType = "Selectable" | "NonSelectable" | "SubMenu" | "NonSelectableSubMenu";
export declare type MessageCategoryType = "Abort" | "Admin" | "BalanceInquiry" | "Batch" | "CardAcquisition" | "CardReaderAPDU" | "CardReaderInit" | "CardReaderPowerOff" | "Diagnosis" | "Display" | "EnableService" | "Event" | "GetTotals" | "Input" | "InputUpdate" | "Login" | "Logout" | "Loyalty" | "Payment" | "PIN" | "Print" | "Reconciliation" | "Reversal" | "Sound" | "StoredValue" | "TransactionStatus" | "Transmit";
export declare type MessageClassType = "Service" | "Device" | "Event";
export declare type MessageType = "Request" | "Response" | "Notification";
export declare type OutputFormatType = "MessageRef" | "Text" | "XHTML" | "BarCode";
export declare type PINFormatType = "ISO0" | "ISO1" | "ISO2" | "ISO3";
export declare type PINRequestType = "PINVerify" | "PINVerifyOnly" | "PINEnter";
export declare type POICapabilitiesType = "CashierDisplay" | "CashierError" | "CashierInput" | "CustomerDisplay" | "CustomerError" | "CustomerInput" | "PrinterReceipt" | "PrinterDocument" | "PrinterVoucher" | "MagStripe" | "ICC" | "EMVContactless" | "CashHandling";
export declare type PaymentInstrumentType = "Card" | "Check" | "Mobile" | "StoredValue" | "Cash";
export declare type PaymentType = "Normal" | "Refund" | "OneTimeReservation" | "FirstReservation" | "UpdateReservation" | "Completion" | "CashAdvance" | "CashDeposit" | "Recurring" | "Instalment" | "IssuerInstalment" | "PaidOut";
export declare type PeriodUnitType = "Daily" | "Weekly" | "Monthly" | "Annual";
export declare type PrinterStatusType = "OK" | "PaperLow" | "NoPaper" | "PaperJam" | "OutOfOrder";
export declare type ReconciliationType = "SaleReconciliation" | "AcquirerSynchronisation" | "AcquirerReconciliation" | "PreviousReconciliation";
export declare type ResponseModeType = "NotRequired" | "Immediate" | "PrintEnd" | "SoundEnd";
export declare type ResultType = "Success" | "Failure" | "Partial";
export declare type ReversalReasonType = "CustCancel" | "MerchantCancel" | "Malfunction" | "Unable2Compl";
export declare type SaleCapabilitiesType = "CashierStatus" | "CashierError" | "CashierDisplay" | "POIReplication" | "CashierInput" | "CustomerAssistance" | "CustomerDisplay" | "CustomerError" | "CustomerInput" | "PrinterReceipt" | "PrinterDocument" | "PrinterVoucher" | "MagStripe" | "ICC" | "EMVContactless";
export declare type ServiceProfilesType = "Synchro" | "Batch" | "OneTimeRes" | "Reservation" | "Loyalty" | "StoredValue" | "PIN" | "CardReader" | "Sound" | "Communication";
export declare type ServicesEnabledType = "CardAcquisition" | "Payment" | "Loyalty";
export declare type SoundActionType = "StartSound" | "StopSound" | "SetDefaultVolume";
export declare type SoundFormatType = "SoundRef" | "MessageRef" | "Text";
export declare type StoredValueAccountType = "GiftCard" | "PhoneCard" | "Other";
export declare type StoredValueTransactionType = "Reserve" | "Activate" | "Load" | "Unload" | "Reverse" | "Duplicate";
export declare type TerminalEnvironmentType = "Attended" | "SemiAttended" | "Unattended";
export declare type TokenRequestedType = "Transaction" | "Customer";
export declare type TotalDetailsType = "POIID" | "SaleID" | "OperatorID" | "ShiftNumber" | "TotalsGroupID";
export declare type TrackFormatType = "ISO" | "JIS-I" | "JIS-II" | "AAMVA" | "CMC-7" | "E-13B";
export declare type TransactionActionType = "StartTransaction" | "AbortTransaction";
export declare type TransactionType = "Debit" | "Credit" | "ReverseDebit" | "ReverseCredit" | "OneTimeReservation" | "CompletedDeffered" | "FirstReservation" | "UpdateReservation" | "CompletedReservation" | "CashAdvance" | "IssuerInstalment" | "Declined" | "Failed" | "Award" | "ReverseAward" | "Redemption" | "ReverseRedemption" | "Rebate" | "ReverseRebate";
export declare type UnitOfMeasureType = "Case" | "Foot" | "UKGallon" | "USGallon" | "Gram" | "Inch" | "Kilogram" | "Pound" | "Meter" | "Centimetre" | "Litre" | "Centilitre" | "Ounce" | "Quart" | "Pint" | "Mile" | "Kilometre" | "Yard" | "Other";
export declare type VersionType = "v0" | "v1" | "v2" | "v3" | "v4" | "v5";
