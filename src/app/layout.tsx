import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import { ADSENSE_CLIENT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/sansu/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "개운산(GAEUNSAN) - 띠와 관심 주제로 고르는 산행 후보",
    template: "%s | 개운산",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "산행 후보 비교", "풍수 오성체", "산형", "등산 코스", "띠별 산 추천",
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
    title: "개운산(GAEUNSAN) - 나에게 맞는 산행 후보 비교",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "개운산(GAEUNSAN) - 나에게 맞는 산행 후보 비교",
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
      </body>
    </html>
  );
}
