import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { montserrat } from "./fonts";
import Aside from "@/modules/componentes/aside.components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestión de Eventos",
  description: "Aplicación para administrar eventos y conferencias",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        <div className="flex min-h-screen">
          <Aside />
          <main className="flex-1 p-6 bg-white">{children}</main>
        </div>
      </body>
    </html>
  );
}
