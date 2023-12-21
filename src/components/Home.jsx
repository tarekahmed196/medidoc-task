import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import Banner from './Banner';
import Appointments from './Appointments';
import CovidUpdates from './CovidUpdates';
import Card from './Card';
import ToDoList from './ToDoList';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const updateWindowDimensions = () => {
    const desktopQuery = window.matchMedia('(min-width: 1025px)');
    const tabletQuery = window.matchMedia('(max-width: 1024px) and (min-width: 601px)');
    const mobileQuery = window.matchMedia('(max-width: 600px)');

    setIsDesktop(desktopQuery.matches);
    setIsTablet(tabletQuery.matches);
    setIsMobile(mobileQuery.matches);
  };

  useEffect(() => {
    console.log('Component mounted');
    updateWindowDimensions();

    const handleResize = () => {
      console.log('Window resized');
      updateWindowDimensions();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      console.log('Component will unmount');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`flex  ${dataFromChild? ' bg-[#F9F9F9]':'bg-black'}`}>
      <Sidebar dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
      <div className='w-full ml-16'>
        <NavBar dataFromChild={dataFromChild} onDataFromChild={handleDataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
        {isDesktop && (
          <div className='lg:flex justify-between'>
            <div>
              <Banner isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
              <Card dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
              <ToDoList dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
            </div>
            <div>
              <Appointments dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
              <CovidUpdates dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
            </div>
          </div>
        )}
        {isTablet && (
          <>
            <Banner isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
            <Card dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
            <div className='lg:flex justify-between'>
              <div className='flex items-center justify-between'>
                <ToDoList dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
                <Appointments dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
              </div>
              <div>
                <CovidUpdates dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
              </div>
            </div>
          </>
        )}

        {isMobile && (
          <>
            <Banner isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
            <Card dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
            
              <div className='flex flex-col'>
                <ToDoList dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
                <Appointments dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
              </div>
              <div>
                <CovidUpdates dataFromChild={dataFromChild} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
              </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
