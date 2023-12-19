import './ToDoList.css'
import addButton from '../assets/small.svg'
import tickBlur from '../assets/tick_blur.svg'
import tick from '../assets/tick.svg'
import done from '../assets/done.svg'

const ToDoList = () => {
    return (
        <section className='full-body mt-6 px-6 py-4'>
            <h2 className='text-base py-2'>To-Do List</h2>
            <div className='flex gap-4 items-start'>
                <div className='text-area'>

                </div>
                <img src={addButton} alt="" />
            </div>

            <div className='flex justify-between my-6'>
                <div className='flex w-32 gap-4 items-center'>
                    <img src={tickBlur} alt="" />
                    <h1>Select All</h1>
                </div>
                <img src={done} alt="" />
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 items-center'>
                    <img src={tick} alt="" />
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-sm text-gray-300'>Last Added: 10 sep 2022</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <img src={tickBlur} alt="" />
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-sm text-gray-300'>Last Added: 10 sep 2022</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <img src={tickBlur} alt="" />
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-sm text-gray-300'>Last Added: 10 sep 2022</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <img src={tickBlur} alt="" />
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-sm text-gray-300'>Last Added: 10 sep 2022</p>
                </div>
            </div>
            
        </section>
    );
};

export default ToDoList;