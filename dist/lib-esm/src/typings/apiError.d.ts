export interface ApiError {
    status?: number;
    errorCode?: string;
    message?: string;
    errorType?: string;
    pspReference?: string;
}
