import {
    IssuedCard,
    ObjectSerializer
} from "../typings/transactionWebhooks/objectSerializer";

describe("TransactionWebhooks ObjectSerializer", (): void => {
    test("should recognize IssuedCard.NetworkVariantEnum as an enum type", (): void => {
        const type = ObjectSerializer.findCorrectType(IssuedCard.NetworkVariantEnum.MaestroUs, "IssuedCard.NetworkVariantEnum");
        expect(type).toBe("IssuedCard.NetworkVariantEnum");
    });

    test("should map each networkVariant wire value to its enum member", (): void => {
        const cases: Array<[string, IssuedCard.NetworkVariantEnum]> = [
            ["maestro_us", IssuedCard.NetworkVariantEnum.MaestroUs],
            ["mastercard", IssuedCard.NetworkVariantEnum.Mastercard],
            ["visa", IssuedCard.NetworkVariantEnum.Visa]
        ];
        for (const [wireValue, expectedEnum] of cases) {
            const deserialized = ObjectSerializer.deserialize({ networkVariant: wireValue }, "IssuedCard") as IssuedCard;
            expect(deserialized).toBeInstanceOf(IssuedCard);
            expect(deserialized.networkVariant).toBe(expectedEnum);
        }
    });

    test("should pass through an unknown networkVariant value instead of throwing", (): void => {
        const deserialized = ObjectSerializer.deserialize({ networkVariant: "unknownVariant" }, "IssuedCard") as IssuedCard;
        expect(deserialized.networkVariant).toBe("unknownVariant");
    });

    test("should serialize an issuedCard including its networkVariant", (): void => {
        const issuedCard = new IssuedCard();
        issuedCard.networkVariant = IssuedCard.NetworkVariantEnum.Visa;
        issuedCard.panEntryMode = IssuedCard.PanEntryModeEnum.Contactless;

        const serialized = ObjectSerializer.serialize(issuedCard, "IssuedCard");

        expect(serialized).toHaveProperty("networkVariant", "visa");
        expect(serialized).toHaveProperty("panEntryMode", "contactless");
    });
});
