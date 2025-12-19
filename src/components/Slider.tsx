"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/slider/slider-1.jpg",
    title: "Doğanın Estetiği",
    desc: "Evinizde doğal ahşap ile sıcak bir atmosfer yaratın.",
  },
  {
    image: "/slider/slider-2.jpg",
    title: "Modern Tasarım",
    desc: "Şık ve modern ahşap uygulamalarla yaşam alanınızı yenileyin.",
  },
  {
    image: "/slider/slider-3.jpg",
    title: "Kaliteli İşçilik",
    desc: "Ustalık ve detay odaklı işçilik ile daima yüksek kalite.",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Otomatik geçişler için
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Slider otomatik oynatma
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => {
      resetTimeout();
    };
  }, [current]);

  const goToPrevious = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const goToNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full aspect-[16/6] max-h-[610px] mx-auto overflow-hidden shadow-2xl group bg-gradient-to-br from-[#fff8ee] to-[#dbcba6]">
      {/* SLIDE IMAGE & OVERLAY */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-20" : "opacity-0 pointer-events-none z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading="eager"
            className="object-cover w-full h-full transition-transform duration-1000 scale-105 group-hover:scale-110 blur-[1px] brightness-90"
            draggable={false}
            style={{ filter: "brightness(0.80) saturate(1.1)" }}
          />
          {/* Overlay/Glass Card */}
          <div className="absolute left-14 sm:left-20 top-1/2 -translate-y-1/2 bg-white/80 rounded-2xl shadow-xl px-8 py-8 sm:py-10 max-w-[480px] flex flex-col gap-3 sm:gap-7 backdrop-blur-md animate-fade-in border border-amber-100">
            <h2 className="text-3xl sm:text-5xl font-bold text-amber-800 drop-shadow-lg mb-1 tracking-tight">
              {slide.title}
            </h2>
            <p className="text-lg sm:text-xl font-normal text-zinc-800/90">
              {slide.desc}
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-5 py-2 rounded-full bg-amber-500 text-white text-base font-semibold shadow-md hover:bg-amber-600 transition"
              tabIndex={i === current ? 0 : -1}
            >
              Teklif Al
            </a>
          </div>
        </div>
      ))}

      {/* Ok düğmeleri */}
      <button
        className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-amber-500 hover:text-white rounded-full p-3 sm:p-4 shadow-2xl transition-colors duration-200 focus:outline-amber-400 border border-amber-300"
        aria-label="Bir önceki"
        onClick={goToPrevious}
      >
        <ChevronLeft size={30} />
      </button>
      <button
        className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-amber-500 hover:text-white rounded-full p-3 sm:p-4 shadow-2xl transition-colors duration-200 focus:outline-amber-400 border border-amber-300"
        aria-label="Sonraki"
        onClick={goToNext}
      >
        <ChevronRight size={30} />
      </button>

      {/* BULLETS */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 focus:outline-amber-500
              ${
                current === idx
                  ? "bg-amber-500 border-amber-500 scale-125 shadow-lg shadow-amber-200"
                  : "bg-white border-amber-200 hover:scale-110"
              }
            `}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
      {/* Decorative Wood Texture Border */}
      <div className="absolute bottom-0 left-0 w-full h-[26px] opacity-60 pointer-events-none">
        <img
          src="/decorative/wood-wave.svg"
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}

