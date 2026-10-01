"use client";

import { useState } from "react";

const images = [
  "/assets/book_image.webp",
  "/assets/couple1.jpg",
  "/assets/couple2.jpg",
  "/assets/couple3.jpg",
  "/assets/couple4.jpg",
  "/assets/couple5.jpg",
];

export default function PhotoGallery() {
  const [flipped, setFlipped] = useState(0);
  const [bookCycle, setBookCycle] = useState(0);

  const next = () => {
    if (flipped === images.length - 1) {
      setBookCycle((cycle) => cycle + 1);
      setFlipped(0);
      return;
    }

    setFlipped((current) => current + 1);
  };


  return (
    <section id="photos" className="w-full scroll-mt-6 overflow-x-clip">
      {/* Heading */}
      <div className="flex flex-col justify-center mt-0 lg:mt-20 items-center">
        <p className="md:text-2xl text-[16px] text-[#B35800] font-cormorant-garamond">
          Our little album
        </p>
        <h2
          className="text-[#B35800] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
        >
          Photo Gallery
        </h2>
      </div>

      {/* Book */}
      <div className="flex flex-col items-center mt-16 pb-32">
        <div
          key={bookCycle}
          className="relative w-[300px] h-[420px] md:w-[380px] md:h-[520px]"
          style={{ perspective: "1800px" }}
        >
          {images.map((src, index) => {
            const isFlipped = index < flipped;
            const isTop = index === flipped;
            return (
              <div
                key={src}
                onClick={() => isTop && next()}
                className={`group absolute inset-0 ${
                  isTop ? "cursor-pointer" : ""
                }`}
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                  transition:
                    "transform 1s cubic-bezier(0.645, 0.045, 0.355, 1), z-index 0s linear 1s",
                  zIndex: isFlipped ? index : images.length - index,
                  pointerEvents: isFlipped ? "none" : "auto",
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  draggable={false}
                  className="w-full h-full object-contain rounded-r-2xl rounded-l-sm hover:shadow-2xl"
                  style={{ backfaceVisibility: "hidden" }}
                />

                {/* Spine shadow */}
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/30 to-transparent rounded-l-sm pointer-events-none" />

                {/* Cover hint */}
                {index === 0 && flipped === 0 && (
                  <div
                    className="absolute inset-0 flex items-center justify-center
                    bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                  >
                    <span
                      className="bg-white/90 px-5 py-2 rounded-full
                      text-[#B35800] font-cormorant-garamond text-xl"
                    >
                      Click to open
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
      </div>
    </section>
  );
}
