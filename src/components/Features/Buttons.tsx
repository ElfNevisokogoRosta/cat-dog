import React from 'react';
import BButton from "../Button/BButton";

const Buttons = () => {
    return (
      <div className={"py-4 flex flex-col gap-4 "}>
        <BButton key={"login"} text={"Login now"} primary={true} />
        <div className="w-full flex gap-5 items-center">
          <div className="w-full h-[1px] bg-grey-light"></div>
          <span className='uppercase font-popins text-sm text-grey-light'>or</span>
          <div className="w-full h-[1px] bg-grey-light"></div>
        </div>
        <BButton key={"sing-up"} text={"Signup now"} />
      </div>
    );
};

export default Buttons;