import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../AuthContext'



function Navbar(props) {
  const { logout } = useAuth();

    return (
        <>
            <nav className="bg-gray-800 text-white p-4 flex justify-around items-center sticky top-0 w-full z-50">
                <Link to="/home" className="flex items-center space-x-2">
                    <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
                    <span className="font-bold text-lg">mnBazaar</span>
                </Link>
                <div className="text-2xl font-semibold hidden md:block">
                    The World's First Easy and Clean Shopping Experience
                </div>
                <span className="material-symbols-outlined text-gray-400 fixed right-0 mr-9 sm:mr-9 md:mr-5 lg:mr-3 hover:cursor-pointer" onClick={logout} title='Log Out' style={{display:props.navDisplay}}>
                    logout
                </span>
            </nav>
        </>
    )
}

export default Navbar
