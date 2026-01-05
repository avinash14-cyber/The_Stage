import React from "react";
import heroVideo from "../../../assets/hero_video.mp4"; // your video

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10"></div>

      {/* Header */}
      <header className="absolute top-8 left-0 w-full z-20">
        <div className="max-w-7xl rounded-4xl bg-white mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-dark text-3xl font-bold">
            The Stage
          </h1>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-white/90">
            <a href="#" className="hover:text-white text-gray-800">Home</a>
            <a href="#" className="hover:text-white text-gray-800">Pages</a>
            <a href="#" className="hover:text-white text-gray-800">Events</a>
            <a href="#" className="hover:text-white text-gray-800">Speakers</a>
            <a href="#" className="hover:text-white text-gray-800">Blog</a>
            <a href="#" className="hover:text-white text-gray-800">Contact</a>
          </nav>

          {/* CTA Button */}
          <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            Register →
          </button>
        </div>
      </header>

      {/* Hero Content */}
     <div className="relative mt-10 z-20 h-full flex justify-center items-center">
  <div className="max-w-7xl  text-white ">

    {/* Rating */}
    <div className="flex justify-center items-center gap-2 mb-3 text-md text-white/80">
      <div className="flex gap-1 text-yellow-400">
        ★ ★ ★ ★ ★
      </div>
      <span className="ml-2">
        <strong className="text-white text-lg">4.9</strong> Star Reviews from 500+ events
      </span>
    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-8xl font-semibold leading-tight max-w-6xl">
      Host events that inspire
    </h1>

    {/* Description */}
    <p className="mt-6 max-w-3xl text-center mx-auto text-white/80 text-2xl leading-relaxed">
      Our modular venues and tech-ready facilities make it easy to run
      workshops, pitch nights and product launches with up to
      <span className="text-white text-center font-medium"> 1000+ attendees</span>.
    </p>

    {/* CTA Buttons */}
    <div className="mt-10 justify-center flex gap-4">
      <button className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition">
        Book a tour
      </button>

      <button className="border border-white/40 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition">
        See packages
      </button>
    </div>

  </div>
</div>


    </section>
  );
};

export default Hero;
