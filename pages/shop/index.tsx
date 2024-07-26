import React from "react";
import Product from "../../parts/Product";
import Ribbon from "../../parts/Ribbon";

// import ProductFeed from "../../parts/ProductFeed";
import { sanityClient, urlFor } from "../../sanity";

import { Post } from "../../typings";
import Head from "next/head";
import Link from "next/link";

// interface Props {
//   posts: [Post];
// }

export default function Shop({ products, ribbonData }) {
  return (
    <>
      <div>
        <Head>
          <title>Hustloo Shop</title>
        </Head>

        <Ribbon ribbon={ribbonData.length && ribbonData[0]} />

        <div className="grid grid-col-1 sm:grid-col-2 lg:grid-col-3 gap-3 md:gap-5 p-4 md:p-5">
          <div className="items-center justify-center font-bold text-slate-500">
            <h2>Select from our customized store </h2>
            <p>Great products at affordable prices</p>
          </div>
          {/* Map products */}

          <div>
            {products?.map((product) => (
              <Link key={product._id} href={`/post/${product.slug.current}`}>
                <div className="group border rounded-lg cursor-pointer overflow-hidden">
                  <Product key={product._id} product={product} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const query = `*[_type =="product"]`;
  const products = await sanityClient.fetch(query);

  const ribbonQuery = `*[_type =="ribbon"]`;
  const ribbonData = await sanityClient.fetch(ribbonQuery);

  return {
    props: { products, ribbonData },
  };
};
