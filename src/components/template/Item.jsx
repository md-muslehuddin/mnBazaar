import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
        <>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
                <Link to={props.itemLink} className="block relative h-48 rounded overflow-hidden hover:opacity-85 hover:border hover:border-gray-400 hover:rounded-3xl">
                    <img alt={props.itemImageAlt} className="object-contain object-center w-full h-full block" src={props.itemImage} />
                </Link>
                <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium  text-center hover:font-bold">{props.itemName}</h2>
                    <p className="mt-1">{props.itemPrice}</p>
                </div>
            </div>
        </>
    )
}

export default Item
