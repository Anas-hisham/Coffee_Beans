"use client";

import { useRouter } from "next/navigation";
import { COLORS, TEXT_STYLES } from "../constants";

import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 3000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div style={{ ...TEXT_STYLES.READEX_PRO.BOLD.H1, color: COLORS.TEXT }}>
        Coffee <span style={{ color: COLORS.BRAND_PRIMARY }}>Beans</span>
      </div>
    </div>
  );
}
