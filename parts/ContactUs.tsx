import React, { useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";

interface Props {
  by: string;
  Submitting: () => void;
}

const ContactUs: React.FC<Props> = ({ children, by }) => {
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    info: { error: false, msg: null },
  });
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    e.persist();
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setStatus({
      submitting: false,
      submitted: false,
      info: { error: false, msg: null },
    });
  }, []);

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitting: false,
        submitted: true,
        info: { error: false, msg },
      });
      setInput({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitting: false,
        submitted: false,
        info: { error: true, msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: "POST",
        url: "",
        data: input,
      }).then((_response) => {
        handleServerResponse(true, "message submitted");
      });
    },
    [input, handleServerResponse]
  );
  //   process.env.(formspree endpoint),

  // const Submitting = () => (
  //   <button type="button" className="inherit">
  //     <svg className="motion-reduce:hidden animate-spin"></svg>
  //     Submitting...
  //   </button>
  // );

  // <button className="hover:translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none">

  // </button>

  const Submitting = () => {
    <div className=" rounded relative w-10 h-10 flex">
      <div className="rounded-full bg-indigo-200 w-[20px] h-[20px] relative flex-1 justify-center items-center mx-auto animate-spin">
        <svg
          className="absolute top-[2px] right-0"
          width={19}
          height={20}
          viewBox="0 0 19 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_2495_2146" fill="white">
            <path d="M76 97C76 75.6829 69.2552 54.9123 56.7313 37.6621C44.2074 20.4118 26.5466 7.56643 6.27743 0.964994L0.0860505 19.9752C16.343 25.2698 30.5078 35.5725 40.5526 49.408C50.5974 63.2436 56.007 79.9026 56.007 97H76Z" />
          </mask>
          <path
            d="M76 97C76 75.6829 69.2552 54.9123 56.7313 37.6621C44.2074 20.4118 26.5466 7.56643 6.27743 0.964994L0.0860505 19.9752C16.343 25.2698 30.5078 35.5725 40.5526 49.408C50.5974 63.2436 56.007 79.9026 56.007 97H76Z"
            stroke="#141415"
            strokeWidth={8}
            mask="url(#path-1-inside-1_2495_2146)"
          />
        </svg>
      </div>
      <div className="flex-1 ml-4 ">
        <p className="absolute mx-auto my-auto  text-base font-medium text-gray-800 text-center">
          Processing...
        </p>
      </div>
    </div>;
  };

  return (
    <div className="bg-black text-white flex flex-col justify-center min-h-screen items-center pt-10 lg:pt-6">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="pb-10">
          <Image
            src="/logo3.jpg"
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        <h2 className="text-4xl font-extrabold">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 lg:mw-[500px] min-w-full"
        >
          {status.info.error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 p-4 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error</strong>
              {""}
              <span className="block sm:inline"></span>
            </div>
          )}

          {status.submitted ? (
            <div
              className="text-white font-bold text-xl px-4 pt-3 rounded-relative"
              role="alert"
            >
              {" "}
              Message sent we will get back to you!
            </div>
          ) : (
            <>
              <div className="outline relative focus-within:border-white">
                <input
                  name="name"
                  required
                  maxLength={128}
                  type="text"
                  className="bg-black outline-none text-white rounded-3xl px-8 py-2 block w-full text-lg appearance-none focus:outline-none bg-transparent"
                />
                <label
                  for="name"
                  className="absolute top-0 text-lg bg-black p-4 -z-1 duration-300 origin-0"
                >
                  Name
                </label>
              </div>
              <div className="outline relative focus-within:border-white">
                <input
                  name="email"
                  required
                  maxLength={128}
                  type="email"
                  className="bg-black outline-none text-white rounded-3xl px-8 py-2 block w-full text-lg appearance-none focus:outline-none bg-transparent"
                />
                <label
                  for="email"
                  className="absolute top-0 text-lg bg-black p-4 -z-1 duration-300 origin-0"
                >
                  Email
                </label>
              </div>
              <div className="outline relative focus-within:border-white">
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1048577}
                  type="text"
                  className="bg-black outline-none text-white rounded-3xl px-8 py-6 block w-full text-lg appearance-none focus:outline-none bg-transparent"
                />
                <label
                  for="message"
                  className="absolute top-0 text-lg bg-black p-4 -z-1 duration-300 origin-0"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="bg-white text-black font-bold rounded-3xl px-8 py-2"
              >
                {!status.submitting
                  ? !status.submitted
                    ? "Submit"
                    : "Submitted"
                  : "Submitting"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
