import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "산수치트키 - 사주로 찾는 내 운명의 영험한 산 | 관악산 효과 그 이상",
  description: "600년 전 풍수 오성체 + 사주 띠 분석으로 30개 명산 중 오늘 가야 할 산을 추천합니다. 관악산·갓바위·보리암·구인사 등.",
  metadataBase: new URL('https://sansu-cheatkey.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js"
          integrity="sha384-lX7up7UIW9pS6YJ4pE8963+pS/7533L9Vl/u93976378/1485641151670"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
