import React, { ChangeEvent } from "react";
import { InputProps } from "../../utils/types";

const BInput: React.FC<InputProps> = ({ input, onInputChange }) => {
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    onInputChange(e.target.value, input.name);
  };
  return (
    <label>
      <span
        className={"block font-popins text-sm text-grey-common pb-2 capitalize"}
      >
        {input.label}:
      </span>
      <div className="relative">
        <input
          className={
            "w-full bg-white-secondary py-3 pl-5 rounded text-grey-common font-popins text-sm"
          }
          type={input.type}
          name={input.name}
          value={input?.value}
          onChange={inputHandler}
        />
        {input.icon && (
          <div className="absolute top-0 right-0 w-11 h-11 bg-blue-common rounded flex items-center justify-center">
            {input.icon}
          </div>
        )}
      </div>
    </label>
  );
};

export default BInput;
