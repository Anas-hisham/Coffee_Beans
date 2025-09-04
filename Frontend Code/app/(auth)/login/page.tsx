"use client";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import { COLORS, TEXT_STYLES } from "@/constants";
import Link from "next/link";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const Page = () => {
  const router = useRouter();
  const { login, loading, error } = useAuth();

  // ✅ include errors from formState
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // login action
  const onSubmit = async (data: FormValues) => {
    try {
      const res = await login({
        email: data.email,
        password: data.password,
        remember: data.remember,
      });

      if (res) {
        console.log("✅ Login success:", res);

        // remember me logic
        if (data.remember) {
          localStorage.setItem("User", JSON.stringify(res));
        } else {
          sessionStorage.setItem("User", JSON.stringify(res));
        }

        router.push("/home");
      }
    } catch (err) {
      console.error("❌ Login failed:", err);
    }
  };

  return (
    <div>
      <div className="py-20 mx-auto max-w-200 relative h-screen  px-8">
        <div className="w-full flex justify-center">
          <div
            style={{ ...TEXT_STYLES.READEX_PRO.BOLD.H2, color: COLORS.TEXT }}
            className="mb-12 text-center"
          >
            Coffee <span style={{ color: COLORS.BRAND_PRIMARY }}>Beans</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 text-right"
        >
          {/* Email */}
          <Controller
            name="email"
            control={control}
            rules={{
              required: "البريد الإلكتروني مطلوب",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "ادخل بريد إلكتروني صالح",
              },
            }}
            render={({ field }) => (
              <Input
                headline="البريد الاكتروني"
                placeholder="moi@email.com"
                onChangeText={field.onChange}
                value={field.value}
                isInput
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
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
                headline="كلمة المرور"
                placeholder="********"
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

          {/* Remember me + Forgot password */}
          <div className="flex justify-between">
            <Link
              href="/forget-password"
              style={{ ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H6 }}
            >
              نسيت كلمة السر
            </Link>

            <div className="flex gap-2">
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <CheckBox
                    isChecked={field.value}
                    handleCheck={() => field.onChange(!field.value)}
                  />
                )}
              />
              <span>تذكرني</span>
            </div>
          </div>

          {/* Backend error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <Button
              isMain
              text={loading ? "جارٍ تسجيل الدخول..." : "تسجيل دخول"}
              onClick={handleSubmit(onSubmit)}
            />
            <Button
              text="انشاء حساب"
              onClick={() => router.push("/register")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
