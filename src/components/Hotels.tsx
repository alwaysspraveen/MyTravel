import arrow from "../assets/angle-right-svgrepo-com.svg";
import ames from "../assets/amester.jpg";
import paris from "../assets/istockphoto-490360522-612x612.jpg";
import berlin from "../assets/berlin.jpg";




function Hotels() {
  return (
    <>
    <div className="flex justify-between items-center w-full h-4">
        <p className="text-xl font-medium">Popular hotels</p>
        <img className="h-10" src={arrow}/>
    </div>
    <div className="overflow-x-auto flex snap-x snap-mandatory space-x-4 p-4 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none", margin:"10px 0px 0px 0px" }}>
      <div className="snap-start shrink-0 relative flex items-end">
        <img className="w-[150px] h-[220px] rounded-lg" src={ames} alt="Image 1"/>
        <p className="absolute" style={{padding:"10px 10px 10px 10px"}}>Berling</p>
      </div>
      <div className="snap-start shrink-0">
        <img className="w-[150px] h-[220px] rounded-lg " src={paris} alt="Image 2"/>
      </div>
      <div className="snap-start shrink-0">
        <img className="w-[150px] h-[220px] rounded-lg " src={berlin} alt="Image 3"/>
      </div>
      <div className="snap-start shrink-0">
        <img className="w-[150px] h-[220px] rounded-lg " src={berlin} alt="Image 4"/>
      </div>
      <div className="snap-start shrink-0">
        <img className="w-[150px] h-[220px] rounded-lg" src={ames} alt="Image 5"/>
      </div>
    </div>
    </>
  )
}

export default Hotels