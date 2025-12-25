"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modern mobilya örnek verileri (ad/isim/dekoratif amaçlı)
const furniture = [
  {
    id: 1,
    name: "Genç Odası",
    image: "/products/genc-odasi.jpg",
    desc: "Genç odası için özel tasarlanmış ahşap mobilya.",
  },
  {
    id: 2,
    name: "Ahşap Masa",
    image: "/products/ahsap-masa.jpg",
    desc: "Ahşap masa, el işçiliğiyle üretilmiş dayanıklı ahşap masa.",
  },
  {
    id: 3,
    name: "Ahşap Sandalye",
    image: "/products/ahsap-sandalye.jpg",
    desc: "Ahşap sandalye, el işçiliğiyle üretilmiş dayanıklı ahşap sandalye.",
  },
  {
    id: 4,
    name: "Ahşap Kitaplık",
    image: "/products/ahsap-kitaplik.jpg",
    desc: "Ahşap kitaplık, el işçiliğiyle üretilmiş dayanıklı ahşap kitaplık.",
  },
  {
    id: 5,
    name: "Lambader",
    image: "/products/lambader.jpg",
    desc: "Ahşap lambader, el işçiliğiyle üretilmiş dayanıklı ahşap lambader.",
  },
  {
    id: 6,
    name: "Oturma Ünitesi",
    image: "/products/ahsap-oturma-unitesi.jpg",
    desc: "Ahşap oturma ünitesi, el işçiliğiyle üretilmiş dayanıklı ahşap oturma ünitesi.",
  },
  {
    id: 7,
    name: "Yan Sehpa",
    image: "/products/yan-sehpa.jpg",
    desc: "Ahşap yan sehpa, el işçiliğiyle üretilmiş dayanıklı ahşap yan sehpa.",
  },
  {
    id: 8,
    name: "Raf Ünitesi",
    image: "/products/raf-unitesi.jpg",
    desc: "Ahşap raf ünitesi, el işçiliğiyle üretilmiş dayanıklı ahşap raf ünitesi.",
  },
];

const shimmer =
  "before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,245,170,0.18)_20%,rgba(255,245,170,0.21)_60%,rgba(220,190,100,0.13)_80%)] before:z-10";

export default function StuffList() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Modal navigation helpers
  const hasPrev = selectedIdx !== null && selectedIdx > 0;
  const hasNext = selectedIdx !== null && selectedIdx < furniture.length - 1;

  // Klavye ile modal içinde gezinme fonksiyonu
  React.useEffect(() => {
    if (selectedIdx === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedIdx(null);
      }
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) =>
          prev !== null && prev < furniture.length - 1 ? prev + 1 : prev
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) =>
          prev !== null && prev > 0 ? prev - 1 : prev
        );
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdx]);

  // Düzeltme: Ok butonlarının tıklama fonksiyonları kodu sadeleştirildi ve prev/next anlık değer ile güncellendi
  const goPrev = () => {
    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  };
  const goNext = () => {
    setSelectedIdx((prev) => (prev !== null && prev < furniture.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="w-full py-12 px-2 sm:px-10 bg-gradient-to-tr from-amber-50 via-yellow-50 to-yellow-50 transition-colors duration-500">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-7 text-center bg-gradient-to-r from-yellow-700 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-md tracking-tight">
        Mobilyalarımız
      </h2>
      <div
        className="grid gap-7 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        aria-label="Mobilya Galerisi"
      >
        {furniture.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            className={`relative group rounded-3xl overflow-hidden shadow-xl border border-amber-200 bg-yellow-50/80 hover:scale-[1.025] backdrop-blur-lg hover:shadow-2xl transition-transform duration-300 ${shimmer} focus:outline-none`}
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedIdx(i)}
            tabIndex={0}
            aria-label={`${item.name} detaylarını görüntüle`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              loading="lazy"
              draggable={false}
              style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
            />
            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/75 via-yellow-700/40 to-transparent p-4">
              <span className="block text-lg font-medium text-white drop-shadow-md text-center">
                {item.name}
              </span>
            </span>
            <div className="absolute inset-0 bg-yellow-50/0 group-hover:bg-yellow-100/30 transition duration-300 pointer-events-none" />
          </motion.button>
        ))}
      </div>

      {/* Modal - Ultra modern diyalog/popup */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              className="relative bg-white/95 rounded-3xl p-0 shadow-2xl max-w-xl w-full flex flex-col items-stretch overflow-hidden z-10"
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0.8 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={furniture[selectedIdx].image}
                alt={furniture[selectedIdx].name}
                className="w-full h-96 object-cover"
                draggable={false}
                style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
              />
              <div className="flex flex-row items-center justify-between gap-4 px-7 py-6 bg-gradient-to-br from-yellow-50 via-white to-amber-100">
                <div>
                  <h3 className="text-xl font-extrabold text-yellow-800 mb-1">{furniture[selectedIdx].name}</h3>
                  <p className="text-md text-amber-900">{furniture[selectedIdx].desc}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIdx(null);
                  }}
                  className="ml-auto rounded-full p-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 transition focus:outline-none"
                  aria-label="Kapat"
                  type="button"
                >
                  <svg width={28} height={28} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute left-0 right-0 flex flex-row justify-between top-1/2 -translate-y-1/2 px-3 pointer-events-none z-20">
                <button
                  className={`pointer-events-auto bg-white/90 hover:bg-white shadow-lg rounded-full hover:bg-yellow-100 transition p-3 ${!hasPrev ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
                  aria-label="Önceki mobilya"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  disabled={!hasPrev}
                  tabIndex={hasPrev ? 0 : -1}
                  type="button"
                >
                  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className={`pointer-events-auto bg-white/90 hover:bg-white shadow-lg rounded-full hover:bg-yellow-100 transition p-3 ${!hasNext ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
                  aria-label="Sonraki mobilya"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  disabled={!hasNext}
                  tabIndex={hasNext ? 0 : -1}
                  type="button"
                >
                  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}