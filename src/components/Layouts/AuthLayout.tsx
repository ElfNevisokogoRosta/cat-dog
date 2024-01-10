import React from "react";
import { Outlet } from "react-router-dom";
import LogoImg from "../Logo/LogoImg";

const AuthLayout = () => {
  return (
    <div className="w-full h-full container bg-white-common my-6 sm:flex sm:items-center sm:justify-center sm:flex-col ">
        <LogoImg/>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
