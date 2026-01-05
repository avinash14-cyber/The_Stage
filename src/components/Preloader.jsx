import React, { useEffect } from "react";
import preloaderVideo from "../assets/5a92ed97dfa833f77fe2c19cda222bc0.mp4";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 7200); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-9999 bg-black flex items-center justify-center">
      <video
        src={preloaderVideo}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Preloader;
