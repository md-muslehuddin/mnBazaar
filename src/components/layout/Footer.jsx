import React from 'react'
import { Link } from 'react-router-dom'


function Footer(props) {
    return (
        <>
            <footer className='bg-gray-800 text-white p-2 text-center mt-5 bottom-0 w-full' style={{position: props.footpos}}>
                Copyright &copy; 2024 &nbsp;
                <Link to="/home" className='underline italic hover:text-gray-300'>mnBazaar</Link>
            </footer>
        </>
    )
}

export default Footer

