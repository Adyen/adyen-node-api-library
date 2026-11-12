import nock from "nock";
import Client from "../client";
import Config, { EnvironmentEnum, RegionEnum, TERMINAL_API_ENDPOINTS_MAP } from "../config";
import Service from "../service";
import { CloudDeviceApi } from "../services/clouddevice/cloudDeviceApi";
import SoftPOSConfigurationAPI from "../services/softPOSConfiguration";

class TestService extends Service {
    public constructor(client: Client) {
        super(client);
    }

    public testCreateBaseUrl(url: string): string {
        return this.createBaseUrl(url);
    }
}

const regions: [RegionEnum | undefined, string][] = [
    [undefined, ""],
    [RegionEnum.EU, ""],
    [RegionEnum.AU, "-au"],
    [RegionEnum.US, "-us"],
    [RegionEnum.APSE, "-apse"],
    [RegionEnum.NEA, "-nea"],
];

describe("Regional URL templates", () => {
    test.each(regions)("formats regional hosts for %s", (region, suffix) => {
        for (const host of ["terminal-api", "device-api", "softposconfig"]) {
            expect(Config.getRegionalLiveUrl(host, region))
                .toBe(`https://${host}-live${suffix}.adyen.com`);
        }
    });

    test("defaults a null region to EU", () => {
        expect(Config.getRegionalLiveUrl("softposconfig", null)).toBe("https://softposconfig-live.adyen.com");
    });

    test("preserves full URLs in the exported Terminal API map", () => {
        expect(TERMINAL_API_ENDPOINTS_MAP).toEqual({
            EU: "https://terminal-api-live.adyen.com",
            AU: "https://terminal-api-live-au.adyen.com",
            US: "https://terminal-api-live-us.adyen.com",
            APSE: "https://terminal-api-live-apse.adyen.com",
            NEA: "https://terminal-api-live-nea.adyen.com",
        });
    });

    test.each(regions)("returns the Terminal API endpoint for %s", (region, suffix) => {
        expect(Config.getTerminalApiEndpoint(region as RegionEnum))
            .toBe(`https://terminal-api-live${suffix}.adyen.com`);
    });

    test("preserves the EU fallback for invalid Terminal API regions", () => {
        expect(Config.getTerminalApiEndpoint("INVALID" as RegionEnum)).toBe("https://terminal-api-live.adyen.com");
    });
});

describe.each(["device-api", "softposconfig"])("%s regional routing", (host) => {
    test.each(regions)("routes LIVE requests for region %s", (region, suffix) => {
        const client = new Client(new Config({ environment: EnvironmentEnum.LIVE, region }));
        const service = new TestService(client);

        expect(service.testCreateBaseUrl(`https://${host}-test.adyen.com/api/v3?key=value`))
            .toBe(`https://${host}-live${suffix}.adyen.com/api/v3?key=value`);
        expect(service.testCreateBaseUrl(`https://${host}-test.adyen.com`))
            .toBe(`https://${host}-live${suffix}.adyen.com`);
    });

    test.each(regions)("keeps the shared TEST endpoint for region %s", (region) => {
        const client = new Client(new Config({ environment: EnvironmentEnum.TEST, region }));
        const service = new TestService(client);
        const url = `https://${host}-test.adyen.com/api/v3`;

        expect(service.testCreateBaseUrl(url)).toBe(url);
    });
});

describe("Non-regional routing", () => {
    test.each([
        ["https://management-test.adyen.com/v3", "https://management-live.adyen.com/v3"],
        ["https://balanceplatform-api-test.adyen.com/bcl/v2", "https://balanceplatform-api-live.adyen.com/bcl/v2"],
        ["https://proxy-test.example.com/softposconfig/v3", "https://proxy-live.example.com/softposconfig/v3"],
        ["https://device-api-test.adyen.com.example.com/v1", "https://device-api-live.adyen.com.example.com/v1"],
        ["https://softposconfig-test.adyen.com.example.com/v3", "https://softposconfig-live.adyen.com.example.com/v3"],
        ["https://proxy.example.com/https://softposconfig-test.adyen.com/v3",
            "https://proxy.example.com/https://softposconfig-live.adyen.com/v3"],
    ])("preserves generic replacement for %s", (url, expected) => {
        const service = new TestService(new Client({
            environment: EnvironmentEnum.LIVE,
            region: RegionEnum.US,
        }));

        expect(service.testCreateBaseUrl(url)).toBe(expected);
    });
});

describe("Regional API requests", () => {
    beforeAll(() => {
        nock.disableNetConnect();
    });

    afterAll(() => {
        nock.enableNetConnect();
    });

    beforeEach(() => {
        if (!nock.isActive()) {
            nock.activate();
        }
    });

    afterEach(() => {
        nock.cleanAll();
    });

    test.each(regions)("sends SoftPOS certificate requests to the LIVE endpoint for %s", async (region, suffix) => {
        const api = new SoftPOSConfigurationAPI(new Client({
            environment: EnvironmentEnum.LIVE,
            apiKey: "test-api-key",
            region,
        }));
        const request = { merchantAccount: "YOUR_MERCHANT_ACCOUNT", setupToken: "SETUP_TOKEN" };
        const scope = nock(`https://softposconfig-live${suffix}.adyen.com`)
            .post("/softposconfig/v3/auth/certificate", request)
            .reply(201, { sdkData: "SDK_DATA" });

        const response = await api.SessionAuthenticationApi.issueCertificates(request);

        expect(response.sdkData).toBe("SDK_DATA");
        expect(scope.isDone()).toBe(true);
    });

    test.each(regions)("sends Cloud Device requests to the LIVE endpoint for %s", async (region, suffix) => {
        const api = new CloudDeviceApi(new Client({
            environment: EnvironmentEnum.LIVE,
            apiKey: "test-api-key",
            region,
        }));
        const scope = nock(`https://device-api-live${suffix}.adyen.com`)
            .get("/v1/merchants/YOUR_MERCHANT_ACCOUNT/connectedDevices")
            .reply(200, { devices: [] });

        await api.getConnectedDevices("YOUR_MERCHANT_ACCOUNT");

        expect(scope.isDone()).toBe(true);
    });
});

describe("NEA configuration", () => {
    test("supports the NEA Terminal API LIVE endpoint", () => {
        const region = RegionEnum.NEA;
        expect(Config.isRegionValid(region)).toBe(true);
        expect(Config.getTerminalApiEndpoint(region)).toBe("https://terminal-api-live-nea.adyen.com");
        const client = new Client(new Config({ environment: EnvironmentEnum.LIVE, region }));
        expect(client.config.terminalApiCloudEndpoint).toBe("https://terminal-api-live-nea.adyen.com");
    });

    test("keeps the shared Terminal API TEST endpoint for NEA", () => {
        const client = new Client({ environment: EnvironmentEnum.TEST, region: RegionEnum.NEA });
        expect(client.config.terminalApiCloudEndpoint).toBe("https://terminal-api-test.adyen.com");
    });
});
