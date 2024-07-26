import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openMap } from "../store/slices/mapSlice";
import { useTheme } from "next-themes";

function Wayfinder({ a, b, c, d }) {
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  return (
    <header className="flex justify-between mx-auto p-5 max-w-8xl blue-glassmorphism ">
      <div className="flex items-center space-x-5 rounded-xl">
        <div className="flex-auto object-contain cursor-pointer">
          <Link href="/" passhref>
            <Image
              height={150}
              width={250}
              src="/pic1.jpg"
              alt="logo"
              className="logo h-full rounded-xl p-0 m-0"
            />
          </Link>
          <button
            className="btn hidden lg:inline-block"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Toggle
          </button>
        </div>
        <div className="flex-auto mx-1">
          <ul className="hidden lg:inline-flex items-center space-x-5 ml-5 cursor-pointer text-2xl font-medium p-1 text-grey-500">
            <li className="hover:text-green-500">{a}</li>
            <li className="hover:text-green-500">{b}</li>
            <Link href="/nodes" passhref>
              <li className="hover:text-green-500">{c}</li>
            </Link>
            <li className="hover:text-green-500">{d}</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-5 items-center ">
        <ul className="flex flex-row-reverse outline-none">
          <button
            className="text-xl bg-lime-600 rounded-full font-medium text-amber-100 w-40 p-3 m-3 mx-4"
            onClick={() => dispatch(openMap())}
          >
            Navigate
          </button>
          <Link href="/login" passhref>
            <button className="text-xl bg-lime-600 rounded-full font-medium text-amber-100 w-40 p-3 m-3 mx-4">
              Login
            </button>
          </Link>

          <h2 className="border p-3 m-3 rounded-3xl text-bold text-green-600 border-green-700">
            Get Started
          </h2>
        </ul>
      </div>
    </header>
  );
}

export default Wayfinder;
