declare namespace IBinLookup {
    interface Amount {
        currency: string;
        value: number;
    }
    interface BinDetail {
        issuerCountry?: string;
    }
    interface CardBin {
        bin?: string;
        commercial?: boolean;
        fundingSource?: string;
        fundsAvailability?: string;
        issuingBank?: string;
        issuingCountry?: string;
        issuingCurrency?: string;
        paymentMethod?: string;
        payoutEligible?: string;
        summary?: string;
    }
    interface CostEstimateAssumptions {
        assume3DSecureAuthenticated?: boolean;
        assumeLevel3Data?: boolean;
        installments?: number;
    }
    interface CostEstimateRequest {
        amount: IBinLookup.Amount;
        assumptions?: IBinLookup.CostEstimateAssumptions;
        cardNumber?: string;
        encryptedCard?: string;
        merchantAccount: string;
        merchantDetails?: IBinLookup.MerchantDetails;
        recurring?: IBinLookup.Recurring;
        selectedRecurringDetailReference?: string;
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        shopperReference?: string;
    }
    interface CostEstimateResponse {
        cardBin?: IBinLookup.CardBin;
        costEstimateAmount?: IBinLookup.Amount;
        resultCode?: string;
        surchargeType?: string;
    }
    interface DSPublicKeyDetail {
        brand?: string;
        directoryServerId?: string;
        publicKey?: string;
    }
    interface MerchantDetails {
        countryCode?: string;
        enrolledIn3DSecure?: boolean;
        mcc?: string;
    }
    namespace Post {
        type RequestBody = IBinLookup.CostEstimateRequest;
        namespace Responses {
            type $200 = IBinLookup.CostEstimateResponse;
        }
    }
    interface Recurring {
        contract?: "ONECLICK" | "RECURRING" | "PAYOUT";
        recurringDetailName?: string;
        recurringExpiry?: string;
        recurringFrequency?: string;
        tokenService?: "VISATOKENSERVICE" | "MCTOKENSERVICE";
    }
    interface ThreeDS2CardRangeDetail {
        brandCode?: string;
        endRange?: string;
        startRange?: string;
        threeDS2Version?: string;
        threeDSMethodURL?: string;
    }
    interface ThreeDSAvailabilityRequest {
        additionalData?: {};
        brands: string[];
        cardNumber?: string;
        merchantAccount: string;
        recurringDetailReference?: string;
        shopperReference?: string;
    }
    interface ThreeDSAvailabilityResponse {
        binDetails?: IBinLookup.BinDetail;
        dsPublicKeys?: IBinLookup.DSPublicKeyDetail[];
        threeDS1Supported?: boolean;
        threeDS2CardRangeDetails?: IBinLookup.ThreeDS2CardRangeDetail[];
        threeDS2supported?: boolean;
    }
}
