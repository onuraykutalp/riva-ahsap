"use client";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fake submit (replace with real API later)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1100);
  };

  return (
    <>
      <PageBanner
        title="İletişim"
        backgroundImage="/product-banner.jpg"
        breadcrumb={[
          { title: "İletişim" }
        ]}
      />

      <section className="w-full bg-gradient-to-br from-yellow-50 via-white to-amber-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 px-4 pt-12 pb-20">
          {/* Info Card */}
          <div className="flex flex-col justify-between md:py-6 py-8 bg-white/90 rounded-3xl p-6 shadow-xl border border-amber-100">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-semibold text-amber-700 mb-2">Bize Ulaşın</h2>
              <p className="text-amber-900/80 mb-6 leading-relaxed">
                Sorularınız, projeleriniz veya teklif talepleriniz için bize form aracılığıyla hemen ulaşın.<br />Size en kısa sürede dönüş yapacağız.
              </p>
              <ul className="text-base mt-4 space-y-3">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm-1 3H9v2h6V5z" />
                  </svg>
                  <span className="font-medium">Adres:</span>
                  <span className="text-amber-900/80 ml-1">Riva Ahşap, İstanbul, Türkiye</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8m0 4a4 4 0 01-8 0V8m8 4h2.5m-12-4V7a2 2 0 012-2h10a2 2 0 012 2v1" />
                  </svg>
                  <span className="font-medium">Telefon:</span>
                  <a href="tel:+905321776169" className="ml-1 hover:underline text-amber-800">+90 532 177 61 69</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8m0 4a4 4 0 01-8 0V8m8 4h2.5m-12-4V7a2 2 0 012-2h10a2 2 0 012 2v1" />
                  </svg>
                  <span className="font-medium">Telefon:</span>
                  <a href="tel:+905377459151" className="ml-1 hover:underline text-amber-800">+90 537 745 91 51</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2a2 2 0 012 2v0a2 2 0 01-2 2H8a2 2 0 01-2-2v0a2 2 0 012-2h8z" />
                  </svg>
                  <span className="font-medium">E-posta:</span>
                  <a href="mailto:info@rivaahsap.com.tr" className="ml-1 hover:underline text-amber-800">info@rivaahsap.com.tr</a>
                </li>
              </ul>
            </div>
            {/* Socials */}
            <div className="mt-8 flex gap-3">
              <a href="https://wa.me/905554443322" target="_blank" rel="noopener noreferrer"
                className="inline-flex w-10 h-10 justify-center items-center rounded-full bg-amber-50 shadow hover:bg-amber-100 transition-all group"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 text-green-600 group-hover:text-green-700" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M24.31 19.13a5.71 5.71 0 0 1-1.8.29c-.32 0-.78-.1-1.24-.21s-.84-.16-1.41-.53a8.79 8.79 0 0 1-2.7-2.36c-.17-.23-.8-1-.8-1.83s.4-1.17.54-1.34.3-.35.4-.47.22-.25.33-.4a.67.67 0 0 0 .06-.65.61.61 0 0 0-.27-.34c-.2-.11-.79-1.38-1.09-1.89s-.58-.41-.95-.41c-.32 0-.67 0-.97.05a1.34 1.34 0 0 0-.92.56 4.1 4.1 0 0 0-.84 2.91 8.44 8.44 0 0 0 1.29 3.73A8.9 8.9 0 0 0 14.49 19a8.87 8.87 0 0 0 2.55 1.69A7.7 7.7 0 0 0 19 21.15c.77.18 1.67.13 2.07.08a4.29 4.29 0 0 0 1.17-.35A1.49 1.49 0 0 0 23.4 20a.82.82 0 0 0 .39-.71c0-.18-.16-.26-.37-.31z"/>
                </svg>
              </a>
              <a href="https://instagram.com/rivaahsap" target="_blank" rel="noopener noreferrer"
                className="inline-flex w-10 h-10 justify-center items-center rounded-full bg-amber-50 shadow hover:bg-amber-100 transition-all group"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-pink-500 group-hover:text-pink-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
              <a href="mailto:info@rivaahsap.com.tr"
                className="inline-flex w-10 h-10 justify-center items-center rounded-full bg-amber-50 shadow hover:bg-amber-100 transition-all group"
                aria-label="Mail"
              >
                <svg className="w-6 h-6 text-amber-500 group-hover:text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 6-8.35 7.15a2 2 0 0 1-2.3 0L2 6" />
                </svg>
              </a>
            </div>
            <div className="mt-8">
              <iframe
                title="Google Maps"
                src="https://maps.google.com/maps?q=istanbul&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="w-full h-40 rounded-xl border-none shadow"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 rounded-3xl shadow-2xl border border-amber-100 flex flex-col gap-8 px-6 py-10 md:py-16 justify-center"
            autoComplete="on"
          >
            <h2 className="text-2xl font-extrabold text-amber-700 mb-2 text-center">İletişim Formu</h2>
            <div className="flex flex-col gap-4 mt-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-800 mb-1">
                  Ad Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={64}
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-amber-50 border border-amber-200 focus:border-amber-400 rounded-xl px-4 py-3 text-base text-amber-950 placeholder-amber-400 outline-none transition"
                  placeholder="Adınız ve Soyadınız"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-1">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={64}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-amber-50 border border-amber-200 focus:border-amber-400 rounded-xl px-4 py-3 text-base text-amber-950 placeholder-amber-400 outline-none transition"
                  placeholder="E-posta adresiniz"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-1">
                  Mesajınız <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={1000}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-amber-50 border border-amber-200 focus:border-amber-400 rounded-xl px-4 py-3 text-base text-amber-950 placeholder-amber-400 outline-none transition min-h-[120px] resize-none"
                  placeholder="Mesajınızı yazın"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-500 hover:to-yellow-400 text-white font-bold py-3 rounded-xl text-lg shadow-lg transition-all active:scale-95 disabled:opacity-70"
            >
              {status === "submitting" ? "Gönderiliyor..." : "Gönder"}
            </button>
            {status === "success" && (
              <div className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-green-600 font-medium text-center mt-1">
                Mesajınız başarıyla gönderildi. Teşekkürler!
              </div>
            )}
            {status === "error" && (
              <div className="w-full bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-red-600 font-medium text-center mt-1">
                Bir hata oluştu. Lütfen tekrar deneyin.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
