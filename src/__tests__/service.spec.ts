import Service from "../service";
import Client from "../client";
import Config, { EnvironmentEnum } from "../config";

class TestService extends Service {
    public constructor(client: Client) {
        super(client);
    }
    public testCreateBaseUrl(url: string): string {
        return this.createBaseUrl(url);
    }
}

describe("Service", () => {
    let client: Client;

    beforeEach(() => {
        // Default config for each test
        client = new Client(new Config({
            environment: EnvironmentEnum.TEST
        }));
    });

    it("should replace -live with -test for non-LIVE environments", () => {
        const service = new TestService(client);
        const url = "https://pal-live.adyen.com/pal/servlet/";
        expect(service.testCreateBaseUrl(url)).toBe("https://pal-test.adyen.com/pal/servlet/");
    });

    it("should throw error if liveEndpointUrlPrefix is undefined in LIVE environment", () => {
        // create Client for TEST environment without liveEndpointUrlPrefix
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);
        // change to LIVE
        client.config.environment = EnvironmentEnum.LIVE;

        const service = new TestService(client);
        expect(() => service.testCreateBaseUrl("https://pal-live.adyen.com/pal/servlet/"))
            .toThrow("Live endpoint URL prefix must be provided for LIVE environment.");
    });

    it("should throw error if liveEndpointUrlPrefix is empty for pal- URLs", () => {
        // create Client for TEST environment without liveEndpointUrlPrefix
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST,
            liveEndpointUrlPrefix: ""
        });
        client = new Client(config);
        // change to LIVE
        client.config.environment = EnvironmentEnum.LIVE;

        const service = new TestService(client);
        expect(() => service.testCreateBaseUrl("https://pal-live.adyen.com/pal/servlet/"))
            .toThrow("Live endpoint URL prefix must be provided for LIVE environment.");
    });

    it("should replace pal-test with pal-live using liveEndpointUrlPrefix", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://pal-test.adyen.com/pal/servlet/";
        expect(service.testCreateBaseUrl(url)).toBe(
            "https://mycompany-pal-live.adyenpayments.com/pal/servlet/"
        );
    });

    it("should throw error if liveEndpointUrlPrefix is empty for checkout- URLs", () => {
        // create Client for TEST environment without liveEndpointUrlPrefix
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST,
            liveEndpointUrlPrefix: ""
        });
        client = new Client(config);
        // change to LIVE
        client.config.environment = EnvironmentEnum.LIVE;

        const service = new TestService(client);
        expect(() => service.testCreateBaseUrl("https://checkout-test.adyen.com/"))
            .toThrow("Live endpoint URL prefix must be provided for LIVE environment.");
    });

    it("should replace checkout-test with checkout-live using liveEndpointUrlPrefix", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://checkout-test.adyen.com/";
        expect(service.testCreateBaseUrl(url)).toBe(
            "https://mycompany-checkout-live.adyenpayments.com/checkout/"
        );
    });

    it("should replace checkout-test with checkout-live for possdk/v68 using liveEndpointUrlPrefix", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://checkout-test.adyen.com/possdk/v68";
        expect(service.testCreateBaseUrl(url)).toBe(
            "https://mycompany-checkout-live.adyenpayments.com/possdk/v68"
        );
    });

    it("should replace -test with -live for other URLs", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://some-test.adyen.com/api/";
        expect(service.testCreateBaseUrl(url)).toBe("https://some-live.adyen.com/api/");
    });

    it("should build TEST url for SessionAuthentication", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://test.adyen.com/authe/api/v1";
        expect(service.testCreateBaseUrl(url)).toBe("https://test.adyen.com/authe/api/v1");
    });

    it("should build LIVE url for SessionAuthentication", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://test.adyen.com/authe/api/v1";
        expect(service.testCreateBaseUrl(url)).toBe("https://authe-live.adyen.com/authe/api/v1");
    });

});  