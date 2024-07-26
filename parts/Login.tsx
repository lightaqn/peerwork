import React from "react";
import styles from "../styles/login.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Login: React.FC = () => {
  const { data: session } = useSession;

  return (
    <form className="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <div className="outline relative border-2 focus-within:border-blue-500">
        <input
          type="text"
          name="Username"
          placeholder="Enter your Name"
          className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
        />
        <label
          for="username"
          className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0"
        >
          Username
        </label>
      </div>
      <div className="outline relative border-2 focus-within:border-blue-500">
        <input
          type="email"
          name="Email"
          placeholder="Enter your Email"
          className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
        />
        <label
          for="email"
          className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0"
        >
          Email
        </label>
      </div>
      <div className="outline relative border-2 focus-within:border-blue-500">
        <input
          type="password"
          name="Password"
          placeholder="Enter your Password"
          className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
        />
        <label
          for="password"
          className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0"
        >
          Password
        </label>
      </div>
    </form>
  );
};

export default Login;
