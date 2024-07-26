import React from "react";
import Link from "next/link";
import { urlFor } from "../sanity";

const Ribbon = ({ ribbon }) => {
  return (
    <div className="">
      <div>
        <p className="">{ribbon.smallText}</p>
        <h3>{ribbon.midText}</h3>
        <h1>{ribbon.largeText}</h1>
        <img src={urlFor(ribbon.image)} alt="" className="" />
        <div>
          <Link href={`/product/${ribbon.product}`}>
            <button type="button">{ribbon.buttonText}</button>
          </Link>
          <div>
            <h5>Description</h5>
            <p>{ribbon.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
