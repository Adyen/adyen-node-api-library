import { 
    AbortRequest,
    AdminRequest,
    BalanceInquiryRequest,
    CardAcquisitionRequest,
    CardReaderAPDURequest,
    DiagnosisRequest,
    DisplayRequest,
    EnableServiceRequest,
    EventNotification,
    GetTotalsRequest,
    InputRequest,
    InputUpdate,
    LoginRequest,
    LogoutRequest,
    LoyaltyRequest,
    MessageHeader,
    PaymentRequest,
    PrintRequest,
    ReconciliationRequest,
    ReversalRequest,
    StoredValueRequest,
    TransactionStatusRequest,
} from './models';

export class SaleToPOIRequest {
    'AbortRequest'?: AbortRequest;
    'AdminRequest'?: AdminRequest;
    'BalanceInquiryRequest'?: BalanceInquiryRequest;
    'CardAcquisitionRequest'?: CardAcquisitionRequest;
    'CardReaderAPDURequest'?: CardReaderAPDURequest;
    'DiagnosisRequest'?: DiagnosisRequest;
    'DisplayRequest'?: DisplayRequest;
    'EnableServiceRequest'?: EnableServiceRequest;
    'EventNotification'?: EventNotification;
    'GetTotalsRequest'?: GetTotalsRequest;
    'InputRequest'?: InputRequest;
    'InputUpdate'?: InputUpdate;
    'LoginRequest'?: LoginRequest;
    'LogoutRequest'?: LogoutRequest;
    'LoyaltyRequest'?: LoyaltyRequest;
    'MessageHeader': MessageHeader;
    'PaymentRequest'?: PaymentRequest;
    'PrintRequest'?: PrintRequest;
    'ReconciliationRequest'?: ReconciliationRequest;
    'ReversalRequest'?: ReversalRequest;
    'StoredValueRequest'?: StoredValueRequest;
    'TransactionStatusRequest'?: TransactionStatusRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AbortRequest",
            "baseName": "AbortRequest",
            "type": "AbortRequest"
        },
        {
            "name": "AdminRequest",
            "baseName": "AdminRequest",
            "type": "AdminRequest"
        },
        {
            "name": "BalanceInquiryRequest",
            "baseName": "BalanceInquiryRequest",
            "type": "BalanceInquiryRequest"
        },
        {
            "name": "CardAcquisitionRequest",
            "baseName": "CardAcquisitionRequest",
            "type": "CardAcquisitionRequest"
        },
        {
            "name": "CardReaderAPDURequest",
            "baseName": "CardReaderAPDURequest",
            "type": "CardReaderAPDURequest"
        },
        {
            "name": "DiagnosisRequest",
            "baseName": "DiagnosisRequest",
            "type": "DiagnosisRequest"
        },
        {
            "name": "DisplayRequest",
            "baseName": "DisplayRequest",
            "type": "DisplayRequest"
        },
        {
            "name": "EnableServiceRequest",
            "baseName": "EnableServiceRequest",
            "type": "EnableServiceRequest"
        },
        {
            "name": "EventNotification",
            "baseName": "EventNotification",
            "type": "EventNotification"
        },
        {
            "name": "GetTotalsRequest",
            "baseName": "GetTotalsRequest",
            "type": "GetTotalsRequest"
        },
        {
            "name": "InputRequest",
            "baseName": "InputRequest",
            "type": "InputRequest"
        },
        {
            "name": "InputUpdate",
            "baseName": "InputUpdate",
            "type": "InputUpdate"
        },
        {
            "name": "LoginRequest",
            "baseName": "LoginRequest",
            "type": "LoginRequest"
        },
        {
            "name": "LogoutRequest",
            "baseName": "LogoutRequest",
            "type": "LogoutRequest"
        },
        {
            "name": "LoyaltyRequest",
            "baseName": "LoyaltyRequest",
            "type": "LoyaltyRequest"
        },
        {
            "name": "MessageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "PaymentRequest",
            "baseName": "PaymentRequest",
            "type": "PaymentRequest"
        },
        {
            "name": "PrintRequest",
            "baseName": "PrintRequest",
            "type": "PrintRequest"
        },
        {
            "name": "ReconciliationRequest",
            "baseName": "ReconciliationRequest",
            "type": "ReconciliationRequest"
        },
        {
            "name": "ReversalRequest",
            "baseName": "ReversalRequest",
            "type": "ReversalRequest"
        },
        {
            "name": "StoredValueRequest",
            "baseName": "StoredValueRequest",
            "type": "StoredValueRequest"
        },
        {
            "name": "TransactionStatusRequest",
            "baseName": "TransactionStatusRequest",
            "type": "TransactionStatusRequest"
        }    ];

    static getAttributeTypeMap() {
        return SaleToPOIRequest.attributeTypeMap;
    }
}

