import React from 'react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const SocialLogin = () => {

    const { signInGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);

                // Create user in the database 
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log("User data has been stored: ", res.data);
                        navigate(location?.state || '/')
                    })

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