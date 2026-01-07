import React from "react";


const About = () => {
  return (
    <section
      className="w-full bg-[#F5F4F2] py-24"
      style={{ fontFamily:"Pompiere, sans-serif",fontWeight: "400",
  fontStyle: "normal"}}
    >
      <div className="max-w-8xl mx-auto px-5 grid grid-cols-1 md:grid-cols-[0.7fr_2fr] gap-18 items-center ">

        {/* LEFT — TEXT */}
        <div className="w-70 ">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-black">
            About Us
          </h2>

          <p className="text-black/70 leading-6 mb-6 text-2xl" style={{ fontFamily:"Pompiere, sans-serif"}}>
            We are a creative collective driven by storytelling, strategy, and
            design. Our work bridges aesthetics and purpose, crafting meaningful
            brand experiences that resonate with audiences across platforms.
          </p>

          <p className="text-black/70 leading-6 text-2xl">
            From concept to execution, we collaborate closely with our partners
            to transform ideas into compelling narratives that stand the test of
            time.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="w-full h-[80%]  flex justify-end overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/d1/c5/48/d1c5487bb9c500803195310bf340e053.jpg"
            alt="About Us"
            className="w-[90%] h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;


