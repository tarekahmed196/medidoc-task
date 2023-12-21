
import './Appointments.css'

const Appointments = ({dataFromChild,isDesktop, isTablet, isMobile}) => {
    console.log('datafromchild',dataFromChild,isDesktop, isTablet, isMobile);
    return (
        <div className={`${isDesktop? 'full-appointments': ''} ${isTablet? 'full-appointments2 mt-6 py-4': ''} ${isMobile? 'full-appointments3 mt-6 py-4': ''} ${dataFromChild ? 'bg-white':'bg-[#2C2222]'}`}>
            <h2 className={`p-4 ${dataFromChild? 'text-black':'text-white'}`}>Upcoming Appointments</h2>
            <div className='h-[498px] w-[420px] flex'>
                <div className='flex flex-col space-y-1.5 h-[498px] mt-16 pl-4'>
                    <div className="orange-circle"></div>
                    <div className={`${isDesktop? 'vertical-border':''} ${isTablet? 'vertical-border2':''}${isMobile? 'vertical-border2':''}`}></div>
                    <div className="yellow-circle"></div>
                    <div className={`${isDesktop? 'vertical-border':''} ${isTablet? 'vertical-border2':''}${isMobile? 'vertical-border2':''}`}></div>
                    <div className="green-circle"></div>
                    <div className={`${isDesktop? 'vertical-border':''} ${isTablet? 'vertical-border2':''}${isMobile? 'vertical-border2':''}`}></div>
                    <div className="blue-circle"></div>
                </div>

                <div className='-m-2'>
                    {/* 1st schedule */}
                    <div className='flex items-center m-5 '>
                        <div className={`flex flex-col justify-center items-center bg-white p-3 rounded-2xl date-border          ${isDesktop ? 'layout' : ''} ${isTablet ? 'layout2' : ''} ${isMobile ? 'layout2' : ''} `} >
                            <div >
                                <h2 className={`text-gray  ${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`}>2022</h2>
                                <h2 className={`${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`} style={{fontFamily: 'inter'}}>13</h2>
                                <h2 className={`text-gray${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`}>Sep</h2>
                            </div>
                        </div>
                        <div className={`bg-dr rounded-lg ${dataFromChild?'bg-[#FFF5F5]':' bg-[#413838]'} ${isDesktop ? 'layout4' : ''} ${isTablet ? 'layout3' : ''} ${isMobile ? 'layout3' : ''} `} >
                            <h1 className={`${isDesktop ? 'text-base mx-5': ''} ${isTablet? 'text-sm ml-5': ''} ${isMobile? 'text-sm ml-5': ''} ${dataFromChild?'text-[#413838]':'  text-white'}`}>Dr. Muhammad Abdul Hussein</h1>
                            <h2 className= {`text-sm font-normal mx-5 ${dataFromChild?'text-[#413838]':'  text-white'}`}>Cardiologist</h2>
                            <div className={`${isDesktop? 'flex p-[8px] gap-[8px]': ''} ${isTablet? 'flex p-[8px] gap-[8px] ml-3': ''} ${isMobile? 'flex p-[8px] gap-[8px] ml-3': ''}`}>
                                <div className={`flex   ${isDesktop?'slot-morning mx-3' : '' } ${isTablet?'slot-morning2 text-sm' : '' } ${isMobile?'slot-morning2 text-sm' : '' } `}><p className='slot mr-2'>Slot</p>
                                <p>Morning</p></div>
                                <div className={`flex ${isDesktop?'slot-morning' : '' } ${isTablet?'slot-morning2 text-sm' : '' } ${isMobile?'slot-morning2 text-sm' : '' }`}>
                                    <span className='time mr-2'>Time</span>
                                    <span>10.00 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd schedule */}
                    <div className='flex items-center m-5 '>
                        <div className={`flex flex-col justify-center items-center bg-white p-3 rounded-2xl date-border          ${isDesktop ? 'layout' : ''} ${isTablet ? 'layout2' : ''} ${isMobile ? 'layout2' : ''} `} >
                            <div >
                                <h2 className={`text-gray  ${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`}>2022</h2>
                                <h2 className={`${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`} style={{fontFamily: 'inter'}}>13</h2>
                                <h2 className={`text-gray${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`}>Sep</h2>
                            </div>
                        </div>
                        <div className={`bg-dr rounded-lg ${dataFromChild?'bg-[#FFF5F5]':' bg-[#413838]'} ${isDesktop ? 'layout4' : ''} ${isTablet ? 'layout3' : ''} ${isMobile ? 'layout3' : ''} `} >
                            <h1 className={`${isDesktop ? 'text-base mx-5': ''} ${isTablet? 'text-sm ml-5': ''} ${isMobile? 'text-sm ml-5': ''} ${dataFromChild?'text-[#413838]':'  text-white'}`}>Dr. Muhammad Abdul Hussein</h1>
                            <h2 className= {`text-sm font-normal mx-5 ${dataFromChild?'text-[#413838]':'  text-white'}`}>Cardiologist</h2>
                            <div className={`${isDesktop? 'flex p-[8px] gap-[8px]': ''} ${isTablet? 'flex p-[8px] gap-[8px] ml-3': ''} ${isMobile? 'flex p-[8px] gap-[8px] ml-3': ''}`}>
                                <div className={`flex   ${isDesktop?'slot-morning mx-3' : '' } ${isTablet?'slot-morning2 text-sm' : '' } ${isMobile?'slot-morning2 text-sm' : '' } `}><p className='slot mr-2'>Slot</p>
                                <p>Morning</p></div>
                                <div className={`flex ${isDesktop?'slot-morning' : '' } ${isTablet?'slot-morning2 text-sm' : '' } ${isMobile?'slot-morning2 text-sm' : '' }`}>
                                    <span className='time mr-2'>Time</span>
                                    <span>10.00 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3rd schedule */}
                    <div className='flex items-center m-5 '>
                        <div className={`flex flex-col justify-center items-center bg-white p-3 rounded-2xl date-border          ${isDesktop ? 'layout' : ''} ${isTablet ? 'layout2' : ''} ${isMobile ? 'layout2' : ''} `} >
                            <div >
                                <h2 className={`text-gray  ${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`}>2022</h2>
                                <h2 className={`${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`} style={{fontFamily: 'inter'}}>13</h2>
                                <h2 className={`text-gray${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`}>Sep</h2>
                            </div>
                        </div>
                        <div className={`bg-dr rounded-lg ${dataFromChild?'bg-[#FFF5F5]':' bg-[#413838]'} ${isDesktop ? 'layout4' : ''} ${isTablet ? 'layout3' : ''} ${isMobile ? 'layout3' : ''} `} >
                            <h1 className={`${isDesktop ? 'text-base mx-5': ''} ${isTablet? 'text-sm ml-5': ''} ${isMobile? 'text-sm ml-5': ''} ${dataFromChild?'text-[#413838]':'  text-white'}`}>Dr. Muhammad Abdul Hussein</h1>
                            <h2 className= {`text-sm font-normal mx-5 ${dataFromChild?'text-[#413838]':'  text-white'}`}>Cardiologist</h2>
                            <div className={`${isDesktop? 'flex p-[8px] gap-[8px]': ''} ${isTablet? 'flex p-[8px] gap-[8px] ml-3': ''} ${isMobile? 'flex p-[8px] gap-[8px] ml-3': ''}`}>
                                <div className={`flex   ${isDesktop?'slot-morning mx-3' : '' } ${isTablet?'slot-morning2 text-sm' : '' } ${isMobile?'slot-morning2 text-sm' : '' } `}><p className='slot mr-2'>Slot</p>
                                <p>Morning</p></div>
                                <div className={`flex ${isDesktop?'slot-morning' : '' } ${isTablet?'slot-morning2 text-sm' : '' } ${isMobile?'slot-morning2 text-sm' : '' }`}>
                                    <span className='time mr-2'>Time</span>
                                    <span>10.00 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 4th schedule */}
                    <div className='flex items-center m-5 '>
                        <div className={`flex flex-col justify-center items-center bg-white p-3 rounded-2xl date-border          ${isDesktop ? 'layout' : ''} ${isTablet ? 'layout2' : ''} ${isMobile ? 'layout2' : ''} `} >
                            <div >
                                <h2 className={`text-gray  ${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`}>2022</h2>
                                <h2 className={`${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`} style={{fontFamily: 'inter'}}>13</h2>
                                <h2 className={`text-gray${isDesktop? 'text-xl':''} ${isTablet? 'text-sm':''} ${isMobile? 'text-sm':''}`}>Sep</h2>
                            </div>
                        </div>
                        <div className={`bg-dr rounded-lg ${dataFromChild?'bg-[#FFF5F5]':' bg-[#413838]'} ${isDesktop ? 'layout4' : ''} ${isTablet ? 'layout3' : ''} ${isMobile ? 'layout3' : ''} `} >
                            <h1 className={`${isDesktop ? 'text-base mx-5': ''} ${isTablet? 'text-sm ml-5': ''} ${isMobile? 'text-sm ml-5': ''} ${dataFromChild?'text-[#413838]':'  text-white'}`}>Dr. Muhammad Abdul Hussein</h1>
                            <h2 className= {`text-sm font-normal mx-5 ${dataFromChild?'text-[#413838]':'  text-white'}`}>Cardiologist</h2>
                            <div className={`${isDesktop? 'flex p-[8px] gap-[8px]': ''} ${isTablet? 'flex p-[8px] gap-[8px] ml-3': ''} ${isMobile? 'flex p-[8px] gap-[8px] ml-3': ''}`}>
                                <div className={`flex   ${isDesktop?'slot-morning mx-3' : '' } ${isTablet?'slot-morning2 text-sm' : '' } ${isMobile?'slot-morning2 text-sm' : '' } `}><p className='slot mr-2'>Slot</p>
                                <p>Morning</p></div>
                                <div className={`flex ${isDesktop?'slot-morning' : '' } ${isTablet?'slot-morning2 text-sm' : '' } ${isMobile?'slot-morning2 text-sm' : '' }`}>
                                    <span className='time mr-2'>Time</span>
                                    <span>10.00 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
            
        </div>
    );
};

export default Appointments;