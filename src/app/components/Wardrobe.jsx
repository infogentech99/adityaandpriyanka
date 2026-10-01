"use client";

import { useRef, useState } from "react";

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
  const touchStartX = useRef(null);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    touchStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event) => {
    if (touchStartX.current === null) return;

    const distance = event.clientX - touchStartX.current;
    if (Math.abs(distance) > 40) {
      setActive((current) =>
        Math.max(0, Math.min(images.length - 1, current + (distance < 0 ? 1 : -1))),
      );
    }
    touchStartX.current = null;
  };

  return (
    // overflow-x-clip (NOT overflow-hidden) so sticky works
    <section id="wardrobe" className="w-full scroll-mt-6 overflow-x-clip">
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

      <div className="mt-16 pb-32 flex justify-center">
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
            <div
              className="relative w-[calc(100vw-2rem)] h-[250px] md:w-[380px] md:h-[520px] overflow-hidden rounded-2xl touch-pan-y cursor-grab active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                touchStartX.current = null;
              }}
            >
              {images.map((src, index) => {
                const offset = index - active;
                const passed = offset < 0;

                return (
                  <div
                    key={src}
                    className="absolute inset-y-0 left-0 w-1/2 md:w-full transition-all duration-700 ease-out"
                    style={{
                      transform: `translateX(${offset * 100}%)`,
                      opacity: passed ? 0 : offset > 1 ? 0 : 1,
                      zIndex: images.length - index,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Wardrobe ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
          )}
      </div>
    </section>
  );
}