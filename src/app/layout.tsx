import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-5FM8HW9LF6";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bsdeveloper.com.br"),
  title: "BS Developer | Desenvolvimento Web & Sistemas",
  description:
    "Seu projeto digital, do zero à produção. Sites, sistemas e apps desenvolvidos com a atenção que seu negócio merece.",
  keywords: [
    "desenvolvimento web",
    "sistemas web",
    "landing page",
    "site profissional",
    "aplicativo",
    "saas",
    "desenvolvedor",
    "freelancer",
  ],
  authors: [{ name: "Bruno Sena", url: "https://www.bsdeveloper.com.br" }],
  creator: "BS Developer",
  publisher: "BS Developer",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.bsdeveloper.com.br",
    siteName: "BS Developer",
    title: "BS Developer | Desenvolvimento Web & Sistemas",
    description:
      "Seu projeto digital, do zero à produção. Sites, sistemas e apps desenvolvidos com a atenção que seu negócio merece.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BS Developer | Desenvolvimento Web & Sistemas",
    description:
      "Seu projeto digital, do zero à produção. Sites, sistemas e apps desenvolvidos com a atenção que seu negócio merece.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BS Developer",
  url: "https://www.bsdeveloper.com.br",
  description:
    "Desenvolvimento web sob demanda. Sites, sistemas e apps para empresas e empreendedores.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tubarão",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  telephone: "+5548998649898",
  areaServed: "BR",
  serviceType: [
    "Desenvolvimento de Sites",
    "Landing Pages",
    "Sistemas Web",
    "Aplicativos Mobile",
    "SaaS",
    "APIs e Integrações",
  ],
  founder: {
    "@type": "Person",
    name: "Bruno Sena",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
