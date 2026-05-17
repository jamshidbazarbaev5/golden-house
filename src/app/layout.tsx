import type { Metadata } from "next";
import { Geist, Work_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "YOSHLAR MARKAZI - Ёшлар ижтимоий-иқтисодий маркази",
  description: "Yoshlar ijtimoiy-iqtisodiy markazi — yoshlarning ijtimoiy va iqtisodiy faolligini qo'llab-quvvatlash hamda investitsion loyihalarni rivojlantirish bo'yicha direksiya.",
  icons: {
    icon: "/gerb.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${workSans.variable} ${instrumentSerif.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
