import React from 'react';
import banner from '../assets/banner.svg'

const Banner = () => {
    return (
        <div className='flex w-[718px] h-[213px] bg-gradient-to-r from-[#FF7594] to-[#FF7979]  items-center justify-center rounded-xl'>
            
                <img className='w-[186px] h-[158px]' src={banner} alt="" />
            
            <div className='p-16 '>
                <h1 className='text-4xl text-white text-opacity-100'>Hello, Mary Jane!</h1>
            <p className='text-xl text-white text-opacity-100'>Stay Up-to-Date with your appointments. You Have No pending Reports</p>
            </div>
            
        </div>
    );
};

export default Banner;