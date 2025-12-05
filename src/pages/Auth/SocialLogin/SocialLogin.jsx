import React from 'react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {

    const { signInGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <p className=' text-[#71717a] text-center'>Or</p>
            <button onClick={handleGoogleSignIn} className="btn bg-[#E9ECF1] text-black border-[#e5e5e5] w-full">
                <FcGoogle className='text-2xl' />
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;