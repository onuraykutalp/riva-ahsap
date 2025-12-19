"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";

const images = [
    "/products/product-1.jpg",
    "/products/product-2.jpg",
    "/products/product-3.jpg",
    "/products/product-4.jpg",
    "/products/product-5.jpg",
    "/products/product-6.jpg",
    "/products/product-7.jpg",
    "/products/product-8.jpg",
    "/products/product-9.jpg",
    "/products/product-10.jpg",
    "/products/product-11.jpg",
    "/products/product-12.jpg",
    "/products/product-13.jpg",
    "/products/product-14.jpg",
    "/products/product-15.jpg",
    "/products/product-16.jpg",
];

export default function ProductsGallery() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    // Modal navigation helpers
    const hasPrev = selectedIdx !== null && selectedIdx > 0;
    const hasNext = selectedIdx !== null && selectedIdx < images.length - 1;

    return (
        <>
            <PageBanner title="Ürünlerimiz" backgroundImage="/product-banner.jpg" />
            <section className="py-10 px-2 sm:px-8 md:px-20 bg-gradient-to-tr from-amber-50 via-white to-yellow-50 min-h-[80vh]">

                <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 max-w-6xl mx-auto">
                    {images.map((src, i) => (
                        <motion.button
                            key={src}
                            className="focus:outline-none rounded-2xl shadow-xl overflow-hidden bg-white/80 border border-amber-200 hover:scale-[1.03] transition-transform group"
                            whileHover={{ scale: 1.038 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedIdx(i)}
                            tabIndex={0}
                            aria-label={`Büyüt: Ürün görseli ${i + 1}`}
                        >
                            <img
                                src={src}
                                alt={`Ürün ${i + 1}`}
                                className="object-cover aspect-[4/5] w-full h-auto group-hover:brightness-105 group-hover:scale-105 transition"
                                draggable={false}
                                loading="lazy"
                            />
                        </motion.button>
                    ))}
                </div>

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
                                className="relative max-w-3xl w-[92vw] sm:w-[70vw] md:w-[52vw] rounded-3xl overflow-hidden shadow-2xl"
                                onClick={e => e.stopPropagation()}
                                initial={{ scale: 0.92, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 380, damping: 30 } }}
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
                                        onClick={() => setSelectedIdx((idx) => (idx !== null ? idx - 1 : null))}
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
                                        onClick={() => setSelectedIdx((idx) => (idx !== null ? idx + 1 : null))}
                                        aria-label="Sonraki görsel"
                                    >
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                )}
                                {/* Main Large Image */}
                                <motion.img
                                    key={images[selectedIdx]}
                                    src={images[selectedIdx]}
                                    alt={`Büyük Ürün Görseli ${selectedIdx + 1}`}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.36 }}
                                    className="w-full object-contain bg-white aspect-[4/5] max-h-[70vh] md:max-h-[80vh] select-none"
                                    draggable={false}
                                />
                                {/* Image Counter (mob/responsive) */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 text-amber-800 px-3 py-1 rounded-full font-semibold text-sm shadow">
                                    {selectedIdx + 1} / {images.length}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </>
    );
}

