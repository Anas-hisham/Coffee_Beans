import { COLORS } from "@/constants";
import React from "react";

// Define the props interface for type safety
interface RadioButtonProps {
  isRadioChecked: boolean;
  handleRadioCheck: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  isRadioChecked,
  handleRadioCheck,
}) => {
  return (
    <div
      style={{
        borderColor: isRadioChecked ? COLORS.BRAND_PRIMARY : COLORS.GRAY,
        borderWidth: "1px", 
        borderStyle: "solid",
      }}
      onClick={handleRadioCheck}
      className={`cursor-pointer w-fit rounded-full ${isRadioChecked ? "p-1" : "p-4"}`}
    >
      {isRadioChecked && (
        <div
          style={{ backgroundColor: COLORS.BRAND_PRIMARY }}
          className="p-3 w-fit rounded-full"
        ></div>
      )}
    </div>
  );
};

export default RadioButton;
