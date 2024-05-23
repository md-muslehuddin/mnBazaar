import React from 'react'
import { Link } from 'react-router-dom'

function Brands(props) {
    return (
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
            <Link to={props.brandLink} className="block relative h-48 rounded overflow-hidden hover:opacity-85 hover:bg-slate-200 hover:rounded-3xl">
                <img alt={props.brandAlt} className="object-contain object-center w-full h-full block" src={props.brandLogo} />
            </Link>
            <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium uppercase text-center hover:font-bold hover:text-xl">{props.brandName}</h2>
            </div>
        </div>
    )
}

export default Brands
