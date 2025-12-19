import React from "react";

type BreadcrumbItem = {
  title: string;
  href?: string;
};

interface PageBannerProps {
  title: string;
  breadcrumb?: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  breadcrumb = [],
  backgroundImage,
}) => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center px-4 pb-7 pt-20 sm:pt-32 min-h-[180px] sm:min-h-[300px] bg-gradient-to-tr from-amber-100 via-amber-50 to-yellow-50 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(90deg,rgba(255,246,226,0.88),rgba(255,254,241,0.85)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Decorative blobs / lines */}
      <div className="absolute left-0 top-0 -translate-y-1/2 blur-2xl opacity-40 pointer-events-none z-0">
        <div className="bg-yellow-300 w-40 h-32 rounded-full mix-blend-multiply" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 blur-2xl opacity-30 pointer-events-none z-0">
        <div className="bg-amber-200 w-56 h-28 rounded-full mix-blend-multiply" />
      </div>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="w-full flex justify-center mt-2 mb-3 z-10"
      >
        <ol className="flex flex-wrap items-center space-x-2 text-xs sm:text-sm font-medium text-amber-800/80">
          <li>
            <a href="/" className="hover:text-amber-600 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" />
              </svg>
              Anasayfa
            </a>
          </li>
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={item.title + idx}>
              <li className="text-amber-500 opacity-70 px-1">/</li>
              <li>
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-amber-800/90">{item.title}</span>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-center text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500 bg-clip-text text-transparent drop-shadow-lg z-10">
        {title}
      </h1>
    </section>
  );
};

export default PageBanner;
