import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas — Infraestrutura inteligente para o crédito consignado",
  description:
    "A Atlas conecta órgãos públicos, instituições financeiras e servidores através de uma plataforma de averbação segura, automatizada e preparada para o futuro.",
  openGraph: {
    title: "Atlas — Infraestrutura inteligente para o crédito consignado",
    description:
      "Averbação digital que conecta órgãos públicos, instituições financeiras e servidores em uma única plataforma.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#04070f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable}`}
    >
      {/* suppressHydrationWarning: extensões de navegador (ex.: ColorZilla) injetam
          atributos no <body> antes da hidratação e disparariam falso aviso */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
