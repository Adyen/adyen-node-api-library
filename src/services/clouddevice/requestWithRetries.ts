import getJsonResponse from "../../helpers/getJsonResponse";
import Resource from "../resource";
import { IRequest } from "../../typings/requestOptions";
import ApiException from "../exception/apiException";

const MAX_CLOUD_DEVICE_RETRIES = 3;

const isRetryableTransportError = (error: unknown): boolean => {
    if (!(error instanceof ApiException)) {
        return false;
    }

    return error.code === "ECONNRESET" || error.message.includes("socket hang up");
};

export default async function requestWithRetries<T, R>(
    resource: Resource,
    requestBody: string,
    requestOptions: IRequest.Options = {},
): Promise<R> {
    const { retries = 0, ...httpOptions } = requestOptions;
    const retryLimit = Number.isFinite(retries)
        ? Math.min(MAX_CLOUD_DEVICE_RETRIES, Math.max(0, Math.floor(retries)))
        : 0;

    for (let attempt = 0; ; attempt++) {
        try {
            return await getJsonResponse<T, R>(resource, requestBody, httpOptions);
        } catch (error) {
            if (attempt >= retryLimit || !isRetryableTransportError(error)) {
                throw error;
            }
        }
    }
}
