import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'

const AuthLaout = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12'>
            <Logo></Logo>
            <div className='flex items-center border-2 my-'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLaout;