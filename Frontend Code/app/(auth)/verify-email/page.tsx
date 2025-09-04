"use client";
import React, { useState, useEffect } from "react";
import BackArrow from "@/components/ui/BackArrow";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const { sendResetCode, verifyEmail, loading, error } = useAuth();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(150);

  // countdown
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        const next = document.getElementById(`otp-${index + 1}`);
        next?.focus();
      }
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // resend code
  const handleResend = async () => {
    if (!email) return;
    await sendResetCode({ email });
    setTimer(150);
  };

  // verify code
  const handleVerify = async () => {
    const code = otp.join("");
    if (!email || code.length < 4) return;
    const res = await verifyEmail({ email, code });
    if (res) {
      router.push(
        `/confirm?text=${encodeURIComponent(
          "تم انشاء الحساب بنجاح"
        )}&buttonText=${encodeURIComponent("البدء الان")}&redirect=/home`
      );
    }
  };

  return (
    <div className="py-20 mx-auto max-w-200 relative h-screen flex flex-col justify-between px-8">
      <div className="flex flex-col gap-8">
        <BackArrow />
        <Input
          headline="انشاء حساب جديد"
          placeholder="ادخل الرمز التعريفي المرسل الى البريد الالكتروني"
          isInput={false}
          isPassInput={false}
        />

        {/* OTP Inputs */}
        <div className="flex justify-center gap-4 mt-8">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-14 h-14 text-center border-2 border-gray-300 rounded-md text-xl outline-none focus:border-green-500"
            />
          ))}
        </div>

        {/* Resend + Timer */}
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>{formatTime(timer)}</span>
          <button
            className="text-green-600 underline disabled:text-gray-400"
            disabled={timer > 0 || loading}
            onClick={handleResend}
          >
            اعِد ارسال الرمز التعريفي
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-auto mb-6">
        <Button
          isMain
          text={loading ? "جاري التحقق..." : "ارسال"}
          onClick={handleVerify}
        />
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
