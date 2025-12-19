"use client";
import { Menu } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "#about" },
  { name: "Projeler", href: "/products" },
  { name: "İletişim", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 bg-[#f4f4f4] backdrop-blur-md z-50 w-full shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-25">
      <a href="/" className="flex items-center gap-2 ml-8">
              <img src="/logo-riva.jpg" alt="Riva Ahşap" className="w-auto h-20" />
            </a>
        {/* Desktop Nav and Logo */}
        <div className="hidden md:flex flex-1 items-center">
          <div className="flex-1 flex justify-end items-center gap-8">
            {/* Menü itemleri sağa yaslı */}
            {navigation.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="relative group px-2 py-1 text-gray-700 font-bold transition-colors duration-200 hover:text-amber-600"
              >
                {name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-500 mt-1 rounded-full" />
              </a>
            ))}
            
          </div>
        </div>
        {/* Mobile Layout */}
        <div className="flex w-full md:hidden items-center justify-between">
          {/* Logo sola, menü butonu sağa */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-riva.jpg" alt="Riva Ahşap" className="w-auto h-16" />
          </a>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Menüyü Aç"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
      <div
        className={`fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-[101] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            aria-label="Menüyü Kapat"
            className="self-end mb-8 p-2 rounded-full hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <Menu className="w-6 h-6 text-gray-700 rotate-90" />
          </button>
          <nav className="space-y-6 mt-8">
            {navigation.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="block text-lg font-semibold text-gray-800 hover:text-amber-600 transition-colors"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
