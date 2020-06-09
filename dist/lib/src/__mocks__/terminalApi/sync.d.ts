export declare const syncRes: {
    SaleToPOIResponse: {
        MessageHeader: {
            MessageCategory: string;
            MessageClass: string;
            MessageType: string;
            POIID: string | undefined;
            ProtocolVersion: string;
            SaleID: string;
            ServiceID: string;
        };
        PaymentResponse: {
            POIData: {
                POIReconciliationID: string;
                POITransactionID: {
                    TimeStamp: string;
                    TransactionID: string;
                };
            };
            PaymentReceipt: {
                DocumentQualifier: string;
                OutputContent: {
                    OutputFormat: string;
                    OutputText: ({
                        CharacterStyle: string;
                        EndOfLineFlag: boolean;
                        Text: string;
                    } | {
                        EndOfLineFlag: boolean;
                        Text: string;
                        CharacterStyle?: undefined;
                    })[];
                };
                RequiredSignatureFlag: boolean;
            }[];
            PaymentResult: {
                AmountsResp: {
                    AuthorizedAmount: number;
                    Currency: string;
                };
                OnlineFlag: boolean;
                PaymentAcquirerData: {
                    AcquirerPOIID: string;
                    AcquirerTransactionID: {
                        TimeStamp: string;
                        TransactionID: string;
                    };
                    ApprovalCode: string;
                    MerchantID: string;
                };
                PaymentInstrumentData: {
                    CardData: {
                        EntryMode: string[];
                        MaskedPan: string;
                        PaymentBrand: string;
                        SensitiveCardData: {
                            ExpiryDate: string;
                        };
                    };
                    PaymentInstrumentType: string;
                };
            };
            Response: {
                AdditionalResponse: string;
                Result: string;
            };
            SaleData: {
                SaleTransactionID: {
                    TimeStamp: string;
                    TransactionID: string;
                };
            };
        };
    };
};
export declare const syncRefund: {
    SaleToPOIResponse: {
        MessageHeader: {
            MessageCategory: string;
            MessageClass: string;
            MessageType: string;
            POIID: string | undefined;
            ProtocolVersion: string;
            SaleID: string;
            ServiceID: string;
        };
        ReversalResponse: {
            Response: {
                Result: string;
            };
        };
    };
};
