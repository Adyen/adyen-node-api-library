import { globalAgent } from "node:https";
import HttpURLConnectionClient from "../httpClient/httpURLConnectionClient";
import HttpClientException from "../httpClient/httpClientException";

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
      "https://custom-url.adyenpayments.com",
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

  test.each(["not a url", "adyen.com", "//adyen.com/path"])(
    "should return false for malformed URLs: %s",
    (location) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - testing a private method
      expect(client.verifyLocation(location)).toBe(false);
    }
  );
});

describe("selectAgent", () => {
  it("returns globalAgent if terminalCertificatePath is undefined", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(client.selectAgent()).toBe(globalAgent);
  });

  it("returns new Agent if terminalCertificatePath is 'unencrypted'", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    const agent = client.selectAgent("unencrypted");
    expect(agent.options.keepAlive).toBe(true);
    expect(agent.options.scheduling).toBe("lifo");
    expect(agent.options.timeout).toBe(5000);
    expect(agent.options.rejectUnauthorized).toBe(false);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(Object.keys(client.agents).length).toBe(1);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(Object.keys(client.agents).at(0)).toBe("unencrypted");
  });

  it("returns new Agent if terminalCertificatePath is 'path/to/this/file'", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    const agent = client.selectAgent(__filename);
    expect(agent.options.keepAlive).toBe(true);
    expect(agent.options.scheduling).toBe("lifo");
    expect(agent.options.timeout).toBe(5000);
    expect(agent.options.ca).toBeDefined();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(Object.keys(client.agents).length).toBe(1);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(Object.keys(client.agents).at(0)).toBe(__filename);
  });

  it("returns already existing Agent if terminalCertificatePath is asked twice", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    const agent = client.selectAgent(__filename); // create and store an agent
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    const agent2 = client.selectAgent(__filename); // should return the one already in memory

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(Object.keys(client.agents).length).toBe(1);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(Object.keys(client.agents).at(0)).toBe(__filename);

    expect(agent).toBe(agent2);
  });

  it("throw an error if terminalCertificatePath is not a valid path", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(() => client.selectAgent("/invalid/path")).toThrow(
      HttpClientException
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - testing a private method
    expect(Object.keys(client.agents).length).toBe(0);
  });

});
