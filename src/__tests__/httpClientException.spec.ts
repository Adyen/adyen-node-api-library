import { HttpClientException } from "../"; 

describe("HttpClientException", () => {
  it("should export HttpClientException as a class", () => {
    expect(typeof HttpClientException).toBe("function");

    const error = new HttpClientException({
                    message: `HTTP Exception: `,
                    statusCode: 422,
                    errorCode: undefined,
                    responseHeaders: undefined,
                    responseBody: "{\"status\": 422, \"message\": \"Test error\"}",
                });

    expect(error).toBeInstanceOf(HttpClientException);
    expect(error.statusCode).toBe(422);
  });
});
