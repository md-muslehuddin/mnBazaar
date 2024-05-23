import React from 'react'
import { Link } from 'react-router-dom'


function Error(props) {
  return (
    <div className='h-[70vh] w-full flex justify-center items-center flex-col'>
      <div className='text-3xl text-gray-500'>
        <span className='font-bold text-red-600'>404</span>
        <span className='text-4xl text-black'> || </span>{props.message}
      </div>
      <div className='mt-4 text-lg italic'>Back to &nbsp;
        <Link className='bg-slate-900 text-slate-300 p-2 rounded-xl text-sm shadow shadow-slate-600 hover:text-slate-100 hover:bg-slate-800' to="/home">Homepage</Link>
      </div>
    </div>
  )
}

export default Error

