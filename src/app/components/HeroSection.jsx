"use client";

import { useState } from "react";
import LadkeDetails from "../components/LadkeDetails";
import LadkiDetails from "../components/LadkiDetails";
import RoseHeroTemp from "../components/RoseHeroTemp";
export default function HeroSection() {
  const [selectedSide, setSelectedSide] = useState(null);


const FloatingLamp = ({ className, style, reverse = false }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/flower_petals2.webp"
      alt="petal"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      }}
    />
  );
};






  return (
    <section className="relative min-h-screen w-full">

      {/* ================= BACKGROUND ================= */}
      <div
        className="fixed inset-0 z-0 h-screen w-full bg-[#faf4e8] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/family-bg.webp')",
          backgroundColor: "#faf4e8",
        }}
      />

 <RoseHeroTemp />
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-10 py-10 sm:px-8 md:px-12 lg:px-16 mt-10">

        {/* ================= GANESH ================= */}
        <div className="mt-4 flex justify-center md:mt-8">
          <img
            src="/assets/ganes.png"
            alt="Shree Ganesh"
            className="w-[100px] sm:w-[65px] md:w-[150px]"
          />
        </div>

        {/* ================= WEDDING LOGO ================= */}
        <div className="mt-8 flex flex-col items-center text-center md:mt-10">
          <img
            src="/assets/wedding-logo.png"
            alt="Wedding Logo"
            className="w-[180px] sm:w-[220px] md:w-[280px]"
          />

          <p className="mt-3 text-[15px] tracking-[0.15em] text-[#B35800] sm:text-xs md:mt-5 md:text-2xl font-cormorant-garamond">
            #fallinginlove
          </p>
        </div>

        {/* ================= CHOOSE TEXT ================= */}
        <div className="mt-14 text-center sm:mt-16 md:mt-20">
          <p className="text-[18px] text-[#B35800] md:text-xl font-cormorant-garamond">
            PLEASE CHOOSE ONE TO CONTINUE
          </p>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-8 flex w-full max-w-[500px] flex-col items-center justify-center gap-4 sm:flex-row md:mt-10">

          {/* LADKE */}
          <button
            type="button"
            onClick={() => setSelectedSide("ladke")}
            className={`
              w-full max-w-[220px]
              rounded-full
              px-8 py-3
              text-xs tracking-[0.12em]
              text-white
              transition-all duration-300
              sm:w-[200px]
              md:w-[220px] md:py-3.5 md:text-sm
              cursor-pointer font-cormorant-garamond
              ${
                selectedSide === "ladke"
                  ? "scale-105 bg-[#B35800] shadow-lg"
                  : "bg-[#B35800] hover:scale-105 hover:bg-[#B35800]"
              }
            `}
          >
            LADKE WAALE
          </button>

          {/* LADKI */}
          <button
            type="button"
            onClick={() => setSelectedSide("ladki")}
            className={`
              w-full max-w-[220px]
              rounded-full
              px-8 py-3
              text-xs tracking-[0.12em]
              text-white
              transition-all duration-300
              sm:w-[200px]
              md:w-[220px] md:py-3.5 md:text-sm
              cursor-pointer font-cormorant-garamond
              ${ 
                selectedSide === "ladki"
                  ? "scale-105 bg-[#B35800] shadow-lg"
                  : "bg-[#B35800] hover:scale-105 hover:bg-[#B35800]"
              }
            `}
          >
            LADKI WAALE
          </button>

        </div>

        {/* ================= SELECTED DETAILS ================= */}
        {selectedSide && (
          <div className="mt-12 w-full max-w-5xl pb-10 md:mt-16">

            {selectedSide === "ladke" ? (
              <LadkeDetails />
            ) : (
              <LadkiDetails />
            )}

          </div>
        )}

      </div>
    </section>
  );
}