import React from "react";
import Link from "next/link";
import { urlFor } from "../sanity";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className=""
          />
          <p className="">{name}</p>
          <p className="">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
