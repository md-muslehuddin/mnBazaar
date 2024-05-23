import React from 'react'


function SmartphoneDetails(props) {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg p-6 w-4/5 lg:w-3/5">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 mb-4 lg:mb-0">
                            <img src={props.deviceImage} alt="" className="h-auto w-full object-contain rounded-lg" />
                        </div>
                        <div className="lg:w-2/3 lg:ml-4 flex flex-col h-96">
                            <h1 className="text-2xl font-medium mb-4">{props.deviceName}</h1>
                            <div className="overflow-y-auto flex-1 mb-4">
                                <p><span className='font-semibold text-lg text-slate-600'>Brand: </span><span className='text-xl'>{props.brand}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Release Date: </span><span className='text-xl'>{props.release}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Battery Capacity: </span><span className='text-xl'>{props.battery}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Display: </span><span className='text-xl'>{props.display}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Processor: </span><span className='text-xl'>{props.processor}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>RAM: </span><span className='text-xl'>{props.ram}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Internal Storage: </span><span className='text-xl'>{props.storage}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Rear Camera: </span><span className='text-xl'>{props.rearCamera}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Front Camera: </span><span className='text-xl'>{props.frontCamera}</span></p>
                                <p><span className='font-semibold text-lg text-slate-600'>Description: </span><span className='italic text-justify'>{props.description}</span></p>
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

export default SmartphoneDetails;
