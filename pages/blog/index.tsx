import React from "react";
import { sanityClient, urlFor } from "../../sanity";
// import { GetServersideProps } from "next";
import { Post } from "../../typings";
import Head from "next/head";
import Link from "next/link";

interface Props {
  posts: [Post];
}

export default function Blog({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>Hustloo Blog</title>
      </Head>

      <div className="grid grid-col-1 sm:grid-col-2 lg:grid-col-3 gap-3 md:gap-5 p-4 md:p-5">
        {/* Map posts */}

        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group border rounded-lg cursor-pointer overflow-hidden">
              <img
                className="h-50 w-full object-cover group-hover:scale-110 transition-transform duration-200 ease"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
              <div className="flex justify-between bg-white p-5">
                <div className="">
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-sm">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-14 w-14 rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type =="post"]{
    _id,
    title,
    author->{
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: { posts },
  };
};
