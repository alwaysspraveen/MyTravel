import userlogo from "../assets/user-solid (1).svg";
import search from "../assets/search.svg";
import sets from "../assets/settings.svg";
function Header() {
  return (
    <>
      <div style={{padding:"10px 10px 0px 0px"}} className="flex items-center justify-end w-full h-[auto]">
        <p>Hello Praveen</p>
        <img
          className="h-[22px]"
          src={userlogo}
        />
      </div>
      <div className="w-full p-2">
<<<<<<< HEAD
        <p className="text-3xl font-medium">Discover</p>
=======
        <p className="text-3xl font-semibold text-[#1e1e1e]">Discover</p>
>>>>>>> de06de4 (latest)
      </div>
      <div className="w-full flex justify-center items-center gap-1" style={{margin:"25px 0px"}}>
        <div style={{padding:"10px 10px 10px 10px"}} className="gap-1 rounded-[12px] h-14 bg-[#eeeeee] flex justify-start items-center w-full">
          <img className="h-6" src={search} />
          <input placeholder="Where are you going?" className="focus:outline-hidden text-xl w-full" type="text" />
        </div>

        <div className="flex items-center justify-center h-14 w-16 rounded-[12px] bg-[#fff783]">
          <img className="h-8" src={sets} />
        </div>
      </div>
    </>
  );
}
export default Header;
