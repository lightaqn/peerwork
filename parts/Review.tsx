import React from "react";

interface Props {
  by: string;
}

const Review: React.FC<Props> = ({ children, by }) => (
  <div className="flex flex-col text-center items-center justify-center mx-15 max-w-5xl px-5 md:px-10 lg:px-20">
    <div className="text-xl leading-10 tracking-tight md:text-2xl lg:text-3xl lg:leading-[3rem]">
      {children}
    </div>
    <div className="mt-6">{by}</div>
  </div>
);

export default Review;
