import React from "react";
import heroimg from '../../../assets/hero_bg_image.PNG'

const Hero = () => {
  return (
    <section
      className=" w-full  bg-cover  bg-no-repeat"
      style={{ height: "95vh" ,backgroundImage: `url(${heroimg})`, backgroundPosition: "50% 87%" }}
    >
      {/* Optional overlay */}
      {/* <div className="h-full w-full bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-6xl font-semibold">
          The Stage
        </h1>
      </div> */}
    </section>
  );
};

export default Hero;
