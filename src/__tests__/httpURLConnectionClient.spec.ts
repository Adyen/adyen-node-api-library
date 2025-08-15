import HttpURLConnectionClient from "../httpClient/httpURLConnectionClient";

describe("HttpURLConnectionClient", () => {
    let client: HttpURLConnectionClient;

    beforeEach(() => {
        client = new HttpURLConnectionClient();
    });

    describe("verifyLocation", () => {
        test.each([
            "https://example.adyen.com/path",
            "https://sub.adyen.com",
            "http://another.adyen.com/a/b/c?q=1",
            "https://checkout-test.adyen.com",
        ])("should return true for valid adyen.com domain: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(true);
        });

        test.each([
            "https://example.ADYEN.com/path",
            "HTTPS://sub.adyen.COM",
        ])("should be case-insensitive for valid adyen.com domain: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(true);
        });

        test.each([
            "https://adyen.com.evil.com/path",
            "https://evil-adyen.com",
            "http://adyen.co",
            "https://www.google.com",
            "https://adyen.com-scam.com",
        ])("should return false for invalid domain: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(false);
        });

        test.each([
            "https://adyen.com.another.domain/path",
            "https://myadyen.com.org",
        ])("should return false for domains that contain but do not end with adyen.com: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(false);
        });

        test.each([
            "not a url",
            "adyen.com",
            "//adyen.com/path",
        ])("should return false for malformed URLs: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(false);
        });
    });
});
