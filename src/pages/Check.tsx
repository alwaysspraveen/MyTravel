import arrow from "../assets/angle-right-svgrepo-com.svg";
import star from "../assets/star-svgrepo-com.svg";
import bed from "../assets/bed-svgrepo-com.svg";
import users from "../assets//users-svgrepo-com (1).svg";
import heart from "../assets/navbar/heart-svgrepo-com.svg";
import paris from "../assets/hotel1.jpg";
import HeadText from "../components/HeadText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Check() {
  const [details] = useState({
    hotelName: "Ozo Hotels Cordial",
    price: "$147.00",
    rating: "4.98 (237) reviews",
    facilities: ["Center", "Average Price", "Cozy"],
  });
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate("/final-checkout", { state: details });
  };

  return (
    <>
      <div className="flex justify-between items-center ">
        <img className="h-10" style={{ transform: "scaleX(-1)" }} src={arrow} />
        <img className="h-8" src={heart} alt="" />
      </div>
      <div className="w-full mt-4 justify-center flex">
        <p className="text-3xl font-semibold w-[160px] text-center">
          Ozo Hotels Cordial
        </p>
      </div>
      <div className="w-full h-fit mt-6 p-2 flex justify-end relative">
        <img className="w-full h-full rounded-2xl object-cover" src={paris} />
        <p className="absolute top-8 right-10 bg-green-600 p-1 pl-2 pr-2 text-white rounded-[6px] text-[15px]">
          Top Sales
        </p>
      </div>
      <div className="flex mt-4 p-2 justify-start gap-2">
        <img className="h-5" src={star} />
        <p className="text-[17px]">4.98 (237) reviews</p>
      </div>

      <div className="flex justify-between items-center p-2 mt-2">
       <div className="flex gap-4">
       <div className="flex items-center gap-3">
          <img className="h-5.5" src={bed} alt="" />
          <p className="pt-[6px]">1</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="h-7" src={users} alt="" />
          <p className="pt-[4px]">2</p>
        </div>
       </div>
        <p className="text-2xl font-semibold">$147.00</p>
      </div>
      <div className="flex p-2 mt-3">
        <p className="text-xl font-semibold">Facilities</p>
      </div>
      <div className="flex w-full gap-4 pl-2 pt-1">
        <p className="bg-[#ececec] font-medium p-1.5 rounded-[8px]">Center</p>
        <p className="bg-[#ececec] font-medium p-1.5 rounded-[8px]">Average Price</p>
        <p className="bg-[#ececec] font-medium p-1.5 rounded-[8px]">Cozy</p>
      </div>
      <div className="w-full rounded-2xl text-xl fixed p-3 right-0 left-0 bottom-6">
        <button
          className="bg-black h-16 text-white w-full rounded-xl"
          onClick={handleReserve}
        >
          Reserve
        </button>
      </div>
      <HeadText/>
    </>
  );
}

export default Check;
