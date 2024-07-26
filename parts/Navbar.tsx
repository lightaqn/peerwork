import Image from "next/image";
import { useRef, useState, useContext, useCallback } from "react";
import React from "react";
import { ScrollContext } from "../utils/ScrollMonitor";
import { MenuAlt2Icon } from "@heroicons/react/outline";

const Navbar: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let advance = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    advance = Math.min(1, scrollY / elContainer.clientHeight);
  }
  const handleImgLoaded = useCallback(() => {
    setImgLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      style={{ transform: `tranlateY(-${advance * 25}vh)` }}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source src="/video2.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/video2.mp4" type="video/webm; codecs=vp9" />
      </video>

      <div
        className={`flex-grow-0 pt-8 transition-opacity duration-800 ${
          imgLoaded ? "opacity-90" : "opacity-0"
        }`}
      >
        <div className="flex flex-row items-center justify-between space-x-12 cursor-pointer lg:space-x-24 m-7 p-7 ">
          <div className="flex-auto mr-10 p-5 items-center justify-center ">
            <MenuAlt2Icon className="text-white cursor-pointer w-10 h-10" />
          </div>
          <div className="flex-1 items-center justify-center m-10">
            <Image
              src="/logobludeep12.jpg"
              width={115 / 2}
              height={106 / 2}
              className="rounded-full border border-gray-400 bg-transparent"
              onLoad={handleImgLoaded}
              alt="logo"
            />
          </div>

          <div className="flex flex-1 bg-blue-glassmorphism items-center space-x-2 z-10 m-10 rounded-lg border-2 border-indigo-500">
            <img src="/search.png" className="h-5 w-5 text-gray-300 p-1" />
            <input
              className="bg-transparent outline-none hover:cursor-pointer"
              placeholder="Enter your search"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center text-center justify-center font-extrabold p-10 z-10 text-white drop-shadow-[0_5px_3px_rgba(0, 0, 0, 0.4)]">
        <h1 className="mb-10 text-5xl md:text-6xl lg:text-7xl">PeerWork</h1>
        <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl tracking-tight text-lime-500">
          Co-Working Nodes
          <span className="mb-6"> That work</span>
        </h2>
      </div>

      <div
        className={`flex-grow-0 transition-all duration-800 z-2 md:pb-10 ${
          imgLoaded ? "opacity-90" : "opacity-0 translate-y-10"
        }`}
      >
        <Image
          src="/7.jpg"
          layout="responsive"
          width={85 / 2}
          height={76 / 2}
          alt="test"
          onLoad={handleImgLoaded}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Navbar;
