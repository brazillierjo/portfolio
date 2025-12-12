import type { Metadata } from "next";
import { Oxanium, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johan R. BRAZILLIER - Full Stack Developer & SEO Expert",
  description:
    "Web Developer Expert in React, Next.js, Nuxt & TypeScript. 10 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${oxanium.variable} ${sourceCodePro.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
