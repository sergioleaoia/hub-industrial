import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter_Tight } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-57PG5XD";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hub-ia-industrial.leaomarketeria.com.br"),
  title: {
    default: "Hub de IA Industrial | Leão Marketeria",
    template: "%s | Hub de IA Industrial",
  },
  description:
    "Acelere resultados em indústrias B2B integrando marketing, vendas técnicas e operação com Inteligência Artificial. Ferramentas e guias proprietários da Leão Marketeria.",
  keywords: [
    "IA para indústria",
    "marketing industrial",
    "Leão Marketeria",
    "Raio-X Industrial",
    "Feira.IA",
    "GEO Industrial",
    "geração de demanda B2B",
  ],
  authors: [{ name: "Leão Marketeria", url: "https://leaomarketeria.com.br" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Hub de IA Industrial",
    title: "Hub de IA Industrial | Leão Marketeria",
    description:
      "A suíte completa de IA da Leão para indústrias B2B: diagnóstico, feiras, visibilidade em AI search e funis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub de IA Industrial | Leão Marketeria",
    description:
      "Ferramentas de IA para indústrias B2B que faturam R$8M+/ano.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f1",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${interTight.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
