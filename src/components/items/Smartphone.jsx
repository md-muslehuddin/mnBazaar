import React from 'react'
import { useParams } from 'react-router-dom'
import SmartphoneDetails from '../template/SmartphoneDetails'
import Error from '../Error'


function Smartphone() {
    const params = useParams();
    const { iName, iDetails } = params;
    return (
        <>
            {iName === "samsung" ? (
                <>
                    {iDetails === "Samsung-Galaxy-S21-Ultra" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-S21-Ultra.jpeg"
                            deviceName="Samsung Galaxy S21 Ultra"
                            brand="Samsung" price="₹ 1,05,999"
                            release="January 2021"
                            battery="5000 mAh"
                            display="6.8 inches, Dynamic AMOLED 2X"
                            processor="Exynos 2100"
                            ram="12GB" storage="128GB"
                            rearCamera="Quad-camera setup (108MP + 12MP + 10MP + 10MP)"
                            frontCamera="40MP"
                            description="Flagship smartphone with top-tier specifications, high-resolution camera system, and advanced features."
                        />
                    ) : iDetails === "Samsung-Galaxy-Note-20-Ultra" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-Note-20-Ultra.jpeg"
                            deviceName="Samsung Galaxy Note 20 Ultra"
                            brand="Samsung"
                            price="₹ 1,04,999"
                            release="2020"
                            battery="4500 mAh"
                            display="6.9 inches Dynamic AMOLED 2X"
                            processor="Exynos 990"
                            ram="12 GB"
                            storage="256 GB"
                            rearCamera="Triple 108 MP + 12 MP + 12 MP"
                            frontCamera="10 MP"
                            description="The Samsung Galaxy Note 20 Ultra combines productivity features with high-end specifications, including a versatile S Pen and a premium design."
                        />
                    ) : iDetails === "Samsung-Galaxy-Z-Fold-2" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-Z-Fold-2.jpeg"
                            deviceName="Samsung Galaxy Z Fold 2"
                            brand="Samsung"
                            price="₹ 1,49,999"
                            release="2020"
                            battery="4500 mAh"
                            display="7.6 inches Dynamic AMOLED 2X (foldable)"
                            processor="Snapdragon 865+"
                            ram="12 GB"
                            storage="256 GB"
                            rearCamera="Triple 12 MP + 12 MP + 12 MP"
                            frontCamera="10 MP (Cover), 10 MP (Main)"
                            description="The Samsung Galaxy Z Fold 2 offers a foldable display experience with powerful specifications, ideal for multitasking and creative tasks."
                        />
                    ) : iDetails === "Samsung-Galaxy-S21" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-S21.jpeg.jpeg"
                            deviceName="Samsung Galaxy S21"
                            brand="Samsung"
                            price="₹ 69,999"
                            release="2021"
                            battery="4000 mAh"
                            display="6.2 inches Dynamic AMOLED 2X"
                            processor="Exynos 2100"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 12 MP + 12 MP"
                            frontCamera="10 MP"
                            description="The Samsung Galaxy S21 is a compact flagship smartphone with a high-performance camera setup and a vivid display."
                        />
                    ) : iDetails === "Samsung-Galaxy-Note-20" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-Note-20.jpeg"
                            deviceName="Samsung Galaxy Note 20"
                            brand="Samsung"
                            price="₹ 77,999"
                            release="2020"
                            battery="4300 mAh"
                            display="6.7 inches Super AMOLED Plus"
                            processor="Exynos 990"
                            ram="8 GB"
                            storage="256 GB"
                            rearCamera="Triple 64 MP + 12 MP + 12 MP"
                            frontCamera="10 MP"
                            description="The Samsung Galaxy Note 20 features a powerful S Pen, premium design, and excellent camera capabilities."
                        />
                    ) : iDetails === "Samsung-Galaxy-A52" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-A52.jpeg"
                            deviceName="Samsung Galaxy A52"
                            brand="Samsung"
                            price="₹ 26,499"
                            release="2021"
                            battery="4500 mAh"
                            display="6.5 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 720G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 12 MP + 5 MP + 5 MP"
                            frontCamera="32 MP"
                            description="The Samsung Galaxy A52 offers a versatile camera setup, a vibrant display, and long battery life at an affordable price."
                        />
                    ) : iDetails === "Samsung-Galaxy-M51" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-M51.jpeg"
                            deviceName="Samsung Galaxy M51"
                            brand="Samsung"
                            price="₹ 22,999"
                            release="2020"
                            battery="7000 mAh"
                            display="6.7 inches Super AMOLED Plus"
                            processor="Qualcomm Snapdragon 730G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 12 MP + 5 MP + 5 MP"
                            frontCamera="32 MP"
                            description="The Samsung Galaxy M51 boasts a massive battery, impressive display, and reliable performance, ideal for multimedia enthusiasts."
                        />
                    ) : iDetails === "Samsung-Galaxy-F62" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-F62.jpeg"
                            deviceName="Samsung Galaxy F62"
                            brand="Samsung"
                            price="₹ 23,999"
                            release="2021"
                            battery="7000 mAh"
                            display="6.7 inches Super AMOLED Plus"
                            processor="Exynos 9825"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 12 MP + 5 MP + 5 MP"
                            frontCamera="32 MP"
                            description="The Samsung Galaxy F62 offers a powerful processor and a massive battery, suitable for heavy users and gamers."
                        />
                    ) : iDetails === "Samsung-Galaxy-M31s" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-M31s.jpeg"
                            deviceName="Samsung Galaxy M31s"
                            brand="Samsung"
                            price="₹ 19,499"
                            release="2020"
                            battery="6000 mAh"
                            display="6.5 inches Super AMOLED"
                            processor="Exynos 9611"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 12 MP + 5 MP + 5 MP"
                            frontCamera="32 MP"
                            description="The Samsung Galaxy M31s offers a large battery capacity and impressive camera performance, ideal for budget-conscious users."
                        />
                    ) : iDetails === "Samsung-Galaxy-A32" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/samsung/Samsung-Galaxy-A32.jpeg"
                            deviceName="Samsung Galaxy A32"
                            brand="Samsung"
                            price="₹ 21,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.4 inches Super AMOLED"
                            processor="Mediatek Helio G80"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 8 MP + 5 MP + 5 MP"
                            frontCamera="20 MP"
                            description="The Samsung Galaxy A32 offers a sleek design, good performance, and a versatile camera setup at an attractive price point."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Galaxy</h1> */}
                        </>
                    )}
                </>
            ) : iName === "vivo" ? (
                <>
                    {iDetails === "Vivo-X60-Pro+" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-X60-Pro+.jpeg"
                            deviceName="Vivo X60 Pro+"
                            brand="Vivo"
                            price="₹ 79,990"
                            release="2021"
                            battery="4200 mAh"
                            display="6.56 inches AMOLED"
                            processor="Qualcomm Snapdragon 888"
                            ram="12 GB"
                            storage="256 GB"
                            rearCamera="Quad 50 MP + 48 MP + 32 MP + 8 MP"
                            frontCamera="32 MP"
                            description="The Vivo X60 Pro+ features a powerful Snapdragon 888 processor, impressive camera setup, and sleek design."
                        />
                    ) : iDetails === "Vivo-V21" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-V21.jpeg"
                            deviceName="Vivo V21"
                            brand="Vivo"
                            price="₹ 29,990"
                            release="2021"
                            battery="4000 mAh"
                            display="6.44 inches AMOLED"
                            processor="MediaTek Dimensity 800U"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="44 MP"
                            description="The Vivo V21 offers a stunning design, high-resolution front camera, and solid performance for its price segment."
                        />
                    ) : iDetails === "Vivo-Y73" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-Y73.jpeg"
                            deviceName="Vivo Y73"
                            brand="Vivo"
                            price="₹ 20,990"
                            release="2021"
                            battery="4000 mAh"
                            display="6.44 inches AMOLED"
                            processor="MediaTek Helio G95"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Vivo Y73 features a stylish design, good camera capabilities, and adequate performance for daily use."
                        />
                    ) : iDetails === "Vivo-X50-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-X50-Pro.jpeg"
                            deviceName="Vivo X50 Pro"
                            brand="Vivo"
                            price="₹ 49,990"
                            release="2020"
                            battery="4315 mAh"
                            display="6.56 inches AMOLED"
                            processor="Qualcomm Snapdragon 765G"
                            ram="8 GB"
                            storage="256 GB"
                            rearCamera="Quad 48 MP + 13 MP + 8 MP + 8 MP"
                            frontCamera="32 MP"
                            description="The Vivo X50 Pro features a gimbal stabilization system for impressive photography and a sleek design."
                        />
                    ) : iDetails === "Vivo-Y20" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-Y20.jpeg"
                            deviceName="Vivo Y20"
                            brand="Vivo"
                            price="₹ 13,990"
                            release="2020"
                            battery="5000 mAh"
                            display="6.51 inches IPS LCD"
                            processor="MediaTek Helio P35"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 13 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Vivo Y20 offers a large battery capacity and decent performance at an affordable price point."
                        />
                    ) : iDetails === "Vivo-V21e" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-V21e.jpeg"
                            deviceName="Vivo V21e"
                            brand="Vivo"
                            price="₹ 24,990"
                            release="2021"
                            battery="4000 mAh"
                            display="6.44 inches AMOLED"
                            processor="MediaTek Dimensity 700"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Dual 64 MP + 8 MP"
                            frontCamera="44 MP"
                            description="The Vivo V21e features a sleek design, impressive front camera capabilities, and decent performance for its price range."
                        />

                    ) : iDetails === "Vivo-Y31" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-Y31.jpeg"
                            deviceName="Vivo Y31"
                            brand="Vivo"
                            price="₹ 16,490"
                            release="2021"
                            battery="5000 mAh"
                            display="6.58 inches IPS LCD"
                            processor="Qualcomm Snapdragon 662"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Vivo Y31 offers a large battery capacity, ample storage, and a capable camera setup at an affordable price."
                        />
                    ) : iDetails === "Vivo-V21-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-V21-5G.jpeg"
                            deviceName="Vivo V21 5G"
                            brand="Vivo"
                            price="₹ 29,990"
                            release="2021"
                            battery="4000 mAh"
                            display="6.44 inches AMOLED"
                            processor="MediaTek Dimensity 800U"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="44 MP"
                            description="The Vivo V21 5G offers 5G connectivity, a high-resolution front camera, and smooth performance in a stylish design."
                        />
                    ) : iDetails === "Vivo-Y20G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-Y20G.jpeg"
                            deviceName="Vivo Y20G"
                            brand="Vivo"
                            price="₹ 14,990"
                            release="2021"
                            battery="5000 mAh"
                            display="6.51 inches IPS LCD"
                            processor="Mediatek Helio G80"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 13 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Vivo Y20G features a large battery, capable processor, and decent camera setup, suitable for everyday use."
                        />
                    ) : iDetails === "Vivo-X60" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/vivo/Vivo-X60.jpeg"
                            deviceName="Vivo X60"
                            brand="Vivo"
                            price="₹ 37,990"
                            release="2021"
                            battery="4300 mAh"
                            display="6.56 inches AMOLED"
                            processor="Qualcomm Snapdragon 870"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 13 MP + 13 MP"
                            frontCamera="32 MP"
                            description="The Vivo X60 features a powerful Snapdragon 870 processor, impressive camera capabilities, and a slim design."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            <h1>Smartphone - Vivo</h1>
                        </>
                    )}
                </>
            ) : iName === "oppo" ? (
                <>
                    {iDetails === "Oppo-Reno6-Pro-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-Reno6-Pro-5G.jpeg"
                            deviceName="Oppo Reno6 Pro 5G"
                            brand="Oppo"
                            price="₹ 39,990"
                            release="2021"
                            battery="4500 mAh"
                            display="6.55 inches AMOLED"
                            processor="MediaTek Dimensity 1200"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The Oppo Reno6 Pro 5G offers 5G connectivity, a sleek design, and powerful camera features suitable for photography enthusiasts."
                        />
                    ) : iDetails === "Oppo-F19-Pro+-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-F19-Pro+-5G.jpeg"
                            deviceName="Oppo F19 Pro+ 5G"
                            brand="Oppo"
                            price="₹ 25,990"
                            release="2021"
                            battery="4310 mAh"
                            display="6.43 inches Super AMOLED"
                            processor="MediaTek Dimensity 800U"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Oppo F19 Pro+ 5G offers a Super AMOLED display, 5G connectivity, and a capable camera setup at an attractive price."
                        />
                    ) : iDetails === "Oppo-A74-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-A74-5G.jpeg"
                            deviceName="Oppo A74 5G"
                            brand="Oppo"
                            price="₹ 20,990"
                            release="2021"
                            battery="5000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="Qualcomm Snapdragon 480"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Oppo A74 5G features a large battery, 5G connectivity, and a decent camera setup, making it a solid choice in its price range."
                        />
                    ) : iDetails === "Oppo-F17-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-F17-Pro.jpeg"
                            deviceName="Oppo F17 Pro"
                            brand="Oppo"
                            price="₹ 22,990"
                            release="2020"
                            battery="4015 mAh"
                            display="6.43 inches Super AMOLED"
                            processor="MediaTek Helio P95"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="16 MP + 2 MP"
                            description="The Oppo F17 Pro offers a sleek design, AMOLED display, and versatile camera capabilities at a competitive price."
                        />
                    ) : iDetails === "Oppo-A15" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-A15.jpeg"
                            deviceName="Oppo A15"
                            brand="Oppo"
                            price="₹ 9,990"
                            release="2020"
                            battery="4230 mAh"
                            display="6.52 inches IPS LCD"
                            processor="MediaTek Helio P35"
                            ram="3 GB"
                            storage="32 GB"
                            rearCamera="Triple 13 MP + 2 MP + 2 MP"
                            frontCamera="5 MP"
                            description="The Oppo A15 offers basic features with a budget-friendly price tag, suitable for users looking for an affordable smartphone."
                        />
                    ) : iDetails === "Oppo-F19" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-F19.jpeg"
                            deviceName="Oppo F19"
                            brand="Oppo"
                            price="₹ 18,990"
                            release="2021"
                            battery="5000 mAh"
                            display="6.43 inches AMOLED"
                            processor="Qualcomm Snapdragon 662"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Oppo F19 offers a large battery, AMOLED display, and capable camera setup at a competitive price."
                        />
                    ) : iDetails === "Oppo-Reno5-Pro-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-Reno5-Pro-5G.jpeg"
                            deviceName="Oppo Reno5 Pro 5G"
                            brand="Oppo"
                            price="₹ 35,990"
                            release="2021"
                            battery="4350 mAh"
                            display="6.55 inches AMOLED"
                            processor="MediaTek Dimensity 1000+"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The Oppo Reno5 Pro 5G offers 5G connectivity, a sleek design, and impressive camera features for photography enthusiasts."
                        />
                    ) : iDetails === "Oppo-A53" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-A53.jpeg"
                            deviceName="Oppo A53"
                            brand="Oppo"
                            price="₹ 12,990"
                            release="2020"
                            battery="5000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="Qualcomm Snapdragon 460"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 13 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Oppo A53 features a large battery, decent display, and good camera setup, suitable for budget-conscious users."
                        />
                    ) : iDetails === "Oppo-A74" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-A74.jpeg"
                            deviceName="Oppo A74"
                            brand="Oppo"
                            price="₹ 17,990"
                            release="2021"
                            battery="5000 mAh"
                            display="6.43 inches AMOLED"
                            processor="Qualcomm Snapdragon 662"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Oppo A74 offers a balanced feature set with a large battery, AMOLED display, and capable camera system."
                        />
                    ) : iDetails === "Oppo-Find-X3-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oppo/Oppo-Find-X3-Pro.jpeg"
                            deviceName="Oppo Find X3 Pro"
                            brand="Oppo"
                            price="₹ 79,990"
                            release="2021"
                            battery="4500 mAh"
                            display="6.7 inches AMOLED"
                            processor="Qualcomm Snapdragon 888"
                            ram="12 GB"
                            storage="256 GB"
                            rearCamera="Quad 50 MP + 50 MP + 13 MP + 3 MP"
                            frontCamera="32 MP"
                            description="The Oppo Find X3 Pro is a flagship device featuring top-of-the-line specifications, including a high-resolution camera setup and a vibrant AMOLED display."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Oppo</h1> */}
                        </>
                    )}
                </>
            ) : iName === "realme" ? (
                <>
                    {iDetails === "Realme-9-Pro+" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-9-Pro+.jpeg"
                            deviceName="Realme 9 Pro+"
                            brand="Realme"
                            price="₹ 24,999"
                            release="2023"
                            battery="5000 mAh"
                            display="6.7 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 895"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 108 MP + 16 MP + 8 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The Realme 9 Pro+ features a high-resolution AMOLED display, powerful Snapdragon 895 processor, and impressive camera capabilities."
                        />
                    ) : iDetails === "Realme-GT-2" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-GT-2.jpeg"
                            deviceName="Realme GT 2"
                            brand="Realme"
                            price="₹ 29,999"
                            release="2023"
                            battery="4500 mAh"
                            display="6.5 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 895"
                            ram="8 GB"
                            storage="256 GB"
                            rearCamera="Quad 64 MP + 16 MP + 8 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The Realme GT 2 offers flagship-level performance with the Snapdragon 895 chipset, Super AMOLED display, and versatile camera setup."
                        />
                    ) : iDetails === "Realme-9" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-9.jpeg"
                            deviceName="Realme 9"
                            brand="Realme"
                            price="₹ 19,999"
                            release="2023"
                            battery="5000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="Qualcomm Snapdragon 680"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 50 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Realme 9 offers solid features including a large battery, capable processor, and decent camera setup, suitable for everyday use."
                        />
                    ) : iDetails === "Realme-9i" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-9i.jpeg"
                            deviceName="Realme 9i"
                            brand="Realme"
                            price="₹ 14,999"
                            release="2023"
                            battery="6000 mAh"
                            display="6.6 inches IPS LCD"
                            processor="Mediatek Helio G80"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 50 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Realme 9i offers a large battery capacity, decent performance, and good camera features at an affordable price."
                        />
                    ) : iDetails === "Realme-GT-Neo-3" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-GT-Neo-3.jpeg"
                            deviceName="Realme GT Neo 3"
                            brand="Realme"
                            price="₹ 27,999"
                            release="2023"
                            battery="5000 mAh"
                            display="6.7 inches Super AMOLED"
                            processor="MediaTek Dimensity 2000"
                            ram="12 GB"
                            storage="256 GB"
                            rearCamera="Quad 108 MP + 16 MP + 8 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The Realme GT Neo 3 offers flagship-grade performance with the Dimensity 2000 chipset, Super AMOLED display, and advanced camera capabilities."
                        />
                    ) : iDetails === "Realme-9-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-9-Pro.jpeg"
                            deviceName="Realme 9 Pro"
                            brand="Realme"
                            price="₹ 21,999"
                            release="2023"
                            battery="5000 mAh"
                            display="6.5 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 750G"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The Realme 9 Pro offers a Super AMOLED display, powerful Snapdragon 750G processor, and versatile camera setup."
                        />
                    ) : iDetails === "Realme-GT-Master-Edition" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-GT-Master-Edition.jpeg"
                            deviceName="Realme GT Master Edition"
                            brand="Realme"
                            price="₹ 24,999"
                            release="2022"
                            battery="4300 mAh"
                            display="6.43 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 778G"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The Realme GT Master Edition offers a unique design, Snapdragon 778G chipset, and impressive camera capabilities."
                        />
                    ) : iDetails === "Realme-9i-Prime" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-9i-Prime.jpeg"
                            deviceName="Realme 9i Prime"
                            brand="Realme"
                            price="₹ 14,999"
                            release="2023"
                            battery="5000 mAh"
                            display="6.6 inches IPS LCD"
                            processor="Mediatek Helio G96"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 50 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Realme 9i Prime offers essential features with a focus on value, including a large battery and capable camera system."
                        />
                    ) : iDetails === "Realme-GT-Neo-2" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-GT-Neo-2.jpeg"
                            deviceName="Realme GT Neo 2"
                            brand="Realme"
                            price="₹ 25,999"
                            release="2022"
                            battery="5000 mAh"
                            display="6.62 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 870"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Realme GT Neo 2 offers flagship-level performance with the Snapdragon 870 chipset, Super AMOLED display, and versatile camera setup."
                        />
                    ) : iDetails === "Realme-C35" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/realme/Realme-C35.jpeg"
                            deviceName="Realme C35"
                            brand="Realme"
                            price="₹ 9,999"
                            release="2023"
                            battery="5000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="Mediatek Helio G35"
                            ram="3 GB"
                            storage="64 GB"
                            rearCamera="Dual 13 MP + 2 MP"
                            frontCamera="5 MP"
                            description="The Realme C35 offers essential smartphone features at an affordable price, suitable for budget-conscious users."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Realme</h1> */}
                        </>
                    )}
                </>
            ) : iName === "poco" ? (
                <>
                    {iDetails === "Poco-X3-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-X3-Pro.jpeg"
                            deviceName="Poco X3 Pro"
                            brand="Poco"
                            price="₹ 18,999"
                            release="2021"
                            battery="5160 mAh"
                            display="6.67 inches IPS LCD"
                            processor="Qualcomm Snapdragon 860"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="20 MP"
                            description="The Poco X3 Pro offers a high-performance Snapdragon 860 processor, large battery capacity, and a versatile camera system."
                        />
                    ) : iDetails === "Poco-M3" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-M3.jpeg"
                            deviceName="Poco M3"
                            brand="Poco"
                            price="₹ 10,999"
                            release="2020"
                            battery="6000 mAh"
                            display="6.53 inches IPS LCD"
                            processor="Qualcomm Snapdragon 662"
                            ram="6 GB"
                            storage="64 GB"
                            rearCamera="Triple 48 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Poco M3 features a large battery, stylish design, and decent camera setup at an affordable price."
                        />
                    ) : iDetails === "Poco-X3" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-X3.jpeg"
                            deviceName="Poco X3"
                            brand="Poco"
                            price="₹ 16,999"
                            release="2020"
                            battery="6000 mAh"
                            display="6.67 inches IPS LCD"
                            processor="Qualcomm Snapdragon 732G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 13 MP + 2 MP + 2 MP"
                            frontCamera="20 MP"
                            description="The Poco X3 offers a smooth gaming experience, large battery, and impressive camera capabilities in its price segment."
                        />
                    ) : iDetails === "Poco-X2" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-X2.jpeg"
                            deviceName="Poco X2"
                            brand="Poco"
                            price="₹ 17,499"
                            release="2020"
                            battery="4500 mAh"
                            display="6.67 inches IPS LCD"
                            processor="Qualcomm Snapdragon 730G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="20 MP + 2 MP"
                            description="The Poco X2 offers a smooth display with a high refresh rate, capable performance, and good camera features."
                        />
                    ) : iDetails === "Poco-F3" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-F3.jpeg"
                            deviceName="Poco F3"
                            brand="Poco"
                            price="₹ 26,999"
                            release="2021"
                            battery="4520 mAh"
                            display="6.67 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 870"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 8 MP + 5 MP"
                            frontCamera="20 MP"
                            description="The Poco F3 offers flagship-level performance with the Snapdragon 870 chipset, Super AMOLED display, and impressive camera setup."
                        />
                    ) : iDetails === "Poco-M2-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-M2-Pro.jpeg"
                            deviceName="Poco M2 Pro"
                            brand="Poco"
                            price="₹ 13,999"
                            release="2020"
                            battery="5000 mAh"
                            display="6.67 inches IPS LCD"
                            processor="Qualcomm Snapdragon 720G"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Quad 48 MP + 8 MP + 5 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Poco M2 Pro offers a balanced feature set with a large battery, capable processor, and versatile camera setup at an affordable price."
                        />
                    ) : iDetails === "Poco-C3" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-C3.jpeg"
                            deviceName="Poco C3"
                            brand="Poco"
                            price="₹ 7,499"
                            release="2020"
                            battery="5000 mAh"
                            display="6.53 inches IPS LCD"
                            processor="Mediatek Helio G35"
                            ram="3 GB"
                            storage="32 GB"
                            rearCamera="Triple 13 MP + 2 MP + 2 MP"
                            frontCamera="5 MP"
                            description="The Poco C3 offers essential features including a large battery, budget-friendly pricing, and decent camera capabilities."
                        />
                    ) : iDetails === "Poco-M2-Reloaded" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-M2-Reloaded.jpeg"
                            deviceName="Poco M2 Reloaded"
                            brand="Poco"
                            price="₹ 9,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.53 inches IPS LCD"
                            processor="Mediatek Helio G80"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Quad 13 MP + 8 MP + 5 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Poco M2 Reloaded offers a reliable performance with a focus on value, featuring a large battery and capable camera setup."
                        />
                    ) : iDetails === "Poco-X3-GT" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-X3-GT.jpeg"
                            deviceName="Poco X3 GT"
                            brand="Poco"
                            price="₹ 21,999"
                            release="2021"
                            battery="5160 mAh"
                            display="6.6 inches IPS LCD"
                            processor="Mediatek Dimensity 1100"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Poco X3 GT offers strong performance with the Dimensity 1100 chipset, a high-refresh-rate display, and a capable camera system."
                        />
                    ) : iDetails === "Poco-F2-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/poco/Poco-F2-Pro.jpeg"
                            deviceName="Poco F2 Pro"
                            brand="Poco"
                            price="₹ 29,999"
                            release="2020"
                            battery="4700 mAh"
                            display="6.67 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 865"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 13 MP + 5 MP + 2 MP"
                            frontCamera="20 MP"
                            description="The Poco F2 Pro is a flagship device offering top-notch performance with the Snapdragon 865 chipset, Super AMOLED display, and versatile camera setup."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Poco</h1> */}
                        </>
                    )}
                </>
            ) : iName === "motorola" ? (
                <>
                    {iDetails === "Motorola-Edge-20-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Edge-20-Pro.jpeg"
                            deviceName="Motorola Edge 20 Pro"
                            brand="Motorola"
                            price="₹ 49,999"
                            release="2021"
                            battery="4500 mAh"
                            display="6.7 inches OLED"
                            processor="Qualcomm Snapdragon 870"
                            ram="8 GB"
                            storage="256 GB"
                            rearCamera="Triple 108 MP + 16 MP + 8 MP"
                            frontCamera="32 MP"
                            description="The Motorola Edge 20 Pro features a stunning OLED display, Snapdragon 870 chipset, and advanced camera system."
                        />
                    ) : iDetails === "Motorola-Moto-G60" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-G60.jpeg"
                            deviceName="Motorola Moto G60"
                            brand="Motorola"
                            price="₹ 17,999"
                            release="2021"
                            battery="6000 mAh"
                            display="6.8 inches IPS LCD"
                            processor="Qualcomm Snapdragon 732G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 108 MP + 8 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The Motorola Moto G60 offers a large battery, immersive display, and impressive camera setup, suitable for multimedia and photography enthusiasts."
                        />
                    ) : iDetails === "Motorola-Moto-G40-Fusion" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-G40-Fusion.jpeg"
                            deviceName="Motorola Moto G40 Fusion"
                            brand="Motorola"
                            price="₹ 14,499"
                            release="2021"
                            battery="6000 mAh"
                            display="6.8 inches IPS LCD"
                            processor="Qualcomm Snapdragon 732G"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Motorola Moto G40 Fusion offers a large battery capacity, decent performance, and good camera features at an affordable price."
                        />
                    ) : iDetails === "Motorola-Moto-G-Power-(2021)" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-G-Power-(2021).jpeg"
                            deviceName="Motorola Moto G Power (2021)"
                            brand="Motorola"
                            price="₹ 12,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.6 inches IPS LCD"
                            processor="Qualcomm Snapdragon 662"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 48 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Motorola Moto G Power (2021) is designed for long-lasting battery life and offers essential smartphone features."
                        />
                    ) : iDetails === "Motorola-Moto-G-Stylus-(2021)" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-G-Stylus-(2021).jpeg"
                            deviceName="Motorola Moto G Stylus (2021)"
                            brand="Motorola"
                            price="₹ 14,999"
                            release="2021"
                            battery="4000 mAh"
                            display="6.8 inches IPS LCD"
                            processor="Qualcomm Snapdragon 678"
                            ram="4 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Motorola Moto G Stylus (2021) features a built-in stylus, large display, and versatile camera system, suitable for productivity and creativity."
                        />
                    ) : iDetails === "Motorola-Moto-G50" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-G50.jpeg"
                            deviceName="Motorola Moto G50"
                            brand="Motorola"
                            price="₹ 14,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="Qualcomm Snapdragon 480"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 48 MP + 5 MP + 2 MP"
                            frontCamera="13 MP"
                            description="The Motorola Moto G50 offers a large battery, Snapdragon 480 chipset, and a capable camera system at an affordable price."
                        />

                    ) : iDetails === "Motorola-Moto-G100" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-G100.jpeg"
                            deviceName="Motorola Moto G100"
                            brand="Motorola"
                            price="₹ 39,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.7 inches IPS LCD"
                            processor="Qualcomm Snapdragon 870"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 16 MP + 2 MP"
                            frontCamera="16 MP + 8 MP"
                            description="The Motorola Moto G100 is a powerful smartphone with the Snapdragon 870 chipset, large display, and versatile camera setup."
                        />
                    ) : iDetails === "Motorola-Moto-G30" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-G30.jpeg"
                            deviceName="Motorola Moto G30"
                            brand="Motorola"
                            price="₹ 10,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="Qualcomm Snapdragon 662"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Quad 64 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="13 MP"
                            description="The Motorola Moto G30 offers essential features with a focus on value, including a large battery and decent camera capabilities."
                        />
                    ) : iDetails === "Motorola-Moto-G10-Power" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-G10-Power.jpeg"
                            deviceName="Motorola Moto G10 Power"
                            brand="Motorola"
                            price="₹ 9,999"
                            release="2021"
                            battery="6000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="Qualcomm Snapdragon 460"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Quad 48 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Motorola Moto G10 Power offers a large battery capacity, decent performance, and essential smartphone features at an affordable price."
                        />
                    ) : iDetails === "Motorola-Moto-E7-Power" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/motorola/Motorola-Moto-E7-Power.jpeg"
                            deviceName="Motorola Moto E7 Power"
                            brand="Motorola"
                            price="₹ 7,499"
                            release="2021"
                            battery="5000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="MediaTek Helio G25"
                            ram="2 GB"
                            storage="32 GB"
                            rearCamera="Dual 13 MP + 2 MP"
                            frontCamera="5 MP"
                            description="The Motorola Moto E7 Power offers a budget-friendly option with essential features and a large battery for extended usage."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Moto</h1> */}
                        </>
                    )}
                </>
            ) : iName === "infinix" ? (
                <>
                    {iDetails === "Infinix-Note-11-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Note-11-Pro.jpeg"
                            deviceName="Infinix Note 11 Pro"
                            brand="Infinix"
                            price="₹ 16,999"
                            release="2022"
                            battery="5000 mAh"
                            display="6.95 inches IPS LCD"
                            processor="MediaTek Helio G96"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 108 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Infinix Note 11 Pro features a large display, powerful Helio G96 chipset, and impressive camera capabilities."
                        />
                    ) : iDetails === "Infinix-Zero-8i" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Zero-8i.jpeg"
                            deviceName="Infinix Zero 8i"
                            brand="Infinix"
                            price="₹ 14,999"
                            release="2021"
                            battery="4500 mAh"
                            display="6.85 inches IPS LCD"
                            processor="MediaTek Helio G90T"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="16 MP + 8 MP"
                            description="The Infinix Zero 8i offers a stylish design, Helio G90T chipset, and versatile camera setup."
                        />
                    ) : iDetails === "Infinix-Hot-11S" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Hot-11S.jpeg"
                            deviceName="Infinix Hot 11S"
                            brand="Infinix"
                            price="₹ 10,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.78 inches IPS LCD"
                            processor="MediaTek Helio G88"
                            ram="6 GB"
                            storage="64 GB"
                            rearCamera="Triple 50 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Infinix Hot 11S offers essential features with a focus on affordability, including a large battery and decent camera performance."
                        />
                    ) : iDetails === "Infinix-Smart-5A" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Smart-5A.jpeg"
                            deviceName="Infinix Smart 5A"
                            brand="Infinix"
                            price="₹ 6,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.52 inches IPS LCD"
                            processor="MediaTek Helio A20"
                            ram="2 GB"
                            storage="32 GB"
                            rearCamera="Dual 8 MP + AI Lens"
                            frontCamera="5 MP"
                            description="The Infinix Smart 5A is a budget-friendly smartphone with essential features and a large battery for extended usage."
                        />
                    ) : iDetails === "Infinix-Hot-10-Play" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Hot-10-Play.jpeg"
                            deviceName="Infinix Hot 10 Play"
                            brand="Infinix"
                            price="₹ 8,499"
                            release="2021"
                            battery="6000 mAh"
                            display="6.82 inches IPS LCD"
                            processor="MediaTek Helio G35"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Dual 13 MP + AI Lens"
                            frontCamera="8 MP"
                            description="The Infinix Hot 10 Play offers good battery life, essential features, and decent camera capabilities at an affordable price."
                        />
                    ) : iDetails === "Infinix-Note-10-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Note-10-Pro.jpeg"
                            deviceName="Infinix Note 10 Pro"
                            brand="Infinix"
                            price="₹ 16,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.95 inches IPS LCD"
                            processor="MediaTek Helio G95"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Infinix Note 10 Pro features a large IPS LCD display, MediaTek Helio G95 chipset, and a versatile quad-camera setup."
                        />
                    ) : iDetails === "Infinix-Hot-11" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Hot-11.jpeg"
                            deviceName="Infinix Hot 11"
                            brand="Infinix"
                            price="₹ 9,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.82 inches IPS LCD"
                            processor="Mediatek Helio G70"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 13 MP + 2 MP + AI Lens"
                            frontCamera="8 MP"
                            description="The Infinix Hot 11 offers a large IPS LCD display, MediaTek Helio G70 chipset, and a triple-camera setup."
                        />
                    ) : iDetails === "Infinix-Zero-X-Neo" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Zero-X-Neo.jpeg"
                            deviceName="Infinix Zero X Neo"
                            brand="Infinix"
                            price="₹ 14,999"
                            release="2022"
                            battery="4500 mAh"
                            display="6.78 inches AMOLED"
                            processor="Mediatek Helio G95"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Infinix Zero X Neo features a vibrant AMOLED display, MediaTek Helio G95 chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "Infinix-Smart-5" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Smart-5.jpeg"
                            deviceName="Infinix Smart 5"
                            brand="Infinix"
                            price="₹ 7,999"
                            release="2020"
                            battery="5000 mAh"
                            display="6.6 inches IPS LCD"
                            processor="Mediatek Helio A20"
                            ram="2 GB"
                            storage="32 GB"
                            rearCamera="Dual 13 MP + AI Lens"
                            frontCamera="8 MP"
                            description="The Infinix Smart 5 offers essential features including a large battery, basic performance, and dual rear cameras."
                        />
                    ) : iDetails === "Infinix-Hot-10S" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/infinix/Infinix-Hot-10S.jpeg"
                            deviceName="Infinix Hot 10S"
                            brand="Infinix"
                            price="₹ 9,499"
                            release="2021"
                            battery="6000 mAh"
                            display="6.82 inches IPS LCD"
                            processor="Mediatek Helio G85"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 48 MP + 2 MP + AI Lens"
                            frontCamera="8 MP"
                            description="The Infinix Hot 10S offers a large IPS LCD display, MediaTek Helio G85 chipset, and a triple-camera setup."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Infinx</h1> */}
                        </>
                    )}
                </>
            ) : iName === "google" ? (
                <>
                    {iDetails === "Google-Pixel-6-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-6-Pro.jpeg"
                            deviceName="Google Pixel 6 Pro"
                            brand="Google"
                            price="₹ 79,999"
                            release="2021"
                            battery="5003 mAh"
                            display="6.7 inches OLED"
                            processor="Google Tensor"
                            ram="12 GB"
                            storage="128 GB"
                            rearCamera="Triple 50 MP + 12 MP + 48 MP"
                            frontCamera="12 MP"
                            description="The Google Pixel 6 Pro features a stunning OLED display, Google Tensor chipset, and advanced camera system."
                        />
                    ) : iDetails === "Google-Pixel-6" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-6.jpeg"
                            deviceName="Google Pixel 6"
                            brand="Google"
                            price="₹ 59,999"
                            release="2021"
                            battery="4614 mAh"
                            display="6.4 inches OLED"
                            processor="Google Tensor"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Dual 50 MP + 12 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 6 offers a compact design, Google Tensor chipset, and impressive camera capabilities."
                        />
                    ) : iDetails === "Google-Pixel-5a" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-5a.jpeg"
                            deviceName="Google Pixel 5a"
                            brand="Google"
                            price="₹ 34,999"
                            release="2021"
                            battery="4680 mAh"
                            display="6.34 inches OLED"
                            processor="Qualcomm Snapdragon 765G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Dual 12.2 MP + 16 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 5a offers excellent camera performance, smooth software experience, and long battery life."
                        />
                    ) : iDetails === "Google-Pixel-4a-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-4a-5G.jpeg"
                            deviceName="Google Pixel 4a 5G"
                            brand="Google"
                            price="₹ 44,999"
                            release="2020"
                            battery="3885 mAh"
                            display="6.2 inches OLED"
                            processor="Qualcomm Snapdragon 765G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Dual 12.2 MP + 16 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 4a 5G offers 5G connectivity, excellent camera performance, and pure Android experience."
                        />
                    ) : iDetails === "Google-Pixel-4a" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-4a.jpeg"
                            deviceName="Google Pixel 4a"
                            brand="Google"
                            price="₹ 31,999"
                            release="2020"
                            battery="3140 mAh"
                            display="5.81 inches OLED"
                            processor="Qualcomm Snapdragon 730G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="12.2 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 4a is a compact and affordable smartphone with excellent camera capabilities and smooth performance."
                        />
                    ) : iDetails === "Google-Pixel-5" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-5.jpeg"
                            deviceName="Google Pixel 5"
                            brand="Google"
                            price="₹ 52,999"
                            release="2020"
                            battery="4080 mAh"
                            display="6.0 inches OLED"
                            processor="Qualcomm Snapdragon 765G"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Dual 12.2 MP + 16 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 5 features a compact design, Snapdragon 765G chipset, and excellent camera performance."
                        />
                    ) : iDetails === "Google-Pixel-4-XL" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-4-XL.jpeg"
                            deviceName="Google Pixel 4 XL"
                            brand="Google"
                            price="₹ 85,000"
                            release="2019"
                            battery="3700 mAh"
                            display="6.3 inches OLED"
                            processor="Qualcomm Snapdragon 855"
                            ram="6 GB"
                            storage="64 GB"
                            rearCamera="Dual 12.2 MP + 16 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 4 XL offers a large OLED display, Snapdragon 855 chipset, and outstanding camera capabilities."
                        />
                    ) : iDetails === "Google-Pixel-3a" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-3a.jpeg"
                            deviceName="Google Pixel 3a"
                            brand="Google"
                            price="₹ 29,999"
                            release="2019"
                            battery="3000 mAh"
                            display="5.6 inches OLED"
                            processor="Qualcomm Snapdragon 670"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="12.2 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 3a is a budget-friendly Pixel device with a great camera and pure Android experience."
                        />
                    ) : iDetails === "Google-Pixel-3a-XL" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-3a-XL.jpeg"
                            deviceName="Google Pixel 3a XL"
                            brand="Google"
                            price="₹ 34,999"
                            release="2019"
                            battery="3700 mAh"
                            display="6.0 inches OLED"
                            processor="Qualcomm Snapdragon 670"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="12.2 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 3a XL offers a larger display and battery capacity, ideal for those seeking a budget-friendly Pixel experience."
                        />
                    ) : iDetails === "Google-Pixel-3" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/google/Google-Pixel-3.jpeg"
                            deviceName="Google Pixel 3"
                            brand="Google"
                            price="₹ 71,000"
                            release="2018"
                            battery="2915 mAh"
                            display="5.5 inches OLED"
                            processor="Qualcomm Snapdragon 845"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="12.2 MP"
                            frontCamera="8 MP"
                            description="The Google Pixel 3 is known for its camera quality, OLED display, and smooth performance."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Google</h1> */}
                        </>
                    )}
                </>
            ) : iName === "redmi" ? (
                <>
                    {iDetails === "Redmi-Note-11-Pro+-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-Note-11-Pro+-5G.jpeg"
                            deviceName="Redmi Note 11 Pro+ 5G"
                            brand="Redmi"
                            price="₹ 20,999"
                            release="2022"
                            battery="5000 mAh"
                            display="6.67 inches AMOLED"
                            processor="Qualcomm Snapdragon 695"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 108 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Redmi Note 11 Pro+ 5G features a vibrant AMOLED display, Snapdragon 695 chipset, and a powerful camera system with 108 MP main sensor."
                        />
                    ) : iDetails === "Redmi-Note-11S" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-Note-11S.jpeg"
                            deviceName="Redmi Note 11S"
                            brand="Redmi"
                            price="₹ 14,999"
                            release="2022"
                            battery="5000 mAh"
                            display="6.67 inches IPS LCD"
                            processor="Mediatek Helio G96"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 64 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Redmi Note 11S offers a large IPS LCD display, Helio G96 chipset, and a versatile quad-camera setup."
                        />
                    ) : iDetails === "Redmi-Note-11" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-Note-11.jpeg"
                            deviceName="Redmi Note 11"
                            brand="Redmi"
                            price="₹ 12,999"
                            release="2022"
                            battery="5000 mAh"
                            display="6.43 inches AMOLED"
                            processor="Mediatek Helio G88"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Dual 50 MP + 8 MP"
                            frontCamera="16 MP"
                            description="The Redmi Note 11 features an AMOLED display, Helio G88 chipset, and a dual-camera setup."
                        />
                    ) : iDetails === "Redmi-Note-10-Pro-Max" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-Note-10-Pro-Max.jpeg"
                            deviceName="Redmi Note 10 Pro Max"
                            brand="Redmi"
                            price="₹ 19,999"
                            release="2021"
                            battery="5020 mAh"
                            display="6.67 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 732G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 108 MP + 8 MP + 5 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Redmi Note 10 Pro Max features a Super AMOLED display, Snapdragon 732G chipset, and a versatile quad-camera setup with a 108 MP main sensor."
                        />
                    ) : iDetails === "Redmi-Note-10" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-Note-10.jpeg"
                            deviceName="Redmi Note 10"
                            brand="Redmi"
                            price="₹ 12,499"
                            release="2021"
                            battery="5000 mAh"
                            display="6.43 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 678"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Quad 48 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="13 MP"
                            description="The Redmi Note 10 offers a Super AMOLED display, Snapdragon 678 chipset, and a quad-camera setup."
                        />
                    ) : iDetails === "Redmi-Note-11T-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-Note-11T-5G.jpeg"
                            deviceName="Redmi Note 11T 5G"
                            brand="Redmi"
                            price="₹ 16,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.6 inches IPS LCD"
                            processor="MediaTek Dimensity 810"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 50 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Redmi Note 11T 5G features a large IPS LCD display, MediaTek Dimensity 810 chipset, and 5G connectivity."
                        />
                    ) : iDetails === "Redmi-10-Prime" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-10-Prime.jpeg"
                            deviceName="Redmi 10 Prime"
                            brand="Redmi"
                            price="₹ 12,499"
                            release="2021"
                            battery="6000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="MediaTek Helio G88"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Quad 50 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Redmi 10 Prime offers a large battery, Helio G88 chipset, and a versatile quad-camera setup."
                        />
                    ) : iDetails === "Redmi-Note-10T-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-Note-10T-5G.jpeg"
                            deviceName="Redmi Note 10T 5G"
                            brand="Redmi"
                            price="₹ 14,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.5 inches IPS LCD"
                            processor="MediaTek Dimensity 700"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 48 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Redmi Note 10T 5G offers 5G connectivity, MediaTek Dimensity 700 chipset, and a triple-camera setup."
                        />
                    ) : iDetails === "Redmi-Note-10-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-Note-10-Pro.jpeg"
                            deviceName="Redmi Note 10 Pro"
                            brand="Redmi"
                            price="₹ 17,999"
                            release="2021"
                            battery="5020 mAh"
                            display="6.67 inches Super AMOLED"
                            processor="Qualcomm Snapdragon 732G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Quad 108 MP + 8 MP + 5 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The Redmi Note 10 Pro features a Super AMOLED display, Snapdragon 732G chipset, and a versatile quad-camera setup with a 108 MP main sensor."
                        />
                    ) : iDetails === "Redmi-9-Power" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/redmi/Redmi-9-Power.jpeg"
                            deviceName="Redmi 9 Power"
                            brand="Redmi"
                            price="₹ 10,999"
                            release="2020"
                            battery="6000 mAh"
                            display="6.53 inches IPS LCD"
                            processor="Qualcomm Snapdragon 662"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Quad 48 MP + 8 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The Redmi 9 Power offers a large battery capacity, Snapdragon 662 chipset, and a quad-camera setup."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Redmi</h1> */}
                        </>
                    )}
                </>
            ) : iName === "apple" ? (
                <>
                    {iDetails === "iPhone-13-Pro-Max" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-13-Pro-Max.jpeg"
                            deviceName="iPhone 13 Pro Max"
                            brand="Apple"
                            price="₹ 1,29,900"
                            release="2021"
                            battery="4352 mAh"
                            display="6.7 inches Super Retina XDR OLED"
                            processor="Apple A15 Bionic"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 12 MP (Wide) + 12 MP (Ultra Wide) + 12 MP (Telephoto)"
                            frontCamera="12 MP"
                            description="The iPhone 13 Pro Max features a stunning Super Retina XDR OLED display, Apple A15 Bionic chip, and advanced triple-camera system."
                        />
                    ) : iDetails === "iPhone-13-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-13-Pro.jpeg"
                            deviceName="iPhone 13 Pro"
                            brand="Apple"
                            price="₹ 1,19,900"
                            release="2021"
                            battery="3095 mAh"
                            display="6.1 inches Super Retina XDR OLED"
                            processor="Apple A15 Bionic"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 12 MP (Wide) + 12 MP (Ultra Wide) + 12 MP (Telephoto)"
                            frontCamera="12 MP"
                            description="The iPhone 13 Pro features a Super Retina XDR OLED display, Apple A15 Bionic chip, and advanced triple-camera system."
                        />
                    ) : iDetails === "iPhone-13" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-13.jpeg"
                            deviceName="iPhone 13"
                            brand="Apple"
                            price="₹ 79,900"
                            release="2021"
                            battery="3095 mAh"
                            display="6.1 inches Super Retina XDR OLED"
                            processor="Apple A15 Bionic"
                            ram="4 GB"
                            storage="128 GB"
                            rearCamera="Dual 12 MP (Wide) + 12 MP (Ultra Wide)"
                            frontCamera="12 MP"
                            description="The iPhone 13 features a Super Retina XDR OLED display, Apple A15 Bionic chip, and dual-camera system."
                        />
                    ) : iDetails === "iPhone-12-Pro-Max" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-12-Pro-Max.jpeg"
                            deviceName="iPhone 12 Pro Max"
                            brand="Apple"
                            price="₹ 1,29,900"
                            release="2020"
                            battery="3687 mAh"
                            display="6.7 inches Super Retina XDR OLED"
                            processor="Apple A14 Bionic"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 12 MP (Wide) + 12 MP (Ultra Wide) + 12 MP (Telephoto)"
                            frontCamera="12 MP"
                            description="The iPhone 12 Pro Max features a Super Retina XDR OLED display, Apple A14 Bionic chip, and advanced triple-camera system."
                        />
                    ) : iDetails === "iPhone-SE-(2020)" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-SE-(2020).jpeg"
                            deviceName="iPhone SE (2020)"
                            brand="Apple"
                            price="₹ 25,999"
                            release="2020"
                            battery="1821 mAh"
                            display="4.7 inches Retina HD"
                            processor="Apple A13 Bionic"
                            ram="3 GB"
                            storage="64 GB"
                            rearCamera="12 MP"
                            frontCamera="7 MP"
                            description="The iPhone SE (2020) combines the design of the iPhone 8 with the powerful Apple A13 Bionic chip and a single-camera system."
                        />
                    ) : iDetails === "iPhone-13-mini" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-13-mini.jpeg"
                            deviceName="iPhone 13 mini"
                            brand="Apple"
                            price="₹ 69,900"
                            release="2021"
                            battery="2438 mAh"
                            display="5.4 inches Super Retina XDR OLED"
                            processor="Apple A15 Bionic"
                            ram="4 GB"
                            storage="128 GB"
                            rearCamera="Dual 12 MP (Wide) + 12 MP (Ultra Wide)"
                            frontCamera="12 MP"
                            description="The iPhone 13 mini features a compact Super Retina XDR OLED display, Apple A15 Bionic chip, and dual-camera system."
                        />
                    ) : iDetails === "iPhone-12" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-12.jpeg"
                            deviceName="iPhone 12"
                            brand="Apple"
                            price="₹ 66,900"
                            release="2020"
                            battery="2815 mAh"
                            display="6.1 inches Super Retina XDR OLED"
                            processor="Apple A14 Bionic"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Dual 12 MP (Wide) + 12 MP (Ultra Wide)"
                            frontCamera="12 MP"
                            description="The iPhone 12 features a Super Retina XDR OLED display, Apple A14 Bionic chip, and dual-camera system."
                        />
                    ) : iDetails === "iPhone-SE-(2022)" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-SE-(2022).jpeg"
                            deviceName="iPhone SE (2022)"
                            brand="Apple"
                            price="₹ 42,500"
                            release="2022"
                            battery="1821 mAh"
                            display="4.7 inches Retina HD"
                            processor="Apple A15 Bionic"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Single 12 MP"
                            frontCamera="7 MP"
                            description="The iPhone SE (2022) combines classic design with the powerful Apple A15 Bionic chip and a single-camera system."
                        />
                    ) : iDetails === "iPhone-11" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-11.jpeg"
                            deviceName="iPhone 11"
                            brand="Apple"
                            price="₹ 49,999"
                            release="2019"
                            battery="3110 mAh"
                            display="6.1 inches Liquid Retina HD"
                            processor="Apple A13 Bionic"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Dual 12 MP (Wide) + 12 MP (Ultra Wide)"
                            frontCamera="12 MP"
                            description="The iPhone 11 features a Liquid Retina HD display, Apple A13 Bionic chip, and dual-camera system."
                        />
                    ) : iDetails === "iPhone-XR" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/apple/iPhone-XR.jpeg"
                            deviceName="iPhone XR"
                            brand="Apple"
                            price="₹ 39,999"
                            release="2018"
                            battery="2942 mAh"
                            display="6.1 inches Liquid Retina HD"
                            processor="Apple A12 Bionic"
                            ram="3 GB"
                            storage="64 GB"
                            rearCamera="Single 12 MP"
                            frontCamera="7 MP"
                            description="The iPhone XR features a Liquid Retina HD display, Apple A12 Bionic chip, and a single-camera system."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Apple</h1> */}
                        </>
                    )}
                </>
            ) : iName === "oneplus" ? (
                <>
                    {iDetails === "OnePlus-9-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-9-Pro.jpeg"
                            deviceName="OnePlus 9 Pro"
                            brand="OnePlus"
                            price="₹ 64,999"
                            release="2021"
                            battery="4500 mAh"
                            display="6.7 inches Fluid AMOLED"
                            processor="Qualcomm Snapdragon 888"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 50 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The OnePlus 9 Pro features a large Fluid AMOLED display, Snapdragon 888 chipset, and Hasselblad-tuned quad-camera system."
                        />
                    ) : iDetails === "OnePlus-9" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-9.jpeg"
                            deviceName="OnePlus 9"
                            brand="OnePlus"
                            price="₹ 49,999"
                            release="2021"
                            battery="4500 mAh"
                            display="6.55 inches Fluid AMOLED"
                            processor="Qualcomm Snapdragon 888"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 50 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The OnePlus 9 features a Fluid AMOLED display, Snapdragon 888 chipset, and a powerful triple-camera system."
                        />
                    ) : iDetails === "OnePlus-Nord-2-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-Nord-2-5G.jpeg"
                            deviceName="OnePlus Nord 2 5G"
                            brand="OnePlus"
                            price="₹ 29,999"
                            release="2021"
                            battery="4500 mAh"
                            display="6.43 inches Fluid AMOLED"
                            processor="MediaTek Dimensity 1200"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 50 MP + 8 MP + 2 MP"
                            frontCamera="32 MP"
                            description="The OnePlus Nord 2 5G features a Fluid AMOLED display, MediaTek Dimensity 1200 chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "OnePlus-Nord-CE-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-Nord-CE-5G.jpeg"
                            deviceName="OnePlus Nord CE 5G"
                            brand="OnePlus"
                            price="₹ 22,999"
                            release="2021"
                            battery="4500 mAh"
                            display="6.43 inches Fluid AMOLED"
                            processor="Qualcomm Snapdragon 750G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The OnePlus Nord CE 5G features a Fluid AMOLED display, Snapdragon 750G chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "OnePlus-8T" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-8T.jpeg"
                            deviceName="OnePlus 8T"
                            brand="OnePlus"
                            price="₹ 42,999"
                            release="2020"
                            battery="4500 mAh"
                            display="6.55 inches Fluid AMOLED"
                            processor="Qualcomm Snapdragon 865"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 16 MP + 5 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The OnePlus 8T features a Fluid AMOLED display, Snapdragon 865 chipset, and a versatile quad-camera setup."
                        />
                    ) : iDetails === "OnePlus-8-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-8-Pro.jpeg"
                            deviceName="OnePlus 8 Pro"
                            brand="OnePlus"
                            price="₹ 54,999"
                            release="2020"
                            battery="4510 mAh"
                            display="6.78 inches Fluid AMOLED"
                            processor="Qualcomm Snapdragon 865"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 48 MP + 8 MP + 5 MP"
                            frontCamera="16 MP"
                            description="The OnePlus 8 Pro features a large Fluid AMOLED display, Snapdragon 865 chipset, and a versatile quad-camera setup."
                        />
                    ) : iDetails === "OnePlus-Nord" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-Nord.jpeg"
                            deviceName="OnePlus Nord"
                            brand="OnePlus"
                            price="₹ 24,999"
                            release="2020"
                            battery="4115 mAh"
                            display="6.44 inches Fluid AMOLED"
                            processor="Qualcomm Snapdragon 765G"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 48 MP + 8 MP + 5 MP + 2 MP"
                            frontCamera="32 MP + 8 MP"
                            description="The OnePlus Nord features a Fluid AMOLED display, Snapdragon 765G chipset, and a versatile quad-camera setup."
                        />
                    ) : iDetails === "OnePlus-7T" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-7T.jpeg"
                            deviceName="OnePlus 7T"
                            brand="OnePlus"
                            price="₹ 39,999"
                            release="2019"
                            battery="3800 mAh"
                            display="6.55 inches Fluid AMOLED"
                            processor="Qualcomm Snapdragon 855+"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 12 MP + 16 MP"
                            frontCamera="16 MP"
                            description="The OnePlus 7T features a Fluid AMOLED display, Snapdragon 855+ chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "OnePlus-Nord-N200-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-Nord-N200-5G.jpeg"
                            deviceName="OnePlus Nord N200 5G"
                            brand="OnePlus"
                            price="₹ 19,999"
                            release="2021"
                            battery="5000 mAh"
                            display="6.49 inches IPS LCD"
                            processor="Qualcomm Snapdragon 480 5G"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 13 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The OnePlus Nord N200 5G features a large IPS LCD display, Snapdragon 480 5G chipset, and a triple-camera setup."
                        />
                    ) : iDetails === "OnePlus-7-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/oneplus/OnePlus-7-Pro.jpeg"
                            deviceName="OnePlus 7 Pro"
                            brand="OnePlus"
                            price="₹ 39,999"
                            release="2019"
                            battery="4000 mAh"
                            display="6.67 inches Fluid AMOLED"
                            processor="Qualcomm Snapdragon 855"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 8 MP + 16 MP"
                            frontCamera="16 MP"
                            description="The OnePlus 7 Pro features a Fluid AMOLED display, Snapdragon 855 chipset, and a versatile triple-camera setup."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Oneplus</h1> */}
                        </>
                    )}
                </>
            ) : iName === "iqoo" ? (
                <>
                    {iDetails === "iQOO-9-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-9-Pro.jpeg"
                            deviceName="iQOO 9 Pro"
                            brand="iQOO"
                            price="₹ 64,990"
                            release="2022"
                            battery="4500 mAh"
                            display="6.78 inches AMOLED"
                            processor="Qualcomm Snapdragon 8 Gen 1"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 50 MP + 12 MP + 13 MP"
                            frontCamera="16 MP"
                            description="The iQOO 9 Pro features a large AMOLED display, Snapdragon 8 Gen 1 chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "iQOO-8-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-8-Pro.jpeg"
                            deviceName="iQOO 8 Pro"
                            brand="iQOO"
                            price="₹ 49,990"
                            release="2021"
                            battery="4500 mAh"
                            display="6.78 inches AMOLED"
                            processor="Qualcomm Snapdragon 888+"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Quad 50 MP + 48 MP + 16 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The iQOO 8 Pro features a large AMOLED display, Snapdragon 888+ chipset, and a powerful quad-camera setup."
                        />
                    ) : iDetails === "iQOO-7-Legend" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-7-Legend.jpeg"
                            deviceName="iQOO 7 Legend"
                            brand="iQOO"
                            price="₹ 39,990"
                            release="2021"
                            battery="4000 mAh"
                            display="6.62 inches AMOLED"
                            processor="Qualcomm Snapdragon 888"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 13 MP + 13 MP"
                            frontCamera="16 MP"
                            description="The iQOO 7 Legend features an AMOLED display, Snapdragon 888 chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "iQOO-Z5" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-Z5.jpeg"
                            deviceName="iQOO Z5"
                            brand="iQOO"
                            price="₹ 23,990"
                            release="2021"
                            battery="5000 mAh"
                            display="6.67 inches IPS LCD"
                            processor="Qualcomm Snapdragon 778G"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The iQOO Z5 features a large IPS LCD display, Snapdragon 778G chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "iQOO-Z6-5G" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-Z6-5G.jpeg"
                            deviceName="iQOO Z6 5G"
                            brand="iQOO"
                            price="₹ 19,990"
                            release="2022"
                            battery="5000 mAh"
                            display="6.58 inches IPS LCD"
                            processor="Qualcomm Snapdragon 695"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 2 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The iQOO Z6 5G features a large IPS LCD display, Snapdragon 695 chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "iQOO-Z7" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-Z7.jpeg"
                            deviceName="iQOO Z7"
                            brand="iQOO"
                            price="₹ 31,990"
                            release="2022"
                            battery="4400 mAh"
                            display="6.78 inches AMOLED"
                            processor="Qualcomm Snapdragon 888+"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 50 MP + 13 MP + 13 MP"
                            frontCamera="16 MP"
                            description="The iQOO Z7 features a large AMOLED display, Snapdragon 888+ chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "iQOO-5-Pro" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-5-Pro.jpeg"
                            deviceName="iQOO 5 Pro"
                            brand="iQOO"
                            price="₹ 36,990"
                            release="2020"
                            battery="4000 mAh"
                            display="6.56 inches AMOLED"
                            processor="Qualcomm Snapdragon 865"
                            ram="8 GB"
                            storage="256 GB"
                            rearCamera="Triple 50 MP + 8 MP + 13 MP"
                            frontCamera="16 MP"
                            description="The iQOO 5 Pro features an AMOLED display, Snapdragon 865 chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "iQOO-Neo-5" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-Neo-5.jpeg"
                            deviceName="iQOO Neo 5"
                            brand="iQOO"
                            price="₹ 27,990"
                            release="2021"
                            battery="4400 mAh"
                            display="6.62 inches AMOLED"
                            processor="Qualcomm Snapdragon 870"
                            ram="8 GB"
                            storage="128 GB"
                            rearCamera="Triple 48 MP + 13 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The iQOO Neo 5 features an AMOLED display, Snapdragon 870 chipset, and a versatile triple-camera setup."
                        />
                    ) : iDetails === "iQOO-U5" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-U5.jpeg"
                            deviceName="iQOO U5"
                            brand="iQOO"
                            price="₹ 12,990"
                            release="2021"
                            battery="5000 mAh"
                            display="6.51 inches IPS LCD"
                            processor="Qualcomm Snapdragon 690"
                            ram="4 GB"
                            storage="64 GB"
                            rearCamera="Triple 13 MP + 2 MP + 2 MP"
                            frontCamera="8 MP"
                            description="The iQOO U5 features a large IPS LCD display, Snapdragon 690 chipset, and a triple-camera setup."
                        />
                    ) : iDetails === "iQOO-Z3" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/iqoo/iQOO-Z3.jpeg"
                            deviceName="iQOO Z3"
                            brand="iQOO"
                            price="₹ 19,990"
                            release="2021"
                            battery="4400 mAh"
                            display="6.58 inches IPS LCD"
                            processor="Qualcomm Snapdragon 768G"
                            ram="6 GB"
                            storage="128 GB"
                            rearCamera="Triple 64 MP + 8 MP + 2 MP"
                            frontCamera="16 MP"
                            description="The iQOO Z3 features a large IPS LCD display, Snapdragon 768G chipset, and a versatile triple-camera setup."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - iqoo</h1> */}
                        </>
                    )}
                </>
            ) : iName === "nothing" ? (
                <>
                    {iDetails === "Nothing-Phone-1" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/nothing/Nothing-Phone-1.jpeg"
                            deviceName="Nothing Phone 1"
                            brand="Nothing"
                            price="₹31,999 (approx.)"
                            release="July 2023"
                            battery="4500 mAh"
                            display="6.55 inches AMOLED, 120Hz refresh rate"
                            processor="Qualcomm Snapdragon 778G+"
                            ram="8 GB"
                            storage="128 GB or 256 GB"
                            rearCamera="Dual 50 MP sensors"
                            frontCamera="16 MP"
                            description="Unique transparent design with Glyph Interface lighting."
                        />
                    ) : iDetails === "Nothing-Phone-2" ? (
                        <SmartphoneDetails
                            deviceImage="/images/item/smartphone/nothing/Nothing-Phone-2.jpeg"
                            deviceName="Nothing Phone 2"
                            brand="Nothing"
                            price="₹38,999 (approx.)"
                            release="December 2023"
                            battery="4700 mAh"
                            display="6.7 inches LTPO AMOLED, 120Hz refresh rate"
                            processor="Snapdragon 8 Gen 2"
                            ram="8 GB or 12 GB"
                            storage="128 GB or 256 GB"
                            rearCamera="Dual 50 MP sensors"
                            frontCamera="16 MP"
                            description="Larger display, improved camera system, and faster charging compared to Phone (1)."
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartphone - Nothing</h1> */}
                        </>
                    )}
                </>
            ) : (
                <>
                    <Error message="Product Not Found" />
                    {/* <h1>Smartphone - None</h1> */}
                </>
            )}
        </>
    )
}

export default Smartphone
