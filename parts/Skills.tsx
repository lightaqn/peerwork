import Image from "next/image";
import { useRef, useState, useContext, useCallback } from "react";
import React from "react";
import { ScrollContext } from "../utils/ScrollMonitor";
import S from "../styles/skills.module.css";

const blockOpacity = (sectionAdvance: number, blockNo: number) => {
  const advance = sectionAdvance - blockNo;
  if (advance >= 0 && advance < 1) return 1;
  return 0.19;
};

export default function Skills() {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  const noOfPages = 3;
  let advance = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percent =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    advance = Math.min(noOfPages - 0.5, Math.max(0.5, percent * noOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="flex flex-col justify-center items-center tracking-tight font-bold text-4xl min-h-screen max-w-6xl mx-auto py-20 px-8 lg:px-15 lg-text-6xl md:py-25 md:text-5xl">
        <div className="leading-[1.19]">
          <div
            className={S.skillFont}
            style={{ opacity: blockOpacity(advance, 0) }}
          >
            Our members get to enjoy the coolest pecks in designated Co-Working
            nodes{" "}
          </div>
          <span
            className={`${S.skillFont} my-10 inline-block after:content-['_']`}
            style={{ opacity: blockOpacity(advance, 1) }}
          >
            Ease of access to great nodes in major cities
          </span>
          <span
            className={`${S.skillFont}`}
            style={{ opacity: blockOpacity(advance, 2) }}
          >
            Great Community of founders, professionals for the startup
            eco-system
          </span>
        </div>
      </div>
    </div>
  );
}
