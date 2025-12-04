import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const { register, formState: { errors }, handleSubmit, } = useForm();

    const { registerUser } = useAuth();

    const handleRegister = (data) => {
        console.log("After Submit:", data);
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='text-4xl font-extrabold text-center text-secondary'>Create an Account</h1>
                <p className=' text-center mb-5 text-secondary'>Register with DailyDrop</p>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>Email is Required.</p>}

                        {/* Password field  */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|;:'",.<>/?]).{8,}$/ })} className="input" placeholder="Password" />

                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required.</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character length.</p>}
                        {errors.password?.type === "pattern" && <p className='text-red-500'>Password must have at least one Uppercase, at least one Lowercase, at least one Number, and at least one Special Character.</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn bg-primary mt-4">Register</button>
                    </fieldset>
                    <p className='mt-3 text-[#71717a]'>Already have an account? <Link to='/login' className='text-primary underline font-bold'>Login</Link></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;