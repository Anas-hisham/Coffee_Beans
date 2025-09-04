"use client";
import BackArrow from "@/components/ui/BackArrow";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

// Import the image directly
import confirmImg from "@/public/assets/imgs/Confirm Page.png";
import { COLORS, TEXT_STYLES } from "@/constants";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // قراءة القيم من الـ query string
  const text = searchParams.get("text") || "تم تنفيذ طلبك بنجاح";
  const buttonText = searchParams.get("buttonText") || "العودة للرئيسية";
  const redirect = searchParams.get("redirect") || "/login"; // لو عايز تحدد صفحة مختلفة

  return (
    <div className="py-20 mx-auto max-w-200 relative h-screen flex flex-col px-8">
      <div className="flex flex-col gap-8">
        <BackArrow />
        <div
          style={{ color: COLORS.TEXT, ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H4 }}
          className="flex flex-col justify-center items-center text-center"
        >
          <Image
            src={confirmImg}
            alt="Confirm Page"
            width={350}
            height={350}
            className="mx-auto"
          />
          {text}
        </div>
      </div>

      {/* Bottom button */}
      <div className="mt-auto my-6">
        <Button
          isMain
          text={buttonText}
          onClick={() => router.push(redirect)}
        />
      </div>
    </div>
  );
};

export default Page;
