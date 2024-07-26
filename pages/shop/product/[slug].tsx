import React, { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { sanityClient, urlFor } from "../../../sanity";
// import { Post, Comment } from "../../../typings";

// import PortableText from "react-portable-text";
import Product from "../../../parts/Product";
import { useStateContext } from "../../../utils/ShopMonitor";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlineStar,
  AiOutlinePlus,
} from "react-icons/ai";

// interface InputFormField {
//   _id: string;
//   name: string;
//   email: string;
//   comment: string;
// }

// interface Props {
//   post: Post;
//   comments: Comment[];
// }

function ProductDetails({ product, products }) {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, addUnit, setRevealBasket } = useStateContext();

  const handleTransaction = () => {
    addUnit(product, qty);
    setRevealBasket(true);
  };

  return (
    <main>
      <section>
        <img
          className="w-full h-50 object-cover overflow-hidden"
          src={urlFor(image && image[index])}
          alt=""
        />
      </section>

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-12 mb-4"></h1>
        <h2 className="text-xl font-light text-gray-600 mb-2"></h2>
        <div className="flex items-center space-x-2">
          {image?.map((unit, i) => (
            <img
              key={i}
              src={urlFor(unit)}
              className={i === index ? "selectedImage" : "smallImage"}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
          <p className="text-xs font-extralight">
            <strong className="text-green-500">{name}</strong>-
          </p>

          <div className="text-slate-300">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h3>Details</h3>
          <p>{details}</p>
          <p className="">${price}</p>
          <div>
            <h3>Quantity: </h3>
            <p className="">
              <span className="" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="">{qty}</span>
              <span className="" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className=""
              onClick={() => addUnit(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="" onClick={handleTransaction}>
              Buy Now
            </button>
          </div>
        </div>
      </article>
      <hr className="max-w-lg my-5 mx-auto border border-amber-500" />
      <div className="">
        <h2>Suggestions</h2>
        <div className="">
          <div className="">
            {products.map((unit) => (
              <Product key={unit._id} product={unit} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug {
      current
    }
  }`;
  const products = await sanityClient.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"]`;
  const product = await sanityClient.fetch(query);
  const products = await sanityClient.fetch(productsQuery);

  return { props: { products, product }, revalidate: 120 };
};

export default ProductDetails;

//portable text
{
  /* <div className="mt-15">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => {
                <h1 className="text-2xl font-bold my-4" {...props} />;
              },
              h2: (props: any) => {
                <h2 className="text-xl font-bold my-4" {...props} />;
              },
              link: ({ href, children }: any) => {
                <a href={href} className="text-2xl font-bold my-4">
                  {children}
                </a>;
              },
              li: ({ children }: any) => {
                <li className="text-2xl font-bold my-4">{children}</li>;
              },
            }}
          />
        </div> */
}

//     <input {...register("_id")} type="hidden" name="_id" value={post._id} />

//   {/* Comment section  */}

//   {sent ? (
//     <div className="flex flex-col p-10 my-10 text-white bg-amber-500 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold">Your comment is appreciated</h1>
//       <p>It will be displayed once validated</p>
//     </div>
//   ) : (
//     <form
//       className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <h4 className="text-sm text-amber-500"> Like what you read?</h4>
//       <h5 className="text-2xl font-extrabold">Drop a comment below</h5>
//       <hr className="py-3 my-2" />

//       <label className="block mb-5">
//         <span className="text-gray-300">Name</span>

//         <input
//           {...register("name", { required: true })}
//           placeholder="Enter your Name here"
//           className="shadow border rounded px-2 py-3 ring-amber-500 outline-none focus:ring form-input mt-1 block w-full"
//           type="text"
//         />
//       </label>
//       <label className="block mb-5">
//         <span className="text-gray-300">Email</span>

//         <input
//           {...register("email", { required: true })}
//           placeholder="Enter your Email Address"
//           className="shadow border rounded px-2 py-3 ring-amber-500 outline-none focus:ring form-input mt-1 block w-full"
//           type="email"
//         />
//       </label>
//       <label className="block mb-5">
//         <span className="text-gray-300">Comment</span>
//         <textarea
//           {...register("comment", { required: true })}
//           className="shadow border rounded px-2 py-3 ring-amber-500 outline-none focus:ring form-input mt-1 block w-full"
//           placeholder="Enter Comment"
//           rows={10}
//         />
//       </label>

//       {/* errors get thrown when field validation fails */}
//       <div className="flex flex-col p-5">
//         {errors.name && (
//           <span className="text-red-500">Name field is required</span>
//         )}
//         {errors.email && (
//           <span className="text-red-500">Email field is required</span>
//         )}
//         {errors.comment && (
//           <span className="text-red-500">Comment field is required</span>
//         )}
//       </div>

//       <input
//         type="submit"
//         className="shadow bg-amber-500 hover:bg-amber-300 text-white text-bold px-4 py-2 rounded cursor-pointer focus:shadow-outline focus:outline-none"
//       />
//     </form>
//   )}

//   {/* submitted comments` */}
//   <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-gray shadow space-y-2">
//     <h3 className="text-4xl">Comments</h3>
//     <hr className="pb-3" />

//     {/* map comments */}
//     {post.comments.map((comment) => (
//       <div key={comment._id}>
//         <p className="">
//           <span className="text-amber-500">{comment.name}</span>
//           {comment.comment}
//         </p>
//       </div>
//     ))}
//   </div>
