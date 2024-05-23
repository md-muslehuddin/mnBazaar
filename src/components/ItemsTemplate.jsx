import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Item from './template/Item'
import Footer from './layout/Footer'
import Error from './Error'

function ItemsTemplate() {
    const params = useParams();
    const { productName, iName } = params;

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
                            <Link to={`/home/${productName}`} className="text-green-600 hover:underline capitalize">{productName}</Link>
                            <span className="material-symbols-outlined mx-2 text-gray-400">
                                line_end_arrow_notch
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 capitalize">{iName}</span>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="container px-5 py-4 mx-auto bg-slate-100">
                {productName === "smartphone" ? (
                    <div className="flex flex-wrap -m-4">
                        {iName === "samsung" ? (
                            <>
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-S21-Ultra" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy S21 Ultra" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-S21-Ultra.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-Note-20-Ultra" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Note 20 Ultra" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-Note-20-Ultra.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-Z-Fold-2" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Z Fold 2" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-Z-Fold-2.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-S21" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy S21" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-S21.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-Note-20" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Note 20" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-Note-20.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-A52" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy A52" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-A52.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-M51" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy M51" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-M51.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-F62" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy F62" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-F62.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-M31s" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy M31s" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-M31s.jpeg" />
                                <Item itemLink="/home/smartphone/samsung/Samsung-Galaxy-A32" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy A32" itemImage="/images/item/smartphone/samsung/Samsung-Galaxy-A32.jpeg" />
                            </>
                        ) : iName === "vivo" ? (
                            <>
                                <Item itemLink="/home/smartphone/vivo/Vivo-X60-Pro+" itemPrice="" itemImageAlt="" itemName="Vivo X60 Pro+" itemImage="/images/item/smartphone/vivo/Vivo-X60-Pro+.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-V21" itemPrice="" itemImageAlt="" itemName="Vivo V21" itemImage="/images/item/smartphone/vivo/Vivo-V21.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-Y73" itemPrice="" itemImageAlt="" itemName="Vivo Y73" itemImage="/images/item/smartphone/vivo/Vivo-Y73.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-X50-Pro" itemPrice="" itemImageAlt="" itemName="Vivo X50 Pro" itemImage="/images/item/smartphone/vivo/Vivo-X50-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-Y20" itemPrice="" itemImageAlt="" itemName="Vivo Y20" itemImage="/images/item/smartphone/vivo/Vivo-Y20.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-V21e" itemPrice="" itemImageAlt="" itemName="Vivo V21e" itemImage="/images/item/smartphone/vivo/Vivo-V21e.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-Y31" itemPrice="" itemImageAlt="" itemName="Vivo Y31" itemImage="/images/item/smartphone/vivo/Vivo-Y31.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-V21-5G" itemPrice="" itemImageAlt="" itemName="Vivo V21 5G" itemImage="/images/item/smartphone/vivo/Vivo-V21-5G.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-Y20G" itemPrice="" itemImageAlt="" itemName="Vivo Y20G" itemImage="/images/item/smartphone/vivo/Vivo-Y20G.jpeg" />
                                <Item itemLink="/home/smartphone/vivo/Vivo-X60" itemPrice="" itemImageAlt="" itemName="Vivo X60" itemImage="/images/item/smartphone/vivo/Vivo-X60.jpeg" />
                            </>
                        ) : iName === "oppo" ? (
                            <>
                                <Item itemLink="/home/smartphone/oppo/Oppo-Reno6-Pro-5G" itemPrice="" itemImageAlt="" itemName="Oppo Reno6 Pro 5G" itemImage="/images/item/smartphone/oppo/Oppo-Reno6-Pro-5G.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-F19-Pro+-5G" itemPrice="" itemImageAlt="" itemName="Oppo F19 Pro+ 5G" itemImage="/images/item/smartphone/oppo/Oppo-F19-Pro+-5G.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-A74-5G" itemPrice="" itemImageAlt="" itemName="Oppo A74 5G" itemImage="/images/item/smartphone/oppo/Oppo-A74-5G.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-F17-Pro" itemPrice="" itemImageAlt="" itemName="Oppo F17 Pro" itemImage="/images/item/smartphone/oppo/Oppo-F17-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-A15" itemPrice="" itemImageAlt="" itemName="Oppo A15" itemImage="/images/item/smartphone/oppo/Oppo-A15.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-F19" itemPrice="" itemImageAlt="" itemName="Oppo F19" itemImage="/images/item/smartphone/oppo/Oppo-F19.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-Reno5-Pro-5G" itemPrice="" itemImageAlt="" itemName="Oppo Reno5 Pro 5G" itemImage="/images/item/smartphone/oppo/Oppo-Reno5-Pro-5G.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-A53" itemPrice="" itemImageAlt="" itemName="Oppo A53" itemImage="/images/item/smartphone/oppo/Oppo-A53.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-A74" itemPrice="" itemImageAlt="" itemName="Oppo A74" itemImage="/images/item/smartphone/oppo/Oppo-A74.jpeg" />
                                <Item itemLink="/home/smartphone/oppo/Oppo-Find-X3-Pro" itemPrice="" itemImageAlt="" itemName="Oppo Find X3 Pro" itemImage="/images/item/smartphone/oppo/Oppo-Find-X3-Pro.jpeg" />
                            </>
                        ) : iName === "realme" ? (
                            <>
                                <Item itemLink="/home/smartphone/realme/Realme-9-Pro+" itemPrice="" itemImageAlt="" itemName="Realme 9 Pro+" itemImage="/images/item/smartphone/realme/Realme-9-Pro+.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-GT-2" itemPrice="" itemImageAlt="" itemName="Realme GT 2" itemImage="/images/item/smartphone/realme/Realme-GT-2.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-9" itemPrice="" itemImageAlt="" itemName="Realme 9" itemImage="/images/item/smartphone/realme/Realme-9.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-9i" itemPrice="" itemImageAlt="" itemName="Realme 9i" itemImage="/images/item/smartphone/realme/Realme-9i.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-GT-Neo-3" itemPrice="" itemImageAlt="" itemName="Realme GT Neo 3" itemImage="/images/item/smartphone/realme/Realme-GT-Neo-3.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-9-Pro" itemPrice="" itemImageAlt="" itemName="Realme 9 Pro" itemImage="/images/item/smartphone/realme/Realme-9-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-GT-Master-Edition" itemPrice="" itemImageAlt="" itemName="Realme GT Master Edition" itemImage="/images/item/smartphone/realme/Realme-GT-Master-Edition.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-9i-Prime" itemPrice="" itemImageAlt="" itemName="Realme 9i Prime" itemImage="/images/item/smartphone/realme/Realme-9i-Prime.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-GT-Neo-2" itemPrice="" itemImageAlt="" itemName="Realme GT Neo 2" itemImage="/images/item/smartphone/realme/Realme-GT-Neo-2.jpeg" />
                                <Item itemLink="/home/smartphone/realme/Realme-C35" itemPrice="" itemImageAlt="" itemName="Realme C35" itemImage="/images/item/smartphone/realme/Realme-C35.jpeg" />
                            </>
                        ) : iName === "poco" ? (
                            <>
                                <Item itemLink="/home/smartphone/poco/Poco-X3-Pro" itemPrice="" itemImageAlt="" itemName="Poco X3 Pro" itemImage="/images/item/smartphone/poco/Poco-X3-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-M3" itemPrice="" itemImageAlt="" itemName="Poco M3" itemImage="/images/item/smartphone/poco/Poco-M3.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-X3" itemPrice="" itemImageAlt="" itemName="Poco X3" itemImage="/images/item/smartphone/poco/Poco-X3.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-X2" itemPrice="" itemImageAlt="" itemName="Poco X2" itemImage="/images/item/smartphone/poco/Poco-X2.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-F3" itemPrice="" itemImageAlt="" itemName="Poco F3" itemImage="/images/item/smartphone/poco/Poco-F3.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-M2-Pro" itemPrice="" itemImageAlt="" itemName="Poco M2 Pro" itemImage="/images/item/smartphone/poco/Poco-M2-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-C3" itemPrice="" itemImageAlt="" itemName="Poco C3" itemImage="/images/item/smartphone/poco/Poco-C3.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-M2-Reloaded" itemPrice="" itemImageAlt="" itemName="Poco M2 Reloaded" itemImage="/images/item/smartphone/poco/Poco-M2-Reloaded.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-X3-GT" itemPrice="" itemImageAlt="" itemName="Poco X3 GT" itemImage="/images/item/smartphone/poco/Poco-X3-GT.jpeg" />
                                <Item itemLink="/home/smartphone/poco/Poco-F2-Pro" itemPrice="" itemImageAlt="" itemName="Poco F2 Pro" itemImage="/images/item/smartphone/poco/Poco-F2-Pro.jpeg" />
                            </>
                        ) : iName === "motorola" ? (
                            <>
                                <Item itemLink="/home/smartphone/motorola/Motorola-Edge-20-Pro" itemPrice="" itemImageAlt="" itemName="Motorola Edge 20 Pro" itemImage="/images/item/smartphone/motorola/Motorola-Edge-20-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-G60" itemPrice="" itemImageAlt="" itemName="Motorola Moto G60" itemImage="/images/item/smartphone/motorola/Motorola-Moto-G60.jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-G40-Fusion" itemPrice="" itemImageAlt="" itemName="Motorola Moto G40 Fusion" itemImage="/images/item/smartphone/motorola/Motorola-Moto-G40-Fusion.jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-G-Power-(2021)" itemPrice="" itemImageAlt="" itemName="Motorola Moto G Power (2021)" itemImage="/images/item/smartphone/motorola/Motorola-Moto-G-Power-(2021).jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-G-Stylus-(2021)" itemPrice="" itemImageAlt="" itemName="Motorola Moto G Stylus (2021)" itemImage="/images/item/smartphone/motorola/Motorola-Moto-G-Stylus-(2021).jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-G50" itemPrice="" itemImageAlt="" itemName="Motorola Moto G50" itemImage="/images/item/smartphone/motorola/Motorola-Moto-G50.jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-G100" itemPrice="" itemImageAlt="" itemName="Motorola Moto G100" itemImage="/images/item/smartphone/motorola/Motorola-Moto-G100.jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-G30" itemPrice="" itemImageAlt="" itemName="Motorola Moto G30" itemImage="/images/item/smartphone/motorola/Motorola-Moto-G30.jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-G10-Power" itemPrice="" itemImageAlt="" itemName="Motorola Moto G10 Power" itemImage="/images/item/smartphone/motorola/Motorola-Moto-G10-Power.jpeg" />
                                <Item itemLink="/home/smartphone/motorola/Motorola-Moto-E7-Power" itemPrice="" itemImageAlt="" itemName="Motorola Moto E7 Power" itemImage="/images/item/smartphone/motorola/Motorola-Moto-E7-Power.jpeg" />
                            </>
                        ) : iName === "infinix" ? (
                            <>
                                <Item itemLink="/home/smartphone/infinix/Infinix-Note-11-Pro" itemPrice="" itemImageAlt="" itemName="Infinix Note 11 Pro" itemImage="/images/item/smartphone/infinix/Infinix-Note-11-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Zero-8i" itemPrice="" itemImageAlt="" itemName="Infinix Zero 8i" itemImage="/images/item/smartphone/infinix/Infinix-Zero-8i.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Hot-11S" itemPrice="" itemImageAlt="" itemName="Infinix Hot 11S" itemImage="/images/item/smartphone/infinix/Infinix-Hot-11S.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Smart-5A" itemPrice="" itemImageAlt="" itemName="Infinix Smart 5A" itemImage="/images/item/smartphone/infinix/Infinix-Smart-5A.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Hot-10-Play" itemPrice="" itemImageAlt="" itemName="Infinix Hot 10 Play" itemImage="/images/item/smartphone/infinix/Infinix-Hot-10-Play.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Note-10-Pro" itemPrice="" itemImageAlt="" itemName="Infinix Note 10 Pro" itemImage="/images/item/smartphone/infinix/Infinix-Note-10-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Hot-11" itemPrice="" itemImageAlt="" itemName="Infinix Hot 11" itemImage="/images/item/smartphone/infinix/Infinix-Hot-11.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Zero-X-Neo" itemPrice="" itemImageAlt="" itemName="Infinix Zero X Neo" itemImage="/images/item/smartphone/infinix/Infinix-Zero-X-Neo.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Smart-5" itemPrice="" itemImageAlt="" itemName="Infinix Smart 5" itemImage="/images/item/smartphone/infinix/Infinix-Smart-5.jpeg" />
                                <Item itemLink="/home/smartphone/infinix/Infinix-Hot-10S" itemPrice="" itemImageAlt="" itemName="Infinix Hot 10S" itemImage="/images/item/smartphone/infinix/Infinix-Hot-10S.jpeg" />
                            </>
                        ) : iName === "google" ? (
                            <>
                                <Item itemLink="/home/smartphone/google/Google-Pixel-6-Pro" itemPrice="" itemImageAlt="" itemName="Google Pixel 6 Pro" itemImage="/images/item/smartphone/google/Google-Pixel-6-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-6" itemPrice="" itemImageAlt="" itemName="Google Pixel 6" itemImage="/images/item/smartphone/google/Google-Pixel-6.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-5a" itemPrice="" itemImageAlt="" itemName="Google Pixel 5a" itemImage="/images/item/smartphone/google/Google-Pixel-5a.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-4a-5G" itemPrice="" itemImageAlt="" itemName="Google Pixel 4a 5G" itemImage="/images/item/smartphone/google/Google-Pixel-4a-5G.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-4a" itemPrice="" itemImageAlt="" itemName="Google Pixel 4a" itemImage="/images/item/smartphone/google/Google-Pixel-4a.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-5" itemPrice="" itemImageAlt="" itemName="Google Pixel 5" itemImage="/images/item/smartphone/google/Google-Pixel-5.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-4-XL" itemPrice="" itemImageAlt="" itemName="Google Pixel 4 XL" itemImage="/images/item/smartphone/google/Google-Pixel-4-XL.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-3a" itemPrice="" itemImageAlt="" itemName="Google Pixel 3a" itemImage="/images/item/smartphone/google/Google-Pixel-3a.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-3a-XL" itemPrice="" itemImageAlt="" itemName="Google Pixel 3a XL" itemImage="/images/item/smartphone/google/Google-Pixel-3a-XL.jpeg" />
                                <Item itemLink="/home/smartphone/google/Google-Pixel-3" itemPrice="" itemImageAlt="" itemName="Google Pixel 3" itemImage="/images/item/smartphone/google/Google-Pixel-3.jpeg" />
                            </>
                        ) : iName === "redmi" ? (
                            <>
                                <Item itemLink="/home/smartphone/redmi/Redmi-Note-11-Pro+-5G" itemPrice="" itemImageAlt="" itemName="Redmi Note 11 Pro+ 5G" itemImage="/images/item/smartphone/redmi/Redmi-Note-11-Pro+-5G.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-Note-11S" itemPrice="" itemImageAlt="" itemName="Redmi Note 11S" itemImage="/images/item/smartphone/redmi/Redmi-Note-11S.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-Note-11" itemPrice="" itemImageAlt="" itemName="Redmi Note 11" itemImage="/images/item/smartphone/redmi/Redmi-Note-11.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-Note-10-Pro-Max" itemPrice="" itemImageAlt="" itemName="Redmi Note 10 Pro Max" itemImage="/images/item/smartphone/redmi/Redmi-Note-10-Pro-Max.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-Note-10" itemPrice="" itemImageAlt="" itemName="Redmi Note 10" itemImage="/images/item/smartphone/redmi/Redmi-Note-10.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-Note-11T-5G" itemPrice="" itemImageAlt="" itemName="Redmi Note 11T 5G" itemImage="/images/item/smartphone/redmi/Redmi-Note-11T-5G.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-10-Prime" itemPrice="" itemImageAlt="" itemName="Redmi 10 Prime" itemImage="/images/item/smartphone/redmi/Redmi-10-Prime.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-Note-10T-5G" itemPrice="" itemImageAlt="" itemName="Redmi Note 10T 5G" itemImage="/images/item/smartphone/redmi/Redmi-Note-10T-5G.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-Note-10-Pro" itemPrice="" itemImageAlt="" itemName="Redmi Note 10 Pro" itemImage="/images/item/smartphone/redmi/Redmi-Note-10-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/redmi/Redmi-9-Power" itemPrice="" itemImageAlt="" itemName="Redmi 9 Power" itemImage="/images/item/smartphone/redmi/Redmi-9-Power.jpeg" />
                            </>
                        ) : iName === "apple" ? (
                            <>
                                <Item itemLink="/home/smartphone/apple/iPhone-13-Pro-Max" itemPrice="" itemImageAlt="" itemName="iPhone 13 Pro Max" itemImage="/images/item/smartphone/apple/iPhone-13-Pro-Max.jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-13-Pro" itemPrice="" itemImageAlt="" itemName="iPhone 13 Pro" itemImage="/images/item/smartphone/apple/iPhone-13-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-13" itemPrice="" itemImageAlt="" itemName="iPhone 13" itemImage="/images/item/smartphone/apple/iPhone-13.jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-12-Pro-Max" itemPrice="" itemImageAlt="" itemName="iPhone 12 Pro Max" itemImage="/images/item/smartphone/apple/iPhone-12-Pro-Max.jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-SE-(2020)" itemPrice="" itemImageAlt="" itemName="iPhone SE (2020)" itemImage="/images/item/smartphone/apple/iPhone-SE-(2020).jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-13-mini" itemPrice="" itemImageAlt="" itemName="iPhone 13 mini" itemImage="/images/item/smartphone/apple/iPhone-13-mini.jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-12" itemPrice="" itemImageAlt="" itemName="iPhone 12" itemImage="/images/item/smartphone/apple/iPhone-12.jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-SE-(2022)" itemPrice="" itemImageAlt="" itemName="iPhone SE (2022)" itemImage="/images/item/smartphone/apple/iPhone-SE-(2022).jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-11" itemPrice="" itemImageAlt="" itemName="iPhone 11" itemImage="/images/item/smartphone/apple/iPhone-11.jpeg" />
                                <Item itemLink="/home/smartphone/apple/iPhone-XR" itemPrice="" itemImageAlt="" itemName="iPhone XR" itemImage="/images/item/smartphone/apple/iPhone-XR.jpeg" />
                            </>
                        ) : iName === "oneplus" ? (
                            <>
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-9-Pro" itemPrice="" itemImageAlt="" itemName="OnePlus 9 Pro" itemImage="/images/item/smartphone/oneplus/OnePlus-9-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-9" itemPrice="" itemImageAlt="" itemName="OnePlus 9" itemImage="/images/item/smartphone/oneplus/OnePlus-9.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-Nord-2-5G" itemPrice="" itemImageAlt="" itemName="OnePlus Nord 2 5G" itemImage="/images/item/smartphone/oneplus/OnePlus-Nord-2-5G.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-Nord-CE-5G" itemPrice="" itemImageAlt="" itemName="OnePlus Nord CE 5G" itemImage="/images/item/smartphone/oneplus/OnePlus-Nord-CE-5G.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-8T" itemPrice="" itemImageAlt="" itemName="OnePlus 8T" itemImage="/images/item/smartphone/oneplus/OnePlus-8T.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-8-Pro" itemPrice="" itemImageAlt="" itemName="OnePlus 8 Pro" itemImage="/images/item/smartphone/oneplus/OnePlus-8-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-Nord" itemPrice="" itemImageAlt="" itemName="OnePlus Nord" itemImage="/images/item/smartphone/oneplus/OnePlus-Nord.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-7T" itemPrice="" itemImageAlt="" itemName="OnePlus 7T" itemImage="/images/item/smartphone/oneplus/OnePlus-7T.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-Nord-N200-5G" itemPrice="" itemImageAlt="" itemName="OnePlus Nord N200 5G" itemImage="/images/item/smartphone/oneplus/OnePlus-Nord-N200-5G.jpeg" />
                                <Item itemLink="/home/smartphone/oneplus/OnePlus-7-Pro" itemPrice="" itemImageAlt="" itemName="OnePlus 7 Pro" itemImage="/images/item/smartphone/oneplus/OnePlus-7-Pro.jpeg" />
                            </>
                        ) : iName === "iqoo" ? (
                            <>
                                <Item itemLink="/home/smartphone/iqoo/iQOO-9-Pro" itemPrice="" itemImageAlt="" itemName="iQOO 9 Pro" itemImage="/images/item/smartphone/iqoo/iQOO-9-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-8-Pro" itemPrice="" itemImageAlt="" itemName="iQOO 8 Pro" itemImage="/images/item/smartphone/iqoo/iQOO-8-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-7-Legend" itemPrice="" itemImageAlt="" itemName="iQOO 7 Legend" itemImage="/images/item/smartphone/iqoo/iQOO-7-Legend.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-Z5" itemPrice="" itemImageAlt="" itemName="iQOO Z5" itemImage="/images/item/smartphone/iqoo/iQOO-Z5.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-Z6-5G" itemPrice="" itemImageAlt="" itemName="iQOO Z6 5G" itemImage="/images/item/smartphone/iqoo/iQOO-Z6-5G.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-Z7" itemPrice="" itemImageAlt="" itemName="iQOO Z7" itemImage="/images/item/smartphone/iqoo/iQOO-Z7.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-5-Pro" itemPrice="" itemImageAlt="" itemName="iQOO 5 Pro" itemImage="/images/item/smartphone/iqoo/iQOO-5-Pro.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-Neo-5" itemPrice="" itemImageAlt="" itemName="iQOO Neo 5" itemImage="/images/item/smartphone/iqoo/iQOO-Neo-5.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-U5" itemPrice="" itemImageAlt="" itemName="iQOO U5" itemImage="/images/item/smartphone/iqoo/iQOO-U5.jpeg" />
                                <Item itemLink="/home/smartphone/iqoo/iQOO-Z3" itemPrice="" itemImageAlt="" itemName="iQOO Z3" itemImage="/images/item/smartphone/iqoo/iQOO-Z3.jpeg" />
                            </>
                        ) : iName === "nothing" ? (
                            <>
                                <Item itemLink="/home/smartphone/nothing/Nothing-Phone-1" itemPrice="" itemImageAlt="" itemName="Nothing Phone 1" itemImage="/images/item/smartphone/nothing/Nothing-Phone-1.jpeg" />
                                <Item itemLink="/home/smartphone/nothing/Nothing-Phone-2" itemPrice="" itemImageAlt="" itemName="Nothing Phone 2" itemImage="/images/item/smartphone/nothing/Nothing-Phone-2.jpeg" />
                            </>
                        ) : (
                            <>
                                <Error message="Product Not Found" />
                                {/* <h1>ItemsTemplate- Phone</h1> */}
                            </>
                        )}
                    </div>
                ) : productName === "smartwatch" ? (
                    <div className="flex flex-wrap -m-4">
                        {iName === "noise" ? (
                            <>
                                <Item itemLink="/home/smartwatch/noise/Noise-ColorFit-Ultra" itemPrice="" itemImageAlt="" itemName="Noise ColorFit Ultra" itemImage="/images/item/smartwatch/noise/Noise-ColorFit-Ultra.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/NoiseFit-Endure" itemPrice="" itemImageAlt="" itemName="NoiseFit Endure" itemImage="/images/item/smartwatch/noise/NoiseFit-Endure.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/Noise-ColorFit-Pulse" itemPrice="" itemImageAlt="" itemName="Noise ColorFit Pulse" itemImage="/images/item/smartwatch/noise/Noise-ColorFit-Pulse.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/NoiseFit-Core" itemPrice="" itemImageAlt="" itemName="NoiseFit Core" itemImage="/images/item/smartwatch/noise/NoiseFit-Core.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/NoiseFit-Pace-2" itemPrice="" itemImageAlt="" itemName="NoiseFit Pace 2" itemImage="/images/item/smartwatch/noise/NoiseFit-Pace-2.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/NoiseFit-Zen" itemPrice="" itemImageAlt="" itemName="NoiseFit Zen" itemImage="/images/item/smartwatch/noise/NoiseFit-Zen.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/NoiseFit-Evolve-Neo" itemPrice="" itemImageAlt="" itemName="NoiseFit Evolve Neo" itemImage="/images/item/smartwatch/noise/NoiseFit-Evolve-Neo.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/NoiseFit-Verve" itemPrice="" itemImageAlt="" itemName="NoiseFit Verve" itemImage="/images/item/smartwatch/noise/NoiseFit-Verve.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/NoiseFit-Thrust" itemPrice="" itemImageAlt="" itemName="NoiseFit Thrust" itemImage="/images/item/smartwatch/noise/NoiseFit-Thrust.jpeg" />
                                <Item itemLink="/home/smartwatch/noise/NoiseFit-Pulse-Grand" itemPrice="" itemImageAlt="" itemName="NoiseFit Pulse Grand" itemImage="/images/item/smartwatch/noise/NoiseFit-Pulse-Grand.jpeg" />
                            </>
                        ) : iName === "fireboltt" ? (
                            <>
                                <Item itemLink="/home/smartwatch/fireboltt/Fire-Boltt-Beast" itemPrice="" itemImageAlt="" itemName="Fire-Boltt Beast" itemImage="/images/item/smartwatch/fireboltt/Fire-Boltt-Beast.jpeg" />
                                <Item itemLink="/home/smartwatch/fireboltt/Fire-Boltt-Ninja" itemPrice="" itemImageAlt="" itemName="Fire-Boltt Ninja" itemImage="/images/item/smartwatch/fireboltt/Fire-Boltt-Ninja.jpeg" />
                                <Item itemLink="/home/smartwatch/fireboltt/Fire-Boltt-Ring" itemPrice="" itemImageAlt="" itemName="Fire-Boltt Ring" itemImage="/images/item/smartwatch/fireboltt/Fire-Boltt-Ring.jpeg" />
                                <Item itemLink="/home/smartwatch/fireboltt/Fire-Boltt-Ninja-Pro" itemPrice="" itemImageAlt="" itemName="Fire-Boltt Ninja Pro" itemImage="/images/item/smartwatch/fireboltt/Fire-Boltt-Ninja-Pro.jpeg" />
                                <Item itemLink="/home/smartwatch/fireboltt/Fire-Boltt-Mercury" itemPrice="" itemImageAlt="" itemName="Fire-Boltt Mercury" itemImage="/images/item/smartwatch/fireboltt/Fire-Boltt-Mercury.jpeg" />
                                <Item itemLink="/home/smartwatch/fireboltt/Fire-Boltt-Beast Plus" itemPrice="" itemImageAlt="" itemName="Fire-Boltt Beast Plus" itemImage="/images/item/smartwatch/fireboltt/Fire-Boltt-Beast-Plus.jpeg" />
                                <Item itemLink="/home/smartwatch/fireboltt/Fire-Boltt-Hawk" itemPrice="" itemImageAlt="" itemName="Fire-Boltt Hawk" itemImage="/images/item/smartwatch/fireboltt/Fire-Boltt-Hawk.jpeg" />
                                <Item itemLink="/home/smartwatch/fireboltt/Fire-Boltt-Hawk Pro" itemPrice="" itemImageAlt="" itemName="Fire-Boltt Hawk Pro" itemImage="/images/item/smartwatch/fireboltt/Fire-Boltt-Hawk-Pro.jpeg" />
                            </>
                        ) : iName === "apple" ? (
                            <>
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-Series-7" itemPrice="" itemImageAlt="" itemName="Apple Watch Series 7" itemImage="/images/item/smartwatch/apple/Apple-Watch-Series-7.jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-SE" itemPrice="" itemImageAlt="" itemName="Apple Watch SE" itemImage="/images/item/smartwatch/apple/Apple-Watch-SE.jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-Series-6" itemPrice="" itemImageAlt="" itemName="Apple Watch Series 6" itemImage="/images/item/smartwatch/apple/Apple-Watch-Series-6.jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-Series-5" itemPrice="" itemImageAlt="" itemName="Apple Watch Series 5" itemImage="/images/item/smartwatch/apple/Apple-Watch-Series-5.jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-SE-(2022)" itemPrice="" itemImageAlt="" itemName="Apple Watch SE (2022)" itemImage="/images/item/smartwatch/apple/Apple-Watch-SE-(2022).jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-Series-4" itemPrice="" itemImageAlt="" itemName="Apple Watch Series-4" itemImage="/images/item/smartwatch/apple/Apple-Watch-Series-4.jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-Series-3" itemPrice="" itemImageAlt="" itemName="Apple Watch Series-3" itemImage="/images/item/smartwatch/apple/Apple-Watch-Series-3.jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-Series-2" itemPrice="" itemImageAlt="" itemName="Apple Watch Series-2" itemImage="/images/item/smartwatch/apple/Apple-Watch-Series-2.jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-Series-1" itemPrice="" itemImageAlt="" itemName="Apple Watch Series-1" itemImage="/images/item/smartwatch/apple/Apple-Watch-Series-1.jpeg" />
                                <Item itemLink="/home/smartwatch/apple/Apple-Watch-Series-0" itemPrice="" itemImageAlt="" itemName="Apple Watch Series-0" itemImage="/images/item/smartwatch/apple/Apple-Watch-Series-0.jpeg" />
                            </>
                        ) : iName === "samsung" ? (
                            <>
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-4" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch 4" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-4.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-4-Classic" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch 4-Classic" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-4-Classic.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-3" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch 3" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-3.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-Active-2" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch Active 2" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-2.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-Active" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch Active" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-Active-3" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch Active 3" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-3.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-Active-4" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch Active 4" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-4.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-Active-5" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch Active 5" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-5.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-Active-6" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch Active 6" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-6.jpeg" />
                                <Item itemLink="/home/smartwatch/samsung/Samsung-Galaxy-Watch-Active-7" itemPrice="" itemImageAlt="" itemName="Samsung Galaxy Watch Active 7" itemImage="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-7.jpeg" />
                            </>
                        ) : iName === "boat" ? (
                            <>
                                <Item itemLink="/home/smartwatch/boat/boAt-Xtend" itemPrice="" itemImageAlt="" itemName="boAt Xtend" itemImage="/images/item/smartwatch/boat/boAt-Xtend.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Flash" itemPrice="" itemImageAlt="" itemName="boAt Flash" itemImage="/images/item/smartwatch/boat/boAt-Flash.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Enigma" itemPrice="" itemImageAlt="" itemName="boAt Enigma" itemImage="/images/item/smartwatch/boat/boAt-Enigma.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Flash-Pro" itemPrice="" itemImageAlt="" itemName="boAt Flash Pro" itemImage="/images/item/smartwatch/boat/boAt-Flash-Pro.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Xtend+" itemPrice="" itemImageAlt="" itemName="boAt Xtend+" itemImage="/images/item/smartwatch/boat/boAt-Xtend+.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Wave" itemPrice="" itemImageAlt="" itemName="boAt Wave" itemImage="/images/item/smartwatch/boat/boAt-Wave.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Xtend-Pro" itemPrice="" itemImageAlt="" itemName="boAt Xtend Pro" itemImage="/images/item/smartwatch/boat/boAt-Xtend-Pro.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Wave-Pro" itemPrice="" itemImageAlt="" itemName="boAt Wave Pro" itemImage="/images/item/smartwatch/boat/boAt-Wave-Pro.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Xtend+-Pro" itemPrice="" itemImageAlt="" itemName="boAt Xtend+ Pro" itemImage="/images/item/smartwatch/boat/boAt-Xtend+-Pro.jpeg" />
                                <Item itemLink="/home/smartwatch/boat/boAt-Flash-Xpert" itemPrice="" itemImageAlt="" itemName="boAt Flash Xpert" itemImage="/images/item/smartwatch/boat/boAt-Flash-Xpert.jpeg" />
                            </>
                        ) : iName === "fastrack" ? (
                            <>
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-5.0" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex 5.0" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-5.0.jpeg" />
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-Beat" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex Beat" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-Beat.jpeg" />
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-3.0" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex 3.0" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-3.0.jpeg" />
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-2.0" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex 2.0" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-2.0.jpeg" />
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-1.0" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex 1.0" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-1.0.jpeg" />
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-Wav" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex Wav" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-Wav.jpeg" />
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-Pulse" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex Pulse" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-Pulse.jpeg" />
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-Pulse-Pro" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex Pulse Pro" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-Pulse-Pro.jpeg" />
                                <Item itemLink="/home/smartwatch/fastrack/Fastrack-Reflex-Beat-Pro" itemPrice="" itemImageAlt="" itemName="Fastrack Reflex Beat Pro" itemImage="/images/item/smartwatch/fastrack/Fastrack-Reflex-Beat-Pro.jpeg" />
                            </>
                        ) : (
                            <>
                                <Error message="Product Not Found" />
                                {/* <h1>Items Template - watch</h1> */}
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        <Error message="Product Not Found" />
                        {/* <h1>Items Template - none</h1> */}
                    </>
                )}
            </div>

            <Footer />
        </>
    );
}

export default ItemsTemplate;
