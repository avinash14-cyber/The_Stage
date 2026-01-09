import React from "react";
import img from "../../../assets/about_img.JPEG";

const AboutIntro = () => {
  return (
    <section
      className="w-full bg-black pt-20"
      style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto mt-10 px-6">

        {/* TOP TEXT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left small caption */}
          <p className=" text-white translate-x-[-10%] font-light text-5xl">
           In brief, in depth. 
          </p>

          {/* Right main text */}
          <div>
            <h2 className="text-4xl md:text-4xl font-light w-115 text-white translate-y-23 mb-6"style={{ fontFamily: "XB Niloofar",fontStyle:'italic'}}>
              For the minds that
don’t settle for the surface
            </h2>

            <p className="text-white text-[15px] mt-60 w-167.5 leading-relaxed max-w-2xl">
              The Stage is dedicated to clarity, depth, and integrity. It
              brings together scholars, writers, and thoughtful individuals
              to engage critically with literature, philosophy, science,
              history, and culture.
            </p>

            {/* <p className="mt-4 text-black/70 mt-10 text-[15px] leading-relaxed max-w-xl">
              In an age shaped by noise and slogans, The Stage prioritizes
              intellectual honesty, nuance, and responsible dialogue—
              inviting reflection rather than reaction, and inquiry rather
              than persuasion.
            </p> */}
          </div>

        </div>
      </div>

      {/* IMAGE STRIP */}
      <div className="mt-10 w-full h-[90vh]  overflow-hidden">
        <img
          src={img}
          alt="About visual"
          className="w-full h-full object-[50%_90%] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutIntro;
