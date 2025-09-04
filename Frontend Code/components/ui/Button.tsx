"use client";
import { COLORS, TEXT_STYLES } from "@/constants";
import React, { useState } from "react";

interface ButtonProps {
  isMain?: boolean;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ isMain, text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isMain
      ? isHovered
        ? COLORS.PRIMARY_HOVER
        : COLORS.BRAND_PRIMARY
      : "transparent",
    color: isMain ? "white": COLORS.BRAND_PRIMARY,
    border: isMain ? "none" : `1px solid ${COLORS.BRAND_PRIMARY}`,
    transition: "all 300ms ease-in-out",
  };

  return (
    <button
      className={`flex justify-center items-center w-full py-3 rounded-lg cursor-pointer`}
      style={{ ...buttonStyle, ...TEXT_STYLES.READEX_PRO.MEDIUM.H6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
