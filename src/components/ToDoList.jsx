import './ToDoList.css';
import addButton from '../assets/small.svg';
import tickBlur from '../assets/tick_blur.svg';
import tick from '../assets/tick.svg';
import done from '../assets/done.svg';
import Add from '../assets/add.svg';

const ToDoList = ({ dataFromChild, isDesktop, isTablet, isMobile }) => {
  console.log(isDesktop, isTablet, isMobile);
  return (
    <section
      className={`mt-6 px-6 py-4 ${isDesktop ? 'full-body' : ''} ${
        isTablet ? 'full-body2' : ''
      } ${isMobile ? 'full-body2' : ''} ${dataFromChild ? 'bg-white' : 'bg-black'}`}
    >
      <h2 className={`text-base py-2 ${dataFromChild ? 'text-black' : 'text-white'}`}>To-Do List</h2>
      <div className='flex gap-4 items-start'>
        <div
          className={`text-area ${dataFromChild ? '' : 'bg-[#959190]'} ${
            isTablet ? 'relative' : ''
          } ${isMobile ? 'relative' : ''}`}
        >
          {isTablet && <img className='absolute right-0 bottom-0 w-6 h-6' src={Add} alt='' />}
          {isMobile && <img className='absolute right-0 bottom-0 w-6 h-6' src={Add} alt='' />}
        </div>
        {isDesktop && <img src={addButton} alt='' />}
      </div>
      <div className='flex justify-between my-6'>
        <div className='flex w-32 gap-4 items-center'>
          <img src={tickBlur} alt='' />
          <h1 className={`text-sm ${dataFromChild ? 'text-black' : 'text-white'}`}>Select All</h1>
        </div>
        <img src={done} alt='' />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 items-center'>
          <img src={tick} alt='' />
          <div className={`flex ${isTablet ? 'flex-col' : ''} ${isMobile ? 'flex-col' : ''}`}>
            <span className={`text-sm ${dataFromChild ? 'text-black' : 'text-white'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className='text-sm text-gray-300'>Last Added: 10 sep 2022</span>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          {isDesktop && <img src={tickBlur} alt='' />}
          {isTablet && <img src={tick} alt='' />}
          {isMobile && <img src={tick} alt='' />}
          <div className={`flex ${isTablet ? 'flex-col' : ''} ${isMobile ? 'flex-col' : ''}`}>
            <span className={`text-sm ${dataFromChild ? 'text-black' : 'text-white'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className='text-sm text-gray-300'>Last Added: 10 sep 2022</span>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <img src={tickBlur} alt='' />
          <div className={`flex ${isTablet ? 'flex-col' : ''} ${isMobile ? 'flex-col' : ''}`}>
            <span className={`text-sm ${dataFromChild ? 'text-black' : 'text-white'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className='text-sm text-gray-300'>Last Added: 10 sep 2022</span>
          </div>
        </div>
        {isDesktop && (
          <div className='flex gap-4 items-center'>
            <img src={tickBlur} alt='' />
            <div className={`flex ${isTablet ? 'flex-col' : ''} ${isMobile ? 'flex-col' : ''}`}>
              <span className={`text-sm ${dataFromChild ? 'text-black' : 'text-white'}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className='text-sm text-gray-300'>Last Added: 10 sep 2022</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToDoList;
