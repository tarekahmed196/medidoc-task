import "./CovidUpdates.css";
import injection from "../assets/injection.svg";

const CovidUpdates = () => {
  return (
    <div className="bg-white w-[456px] h-[300px] top-681 left-1038 rounded-[8px] border border-solid border-[#ededed] p-[8px 20px 8px 20px] mt-2">
      <div className="p-4">
          <div className="flex w-full h-[56px] justify-between py-4">
            <h2 className="weight-500">Covid-19 Updates</h2>
            <div>
              <p className="weight-500">10 September 2022 </p>
              <p className="gray-text weight-400">Thursday  10:00:00 AM</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img className="w-[228px] h-[228px]" src={injection} alt="" />
            <div className="infection-number items-center overflow-y-auto text-center">
              <p className="number-color">Infection Number</p>
              <h1 className="number-color font-500-size">500</h1>
              <p className="number-color">Infection Rate </p>
              <h1 className="number-color font-500-size">10%</h1>
              <p className="number-color">Total infection</p>
              <h1 className="number-color font-500-size">500,000</h1>
              <p className="number-color">Number of Death</p>
              <h1 className="number-color font-500-size">20</h1>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CovidUpdates;
