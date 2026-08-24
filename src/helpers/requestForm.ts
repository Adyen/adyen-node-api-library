import FormData from "form-data";
import { URLSearchParams } from "url";
import { IRequest } from "../typings/requestOptions";

/**
 * Supported form encoders for multipart and URL-encoded requests.
 */
export type RequestForm = FormData | URLSearchParams;

/**
 * Removes headers by name using case-insensitive matching.
 *
 * @param headers - Headers to filter.
 * @param headerNames - Header names to remove.
 * @returns A copy without matching headers.
 */
export function removeHeaders(
    headers: IRequest.Options["headers"],
    headerNames: string[],
): NonNullable<IRequest.Options["headers"]> {
    const filteredHeaders: NonNullable<IRequest.Options["headers"]> = { ...headers };
    const normalizedNames = new Set(headerNames.map((headerName) => headerName.toLowerCase()));

    for (const headerName of Object.keys(filteredHeaders)) {
        if (normalizedNames.has(headerName.toLowerCase())) {
            delete filteredHeaders[headerName];
        }
    }

    return filteredHeaders;
}

/**
 * Creates a form encoder for the operation's supported content types.
 *
 * @param contentTypes - Media types accepted by the API operation.
 * @returns A multipart or URL-encoded form encoder.
 */
export function createRequestForm(contentTypes: string[]): RequestForm {
    const isMultipart = contentTypes.some(
        (contentType) => contentType.split(";", 1)[0].trim().toLowerCase() === "multipart/form-data"
    );

    return isMultipart ? new FormData() : new URLSearchParams();
}

/**
 * Serializes a form and merges its content headers with request headers.
 *
 * @param form - Form encoder containing the request fields.
 * @param requestHeaders - Optional caller-provided request headers.
 * @returns The serialized request body and headers required to send it.
 */
export function finalizeRequestForm(
    form: RequestForm,
    requestHeaders?: IRequest.Options["headers"],
): { request: string | Buffer; headers: IRequest.Options["headers"] } {
    const request = "getBuffer" in form ? form.getBuffer() : form.toString();
    const formHeaders = "getHeaders" in form
        ? form.getHeaders()
        : { "Content-Type": "application/x-www-form-urlencoded" };
    const filteredHeaders = removeHeaders(requestHeaders, ["Content-Type", "Content-Length"]);

    return {
        request,
        headers: {
            ...filteredHeaders,
            ...formHeaders,
            "Content-Length": Buffer.isBuffer(request) ? request.length : Buffer.byteLength(request),
        },
    };
}
