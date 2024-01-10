import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Navigations from "../Navigation/Navigations";
import AdminLogo from "../Logo/AdminLogo";
import UserMenu from "../User/UserMenu";

const AdminLayout = () => {
    return (

        <div >
            <header className={'bg-blue-500 py-4'}>
                <div className={'container flex justify-between items-center'}>
                    <Link to={''}>
                        <AdminLogo/>
                    </Link>
                    <Navigations/>
                    <UserMenu username={'kolya'}/>
                </div>
            </header>


            <main className={'container'}>
                <Outlet/>
            </main>
        </div>
    );
};

export default AdminLayout;