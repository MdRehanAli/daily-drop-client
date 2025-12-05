import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

    const { register, formState: { errors }, handleSubmit, } = useForm();

    const { registerUser, updateUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (data) => {
        console.log("After Submit:", data.photo[0]);
        const profileImage = data.photo[0];
        registerUser(data.email, data.password)
            .then(result => {
                // console.log(result.user);
                // 1. Store the image in formData.  
                const formData = new FormData();
                formData.append('image', profileImage);

                // 2. Send the photo to store and get the url
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_KEY}`
                axios.post(image_API_URL, formData)
                    .then(res => {
                        // console.log("After Image Upload:", res.data.data.url);

                        // Update user profile to firebase 
                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url

                        }

                        updateUser(userProfile)
                            .then(() => {
                                console.log('User Profile Updated');
                                navigate(location.state || '/');
                            })
                            .catch(error => {
                                console.log(error.message)
                            })
                    })

                // Update user profile 
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
                        {/* Name Field  */}
                        <label className="label">Name</label>
                        <input type="text" {...register('name', { required: true, minLength: 3 })} className="input" placeholder="Name" />
                        {errors.name?.type === "required" && <p className='text-red-500'>Name is Required.</p>}
                        {errors.name?.type === "minLength" && <p className='text-red-500'>Name must have 3 letters.</p>}

                        {/* Photo Image Field  */}
                        <label className="label">Name</label>
                        <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />
                        {errors.photo?.type === "required" && <p className='text-red-500'>Photo is Required.</p>}

                        {/* Email Field  */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>Email is Required.</p>}

                        {/* Password field  */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|;:'",.<>/?]).{8,}$/ })} className="input" placeholder="Password" />

                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required.</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character length.</p>}
                        {errors.password?.type === "pattern" && <p className='text-red-500'>Password must have at least one Uppercase, at least one Lowercase, at least one Number, and at least one Special Character.</p>}

                        <button className="btn bg-primary mt-4">Register</button>
                    </fieldset>
                    <p className='mt-3 text-[#71717a]'>Already have an account? <Link state={location.state} to='/login' className='text-primary underline font-bold'>Login</Link></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;