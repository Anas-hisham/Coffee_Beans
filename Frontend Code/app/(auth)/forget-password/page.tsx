"use client";
import BackArrow from "@/components/ui/BackArrow";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgetPasswordPage = () => {
  const router = useRouter();
  const { sendResetCode, loading, error } = useAuth();

  const [email, setEmail] = useState("");

  const handleReset = async () => {
    try {
      // ✅ Pass email as object (SendResetCodePayload)
      const res = await sendResetCode({ email });
      if (res) {
        // ✅ Pass email via query string to next page
        router.push(`/confirm-forget-password?email=${encodeURIComponent(email)}`);
      }
    } catch (err) {
      console.error("Reset error:", err);
    }
  };

  return (
    <div className="py-20 mx-auto max-w-200 relative h-screen flex flex-col justify-between px-8">
      {/* Inputs */}
      <div className="flex flex-col gap-8">
        <BackArrow />
        <Input
          headline="نسيت كلمة المرور؟"
          placeholder="ادخل بريدك الاكتروني"
          isInput={false}
          isPassInput={false}
        />
        <Input
          headline="البريد الاكتروني"
          placeholder="anashisham@gmail.com"
          isInput={true}
          isPassInput={false}
          onChangeText={(val) => setEmail(val)} // ✅ capture input
        />
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* Submit Button */}
      <Button
        isMain
        text={loading ? "جاري الإرسال..." : "ارسال"}
        onClick={handleReset}
      />
    </div>
  );
};

export default ForgetPasswordPage;
