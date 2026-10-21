import {
    IssuedCard,
    Modification,
    NetworkReason,
    ObjectSerializer,
    TransferData,
    TransferEvent
} from "../typings/transferWebhooks/objectSerializer";

describe("TransferWebhooks ObjectSerializer", (): void => {
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

    test("should deserialize a transferData with reversalReceived, fxSell, and usAchCorrectionReasonCode values", (): void => {
        const raw = {
            id: "test-transfer-id",
            amount: { currency: "EUR", value: 1000 },
            category: "bank",
            status: "reversalReceived",
            type: "fxSell",
            networkReason: {
                code: "C01",
                description: "ACH correction requested",
                namespace: "usAchCorrectionReasonCode"
            },
            events: [{
                id: "EVT00000000000000000000001",
                status: "reversalReceived",
                type: "tracing",
                modification: {
                    id: "MOD00000000000000000000001",
                    direction: "outgoing",
                    status: "reversalReceived",
                    type: "captureReversal"
                }
            }]
        };

        const deserialized = ObjectSerializer.deserialize(raw, "TransferData") as TransferData;

        expect(deserialized).toBeInstanceOf(TransferData);
        expect(deserialized.status).toBe(TransferData.StatusEnum.ReversalReceived);
        expect(deserialized.type).toBe(TransferData.TypeEnum.FxSell);
        expect(deserialized.networkReason).toBeInstanceOf(NetworkReason);
        expect(deserialized.networkReason?.namespace).toBe(NetworkReason.NamespaceEnum.UsAchCorrectionReasonCode);

        const event = deserialized.events?.[0];
        expect(event).toBeInstanceOf(TransferEvent);
        expect(event?.status).toBe(TransferEvent.StatusEnum.ReversalReceived);
        expect(event?.type).toBe(TransferEvent.TypeEnum.Tracing);
        expect(event?.modification).toBeInstanceOf(Modification);
        expect(event?.modification?.status).toBe(Modification.StatusEnum.ReversalReceived);
    });

    test("should round-trip a transferEvent with the reversalReceived status", (): void => {
        const event = new TransferEvent();
        event.status = TransferEvent.StatusEnum.ReversalReceived;
        event.type = TransferEvent.TypeEnum.Tracing;

        const serialized = ObjectSerializer.serialize(event, "TransferEvent");
        expect(serialized).toHaveProperty("status", "reversalReceived");
        expect(serialized).toHaveProperty("type", "tracing");

        const deserialized = ObjectSerializer.deserialize(serialized, "TransferEvent") as TransferEvent;
        expect(deserialized.status).toBe(TransferEvent.StatusEnum.ReversalReceived);
        expect(deserialized.type).toBe(TransferEvent.TypeEnum.Tracing);
    });
});
