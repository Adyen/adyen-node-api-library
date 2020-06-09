export declare const localSecuredRes: {
    SaleToPOIResponse: {
        MessageHeader: {
            MessageCategory: string;
            MessageClass: string;
            MessageType: string;
            POIID: string;
            ProtocolVersion: string;
            SaleID: string;
            ServiceID: string;
        };
        PaymentResponse: {};
    };
};
export declare const localEncRes: {
    SaleToPOIResponse: {
        MessageHeader: {
            MessageCategory: string;
            MessageClass: string;
            MessageType: string;
            POIID: string;
            ProtocolVersion: string;
            SaleID: string;
            ServiceID: string;
        };
        NexoBlob: string;
        SecurityTrailer: {
            AdyenCryptoVersion: number;
            Hmac: string;
            KeyIdentifier: string;
            KeyVersion: number;
            Nonce: string;
        };
    };
};
export declare const wrongEncRes: {
    SaleToPOIResponse: {
        MessageHeader: {
            MessageCategory: string;
            MessageClass: string;
            MessageType: string;
            POIID: string;
            ProtocolVersion: string;
            SaleID: string;
            ServiceID: string;
        };
        NexoBlob: string;
        SecurityTrailer: {
            AdyenCryptoVersion: number;
            Hmac: string;
            KeyIdentifier: string;
            KeyVersion: number;
            Nonce: string;
        };
    };
};
