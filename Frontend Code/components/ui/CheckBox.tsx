import { COLORS } from "@/constants";
import React from "react";
import { FaCheck } from "react-icons/fa";

// Define the props for the CheckBox component
interface CheckBoxProps {
  isChecked: boolean;
  handleCheck: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, handleCheck }) => {
  const checkBoxStyle: React.CSSProperties = {
    background: isChecked ? COLORS.BRAND_PRIMARY : "transparent",
    color: isChecked ? "white" : COLORS.BRAND_PRIMARY,
    border: `1px solid ${COLORS.BRAND_PRIMARY}`,
  };

  return (
    <div
      style={checkBoxStyle}
      className="rounded-sm  cursor-pointer w-6 h-6 flex items-center justify-center"
      onClick={handleCheck}
    >
      {isChecked && <FaCheck />}
    </div>
  );
};

export default CheckBox;
