import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signInUser } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()

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
                        <input type="password" {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />

                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required.</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character length.</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn bg-primary mt-4">Login</button>
                    </fieldset>
                    <p className='mt-3 text-[#71717a]'>Don’t have any account? <Link state={location.state} to='/register' className='text-primary underline font-bold'>Register</Link></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;