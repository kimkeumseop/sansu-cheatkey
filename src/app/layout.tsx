import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import { ADSENSE_CLIENT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/sansu/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "개운산(GAEUNSAN) - 내 사주로 찾는 운명의 산",
    template: "%s | 개운산",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "개운산행", "관악산 효과", "관쫀쿠", "풍수 오성체", "화형산",
    "사주 등산", "띠별 운명의 산", "갓바위 합격 기도", "보리암 인연",
    "오늘 가야 할 산", "등산 추천",
  ],
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/sansu",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    url: "/sansu",
    title: "개운산(GAEUNSAN) - 오늘 어느 산에 가야 운이 트일까?",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "개운산(GAEUNSAN) - 내 사주로 찾는 운명의 산",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    // Search Console 소유권 확인 (HTML 태그 방식). 확인이 끝나도 태그는 유지해야 한다.
    google: "Uq__XjJJK6j-ipJKyUcbCDK6hy_aWPgaf3ep7bsbdlk",
  },
  other: {
    "google-adsense-account": ADSENSE_CLIENT,
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "ko-KR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#F6F4F9] text-[#1A1420] antialiased">
        {children}

        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <Script
          id="kakao-sdk"
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
