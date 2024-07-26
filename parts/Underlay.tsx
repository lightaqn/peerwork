import React from "react";
import Link from "next/link";

function Underlay({ u, v, w, x, y, z }) {
  return (
    <div className="flex flex-wrap px-5 mx-5 items-center text-white justify-around h-4/5 w-100 mt-0 pt-0   bg-[url('/4.jpg')] hover:gray-glassmorphism">
      <ul className="hidden md:inline-flex items-center space-x-5 ml-5 cursor-pointer text-2xl font-medium p-1 text-grey-500">
        <li className="hover:text-green-500">{u}</li>
        <li className="hover:text-green-500">{v}</li>
        <li className="hover:text-green-500">{w}</li>
        <li className="hover:text-green-500">{x}</li>
        <li className="hover:text-green-500">{y}</li>
        <Link href="/blog" passhref>
          <li className="hover:text-green-500">{z}</li>
        </Link>
      </ul>
    </div>
  );
}
export default Underlay;
