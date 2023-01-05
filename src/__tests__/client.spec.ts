import Client from "../client";

describe("API Client", function (): void {
    test("should be able to make a request using basic auth", async function (): Promise<void> {
        new Client({
            username: process.env.ADYEN_USER!,
            password: process.env.ADYEN_PASSWORD!,
            environment: "TEST"
        });
    });
});
