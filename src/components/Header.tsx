"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "#about", label: "Hakkımızda" },
    { href: "/products", label: "Ürünler" },
    { href: "/stuff", label: "Mobilyalar" },
    { href: "/contact", label: "İletişim" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-amber-100/50"
            : "bg-gradient-to-tr from-[#f4f4f4] via-[#f4f4f4] to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <img
                  src="/logo-riva.jpg"
                  alt="Riva Ahşap Logo"
                  className="h-12 w-auto md:h-14 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
              
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-amber-700"
                        : "text-zinc-700 hover:text-amber-600"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
                        layoutId="activeIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Contact Icons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="tel:+905321776169"
                className="p-2.5 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 text-amber-700 shadow-sm hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Telefon"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@rivaahsap.com"
                className="p-2.5 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 text-amber-700 shadow-sm hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="E-posta"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-zinc-700 hover:bg-amber-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Menü"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className="fixed top-20 left-0 right-0 bg-white/98 backdrop-blur-xl shadow-2xl border-t border-amber-100 lg:hidden z-40"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 shadow-md"
                            : "text-zinc-700 hover:bg-amber-50 hover:text-amber-600"
                        }`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}

                  {/* Mobile Contact Buttons */}
                  <motion.div
                    className="flex items-center gap-3 pt-4 mt-4 border-t border-amber-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.a
                      href="tel:+905321776169"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Ara</span>
                    </motion.a>
                    <motion.a
                      href="mailto:info@rivaahsap.com"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 font-semibold hover:from-amber-200 hover:to-yellow-200 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="w-5 h-5" />
                      <span>E-posta</span>
                    </motion.a>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20 md:h-24" />
    </>
  );
}

