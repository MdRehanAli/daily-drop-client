import React from 'react';

import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to='/'>
            <div className='w-[150px]'>
                <img src={logo} alt="Logo" />
            </div>
        </Link>
    );
};

export default Logo;