import Client from "../client";
import Config, { RegionEnum } from "../config";

describe("API Client", function (): void {
  test("should be able to make a request using basic auth", async function (): Promise<void> {
    new Client({
        username: process.env.ADYEN_USER!,
        password: process.env.ADYEN_PASSWORD!,
        environment: "TEST"
    });
  });

  test("should create client with API key", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: "TEST"
    });

    expect(client.config.apiKey).toBe("ADYEN_API_KEY");
    expect(client.config.environment).toBe("TEST");
    expect(client.config.marketPayEndpoint).toBe(Client.MARKETPAY_ENDPOINT_TEST);
  });

  test("should create client with basic auth credentials", () => {
    const client = new Client({
      username: "username",
      password: "password",
      environment: "TEST"
    });

    expect(client.config.username).toBe("username");
    expect(client.config.password).toBe("password");
    expect(client.config.environment).toBe("TEST");
  });

  test("should set application name", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: "TEST",
      applicationName: "my_application_name"
    });

    expect(client.config.applicationName).toBe("my_application_name");
  });

  test("should define timeout in Config", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: "TEST",
      connectionTimeoutMillis: 30000
    });

    expect(client.config.connectionTimeoutMillis).toBe(30000);
  });

  test("should set timeout", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: "TEST"
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
      environment: "LIVE",
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
      environment: "TEST"
    });
    const client = new Client(config);
    expect(client.config.terminalApiCloudEndpoint).toBeDefined();
    expect(client.config.terminalApiCloudEndpoint).toBe("https://terminal-api-test.adyen.com");
  });

  test("should set terminalApiCloudEndpoint for LIVE region", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: "LIVE",
      region: RegionEnum.US,
      liveEndpointUrlPrefix: "prefix"
    });
    const client = new Client(config);
    expect(client.config.terminalApiCloudEndpoint).toBeDefined();
    expect(client.config.terminalApiCloudEndpoint).toBe("https://terminal-api-us.adyen.com");
  });

  test("should throw error if liveEndpointUrlPrefix is missing in LIVE environment", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: "LIVE"
    });
    expect(() => {
      new Client(config);
    }).toThrow("Live endpoint URL prefix must be provided for LIVE environment.");
  });

  test("should set and get custom http client", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: "TEST"
    });
    const client = new Client(config);
    const mockHttpClient = { request: jest.fn() };
    client.httpClient = mockHttpClient as any;
    expect(client.httpClient).toBe(mockHttpClient);
  });

  test("should set application name via setApplicationName", () => {
    const config = new Config({
      apiKey: "ADYEN_API_KEY",
      environment: "TEST"
    });
    const client = new Client(config);
    client.setApplicationName("test_app");
    expect(client.config.applicationName).toBe("test_app");
  });
});
