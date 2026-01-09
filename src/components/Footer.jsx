import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1c1c1c] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Logo */}
        <div className="text-center">
          <h2 className="text-4xl font-serif text-white tracking-wide"style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
          }}>
            The Stage
          </h2>
        </div>

        {/* Top Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white">Brands</a>
          <a href="#" className="hover:text-white">Media</a>
          <a href="#" className="hover:text-white">PR Agencies</a>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-700/40" />

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white">Brand Directory</a>
          <a href="#" className="hover:text-white">Case Studies</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-4">
          {[
            faFacebookF,
            faTwitter,
            faPinterestP,
            faLinkedinIn,
            faInstagram,
          ].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:border-white hover:text-white transition"
            >
              <FontAwesomeIcon icon={icon} className="text-sm" />
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-10 text-center text-xs text-gray-500 space-y-2">
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <p>© 2026 YourCompany. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
