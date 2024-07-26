import React from "react";
import Image from "next/image";

function Jumbotron() {
  return (
    <div className="flex bg-gradient-to-r from-gray-500 to-neutral-900 flex-end px-5 mx-5">
      <div className="flex flex-col items-center">
        <h1 className=" flex items-center justify-center m-20 text-6xl font-extrabold text-amber-500">
          Co-working Nodes that actually work
        </h1>
        <p className="font-light text-lime-300 items-center px-3 mx-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque
          nemo quod suscipit esse, nesciunt dicta totam facere numquam quibusdam
          vero obcaecati nam quos pariatur ab ipsam, vel officiis placeat? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sit eaque nemo quod
          suscipit esse, nesciunt dicta totam facere numquam quibusdam vero
          obcaecati nam quos pariatur ab ipsam, vel officiis placeat?
        </p>
      </div>
      <div className="flex items-center mb-0 pb-0 hidden md:inline-flex space-x-5 h-32 lg:h-full justify-end ">
        <Image src="/8.gif" width={600} height={400} className="" />
      </div>
    </div>
  );
}
export default Jumbotron;
