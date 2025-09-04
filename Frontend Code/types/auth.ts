export type RegisterPayload = {
    fullName: string;
    email: string;
    password: string;
    role?: "user" | "admin";
    sendEmailsAgreement: boolean;
};

export type VerifyEmailPayload = {
    email: string;
    code: string;
};

export type LoginPayload = {
    email: string;
    password: string;
    remember: boolean;
};

export type SendResetCodePayload = {
    email: string;
};

export type VerifyResetCodePayload = {
    email: string;
    code: string;
};

export type UpdatePasswordPayload = {
    email: string;
    password: string;
    confirmPass: string;
};