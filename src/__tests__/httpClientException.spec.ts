import { HttpClientException } from "../";

describe("HttpClientException", () => {
  it("should export HttpClientException as a class", () => {
    expect(typeof HttpClientException).toBe("function");

    const error = new HttpClientException({
      message: "Test error",
      statusCode: 422,
      responseBody: JSON.stringify({ status: 422, message: "Test error" }),
    });

    expect(error).toBeInstanceOf(HttpClientException);
    expect(error.statusCode).toBe(422);
  });
});
