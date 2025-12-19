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

  // Slider otomatik oynatma
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const goToPrevious = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const goToNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <section
      className="
        relative w-full mx-auto select-none bg-gradient-to-tr from-[#fffbf4] via-[#f2e5cc] to-[#d2c09e]
        flex flex-col justify-center items-center min-h-[320px] sm:min-h-[410px] md:min-h-[480px] lg:min-h-[66vh] rounded-b-3xl shadow-[0_8px_40px_6px_rgba(223,186,129,0.19)]"
      style={{ overflow: "hidden" }}
    >
      {/* Slider Images as Full Section Background - Desktop */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none transition-all duration-700">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.title}
            className={`
              absolute inset-0 w-full h-full object-cover object-center brightness-90 saturate-110 transition-opacity duration-700 ease-[cubic-bezier(.65,.05,.36,1)]
              ${i === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"}
              hidden sm:block
            `}
            draggable={false}
            loading={i === 0 ? "eager" : "lazy"}
            style={{
              filter: "brightness(0.85) saturate(1.1)",
              borderRadius: undefined, // Remove borderRadius for section background
              transitionProperty: "opacity,transform",
            }}
            aria-hidden={i !== current}
          />
        ))}
      </div>
      {/* Decorative background gradient overlay to avoid strong images */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-b-3xl hidden sm:block" />

      {/* Slider Container */}
      <div className="
        relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl md:rounded-3xl
        aspect-[16/6] md:aspect-[8/3] xs:aspect-[4/5] min-h-[300px] sm:min-h-[350px]
        flex items-stretch
        z-10
      ">
        {/* Slide Images for mobile */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.65,.05,.36,1)]
              ${i === current ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-0"}
              ${i === current ? "pointer-events-auto" : "pointer-events-none"}
              sm:hidden
            `}
            aria-hidden={i !== current}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-90 saturate-110 transition-all duration-1000 rounded-2xl"
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
              style={{
                filter: "brightness(0.85) saturate(1.1)",
                borderRadius: "1.5rem",
              }}
            />
            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-200/10 via-white/20 to-amber-800/45 pointer-events-none rounded-2xl"></div>
          </div>
        ))}

        {/* Modern Blurred Glass Panel */}
        <div
          className="
            absolute bottom-5 left-0 right-0 mx-auto
            flex flex-col max-w-[94vw] xs:max-w-[91vw] sm:max-w-[70vw] md:max-w-[50vw] bg-white/60
            rounded-2xl shadow-2xl backdrop-blur-xl
            px-4 py-4 xs:px-3 xs:py-3 sm:px-7 sm:py-7
            border border-neutral-100/60 
            gap-2 sm:gap-5 items-center
            translate-y-0 animate-fade-in
            md:bottom-8
            z-20
          "
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <h2
            className="text-xl xs:text-lg sm:text-3xl md:text-4xl font-black text-amber-800 tracking-tight text-center drop-shadow-sm leading-tight mb-2"
            style={{
              letterSpacing: "-.02em",
            }}
          >
            {slides[current].title}
          </h2>
          <p className="text-sm xs:text-xs sm:text-base md:text-lg text-zinc-800/85 font-medium text-center max-w-lg mb-2 sm:mb-3">
            {slides[current].desc}
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full px-6 py-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 text-white font-bold shadow-lg hover:scale-105 hover:from-amber-600 hover:to-yellow-500 transition text-xs xs:text-xs sm:text-base mt-1"
            tabIndex={0}
          >
            Teklif Al
          </a>
        </div>
        {/* Iconic Stamp */}
        <div className="
          absolute top-6 right-6 md:top-8 md:right-8 bg-gradient-to-tr from-yellow-400/90 to-amber-500/90
          text-white font-bold text-xs xs:text-[10px] md:text-lg uppercase px-3 py-2 rounded-full shadow-md tracking-widest drop-shadow
          pointer-events-none
          select-none
          animate-fade-in
          z-30
          "
        >
          Riva Ahşap
        </div>

        {/* Overlay Gradient for readability on desktop (rounded border, matches container) */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-amber-200/10 via-white/20 to-amber-800/45 pointer-events-none rounded-2xl" />

        {/* Left + Right Buttons */}
        <button
          className="absolute left-2.5 xs:left-0 sm:left-4 top-1/2 z-30 -translate-y-1/2 bg-white/90 hover:bg-amber-500/90 hover:text-white rounded-full p-1.5 xs:p-1 sm:p-2.5 md:p-3 shadow-2xl border border-amber-200 backdrop-blur-lg transition group outline-none focus:ring-2 focus:ring-amber-400"
          style={{ touchAction: "manipulation" }}
          aria-label="Önceki slayt"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-6 h-6 xs:w-4 xs:h-4 sm:w-8 sm:h-8" />
        </button>
        <button
          className="absolute right-2.5 xs:right-0 sm:right-4 top-1/2 z-30 -translate-y-1/2 bg-white/90 hover:bg-amber-500/90 hover:text-white rounded-full p-1.5 xs:p-1 sm:p-2.5 md:p-3 shadow-2xl border border-amber-200 backdrop-blur-lg transition group outline-none focus:ring-2 focus:ring-amber-400"
          style={{ touchAction: "manipulation" }}
          aria-label="Sonraki slayt"
          onClick={goToNext}
        >
          <ChevronRight className="w-6 h-6 xs:w-4 xs:h-4 sm:w-8 sm:h-8" />
        </button>

        {/* Bullets Modern */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-5 z-30 flex gap-2 xs:gap-1.5 sm:gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`
                w-2.5 h-2.5 xs:w-2 xs:h-2 sm:w-4 sm:h-4
                rounded-full border-2 transition-all duration-300 focus:ring-amber-400
                ${
                  current === idx
                    ? "bg-gradient-to-r from-amber-400 to-yellow-400 border-amber-400 scale-125 shadow-lg"
                    : "bg-white border-amber-200 hover:scale-110"
                }
              `}
              aria-label={`Slayt ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              tabIndex={0}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
