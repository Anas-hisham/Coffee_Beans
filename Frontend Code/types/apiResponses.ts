// types/apiResponses.ts
export type ApiStatus = "SUCCESS" | "FAIL" | "ERROR";

export interface RegisterResponse {
    status: ApiStatus;
    message: string;
}

export interface VerifyEmailResponse {
    status: ApiStatus;
    message: string;
}

export interface LoginResponse {
    status: ApiStatus;
    token: string;
    user: {
        fullName: string;
        email: string;
        role: string;
    };
}

export interface SendResetCodeResponse {
    status: ApiStatus;
    message: string;
}

export interface VerifyResetCodeResponse {
    status: ApiStatus;
    message: string;
}

export interface UpdatePasswordResponse {
    status: ApiStatus;
    message: string;
}
