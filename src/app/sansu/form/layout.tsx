import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '내 운명의 산 찾기',
  description:
    '태어난 연도와 지금 필요한 기운을 고르면, 사주 12지 오행과 풍수 오성체 분석으로 오늘 가야 할 명산 3곳을 추천해 드립니다.',
  alternates: { canonical: '/sansu/form' },
};

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
