"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Minimal ürün görselleri (örnek adlandırılmış, değiştirebilirsiniz)
const products = [
  { id: 1, name: "Ahşap Mihrap", image: "/products/product-1.jpg" },
  { id: 2, name: "Korkuluk", image: "/products/product-2.jpg" },
  { id: 3, name: "Çıtakari Tavan", image: "/products/product-3.jpg" },
  { id: 4, name: "Ahşap Tavanlık", image: "/products/product-4.jpg" },
  { id: 5, name: "Ahşap Kapı", image: "/products/product-5.jpg" },
  { id: 6, name: "Ahşap Kapı", image: "/products/product-6.jpg" },
  { id: 7, name: "Ahşap Kapı", image: "/products/product-7.jpg" },
  { id: 8, name: "Ahşap Kürsü", image: "/products/product-8.jpg" },
];

const shimmer =
  "before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(241,194,90,0.13)_20%,rgba(239,194,91,0.23)_50%,rgba(209,122,42,0.10)_80%)] before:z-10";

export default function ProductList() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const hasPrev = selectedIdx !== null && selectedIdx > 0;
  const hasNext = selectedIdx !== null && selectedIdx < products.length - 1;

  return (
    <section className="w-full py-12 px-2 sm:px-10 bg-gradient-to-tr from-amber-50 via-yellow-50 to-amber-100">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-7 text-center bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-400 bg-clip-text text-transparent drop-shadow-md tracking-tight">
        Ürünlerimizden Seçmeler
      </h2>
      <div
        className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        aria-label="Ürün Galerisi"
      >
        {products.map((product, i) => (
          <motion.button
            key={product.id}
            type="button"
            className={`relative group rounded-3xl overflow-hidden shadow-xl bg-white/80 hover:scale-[1.025] transition-transform duration-250 border border-amber-100 hover:shadow-2xl backdrop-blur-xl ${shimmer} focus:outline-none`}
            whileHover={{ scale: 1.028 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedIdx(i)}
            tabIndex={0}
            aria-label={`${product.name} detaylarını büyüt`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              loading="lazy"
              draggable={false}
            />
            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/85 via-amber-700/60 to-transparent p-4">
              <span className="block text-lg font-semibold text-white drop-shadow-lg tracking-wide text-center">
                {product.name}
              </span>
            </span>
            {/* Hover extra effect */}
            <div className="absolute inset-0 bg-amber-50/0 group-hover:bg-amber-50/20 transition duration-300 pointer-events-none" />
          </motion.button>
        ))}
      </div>

      {/* Modal */}
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
              className="relative max-w-xl w-[94vw] sm:w-[70vw] md:w-[40vw] rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 380, damping: 30 },
              }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
            >
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-2 right-2 bg-white/90 hover:bg-amber-100 text-amber-800 rounded-full p-2 transition z-10"
                aria-label="Kapat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Prev/Next Buttons */}
              {hasPrev && (
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-amber-100 shadow text-amber-800 rounded-full p-2 transition z-10"
                  onClick={() => setSelectedIdx(idx => (idx !== null ? idx - 1 : null))}
                  aria-label="Önceki görsel"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {hasNext && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-amber-100 shadow text-amber-800 rounded-full p-2 transition z-10"
                  onClick={() => setSelectedIdx(idx => (idx !== null ? idx + 1 : null))}
                  aria-label="Sonraki görsel"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
              {/* Main Large Image */}
              <motion.img
                key={products[selectedIdx].image}
                src={products[selectedIdx].image}
                alt={`${products[selectedIdx].name} büyük görsel`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.36 }}
                className="w-full object-contain bg-white aspect-[4/5] max-h-[60vh] md:max-h-[75vh] select-none"
                draggable={false}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 text-amber-800 px-3 py-1 rounded-full font-semibold text-sm shadow">
                {selectedIdx + 1} / {products.length}
              </div>
              <div className="absolute bottom-14 left-0 right-0 text-center px-4">
                <span className="inline-block bg-amber-800/85 text-white px-4 py-1 rounded-lg text-lg font-semibold shadow">
                  {products[selectedIdx].name}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
