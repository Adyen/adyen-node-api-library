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
        expect(() => service.testCreateBaseUrl("https://pal-test.adyen.com/pal/servlet/"))
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
        expect(() => service.testCreateBaseUrl("https://pal-test.adyen.com/pal/servlet/"))
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

    it("should throw error if liveEndpointUrlPrefix is empty for possdk", () => {
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
        expect(() => service.testCreateBaseUrl("https://checkout-test.adyen.com/possdk/v68"))
            .toThrow("Live endpoint URL prefix must be provided for LIVE environment.");
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

    // SessionAuthentication
    it("should build TEST url for SessionAuthentication", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://test.adyen.com/authe/api/v1";
        expect(service.testCreateBaseUrl(url)).toBe("https://test.adyen.com/authe/api/v1");
    });

    it("should build LIVE url for SessionAuthentication", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://test.adyen.com/authe/api/v1";
        expect(service.testCreateBaseUrl(url)).toBe("https://authe-live.adyen.com/authe/api/v1");
    });

    // LEM
    it("should build TEST url for LEM", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://kyc-test.adyen.com/lem/v4";
        expect(service.testCreateBaseUrl(url)).toBe("https://kyc-test.adyen.com/lem/v4");
    });

    it("should build LIVE url for LEM", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://kyc-test.adyen.com/lem/v4";
        expect(service.testCreateBaseUrl(url)).toBe("https://kyc-live.adyen.com/lem/v4");
    });

    // BalancePlatform
    it("should build TEST url for BalancePlatform", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://balanceplatform-api-test.adyen.com/bcl/v2";
        expect(service.testCreateBaseUrl(url)).toBe("https://balanceplatform-api-test.adyen.com/bcl/v2");
    });

    it("should build LIVE url for BalancePlatform", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://balanceplatform-api-test.adyen.com/bcl/v2";
        expect(service.testCreateBaseUrl(url)).toBe("https://balanceplatform-api-live.adyen.com/bcl/v2");
    });

    // Management
    it("should build TEST url for Management", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://management-test.adyen.com/v3";
        expect(service.testCreateBaseUrl(url)).toBe("https://management-test.adyen.com/v3");
    });

    it("should build LIVE url for Management", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://management-test.adyen.com/v3";
        expect(service.testCreateBaseUrl(url)).toBe("https://management-live.adyen.com/v3");
    });

    // Transfers
    it("should build TEST url for Transfers", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://balanceplatform-api-test.adyen.com/btl/v4";
        expect(service.testCreateBaseUrl(url)).toBe("https://balanceplatform-api-test.adyen.com/btl/v4");
    });

    it("should build LIVE url for Transfers", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://balanceplatform-api-test.adyen.com/btl/v4";
        expect(service.testCreateBaseUrl(url)).toBe("https://balanceplatform-api-live.adyen.com/btl/v4");
    });

    // BinLookup
    it("should build TEST url for BinLookup", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://pal-test.adyen.com/pal/servlet/BinLookup/v54";
        expect(service.testCreateBaseUrl(url)).toBe("https://pal-test.adyen.com/pal/servlet/BinLookup/v54");
    });

    it("should build LIVE url for BinLookup", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://pal-test.adyen.com/pal/servlet/BinLookup/v54";
        expect(service.testCreateBaseUrl(url)).toBe("https://mycompany-pal-live.adyenpayments.com/pal/servlet/BinLookup/v54");
    });

    it("should throw error if liveEndpointUrlPrefix is empty for BinLookup", () => {
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
        expect(() => service.testCreateBaseUrl("https://pal-test.adyen.com/pal/servlet/BinLookup/v54"))
            .toThrow("Live endpoint URL prefix must be provided for LIVE environment.");
    });

    // Payout
    it("should build TEST url for Payout", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://pal-test.adyen.com/pal/servlet/Payout/v68";
        expect(service.testCreateBaseUrl(url)).toBe("https://pal-test.adyen.com/pal/servlet/Payout/v68");
    });

    it("should build LIVE url for Payout", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://pal-test.adyen.com/pal/servlet/Payout/v68";
        expect(service.testCreateBaseUrl(url)).toBe("https://mycompany-pal-live.adyenpayments.com/pal/servlet/Payout/v68");
    });

    it("should throw error if liveEndpointUrlPrefix is empty for Payout", () => {
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
        expect(() => service.testCreateBaseUrl("https://pal-test.adyen.com/pal/servlet/Payout/v68"))
            .toThrow("Live endpoint URL prefix must be provided for LIVE environment.");
    });

    // Recurring
    it("should build TEST url for Recurring", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://pal-test.adyen.com/pal/servlet/Recurring/v68";
        expect(service.testCreateBaseUrl(url)).toBe("https://pal-test.adyen.com/pal/servlet/Recurring/v68");
    });

    it("should build LIVE url for Recurring", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE,
            liveEndpointUrlPrefix: "mycompany"
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://pal-test.adyen.com/pal/servlet/Recurring/v68";
        expect(service.testCreateBaseUrl(url)).toBe("https://mycompany-pal-live.adyenpayments.com/pal/servlet/Recurring/v68");
    });

    it("should throw error if liveEndpointUrlPrefix is empty for Recurring", () => {
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
        expect(() => service.testCreateBaseUrl("https://pal-test.adyen.com/pal/servlet/Recurring/v68"))
            .toThrow("Live endpoint URL prefix must be provided for LIVE environment.");
    });

    // Open Banking
    it("should build TEST url for Open Banking", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.TEST
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://obgateway-test.adyen.com/obgateway/v1";
        expect(service.testCreateBaseUrl(url)).toBe("https://obgateway-test.adyen.com/obgateway/v1");
    });

    it("should build LIVE url for Open Banking", () => {
        const config = new Config({
            apiKey: "test_key",
            environment: EnvironmentEnum.LIVE
        });
        client = new Client(config);

        const service = new TestService(client);
        const url = "https://obgateway-test.adyen.com/obgateway/v1";
        expect(service.testCreateBaseUrl(url)).toBe("https://obgateway-live.adyen.com/obgateway/v1");
    });


});  