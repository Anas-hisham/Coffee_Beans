"use client";
import React from "react";
import { COLORS, TEXT_STYLES } from "@/constants";
import bgImg from "@/public/assets/imgs/Onboarding Page.jpg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Background Image */}
      <Image src={bgImg} alt="Onboarding" fill style={{ objectFit: "cover" }} />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: COLORS.WHITE,
        }}
        className="flex flex-col justify-end items-end h-full p-4 pb-20 text-right"
      >
        <div style={{ ...TEXT_STYLES.READEX_PRO.BOLD.H1 }}>
          لنستكشف انواع جديدة من القهوة
          <div style={{ ...TEXT_STYLES.READEX_PRO.MEDIUM.H5 }}>
            انواع مختلفة من القهوة الطازجة يوميا بنكهات مختلفة
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 w-full flex justify-end">
          <Button
            isMain
            text={"البدء الان"}
            onClick={() => router.push("/home")}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
