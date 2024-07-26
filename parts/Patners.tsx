import Testimonials from "./Testimonials";
import s from "../styles/patner.module.css";
import ClientLogos from "./client-logos";

const Patners: React.FC = () => {
  return (
    <section
      className={`bg-white min-h-screen flex flex-col justify-center items-center gap-16 md:gap-32 ${s.bg}`}
    >
      <div className="flex-1"></div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl mb-10 font-bold text-center">
          <span className="whitespace-nowrap font-semibold text-lg">
            Trusted By:{" "}
          </span>{" "}
          <span className="whitespace-nowrap">
            Some of the biggest brands you have heard of
          </span>{" "}
        </h3>
        <ClientLogos />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
            {" "}
            We believe in connecting people with the service they need in the
            most sustainable fashion
          </h3>
        </div>
      </div>
      <div className="flex-1 bg-black"></div>
    </section>
  );
};

export default Patners;
