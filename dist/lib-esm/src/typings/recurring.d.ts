declare namespace IRecurring {
    interface Address {
        city: string;
        country: string;
        houseNumberOrName: string;
        postalCode: string;
        stateOrProvince?: string;
        street: string;
    }
    interface BankAccount {
        bankAccountNumber?: string;
        bankCity?: string;
        bankLocationId?: string;
        bankName?: string;
        bic?: string;
        countryCode?: string;
        iban?: string;
        ownerName?: string;
        taxId?: string;
    }
    interface Card {
        cvc?: string;
        expiryMonth: string;
        expiryYear: string;
        holderName: string;
        issueNumber?: string;
        number: string;
        startMonth?: string;
        startYear?: string;
    }
    interface DisableRequest {
        contract?: string;
        merchantAccount: string;
        recurringDetailReference?: string;
        shopperReference: string;
    }
    interface DisableResult {
        response?: string;
    }
    interface Name {
        firstName: string;
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        infix?: string;
        lastName: string;
    }
    namespace Post {
        type RequestBody = IRecurring.ScheduleAccountUpdaterRequest;
        namespace Responses {
            type $200 = IRecurring.ScheduleAccountUpdaterResult;
        }
    }
    interface Recurring {
        contract?: "ONECLICK" | "RECURRING" | "PAYOUT";
        recurringDetailName?: string;
        recurringExpiry?: string;
        recurringFrequency?: string;
        tokenService?: "VISATOKENSERVICE" | "MCTOKENSERVICE";
    }
    interface RecurringDetail {
        additionalData?: {};
        alias?: string;
        aliasType?: string;
        bank?: IRecurring.BankAccount;
        billingAddress?: IRecurring.Address;
        card?: IRecurring.Card;
        contractTypes?: string[];
        creationDate?: string;
        firstPspReference?: string;
        name?: string;
        paymentMethodVariant?: string;
        recurringDetailReference: string;
        shopperName?: IRecurring.Name;
        socialSecurityNumber?: string;
        variant: string;
    }
    interface RecurringDetailsRequest {
        merchantAccount: string;
        recurring?: IRecurring.Recurring;
        shopperReference: string;
    }
    interface RecurringDetailsResult {
        creationDate?: string;
        details?: IRecurring.RecurringDetail[];
        lastKnownShopperEmail?: string;
        shopperReference?: string;
    }
    interface ScheduleAccountUpdaterRequest {
        additionalData?: {};
        card?: IRecurring.Card;
        merchantAccount: string;
        reference: string;
        selectedRecurringDetailReference?: string;
        shopperReference?: string;
    }
    interface ScheduleAccountUpdaterResult {
        pspReference: string;
        result: string;
    }
}
