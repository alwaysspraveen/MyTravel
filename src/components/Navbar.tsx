import { useNavigate } from "react-router-dom";
import home from "../assets/navbar/home-svgrepo-com.svg";
import search from "../assets/navbar/search-svgrepo-com (1).svg";
import grid from "..//assets/navbar/grid-svgrepo-com.svg";
import heart from "..//assets/navbar/heart-svgrepo-com.svg";

function Navbar() {
  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/next"); // Navigates to NextPage
  };

  return (
    <>

      <div className="pl-6 pr-6 w-full h-18 flex justify-between gap-8 items-center fixed bottom-0 left-0 right-0 bg-[#Fff] z-10">
        <div className="h-12 w-12 flex items-center justify-center rounded-[50px] bg-[#242424]">
          <img className="w-8 h-8" src={home} />
        </div>
        <div className="h-12 w-12 flex items-center justify-center">
          <img className="w-6 h-full opacity-[0.5]" src={search} />
        </div>
        <div className="h-12 w-12 flex items-center justify-center">
          <img className="w-6 h-full opacity-[0.5]" src={grid} />
        </div>
        <div className="h-12 w-12 flex items-center justify-center">
          <img onClick={goToNextPage} className="w-7 h-full opacity-[0.5]" src={heart} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
