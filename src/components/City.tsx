type Props = {
  title: string;
  imgSrc: string;
};

const Card = ({ title, imgSrc }: Props) => (
<>
<div className="snap-start shrink-0 relative flex items-end">
        <img className="w-[150px] h-[200px] rounded-2xl" src={imgSrc} alt={imgSrc}/>
        <p className="absolute text-[18px] text-[#ffff]" style={{padding:"10px 10px 10px 10px"}}>{title}</p>
      </div>
    </>

);

export default Card;
