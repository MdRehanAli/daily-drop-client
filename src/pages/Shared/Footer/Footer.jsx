import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className=" text-[#dadada] footer-center py-20 bg-[#0b0b0b] w-full mt-[100px]">
            <div className='max-w-7xl mx-auto w-11/12'>
                <div className='flex justify-center'>
                    <Logo></Logo>
                </div>
                <p className="text-center md:w-1/2 mx-auto">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                <div className='w-full flex justify-center flex-wrap gap-9 my-8 py-8 border-y border-dashed border-[#03464d]'>
                    <Link>Services</Link>
                    <Link to='/coverage'>Coverage</Link>
                    <Link to='/about'>About Us</Link>
                    <Link>Pricing</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </div>
                <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;