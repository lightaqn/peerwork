import React, { ReactNode } from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Review from "./Review";

// interface Props {
//   className?: string;
//   children: ReactNode;
// }

const Testimonials: React.FC = ({ children, className }) => (
  <Carousel className="flex bg-black py-10 text-white lg:py-15 p-10 mt-15 mx-auto h-[400px] items-center justify-center">
    <CarouselItem index={0}>
      <Review by="LightAQN">
        Hustloo inc more than delivered on it's promises. I cant but notice the
        painstaking effort invested in every aspect of their work process.
        Nothing less than 5 star would suffice for such excellence.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Adram Scholata">
        Working with Hustloo inc was a smooth and efficient process, Looking
        forward to future collaborations
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Ayo Awosan - CEO TheEnigmaProject">
        Great thanks to the wonderful team at hustloo.com for making my dream of
        having offices in all the major cities a reality. The kind of freedom
        thier co-working nodes afford me at such pocket-friendly price is
        unparralleled. see you guys at the upcoming conference in December.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by=" Munir Al-Mumin - CTO FreshFarms">
        Our supply chain process has been streamlined and efficiently
        turbocharged for maximum output since we adopted a logistic approach
        towards storage and distribution. Keeping the farm produce fresh like
        our customers would want turned out to represent a far greater challange
        than anticipated but that conundrum was overcome by true dedication from
        both teams
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Nuella - TheCoffeeShack">
        Patnering with hustloo inc has been a dream come through for me and my
        business. The referral has helped us grow our customer base via
        cross-pollination with a record customer retention metrics that
        continues to surpass its predecessors on a quarterly basis.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
