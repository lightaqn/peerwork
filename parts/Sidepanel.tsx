import React, { useState } from "react";
import {
  MenuAlt2Icon,
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  CloseIcon,
} from "@heroicons/react/outline";
import Accordion from "./Accordion";

import SidepanelRow from "./SidepanelRow";
// import { signIn, signOut, useSession } from "next-auth/react";

// interface Props {
//   Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
//   title?: string;
//   onClick?: () => {};
//   className?: string;
// }

const Sidepanel: React.FC = () => {
  //   const { data: session } = useSession();
  const [isActive, setIsActive] = useState<boolean>(false);

  const accordionData = [
    {
      heading: "Topic1",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
    veritatis tempora itaque nemo corporis! Obcaecati debitis tenetur
    deserunt non odio eius, nostrum saepe. Obcaecati, vero ipsa
    aliquid sequi tempore dolore.`,
    },
    {
      heading: "Topic2",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
    veritatis tempora itaque nemo corporis! Obcaecati debitis tenetur
    deserunt non odio eius, nostrum saepe. Obcaecati, vero ipsa
    aliquid sequi tempore dolore.`,
    },
    {
      heading: "Topic3",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
      veritatis tempora itaque nemo corporis! Obcaecati debitis tenetur
      deserunt non odio eius, nostrum saepe. Obcaecati, vero ipsa
      aliquid sequi tempore dolore.`,
    },
    {
      subheading: "Subtopic",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
      veritatis tempora itaque nemo corporis! Obcaecati debitis tenetur
      deserunt non odio eius, nostrum saepe. Obcaecati, vero ipsa
      aliquid sequi tempore dolore.`,
    },
  ];

  return (
    <div className="col-span-2 flex flex-start flex-col items-center px-4 z-10 bg-white-glassmorphism w-full rounded-xl relative md:items-start">
      <div className="w-1/4 bg-blue-glassmorphism absolute">
        <SidepanelRow
          onClick={() => setIsActive(isActive)}
          Icon={isActive ? { CloseIcon } : { MenuAlt2Icon }}
          title=""
          className="w-6 h-6 rounded-full mt-1 mr-1"
        />

        <img className="h-6 w-6 rounded-3xl" src="./1.jpg" />
        <SidepanelRow
          Icon={MenuAlt2Icon}
          title="Home"
          className="justify-between"
        />
        <SidepanelRow
          Icon={BellIcon}
          title="Home"
          className="justify-between"
        />
        <SidepanelRow
          Icon={BookmarkIcon}
          title="Home"
          className="justify-between"
        />
        <SidepanelRow
          Icon={CollectionIcon}
          title="Home"
          className="justify-between"
        />
        <SidepanelRow
          Icon={HomeIcon}
          title="Home"
          className="justify-between"
        />
        <SidepanelRow
          Icon={UserIcon}
          title="Home"
          className="justify-between"
        />
        <SidepanelRow
          Icon={MailIcon}
          title="Home"
          className="justify-between"
        />
        <SidepanelRow
          Icon={DotsCircleHorizontalIcon}
          title="Home"
          className="justify-between"
        />

        <div className="bg-red-500 outline-none border border-1 rounded-full w-5 h-5">
          <SidepanelRow
            Icon={MenuAlt2Icon}
            title="Settings"
            className="mb-2 flex-end text-white bg-transparent"
          />
        </div>
      </div>
      <div>
        {accordionData.map(({ heading, content, subheading }) => (
          <Accordion
            heading={heading}
            content={content}
            subheading={subheading}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidepanel;

{
  /* <img src="" className="" src={session?.user?.image || urlFor(post.author.image).url()} /> */
}

/* <div className={active ? "inline-block" : "hidden"}></div> */
