import React from "react";
import image from "../../../assets/description_image.png"; // line-art image

const StageDescription = () => {
  return (
    <section className="w-full min-h-screen bg-[#F4F1E8] flex flex-col ">
      
      {/* TEXT CONTENT */}
      

      {/* LINE ART IMAGE */}
      <div className="w-full mt-24 p-0 flex justify-center  ">
        <img
          src={image}
          alt="Line art illustration"
          className=" w-full object-cover"
        />
      </div>
      <div className=" px-6 text-center">
       

        <p className="mt-6 text-xl md:text-3xl text-[#1A1A1A] leading-relaxed"style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
          For the <span className="font-semibold">minds</span> that <br />
          <span className="font-semibold">don’t settle</span> for the{" "}
          <span className="font-semibold">surface</span>
        </p>
      </div>

    </section>
  );
};

export default StageDescription;
