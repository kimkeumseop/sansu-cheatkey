import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "개운산(GAEUNSAN) - 내 사주로 찾는 운명의 산 | 오늘 어느 산에 가야 운이 트일까?",
  description: "풍수 오성체 + 사주 분석으로 당신의 운을 열어줄(開운) 영험한 산을 추천합니다. 관악산·갓바위·보리암 등 30개 명산 데이터 기반.",
  metadataBase: new URL('https://gaeunsan.vercel.app'),
  other: {
    "google-adsense-account": "ca-pub-1059415497859090",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1059415497859090"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
