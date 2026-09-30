"use client";

import { useEffect, useRef, useState } from "react";

const cover = "/assets/door.png";

const images = [
  "/assets/haldi.webp",
  "/assets/phool.webp",
  "/assets/bhaat.webp",
  "/assets/sangeet.webp",
    "/assets/carnival.webp",
      "/assets/shubh.webp",
];

export default function Wardrobe() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(Math.max(-rect.top / total, 0), 1);
      setActive(Math.round(progress * (images.length - 1)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  return (
    // overflow-x-clip (NOT overflow-hidden) so sticky works
    <section className="w-full overflow-x-clip">
      {/* Heading */}
      <div className="flex flex-col justify-center mt-20 lg:mt-40 items-center">
        <h2
          className="text-[#B35800] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
        >
          Wardrobe Guide
        </h2>
        <p className="md:text-2xl text-[16px] text-[#B35800] font-cormorant-garamond">
          Let’s help you pack for the wedding
        </p>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        className="mt-16 pb-32"
        style={isOpen ? { height: `${images.length * 80}vh` } : undefined}
      >
        <div className="sticky top-24 flex justify-center">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-[300px] h-[420px] md:w-[380px] md:h-[520px] cursor-pointer group"
            >
              <img
                src={cover}
                alt="Wardrobe Guide"
                className="w-full h-full object-contain
                transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div
                className="absolute inset-0 flex items-center justify-center
                bg-black/10 opacity-0  transition-opacity"
              >
               
              </div>
            </button>
          ) : (
            <div className="relative w-[300px] h-[420px] md:w-[380px] md:h-[520px]">
              {images.map((src, index) => {
                const offset = index - active;
                const passed = offset < 0;

                return (
                  <div
                    key={src}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      transform: passed
                        ? "translateY(-110%) rotate(-6deg)"
                        : `translateY(${offset * 35}px) scale(${1 - offset * 0.04}) rotate(${offset * 2}deg)`,
                      opacity: passed ? 0 : offset > 2 ? 0 : 1,
                      zIndex: images.length - index,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Wardrobe ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}