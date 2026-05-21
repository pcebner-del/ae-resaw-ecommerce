import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap"
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "A&E Resaw — Quality blanks made in Phoenix Arizona",
  description:
    "A&E Resaw crafts high-end custom guitar and bass body blanks from selected tonewoods in Phoenix, Arizona.",
  openGraph: {
    title: "A&E Resaw",
    description: "Quality blanks made in Phoenix Arizona.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <Nav />
        <main className="min-h-[calc(100vh-12rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
