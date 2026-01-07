import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { HiBars3 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

   const navigate=useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      // when scroll crosses 24px (top-6)
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full z-50 text-white transition-all duration-300
        ${isSticky ? "fixed top-0" : "absolute top-6"}
      `}
    >
      <div className="max-w-8xl mx-auto px-15 h-16 pb-2 flex items-center justify-between bg-[#9C9D94]/70 backdrop-blur-md">
        
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <button className="p-2 rounded">
            <HiBars3 className="text-3xl" />
          </button>

          <nav
            className="hidden md:flex items-center gap-6 text-lg font-medium"
            style={{ fontFamily: "Quintessential, serif" }}
          >
            <a href="/about_the_stage" className="hover:opacity-80">About</a>
            <a href="/contact_us" className="hover:opacity-80">Contact</a>
            <a href="#" className="hover:opacity-80">Events</a>
          </nav>
        </div>

        {/* CENTER */}
        <div
          className="text-xl text-[#8C3917] md:text-5xl font-semibold"
          onClick={()=>navigate('/')}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            cursor:'pointer'
          }}
        >
          The Stage
        </div>

        {/* RIGHT */}
        <div className="flex text-2xl items-center gap-4">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />

          <button className="ml-4 px-4 py-1.5 border border-white rounded text-sm hover:bg-white hover:text-[#8C3917] transition">
            Search
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
