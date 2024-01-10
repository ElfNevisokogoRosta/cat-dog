import React from "react";
import BForm from "../Form/BForm";
import { LuMail } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import Buttons from "./Buttons";
const inputs = [
  { type: "email", name: "email", label: "email", icon:(<LuMail color={'#fff'} size={24} />) },
  { type: "password", name: "password", label: "password", icon:(<CiLock color={'#fff'} size={24}/>) },
];
const LoginForm = () => {
  const onSubmit = (value: Record<string, string>) => {
    console.log(value);
  };
  return (
    <div className='py-8 sm:w-[430px] sm:mx-auto sm:rounded-lg sm:shadow-custom sm:px-5'>
      <BForm inputs={inputs} onSubmit={onSubmit} className={'flex flex-col gap-8'} buttons={<Buttons/>}/>
    </div>
  );
};

export default LoginForm;
