import React, { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { sanityClient, urlFor } from "../../../sanity";
import { Post, Comment } from "../../../typings";

import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputFormField {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface Props {
  post: Post;
  comments: Comment[];
}

function Post({ post }: Props) {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormField>();

  const onSubmit: SubmitHandler<InputFormField> = (data) => {
    fetch("api/makeComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSent(true);
      })
      .catch((err) => {
        console.log(err);
        setSent(false);
      });
  };

  return (
    <main>
      <section>
        <img
          className="w-full h-50 object-cover overflow-hidden"
          src={urlFor(post.mainImage).url()}
          alt=""
        />
      </section>

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-12 mb-4"></h1>
        <h2 className="text-xl font-light text-gray-600 mb-2"></h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-12 w-12 rounded-full"
            src={urlFor(post.mainImage).url()}
            alt=""
          />
          <p className="text-xs font-extralight">
            <strong className="text-green-500">{post.author.name}</strong>-
            Published at{" "}
            <span className="text-slate-300">
              {new Date(post._createdAt).toLocaleString()}
            </span>
          </p>
        </div>
        <div className="mt-15">
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
        </div>
      </article>

      <hr className="max-w-lg my-5 mx-auto border border-amber-500" />

      <input {...register("_id")} type="hidden" name="_id" value={post._id} />

      {/* Comment section  */}

      {sent ? (
        <div className="flex flex-col p-10 my-10 text-white bg-amber-500 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold">Your comment is appreciated</h1>
          <p>It will be displayed once validated</p>
        </div>
      ) : (
        <form
          className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className="text-sm text-amber-500"> Like what you read?</h4>
          <h5 className="text-2xl font-extrabold">Drop a comment below</h5>
          <hr className="py-3 my-2" />

          <label className="block mb-5">
            <span className="text-gray-300">Name</span>

            <input
              {...register("name", { required: true })}
              placeholder="Enter your Name here"
              className="shadow border rounded px-2 py-3 ring-amber-500 outline-none focus:ring form-input mt-1 block w-full"
              type="text"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-300">Email</span>

            <input
              {...register("email", { required: true })}
              placeholder="Enter your Email Address"
              className="shadow border rounded px-2 py-3 ring-amber-500 outline-none focus:ring form-input mt-1 block w-full"
              type="email"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-300">Comment</span>
            <textarea
              {...register("comment", { required: true })}
              className="shadow border rounded px-2 py-3 ring-amber-500 outline-none focus:ring form-input mt-1 block w-full"
              placeholder="Enter Comment"
              rows={10}
            />
          </label>

          {/* errors get thrown when field validation fails */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">Name field is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">Email field is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">Comment field is required</span>
            )}
          </div>

          <input
            type="submit"
            className="shadow bg-amber-500 hover:bg-amber-300 text-white text-bold px-4 py-2 rounded cursor-pointer focus:shadow-outline focus:outline-none"
          />
        </form>
      )}

      {/* submitted comments` */}
      <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-gray shadow space-y-2">
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-3" />

        {/* map comments */}
        {post.comments.map((comment) => (
          <div key={comment._id}>
            <p className="">
              <span className="text-amber-500">{comment.name}</span>
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author-> {
      name,
      image
    },'comments': *[_type == "comment" && post._ref == ^._id && approved == true],
    description,
    mainImage,
    slug,
    body
}`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!post) {
    return { notFound: true };
  }
  return { props: { post }, revalidate: 120 };
};
