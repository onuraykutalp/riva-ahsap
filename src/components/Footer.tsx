"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#fdf6e4] via-[#fff2c9] to-[#ffd785] border-t border-amber-200/60 relative">
      {/* Decorative Gradient Glow */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[520px] h-[120px] bg-yellow-200/70 rounded-full blur-3xl opacity-50 pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-24 relative z-10">
        {/* LOGO & SHORT DESC */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-riva.jpg" alt="Riva Ahşap Logo" className="h-14 w-auto rounded-xl shadow-sm" />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-amber-800 to-yellow-700 bg-clip-text text-transparent">Riva Ahşap</span>
          </a>
          <p className="text-center md:text-left text-zinc-700/80 text-base font-medium max-w-xs mt-2">
            Doğanın sıcaklığını modern detaylarla birleştiriyoruz. Sürdürülebilir ve fonksiyonel ahşap yaşam alanları tasarlıyoruz.
          </p>
        </div>
        {/* FOOTER LINK SECTIONS */}
        <div className="flex flex-1 justify-center md:justify-between w-full gap-10 flex-wrap">
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold text-amber-950 mb-3">Navigasyon</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-zinc-800 hover:text-amber-700 transition font-medium">Ana Sayfa</a>
              </li>
              <li>
                <a href="/about" className="text-zinc-800 hover:text-amber-700 transition font-medium">Hakkımızda</a>
              </li>
              <li>
                <a href="/projects" className="text-zinc-800 hover:text-amber-700 transition font-medium">Projeler</a>
              </li>
              <li>
                <a href="/contact" className="text-zinc-800 hover:text-amber-700 transition font-medium">İletişim</a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-amber-950 mb-3">İletişim</h4>
            <ul className="space-y-2 text-base">
              <li>
                <a
                  href="tel:+905321776169"
                  className="hover:text-amber-700 flex items-center gap-2 transition"
                >
                  <svg className="inline w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5l7 7-7 7m16-7H9"></path>
                  </svg>
                  +90 532 177 61 69
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rivaahsap.com"
                  className="hover:text-amber-700 flex items-center gap-2 transition"
                >
                  <svg className="inline w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4 4m0 0l-4-4m4 4V8"></path>
                  </svg>
                  info@rivaahsap.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a8 8 0 10-16 0v2h5"></path>
                </svg>
                <span>
                  İstanbul, Türkiye
                </span>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-amber-950 mb-3">Sosyal Medya</h4>
            <nav className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/rivaahsaap/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full p-2 bg-white/80 hover:bg-amber-100 shadow transition"
              >
                <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <circle cx="17.5" cy="6.5" r="1"/>
                </svg>
              </a>
              <a
                href="https://wa.me/+905321776169"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full p-2 bg-white/80 hover:bg-amber-100 shadow transition"
              >
                <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21.05 12.54A9 9 0 003.07 19.2L2 22l2.83-.84A9 9 0 1019.21 4.78a9 9 0 001.84 7.76z"/>
                  <path d="M16 15v.01"/>
                  <path d="M8 9h.01"/>
                </svg>
              </a>
              <a
                href="mailto:info@rivaahsap.com"
                aria-label="E-posta"
                className="rounded-full p-2 bg-white/80 hover:bg-amber-100 shadow transition"
              >
                <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="M3 7l9 6 9-6"/>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-amber-200/60 py-5 text-center bg-white/60 text-zinc-600 text-sm font-semibold tracking-wide relative z-10">
        © {new Date().getFullYear()} Riva Ahşap. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
