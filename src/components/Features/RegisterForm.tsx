import React from 'react';
import BForm from "../Form/BForm";
import BButton from "../Button/BButton";

const inputs = [
    { type: "text", name: "first_name", label: "First name" },
    { type: "text", name: "last_name", label: "Last name" },
    { type: "text", name: "city", label: "City" },
    { type: 'email', name: 'email', label: 'Email' },
    { type: 'password', name: 'password', label: 'Password' },
    { type: 'password', name: 'repeat_password', label: 'Repeat password' }
];

const RegisterForm = () => {
    const onSubmit = (value: Record<string, string>) => {
        console.log(value);
    };

    return (
        <div className='py-8 mb-4 sm:w-[430px] sm:mx-auto sm:rounded-lg sm:shadow-custom sm:px-5 lg:absolute lg:top-[128px] lg:left-[20%]'>
            <div className='flex flex-col gap-6'>
                <BForm inputs={inputs} onSubmit={onSubmit} className={'flex flex-col gap-6'} buttons={<BButton text={'Sign up'} primary={true} />} />
            </div>

            <div className='invisible lg:visible lg:absolute lg:w-[542px] lg:h-[542px] lg:-right-[800px] lg:top-1/2 lg:-translate-y-1/2'>
                <img className='object-fill block w-[542px] absolute z-30' src='/assets/register.png' alt='Women sign up' />
                <div className='absolute  h-[542px] w-[542px]'>
                    <svg className='w-[542px] h-[542px] relative z-1'>
                        <use className='w-[542px] h-[542px] relative z-1' href='/assets/sprite.svg#registerBack'></use>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
