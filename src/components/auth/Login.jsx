import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/', data);
      reset();
      // console.log(response.data);
      // alert('Login Successful');
      login();
      navigate('/home');
    } catch (error) {
      reset();
      // console.error('Login error:', error);
      setLoginError('Invalid username or password');
    }
  };

  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => {
        setLoginError('');
      }, 10000);
      return () => clearTimeout(timer); 
    }
  }, [loginError]);

  return (
    <>
    
      <div className="flex items-center justify-center h-[95vh] bg-slate-600">
        <div className="max-w-md w-full mx-4">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className="bg-slate-100 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 border border-slate-800 shadow-slate-900">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username<span className='text-red-600'>*</span>
              </label>
              <input
                className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight lowercase"
                id="username"
                type="text"
                placeholder="example@gmail.com"
                {...register('username', {
                  required: 'Username is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid Username',
                  },
                })}
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
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
            </div>
            {loginError && <div className='text-red-500 text-xs italic mb-4'>{loginError}</div>}
            <div className="flex items-center justify-center">
              <button
                className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-full"
                type="submit"
              >
                Log In
              </button>
            </div>
            <div className='mt-3'>
              <a className='text-blue-800 underline italic text-sm hover:text-blue-900' href="/signup">I don't have an account</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
