import React from "react";
interface ButtonProps {
  text: string;
  onClick?: () => void;
  primary?: boolean;
}
const BButton: React.FC<ButtonProps> = ({ text, onClick, primary }) => {
  if (primary) {
    return (
      <button
        className={
          "w-full bg-blue-common py-4 rounded-sm text-center font font-popins text-md font-semibold text-white-common leading-normal cursor-pointer shadow-custom"
        }
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      className="w-full bg-transparent border-2 border-blue-common py-4 text-md rounded-sm font-popins font-semibold text-blue-common leading-normal cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BButton;
