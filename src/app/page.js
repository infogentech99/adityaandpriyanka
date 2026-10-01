"use client";

import { useEffect, useState, useRef } from "react";
import IntroVideo from "./components/IntroVideo";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;
    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch (err) {
      console.log("Audio play failed:", err);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.log("Audio play failed:", err);
      }
    }
  };

  useEffect(() => {
    if (started) return;
    const handler = () => startMusic();
    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          started ? toggleMusic() : startMusic();
        }}
        className="fixed top-4 right-4 z-50 bg-[#B35800] text-white px-3 py-2 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/song.mp3" loop preload="auto" playsInline />

      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <IntroVideo />
        <HeroSection />
      </div>
    </>
  );
}