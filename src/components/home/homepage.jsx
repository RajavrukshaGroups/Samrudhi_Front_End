import React, { useEffect, useState } from "react";
import HeroVideo from "../../components/assets/banner_video.mp4";
import Navbar from "../navbar/navbar";

const titles = [
  <>
    PLOTS THAT PROMISE A{" "}
    <span className="text-yellow-300 border-b-4 border-yellow-300">
      PROSPEROUS TOMORROW
    </span>
  </>,
  <>
    GROW YOUR WEALTH STEADILY{" "}
    <span className="text-yellow-300 border-b-4 border-yellow-300">
      WITH LAND INVESTMENTS
    </span>
  </>,
];

const HeroSection = () => {
  const [visibleTitle, setVisibleTitle] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const showDuration = 3000;
    const fadeDuration = 400;

    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setVisibleTitle((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, fadeDuration);
    }, showDuration);

    return () => clearTimeout(timer);
  }, [visibleTitle]);

  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-left max-w-5xl w-full mx-auto mt-32 px-4 min-h-[140px]">
        <h1
          className={`text-6xl font-extrabold text-white leading-tight transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          } transform w-full`}
        >
          {titles[visibleTitle]}
        </h1>

        <div className="mt-8 flex items-center gap-6">
          <a
            href="/"
            className="bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center gap-3"
            >
            Explore Plots
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
            </>
  );
};

export default HeroSection;
