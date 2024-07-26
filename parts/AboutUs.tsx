import Members from "./Members";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-white py-20 text-3xl md:text-4xl lg:text-5xl`}
    >
      <div className="container mx-auto px-10 space-y-2">
        <p className=" space-y-2 leading-tight max-w-5xl mx-auto tracking-tight md:text-5xl">
          <strong className="mr-5">
            We simply connect you to what you need
          </strong>
          peer-work nodes that work amongst other attractions.
        </p>
        <div className="container mx-auto px-10 text-center mt-22">
          <h2 className="mt-10">The Team</h2>

          <div className="mt-8 gap-5 grid lg:gap-x-15 lg:grid-cols-2 justify-between">
            {[
              {
                id: "light",
                link: "https://www.github.com/lightaqn",
                name: "Light",
                email: "lightaqn@gmail.com",
                socialMedia: "@duke_nuel",
                image: "/pic1.jpg",
              },
              {
                id: "light",
                link: "https://www.github.com/lightaqn",
                name: "Light",
                email: "lightaqn@gmail.com",
                socialMedia: "@duke_nuel",
                image: "/backGrad.jpg",
              },
            ].map((item) => (
              <Members
                id={item.id}
                link={item.link}
                name={item.name}
                email={item.email}
                socialMedia={item.socialMedia}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
