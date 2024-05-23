import React from 'react'
import { useParams} from 'react-router-dom'
import SmartwatchDetails from '../template/SmartwatchDetails'
import Error from '../Error'



function Smartwatch() {
    const params = useParams();
    const { iName, iDetails } = params;
    return (
        <>
            {iName === "noise" ? (
                <>
                    {iDetails === "Noise-ColorFit-Ultra" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/Noise-ColorFit-Ultra.jpeg"
                            brand="Noise"
                            modelName="Noise ColorFit Ultra"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.75-inch HD"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="44mm x 38mm"
                            thicknessAndDiameter="11mm thickness, 42mm diameter"
                            weight="Approx. 35 grams"
                            price="₹ 4,999"
                        />
                    ) : iDetails === "NoiseFit-Endure" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/NoiseFit-Endure.jpeg"
                            brand="Noise"
                            modelName="NoiseFit Endure"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 20 days"
                            chargeTime="Approx. 2.5 hours"
                            display="1.28-inch TFT"
                            callFunction="No"
                            widthAndHeight="45mm x 45mm"
                            thicknessAndDiameter="12mm thickness, 45mm diameter"
                            weight="Approx. 48 grams"
                            price="₹ 3,299"
                        />
                    ) : iDetails === "Noise-ColorFit-Pulse" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/Noise-ColorFit-Pulse.jpeg"
                            brand="Noise"
                            modelName="Noise ColorFit Pulse"
                            dialColor="Red"
                            dialShape="Round"
                            strapColor="Red"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Stress"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.4-inch LCD"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="42mm x 42mm"
                            thicknessAndDiameter="11mm thickness, 42mm diameter"
                            weight="Approx. 36 grams"
                            price="₹ 2,799"
                        />
                    ) : iDetails === "NoiseFit-Core" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/NoiseFit-Core.jpeg"
                            brand="Noise"
                            modelName="NoiseFit Core"
                            dialColor="Black"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Activity tracking"
                            batteryLife="Up to 15 days"
                            chargeTime="Approx. 2.5 hours"
                            display="1.55-inch HD"
                            callFunction="No"
                            widthAndHeight="38mm x 38mm"
                            thicknessAndDiameter="10mm thickness, 40mm diameter"
                            weight="Approx. 32 grams"
                            price="₹ 2,499"
                        />
                    ) : iDetails === "NoiseFit-Pace-2" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/NoiseFit-Pace-2.jpeg"
                            brand="Noise"
                            modelName="NoiseFit Pace 2"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.4-inch LCD"
                            callFunction="No"
                            widthAndHeight="43mm x 43mm"
                            thicknessAndDiameter="11mm thickness, 43mm diameter"
                            weight="Approx. 40 grams"
                            price="₹ 2,999"
                        />
                    ) : iDetails === "NoiseFit-Zen" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/NoiseFit-Zen.jpeg"
                            brand="Noise"
                            modelName="NoiseFit Zen"
                            dialColor="Gold"
                            dialShape="Square"
                            strapColor="Brown"
                            strapMaterial="Leather"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Stress"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.3-inch LCD"
                            callFunction="No"
                            widthAndHeight="40mm x 40mm"
                            thicknessAndDiameter="10mm thickness, 40mm diameter"
                            weight="Approx. 45 grams"
                            price="₹ 3,499"
                        />
                    ) : iDetails === "NoiseFit-Evolve-Neo" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/NoiseFit-Evolve-Neo.jpeg"
                            brand="Noise"
                            modelName="NoiseFit Evolve Neo"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.39-inch AMOLED"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="46mm x 46mm"
                            thicknessAndDiameter="12mm thickness, 46mm diameter"
                            weight="Approx. 50 grams"
                            price="₹ 3,799"
                        />
                    ) : iDetails === "NoiseFit-Verve" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/NoiseFit-Verve.jpeg"
                            brand="Noise"
                            modelName="NoiseFit Verve"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Stress"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.28-inch TFT"
                            callFunction="No"
                            widthAndHeight="44mm x 44mm"
                            thicknessAndDiameter="11mm thickness, 44mm diameter"
                            weight="Approx. 45 grams"
                            price="₹ 2,499"
                        />
                    ) : iDetails === "NoiseFit-Thrust" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/NoiseFit-Thrust.jpeg"
                            brand="Noise"
                            modelName="NoiseFit Thrust"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2.5 hours"
                            display="1.28-inch TFT"
                            callFunction="No"
                            widthAndHeight="43mm x 43mm"
                            thicknessAndDiameter="11mm thickness, 43mm diameter"
                            weight="Approx. 42 grams"
                            price="₹ 2,999"
                        />
                    ) : iDetails === "NoiseFit-Pulse-Grand" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/noise/NoiseFit-Pulse-Grand.jpeg"
                            brand="Noise"
                            modelName="NoiseFit Pulse Grand"
                            dialColor="Black"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Stress"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.4-inch LCD"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm x 40mm"
                            thicknessAndDiameter="10mm thickness, 40mm diameter"
                            weight="Approx. 38 grams"
                            price="₹ 3,499"
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartwatch - Noise</h1> */}
                        </>
                    )}
                </>
            ) : iName === "fireboltt" ? (
                <>
                    {iDetails === "Fire-Boltt-Beast" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fireboltt/Fire-Boltt-Beast.jpeg"
                            brand="Fire-Boltt"
                            modelName="Fire-Boltt Beast"
                            dialColor="Black"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP67)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.69-inch HD"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="46mm x 46mm"
                            thicknessAndDiameter="11mm thickness, 46mm diameter"
                            weight="Approx. 55 grams"
                            price="₹ 3,999"
                        />
                    ) : iDetails === "Fire-Boltt-Ninja" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fireboltt/Fire-Boltt-Ninja.jpeg"
                            brand="Fire-Boltt"
                            modelName="Fire-Boltt Ninja"
                            dialColor="Blue"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Stress"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.3-inch TFT"
                            callFunction="No"
                            widthAndHeight="42mm x 42mm"
                            thicknessAndDiameter="10mm thickness, 42mm diameter"
                            weight="Approx. 40 grams"
                            price="₹ 2,499"
                        />
                    ) : iDetails === "Fire-Boltt-Ring" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fireboltt/Fire-Boltt-Ring.jpeg"
                            brand="Fire-Boltt"
                            modelName="Fire-Boltt Ring"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Metal"
                            waterResistant="Yes (IP67)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2.5 hours"
                            display="1.4-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm x 40mm"
                            thicknessAndDiameter="11mm thickness, 40mm diameter"
                            weight="Approx. 50 grams"
                            price="₹ 4,499"
                        />

                    ) : iDetails === "Fire-Boltt-Ninja-Pro" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fireboltt/Fire-Boltt-Ninja-Pro.jpeg"
                            brand="Fire-Boltt"
                            modelName="Fire-Boltt Ninja Pro"
                            dialColor="Grey"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.69-inch HD"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="46mm x 46mm"
                            thicknessAndDiameter="11mm thickness, 46mm diameter"
                            weight="Approx. 55 grams"
                            price="₹ 3,799"
                        />

                    ) : iDetails === "Fire-Boltt-Mercury" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fireboltt/Fire-Boltt-Mercury.jpeg"
                            brand="Fire-Boltt"
                            modelName="Fire-Boltt Mercury"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP67)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.3-inch TFT"
                            callFunction="No"
                            widthAndHeight="42mm x 42mm"
                            thicknessAndDiameter="10mm thickness, 42mm diameter"
                            weight="Approx. 40 grams"
                            price="₹ 2,299"
                        />
                    ) : iDetails === "Fire-Boltt Beast Plus" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fireboltt/Fire-Boltt-Beast-Plus.jpeg"
                            brand="Fire-Boltt"
                            modelName="Fire-Boltt Beast Plus"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP67)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 15 days"
                            chargeTime="Approx. 2.5 hours"
                            display="1.7-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="48mm x 48mm"
                            thicknessAndDiameter="12mm thickness, 48mm diameter"
                            weight="Approx. 60 grams"
                            price="₹ 4,999"
                        />

                    ) : iDetails === "Fire-Boltt Hawk" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fireboltt/Fire-Boltt-Hawk.jpeg"
                            brand="Fire-Boltt"
                            modelName="Fire-Boltt Hawk"
                            dialColor="Silver"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Metal"
                            waterResistant="Yes (IP67)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2.5 hours"
                            display="1.3-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="42mm x 42mm"
                            thicknessAndDiameter="11mm thickness, 42mm diameter"
                            weight="Approx. 55 grams"
                            price="₹ 4,299"
                        />

                    ) : iDetails === "Fire-Boltt Hawk Pro" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fireboltt/Fire-Boltt-Hawk-Pro.jpeg"
                            brand="Fire-Boltt"
                            modelName="Fire-Boltt Hawk Pro"
                            dialColor="Black"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 12 days"
                            chargeTime="Approx. 2.5 hours"
                            display="1.5-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="46mm x 46mm"
                            thicknessAndDiameter="12mm thickness, 46mm diameter"
                            weight="Approx. 58 grams"
                            price="₹ 5,499"
                        />

                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartwatch - Fireboltt</h1> */}
                        </>
                    )}
                </>
            ) : iName === "apple" ? (
                <>
                    {iDetails === "Apple-Watch-Series-7" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-Series-7.jpeg"
                            brand="Apple"
                            modelName="Apple Watch Series 7"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (50 meters)"
                            sensor="Heart rate, ECG, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="Always-on Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="41mm, 45mm"
                            thicknessAndDiameter="10.7mm thickness, 41mm or 45mm height"
                            weight="Approx. 32 grams (41mm), 37 grams (45mm)"
                            price="Starting from ₹ 29,900"
                        />

                    ) : iDetails === "Apple-Watch-SE" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-SE.jpeg"
                            brand="Apple"
                            modelName="Apple Watch SE"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (50 meters)"
                            sensor="Heart rate, ECG, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.4mm thickness, 40mm or 44mm height"
                            weight="Approx. 30.49 grams (40mm), 36.36 grams (44mm)"
                            price="Starting from ₹ 24,900"
                        />

                    ) : iDetails === "Apple-Watch-Series-6" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-Series-6.jpeg"
                            brand="Apple"
                            modelName="Apple Watch Series 6"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (50 meters)"
                            sensor="Heart rate, ECG, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="Always-on Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.4mm thickness, 40mm or 44mm height"
                            weight="Approx. 30.49 grams (40mm), 36.36 grams (44mm)"
                            price="Starting from ₹ 35,990"
                        />

                    ) : iDetails === "Apple-Watch-Series-5" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-Series-5.jpeg"
                            brand="Apple"
                            modelName="Apple Watch Series 5"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (50 meters)"
                            sensor="Heart rate, ECG, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="Always-on Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.7mm thickness, 40mm or 44mm height"
                            weight="Approx. 30.49 grams (40mm), 36.36 grams (44mm)"
                            price="Starting from ₹ 27,900"
                        />

                    ) : iDetails === "Apple-Watch-SE-(2022)" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-SE-2022.jpeg"
                            brand="Apple"
                            modelName="Apple Watch SE (2022)"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (50 meters)"
                            sensor="Heart rate, ECG, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.4mm thickness, 40mm or 44mm height"
                            weight="Approx. 30.49 grams (40mm), 36.36 grams (44mm)"
                            price="Starting from ₹ 24,900"
                        />
                    ) : iDetails === "Apple-Watch-Series-4" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-Series-4.jpeg"
                            brand="Apple"
                            modelName="Apple Watch Series 4"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (50 meters)"
                            sensor="Heart rate, ECG, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="LTPO OLED Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.7mm thickness, 40mm or 44mm height"
                            weight="Approx. 30.1 grams (40mm), 36.7 grams (44mm)"
                            price="Starting from ₹ 23,900"
                        />

                    ) : iDetails === "Apple-Watch-Series-3" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-Series-3.jpeg"
                            brand="Apple"
                            modelName="Apple Watch Series 3"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (50 meters)"
                            sensor="Heart rate, ECG, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm, 42mm"
                            thicknessAndDiameter="11.4mm thickness, 38mm or 42mm height"
                            weight="Approx. 26.7 grams (38mm), 32.3 grams (42mm)"
                            price="Starting from ₹ 20,900"
                        />

                    ) : iDetails === "Apple-Watch-Series-2" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-Series-2.jpeg"
                            brand="Apple"
                            modelName="Apple Watch Series 2"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (50 meters)"
                            sensor="Heart rate, ECG, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm, 42mm"
                            thicknessAndDiameter="11.4mm thickness, 38mm or 42mm height"
                            weight="Approx. 28.2 grams (38mm), 34.2 grams (42mm)"
                            price="Starting from ₹ 17,900"
                        />

                    ) : iDetails === "Apple-Watch-Series-1" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-Series-1.jpeg"
                            brand="Apple"
                            modelName="Apple Watch Series 1"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (Splash Resistant)"
                            sensor="Heart rate, ECG, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 1.5 hours"
                            display="Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm, 42mm"
                            thicknessAndDiameter="10.5mm thickness, 38mm or 42mm height"
                            weight="Approx. 25 grams (38mm), 30 grams (42mm)"
                            price="Starting from ₹ 14,900"
                        />

                    ) : iDetails === "Apple-Watch-Series-0" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/apple/Apple-Watch-Series-0.jpeg"
                            brand="Apple"
                            modelName="Apple Watch Series 0"
                            dialColor="Various (Depends on model)"
                            dialShape="Rectangular"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="No"
                            sensor="Heart rate, Sleep, Step tracking"
                            batteryLife="Up to 18 hours"
                            chargeTime="Approx. 2 hours"
                            display="Retina display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm, 42mm"
                            thicknessAndDiameter="10.5mm thickness, 38mm or 42mm height"
                            weight="Approx. 25 grams (38mm), 30 grams (42mm)"
                            price="Starting from ₹ 12,900"
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartwatch - Apple</h1> */}
                        </>
                    )}
                </>
            ) : iName === "samsung" ? (
                <>
                    {iDetails === "Samsung-Galaxy-Watch-4" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-4.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch 4"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 40 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.9mm thickness, 40mm or 44mm diameter"
                            weight="Approx. 25.9 grams (40mm), 30.3 grams (44mm)"
                            price="Starting from ₹ 23,999"
                        />

                    ) : iDetails === "Samsung-Galaxy-Watch-4-Classic" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-4-Classic.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch 4 Classic"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 56 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="42mm, 46mm"
                            thicknessAndDiameter="11.1mm thickness, 42mm or 46mm diameter"
                            weight="Approx. 46.5 grams (42mm), 52 grams (46mm)"
                            price="Starting from ₹ 31,999"
                        />

                    ) : iDetails === "Samsung-Galaxy-Watch-3" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-3.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch 3"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 43 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="41mm, 45mm"
                            thicknessAndDiameter="11.1mm thickness, 41mm or 45mm diameter"
                            weight="Approx. 48.2 grams (41mm), 53.8 grams (45mm)"
                            price="Starting from ₹ 24,990"
                        />

                    ) : iDetails === "Samsung-Galaxy-Watch-Active-2" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-2.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch Active 2"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 60 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.9mm thickness, 40mm or 44mm diameter"
                            weight="Approx. 26 grams (40mm), 30 grams (44mm)"
                            price="Starting from ₹ 17,990"
                        />

                    ) : iDetails === "Samsung-Galaxy-Watch-Active" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch Active"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 45 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm"
                            thicknessAndDiameter="10.5mm thickness, 40mm diameter"
                            weight="Approx. 25 grams"
                            price="Starting from ₹ 15,999"
                        />
                    ) : iDetails === "Samsung Galaxy Watch Active 3" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-3.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch Active 3"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 56 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.8mm thickness, 40mm or 44mm diameter"
                            weight="Approx. 30 grams (40mm), 34 grams (44mm)"
                            price="Starting from ₹ 20,999"
                        />

                    ) : iDetails === "Samsung Galaxy Watch Active 4" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-4.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch Active 4"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 56 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.4mm thickness, 40mm or 44mm diameter"
                            weight="Approx. 29 grams (40mm), 33 grams (44mm)"
                            price="Starting from ₹ 23,999"
                        />

                    ) : iDetails === "Samsung Galaxy Watch Active 5" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-5.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch Active 5"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 56 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.5mm thickness, 40mm or 44mm diameter"
                            weight="Approx. 28 grams (40mm), 32 grams (44mm)"
                            price="Starting from ₹ 25,999"
                        />

                    ) : iDetails === "Samsung Galaxy Watch Active 6" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-6.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch Active 6"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 56 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.6mm thickness, 40mm or 44mm diameter"
                            weight="Approx. 31 grams (40mm), 35 grams (44mm)"
                            price="Starting from ₹ 27,999"
                        />
                    ) : iDetails === "Samsung Galaxy Watch Active 7" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/samsung/Samsung-Galaxy-Watch-Active-7.jpeg"
                            brand="Samsung"
                            modelName="Samsung Galaxy Watch Active 7"
                            dialColor="Various (Depends on model)"
                            dialShape="Round"
                            strapColor="Various (Depends on model)"
                            strapMaterial="Various (Depends on model)"
                            waterResistant="Yes (5 ATM)"
                            sensor="Heart rate, ECG, Blood pressure, Blood oxygen, Sleep, Step tracking"
                            batteryLife="Up to 56 hours"
                            chargeTime="Approx. 2 hours"
                            display="AMOLED display"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="40mm, 44mm"
                            thicknessAndDiameter="10.8mm thickness, 40mm or 44mm diameter"
                            weight="Approx. 29 grams (40mm), 33 grams (44mm)"
                            price="Starting from ₹ 29,999"
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartwatch - Samsung</h1> */}
                        </>
                    )}
                </>
            ) : iName === "boat" ? (
                <>
                    {iDetails === "boAt-Xtend" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Xtend.jpeg"
                            brand="boAt"
                            modelName="boAt Xtend"
                            dialColor="Black"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.69-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm x 44mm"
                            thicknessAndDiameter="11mm thickness, 38mm width"
                            weight="Approx. 40 grams"
                            price="₹ 2,999"
                        />

                    ) : iDetails === "boAt-Flash" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Flash.jpeg"
                            brand="boAt"
                            modelName="boAt Flash"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.3-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm x 44mm"
                            thicknessAndDiameter="10.7mm thickness, 38mm width"
                            weight="Approx. 38 grams"
                            price="₹ 2,499"
                        />

                    ) : iDetails === "boAt-Enigma" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Enigma.jpeg"
                            brand="boAt"
                            modelName="boAt Enigma"
                            dialColor="Black"
                            dialShape="Round"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.54-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="44mm x 44mm"
                            thicknessAndDiameter="11mm thickness, 44mm width"
                            weight="Approx. 45 grams"
                            price="₹ 3,499"
                        />

                    ) : iDetails === "boAt-Flash-Pro" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Flash-Pro.jpeg"
                            brand="boAt"
                            modelName="boAt Flash Pro"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.69-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm x 44mm"
                            thicknessAndDiameter="11mm thickness, 38mm width"
                            weight="Approx. 40 grams"
                            price="₹ 3,999"
                        />

                    ) : iDetails === "boAt-Xtend+" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Xtend+.jpeg"
                            brand="boAt"
                            modelName="boAt Xtend+"
                            dialColor="Black"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.69-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm x 44mm"
                            thicknessAndDiameter="11mm thickness, 38mm width"
                            weight="Approx. 40 grams"
                            price="₹ 3,299"
                        />
                    ) : iDetails === "boAt-Wave" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Wave.jpeg"
                            brand="boAt"
                            modelName="boAt Wave"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.3-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm x 44mm"
                            thicknessAndDiameter="10.7mm thickness, 38mm width"
                            weight="Approx. 38 grams"
                            price="₹ 2,799"
                        />

                    ) : iDetails === "boAt-Xtend-Pro" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Xtend-Pro.jpeg"
                            brand="boAt"
                            modelName="boAt Xtend Pro"
                            dialColor="Black"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.69-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm x 44mm"
                            thicknessAndDiameter="11mm thickness, 38mm width"
                            weight="Approx. 40 grams"
                            price="₹ 3,499"
                        />

                    ) : iDetails === "boAt-Wave-Pro" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Wave-Pro.jpeg"
                            brand="boAt"
                            modelName="boAt Wave Pro"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.54-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="44mm x 44mm"
                            thicknessAndDiameter="11mm thickness, 44mm width"
                            weight="Approx. 45 grams"
                            price="₹ 3,299"
                        />

                    ) : iDetails === "boAt-Xtend+-Pro" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Xtend+-Pro.jpeg"
                            brand="boAt"
                            modelName="boAt Xtend+ Pro"
                            dialColor="Black"
                            dialShape="Square"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.69-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm x 44mm"
                            thicknessAndDiameter="11mm thickness, 38mm width"
                            weight="Approx. 40 grams"
                            price="₹ 3,799"
                        />

                    ) : iDetails === "boAt-Flash-Xpert" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/boat/boAt-Flash-Xpert.jpeg"
                            brand="boAt"
                            modelName="boAt Flash Xpert"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.3-inch TFT"
                            callFunction="Yes (Bluetooth Calling)"
                            widthAndHeight="38mm x 44mm"
                            thicknessAndDiameter="10.7mm thickness, 38mm width"
                            weight="Approx. 38 grams"
                            price="₹ 3,999"
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartwatch - Boat</h1> */}
                        </>
                    )}
                </>
            ) : iName === "fastrack" ? (
                <>
                    {iDetails === "Fastrack-Reflex-5.0" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-5.0.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex 5.0"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IP68)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.7-inch TFT"
                            callFunction="No"
                            widthAndHeight="24mm x 49mm"
                            thicknessAndDiameter="11.8mm thickness"
                            weight="Approx. 28 grams"
                            price="₹ 2,495"
                        />

                    ) : iDetails === "Fastrack-Reflex-Beat" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-Beat.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex Beat"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IPX6)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 8 days"
                            chargeTime="Approx. 2 hours"
                            display="1.3-inch TFT"
                            callFunction="No"
                            widthAndHeight="20mm x 50mm"
                            thicknessAndDiameter="10.5mm thickness"
                            weight="Approx. 24 grams"
                            price="₹ 1,995"
                        />

                    ) : iDetails === "Fastrack-Reflex-3.0" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-3.0.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex 3.0"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IPX6)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.55-inch TFT"
                            callFunction="No"
                            widthAndHeight="20mm x 50mm"
                            thicknessAndDiameter="10.5mm thickness"
                            weight="Approx. 24 grams"
                            price="₹ 2,295"
                        />

                    ) : iDetails === "Fastrack-Reflex-2.0" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-2.0.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex 2.0"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IPX6)"
                            sensor="Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="1.55-inch OLED"
                            callFunction="No"
                            widthAndHeight="20mm x 50mm"
                            thicknessAndDiameter="10.5mm thickness"
                            weight="Approx. 24 grams"
                            price="₹ 1,795"
                        />

                    ) : iDetails === "Fastrack-Reflex-1.0" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-1.0.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex 1.0"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IPX6)"
                            sensor="Step tracking"
                            batteryLife="Up to 10 days"
                            chargeTime="Approx. 2 hours"
                            display="0.96-inch OLED"
                            callFunction="No"
                            widthAndHeight="20mm x 50mm"
                            thicknessAndDiameter="10.5mm thickness"
                            weight="Approx. 24 grams"
                            price="₹ 1,295"
                        />
                    ) : iDetails === "Fastrack-Reflex-Wav" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-Wav.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex Wav"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IPX6)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 8 days"
                            chargeTime="Approx. 2 hours"
                            display="1.54-inch TFT"
                            callFunction="No"
                            widthAndHeight="20mm x 50mm"
                            thicknessAndDiameter="10.5mm thickness"
                            weight="Approx. 24 grams"
                            price="₹ 2,995"
                        />

                    ) : iDetails === "Fastrack-Reflex-Pulse" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-Pulse.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex Pulse"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IPX6)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.75-inch TFT"
                            callFunction="No"
                            widthAndHeight="24mm x 50mm"
                            thicknessAndDiameter="11.5mm thickness"
                            weight="Approx. 28 grams"
                            price="₹ 3,495"
                        />

                    ) : iDetails === "Fastrack-Reflex-Pulse-Pro" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-Pulse-Pro.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex Pulse Pro"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IPX6)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.75-inch TFT"
                            callFunction="No"
                            widthAndHeight="24mm x 50mm"
                            thicknessAndDiameter="11.5mm thickness"
                            weight="Approx. 28 grams"
                            price="₹ 3,995"
                        />

                    ) : iDetails === "Fastrack-Reflex-Beat-Pro" ? (
                        <SmartwatchDetails
                            image="/images/item/smartwatch/fastrack/Fastrack-Reflex-Beat-Pro.jpeg"
                            brand="Fastrack"
                            modelName="Fastrack Reflex Beat Pro"
                            dialColor="Black"
                            dialShape="Rectangular"
                            strapColor="Black"
                            strapMaterial="Silicone"
                            waterResistant="Yes (IPX6)"
                            sensor="Heart rate, SpO2, Sleep, Step tracking"
                            batteryLife="Up to 7 days"
                            chargeTime="Approx. 2 hours"
                            display="1.69-inch TFT"
                            callFunction="No"
                            widthAndHeight="24mm x 50mm"
                            thicknessAndDiameter="11.3mm thickness"
                            weight="Approx. 26 grams"
                            price="₹ 3,995"
                        />
                    ) : (
                        <>
                            <Error message="Product Not Found" />
                            {/* <h1>Smartwatch - fastract</h1> */}
                        </>
                    )}
                </>
            ) : (
                <>
                    <Error message="Product Not Found" />
                    {/* <h1>Smartwatch - None</h1> */}
                </>
            )}
        </>
    )
}

export default Smartwatch
