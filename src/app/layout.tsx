import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScroll } from "@/components/scroll/SmoothScroll";
import { ScrollReveal } from "@/components/scroll/ScrollReveal";
import { Footer } from "@/components/navigation/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DTV Mounting | Professional TV Installation",
  description:
    "Professional TV mounting and installation services from DTV Mounting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <body>
        <ThemeProvider>
          <SmoothScroll />
          <ScrollReveal />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
