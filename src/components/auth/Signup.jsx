import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'


const Signup = () => {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data) => {
        try {
            // Send form data to your Node.js backend using Axios
            const response = await axios.post('http://localhost:3000/signup', data);

            if (response.status === 201) {
                setErrorMessage('');
                // console.log(response.data);
                reset();

                setTimeout(() => {
                    const confirmResponse = window.confirm('User registered successfully! Do you want to go to the login page?');
                    if (confirmResponse) {
                        window.location.href = '/';
                    } else {
                        window.location.href = '/signup';
                    }
                }, 1200);

            } else {
                reset();
                // console.error('Error:', response.data.error);
                alert("Something went wrong.")
                window.location.href = '/';
            }

        } catch (error) {
            reset();
            if (error.response && error.response.status === 409) {
                setErrorMessage('User already exists');
            } else {
                // console.error('Error submitting form:', error);
                setErrorMessage('An unexpected error occurred. Please try again later.');
            }
        }
    };


    useEffect(() => {
        if (errorMessage) {
          const timer = setTimeout(() => {
            setErrorMessage('');
          }, 10000);
          return () => clearTimeout(timer); 
        }
      }, [errorMessage]);

    return (
        <>

            <div className="flex items-center justify-center bg-slate-600">
                <div className="max-w-md w-full mx-4 mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-slate-800 shadow-slate-900">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name<span className='text-red-600'>*</span>
                            </label>
                            <input
                                className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight uppercase"
                                id="name"
                                type="text"
                                placeholder="Full Name"
                                {...register('name', { required: 'Name is required', pattern: { value: /^[A-Za-z\s]+$/, message: 'Invalid Name.' }, minLength: {value: 3, message: 'Name must be at least 3 characters long' }, maxLength: { value: 50, message: 'Name must not exceed 50 characters' } })}
                            />
                            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone Number<span className='text-red-600'>*</span>
                            </label>
                            <input
                                className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight"
                                id="phone"
                                type="tel"
                                placeholder=""
                                {...register('phone', { required: 'Phone Number is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid Phone No' } })}
                            />
                            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username<span className='text-red-600'>*</span>
                            </label>
                            <input
                                className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight lowercase"
                                id="username"
                                type="text"
                                placeholder="example@gmail.com"
                                {...register('username', { required: 'Username is required', unique: 'username is already exists', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid Username' } })}
                            />
                            {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password<span className='text-red-600'>*</span>
                            </label>
                            <input
                                className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight"
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' }, maxLength: { value: 30, message: 'Password must not exceed 30 characters' }, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, message: 'Password must contain at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special character (eg. !@#$%^&*)' } })}
                            />
                            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password<span className='text-red-600'>*</span>
                            </label>
                            <input
                                className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight"
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                {...register('confirmPassword', { required: 'Confirm Password is required', validate: value => value === getValues('password') || 'Passwords do not match' })}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
                        </div>
                        {errorMessage && <p className="text-red-500 text-xs italic mb-5">{errorMessage}</p>}
                        <div className="flex items-center justify-center">
                            <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
