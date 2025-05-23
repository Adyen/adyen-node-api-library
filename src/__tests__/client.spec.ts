import Client from "../client";

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

  test("should set timeout", () => {
    const client = new Client({
      apiKey: "ADYEN_API_KEY",
      environment: "TEST"
    });

    client.setTimeouts(30000);
    expect(client.config.connectionTimeoutMillis).toBe(30000);
  });
});
