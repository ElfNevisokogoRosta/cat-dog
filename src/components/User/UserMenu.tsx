import React from 'react';
import BButton from "../Button/BButton";
interface UserMenuProps{
    username: string
}
//TODO change btn in icon btn
const UserMenu:React.FC<UserMenuProps> = ({username}) => {
    return (
        <div className={'w-[340px] flex gap-4 justify-evenly items-center '}>
           <span className={'w-full font-inter font-semibold text-elg text-white-common'}> Welcome, {username}</span>
            <div className={'w-10'}> <BButton text={'Log out'} /></div>
        </div>
    );
};

export default UserMenu;