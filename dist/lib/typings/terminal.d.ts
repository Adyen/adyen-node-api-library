export interface TerminalApiRequest {
    saleToPoiRequest?: SaleToPoiRequest;
}
export interface SaleToPoiRequest {
    abortRequest?: AbortRequest;
    adminRequest?: AdminRequest;
    balanceInquiryRequest?: BalanceInquiryRequest;
    batchRequest?: BatchRequest;
    cardAcquisitionRequest?: CardAcquisitionRequest;
    cardReaderApduRequest?: CardReaderApduRequest;
    cardReaderInitRequest?: CardReaderInitRequest;
    cardReaderPowerOffRequest?: CardReaderPowerOffRequest;
    diagnosisRequest?: DiagnosisRequest;
    displayRequest?: DisplayRequest;
    enableServiceRequest?: EnableServiceRequest;
    eventNotification?: EventNotification;
    getTotalsRequest?: GetTotalsRequest;
    inputRequest?: InputRequest;
    inputUpdate?: InputUpdate;
    loginRequest?: LoginRequest;
    logoutRequest?: LogoutRequest;
    loyaltyRequest?: LoyaltyRequest;
    messageHeader: MessageHeader;
    paymentRequest?: PaymentRequest;
    pinRequest?: PinRequest;
    printRequest?: PrintRequest;
    reconciliationRequest?: ReconciliationRequest;
    reversalRequest?: ReversalRequest;
    securityTrailer?: ContentInformation;
    soundRequest?: SoundRequest;
    storedValueRequest?: StoredValueRequest;
    transactionStatusRequest?: TransactionStatusRequest;
    transmitRequest?: TransmitRequest;
}
export interface AbortRequest {
    abortReason: string;
    displayOutput?: DisplayOutput;
    messageReference: MessageReference;
}
export interface DisplayOutput {
    device: DeviceType;
    infoQualify: InfoQualifyType;
    menuEntry?: MenuEntry[];
    minimumDisplayTime?: number;
    outputContent: OutputContent;
    outputSignature?: any;
    responseRequiredFlag?: boolean;
}
export declare enum DeviceType {
    CashierDisplay = "CashierDisplay",
    CashierInput = "CashierInput",
    CustomerDisplay = "CustomerDisplay",
    CustomerInput = "CustomerInput"
}
export declare enum InfoQualifyType {
    CustomerAssistance = "CustomerAssistance",
    Display = "Display",
    Document = "Document",
    Error = "Error",
    Input = "Input",
    PoiReplication = "POIReplication",
    Receipt = "Receipt",
    Sound = "Sound",
    Status = "Status",
    Voucher = "Voucher"
}
export interface MenuEntry {
    defaultSelectedFlag?: boolean;
    menuEntryTag?: MenuEntryTagType;
    outputFormat: OutputFormatType;
    outputText?: OutputText[];
    outputXhtml?: any;
    predefinedContent?: PredefinedContent;
}
export declare enum MenuEntryTagType {
    NonSelectable = "NonSelectable",
    NonSelectableSubMenu = "NonSelectableSubMenu",
    Selectable = "Selectable",
    SubMenu = "SubMenu"
}
export declare enum OutputFormatType {
    BarCode = "BarCode",
    MessageRef = "MessageRef",
    Text = "Text",
    Xhtml = "XHTML"
}
export interface OutputText {
    alignment?: AlignmentType;
    characterHeight?: CharacterHeightType;
    characterSet?: number;
    characterStyle?: CharacterStyleType;
    characterWidth?: CharacterWidthType;
    color?: ColorType;
    endOfLineFlag?: boolean;
    font?: string;
    startColumn?: number;
    startRow?: number;
    text?: string;
}
export declare enum AlignmentType {
    Centred = "Centred",
    Justified = "Justified",
    Left = "Left",
    Right = "Right"
}
export declare enum CharacterHeightType {
    DoubleHeight = "DoubleHeight",
    HalfHeight = "HalfHeight",
    SingleHeight = "SingleHeight"
}
export declare enum CharacterStyleType {
    Bold = "Bold",
    Italic = "Italic",
    Normal = "Normal",
    Underlined = "Underlined"
}
export declare enum CharacterWidthType {
    DoubleWidth = "DoubleWidth",
    SingleWidth = "SingleWidth"
}
export declare enum ColorType {
    Black = "Black",
    Blue = "Blue",
    Cyan = "Cyan",
    Green = "Green",
    Magenta = "Magenta",
    Red = "Red",
    White = "White",
    Yellow = "Yellow"
}
export interface PredefinedContent {
    language?: string;
    referenceId: string;
}
export interface OutputContent {
    outputBarcode?: OutputBarcode;
    outputFormat: OutputFormatType;
    outputText?: OutputText[];
    outputXhtml?: any;
    predefinedContent?: PredefinedContent;
}
export interface OutputBarcode {
    barcodeType?: BarcodeType;
    value?: string;
}
export declare enum BarcodeType {
    Code128 = "Code128",
    Code25 = "Code25",
    Ean13 = "EAN13",
    Ean8 = "EAN8",
    Pdf417 = "PDF417",
    Qrcode = "QRCODE",
    Upca = "UPCA"
}
export interface MessageReference {
    deviceId?: string;
    messageCategory?: MessageCategoryType;
    poiid?: string;
    saleId?: string;
    serviceId?: string;
}
export declare enum MessageCategoryType {
    Abort = "Abort",
    Admin = "Admin",
    BalanceInquiry = "BalanceInquiry",
    Batch = "Batch",
    CardAcquisition = "CardAcquisition",
    CardReaderApdu = "CardReaderAPDU",
    CardReaderInit = "CardReaderInit",
    CardReaderPowerOff = "CardReaderPowerOff",
    Diagnosis = "Diagnosis",
    Display = "Display",
    EnableService = "EnableService",
    Event = "Event",
    GetTotals = "GetTotals",
    Input = "Input",
    InputUpdate = "InputUpdate",
    Login = "Login",
    Logout = "Logout",
    Loyalty = "Loyalty",
    Payment = "Payment",
    Pin = "PIN",
    Print = "Print",
    Reconciliation = "Reconciliation",
    Reversal = "Reversal",
    Sound = "Sound",
    StoredValue = "StoredValue",
    TransactionStatus = "TransactionStatus",
    Transmit = "Transmit"
}
export interface AdminRequest {
    serviceIdentification?: string;
}
export interface BalanceInquiryRequest {
    loyaltyAccountReq?: LoyaltyAccountReq;
    paymentAccountReq?: PaymentAccountReq;
}
export interface LoyaltyAccountReq {
    cardAcquisitionReference?: TransactionIdentification;
    loyaltyAccountId?: LoyaltyAccountId;
}
export interface TransactionIdentification {
    timeStamp: string;
    transactionId: string;
}
export interface LoyaltyAccountId {
    entryMode: EntryModeType[];
    identificationSupport?: IdentificationSupportType;
    identificationType: IdentificationType;
    value?: string;
}
export declare enum EntryModeType {
    Contactless = "Contactless",
    File = "File",
    Icc = "ICC",
    Keyed = "Keyed",
    MagStripe = "MagStripe",
    Manual = "Manual",
    Mobile = "Mobile",
    Rfid = "RFID",
    Scanned = "Scanned",
    SynchronousIcc = "SynchronousICC",
    Tapped = "Tapped"
}
export declare enum IdentificationSupportType {
    HybridCard = "HybridCard",
    LinkedCard = "LinkedCard",
    LoyaltyCard = "LoyaltyCard",
    NoCard = "NoCard"
}
export declare enum IdentificationType {
    AccountNumber = "AccountNumber",
    BarCode = "BarCode",
    IsoTrack2 = "ISOTrack2",
    Pan = "PAN",
    PhoneNumber = "PhoneNumber"
}
export interface PaymentAccountReq {
    accountType?: AccountType;
    cardAcquisitionReference?: TransactionIdentification;
    paymentInstrumentData?: PaymentInstrumentData;
}
export declare enum AccountType {
    CardTotals = "CardTotals",
    Checking = "Checking",
    CreditCard = "CreditCard",
    Default = "Default",
    EpurseCard = "EpurseCard",
    Investment = "Investment",
    Savings = "Savings",
    Universal = "Universal"
}
export interface PaymentInstrumentData {
    cardData?: CardData;
    checkData?: CheckData;
    mobileData?: MobileData;
    paymentInstrumentType: PaymentInstrumentType;
}
export interface CardData {
    allowedProduct?: AllowedProduct[];
    allowedProductCode?: string[];
    cardCountryCode?: string;
    customerOrder?: CustomerOrder[];
    entryMode?: EntryModeType[];
    maskedPan?: string;
    paymentAccountRef?: string;
    paymentBrand?: string;
    paymentToken?: PaymentToken;
    protectedCardData?: ContentInformation;
    sensitiveCardData?: SensitiveCardData;
}
export interface AllowedProduct {
    additionalProductInfo?: string;
    eanUpc?: string;
    productCode: string;
    productLabel?: string;
}
export interface CustomerOrder {
    accessedBy?: string;
    additionalInformation?: string;
    currency?: string;
    currentAmount: number;
    customerOrderId: string;
    endDate?: {
        [key: string]: any;
    };
    forecastedAmount: number;
    openOrderState?: boolean;
    startDate: {
        [key: string]: any;
    };
}
export interface PaymentToken {
    expiryDateTime?: {
        [key: string]: any;
    };
    tokenRequestedType: TokenRequestedType;
    tokenValue: string;
}
export declare enum TokenRequestedType {
    Customer = "Customer",
    Transaction = "Transaction"
}
export interface ContentInformation {
    authenticatedData?: AuthenticatedData;
    contentType: ContentType;
    digestedData?: DigestedData;
    envelopedData?: EnvelopedData;
    namedKeyEncryptedData?: NamedKeyEncryptedData;
    signedData?: SignedData;
}
export interface AuthenticatedData {
    encapsulatedContent: EncapsulatedContent;
    keyTransportOrKek?: any[];
    mac: any;
    macAlgorithm: AlgorithmIdentifier;
    version?: VersionType;
}
export interface EncapsulatedContent {
    content?: any;
    contentType: ContentType;
}
export declare enum ContentType {
    IdCtAuthData = "id-ct-authData",
    IdData = "id-data",
    IdDigestedData = "id-digestedData",
    IdEncryptedData = "id-encryptedData",
    IdEnvelopedData = "id-envelopedData",
    IdSignedData = "id-signedData"
}
export interface AlgorithmIdentifier {
    algorithm: AlgorithmType;
    parameter?: Parameter;
}
export declare enum AlgorithmType {
    DesEde3Cbc = "des-ede3-cbc",
    DesEde3Ecb = "des-ede3-ecb",
    IdDukptWrap = "id-dukpt-wrap",
    IdRetailCbcMac = "id-retail-cbc-mac",
    IdRetailCbcMacSha256 = "id-retail-cbc-mac-sha-256",
    IdSha256 = "id-sha256",
    IdUkptWrap = "id-ukpt-wrap ",
    RsaEncryption = "rsaEncryption",
    Sha256WithRsaEncryption = "sha256WithRSAEncryption"
}
export interface Parameter {
    initialisationVector?: any;
}
export declare enum VersionType {
    V0 = "v0",
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4",
    V5 = "v5"
}
export interface DigestedData {
    digest: any;
    digestAlgorithm: AlgorithmIdentifier;
    encapsulatedContent: EncapsulatedContent;
    version?: VersionType;
}
export interface EnvelopedData {
    encryptedContent: EncryptedContent;
    keyTransportOrKek?: any[];
    version?: VersionType;
}
export interface EncryptedContent {
    contentEncryptionAlgorithm: AlgorithmIdentifier;
    contentType: ContentType;
    encryptedData: any;
}
export interface NamedKeyEncryptedData {
    encryptedContent: EncryptedContent;
    keyName?: string;
    version?: VersionType;
}
export interface SignedData {
    certificate?: any[];
    digestAlgorithm: AlgorithmIdentifier[];
    encapsulatedContent: EncapsulatedContent;
    signer: Signer[];
    version?: VersionType;
}
export interface Signer {
    digestAlgorithm: AlgorithmIdentifier;
    signature: any;
    signatureAlgorithm: AlgorithmIdentifier;
    signerIdentifier: SignerIdentifier;
    version?: VersionType;
}
export interface SignerIdentifier {
    issuerAndSerialNumber: IssuerAndSerialNumber;
}
export interface IssuerAndSerialNumber {
    issuer: Issuer;
    serialNumber: number;
}
export interface Issuer {
    relativeDistinguishedName: RelativeDistinguishedName[];
}
export interface RelativeDistinguishedName {
    attribute: string;
    attributeValue: string;
}
export interface SensitiveCardData {
    cardSeqNumb?: string;
    expiryDate?: string;
    pan?: string;
    trackData?: TrackData[];
}
export interface TrackData {
    trackFormat?: TrackFormatType;
    trackNumb?: number;
    value?: string;
}
export declare enum TrackFormatType {
    Aamva = "AAMVA",
    Cmc7 = "CMC-7",
    E13B = "E-13B",
    Iso = "ISO",
    JisI = "JIS-I",
    JisIi = "JIS-II"
}
export interface CheckData {
    accountNumber?: string;
    bankId?: string;
    checkCardNumber?: string;
    checkNumber?: string;
    country?: string;
    trackData?: TrackData;
    type?: CheckTypeCodeType;
}
export declare enum CheckTypeCodeType {
    Company = "Company",
    Personal = "Personal"
}
export interface MobileData {
    geolocation?: Geolocation;
    maskedMsisdn?: string;
    mobileCountryCode?: string;
    mobileNetworkCode?: string;
    protectedMobileData?: ContentInformation;
    sensitiveMobileData?: SensitiveMobileData;
}
export interface Geolocation {
    geographicCoordinates?: GeographicCoordinates;
    utmCoordinates?: UtmCoordinates;
}
export interface GeographicCoordinates {
    latitude: string;
    longitude: string;
}
export interface UtmCoordinates {
    utmEastward: string;
    utmNorthward: string;
    utmZone: string;
}
export interface SensitiveMobileData {
    imei?: string;
    imsi?: string;
    msisdn: string;
}
export declare enum PaymentInstrumentType {
    Card = "Card",
    Cash = "Cash",
    Check = "Check",
    Mobile = "Mobile",
    StoredValue = "StoredValue"
}
export interface BatchRequest {
    removeAllFlag?: boolean;
    transactionToPerform?: TransactionToPerform[];
}
export interface TransactionToPerform {
    loyaltyRequest?: LoyaltyRequest;
    paymentRequest?: PaymentRequest;
    reversalRequest?: ReversalRequest;
}
export interface LoyaltyRequest {
    loyaltyData?: LoyaltyData[];
    loyaltyTransaction: LoyaltyTransaction;
    saleData: SaleData;
}
export interface LoyaltyData {
    cardAcquisitionReference?: TransactionIdentification;
    loyaltyAccountId?: LoyaltyAccountId;
    loyaltyAmount?: LoyaltyAmount;
}
export interface LoyaltyAmount {
    currency?: string;
    loyaltyUnit?: LoyaltyUnitType;
    value?: number;
}
export declare enum LoyaltyUnitType {
    Monetary = "Monetary",
    Point = "Point"
}
export interface LoyaltyTransaction {
    currency?: string;
    loyaltyTransactionType: LoyaltyTransactionType;
    originalPoiTransaction?: OriginalPoiTransaction;
    saleItem?: SaleItem[];
    totalAmount?: number;
    transactionConditions?: TransactionConditions;
}
export declare enum LoyaltyTransactionType {
    Award = "Award",
    AwardRefund = "AwardRefund",
    Rebate = "Rebate",
    RebateRefund = "RebateRefund",
    Redemption = "Redemption",
    RedemptionRefund = "RedemptionRefund"
}
export interface OriginalPoiTransaction {
    acquirerId?: string;
    approvalCode?: string;
    customerLanguage?: string;
    hostTransactionId?: TransactionIdentification;
    poiid?: string;
    poiTransactionId?: TransactionIdentification;
    reuseCardDataFlag?: boolean;
    saleId?: string;
}
export interface SaleItem {
    additionalProductInfo?: string;
    eanUpc?: string;
    itemAmount: number;
    itemId: number;
    productCode: string;
    productLabel?: string;
    quantity?: number;
    saleChannel?: string;
    taxCode?: string;
    unitOfMeasure?: UnitOfMeasureType;
    unitPrice?: number;
}
export declare enum UnitOfMeasureType {
    Case = "Case",
    Centilitre = "Centilitre",
    Centimetre = "Centimetre",
    Foot = "Foot",
    Gram = "Gram",
    Inch = "Inch",
    Kilogram = "Kilogram",
    Kilometre = "Kilometre",
    Litre = "Litre",
    Meter = "Meter",
    Mile = "Mile",
    Other = "Other",
    Ounce = "Ounce",
    Pint = "Pint",
    Pound = "Pound",
    Quart = "Quart",
    UkGallon = "UKGallon",
    UsGallon = "USGallon",
    Yard = "Yard"
}
export interface TransactionConditions {
    acquirerId?: string[];
    allowedLoyaltyBrand?: string[];
    allowedPaymentBrand?: string[];
    customerLanguage?: string;
    debitPreferredFlag?: boolean;
    forceEntryMode?: Array<ForceEntryModeType[]>;
    forceOnlineFlag?: boolean;
    loyaltyHandling?: LoyaltyHandlingType;
    merchantCategoryCode?: string;
}
export declare enum ForceEntryModeType {
    CheckReader = "CheckReader",
    Contactless = "Contactless",
    File = "File",
    Icc = "ICC",
    Keyed = "Keyed",
    MagStripe = "MagStripe",
    Manual = "Manual",
    Rfid = "RFID",
    Scanned = "Scanned",
    SynchronousIcc = "SynchronousICC",
    Tapped = "Tapped"
}
export declare enum LoyaltyHandlingType {
    Allowed = "Allowed",
    Forbidden = "Forbidden",
    Processed = "Processed",
    Proposed = "Proposed",
    Required = "Required"
}
export interface SaleData {
    customerOrderId?: string;
    customerOrderReq?: CustomerOrderReqType[];
    operatorId?: string;
    operatorLanguage?: string;
    saleReferenceId?: string;
    saleTerminalData?: SaleTerminalData;
    saleToAcquirerData?: string;
    saleToIssuerData?: SaleToIssuerData;
    saleToPoiData?: string;
    saleTransactionId: TransactionIdentification;
    shiftNumber?: string;
    sponsoredMerchant?: SponsoredMerchant[];
    tokenRequestedType?: TokenRequestedType;
}
export declare enum CustomerOrderReqType {
    Both = "Both",
    Closed = "Closed",
    Open = "Open"
}
export interface SaleTerminalData {
    saleCapabilities?: SaleCapabilitiesType[];
    saleProfile?: SaleProfile;
    terminalEnvironment?: TerminalEnvironmentType;
    totalsGroupId?: string;
}
export declare enum SaleCapabilitiesType {
    CashierDisplay = "CashierDisplay",
    CashierError = "CashierError",
    CashierInput = "CashierInput",
    CashierStatus = "CashierStatus",
    CustomerAssistance = "CustomerAssistance",
    CustomerDisplay = "CustomerDisplay",
    CustomerError = "CustomerError",
    CustomerInput = "CustomerInput",
    EmvContactless = "EMVContactless",
    Icc = "ICC",
    MagStripe = "MagStripe",
    PoiReplication = "POIReplication",
    PrinterDocument = "PrinterDocument",
    PrinterReceipt = "PrinterReceipt",
    PrinterVoucher = "PrinterVoucher"
}
export interface SaleProfile {
    genericProfile?: GenericProfileType;
    serviceProfiles?: ServiceProfilesType[];
}
export declare enum GenericProfileType {
    Basic = "Basic",
    Extended = "Extended",
    Standard = "Standard"
}
export declare enum ServiceProfilesType {
    Batch = "Batch",
    CardReader = "CardReader",
    Communication = "Communication",
    Loyalty = "Loyalty",
    OneTimeRes = "OneTimeRes",
    Pin = "PIN",
    Reservation = "Reservation",
    Sound = "Sound",
    StoredValue = "StoredValue",
    Synchro = "Synchro"
}
export declare enum TerminalEnvironmentType {
    Attended = "Attended",
    SemiAttended = "SemiAttended",
    Unattended = "Unattended"
}
export interface SaleToIssuerData {
    statementReference?: string;
}
export interface SponsoredMerchant {
    merchantAddress?: string;
    merchantCategoryCode: string;
    merchantCountry: string;
    merchantName: string;
    registrationId: string;
}
export interface PaymentRequest {
    loyaltyData?: LoyaltyData[];
    paymentData?: PaymentData;
    paymentTransaction: PaymentTransaction;
    saleData: SaleData;
}
export interface PaymentData {
    cardAcquisitionReference?: TransactionIdentification;
    customerOrder?: CustomerOrder;
    instalment?: Instalment;
    paymentInstrumentData?: PaymentInstrumentData;
    paymentType?: PaymentType;
    requestedValidityDate?: string;
    splitPaymentFlag?: boolean;
}
export interface Instalment {
    charges?: number;
    cumulativeAmount?: number;
    firstAmount?: number;
    firstPaymentDate?: string;
    instalment?: InstalmentType[];
    period?: number;
    periodUnit?: PeriodUnitType;
    planId?: string;
    sequenceNumber?: number;
    totalNbOfPayments?: number;
}
export declare enum InstalmentType {
    DeferredInstalments = "DeferredInstalments",
    EqualInstalments = "EqualInstalments",
    InequalInstalments = "InequalInstalments"
}
export declare enum PeriodUnitType {
    Annual = "Annual",
    Daily = "Daily",
    Monthly = "Monthly",
    Weekly = "Weekly"
}
export declare enum PaymentType {
    CashAdvance = "CashAdvance",
    CashDeposit = "CashDeposit",
    Completion = "Completion",
    FirstReservation = "FirstReservation",
    Instalment = "Instalment",
    IssuerInstalment = "IssuerInstalment",
    Normal = "Normal",
    OneTimeReservation = "OneTimeReservation",
    PaidOut = "PaidOut",
    Recurring = "Recurring",
    Refund = "Refund",
    UpdateReservation = "UpdateReservation"
}
export interface PaymentTransaction {
    amountsReq: AmountsReq;
    originalPoiTransaction?: OriginalPoiTransaction;
    saleItem?: SaleItem[];
    transactionConditions?: TransactionConditions;
}
export interface AmountsReq {
    cashBackAmount?: number;
    currency: string;
    maximumCashBackAmount?: number;
    minimumAmountToDeliver?: number;
    minimumSplitAmount?: number;
    paidAmount?: number;
    requestedAmount?: number;
    tipAmount?: number;
}
export interface ReversalRequest {
    customerOrderId?: CustomerOrder;
    originalPoiTransaction: OriginalPoiTransaction;
    reversalReason: ReversalReasonType;
    reversedAmount?: number;
    saleReferenceId?: string;
}
export declare enum ReversalReasonType {
    CustCancel = "CustCancel",
    Malfunction = "Malfunction",
    MerchantCancel = "MerchantCancel",
    Unable2Compl = "Unable2Compl"
}
export interface CardAcquisitionRequest {
    cardAcquisitionTransaction: CardAcquisitionTransaction;
    saleData: SaleData;
}
export interface CardAcquisitionTransaction {
    allowedLoyaltyBrand?: string[];
    allowedPaymentBrand?: string[];
    cashBackFlag?: boolean;
    customerLanguage?: string;
    forceCustomerSelectionFlag?: boolean;
    forceEntryMode?: Array<ForceEntryModeType[]>;
    loyaltyHandling?: LoyaltyHandlingType;
    paymentType?: PaymentType;
    totalAmount?: number;
}
export interface CardReaderApduRequest {
    apduClass: any;
    apduData?: any;
    apduExpectedLength?: any;
    apduInstruction: any;
    apduPar1: any;
    apduPar2: any;
}
export interface CardReaderInitRequest {
    displayOutput?: DisplayOutput;
    forceEntryMode?: Array<ForceEntryModeType[]>;
    leaveCardFlag?: boolean;
    maxWaitingTime?: number;
    warmResetFlag?: boolean;
}
export interface CardReaderPowerOffRequest {
    displayOutput?: DisplayOutput;
    maxWaitingTime?: number;
}
export interface DiagnosisRequest {
    acquirerId?: string[];
    hostDiagnosisFlag?: boolean;
    poiid?: string;
}
export interface DisplayRequest {
    displayOutput: DisplayOutput[];
}
export interface EnableServiceRequest {
    displayOutput?: DisplayOutput;
    servicesEnabled?: ServicesEnabledType[];
    transactionAction: TransactionActionType;
}
export declare enum ServicesEnabledType {
    CardAcquisition = "CardAcquisition",
    Loyalty = "Loyalty",
    Payment = "Payment"
}
export declare enum TransactionActionType {
    AbortTransaction = "AbortTransaction",
    StartTransaction = "StartTransaction"
}
export interface EventNotification {
    customerLanguage?: string;
    displayOutput?: DisplayOutput;
    eventDetails?: string;
    eventToNotify: EventToNotifyType;
    maintenanceRequiredFlag?: boolean;
    rejectedMessage?: any;
    timeStamp: string;
}
export declare enum EventToNotifyType {
    Abort = "Abort",
    BeginMaintenance = "BeginMaintenance",
    CardInserted = "CardInserted",
    CardRemoved = "CardRemoved",
    Completed = "Completed",
    CustomerLanguage = "CustomerLanguage",
    EndMaintenance = "EndMaintenance",
    Initialised = "Initialised",
    KeyPressed = "KeyPressed",
    OutOfOrder = "OutOfOrder",
    Reject = "Reject",
    SaleAdmin = "SaleAdmin",
    SaleWakeUp = "SaleWakeUp",
    SecurityAlarm = "SecurityAlarm",
    Shutdown = "Shutdown",
    StopAssistance = "StopAssistance"
}
export interface GetTotalsRequest {
    totalDetails?: TotalDetailsType[];
    totalFilter?: TotalFilter;
}
export declare enum TotalDetailsType {
    OperatorId = "OperatorID",
    Poiid = "POIID",
    SaleId = "SaleID",
    ShiftNumber = "ShiftNumber",
    TotalsGroupId = "TotalsGroupID"
}
export interface TotalFilter {
    operatorId?: string;
    poiid?: string;
    saleId?: string;
    shiftNumber?: string;
    totalsGroupId?: string;
}
export interface InputRequest {
    displayOutput?: DisplayOutput;
    inputData: InputData;
}
export interface InputData {
    beepKeyFlag?: boolean;
    defaultInputString?: string;
    device: DeviceType;
    disableCancelFlag?: boolean;
    disableCorrectFlag?: boolean;
    disableValidFlag?: boolean;
    fromRightToLeftFlag?: boolean;
    globalCorrectionFlag?: boolean;
    immediateResponseFlag?: boolean;
    infoQualify: InfoQualifyType;
    inputCommand: InputCommandType;
    maskCharactersFlag?: boolean;
    maxDecimalLength?: number;
    maxInputTime?: number;
    maxLength?: number;
    menuBackFlag?: boolean;
    minLength?: number;
    notifyCardInputFlag?: boolean;
    stringMask?: string;
    waitUserValidationFlag?: boolean;
}
export declare enum InputCommandType {
    DecimalString = "DecimalString",
    DigitString = "DigitString",
    GetAnyKey = "GetAnyKey",
    GetConfirmation = "GetConfirmation",
    GetFunctionKey = "GetFunctionKey",
    GetMenuEntry = "GetMenuEntry",
    Password = "Password",
    SiteManager = "SiteManager",
    TextString = "TextString"
}
export interface InputUpdate {
    maxDecimalLength?: number;
    maxLength?: number;
    menuEntry?: MenuEntry[];
    messageReference: MessageReference;
    minLength?: number;
    outputContent: OutputContent;
    outputSignature?: any;
}
export interface LoginRequest {
    customerOrderReq?: CustomerOrderReqType[];
    dateTime: {
        [key: string]: any;
    };
    operatorId?: string;
    operatorLanguage: string;
    poiSerialNumber?: string;
    saleSoftware: SaleSoftware;
    saleTerminalData?: SaleTerminalData;
    shiftNumber?: string;
    tokenRequestedType?: TokenRequestedType;
    trainingModeFlag?: boolean;
}
export interface SaleSoftware {
    applicationName: string;
    certificationCode: string;
    manufacturerId: string;
    softwareVersion: string;
}
export interface LogoutRequest {
    maintenanceAllowed?: boolean;
}
export interface MessageHeader {
    deviceId?: string;
    messageCategory: MessageCategoryType;
    messageClass: MessageClassType;
    messageType: MessageType;
    poiid: string;
    protocolVersion?: string;
    saleId: string;
    serviceId?: string;
}
export declare enum MessageClassType {
    Device = "Device",
    Event = "Event",
    Service = "Service"
}
export declare enum MessageType {
    Notification = "Notification",
    Request = "Request",
    Response = "Response"
}
export interface PinRequest {
    additionalInput?: string;
    cardholderPin?: CardholderPin;
    keyReference?: string;
    maxWaitingTime?: number;
    pinEncAlgorithm?: string;
    pinFormat?: PinFormatType;
    pinRequestType: PinRequestType;
    pinVerifMethod?: string;
}
export interface CardholderPin {
    additionalInput?: string;
    encrPinBlock: ContentInformation;
    pinFormat: PinFormatType;
}
export declare enum PinFormatType {
    Iso0 = "ISO0",
    Iso1 = "ISO1",
    Iso2 = "ISO2",
    Iso3 = "ISO3"
}
export declare enum PinRequestType {
    PinEnter = "PINEnter",
    PinVerify = "PINVerify",
    PinVerifyOnly = "PINVerifyOnly"
}
export interface PrintRequest {
    printOutput: PrintOutput;
}
export interface PrintOutput {
    documentQualifier: DocumentQualifierType;
    integratedPrintFlag?: boolean;
    outputContent: OutputContent;
    outputSignature?: any;
    requiredSignatureFlag?: boolean;
    responseMode: ResponseModeType;
}
export declare enum DocumentQualifierType {
    CashierReceipt = "CashierReceipt",
    CustomerReceipt = "CustomerReceipt",
    Document = "Document",
    Journal = "Journal",
    SaleReceipt = "SaleReceipt",
    Voucher = "Voucher"
}
export declare enum ResponseModeType {
    Immediate = "Immediate",
    NotRequired = "NotRequired",
    PrintEnd = "PrintEnd",
    SoundEnd = "SoundEnd"
}
export interface ReconciliationRequest {
    acquirerId?: string[];
    poiReconciliationId?: string;
    reconciliationType: ReconciliationType;
}
export declare enum ReconciliationType {
    AcquirerReconciliation = "AcquirerReconciliation",
    AcquirerSynchronisation = "AcquirerSynchronisation",
    PreviousReconciliation = "PreviousReconciliation",
    SaleReconciliation = "SaleReconciliation"
}
export interface SoundRequest {
    responseMode?: ResponseModeType;
    soundAction: SoundActionType;
    soundContent: SoundContent;
    soundVolume?: number;
}
export declare enum SoundActionType {
    SetDefaultVolume = "SetDefaultVolume",
    StartSound = "StartSound",
    StopSound = "StopSound"
}
export interface SoundContent {
    language?: string;
    referenceId?: string;
    soundFormat?: SoundFormatType;
    value?: string;
}
export declare enum SoundFormatType {
    MessageRef = "MessageRef",
    SoundRef = "SoundRef",
    Text = "Text"
}
export interface StoredValueRequest {
    customerLanguage?: string;
    saleData: SaleData;
    storedValueData: StoredValueData[];
}
export interface StoredValueData {
    currency: string;
    eanUpc?: string;
    itemAmount: number;
    originalPoiTransaction?: OriginalPoiTransaction;
    productCode?: string;
    storedValueAccountId?: StoredValueAccountId;
    storedValueProvider?: string;
    storedValueTransactionType: StoredValueTransactionType;
}
export interface StoredValueAccountId {
    entryMode: EntryModeType[];
    expiryDate?: string;
    identificationType: IdentificationType;
    ownerName?: string;
    storedValueAccountType: StoredValueAccountType;
    storedValueProvider?: string;
    value?: string;
}
export declare enum StoredValueAccountType {
    GiftCard = "GiftCard",
    Other = "Other",
    PhoneCard = "PhoneCard"
}
export declare enum StoredValueTransactionType {
    Activate = "Activate",
    Duplicate = "Duplicate",
    Load = "Load",
    Reserve = "Reserve",
    Reverse = "Reverse",
    Unload = "Unload"
}
export interface TransactionStatusRequest {
    documentQualifier?: DocumentQualifierType[];
    messageReference?: MessageReference;
    receiptReprintFlag?: boolean;
}
export interface TransmitRequest {
    destinationAddress: string;
    maximumTransmitTime: number;
    message: any;
    waitResponseFlag?: boolean;
}
export interface TerminalApiResponse {
    saleToPoiResponse?: SaleToPoiResponse;
}
export interface SaleToPoiResponse {
    adminResponse?: AdminResponse;
    balanceInquiryResponse?: BalanceInquiryResponse;
    batchResponse?: BatchResponse;
    cardAcquisitionResponse?: CardAcquisitionResponse;
    cardReaderApduResponse?: CardReaderApduResponse;
    cardReaderInitResponse?: CardReaderInitResponse;
    cardReaderPowerOffResponse?: CardReaderPowerOffResponse;
    diagnosisResponse?: DiagnosisResponse;
    displayResponse?: DisplayResponse;
    enableServiceResponse?: EnableServiceResponse;
    getTotalsResponse?: GetTotalsResponse;
    inputResponse?: InputResponse;
    loginResponse?: LoginResponse;
    logoutResponse?: LogoutResponse;
    loyaltyResponse?: LoyaltyResponse;
    messageHeader: MessageHeader;
    paymentResponse?: PaymentResponse;
    pinResponse?: PinResponse;
    printResponse?: PrintResponse;
    reconciliationResponse?: ReconciliationResponse;
    reversalResponse?: ReversalResponse;
    securityTrailer?: ContentInformation;
    soundResponse?: SoundResponse;
    storedValueResponse?: StoredValueResponse;
    transactionStatusResponse?: TransactionStatusResponse;
    transmitResponse?: TransmitResponse;
}
export interface AdminResponse {
    response: Response;
}
export interface Response {
    additionalResponse?: string;
    errorCondition?: ErrorConditionType;
    result: ResultType;
}
export declare enum ErrorConditionType {
    Aborted = "Aborted",
    Busy = "Busy",
    Cancel = "Cancel",
    DeviceOut = "DeviceOut",
    InProgress = "InProgress",
    InsertedCard = "InsertedCard",
    InvalidCard = "InvalidCard",
    LoggedOut = "LoggedOut",
    MessageFormat = "MessageFormat",
    NotAllowed = "NotAllowed",
    NotFound = "NotFound",
    PaymentRestriction = "PaymentRestriction",
    Refusal = "Refusal",
    UnavailableDevice = "UnavailableDevice",
    UnavailableService = "UnavailableService",
    UnreachableHost = "UnreachableHost",
    WrongPin = "WrongPIN"
}
export declare enum ResultType {
    Failure = "Failure",
    Partial = "Partial",
    Success = "Success"
}
export interface BalanceInquiryResponse {
    loyaltyAccountStatus?: LoyaltyAccountStatus;
    paymentAccountStatus?: PaymentAccountStatus;
    response: Response;
}
export interface LoyaltyAccountStatus {
    currency?: string;
    currentBalance?: number;
    loyaltyAccount: LoyaltyAccount;
    loyaltyUnit?: LoyaltyUnitType;
}
export interface LoyaltyAccount {
    loyaltyAccountId: LoyaltyAccountId;
    loyaltyBrand?: string;
}
export interface PaymentAccountStatus {
    currency?: string;
    currentBalance?: number;
    loyaltyAccountStatus?: LoyaltyAccountStatus;
    paymentAcquirerData?: PaymentAcquirerData;
    paymentInstrumentData?: PaymentInstrumentData;
}
export interface PaymentAcquirerData {
    acquirerId?: string;
    acquirerPoiid: string;
    acquirerTransactionId?: TransactionIdentification;
    approvalCode?: string;
    merchantId: string;
}
export interface BatchResponse {
    performedTransaction?: PerformedTransaction[];
    response: Response;
}
export interface PerformedTransaction {
    loyaltyResult?: LoyaltyResult[];
    paymentResult?: PaymentResult;
    poiData: PoiData;
    response: Response;
    reversedAmount?: number;
    saleData?: SaleData;
}
export interface LoyaltyResult {
    currentBalance?: number;
    loyaltyAccount: LoyaltyAccount;
    loyaltyAcquirerData?: LoyaltyAcquirerData;
    loyaltyAmount?: LoyaltyAmount;
    rebates?: Rebates;
}
export interface LoyaltyAcquirerData {
    approvalCode?: string;
    hostReconciliationId?: string;
    loyaltyAcquirerId?: string;
    loyaltyTransactionId?: TransactionIdentification;
}
export interface Rebates {
    rebateLabel?: string;
    saleItemRebate?: SaleItemRebate[];
    totalRebate?: number;
}
export interface SaleItemRebate {
    eanUpc?: string;
    itemAmount?: number;
    itemId: number;
    productCode: string;
    quantity?: number;
    rebateLabel?: string;
    unitOfMeasure?: UnitOfMeasureType;
}
export interface PoiData {
    poiReconciliationId?: string;
    poiTransactionId: TransactionIdentification;
}
export interface PaymentResult {
    amountsResp?: AmountsResp;
    authenticationMethod?: AuthenticationMethodType[];
    capturedSignature?: CapturedSignature;
    currencyConversion?: CurrencyConversion[];
    customerLanguage?: string;
    instalment?: Instalment;
    merchantOverrideFlag?: boolean;
    onlineFlag?: boolean;
    paymentAcquirerData?: PaymentAcquirerData;
    paymentInstrumentData?: PaymentInstrumentData;
    paymentType?: PaymentType;
    protectedSignature?: ContentInformation;
    validityDate?: string;
}
export interface AmountsResp {
    authorizedAmount: number;
    cashBackAmount?: number;
    currency?: string;
    tipAmount?: number;
    totalFeesAmount?: number;
    totalRebatesAmount?: number;
}
export declare enum AuthenticationMethodType {
    Bypass = "Bypass",
    ManualVerification = "ManualVerification",
    MerchantAuthentication = "MerchantAuthentication",
    OfflinePin = "OfflinePIN",
    OnLinePin = "OnLinePIN",
    PaperSignature = "PaperSignature",
    SecureCertificate = "SecureCertificate",
    SecureNoCertificate = "SecureNoCertificate",
    SecuredChannel = "SecuredChannel",
    SignatureCapture = "SignatureCapture",
    UnknownMethod = "UnknownMethod"
}
export interface CapturedSignature {
    areaSize?: AreaSize;
    signaturePoint: SignaturePoint[];
}
export interface AreaSize {
    x: string;
    y: string;
}
export interface SignaturePoint {
    x: string;
    y: string;
}
export interface CurrencyConversion {
    commission?: number;
    convertedAmount: Amount;
    customerApprovedFlag?: boolean;
    declaration?: string;
    markup?: number;
    rate?: number;
}
export interface Amount {
    currency?: string;
    value?: number;
}
export interface CardAcquisitionResponse {
    customerOrder?: CustomerOrder[];
    loyaltyAccount?: LoyaltyAccount[];
    paymentBrand?: string[];
    paymentInstrumentData?: PaymentInstrumentData;
    poiData: PoiData;
    response: Response;
    saleData: SaleData;
}
export interface CardReaderApduResponse {
    apduData?: any;
    cardStatusWords: any;
    response: Response;
}
export interface CardReaderInitResponse {
    entryMode?: EntryModeType[];
    iccResetData?: IccResetData;
    response: Response;
    trackData?: TrackData[];
}
export interface IccResetData {
    atrValue?: any;
    cardStatusWords?: any;
}
export interface CardReaderPowerOffResponse {
    response: Response;
}
export interface DiagnosisResponse {
    hostStatus?: HostStatus[];
    loggedSaleId?: string[];
    poiStatus?: PoiStatus;
    response: Response;
}
export interface HostStatus {
    acquirerId: string;
    isReachableFlag?: boolean;
}
export interface PoiStatus {
    cardReaderOkFlag?: boolean;
    cashHandlingDevice?: CashHandlingDevice[];
    communicationOkFlag?: boolean;
    fraudPreventionFlag?: boolean;
    globalStatus: GlobalStatusType;
    pedokFlag?: boolean;
    printerStatus?: PrinterStatusType;
    securityOkFlag?: boolean;
}
export interface CashHandlingDevice {
    cashHandlingOkFlag: boolean;
    coinsOrBills: CoinsOrBills[];
    currency: string;
}
export interface CoinsOrBills {
    number: number;
    unitValue: number;
}
export declare enum GlobalStatusType {
    Busy = "Busy",
    Maintenance = "Maintenance",
    Ok = "OK",
    Unreachable = "Unreachable"
}
export declare enum PrinterStatusType {
    NoPaper = "NoPaper",
    Ok = "OK",
    OutOfOrder = "OutOfOrder",
    PaperJam = "PaperJam",
    PaperLow = "PaperLow"
}
export interface DisplayResponse {
    outputResult: OutputResult[];
}
export interface OutputResult {
    device: DeviceType;
    infoQualify: InfoQualifyType;
    response: Response;
}
export interface EnableServiceResponse {
    response: Response;
}
export interface GetTotalsResponse {
    poiReconciliationId: string;
    response: Response;
    transactionTotals?: TransactionTotals[];
}
export interface TransactionTotals {
    acquirerId?: string;
    cardBrand?: string;
    errorCondition?: ErrorConditionType;
    hostReconciliationId?: string;
    loyaltyCurrency?: string;
    loyaltyTotals?: LoyaltyTotals[];
    loyaltyUnit?: LoyaltyUnitType;
    operatorId?: string;
    paymentCurrency?: string;
    paymentInstrumentType: PaymentInstrumentType;
    paymentTotals?: PaymentTotals[];
    poiid?: string;
    saleId?: string;
    shiftNumber?: string;
    totalsGroupId?: string;
}
export interface LoyaltyTotals {
    transactionAmount: number;
    transactionCount: number;
    transactionType: TransactionType;
}
export declare enum TransactionType {
    Award = "Award",
    CashAdvance = "CashAdvance",
    CompletedDeffered = "CompletedDeffered",
    CompletedReservation = "CompletedReservation",
    Credit = "Credit",
    Debit = "Debit",
    Declined = "Declined",
    Failed = "Failed",
    FirstReservation = "FirstReservation",
    IssuerInstalment = "IssuerInstalment",
    OneTimeReservation = "OneTimeReservation",
    Rebate = "Rebate",
    Redemption = "Redemption",
    ReverseAward = "ReverseAward",
    ReverseCredit = "ReverseCredit",
    ReverseDebit = "ReverseDebit",
    ReverseRebate = "ReverseRebate",
    ReverseRedemption = "ReverseRedemption",
    UpdateReservation = "UpdateReservation"
}
export interface PaymentTotals {
    transactionAmount: number;
    transactionCount: number;
    transactionType: TransactionType;
}
export interface InputResponse {
    inputResult: InputResult;
    outputResult?: OutputResult;
}
export interface InputResult {
    device: DeviceType;
    infoQualify: InfoQualifyType;
    input?: Input;
    response: Response;
}
export interface Input {
    confirmedFlag?: boolean;
    digitInput?: string;
    functionKey?: string;
    inputCommand: InputCommandType;
    menuEntryNumber?: number;
    password?: ContentInformation;
    textInput?: string;
}
export interface LoginResponse {
    poiSystemData?: PoiSystemData;
    response: Response;
}
export interface PoiSystemData {
    dateTime: {
        [key: string]: any;
    };
    poiSoftware: PoiSoftware;
    poiStatus?: PoiStatus;
    poiTerminalData?: PoiTerminalData;
}
export interface PoiSoftware {
    applicationName: string;
    certificationCode: string;
    manufacturerId: string;
    softwareVersion: string;
}
export interface PoiTerminalData {
    poiCapabilities: PoiCapabilitiesType[];
    poiProfile?: PoiProfile;
    poiSerialNumber: string;
    terminalEnvironment: TerminalEnvironmentType;
}
export declare enum PoiCapabilitiesType {
    CashHandling = "CashHandling",
    CashierDisplay = "CashierDisplay",
    CashierError = "CashierError",
    CashierInput = "CashierInput",
    CustomerDisplay = "CustomerDisplay",
    CustomerError = "CustomerError",
    CustomerInput = "CustomerInput",
    EmvContactless = "EMVContactless",
    Icc = "ICC",
    MagStripe = "MagStripe",
    PrinterDocument = "PrinterDocument",
    PrinterReceipt = "PrinterReceipt",
    PrinterVoucher = "PrinterVoucher"
}
export interface PoiProfile {
    genericProfile?: GenericProfileType;
    serviceProfiles?: ServiceProfilesType[];
}
export interface LogoutResponse {
    response: Response;
}
export interface LoyaltyResponse {
    loyaltyResult?: LoyaltyResult[];
    paymentReceipt?: PaymentReceipt[];
    poiData: PoiData;
    response: Response;
    saleData: SaleData;
}
export interface PaymentReceipt {
    documentQualifier: DocumentQualifierType;
    integratedPrintFlag?: boolean;
    outputContent: OutputContent;
    requiredSignatureFlag?: boolean;
}
export interface PinResponse {
    cardholderPin?: CardholderPin;
    response: Response;
}
export interface PaymentResponse {
    customerOrder?: CustomerOrder[];
    loyaltyResult?: LoyaltyResult[];
    paymentReceipt?: PaymentReceipt[];
    paymentResult?: PaymentResult;
    poiData: PoiData;
    response: Response;
    saleData: SaleData;
}
export interface PrintResponse {
    documentQualifier: DocumentQualifierType;
    response: Response;
}
export interface ReconciliationResponse {
    poiReconciliationId?: string;
    reconciliationType: ReconciliationType;
    response: Response;
    transactionTotals?: TransactionTotals[];
}
export interface ReversalResponse {
    customerOrderId?: string;
    originalPoiTransaction?: OriginalPoiTransaction;
    paymentReceipt?: PaymentReceipt[];
    poiData?: PoiData;
    response: Response;
    reversedAmount?: number;
}
export interface SoundResponse {
    response: Response;
}
export interface StoredValueResponse {
    poiData: PoiData;
    response: Response;
    saleData: SaleData;
    storedValueResult?: StoredValueResult[];
}
export interface StoredValueResult {
    currency: string;
    eanUpc?: string;
    hostTransactionId?: TransactionIdentification;
    itemAmount: number;
    productCode: string;
    storedValueAccountStatus: StoredValueAccountStatus;
    storedValueTransactionType: StoredValueTransactionType;
}
export interface StoredValueAccountStatus {
    currentBalance?: number;
    storedValueAccountId: StoredValueAccountId;
}
export interface TransactionStatusResponse {
    messageReference?: MessageReference;
    repeatedMessageResponse?: RepeatedMessageResponse;
    response: Response;
}
export interface RepeatedMessageResponse {
    messageHeader: MessageHeader;
    repeatedResponseMessageBody: RepeatedResponseMessageBody;
}
export interface RepeatedResponseMessageBody {
    cardAcquisitionResponse?: CardAcquisitionResponse;
    cardReaderApduResponse?: CardReaderApduResponse;
    loyaltyResponse?: LoyaltyResponse;
    paymentResponse?: PaymentResponse;
    reversalResponse?: ReversalResponse;
    storedValueResponse?: StoredValueResponse;
}
export interface TransmitResponse {
    message?: any;
    response: Response;
}
export interface TerminalApiSecuredRequest {
    saleToPoiRequest?: SaleToPoiSecuredMessage;
}
export interface SaleToPoiSecuredMessage {
    messageHeader?: MessageHeader;
    nexoBlob?: string;
    securityTrailer?: SecurityTrailer;
}
export interface SecurityTrailer {
    adyenCryptoVersion?: number;
    hmac?: any;
    keyIdentifier?: string;
    keyVersion?: number;
    nonce?: any;
}
export interface TerminalApiSecuredResponse {
    saleToPoiResponse?: SaleToPoiSecuredMessage;
}
export interface NexoDerivedKey {
    cipherKey?: any;
    hmacKey?: any;
    iv?: any;
}
export interface SecurityKey {
    adyenCryptoVersion?: number;
    keyIdentifier?: string;
    keyVersion?: number;
    passphrase?: string;
}
export declare class Convert {
    static toTerminalApiRequest(json: string): TerminalApiRequest;
    static terminalApiRequestToJson(value: TerminalApiRequest): string;
    static toTerminalApiResponse(json: string): TerminalApiResponse;
    static terminalApiResponseToJson(value: TerminalApiResponse): string;
    static toTerminalApiSecuredRequest(json: string): TerminalApiSecuredRequest;
    static terminalApiSecuredRequestToJson(value: TerminalApiSecuredRequest): string;
    static toTerminalApiSecuredResponse(json: string): TerminalApiSecuredResponse;
    static terminalApiSecuredResponseToJson(value: TerminalApiSecuredResponse): string;
    static toNexoDerivedKey(json: string): NexoDerivedKey;
    static nexoDerivedKeyToJson(value: NexoDerivedKey): string;
    static toSaleToPoiSecuredMessage(json: string): SaleToPoiSecuredMessage;
    static saleToPoiSecuredMessageToJson(value: SaleToPoiSecuredMessage): string;
    static toSecurityKey(json: string): SecurityKey;
    static securityKeyToJson(value: SecurityKey): string;
    static toSecurityTrailer(json: string): SecurityTrailer;
    static securityTrailerToJson(value: SecurityTrailer): string;
    static toSaleToPoiRequest(json: string): SaleToPoiRequest;
    static saleToPoiRequestToJson(value: SaleToPoiRequest): string;
    static toSaleToPoiResponse(json: string): SaleToPoiResponse;
    static saleToPoiResponseToJson(value: SaleToPoiResponse): string;
    static toMessageHeader(json: string): MessageHeader;
    static messageHeaderToJson(value: MessageHeader): string;
    static toAbortRequest(json: string): AbortRequest;
    static abortRequestToJson(value: AbortRequest): string;
    static toBalanceInquiryRequest(json: string): BalanceInquiryRequest;
    static balanceInquiryRequestToJson(value: BalanceInquiryRequest): string;
    static toBatchRequest(json: string): BatchRequest;
    static batchRequestToJson(value: BatchRequest): string;
    static toCardAcquisitionRequest(json: string): CardAcquisitionRequest;
    static cardAcquisitionRequestToJson(value: CardAcquisitionRequest): string;
    static toAdminRequest(json: string): AdminRequest;
    static adminRequestToJson(value: AdminRequest): string;
    static toDiagnosisRequest(json: string): DiagnosisRequest;
    static diagnosisRequestToJson(value: DiagnosisRequest): string;
    static toDisplayRequest(json: string): DisplayRequest;
    static displayRequestToJson(value: DisplayRequest): string;
    static toEnableServiceRequest(json: string): EnableServiceRequest;
    static enableServiceRequestToJson(value: EnableServiceRequest): string;
    static toEventNotification(json: string): EventNotification;
    static eventNotificationToJson(value: EventNotification): string;
    static toGetTotalsRequest(json: string): GetTotalsRequest;
    static getTotalsRequestToJson(value: GetTotalsRequest): string;
    static toInputRequest(json: string): InputRequest;
    static inputRequestToJson(value: InputRequest): string;
    static toInputUpdate(json: string): InputUpdate;
    static inputUpdateToJson(value: InputUpdate): string;
    static toLoginRequest(json: string): LoginRequest;
    static loginRequestToJson(value: LoginRequest): string;
    static toLogoutRequest(json: string): LogoutRequest;
    static logoutRequestToJson(value: LogoutRequest): string;
    static toLoyaltyRequest(json: string): LoyaltyRequest;
    static loyaltyRequestToJson(value: LoyaltyRequest): string;
    static toPaymentRequest(json: string): PaymentRequest;
    static paymentRequestToJson(value: PaymentRequest): string;
    static toPinRequest(json: string): PinRequest;
    static pinRequestToJson(value: PinRequest): string;
    static toPrintRequest(json: string): PrintRequest;
    static printRequestToJson(value: PrintRequest): string;
    static toCardReaderInitRequest(json: string): CardReaderInitRequest;
    static cardReaderInitRequestToJson(value: CardReaderInitRequest): string;
    static toCardReaderApduRequest(json: string): CardReaderApduRequest;
    static cardReaderApduRequestToJson(value: CardReaderApduRequest): string;
    static toCardReaderPowerOffRequest(json: string): CardReaderPowerOffRequest;
    static cardReaderPowerOffRequestToJson(value: CardReaderPowerOffRequest): string;
    static toReconciliationRequest(json: string): ReconciliationRequest;
    static reconciliationRequestToJson(value: ReconciliationRequest): string;
    static toReversalRequest(json: string): ReversalRequest;
    static reversalRequestToJson(value: ReversalRequest): string;
    static toSoundRequest(json: string): SoundRequest;
    static soundRequestToJson(value: SoundRequest): string;
    static toStoredValueRequest(json: string): StoredValueRequest;
    static storedValueRequestToJson(value: StoredValueRequest): string;
    static toTransactionStatusRequest(json: string): TransactionStatusRequest;
    static transactionStatusRequestToJson(value: TransactionStatusRequest): string;
    static toTransmitRequest(json: string): TransmitRequest;
    static transmitRequestToJson(value: TransmitRequest): string;
    static toContentInformation(json: string): ContentInformation;
    static contentInformationToJson(value: ContentInformation): string;
    static toBalanceInquiryResponse(json: string): BalanceInquiryResponse;
    static balanceInquiryResponseToJson(value: BalanceInquiryResponse): string;
    static toBatchResponse(json: string): BatchResponse;
    static batchResponseToJson(value: BatchResponse): string;
    static toCardAcquisitionResponse(json: string): CardAcquisitionResponse;
    static cardAcquisitionResponseToJson(value: CardAcquisitionResponse): string;
    static toAdminResponse(json: string): AdminResponse;
    static adminResponseToJson(value: AdminResponse): string;
    static toDiagnosisResponse(json: string): DiagnosisResponse;
    static diagnosisResponseToJson(value: DiagnosisResponse): string;
    static toDisplayResponse(json: string): DisplayResponse;
    static displayResponseToJson(value: DisplayResponse): string;
    static toEnableServiceResponse(json: string): EnableServiceResponse;
    static enableServiceResponseToJson(value: EnableServiceResponse): string;
    static toGetTotalsResponse(json: string): GetTotalsResponse;
    static getTotalsResponseToJson(value: GetTotalsResponse): string;
    static toInputResponse(json: string): InputResponse;
    static inputResponseToJson(value: InputResponse): string;
    static toLoginResponse(json: string): LoginResponse;
    static loginResponseToJson(value: LoginResponse): string;
    static toLogoutResponse(json: string): LogoutResponse;
    static logoutResponseToJson(value: LogoutResponse): string;
    static toLoyaltyResponse(json: string): LoyaltyResponse;
    static loyaltyResponseToJson(value: LoyaltyResponse): string;
    static toPaymentResponse(json: string): PaymentResponse;
    static paymentResponseToJson(value: PaymentResponse): string;
    static toPinResponse(json: string): PinResponse;
    static pinResponseToJson(value: PinResponse): string;
    static toPrintResponse(json: string): PrintResponse;
    static printResponseToJson(value: PrintResponse): string;
    static toCardReaderInitResponse(json: string): CardReaderInitResponse;
    static cardReaderInitResponseToJson(value: CardReaderInitResponse): string;
    static toCardReaderApduResponse(json: string): CardReaderApduResponse;
    static cardReaderApduResponseToJson(value: CardReaderApduResponse): string;
    static toCardReaderPowerOffResponse(json: string): CardReaderPowerOffResponse;
    static cardReaderPowerOffResponseToJson(value: CardReaderPowerOffResponse): string;
    static toReconciliationResponse(json: string): ReconciliationResponse;
    static reconciliationResponseToJson(value: ReconciliationResponse): string;
    static toReversalResponse(json: string): ReversalResponse;
    static reversalResponseToJson(value: ReversalResponse): string;
    static toSoundResponse(json: string): SoundResponse;
    static soundResponseToJson(value: SoundResponse): string;
    static toStoredValueResponse(json: string): StoredValueResponse;
    static storedValueResponseToJson(value: StoredValueResponse): string;
    static toTransactionStatusResponse(json: string): TransactionStatusResponse;
    static transactionStatusResponseToJson(value: TransactionStatusResponse): string;
    static toTransmitResponse(json: string): TransmitResponse;
    static transmitResponseToJson(value: TransmitResponse): string;
    static toMessageReference(json: string): MessageReference;
    static messageReferenceToJson(value: MessageReference): string;
    static toDisplayOutput(json: string): DisplayOutput;
    static displayOutputToJson(value: DisplayOutput): string;
    static toPaymentAccountReq(json: string): PaymentAccountReq;
    static paymentAccountReqToJson(value: PaymentAccountReq): string;
    static toLoyaltyAccountReq(json: string): LoyaltyAccountReq;
    static loyaltyAccountReqToJson(value: LoyaltyAccountReq): string;
    static toTransactionToPerform(json: string): TransactionToPerform;
    static transactionToPerformToJson(value: TransactionToPerform): string;
    static toSaleData(json: string): SaleData;
    static saleDataToJson(value: SaleData): string;
    static toCardAcquisitionTransaction(json: string): CardAcquisitionTransaction;
    static cardAcquisitionTransactionToJson(value: CardAcquisitionTransaction): string;
    static toXmlGregorianCalendar(json: string): {
        [key: string]: any;
    };
    static xmlGregorianCalendarToJson(value: {
        [key: string]: any;
    }): string;
    static toTotalFilter(json: string): TotalFilter;
    static totalFilterToJson(value: TotalFilter): string;
    static toInputData(json: string): InputData;
    static inputDataToJson(value: InputData): string;
    static toOutputContent(json: string): OutputContent;
    static outputContentToJson(value: OutputContent): string;
    static toMenuEntry(json: string): MenuEntry;
    static menuEntryToJson(value: MenuEntry): string;
    static toSaleSoftware(json: string): SaleSoftware;
    static saleSoftwareToJson(value: SaleSoftware): string;
    static toSaleTerminalData(json: string): SaleTerminalData;
    static saleTerminalDataToJson(value: SaleTerminalData): string;
    static toLoyaltyTransaction(json: string): LoyaltyTransaction;
    static loyaltyTransactionToJson(value: LoyaltyTransaction): string;
    static toLoyaltyData(json: string): LoyaltyData;
    static loyaltyDataToJson(value: LoyaltyData): string;
    static toPaymentTransaction(json: string): PaymentTransaction;
    static paymentTransactionToJson(value: PaymentTransaction): string;
    static toPaymentData(json: string): PaymentData;
    static paymentDataToJson(value: PaymentData): string;
    static toCardholderPin(json: string): CardholderPin;
    static cardholderPinToJson(value: CardholderPin): string;
    static toPrintOutput(json: string): PrintOutput;
    static printOutputToJson(value: PrintOutput): string;
    static toOriginalPoiTransaction(json: string): OriginalPoiTransaction;
    static originalPoiTransactionToJson(value: OriginalPoiTransaction): string;
    static toCustomerOrder(json: string): CustomerOrder;
    static customerOrderToJson(value: CustomerOrder): string;
    static toSoundContent(json: string): SoundContent;
    static soundContentToJson(value: SoundContent): string;
    static toStoredValueData(json: string): StoredValueData;
    static storedValueDataToJson(value: StoredValueData): string;
    static toEnvelopedData(json: string): EnvelopedData;
    static envelopedDataToJson(value: EnvelopedData): string;
    static toAuthenticatedData(json: string): AuthenticatedData;
    static authenticatedDataToJson(value: AuthenticatedData): string;
    static toSignedData(json: string): SignedData;
    static signedDataToJson(value: SignedData): string;
    static toDigestedData(json: string): DigestedData;
    static digestedDataToJson(value: DigestedData): string;
    static toNamedKeyEncryptedData(json: string): NamedKeyEncryptedData;
    static namedKeyEncryptedDataToJson(value: NamedKeyEncryptedData): string;
    static toResponse(json: string): Response;
    static responseToJson(value: Response): string;
    static toPaymentAccountStatus(json: string): PaymentAccountStatus;
    static paymentAccountStatusToJson(value: PaymentAccountStatus): string;
    static toLoyaltyAccountStatus(json: string): LoyaltyAccountStatus;
    static loyaltyAccountStatusToJson(value: LoyaltyAccountStatus): string;
    static toPerformedTransaction(json: string): PerformedTransaction;
    static performedTransactionToJson(value: PerformedTransaction): string;
    static toPoiData(json: string): PoiData;
    static poiDataToJson(value: PoiData): string;
    static toPaymentInstrumentData(json: string): PaymentInstrumentData;
    static paymentInstrumentDataToJson(value: PaymentInstrumentData): string;
    static toLoyaltyAccount(json: string): LoyaltyAccount;
    static loyaltyAccountToJson(value: LoyaltyAccount): string;
    static toPoiStatus(json: string): PoiStatus;
    static poiStatusToJson(value: PoiStatus): string;
    static toHostStatus(json: string): HostStatus;
    static hostStatusToJson(value: HostStatus): string;
    static toOutputResult(json: string): OutputResult;
    static outputResultToJson(value: OutputResult): string;
    static toTransactionTotals(json: string): TransactionTotals;
    static transactionTotalsToJson(value: TransactionTotals): string;
    static toInputResult(json: string): InputResult;
    static inputResultToJson(value: InputResult): string;
    static toPoiSystemData(json: string): PoiSystemData;
    static poiSystemDataToJson(value: PoiSystemData): string;
    static toLoyaltyResult(json: string): LoyaltyResult;
    static loyaltyResultToJson(value: LoyaltyResult): string;
    static toPaymentReceipt(json: string): PaymentReceipt;
    static paymentReceiptToJson(value: PaymentReceipt): string;
    static toPaymentResult(json: string): PaymentResult;
    static paymentResultToJson(value: PaymentResult): string;
    static toTrackData(json: string): TrackData;
    static trackDataToJson(value: TrackData): string;
    static toIccResetData(json: string): IccResetData;
    static iccResetDataToJson(value: IccResetData): string;
    static toStoredValueResult(json: string): StoredValueResult;
    static storedValueResultToJson(value: StoredValueResult): string;
    static toRepeatedMessageResponse(json: string): RepeatedMessageResponse;
    static repeatedMessageResponseToJson(value: RepeatedMessageResponse): string;
    static toTransactionIdentification(json: string): TransactionIdentification;
    static transactionIdentificationToJson(value: TransactionIdentification): string;
    static toLoyaltyAccountId(json: string): LoyaltyAccountId;
    static loyaltyAccountIdToJson(value: LoyaltyAccountId): string;
    static toSponsoredMerchant(json: string): SponsoredMerchant;
    static sponsoredMerchantToJson(value: SponsoredMerchant): string;
    static toSaleToIssuerData(json: string): SaleToIssuerData;
    static saleToIssuerDataToJson(value: SaleToIssuerData): string;
    static toCloneable(json: string): {
        [key: string]: any;
    };
    static cloneableToJson(value: {
        [key: string]: any;
    }): string;
    static toPredefinedContent(json: string): PredefinedContent;
    static predefinedContentToJson(value: PredefinedContent): string;
    static toOutputText(json: string): OutputText;
    static outputTextToJson(value: OutputText): string;
    static toOutputBarcode(json: string): OutputBarcode;
    static outputBarcodeToJson(value: OutputBarcode): string;
    static toSaleProfile(json: string): SaleProfile;
    static saleProfileToJson(value: SaleProfile): string;
    static toTransactionConditions(json: string): TransactionConditions;
    static transactionConditionsToJson(value: TransactionConditions): string;
    static toSaleItem(json: string): SaleItem;
    static saleItemToJson(value: SaleItem): string;
    static toLoyaltyAmount(json: string): LoyaltyAmount;
    static loyaltyAmountToJson(value: LoyaltyAmount): string;
    static toAmountsReq(json: string): AmountsReq;
    static amountsReqToJson(value: AmountsReq): string;
    static toInstalment(json: string): Instalment;
    static instalmentToJson(value: Instalment): string;
    static toStoredValueAccountId(json: string): StoredValueAccountId;
    static storedValueAccountIdToJson(value: StoredValueAccountId): string;
    static toEncryptedContent(json: string): EncryptedContent;
    static encryptedContentToJson(value: EncryptedContent): string;
    static toAlgorithmIdentifier(json: string): AlgorithmIdentifier;
    static algorithmIdentifierToJson(value: AlgorithmIdentifier): string;
    static toEncapsulatedContent(json: string): EncapsulatedContent;
    static encapsulatedContentToJson(value: EncapsulatedContent): string;
    static toSigner(json: string): Signer;
    static signerToJson(value: Signer): string;
    static toPaymentAcquirerData(json: string): PaymentAcquirerData;
    static paymentAcquirerDataToJson(value: PaymentAcquirerData): string;
    static toCardData(json: string): CardData;
    static cardDataToJson(value: CardData): string;
    static toCheckData(json: string): CheckData;
    static checkDataToJson(value: CheckData): string;
    static toMobileData(json: string): MobileData;
    static mobileDataToJson(value: MobileData): string;
    static toCashHandlingDevice(json: string): CashHandlingDevice;
    static cashHandlingDeviceToJson(value: CashHandlingDevice): string;
    static toPaymentTotals(json: string): PaymentTotals;
    static paymentTotalsToJson(value: PaymentTotals): string;
    static toLoyaltyTotals(json: string): LoyaltyTotals;
    static loyaltyTotalsToJson(value: LoyaltyTotals): string;
    static toInput(json: string): Input;
    static inputToJson(value: Input): string;
    static toPoiSoftware(json: string): PoiSoftware;
    static poiSoftwareToJson(value: PoiSoftware): string;
    static toPoiTerminalData(json: string): PoiTerminalData;
    static poiTerminalDataToJson(value: PoiTerminalData): string;
    static toLoyaltyAcquirerData(json: string): LoyaltyAcquirerData;
    static loyaltyAcquirerDataToJson(value: LoyaltyAcquirerData): string;
    static toRebates(json: string): Rebates;
    static rebatesToJson(value: Rebates): string;
    static toAmountsResp(json: string): AmountsResp;
    static amountsRespToJson(value: AmountsResp): string;
    static toCurrencyConversion(json: string): CurrencyConversion;
    static currencyConversionToJson(value: CurrencyConversion): string;
    static toCapturedSignature(json: string): CapturedSignature;
    static capturedSignatureToJson(value: CapturedSignature): string;
    static toStoredValueAccountStatus(json: string): StoredValueAccountStatus;
    static storedValueAccountStatusToJson(value: StoredValueAccountStatus): string;
    static toRepeatedResponseMessageBody(json: string): RepeatedResponseMessageBody;
    static repeatedResponseMessageBodyToJson(value: RepeatedResponseMessageBody): string;
    static toParameter(json: string): Parameter;
    static parameterToJson(value: Parameter): string;
    static toSignerIdentifier(json: string): SignerIdentifier;
    static signerIdentifierToJson(value: SignerIdentifier): string;
    static toSensitiveCardData(json: string): SensitiveCardData;
    static sensitiveCardDataToJson(value: SensitiveCardData): string;
    static toAllowedProduct(json: string): AllowedProduct;
    static allowedProductToJson(value: AllowedProduct): string;
    static toPaymentToken(json: string): PaymentToken;
    static paymentTokenToJson(value: PaymentToken): string;
    static toGeolocation(json: string): Geolocation;
    static geolocationToJson(value: Geolocation): string;
    static toSensitiveMobileData(json: string): SensitiveMobileData;
    static sensitiveMobileDataToJson(value: SensitiveMobileData): string;
    static toCoinsOrBills(json: string): CoinsOrBills;
    static coinsOrBillsToJson(value: CoinsOrBills): string;
    static toPoiProfile(json: string): PoiProfile;
    static poiProfileToJson(value: PoiProfile): string;
    static toSaleItemRebate(json: string): SaleItemRebate;
    static saleItemRebateToJson(value: SaleItemRebate): string;
    static toAmount(json: string): Amount;
    static amountToJson(value: Amount): string;
    static toAreaSize(json: string): AreaSize;
    static areaSizeToJson(value: AreaSize): string;
    static toSignaturePoint(json: string): SignaturePoint;
    static signaturePointToJson(value: SignaturePoint): string;
    static toIssuerAndSerialNumber(json: string): IssuerAndSerialNumber;
    static issuerAndSerialNumberToJson(value: IssuerAndSerialNumber): string;
    static toGeographicCoordinates(json: string): GeographicCoordinates;
    static geographicCoordinatesToJson(value: GeographicCoordinates): string;
    static toUtmCoordinates(json: string): UtmCoordinates;
    static utmCoordinatesToJson(value: UtmCoordinates): string;
    static toIssuer(json: string): Issuer;
    static issuerToJson(value: Issuer): string;
    static toRelativeDistinguishedName(json: string): RelativeDistinguishedName;
    static relativeDistinguishedNameToJson(value: RelativeDistinguishedName): string;
    static toMessageClassType(json: string): MessageClassType;
    static messageClassTypeToJson(value: MessageClassType): string;
    static toMessageCategoryType(json: string): MessageCategoryType;
    static messageCategoryTypeToJson(value: MessageCategoryType): string;
    static toMessageType(json: string): MessageType;
    static messageTypeToJson(value: MessageType): string;
    static toServicesEnabledType(json: string): ServicesEnabledType;
    static servicesEnabledTypeToJson(value: ServicesEnabledType): string;
    static toTransactionActionType(json: string): TransactionActionType;
    static transactionActionTypeToJson(value: TransactionActionType): string;
    static toEventToNotifyType(json: string): EventToNotifyType;
    static eventToNotifyTypeToJson(value: EventToNotifyType): string;
    static toTotalDetailsType(json: string): TotalDetailsType;
    static totalDetailsTypeToJson(value: TotalDetailsType): string;
    static toTokenRequestedType(json: string): TokenRequestedType;
    static tokenRequestedTypeToJson(value: TokenRequestedType): string;
    static toCustomerOrderReqType(json: string): CustomerOrderReqType;
    static customerOrderReqTypeToJson(value: CustomerOrderReqType): string;
    static toPinRequestType(json: string): PinRequestType;
    static pinRequestTypeToJson(value: PinRequestType): string;
    static toPinFormatType(json: string): PinFormatType;
    static pinFormatTypeToJson(value: PinFormatType): string;
    static toForceEntryModeType(json: string): ForceEntryModeType;
    static forceEntryModeTypeToJson(value: ForceEntryModeType): string;
    static toReconciliationType(json: string): ReconciliationType;
    static reconciliationTypeToJson(value: ReconciliationType): string;
    static toReversalReasonType(json: string): ReversalReasonType;
    static reversalReasonTypeToJson(value: ReversalReasonType): string;
    static toResponseModeType(json: string): ResponseModeType;
    static responseModeTypeToJson(value: ResponseModeType): string;
    static toSoundActionType(json: string): SoundActionType;
    static soundActionTypeToJson(value: SoundActionType): string;
    static toDocumentQualifierType(json: string): DocumentQualifierType;
    static documentQualifierTypeToJson(value: DocumentQualifierType): string;
    static toContentType(json: string): ContentType;
    static contentTypeToJson(value: ContentType): string;
    static toEntryModeType(json: string): EntryModeType;
    static entryModeTypeToJson(value: EntryModeType): string;
    static toDeviceType(json: string): DeviceType;
    static deviceTypeToJson(value: DeviceType): string;
    static toInfoQualifyType(json: string): InfoQualifyType;
    static infoQualifyTypeToJson(value: InfoQualifyType): string;
    static toAccountType(json: string): AccountType;
    static accountTypeToJson(value: AccountType): string;
    static toLoyaltyHandlingType(json: string): LoyaltyHandlingType;
    static loyaltyHandlingTypeToJson(value: LoyaltyHandlingType): string;
    static toPaymentType(json: string): PaymentType;
    static paymentTypeToJson(value: PaymentType): string;
    static toInputCommandType(json: string): InputCommandType;
    static inputCommandTypeToJson(value: InputCommandType): string;
    static toOutputFormatType(json: string): OutputFormatType;
    static outputFormatTypeToJson(value: OutputFormatType): string;
    static toMenuEntryTagType(json: string): MenuEntryTagType;
    static menuEntryTagTypeToJson(value: MenuEntryTagType): string;
    static toSaleCapabilitiesType(json: string): SaleCapabilitiesType;
    static saleCapabilitiesTypeToJson(value: SaleCapabilitiesType): string;
    static toTerminalEnvironmentType(json: string): TerminalEnvironmentType;
    static terminalEnvironmentTypeToJson(value: TerminalEnvironmentType): string;
    static toLoyaltyTransactionType(json: string): LoyaltyTransactionType;
    static loyaltyTransactionTypeToJson(value: LoyaltyTransactionType): string;
    static toSoundFormatType(json: string): SoundFormatType;
    static soundFormatTypeToJson(value: SoundFormatType): string;
    static toStoredValueTransactionType(json: string): StoredValueTransactionType;
    static storedValueTransactionTypeToJson(value: StoredValueTransactionType): string;
    static toVersionType(json: string): VersionType;
    static versionTypeToJson(value: VersionType): string;
    static toResultType(json: string): ResultType;
    static resultTypeToJson(value: ResultType): string;
    static toErrorConditionType(json: string): ErrorConditionType;
    static errorConditionTypeToJson(value: ErrorConditionType): string;
    static toLoyaltyUnitType(json: string): LoyaltyUnitType;
    static loyaltyUnitTypeToJson(value: LoyaltyUnitType): string;
    static toPaymentInstrumentType(json: string): PaymentInstrumentType;
    static paymentInstrumentTypeToJson(value: PaymentInstrumentType): string;
    static toGlobalStatusType(json: string): GlobalStatusType;
    static globalStatusTypeToJson(value: GlobalStatusType): string;
    static toPrinterStatusType(json: string): PrinterStatusType;
    static printerStatusTypeToJson(value: PrinterStatusType): string;
    static toAuthenticationMethodType(json: string): AuthenticationMethodType;
    static authenticationMethodTypeToJson(value: AuthenticationMethodType): string;
    static toTrackFormatType(json: string): TrackFormatType;
    static trackFormatTypeToJson(value: TrackFormatType): string;
    static toIdentificationType(json: string): IdentificationType;
    static identificationTypeToJson(value: IdentificationType): string;
    static toIdentificationSupportType(json: string): IdentificationSupportType;
    static identificationSupportTypeToJson(value: IdentificationSupportType): string;
    static toColorType(json: string): ColorType;
    static colorTypeToJson(value: ColorType): string;
    static toCharacterWidthType(json: string): CharacterWidthType;
    static characterWidthTypeToJson(value: CharacterWidthType): string;
    static toCharacterHeightType(json: string): CharacterHeightType;
    static characterHeightTypeToJson(value: CharacterHeightType): string;
    static toCharacterStyleType(json: string): CharacterStyleType;
    static characterStyleTypeToJson(value: CharacterStyleType): string;
    static toAlignmentType(json: string): AlignmentType;
    static alignmentTypeToJson(value: AlignmentType): string;
    static toBarcodeType(json: string): BarcodeType;
    static barcodeTypeToJson(value: BarcodeType): string;
    static toServiceProfilesType(json: string): ServiceProfilesType;
    static serviceProfilesTypeToJson(value: ServiceProfilesType): string;
    static toGenericProfileType(json: string): GenericProfileType;
    static genericProfileTypeToJson(value: GenericProfileType): string;
    static toUnitOfMeasureType(json: string): UnitOfMeasureType;
    static unitOfMeasureTypeToJson(value: UnitOfMeasureType): string;
    static toInstalmentType(json: string): InstalmentType;
    static instalmentTypeToJson(value: InstalmentType): string;
    static toPeriodUnitType(json: string): PeriodUnitType;
    static periodUnitTypeToJson(value: PeriodUnitType): string;
    static toStoredValueAccountType(json: string): StoredValueAccountType;
    static storedValueAccountTypeToJson(value: StoredValueAccountType): string;
    static toAlgorithmType(json: string): AlgorithmType;
    static algorithmTypeToJson(value: AlgorithmType): string;
    static toCheckTypeCodeType(json: string): CheckTypeCodeType;
    static checkTypeCodeTypeToJson(value: CheckTypeCodeType): string;
    static toTransactionType(json: string): TransactionType;
    static transactionTypeToJson(value: TransactionType): string;
    static toPoiCapabilitiesType(json: string): PoiCapabilitiesType;
    static poiCapabilitiesTypeToJson(value: PoiCapabilitiesType): string;
}
