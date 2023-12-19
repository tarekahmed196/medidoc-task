import React from 'react';
import glucose from '../assets/glucose.svg'
import pulse from '../assets/pulse.svg'
import './Card.css'
import blood from '../assets/blood.svg'
import oxygen from '../assets/oxygen.svg'
import arrow from '../assets/arrow-up.svg'

const Card = () => {
    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-6'>
            <div className='card-body1'>
                <div className='m-3'>
                    <div className=''>
                        <img src={pulse} alt="" />
                        <p className='text-xs text-gray-800 my-2'>Pulse Count</p>
                    </div>
                        <div >
                            <h2 className='text-base text-gray-800'>60 bpm</h2>
                            <div className='flex'>
                                <img src={arrow} alt="" />
                                <p className='text-xs text-green ml-1 my-2'>Normal</p>
                            </div>
                        </div>
                </div>
            </div>

            <div className='card-body1'>
                <div className='m-3'>
                    <div className=''>
                        <img src={blood} alt="" />
                        <p className='text-xs text-gray-800 my-2'>Blood Pressure</p>
                    </div>
                        <div >
                            <h2 className='text-base text-gray-800'>110/70 mmHg</h2>
                            <div className='flex'>
                                <img src={arrow} alt="" />
                                <p className='text-xs text-green ml-1 my-2'>Slightly higher</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='card-body1'>
                <div className='m-3'>
                    <div className=''>
                        <img src={oxygen} alt="" />
                        <p className='text-xs text-gray-800 my-2'>Oxygen Saturation</p>
                    </div>
                        <div >
                            <h2 className='text-base text-gray-800'>97 %</h2>
                            <div className='flex'>
                                <img src={arrow} alt="" />
                                <p className='text-xs text-green ml-1 my-2'>Slightly higher</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='card-body1'>
                <div className='m-3'>
                    <div className=''>
                        <img src={glucose} alt="" />
                        <p className='text-xs text-gray-800 my-2'>Glucose Count</p>
                    </div>
                        <div >
                            <h2 className='text-base text-gray-800'>100 mm/dL</h2>
                            <div className='flex'>
                                <img src={arrow} alt="" />
                                <p className='text-xs text-green ml-1 my-2'>Normal</p>
                            </div>
                        </div>
                </div>
            </div>
            
            

        </section>
    );
};

export default Card;