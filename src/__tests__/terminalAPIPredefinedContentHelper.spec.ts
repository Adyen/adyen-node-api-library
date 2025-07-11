import { PredefinedContentHelper, DisplayNotificationEvent } from "../typings/terminal/predefinedContentHelper";

describe("PredefinedContentHelper", () => {
    it("should extract a valid event", () => {
        
        const ReferenceID = "TransactionID=oLkO001517998574000&TimeStamp=2018-02-07T10%3a16%3a14.000Z&event=PIN_ENTERED";
        
        const helper = new PredefinedContentHelper(ReferenceID);
        expect(helper.getEvent()).toBe(DisplayNotificationEvent.PIN_ENTERED);
    });

    it("should return null for an invalid event", () => {
        const helper = new PredefinedContentHelper("event=INVALID_EVENT");
        expect(helper.getEvent()).toBeNull();
    });

    it("should extract TransactionID", () => {
        const helper = new PredefinedContentHelper("TransactionID=12345&TimeStamp=2018-02-07T10%3a16%3a14.000Z&event=PIN_ENTERED");
        expect(helper.getTransactionId()).toBe("12345");
    });

    it("should extract TimeStamp", () => {
        const helper = new PredefinedContentHelper("TimeStamp=2024-07-11T12:00:00Z");
        expect(helper.getTimeStamp()).toBe("2024-07-11T12:00:00Z");
    });

    it("should extract arbitrary key", () => {
        const helper = new PredefinedContentHelper("foo=bar&baz=qux");
        expect(helper.get("foo")).toBe("bar");
        expect(helper.get("baz")).toBe("qux");
        expect(helper.get("missing")).toBeNull();
    });

    it("should convert params to object", () => {
        const helper = new PredefinedContentHelper("a=1&b=2&event=WAIT_FOR_PIN");
        expect(helper.toObject()).toEqual({ a: "1", b: "2", event: "WAIT_FOR_PIN" });
    });

    it("should handle empty referenceId", () => {
        const helper = new PredefinedContentHelper("");
        expect(helper.getEvent()).toBeNull();
        expect(helper.getTransactionId()).toBeNull();
        expect(helper.getTimeStamp()).toBeNull();
        expect(helper.toObject()).toEqual({});
    });
});