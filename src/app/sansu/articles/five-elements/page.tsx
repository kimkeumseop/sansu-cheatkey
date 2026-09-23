// 산의 윤곽을 오성체로 구분하는 문화적 관점을 안내하는 글
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '산의 모습을 다섯 가지로 읽는 오성체 가이드',
  description: '목·화·토·금·수 산형의 윤곽을 비교하고, 실제 산에서 복합적인 모습을 읽는 법과 풍수 해석의 한계를 설명합니다.',
  alternates: { canonical: '/sansu/articles/five-elements' },
};

const shapes = [
  { name: '목형', element: '木', outline: '옆에서 볼 때 위로 길게 솟은 봉우리', check: '한 봉우리의 높이와 폭을 비교하세요. 보는 위치에 따라 길쭉한 윤곽이 달라집니다.' },
  { name: '화형', element: '火', outline: '여러 갈래로 뾰족하게 갈라진 능선', check: '바위가 드러난 암릉이라도 실제 탐방로가 암릉을 지나가는지는 따로 확인해야 합니다.' },
  { name: '토형', element: '土', outline: '정상부가 넓고 평평해 보이는 윤곽', check: '멀리서 평평해 보여도 정상까지의 오르막은 가파를 수 있습니다.' },
  { name: '금형', element: '金', outline: '종을 엎은 듯 둥근 윤곽', check: '둥근 능선과 숲길 여부는 별개입니다. 실제 노면 사진이나 관리 기관 안내를 보세요.' },
  { name: '수형', element: '水', outline: '낮은 봉우리가 물결처럼 이어진 윤곽', check: '완만한 봉우리 여러 개가 이어지면 총 산행 시간이 길어질 수 있습니다.' },
];

export default function ArticlePage() {
  return (
    <article className="p-6 pt-12 text-gray-700 leading-relaxed space-y-7">
      <Link href="/sansu/articles" className="text-xs text-brand font-bold block">← 목록으로 돌아가기</Link>
      <header className="space-y-3">
        <h1 className="text-2xl font-black text-gray-900">산의 모습을 다섯 가지로 읽는 오성체 가이드</h1>
        <p className="text-sm text-gray-500">2026.09.23 · 개운산 편집</p>
        <p>오성체(五星體)는 산의 윤곽을 목·화·토·금·수에 빗대어 읽는 풍수의 한 방식입니다. 개운산에서는 여행지를 살펴보는 문화적 관점으로만 사용합니다. 산형이 운세나 건강을 바꾼다는 과학적 근거로 사용하지 않습니다.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">다섯 가지 윤곽 비교</h2>
        <div className="space-y-3">
          {shapes.map((shape) => (
            <div key={shape.element} className="border border-gray-200 rounded-2xl p-4 space-y-1">
              <h3 className="font-bold text-gray-900">{shape.name}산 ({shape.element})</h3>
              <p className="text-sm">{shape.outline}.</p>
              <p className="text-xs text-gray-500">현장 확인: {shape.check}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">직접 살펴보는 순서</h2>
        <ol className="list-decimal ml-5 space-y-2 text-sm">
          <li>지도에서 산 전체와 주요 봉우리 위치를 먼저 확인합니다.</li>
          <li>건너편 능선이나 넓게 열린 장소에서 전체 윤곽을 살펴봅니다. 산 안에서 보면 바깥 실루엣이 잘 보이지 않습니다.</li>
          <li>한 산을 한 가지 유형에 꼭 맞추지 않습니다. 산은 여러 봉우리와 다양한 지형으로 이루어져 있습니다.</li>
          <li>산형과 별도로 실제 탐방로의 경사, 거리, 통제 상태를 확인합니다.</li>
        </ol>
        <p>예를 들어 멀리서 둥근 정상으로 보이는 산이 특정 코스에서는 긴 돌계단을 포함할 수 있습니다. 윤곽은 코스 난이도를 대신하지 않습니다.</p>
      </section>

      <section className="rounded-2xl bg-purple-50 border border-purple-100 p-5 space-y-2">
        <h2 className="font-bold text-gray-900">개운산에서 이 분류를 쓰는 이유</h2>
        <p className="text-sm">30곳을 다섯 가지 산형으로 묶어 비교하고, 태어난 해의 띠와 상생 관계라는 문화적 연결표로 후보를 정렬합니다. 분류는 편집자의 해석이므로 다른 자료에서는 같은 산을 다르게 볼 수 있습니다. <Link href="/sansu/about" className="text-brand underline">추천 기준과 한계</Link>를 함께 읽어 주세요.</p>
      </section>

      <p className="text-sm">실제 산행을 준비한다면 <Link href="/sansu/mountains" className="text-brand underline">30곳 비교표</Link>에서 지역, 예시 코스 시간과 접근 방법을 먼저 살펴보세요. 국립공원 탐방로는 <a href="https://www.knps.or.kr" target="_blank" rel="noopener noreferrer" className="text-brand underline">국립공원공단</a>의 최신 공지를 확인하세요.</p>
    </article>
  );
}
