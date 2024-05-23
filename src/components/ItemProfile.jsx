import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from './layout/Footer'
import Smartphone from './items/Smartphone'
import Smartwatch from './items/Smartwatch'
import Error from './Error'

function Item() {
    const params = useParams();
    const { productName, iName, iDetails } = params;

    return (
        <>
            <div className="bg-gray-700 py-4 px-6 overflow-x-scroll" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex whitespace-nowrap overflow-ellipsis">
                        <li className="flex items-center">
                            <Link to="/home" className="text-blue-600 hover:underline">Home</Link>
                            <span className="material-symbols-outlined mx-2 text-gray-400">
                                line_end_arrow_notch
                            </span>
                        </li>
                        <li className="flex items-center">
                            <Link to={`/home/${productName}`} className="text-green-600 hover:underline capitalize">{productName}</Link>
                            <span className="material-symbols-outlined mx-2 text-gray-400">
                                line_end_arrow_notch
                            </span>
                        </li>
                        <li className="flex items-center">
                            <Link to={`/home/${productName}/${iName}`} className="text-purple-600 hover:underline capitalize">{iName}</Link>
                            <span className="material-symbols-outlined mx-2 text-gray-400">
                                line_end_arrow_notch
                            </span>
                        </li>
                        <li className="flex items-center ">
                            <span className="text-red-600 mr-2">{iDetails}</span>
                        </li>
                    </ol>
                </nav>
            </div>

            {productName === "smartphone" ? (
                <Smartphone />
            ) : productName === "smartwatch" ? (
                <Smartwatch />
            ) : (
                <>
                    <Error message="Product Not Found" />
                    <h1>items Profile- none</h1>
                </>
            )}

            <Footer />
        </>
    );
}

export default Item;

