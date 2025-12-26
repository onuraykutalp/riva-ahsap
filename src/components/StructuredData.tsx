export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rivaahsap.com.tr",
    name: "Riva Ahşap",
    description: "Doğanın estetiğini modern tasarım anlayışıyla buluşturuyoruz. Yüksek kaliteli malzemeler ve usta işçilikle, her yaşam alanı için özgün ve işlevsel ahşap çözümleri sunuyoruz.",
    url: "https://rivaahsap.com.tr",
    logo: "https://rivaahsap.com.tr/logo-riva.jpg",
    image: "https://rivaahsap.com.tr/logo-riva.jpg",
    telephone: ["+905321776169", "+905377459151"],
    email: "info@rivaahsap.com.tr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    sameAs: [
      "https://www.instagram.com/rivaahsaap/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rivaahsap.com.tr/#website",
    url: "https://rivaahsap.com.tr",
    name: "Riva Ahşap",
    description: "Ahşap işleme, mobilya ve dekorasyon hizmetleri",
    publisher: {
      "@id": "https://rivaahsap.com.tr",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

