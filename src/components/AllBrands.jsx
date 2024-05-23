import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Brands from './template/Brands'
import Error from './Error'
import Footer from './layout/Footer'

function AllBrands() {
    const params = useParams();

    return (
        <>

            <div className="bg-gray-700 py-4 px-6">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center">
                            <Link to="/home" className="text-blue-600 hover:underline">Home</Link>
                            <span className="material-symbols-outlined mx-2 text-gray-400">
                                line_end_arrow_notch
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 capitalize">{params.productName}</span>
                        </li>
                    </ol>
                </nav>
            </div>

            <section className="text-gray-600 body-font bg-slate-100">
                <div className="container px-5 py-4 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {params.productName === "smartphone" ? (
                            <>
                                <Brands brandLink="/home/smartphone/samsung" brandName="samsung" brandLogo="/images/brandLogo/smartphone/samsung.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/vivo" brandName="vivo" brandLogo="/images/brandLogo/smartphone/vivo.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/oppo" brandName="oppo" brandLogo="/images/brandLogo/smartphone/oppo.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/realme" brandName="realme" brandLogo="/images/brandLogo/smartphone/realme.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/poco" brandName="poco" brandLogo="/images/brandLogo/smartphone/poco.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/motorola" brandName="motorola" brandLogo="/images/brandLogo/smartphone/motorola.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/infinix" brandName="infinix" brandLogo="/images/brandLogo/smartphone/infinix.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/google" brandName="google" brandLogo="/images/brandLogo/smartphone/google.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/redmi" brandName="mi" brandLogo="/images/brandLogo/smartphone/mi.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/apple" brandName="apple" brandLogo="/images/brandLogo/smartphone/apple.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/oneplus" brandName="oneplus" brandLogo="/images/brandLogo/smartphone/oneplus.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/iqoo" brandName="iqoo" brandLogo="/images/brandLogo/smartphone/iqoo.png" brandAlt="" />
                                <Brands brandLink="/home/smartphone/nothing" brandName="nothing" brandLogo="/images/brandLogo/smartphone/nothing.png" brandAlt="" />
                            </>
                        ) : params.productName === "smartwatch" ? (
                            <>
                                <Brands brandLink="/home/smartwatch/noise" brandName="noise" brandLogo="/images/brandLogo/smartwatch/noise.jpeg" brandAlt="" />
                                <Brands brandLink="/home/smartwatch/fireboltt" brandName="fire-boltt" brandLogo="/images/brandLogo/smartwatch/fireboltt.jpeg" brandAlt="" />
                                <Brands brandLink="/home/smartwatch/apple" brandName="apple" brandLogo="/images/brandLogo/smartwatch/apple.jpeg" brandAlt="" />
                                <Brands brandLink="/home/smartwatch/samsung" brandName="samsung" brandLogo="/images/brandLogo/smartwatch/samsung.jpeg" brandAlt="" />
                                <Brands brandLink="/home/smartwatch/boat" brandName="boat" brandLogo="/images/brandLogo/smartwatch/boat.jpeg" brandAlt="" />
                                <Brands brandLink="/home/smartwatch/fastrack" brandName="fastrack" brandLogo="/images/brandLogo/smartwatch/fastrack.jpeg" brandAlt="" />
                            </>
                        ) : (
                            <>
                                <Error message="Product Not Found" />
                                <h1>All Brands</h1>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AllBrands
