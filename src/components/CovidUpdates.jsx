import "./CovidUpdates.css";
import injection from "../assets/injection.svg";

const CovidUpdates = ({dataFromChild, isDesktop, isTablet, isMobile}) => {
  console.log('isMobile covid',isDesktop, isTablet,isMobile);
  return (
    <div className={`${dataFromChild? ' bg-white': 'bg-black'} ${isDesktop? ' w-[456px] h-[300px] top-681 left-1038 rounded-[8px] border border-solid border-[#ededed] p-[8px 20px 8px 20px] mt-2': ''} ${isMobile? '  rounded-[8px] border border-solid border-[#ededed] p-[8px 20px 8px 20px] mt-2': ''} `}>
      <div className={`p-4 ${isMobile? 'flex flex-col items-center': ""}`}>
          <div className={`md:flex w-full h-[56px] justify-between py-4 `}>
            <h2 className={`weight-500 ${dataFromChild?'text-black':'text-white'} ${isMobile? 'text-red-500 mb-2': ''}`}>Covid-19 Updates</h2>
            <div className="">
              <p className={` weight-500 ${dataFromChild?'text-black':'text-white'}`}>10 September 2022 </p>
              <span className={` weight-400 gray-text w-[172px] ${dataFromChild?'text-gray-400':'text-white '}`}>Thursday  10:00:00 AM</span>
            </div>
          </div>
          <div className="md:flex items-center justify-between">
            <img className={`${isDesktop? 'w-[228px] h-[228px]': ''} ${isTablet? 'w-[228px] h-[228px]': ''} ${isMobile? 'w-[228px] h-[228px] items-center mt-4': ''}`} src={injection} alt="" />
            <div className={`${isDesktop? 'infection-number items-center lg:overflow-y-auto text-center py-2': ''} ${isTablet? 'infection-number2 justify-center flex text-center py-2': ''} ${isMobile? 'infection-number3 flex flex-col text-center items-center mx-auto': ''}`}>
              <div>
                <p className={`number-color text-sm mt-2 ${dataFromChild?'':''}`}>Infection Number</p>
                <h1 className="number-color font-500-size">500</h1>
                <p className="number-color text-sm">Infection Rate </p>
                <h1 className="number-color font-500-size">10%</h1>
              </div>
              <div>
                <p className="number-color text-sm">Total infection</p>
                <h1 className="number-color font-500-size">500,000</h1>
                <p className="number-color text-sm">Number of Death</p>
                <h1 className="number-color font-500-size">20</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CovidUpdates;
