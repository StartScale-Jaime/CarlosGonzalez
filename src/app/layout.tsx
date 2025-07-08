import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "EuroTravel - Planifica tu viaje en 15 minutos",
  description: "Un pronosticador rápido de viajes para que puedas tener una idea de cuánto te puede costar en total tu viaje por Europa.",
  keywords: ["viajes", "presupuesto", "Europa", "España", "Francia", "Andorra", "calculadora"],
  authors: [{ name: "EuroTravel Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
