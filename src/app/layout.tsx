import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { Grain } from "@/components/shared/grain";
import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
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
  themeColor: "#FFF8E7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}
    >
      {/* suppressHydrationWarning: extensões de navegador (ex.: ColorZilla) injetam
          atributos no <body> antes da hidratação e disparariam falso aviso */}
      <body suppressHydrationWarning>
        {children}
        <Grain />
        <CustomCursor />
      </body>
    </html>
  );
}
