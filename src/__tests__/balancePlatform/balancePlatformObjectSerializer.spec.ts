import { ObjectSerializer } from "../../typings/balancePlatform/objectSerializer";
import { AULocalAccountIdentification } from "../../typings/balancePlatform/aULocalAccountIdentification";
import { IbanAccountIdentification } from "../../typings/balancePlatform/ibanAccountIdentification";
import { NumberAndBicAccountIdentification } from "../../typings/balancePlatform/numberAndBicAccountIdentification";
import { USLocalAccountIdentification } from "../../typings/balancePlatform/uSLocalAccountIdentification";
import { AddressRequirement } from "../../typings/balancePlatform/addressRequirement";
import { AmountMinMaxRequirement } from "../../typings/balancePlatform/amountMinMaxRequirement";
import { IbanAccountIdentificationRequirement } from "../../typings/balancePlatform/ibanAccountIdentificationRequirement";
import { PaymentInstrumentRequirement } from "../../typings/balancePlatform/paymentInstrumentRequirement";

describe("ObjectSerializer - BankAccountAccountIdentification discriminator", () => {
    it("should resolve 'iban' to IbanAccountIdentification", () => {
        const type = ObjectSerializer.findCorrectType({ type: "iban" }, "BankAccountAccountIdentification");
        expect(type).toBe("IbanAccountIdentification");
    });

    it("should resolve 'usLocal' to USLocalAccountIdentification", () => {
        const type = ObjectSerializer.findCorrectType({ type: "usLocal" }, "BankAccountAccountIdentification");
        expect(type).toBe("USLocalAccountIdentification");
    });

    it("should resolve 'auLocal' to AULocalAccountIdentification", () => {
        const type = ObjectSerializer.findCorrectType({ type: "auLocal" }, "BankAccountAccountIdentification");
        expect(type).toBe("AULocalAccountIdentification");
    });

    it("should resolve 'numberAndBic' to NumberAndBicAccountIdentification", () => {
        const type = ObjectSerializer.findCorrectType({ type: "numberAndBic" }, "BankAccountAccountIdentification");
        expect(type).toBe("NumberAndBicAccountIdentification");
    });

    it("should deserialize an iban payload into IbanAccountIdentification", () => {
        const raw = { type: "iban", iban: "NL91ABNA0417164300", bic: "ABNANL2A" };
        const result = ObjectSerializer.deserialize(raw, "BankAccountAccountIdentification") as IbanAccountIdentification;
        expect(result).toBeInstanceOf(IbanAccountIdentification);
        expect(result.iban).toBe("NL91ABNA0417164300");
        expect(result.bic).toBe("ABNANL2A");
        expect(result.type).toBe("iban");
    });

    it("should deserialize a usLocal payload into USLocalAccountIdentification", () => {
        const raw = { type: "usLocal", accountNumber: "123456789", routingNumber: "021000021", accountType: "checking" };
        const result = ObjectSerializer.deserialize(raw, "BankAccountAccountIdentification") as USLocalAccountIdentification;
        expect(result).toBeInstanceOf(USLocalAccountIdentification);
        expect(result.accountNumber).toBe("123456789");
        expect(result.routingNumber).toBe("021000021");
        expect(result.type).toBe("usLocal");
    });

    it("should deserialize an auLocal payload into AULocalAccountIdentification", () => {
        const raw = { type: "auLocal", accountNumber: "11111111", bsbCode: "123456" };
        const result = ObjectSerializer.deserialize(raw, "BankAccountAccountIdentification") as AULocalAccountIdentification;
        expect(result).toBeInstanceOf(AULocalAccountIdentification);
        expect(result.accountNumber).toBe("11111111");
        expect(result.bsbCode).toBe("123456");
    });

    it("should deserialize a numberAndBic payload into NumberAndBicAccountIdentification", () => {
        const raw = { type: "numberAndBic", accountNumber: "0012345678", bic: "DEUTDEDB" };
        const result = ObjectSerializer.deserialize(raw, "BankAccountAccountIdentification") as NumberAndBicAccountIdentification;
        expect(result).toBeInstanceOf(NumberAndBicAccountIdentification);
        expect(result.accountNumber).toBe("0012345678");
        expect(result.bic).toBe("DEUTDEDB");
    });

    it("should round-trip an iban payload through serialize then deserialize", () => {
        const raw = { type: "iban", iban: "GB29NWBK60161331926819" };
        const instance = ObjectSerializer.deserialize(raw, "BankAccountAccountIdentification") as IbanAccountIdentification;
        const serialized = ObjectSerializer.serialize(instance, "IbanAccountIdentification");
        const roundTripped = ObjectSerializer.deserialize(serialized, "BankAccountAccountIdentification") as IbanAccountIdentification;
        expect(roundTripped.iban).toBe("GB29NWBK60161331926819");
        expect(roundTripped.type).toBe("iban");
    });
});

