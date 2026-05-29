import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "개운산(GAEUNSAN) - 내 사주로 찾는 운명의 산 | 오늘 어느 산에 가야 운이 트일까?",
  description: "풍수 오성체 + 사주 분석으로 당신의 운을 열어줄(開運) 영험한 산을 추천합니다. 관악산·갓바위·보리암 등 30개 명산 데이터 기반.",
  metadataBase: new URL('https://gaeunsan.vercel.app'),
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
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=60e6fb2a346462f871ceaad6a90caf99&libraries=services&autoload=false`}
          strategy="afterInteractive"
        />
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
