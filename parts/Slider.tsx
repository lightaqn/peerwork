import React, { useContext, useRef, useCallback } from "react";
import { SizeContext } from "../utils/SizeMonitor";
import useAnimationFrame from "../utils/use-animation-frame";

interface Props {
  initialOffsetX: number;
  className: string;
  contentWidth: number;
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffsetX,
  className,
  contentWidth,
}: Props) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef<number>(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const active = innerWidth < contentWidth;

  useAnimationFrame(
    active,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;

      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`relative slider-container overflow-x-hidden max-w-full whitespace-nowrap pointer-events-none ${className}`}
    >
      {/* <div className="z-5 inset-0 absolute w-full h-full bg-gray-800/30 backdrop-blur-lg"></div> */}
      <div ref={refContent} className="inline-block">
        {children}
      </div>
      <div className={active ? "inline-block" : "hidden"}>{children}</div>
    </div>
  );
};

export default SliderContainer;

interface ItemProps {
  width: number;
}

export const SliderItem: React.FC<ItemProps> = ({ children, width }) => (
  <div
    className="inline-flex justify-center items-center mx-4"
    style={{ width }}
  >
    {children}
  </div>
);
