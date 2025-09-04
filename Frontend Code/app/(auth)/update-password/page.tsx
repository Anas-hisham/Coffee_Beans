"use client";
import BackArrow from "@/components/ui/BackArrow";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  password: string;
  confirmPass: string;
};

const UpdatePasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || ""; // ✅ email passed from OTP page

  const { updatePassword, loading, error } = useAuth();

  // ✅ react-hook-form setup
  const { control, handleSubmit, watch, formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: "",
      confirmPass: "",
    },
  });

  // login action
  const onSubmit = async (data: FormValues) => {
    try {
      const res = await updatePassword({
        email,
        password: data.password,
        confirmPass: data.confirmPass,
      });
      if (res) {
        router.push("/login");
      }
    } catch (err) {
      console.error("Update password error:", err);
    }
  };

  return (
    <div className="py-20 mx-auto max-w-200 relative h-screen flex flex-col justify-between px-8">
      {/* Inputs */}
      <div className="flex flex-col gap-8">
        <BackArrow />

        {/* New Password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "كلمة المرور مطلوبة",
            minLength: {
              value: 6,
              message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
            },
          }}
          render={({ field }) => (
            <Input
              headline="انشاء كلمة مرور جديدة"
              placeholder="ادخل كلمة مرور جديدة"
              onChangeText={field.onChange}
              value={field.value}
              isInput
              isPassInput
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
              headline="تأكيد كلمة المرور"
              placeholder="أعد إدخال كلمة المرور"
              onChangeText={field.onChange}
              value={field.value}
              isInput
              isPassInput
            />
          )}
        />
        {errors.confirmPass && (
          <p className="text-red-500 text-sm">{errors.confirmPass.message}</p>
        )}
      </div>

      {/* API error */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* Submit Button */}
      <Button
        isMain
        text={loading ? "جاري التحديث..." : "حفظ"}
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default UpdatePasswordPage;
