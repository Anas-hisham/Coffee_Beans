"use client";
import React from "react";
import BackArrow from "@/components/ui/BackArrow";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import { COLORS, TEXT_STYLES } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPass: string;
  sendEmailsAgreement: boolean;
};

const RegisterPage = () => {
  const router = useRouter();
  const { register: registerUser, loading, error } = useAuth();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPass: "",
      sendEmailsAgreement: false,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    if (data.password !== data.confirmPass) {
      alert("كلمات المرور غير متطابقة");
      return;
    }

    try {
      const res = await registerUser({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        sendEmailsAgreement: data.sendEmailsAgreement,
      });

      if (res) {
        router.push(`/verify-email?email=${encodeURIComponent(data.email)}`);
      }
    } catch (err) {
      console.error("Register error:", err);
    }
  };

  return (
    <div className="py-20 mx-auto max-w-200 relative min-h-screen flex flex-col justify-between px-8">
      {/* Inputs */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 text-right">
        <BackArrow />
        <Input
          headline="انشاء حساب جديد"
          placeholder="ادخل البيانات المطلوبة بالاسفل"
          isInput={false}
        />

        {/* Full Name */}
        <Controller
          name="fullName"
          control={control}
          rules={{ required: "الاسم مطلوب" }}
          render={({ field }) => (
            <Input
              headline="الاسم بالكامل"
              placeholder="ادخل اسمك بالكامل"
              isInput
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "البريد الإلكتروني مطلوب",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "البريد الإلكتروني غير صالح",
            },
          }}
          render={({ field }) => (
            <Input
              headline="البريد الالكتروني"
              placeholder="example@email.com"
              isInput
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Checkbox */}
        <div
          className="flex items-center gap-2 mt-4 justify-center"
          style={{ ...TEXT_STYLES.READEX_PRO.MEDIUM.H6, color: COLORS.TEXT }}
        >
          <Controller
            name="sendEmailsAgreement"
            control={control}
            render={({ field }) => (
              <CheckBox
                isChecked={field.value}
                handleCheck={() => field.onChange(!field.value)}
              />
            )}
          />
          <span>اوافق على ارسال اخر العروض</span>
        </div>

        {/* Password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "كلمة المرور مطلوبة",
            minLength: {
              value: 6,
              message: "كلمة المرور يجب ان تكون 6 احرف على الاقل",
            },
          }}
          render={({ field }) => (
            <Input
              headline="كلمة المرور"
              placeholder="********"
              isInput
              isPassInput
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        {/* Confirm Password */}
        <Controller
          name="confirmPass"
          control={control}
          rules={{
            required: "تأكيد كلمة المرور مطلوب",
            validate: (value) =>
              value === watch("password") || "كلمات المرور غير متطابقة",
          }}
          render={({ field }) => (
            <Input
              headline="كلمة المرور مرة اخرى"
              placeholder="********"
              isInput
              isPassInput
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors.confirmPass && (
          <p className="text-red-500 text-sm">{errors.confirmPass.message}</p>
        )}

        {/* API Error */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Submit Button */}
        <div className="mt-12">
          <Button
            isMain
            text={loading ? "جاري انشاء الحساب..." : "انشاء حساب"}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
