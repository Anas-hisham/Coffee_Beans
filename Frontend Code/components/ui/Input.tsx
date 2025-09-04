"use client";

import { COLORS, SHADOWS, TEXT_STYLES } from "@/constants";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

interface InputProps {
  headline: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isPassInput?: boolean;
  isInput?: boolean;
  isDesciption?: boolean;
  isLocation?: boolean;
}

const Input: React.FC<InputProps> = ({
  headline,
  placeholder,
  onChangeText,
  value,
  isPassInput,
  isInput,
  isDesciption,
  isLocation,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-end gap-1">
      <label
        style={{
          ...(isInput
            ? TEXT_STYLES.READEX_PRO.SEMIBOLD.H5
            : isDesciption
            ? TEXT_STYLES.READEX_PRO.SEMIBOLD.H6
            : TEXT_STYLES.READEX_PRO.SEMIBOLD.H4),
          color: COLORS.TEXT,
        }}
      >
        {headline}
      </label>

      <div
        className={`rounded-md flex items-center px-4 gap-2 ${
          isInput ? "w-full" : ""
        }`}
        style={isInput ? { boxShadow: SHADOWS.DROP } : {}}
      >
        {isPassInput && isInput && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}

        {isInput ? (
          <input
            style={{ ...TEXT_STYLES.READEX_PRO.MEDIUM.H7, color: COLORS.GRAY }}
            className="py-3 text-right flex-1 outline-none bg-transparent"
            onChange={(e) => onChangeText?.(e.target.value)}
            value={value}
            placeholder={placeholder}
            type={isPassInput ? (showPassword ? "text" : "password") : "text"}
          />
        ) : (
          <div
            style={{ ...TEXT_STYLES.READEX_PRO.MEDIUM.H7, color: COLORS.GRAY }}
            className={`text-right ${
              isLocation ? "flex items-center gap-1" : ""
            }`}
          >
            {isLocation ? (
              <>
                {placeholder} <MdOutlineLocationOn  size={18}/>
              </>
            ) : (
              placeholder
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
