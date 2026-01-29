import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bsdeveloper.com.br"),
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
  authors: [{ name: "Bruno Sena", url: "https://bsdeveloper.com.br" }],
  creator: "BS Developer",
  publisher: "BS Developer",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bsdeveloper.com.br",
    siteName: "BS Developer",
    title: "BS Developer | Desenvolvimento Web & Sistemas",
    description:
      "Seu projeto digital, do zero à produção. Sites, sistemas e apps desenvolvidos com a atenção que seu negócio merece.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BS Developer - Desenvolvimento Web & Sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BS Developer | Desenvolvimento Web & Sistemas",
    description:
      "Seu projeto digital, do zero à produção. Sites, sistemas e apps desenvolvidos com a atenção que seu negócio merece.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
