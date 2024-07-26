import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  link: string;
  email: string;
  socialMedia: string;
  image: string;
}

const Members = ({ id, image, name, link, email, socialMedia }: Props) => {
  return (
    <div className="space-y-4 p-4 lg:mr-25">
      <Image src={image} height={1290} width={1493} layout="responsive" />
      <div className="text-2xl lg:text-3xl font-semibold">{name}</div>
      <div>
        <Link href={link}>
          <a target="_blank" className="text-md">
            {" "}
            {link}
          </a>
        </Link>
        <h3 className="text-lg font-normal ">{socialMedia}</h3>
        <p className="text-mg font-normal text-blue-500 ">{email}</p>
      </div>
    </div>
  );
};

export default Members;
