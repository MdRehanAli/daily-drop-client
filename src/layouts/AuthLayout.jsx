import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import Footer from '../pages/Shared/Footer/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-[#eaeced]'>
            <div className='pl-2 py-3 w-full bg-base-100 shadow-sm'>
                <div className='btn btn-ghost text-xl'>
                    <Logo></Logo>
                </div>
            </div>
            <div className='flex items-center my-8 max-w-7xl mx-auto w-11/12'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;