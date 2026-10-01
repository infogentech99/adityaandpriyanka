"use client";

const days = [
  { date: "4 Dec", icon: "☀️", high: 31, low: 15, note: "Sunny & pleasant" },
  { date: "5 Dec", icon: "🌤️", high: 30, low: 14, note: "Clear skies" },
];

const requestNames = [
  "Dev dwarkani",
  "Taruna dwarkani",
  
];

const regardsNames = ["Sangeeta- Giraj Ratan ji Bagree,", "Urvashi- Siddharth ji"];

export default function LadkiWeather() {
  return (
    <section
      id="weather"
      className="w-full scroll-mt-6 px-0 md:px-10 flex flex-col items-center gap-16"
    >
      {/* Weather card */}
      <div
        className="w-full max-w-4xl
     md:px-8 py-8"
      >
        <h2
          className="text-[#B35800] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
        >
          Bikaner Weather
        </h2>

        <p className="text-center italic text-[#a0575a] font-cormorant-garamond text-base md:text-lg mt-2">
          December brings sunny days, pleasant afternoons and cool desert
          evenings.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8">
          {days.map((d) => (
            <div
              key={d.date}
              className="flex flex-col items-center rounded-2xl border border-[#e6d3ae]
              bg-[#faf5ea] py-3 shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
            >
              <span className="text-3xl">{d.icon}</span>

              <span className="mt-3 text-[11px] tracking-[0.25em] uppercase text-[#a0575a]">
                {d.date}
              </span>

              <span className="mt-2 text-3xl text-[#B35800] font-cormorant-garamond">
                {d.high}°
              </span>

              <span className="mt-2 text-xl text-[#a0575a] font-cormorant-garamond">
                {d.low}°
              </span>

              <span className="mt-3 italic text-sm text-[#a0575a] font-cormorant-garamond">
                {d.note}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Special request card */}
      <div
        className="w-full max-w-xl rounded-3xl bg-gradient-to-br from-[#8c1212] to-[#5c0505]
        border border-[#a8641a]/60 px-6 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a63c]">
          WELCOME BY
        </p>

        <div className="mt-4 space-y-2">
          {requestNames.map((name) => (
            <p
              key={name}
              className="text-xl md:text-2xl text-[#f6e6dc] font-serif"
            >
              {name}
            </p>
          ))}
        </div>

        <div className="mx-auto my-6 h-px w-24 bg-[#d4a63c]/50" />

        <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a63c]">
          Special Request
        </p>

        <div className="mt-4 space-y-3">
          {regardsNames.map((name) => (
            <p
              key={name}
              className="text-xl md:text-2xl text-[#f6e6dc] font-serif"
            >
              {name}
            </p>
          ))}
        </div>
        <div className="mx-auto my-6 h-px w-24 bg-[#d4a63c]/50" />
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a63c]">
          MATERNAL SIDE
        </p>
        <p className="text-xl md:text-2xl text-[#f6e6dc] font-serif mt-3">
          Madan Gopal ji, Chagan lal ji, Lal Chand ji Daga and Daga family
        </p>


          <div className="mx-auto my-6 h-px w-24 bg-[#d4a63c]/50" />
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a63c]">
          Paternal side
        </p>
        <p className="text-xl md:text-2xl text-[#f6e6dc] font-serif mt-3">
          Shankar lal ji, Dau lal ji, Bansi lal ji, Shushil kumar ji, Vimal kumar, Chandan Dwarkani and Dwarkani family
        </p>
        
      </div>
    </section>
  );
}
