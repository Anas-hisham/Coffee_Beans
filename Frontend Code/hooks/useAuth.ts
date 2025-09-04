import { useState } from "react";
import { authService, emailService } from "../services/api";
import {
    RegisterPayload,
    VerifyEmailPayload,
    LoginPayload,
    SendResetCodePayload,
    VerifyResetCodePayload,
    UpdatePasswordPayload,
} from "../types/auth";
import {
    RegisterResponse,
    VerifyEmailResponse,
    LoginResponse,
    SendResetCodeResponse,
    VerifyResetCodeResponse,
    UpdatePasswordResponse,
} from "../types/apiResponses";

export function useAuth() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleError = (err: unknown) => {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("Something went wrong");
        }
    };

    const register = async (data: RegisterPayload): Promise<RegisterResponse | undefined> => {
        try {
            setLoading(true);
            setError(null);
            const res = await authService.register(data);
            return res.data as RegisterResponse;
        } catch (err: unknown) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const verifyEmail = async (data: VerifyEmailPayload): Promise<VerifyEmailResponse | undefined> => {
        try {
            setLoading(true);
            setError(null);
            const res = await authService.verifyEmail(data);
            return res.data as VerifyEmailResponse;
        } catch (err: unknown) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const login = async (data: LoginPayload): Promise<LoginResponse | undefined> => {
        try {
            setLoading(true);
            setError(null);
            const res = await authService.login(data);
            return res.data as LoginResponse;
        } catch (err: unknown) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const sendResetCode = async (data: SendResetCodePayload): Promise<SendResetCodeResponse | undefined> => {
        try {
            setLoading(true);
            setError(null);
            const res = await emailService.sendResetCode(data);
            return res.data as SendResetCodeResponse;
        } catch (err: unknown) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const verifyResetCode = async (data: VerifyResetCodePayload): Promise<VerifyResetCodeResponse | undefined> => {
        try {
            setLoading(true);
            setError(null);
            const res = await emailService.verifyResetCode(data);
            return res.data as VerifyResetCodeResponse;
        } catch (err: unknown) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const updatePassword = async (data: UpdatePasswordPayload): Promise<UpdatePasswordResponse | undefined> => {
        try {
            setLoading(true);
            setError(null);
            const res = await emailService.updatePassword(data);
            return res.data as UpdatePasswordResponse;
        } catch (err: unknown) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        register,
        verifyEmail,
        login,
        sendResetCode,
        verifyResetCode,
        updatePassword,
    };
}
