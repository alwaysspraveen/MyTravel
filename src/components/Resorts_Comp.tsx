import arrow from "../assets/angle-right-svgrepo-com.svg";
import like from "../assets/heart-svgrepo-com (2).svg";
import nolike from "../assets/heart-svgrepo-com (3).svg";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/ledras-beach-hotel.jpg";
import hotel3 from "../assets/villa-la-estancia-beach.jpg";

import Resorts_Lists from "./Resorts_Lists";
function Resorts() {
  return (
    <>
      <div className="flex justify-between items-center w-full h-4 mt-10">
        <p className="text-xl font-medium">Island Life</p>
        <img className="h-10" src={arrow} />
      </div>
      <div className="overflow-x-auto flex snap-x snap-mandatory space-x-4 pt-6 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none", margin:"10px 0px 0px 0px" }}>
      <Resorts_Lists title={"Madeira Panaromica"} imgSrc={hotel1} rating={"4.8"} address={"Madiera Is."} fav={like} />
      <Resorts_Lists title={"Ledras Hotel"} imgSrc={hotel2} rating={"4.6"} address={"Rodos Is."}  fav={nolike} />
      <Resorts_Lists title={"Madeira Panaromica"} imgSrc={hotel3} rating={"4.7"} address={"Madiera Is."}  fav={like}/>
    </div>
    </>
  );
}

export default Resorts;
