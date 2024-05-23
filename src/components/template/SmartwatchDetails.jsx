import React from 'react'

function SmartwatchDetails(props) {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg p-6 w-4/5 lg:w-3/5">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 mb-4 lg:mb-0">
                            <img src={props.image} alt="" className="h-auto w-full object-contain rounded-lg" />
                        </div>
                        <div className="lg:w-2/3 lg:ml-4 flex flex-col h-96">
                            <h1 className="text-2xl font-medium mb-4">{props.modelName}</h1>
                            <div className="overflow-y-auto flex-1 mb-4">
                                <p><span className='font-semibold text-lg text-slate-600'>Brand: </span><span className='text-xl'>{props.brand}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Model Name: </span><span className='text-xl'>{props.modelName}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Dial Color: </span><span className='text-xl'>{props.dialColor}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Dial Shape: </span><span className='text-xl'>{props.dialShape}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Strap Color: </span><span className='text-xl'>{props.strapColor}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Strap Material: </span><span className='text-xl'>{props.strapMaterial}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Water Resistant: </span><span className='text-xl'>{props.waterResistant}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Sensor: </span><span className='text-xl'>{props.sensor}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Battery Life: </span><span className='text-xl'>{props.batteryLife}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Charge Time: </span><span className='text-xl'>{props.chargeTime}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Display: </span><span className='text-xl'>{props.display}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Call Function: </span><span className='text-xl'>{props.callFunction}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Width & Height: </span><span className='text-xl'>{props.widthAndHeight}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Thickness & Diameter: </span><span className='text-xl'>{props.thicknessAndDiameter}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Weight: </span><span className='text-xl'>{props.weight}</span></p>
                                <p className='text-red-600 text-sm mt-5'><span className="font-semibold">Disclaimer: </span><span>Product images and specifications shown are for reference only; actual products may vary.</span></p>
                            </div>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-lg font-medium text-gray-900">{props.price}</span>
                                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-500 hover:cursor-not-allowed rounded">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmartwatchDetails
