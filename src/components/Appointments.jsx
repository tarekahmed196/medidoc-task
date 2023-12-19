
import './Appointments.css'

const Appointments = () => {
    return (
        <div className='min-w-[452px] w-auto min-h-[570px] h-auto full-appointments'>
            <h2 className='p-4'>Upcoming Appointments</h2>
            <div className='h-[498px] w-[420px] flex'>
                <div className='flex flex-col h-96 mt-16 pl-4'>
                    <div className="orange-circle"></div>
                    <div className="vertical-border"></div>
                    <div className="yellow-circle"></div>
                    <div className="vertical-border"></div>
                    <div className="green-circle"></div>
                    <div className="vertical-border"></div>
                    <div className="blue-circle"></div>
                </div>

                <div>
                    {/* 1st schedule */}
                    <div className='flex items-center justify-between m-5'>
                        <div className=' flex flex-col justify-center items-center bg-white p-3 rounded-2xl date-border layout'>
                            <div className='layout2'>
                                <h2 className="text-gray">2022</h2>
                                <h2 className='text-xl' style={{fontFamily: 'inter'}}>13</h2>
                                <h2 className='text-xl text-gray'>Sep</h2>
                            </div>
                        </div>
                        <div className='bg-dr  w-[342px] h-[101px] rounded-lg' >
                            <h1 className='text-base mx-2'>Dr. Muhammad Abdul Hussein</h1>
                            <h2 className='text-sm font-normal mx-2'>Cardiologist</h2>
                            <div className="flex p-[8px] gap-[8px]">
                                <div className='flex slot-morning '><p className='slot mr-2'>Slot</p>
                                <p>Morning</p></div>
                                <div className='flex slot-morning '>
                                    <p className='time mr-2'>Time</p>
                                    <p>10.00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd schedule */}
                    <div className='flex items-center justify-between m-5'>
                        <div className=' flex flex-col justify-center items-center bg-white p-3 rounded-2xl date-border layout'>
                            <div className='layout2'>
                                <h2 className="text-gray">2022</h2>
                                <h2 className='text-xl' style={{fontFamily: 'inter'}}>13</h2>
                                <h2 className='text-xl text-gray'>Sep</h2>
                            </div>
                        </div>
                        <div className='bg-dr  w-[342px] h-[]101px rounded-lg' >
                            <h1 className='text-base mx-2'>Dr. Muhammad Abdul Hussein</h1>
                            <h2 className='text-sm font-normal mx-2'>Cardiologist</h2>
                            <div className="flex p-[8px] gap-[8px]">
                                <div className='flex slot-morning '><p className='slot mr-2'>Slot</p>
                                <p>Morning</p></div>
                                <div className='flex slot-morning '>
                                    <p className='time mr-2'>Time</p>
                                    <p>10.00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3rd schedule */}
                    <div className='flex items-center justify-between m-5'>
                        <div className=' flex flex-col justify-center items-center bg-white p-3 rounded-2xl date-border layout'>
                            <div className='layout2'>
                                <h2 className="text-gray">2022</h2>
                                <h2 className='text-xl' style={{fontFamily: 'inter'}}>13</h2>
                                <h2 className='text-xl text-gray'>Sep</h2>
                            </div>
                        </div>
                        <div className='bg-dr  w-[342px] h-[]101px rounded-lg' >
                            <h1 className='text-base mx-2'>Dr. Muhammad Abdul Hussein</h1>
                            <h2 className='text-sm font-normal mx-2'>Cardiologist</h2>
                            <div className="flex p-[8px] gap-[8px]">
                                <div className='flex slot-morning '><p className='slot mr-2'>Slot</p>
                                <p>Morning</p></div>
                                <div className='flex slot-morning '>
                                    <p className='time mr-2'>Time</p>
                                    <p>10.00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 4th schedule */}
                    <div className='flex items-center justify-between m-5'>
                        <div className=' flex flex-col justify-center items-center bg-white p-3 rounded-2xl date-border layout'>
                            <div className='layout2'>
                                <h2 className="text-gray">2022</h2>
                                <h2 className='text-xl' style={{fontFamily: 'inter'}}>13</h2>
                                <h2 className='text-xl text-gray'>Sep</h2>
                            </div>
                        </div>
                        <div className='bg-dr  w-[342px] h-[]101px rounded-lg' >
                            <h1 className='text-base mx-2'>Dr. Muhammad Abdul Hussein</h1>
                            <h2 className='text-sm font-normal mx-2'>Cardiologist</h2>
                            <div className="flex p-[8px] gap-[8px]">
                                <div className='flex slot-morning '><p className='slot mr-2'>Slot</p>
                                <p>Morning</p></div>
                                <div className='flex slot-morning '>
                                    <p className='time mr-2'>Time</p>
                                    <p>10.00 AM</p>
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