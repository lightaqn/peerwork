import React, { useState } from "react";

interface Props {
  heading: string;
  content: string;
}
const Accordion: React.FC<Props> = ({ heading, content }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className=" max-w-xl items-center justify-center">
      <div
        onClick={() => setExpand(!expand)}
        className="mb-2 border border-3 shadow-md"
      >
        <input />
        <label className="bg-slate-500 hover:bg-slate-700 p-3 px-5 flex items-center justify-between cursor-pointer rounded-md relative z-10 transition-transform duration-500 ease-in-out">
          <span className="text-white font-bold text-lg">{heading}</span>
          <div className="relative h-7 w-7 text-black font-normal text-lg block bg-white rounded-full shadow-md">
            <i className="absolute inset-1/2 transform translate-x-1"></i>
          </div>
        </label>
        {expand && (
          <div>
            <p className="text-md font-normal p-5 ">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
