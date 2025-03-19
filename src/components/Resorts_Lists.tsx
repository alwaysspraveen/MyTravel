import star from "../assets/star-svgrepo-com.svg";
type Props = {
  title: string;
  imgSrc: string;
  rating: string;
  address: string;
  fav:string;
};

const Card = ({ title, imgSrc, rating, address, fav }: Props) => (
  <>
    <div className="snap-start shrink-0 flex flex-col gap-2 w-fit">
      <div className="flex relative justify-end">
        <img className="absolute h-[20px] top-2 right-2" src={fav}/>
        <img 
          className="w-[200px] h-[130px] rounded-2xl"
          src={imgSrc}
          alt={imgSrc}
        />
      </div>
      <div className="flex w-full h-fit items-center gap-1 ">
        <img className="h-[16px] w-fit" src={star} />
        <p className="text-[16px] pt-[4px]">{rating}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[16px] font-semibold">{title}</p>
        <p className="text-[16px] font-light">{address}</p>
      </div>
    </div>
  </>
);
export default Card;
