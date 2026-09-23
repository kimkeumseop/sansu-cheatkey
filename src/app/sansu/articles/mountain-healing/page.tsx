// 피로한 날의 산행 계획을 안전과 휴식 중심으로 안내하는 글
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '지쳤을 때 부담을 줄이는 산행 계획',
  description: '피로한 날에는 산을 어떻게 고를까요? 코스 시간, 돌아갈 길, 날씨, 쉼터와 입산 통제 확인 순서를 정리했습니다.',
  alternates: { canonical: '/sansu/articles/mountain-healing' },
};

export default function ArticlePage() {
  return (
    <article className="p-6 pt-12 text-gray-700 leading-relaxed space-y-7">
      <Link href="/sansu/articles" className="text-xs text-brand font-bold block">← 목록으로 돌아가기</Link>
      <header className="space-y-3">
        <h1 className="text-2xl font-black text-gray-900">지쳤을 때 부담을 줄이는 산행 계획</h1>
        <p className="text-sm text-gray-500">2026.09.23 · 개운산 편집</p>
        <p>기분 전환을 위해 산을 찾더라도 피로한 날에는 무리한 목표를 세우지 않는 편이 좋습니다. 이 글은 산행으로 몸이나 마음이 치료된다는 주장이 아니라, 안전하게 다녀올 수 있는 후보를 고르는 방법입니다.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">1. 정상보다 돌아오는 길을 먼저 정하세요</h2>
        <p>출발지에서 등산로 입구까지의 이동, 쉬는 시간, 하산 후 귀가 시간을 모두 합쳐 보세요. 코스 안내의 예상 시간은 개인 속도와 날씨에 따라 달라집니다. 여유가 없다면 짧은 숲길이나 사찰 주변 산책으로 계획을 낮춰도 좋습니다.</p>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>들머리와 날머리가 같은지 먼저 확인합니다.</li>
          <li>되돌아올 수 있는 지점을 미리 정합니다.</li>
          <li>해가 지기 전 충분한 여유를 두고 하산합니다.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">2. ‘초급’ 표시만 믿지 마세요</h2>
        <p>짧은 코스에도 긴 계단, 돌길, 미끄러운 경사가 있을 수 있습니다. 무릎이나 발목 상태가 좋지 않다면 거리보다 길의 상태와 고도 차이를 확인하세요. 동행자에게 경로와 예상 귀가 시각을 알려두는 것도 도움이 됩니다.</p>
        <p>물, 간단한 간식, 보온용 겉옷, 충전된 휴대전화는 코스가 짧아도 챙기는 편이 좋습니다. 호우·강풍·폭염 예보가 있다면 일정을 바꾸세요.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">3. 출발 직전에 공식 공지를 확인하세요</h2>
        <p>산불 예방, 기상, 시설 공사로 탐방로가 통제될 수 있습니다. 국립공원은 <a href="https://www.knps.or.kr" target="_blank" rel="noopener noreferrer" className="text-brand underline">국립공원공단</a>의 탐방·통제 정보와 <a href="https://reservation.knps.or.kr" target="_blank" rel="noopener noreferrer" className="text-brand underline">예약시스템</a>에서 확인할 수 있습니다. 다른 산은 관할 지자체나 관리 기관의 최신 공지를 찾으세요. 개운산의 시간·교통 안내는 실시간 정보가 아닙니다.</p>
      </section>

      <section className="rounded-2xl bg-purple-50 border border-purple-100 p-5 space-y-2">
        <h2 className="font-bold text-gray-900">후보를 비교해 보세요</h2>
        <p className="text-sm">개운산의 <Link href="/sansu/mountains" className="text-brand underline">30곳 비교표</Link>에서 지역과 예시 코스 시간을 먼저 보세요. 띠·산형 연결은 여행의 문화적 테마일 뿐 안전 판단이나 건강 조언이 아닙니다.</p>
      </section>
    </article>
  );
}
