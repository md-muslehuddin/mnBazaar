import React from 'react'
import { Link } from 'react-router-dom'
import Brands from './template/Brands'
import Footer from './layout/Footer'

function Home() {

    return (
        <>

            <section className="text-gray-600 body-font bg-slate-100">
                <div className='flex items-center justify-between bg-slate-200 rounded-lg'>
                    <div className='text-gray-900 title-font text-2xl font-medium ml-4'>Smartphones</div>
                    <Link to="/home/smartphone">
                        <span className="material-symbols-outlined ml-auto mr-4 text-blue-500 font-bold">
                            keyboard_double_arrow_right
                        </span>
                    </Link>
                </div>
                <div className="container px-5 py-4 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <Brands brandLink="/home/smartphone/samsung" brandName="samsung" brandLogo="/images/brandLogo/smartphone/samsung.png" brandAlt="" />
                        <Brands brandLink="/home/smartphone/vivo" brandName="vivo" brandLogo="/images/brandLogo/smartphone/vivo.png" brandAlt="" />
                        <Brands brandLink="/home/smartphone/oppo" brandName="oppo" brandLogo="/images/brandLogo/smartphone/oppo.png" brandAlt="" />
                        <Brands brandLink="/home/smartphone/google" brandName="google" brandLogo="/images/brandLogo/smartphone/google.png" brandAlt="" />
                        <Brands brandLink="/home/smartphone/apple" brandName="apple" brandLogo="/images/brandLogo/smartphone/apple.png" brandAlt="" />
                        <Brands brandLink="/home/smartphone/redmi" brandName="mi" brandLogo="/images/brandLogo/smartphone/mi.png" brandAlt="" />
                        <Brands brandLink="/home/smartphone/oneplus" brandName="oneplus" brandLogo="/images/brandLogo/smartphone/oneplus.png" brandAlt="" />
                        <Brands brandLink="/home/smartphone/iqoo" brandName="iqoo" brandLogo="/images/brandLogo/smartphone/iqoo.png" brandAlt="" />
                        <Brands brandLink="/home/smartphone/nothing" brandName="nothing" brandLogo="/images/brandLogo/smartphone/nothing.png" brandAlt="" />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font mt-9 bg-slate-100">
                <div className='flex items-center justify-between bg-slate-200 rounded-lg'>
                    <div className='text-gray-900 title-font text-2xl font-medium ml-4'>Smartwatches</div>
                    <Link to="/home/smartwatch">
                        <span className="material-symbols-outlined ml-auto mr-4 text-blue-500 font-bold">
                            keyboard_double_arrow_right
                        </span>
                    </Link>
                </div>
                <div className="container px-5 py-4 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <Brands brandLink="/home/smartwatch/noise" brandName="noise" brandLogo="/images/brandLogo/smartwatch/noise.jpeg" brandAlt="" />
                        <Brands brandLink="/home/smartwatch/fireboltt" brandName="fire-boltt" brandLogo="/images/brandLogo/smartwatch/fireboltt.jpeg" brandAlt="" />
                        <Brands brandLink="/home/smartwatch/apple" brandName="apple" brandLogo="/images/brandLogo/smartwatch/apple.jpeg" brandAlt="" />
                        <Brands brandLink="/home/smartwatch/samsung" brandName="samsung" brandLogo="/images/brandLogo/smartwatch/samsung.jpeg" brandAlt="" />
                        <Brands brandLink="/home/smartwatch/boat" brandName="boat" brandLogo="/images/brandLogo/smartwatch/boat.jpeg" brandAlt="" />
                        <Brands brandLink="/home/smartwatch/fastrack" brandName="fastrack" brandLogo="/images/brandLogo/smartwatch/fastrack.jpeg" brandAlt="" />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home
