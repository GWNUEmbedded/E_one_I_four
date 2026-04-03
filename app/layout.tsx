import type { Metadata } from "next";
import { Rajdhani, Exo_2 } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "GamerType — 게이머 유형 분석",
  description: "AI 기반 게이머 유형 분석 플랫폼. 당신만의 게이머 DNA를 발견하세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${rajdhani.variable} ${exo2.variable} font-exo2 antialiased`}>
        {children}
      </body>
    </html>
  );
}
