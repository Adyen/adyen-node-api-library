import { ObjectSerializer, Result, ValidateShopperIdResponse } from "../typings/checkout/objectSerializer";

describe("ObjectSerializer - standalone enum (Result)", () => {

    it("should recognize Result as an enum type via findCorrectType", () => {
        const type = ObjectSerializer.findCorrectType(Result.Valid, "Result");
        expect(type).toBe("Result");
    });

    it("should serialize ValidateShopperIdResponse with a Result enum field", () => {
        const input: ValidateShopperIdResponse = new ValidateShopperIdResponse();
        input.result = Result.Valid;
        input.reason = "ok";

        const serialized = ObjectSerializer.serialize(input, "ValidateShopperIdResponse");

        expect(serialized).toHaveProperty("result", "VALID");
        expect(serialized).toHaveProperty("reason", "ok");
    });

    it("should deserialize a ValidateShopperIdResponse with a Result enum field", () => {
        const raw = { result: "VALID", reason: "ok" };

        const deserialized = ObjectSerializer.deserialize(raw, "ValidateShopperIdResponse") as ValidateShopperIdResponse;

        expect(deserialized.result).toBe("VALID");
        expect(deserialized.reason).toBe("ok");
    });

    it("should round-trip serialize then deserialize a Result enum value", () => {
        const input: ValidateShopperIdResponse = new ValidateShopperIdResponse();
        input.result = Result.Invalid;

        const serialized = ObjectSerializer.serialize(input, "ValidateShopperIdResponse");
        const deserialized = ObjectSerializer.deserialize(serialized, "ValidateShopperIdResponse") as ValidateShopperIdResponse;

        expect(deserialized.result).toBe(Result.Invalid);
    });
});
