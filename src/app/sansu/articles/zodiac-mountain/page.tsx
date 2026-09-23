// 태어난 해의 띠와 산형을 연결하는 사이트 규칙을 예시로 설명하는 글
import Link from 'next/link';
import type { Metadata } from 'next';
import { ALL_ZODIACS, ZODIAC_TO_ELEMENT } from '@/lib/sansu/zodiac';
import { ELEMENT_TO_SHAPE, SHAPE_META, SUPPLEMENT_RULE } from '@/lib/sansu/element';

export const metadata: Metadata = {
  title: '띠와 산형을 연결하는 전통적 해석',
  description: '개운산이 태어난 해의 띠와 오행 상생 관계를 산형에 연결하는 방법, 계산 예시와 실제 산행에서의 한계를 설명합니다.',
  alternates: { canonical: '/sansu/articles/zodiac-mountain' },
};

export default function ArticlePage() {
  return (
    <article className="p-6 pt-12 text-gray-700 leading-relaxed space-y-7">
      <Link href="/sansu/articles" className="text-xs text-brand font-bold block">← 목록으로 돌아가기</Link>
      <header className="space-y-3">
        <h1 className="text-2xl font-black text-gray-900">띠와 산형을 연결하는 전통적 해석</h1>
        <p className="text-sm text-gray-500">2026.09.23 · 개운산 편집</p>
        <p>띠는 태어난 해를 12가지 동물 이름으로 부르는 문화적 분류입니다. 개운산은 띠를 오행에 연결하고, 오행의 상생 관계를 산의 모양에 빗대어 후보를 정렬합니다. 실제 성격, 운세, 소원 성취 여부를 판정하는 계산은 아닙니다.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">사이트의 연결표</h2>
        <p className="text-sm">아래 표는 추천 기능에서 사용하는 규칙을 그대로 보여줍니다. 같은 띠라면 이 단계에서는 같은 산형을 우선합니다. 관심 주제와 요일, 선택한 위치에 따라 최종 후보 순서는 달라질 수 있습니다.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-50"><th className="border p-2 text-left">띠</th><th className="border p-2 text-left">연결한 오행</th><th className="border p-2 text-left">우선 산형</th></tr></thead>
            <tbody>
              {ALL_ZODIACS.map((zodiac) => {
                const element = ZODIAC_TO_ELEMENT[zodiac];
                const shape = SHAPE_META[ELEMENT_TO_SHAPE[SUPPLEMENT_RULE[element]]];
                return <tr key={zodiac}><td className="border p-2">{zodiac}</td><td className="border p-2">{element}</td><td className="border p-2">{shape.formal}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">한 번 따라 해보기</h2>
        <p>태어난 해로 띠를 찾고, 표의 오행에서 상생 관계로 이어지는 산형을 고릅니다. 예를 들어 쥐띠를 수(水)로 연결한다면 금생수(金生水)라는 전통적 관계를 적용해 금형산을 우선하는 식입니다. 이는 산의 윤곽을 보는 테마이며, 금형산 방문이 쥐띠에게 어떤 결과를 가져온다는 뜻이 아닙니다.</p>
        <p>개운산은 출생 연도만 받습니다. 음력 설이나 입춘을 경계로 띠를 정하는 방식과 다르므로 1~2월 출생자는 표의 띠가 본인이 알고 있는 띠와 다를 수 있습니다. 생년월일시를 모두 사용하는 사주 풀이도 아닙니다.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">산을 실제로 고를 때</h2>
        <p>동행자의 체력, 이동 시간, 날씨, 입산 제한을 먼저 살펴보세요. 표에서 ‘맞는 산형’으로 표시되어도 길이 가파르거나 멀면 다른 산을 고르는 편이 낫습니다. 반대로 표에 없다는 이유로 가까운 안전한 산을 피할 필요도 없습니다.</p>
        <p>후보를 추린 뒤에는 <Link href="/sansu/mountains" className="text-brand underline">지역·코스 시간·교통 비교표</Link>와 각 관리 기관의 최신 공지를 확인하세요. 추천 점수는 사이트 내부 정렬용이며 확률로 읽으면 안 됩니다.</p>
      </section>
    </article>
  );
}
