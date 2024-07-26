import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
  className: string;
}

const SidepanelRow: React.FC<Props> = ({
  Icon,
  title,
  className,
  onClick,
}: Props) => {
  return (
    <div
      onClick={() => onClick?.()}
      className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-3 py-3 transition-all duration-300 hover:bg-gray-100"
    >
      <Icon className="h-7 w-7" />
      <p className="hidden text-base font-light group-hover:text-lime-500 md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  );
};

export default SidepanelRow;
