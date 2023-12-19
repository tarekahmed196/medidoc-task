import Avator from "../assets/Avatar.svg";
import Vector from "../assets/Vector.svg";
import Toggle_button from "../assets/Toggle-button.svg";

const NavBar = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Home</a>
      </div>
      <div className="flex-none">
      <img src={Toggle_button} alt="" />
      <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={Avator}
              />
              
            </div>
            
          </div>

          <img src={Vector} alt="" />
        
        
      </div>
    </div>
  );
};

export default NavBar;
 