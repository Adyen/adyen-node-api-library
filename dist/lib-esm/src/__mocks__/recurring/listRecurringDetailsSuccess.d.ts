export declare const listRecurringDetailsSuccess: {
    creationDate: string;
    details: ({
        additionalData: {
            cardBin: string;
        };
        alias: string;
        aliasType: string;
        card: {
            expiryMonth: string;
            expiryYear: string;
            holderName: string;
            number: string;
        };
        contractTypes: string[];
        creationDate: string;
        firstPspReference: string;
        paymentMethodVariant: string;
        recurringDetailReference: string;
        variant: string;
        billingAddress?: undefined;
        tokenDetails?: undefined;
    } | {
        billingAddress: {
            city: string;
            country: string;
            houseNumberOrName: string;
            postalCode: string;
            stateOrProvince: string;
            street: string;
        };
        contractTypes: string[];
        creationDate: string;
        firstPspReference: string;
        paymentMethodVariant: string;
        recurringDetailReference: string;
        tokenDetails: {
            tokenData: {
                BillingAgreementId: string;
                EmailId: string;
                "PayPal.PayerId": string;
            };
            tokenDataType: string;
        };
        variant: string;
        additionalData?: undefined;
        alias?: undefined;
        aliasType?: undefined;
        card?: undefined;
    })[];
};
