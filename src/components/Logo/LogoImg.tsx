import React from 'react';

const LogoImg = () => {
    return (
        <div
            className={
                "w-[160px] h-[80px] p-8 mx-auto bg-blue-common flex items-center justify-center rounded-full mb-12"
            }
        >
            <img src="/assets/catdog.png" alt="logo"/>
        </div>
    );
};

export default LogoImg;