import axios from "axios";
import { API_ENDPOINTS } from "../constants/index";
import {
    RegisterPayload,
    VerifyEmailPayload,
    LoginPayload,
    SendResetCodePayload,
    VerifyResetCodePayload,
    UpdatePasswordPayload,
} from "../../types/auth";

// Auth Services
export const authService = {
    register: (data: RegisterPayload) =>
        axios.post(API_ENDPOINTS.AUTH.REGISTER, data),

    verifyEmail: (data: VerifyEmailPayload) =>
        axios.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, data),

    login: (data: LoginPayload) =>
        axios.post(API_ENDPOINTS.AUTH.LOGIN, data),
};

// Email Services
export const emailService = {
    sendResetCode: (data: SendResetCodePayload) =>
        axios.post(API_ENDPOINTS.EMAIL.SEND_RESET_CODE, data),

    verifyResetCode: (data: VerifyResetCodePayload) =>
        axios.post(API_ENDPOINTS.EMAIL.VERIFY_RESET_CODE, data),

    updatePassword: (data: UpdatePasswordPayload) =>
        axios.post(API_ENDPOINTS.EMAIL.UPDATE_PASSWORD, data),
};
