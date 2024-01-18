import { 
    AdminResponse,
    CardAcquisitionResponse,
    CardReaderAPDUResponse,
    DiagnosisResponse,
    DisplayResponse,
    EnableServiceResponse,
    GetTotalsResponse,
    InputResponse,
    LoginResponse,
    LogoutResponse,
    LoyaltyResponse,
    MessageHeader,
    PaymentResponse,
    PrintResponse,
    ReconciliationResponse,
    ReversalResponse,
    SecurityTrailer,
    StoredValueResponse,
    TransactionStatusResponse,
} from './models';

export class SaleToPOIResponse {
    'AdminResponse'?: AdminResponse;
    'CardAcquisitionResponse'?: CardAcquisitionResponse;
    'CardReaderAPDUResponse'?: CardReaderAPDUResponse;
    'DiagnosisResponse'?: DiagnosisResponse;
    'DisplayResponse'?: DisplayResponse;
    'EnableServiceResponse'?: EnableServiceResponse;
    'GetTotalsResponse'?: GetTotalsResponse;
    'InputResponse'?: InputResponse;
    'LoginResponse'?: LoginResponse;
    'LogoutResponse'?: LogoutResponse;
    'LoyaltyResponse'?: LoyaltyResponse;
    'MessageHeader': MessageHeader;
    'PaymentResponse'?: PaymentResponse;
    'PrintResponse'?: PrintResponse;
    'ReconciliationResponse'?: ReconciliationResponse;
    'ReversalResponse'?: ReversalResponse;
    'SecurityTrailer'?: SecurityTrailer;
    'StoredValueResponse'?: StoredValueResponse;
    'TransactionStatusResponse'?: TransactionStatusResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdminResponse",
            "baseName": "AdminResponse",
            "type": "AdminResponse"
        },
        {
            "name": "CardAcquisitionResponse",
            "baseName": "CardAcquisitionResponse",
            "type": "CardAcquisitionResponse"
        },
        {
            "name": "CardReaderAPDUResponse",
            "baseName": "CardReaderAPDUResponse",
            "type": "CardReaderAPDUResponse"
        },
        {
            "name": "DiagnosisResponse",
            "baseName": "DiagnosisResponse",
            "type": "DiagnosisResponse"
        },
        {
            "name": "DisplayResponse",
            "baseName": "DisplayResponse",
            "type": "DisplayResponse"
        },
        {
            "name": "EnableServiceResponse",
            "baseName": "EnableServiceResponse",
            "type": "EnableServiceResponse"
        },
        {
            "name": "GetTotalsResponse",
            "baseName": "GetTotalsResponse",
            "type": "GetTotalsResponse"
        },
        {
            "name": "InputResponse",
            "baseName": "InputResponse",
            "type": "InputResponse"
        },
        {
            "name": "LoginResponse",
            "baseName": "LoginResponse",
            "type": "LoginResponse"
        },
        {
            "name": "LogoutResponse",
            "baseName": "LogoutResponse",
            "type": "LogoutResponse"
        },
        {
            "name": "LoyaltyResponse",
            "baseName": "LoyaltyResponse",
            "type": "LoyaltyResponse"
        },
        {
            "name": "MessageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "PaymentResponse",
            "baseName": "PaymentResponse",
            "type": "PaymentResponse"
        },
        {
            "name": "PrintResponse",
            "baseName": "PrintResponse",
            "type": "PrintResponse"
        },
        {
            "name": "ReconciliationResponse",
            "baseName": "ReconciliationResponse",
            "type": "ReconciliationResponse"
        },
        {
            "name": "ReversalResponse",
            "baseName": "ReversalResponse",
            "type": "ReversalResponse"
        },
        {
            "name": "SecurityTrailer",
            "baseName": "SecurityTrailer",
            "type": "SecurityTrailer"
        },
        {
            "name": "StoredValueResponse",
            "baseName": "StoredValueResponse",
            "type": "StoredValueResponse"
        },
        {
            "name": "TransactionStatusResponse",
            "baseName": "TransactionStatusResponse",
            "type": "TransactionStatusResponse"
        }    ];

    static getAttributeTypeMap() {
        return SaleToPOIResponse.attributeTypeMap;
    }
}

