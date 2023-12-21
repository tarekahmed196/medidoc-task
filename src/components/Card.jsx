import React from 'react';
import glucose from '../assets/glucose.svg'
import pulse from '../assets/pulse.svg'
import './Card.css'
import blood from '../assets/blood.svg'
import oxygen from '../assets/oxygen.svg'
import arrow from '../assets/arrow-up.svg'

const Card = ({dataFromChild, isDesktop, isTablet, isMobile}) => {
    return (
        <div>
            {
                isMobile && <h2 className='pt-3'>Your Vitals</h2>
            }
            <section className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6'>
            
                <div className={`${dataFromChild? 'card-body1': 'card-body2'}`}>
                    <div className='m-3'>
                        <div className=''>
                            <img src={pulse} alt="" />
                            <p className={`text-xs  my-2${dataFromChild? 'text-white': 'text-gray-800'}`}>Pulse Count</p>
                        </div>
                            <div >
                                <h2 className={`text-base  ${dataFromChild? 'text-gray-800': 'text-white'}`}>60 bpm</h2>
                                <div className='flex'>
                                    <img src={arrow} alt="" />
                                    <p className={`text-xs ml-1 my-2  ${dataFromChild? 'text-green': 'text-white'}`}>Normal</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={`${dataFromChild? 'card-body1': 'card-body2'}`}>
                    <div className='m-3'>
                        <div className=''>
                            <img src={blood} alt="" />
                            <p className={`text-xs  my-2${dataFromChild? 'text-white': 'text-gray-800'}`}>Blood Pressure</p>
                        </div>
                            <div >
                                <h2 className={`text-base  ${dataFromChild? 'text-gray-800': 'text-white'}`}>110/70 mmHg</h2>
                                <div className='flex'>
                                    <img src={arrow} alt="" />
                                    <p className={`text-xs ml-1 my-2  ${dataFromChild? 'text-green': 'text-white'}`}>Slightly higher</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={`${dataFromChild? 'card-body1': 'card-body2'}`}>
                    <div className='m-3'>
                        <div className=''>
                            <img src={oxygen} alt="" />
                            <p className={`text-xs  my-2${dataFromChild? 'text-white': 'text-gray-800'}`}>Oxygen Saturation</p>
                        </div>
                            <div >
                                <h2 className={`text-base  ${dataFromChild? 'text-gray-800': 'text-white'}`}>97 %</h2>
                                <div className='flex'>
                                    <img src={arrow} alt="" />
                                    <p className={`text-xs ml-1 my-2  ${dataFromChild? 'text-green': 'text-white'}`}>Slightly higher</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={`${dataFromChild? 'card-body1': 'card-body2'}`}>
                    <div className='m-3'>
                        <div className=''>
                            <img src={glucose} alt="" />
                            <p className={`text-xs  my-2${dataFromChild? 'text-white': 'text-gray-800'}`}>Glucose Count</p>
                        </div>
                            <div >
                                <h2 className={`text-base  ${dataFromChild? 'text-gray-800': 'text-white'}`}>100 mm/dL</h2>
                                <div className='flex'>
                                    <img src={arrow} alt="" />
                                    <p className={`text-xs ml-1 my-2  ${dataFromChild? 'text-green': 'text-white'}`}>Normal</p>
                                </div>
                            </div>
                    </div>
                </div>
            
            
            </section>
        </div>
    );
};

export default Card;