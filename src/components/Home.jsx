
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import Banner from './Banner';
import Appointments from './Appointments';
import CovidUpdates from './CovidUpdates';
import Card from './Card';
import ToDoList from './ToDoList';

const Home = () => {
    return (
        <div className='flex bg-[#F9F9F9]'>
            <Sidebar></Sidebar>
            <div className='w-full ml-16'>
                <NavBar></NavBar>
                <div className='flex justify-between'>
                    <div className=''>
                        <Banner></Banner>
                        <Card></Card>
                        <ToDoList></ToDoList>
                    </div>
                    <div>
                        <Appointments></Appointments>
                        <CovidUpdates></CovidUpdates>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Home;