import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import img from "../../assets/contact_img.JPEG";


const ContactUs = () => {
  return (
   <>
      <section
        className="relative w-full min-h-screen  bg-no-repeat  bg-cover bg-position-[50%_70%] flex items-center justify-center"
        style={{ backgroundImage: `url(${img})`,fontFamily: "Bricolage Grotesque, sans-serif" }} 
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
  
        {/* Glass Card */}
       <div className="relative z-10 max-w-5xl mx-auto mt-18  bg-[#9C9D94]/60  w-197.75 h-103.75  p-10">
    
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
  
      {/* LEFT SIDE – TITLE */}
      <div className="flex items-end md:items-end h-full">
        <h2 className="text-4xl md:text-4xl w-full font-semibold text-black leading-tight">
          Contact  Us
        </h2>
      </div>
  
      {/* RIGHT SIDE – FORM */}
      <form className="space-y-6">
  
        {/* NAME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-white/70 backdrop-blur-sm p-4 rounded-md text-sm outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-white/70 backdrop-blur-sm p-4 rounded-md text-sm outline-none"
          />
        </div>
  
        {/* CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-white/70 backdrop-blur-sm p-4 rounded-md text-sm outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-white/70 backdrop-blur-sm p-4 rounded-md text-sm outline-none"
          />
        </div>
  
        {/* COMMENTS */}
        <textarea
          rows="4"
          placeholder="Comments"
          className="w-full bg-white/70 backdrop-blur-sm p-4 rounded-md text-sm outline-none"
        />
  
        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-md text-sm tracking-widest hover:opacity-90 transition"
        >
          SEND MESSAGE
        </button>
  
      </form>
  
    </div>
  </div>
  
      </section >
  
  <section className="w-full bg-black py-20"style={{fontFamily: "Bricolage Grotesque, sans-serif"}}>
  <div className="max-w-6xl mx-auto px-6">

    <p className="text-center text-[#C8A96A] italic mb-16">
      Get in touch with us !
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-12">

      {/* PHONE */}
      <div className="md:border-r border-[#C8A96A]/40 px-6">
        <FontAwesomeIcon icon={faPhone} className="text-[#C8A96A] text-2xl mb-4" />
        <h4 className="uppercase text-sm tracking-widest mb-2 text-white">Phone</h4>
        <p className="text-sm text-white/70">+91 98765 43210</p>
        <p className="text-sm text-white/70">+91 91234 56789</p>
      </div>

      {/* ADDRESS */}
      <div className="md:border-r border-[#C8A96A]/40 px-6">
        <FontAwesomeIcon icon={faLocationDot} className="text-[#C8A96A] text-2xl mb-4" />
        <h4 className="uppercase text-sm tracking-widest mb-2 text-white">Address</h4>
        <p className="text-sm text-white/70">
          5 Green Field Residence Tower,<br />
          Kochi, Kerala, India
        </p>
      </div>

      {/* EMAIL */}
      <div className="px-6">
        <FontAwesomeIcon icon={faEnvelope} className="text-[#C8A96A] text-2xl mb-4" />
        <h4 className="uppercase text-sm tracking-widest mb-2 text-white">Email</h4>
        <p className="text-sm text-white/70">hello@thestage.com</p>
        <p className="text-sm text-white/70">contact@thestage.com</p>
      </div>

    </div>
    <div className="flex mt-18 justify-center gap-4">

        {[
          faFacebookF,
          faTwitter,
          faPinterestP,
          faInstagram,
          faLinkedinIn,
        ].map((icon, index) => (
          <div
            key={index}
            className="w-10 h-10 flex items-center justify-center
                       border border-[#C8A96A]
                       text-[#C8A96A]
                       hover:bg-[#C8A96A]
                       hover:text-black
                       transition cursor-pointer"
          >
            <FontAwesomeIcon icon={icon} className="text-sm" />
          </div>
        ))}

      </div>
  </div>
</section>

   </>


  );
};

export default ContactUs;
