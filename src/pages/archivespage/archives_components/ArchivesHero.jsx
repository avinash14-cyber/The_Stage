import React from "react";
import { archives } from "../../../constants/Constants";


const ArchivesHero = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-light text-gray-900">Archives</h2>
        <p className="mt-4 max-w-2xl text-gray-500 leading-relaxed">
          Our archive reflects an ongoing exploration of ideas, materials,
          and methods — documenting how research, collaboration, and making
          shape our work.
        </p>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-200" />

        {/* Items */}
        <div className="space-y-14">
          {archives.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1  md:grid-cols-3 gap-10 items-start"
            >
              {/* Text */}
              <div className="md:col-span-2 space-y-3">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-xl">
                  {item.description}
                </p>
                <button className="text-sm uppercase tracking-widest text-gray-800 hover:underline">
                  Learn More
                </button>
              </div>

              {/* Image */}
              <div className="w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
                   <div className="my-12 w-[70vw] h-px bg-gray-500" />
            </div>
            
          ))}
     
        </div>

      </div>
    </section>
  );
};

export default ArchivesHero;
