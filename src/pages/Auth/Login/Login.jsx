import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa6';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrUserSettings } from 'react-icons/gr';

const Login = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const { signInUser } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const demoCredentials = {
        admin: {
            email: "gtracker@gmail.com",
            password: "Gtracker"
        },
        manager: {
            email: "manager@gmail.com",
            password: "Manager"
        },
        user: {
            email: "user@gmail.com",
            password: "User123"
        }
    };

    const handleDemoLogin = (role) => {
        const credential = demoCredentials[role];

        // Auto fill form
        setValue("email", credential.email);
        setValue("password", credential.password);

        // Auto submit
        handleSignIn(credential);
    };

    const handleSignIn = (data) => {
        console.log("After Sign in:", data)
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='text-4xl font-extrabold text-center text-secondary'>Welcome Back</h1>
                <p className=' text-center mb-5 text-secondary'>Login with DailyDrop</p>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <fieldset className="fieldset">

                        {/* Email Field */}
                        <label className="label">Email</label>
                        <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />

                        {errors.email?.type === "required" && <p className='text-red-500'>Email is Required.</p>}

                        {/* Password Field  */}
                        <label className="label">Password</label>
                        <div className='flex items-center relative'>
                            <input type={showPassword ? "text" : "password"} {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />
                            <button onClick={handleShowPassword} className='absolute top-2 right-7 text-xl text-primary'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                        </div>

                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required.</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character length.</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn bg-primary mt-4">Login</button>
                    </fieldset>
                    <p className='mt-3 text-[#71717a]'>Don’t have any account? <Link state={location.state} to='/register' className='text-primary underline font-bold'>Register</Link></p>
                </form>
                <SocialLogin></SocialLogin>
                <div>
                    <p className="text-primary text-[11px] font-bold mb-4 uppercase tracking-[0.25em] text-center opacity-60">Demo Quick Access</p>
                    {/* Fill Admin credentials  */}
                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={() => handleDemoLogin("admin")} className="flex flex-col items-center justify-center gap-2 p-3 rounded-md  border  border-primary/50 hover:bg-primary/10 transition-all group bg-primary">
                            <div className='text-secondary group-hover:scale-110 transition-transform text-2xl group-hover:text-primary'><MdOutlineAdminPanelSettings className='' /></div>
                            <span className="text-secondary text-[10px] font-bold tracking-wider">ADMIN</span>
                        </button>

                        {/* Fill Manager Credential  */}
                        <button onClick={() => handleDemoLogin("manager")} className="flex flex-col items-center justify-center gap-2 p-3 rounded-md  border  border-primary/50 hover:bg-primary/10 transition-all group bg-primary">
                            <div className='text-secondary group-hover:scale-110 transition-transform text-2xl group-hover:text-primary'><GrUserSettings className='' /></div>
                            <span className="text-secondary text-[10px] font-bold tracking-wider">MANAGER</span>
                        </button>

                        {/* Fill User Credential  */}
                        <button onClick={() => handleDemoLogin("user")} className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border  border-primary/50 hover:bg-primary/10 transition-all group bg-primary">
                            <div className='text-secondary group-hover:scale-110 transition-transform text-2xl group-hover:text-primary'><FaRegUser className='' /></div>
                            <span className="text-secondary text-[10px] font-bold tracking-wider">USER</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;