describe("ObjectSerializer - BankAccountIdentificationValidationRequestAccountIdentification discriminator", () => {
    it("should resolve 'iban' to IbanAccountIdentification", () => {
        const type = ObjectSerializer.findCorrectType({ type: "iban" }, "BankAccountIdentificationValidationRequestAccountIdentification");
        expect(type).toBe("IbanAccountIdentification");
    });

    it("should resolve 'usLocal' to USLocalAccountIdentification", () => {
        const type = ObjectSerializer.findCorrectType({ type: "usLocal" }, "BankAccountIdentificationValidationRequestAccountIdentification");
        expect(type).toBe("USLocalAccountIdentification");
    });

    it("should resolve 'auLocal' to AULocalAccountIdentification", () => {
        const type = ObjectSerializer.findCorrectType({ type: "auLocal" }, "BankAccountIdentificationValidationRequestAccountIdentification");
        expect(type).toBe("AULocalAccountIdentification");
    });

    it("should deserialize an iban payload into IbanAccountIdentification", () => {
        const raw = { type: "iban", iban: "DE89370400440532013000" };
        const result = ObjectSerializer.deserialize(raw, "BankAccountIdentificationValidationRequestAccountIdentification") as IbanAccountIdentification;
        expect(result).toBeInstanceOf(IbanAccountIdentification);
        expect(result.iban).toBe("DE89370400440532013000");
        expect(result.type).toBe("iban");
    });

    it("should deserialize a usLocal payload into USLocalAccountIdentification", () => {
        const raw = { type: "usLocal", accountNumber: "987654321", routingNumber: "011000015" };
        const result = ObjectSerializer.deserialize(raw, "BankAccountIdentificationValidationRequestAccountIdentification") as USLocalAccountIdentification;
        expect(result).toBeInstanceOf(USLocalAccountIdentification);
        expect(result.accountNumber).toBe("987654321");
        expect(result.routingNumber).toBe("011000015");
    });
});

describe("ObjectSerializer - PaymentInstrumentAdditionalBankAccountIdentificationsInner discriminator", () => {
    it("should resolve 'iban' to IbanAccountIdentification", () => {
        const type = ObjectSerializer.findCorrectType({ type: "iban" }, "PaymentInstrumentAdditionalBankAccountIdentificationsInner");
        expect(type).toBe("IbanAccountIdentification");
    });

    it("should deserialize an iban payload into IbanAccountIdentification", () => {
        const raw = { type: "iban", iban: "FR7630006000011234567890189" };
        const result = ObjectSerializer.deserialize(raw, "PaymentInstrumentAdditionalBankAccountIdentificationsInner") as IbanAccountIdentification;
        expect(result).toBeInstanceOf(IbanAccountIdentification);
        expect(result.iban).toBe("FR7630006000011234567890189");
        expect(result.type).toBe("iban");
    });

    it("should round-trip an iban payload through serialize then deserialize", () => {
        const raw = { type: "iban", iban: "IT60X0542811101000000123456" };
        const instance = ObjectSerializer.deserialize(raw, "PaymentInstrumentAdditionalBankAccountIdentificationsInner") as IbanAccountIdentification;
        const serialized = ObjectSerializer.serialize(instance, "IbanAccountIdentification");
        const roundTripped = ObjectSerializer.deserialize(serialized, "PaymentInstrumentAdditionalBankAccountIdentificationsInner") as IbanAccountIdentification;
        expect(roundTripped.iban).toBe("IT60X0542811101000000123456");
    });
});

