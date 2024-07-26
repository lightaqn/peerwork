import Link from "next/link";

const Card = ({ node, title, location, color, Img }: any) => {
  return (
    <Link href="/" passhref>
      <div className=" text-white font-semibold border-2 border-white flex flex-wrap items-start justify-between h-full min-w-full m-4 p-5 lg:w-1/2">
        <div className="m-2">
          <h2>{node}</h2>
          <img className="h-80 w-80 rounded-full" src={Img} alt="" />
        </div>
        <div className="m-2 font-semibold text-xl">
          <p className="">{title}</p>
          <p className="">{location}</p>
          <p className="">{color}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
