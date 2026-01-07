import React from "react";



const PreviousTalks = () => {
  return (
    <section className="w-full bg-[#F6F3EA] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
            Previous Events
          </h2>

          <a
            href="#"
            className="text-sm uppercase tracking-wide flex items-center gap-2 text-[#1A1A1A] hover:opacity-70"
          >
            View all exhibitions <span>→</span>
          </a>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-[#1A1A1A]/20 mb-10" />

        {/* IMAGE */}
        <div className="w-full overflow-hidden mb-10">
          {/* <img
            src={placeholderImg}
            alt="Exhibition"
            className="w-full h-75 md:h-95 object-cover"
          /> */}
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* LEFT INFO */}
          <div>
            <h3 className="text-lg font-medium text-[#1A1A1A]">
              Bernard van Orley At Saint-Géry
            </h3>

            <p className="mt-2 text-sm text-[#6B6B6B]">
              September 27, 2025 – October 30, 2026
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="md:col-span-1 text-sm text-[#6B6B6B] leading-relaxed">
            Especially for the occasion, Ozeum is bringing the tapestries
            and paintings by Bernard van Orley from the vaults of Jacob’s
            History and the first tapestry from the series Our Blessed
            Lady of the Sablon.
          </div>

          {/* ACTION */}
          <div className="flex md:justify-end">
            <button className="px-6 py-2 border border-[#1A1A1A]/30 rounded-full text-sm text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition">
              More info
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreviousTalks;
