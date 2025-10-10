import Client from "../client";
import Config, { EnvironmentEnum, RegionEnum } from "../config";

describe("API Client", function (): void {
  test("should be able to make a request using basic auth", async function (): Promise<void> {
    new Client({
        username: process.env.ADYEN_USER!,
        password: process.env.ADYEN_PASSWORD!,
        environment: EnvironmentEnum.TEST
    });
  });

  test("should create client with API key", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.TEST
    });

    expect(client.config.apiKey).toBe("ADYEN_API_KEY");
    expect(client.config.environment).toBe(EnvironmentEnum.TEST);
    expect(client.config.environment).toBe("TEST");
    expect(client.config.marketPayEndpoint).toBe(Client.MARKETPAY_ENDPOINT_TEST);
  });

  test("should create client with basic auth credentials", () => {
    const client = new Client({
      username: "username",
      password: "password",
      environment: EnvironmentEnum.TEST
    });

    expect(client.config.username).toBe("username");
    expect(client.config.password).toBe("password");
    expect(client.config.environment).toBe(EnvironmentEnum.TEST);
  });

  test("should set application name", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.TEST,
      applicationName: "my_application_name"
    });

    expect(client.config.applicationName).toBe("my_application_name");
  });

  test("should define timeout in Config", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.TEST,
      connectionTimeoutMillis: 30000
    });

    expect(client.config.connectionTimeoutMillis).toBe(30000);
  });

  test("should set timeout", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.TEST
    });

    client.setTimeouts(30000);
    expect(client.config.connectionTimeoutMillis).toBe(30000);
  });

  test("should throw error if environment is not defined", () => {
    expect(() => {
      new Client({ apiKey: "ADYEN_API_KEY" } as any);
    }).toThrow("Environment must be defined");
  });

  test("should throw error if environment is LIVE and region is invalid", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.LIVE,
      region: "INVALID" as RegionEnum,
      liveEndpointUrlPrefix: "prefix"
    });
    expect(() => {
      new Client(config);
    }).toThrow("Invalid region provided: INVALID");
  });

  test("should set terminalApiCloudEndpoint for TEST region", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.TEST
    });
    const client = new Client(config);
    expect(client.config.terminalApiCloudEndpoint).toBeDefined();
    expect(client.config.terminalApiCloudEndpoint).toBe("https://terminal-api-test.adyen.com");
  });

  test("should set terminalApiCloudEndpoint for LIVE region", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.LIVE,
      region: RegionEnum.US,
      liveEndpointUrlPrefix: "prefix"
    });
    const client = new Client(config);
    expect(client.config.terminalApiCloudEndpoint).toBeDefined();
    expect(client.config.terminalApiCloudEndpoint).toBe("https://terminal-api-live-us.adyen.com");
  });

  test("should set and get custom http client", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.TEST
    });
    const client = new Client(config);
    const mockHttpClient = { request: jest.fn() };
    client.httpClient = mockHttpClient as any;
    expect(client.httpClient).toBe(mockHttpClient);
  });

  test("should set application name via setApplicationName", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: EnvironmentEnum.TEST
    });
    const client = new Client(config);
    client.setApplicationName("test_app");
    expect(client.config.applicationName).toBe("test_app");
  });

  test("should return true for valid environments", () => {
    expect(Config.isEnvironmentValid(EnvironmentEnum.LIVE)).toBe(true);
    expect(Config.isEnvironmentValid(EnvironmentEnum.TEST)).toBe(true);
  });

  test("should return false for invalid environments", () => {
    // @ts-expect-error purposely passing invalid value
    expect(Config.isEnvironmentValid("INVALID")).toBe(false);
    // @ts-expect-error purposely passing undefined
    expect(Config.isEnvironmentValid(undefined)).toBe(false);
    // @ts-expect-error purposely passing null
    expect(Config.isEnvironmentValid(null)).toBe(false);
  });

  test("should return true for valid regions", () => {
    expect(Config.isRegionValid(RegionEnum.EU)).toBe(true);
    expect(Config.isRegionValid(RegionEnum.AU)).toBe(true);
    expect(Config.isRegionValid(RegionEnum.US)).toBe(true);
    expect(Config.isRegionValid(RegionEnum.APSE)).toBe(true);
  });

  test("should return false for invalid regions", () => {
    // @ts-expect-error purposely passing invalid value
    expect(Config.isRegionValid("INVALID")).toBe(false);
    // @ts-expect-error purposely passing undefined
    expect(Config.isRegionValid(undefined)).toBe(false);
    // @ts-expect-error purposely passing null
    expect(Config.isRegionValid(null)).toBe(false);
  });

});