describe("ObjectSerializer - TransferRouteRequirementsInner discriminator", () => {
    it("should resolve 'addressRequirement' to AddressRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "addressRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("AddressRequirement");
    });

    it("should resolve 'amountMinMaxRequirement' to AmountMinMaxRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "amountMinMaxRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("AmountMinMaxRequirement");
    });

    it("should resolve 'amountNonZeroDecimalsRequirement' to AmountNonZeroDecimalsRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "amountNonZeroDecimalsRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("AmountNonZeroDecimalsRequirement");
    });

    it("should resolve 'bankAccountIdentificationTypeRequirement' to BankAccountIdentificationTypeRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "bankAccountIdentificationTypeRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("BankAccountIdentificationTypeRequirement");
    });

    it("should resolve 'ibanAccountIdentificationRequirement' to IbanAccountIdentificationRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "ibanAccountIdentificationRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("IbanAccountIdentificationRequirement");
    });

    it("should resolve 'paymentInstrumentRequirement' to PaymentInstrumentRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "paymentInstrumentRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("PaymentInstrumentRequirement");
    });

    it("should resolve 'usInstantPayoutAddressRequirement' to USInstantPayoutAddressRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "usInstantPayoutAddressRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("USInstantPayoutAddressRequirement");
    });

    it("should resolve 'usInternationalAchAddressRequirement' to USInternationalAchAddressRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "usInternationalAchAddressRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("USInternationalAchAddressRequirement");
    });

    it("should resolve 'usInternationalAchPriorityRequirement' to USInternationalAchPriorityRequirement", () => {
        const type = ObjectSerializer.findCorrectType({ type: "usInternationalAchPriorityRequirement" }, "TransferRouteRequirementsInner");
        expect(type).toBe("USInternationalAchPriorityRequirement");
    });

    it("should deserialize an addressRequirement payload into AddressRequirement", () => {
        const raw = { type: "addressRequirement", description: "Street address required", requiredAddressFields: ["line1", "postalCode"] };
        const result = ObjectSerializer.deserialize(raw, "TransferRouteRequirementsInner") as AddressRequirement;
        expect(result).toBeInstanceOf(AddressRequirement);
        expect(result.description).toBe("Street address required");
        expect(result.type).toBe("addressRequirement");
    });

    it("should deserialize an amountMinMaxRequirement payload into AmountMinMaxRequirement", () => {
        const raw = { type: "amountMinMaxRequirement", min: 100, max: 100000 };
        const result = ObjectSerializer.deserialize(raw, "TransferRouteRequirementsInner") as AmountMinMaxRequirement;
        expect(result).toBeInstanceOf(AmountMinMaxRequirement);
        expect(result.min).toBe(100);
        expect(result.max).toBe(100000);
        expect(result.type).toBe("amountMinMaxRequirement");
    });

    it("should deserialize an ibanAccountIdentificationRequirement payload into IbanAccountIdentificationRequirement", () => {
        const raw = { type: "ibanAccountIdentificationRequirement", ibanPrefixes: ["NL", "DE"], description: "IBAN prefix required" };
        const result = ObjectSerializer.deserialize(raw, "TransferRouteRequirementsInner") as IbanAccountIdentificationRequirement;
        expect(result).toBeInstanceOf(IbanAccountIdentificationRequirement);
        expect(result.ibanPrefixes).toEqual(["NL", "DE"]);
        expect(result.type).toBe("ibanAccountIdentificationRequirement");
    });

    it("should deserialize a paymentInstrumentRequirement payload into PaymentInstrumentRequirement", () => {
        const raw = { type: "paymentInstrumentRequirement", paymentInstrumentType: "BankAccount", issuingCountryCode: "NL" };
        const result = ObjectSerializer.deserialize(raw, "TransferRouteRequirementsInner") as PaymentInstrumentRequirement;
        expect(result).toBeInstanceOf(PaymentInstrumentRequirement);
        expect(result.paymentInstrumentType).toBe("BankAccount");
        expect(result.issuingCountryCode).toBe("NL");
        expect(result.type).toBe("paymentInstrumentRequirement");
    });

    it("should round-trip an amountMinMaxRequirement payload through serialize then deserialize", () => {
        const raw = { type: "amountMinMaxRequirement", min: 500, max: 50000 };
        const instance = ObjectSerializer.deserialize(raw, "TransferRouteRequirementsInner") as AmountMinMaxRequirement;
        const serialized = ObjectSerializer.serialize(instance, "AmountMinMaxRequirement");
        const roundTripped = ObjectSerializer.deserialize(serialized, "TransferRouteRequirementsInner") as AmountMinMaxRequirement;
        expect(roundTripped).toBeInstanceOf(AmountMinMaxRequirement);
        expect(roundTripped.min).toBe(500);
        expect(roundTripped.max).toBe(50000);
    });
});
