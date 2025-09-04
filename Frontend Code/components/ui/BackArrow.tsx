import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BackArrow = () => {
  const route = useRouter();
  return (
    <div className="cursor-pointer flex justify-end">
      <FaArrowRight size={20} onClick={() => route.back()} />
    </div>
  );
};

export default BackArrow;
