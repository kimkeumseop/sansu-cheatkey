import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '내 산행 후보 찾기',
  description:
    '태어난 연도의 띠와 관심 주제를 바탕으로 30곳 중 산행 후보 3곳을 비교합니다. 풍수 분류는 문화적 참고 정보입니다.',
  alternates: { canonical: '/sansu/form' },
};

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
