import React from 'react';
import banner from '../assets/banner.svg'

const Banner = ({isDesktop, isTablet, isMobile}) => {
    
    return (
        <div className={`md:flex md:w-[718px] md:h-[213px] bg-gradient-to-r from-[#FF7594] to-[#FF7979]  items-center justify-between rounded-xl ${isMobile? ' w-auto h-auto bg-gradient-to-r from-[#FF7594] to-[#FF7979]  rounded-xl p-4' :''}`}>
            
                <div className={`w-[230px] h-[230px] ${isMobile? 'text-center mx-auto':''}`}><img className={`''`} src={banner} alt="" /></div>
            
            <div className={`${isDesktop? ' w-1/2 flex flex-col gap-y-2 ': ''} ${isMobile? 'flex flex-col': ''}`}>
                <h1 className={`text-2xl font-semibold text-white text-opacity-100 leading-9 ${isMobile? 'text-xl font-normal text-white leading-2': ''}`}>Hello, Mary Jane!</h1>
            <span className={` ${isDesktop? 'font-medium leading-8 text-base tracking-[0.01em] text-white':''} ${isTablet? ' text-white ': ''} ${isMobile? 'font-medium my-3 leading-4 text-xs tracking-[0.09em] text-white w-300px':''}`}>Stay Up-to-Date with your appointments. You Have No pending Reports</span>
            </div>
            
        </div>
    );
};

export default Banner;