"use client";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-14 sm:py-20 px-0 flex justify-center items-center bg-gradient-to-br from-[#fff9ec] via-[#faf5e9] to-[#eedeaf] min-h-[560px]"
    >
      {/* Modern Decorative Background Elements */}
      <span className="pointer-events-none absolute animate-pulse top-[-60px] left-[-60px] w-[190px] h-[190px] rounded-full bg-amber-300/40 blur-3xl z-0" />
      <span className="pointer-events-none absolute animate-pulse bottom-[-90px] right-[-120px] w-[360px] h-[180px] rounded-full bg-amber-400/30 blur-3xl z-0 rotate-12" />
      <span className="pointer-events-none absolute animate-pulse top-[50%] right-[-70px] w-[160px] h-[90px] bg-gradient-to-tr from-yellow-300/30 to-amber-100/20 rounded-full blur-2xl z-0" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse gap-10 md:gap-20 md:grid md:grid-cols-12 md:flex-row items-center">
        {/* Right Side Content */}
        <div className="col-span-7 flex flex-col justify-center items-start p-4 sm:p-8 md:p-0">
          <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-br from-amber-600 via-amber-800 to-yellow-400 bg-clip-text text-transparent mb-6 md:mb-8 tracking-tight leading-tight drop-shadow-xl">
            Hakkımızda
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-800/85 font-medium mb-7 leading-relaxed">
            <span className="font-semibold text-amber-600">Riva Ahşap</span> olarak;
            doğanın estetiğini, modern tasarım anlayışıyla buluşturuyoruz. 
            Yüksek kaliteli malzemeler <span className="hidden md:inline">ve</span>
            usta işçilikle, her yaşam alanı için özgün ve işlevsel ahşap çözümleri sunuyoruz.
          </p>
          <ul className="space-y-3 md:space-y-5 mb-8 w-full">
            {[
              "Ultra modern & fonksiyonel ahşap tasarımlar",
              "Kişiye ve mekâna özel çözümler, tamamen size özel",
              <>
                <span className="text-amber-600 font-semibold">Sürdürülebilir</span> ve{" "}
                <span className="text-amber-600 font-semibold">çevreci</span> malzemeler
              </>
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100/80 shadow-inner ring-amber-400/40 ring-1 mr-1">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2.4} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className="text-zinc-800/90 text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-2 group inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 shadow-lg text-white text-lg font-extrabold transition-transform hover:scale-105 hover:from-amber-600 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Bizimle İletişime Geç
            <svg
              className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        {/* Left Side Image */}
        <div className="col-span-5 flex flex-1 justify-center items-center mb-10 md:mb-0">
          <div className="relative w-full max-w-[380px] aspect-[5/6] rounded-3xl shadow-2xl overflow-hidden border-4 border-white/80 bg-white/70 hover:scale-105 hover:shadow-[0_6px_36px_0_rgba(200,150,40,0.1)] transition-all duration-400">
            <img
              src="/about-section.jpg"
              alt="Riva Ahşap Modern Tasarım"
              className="object-cover w-full h-full"
              draggable={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-amber-50/15 to-yellow-100/10"></div>
            {/* Deco lines */}
            <div className="absolute top-6 left-6 w-12 h-1 bg-amber-400/70 rounded-full blur-2xl"></div>
            <div className="absolute bottom-6 right-6 w-16 h-1 bg-yellow-400/70 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
