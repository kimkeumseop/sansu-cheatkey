// 개운산의 추천 기준과 자료 해석 한계를 설명하는 소개 페이지
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개와 추천 기준',
  description: '개운산의 산행 후보 선정 기준, 풍수 문화 해석의 한계, 코스 정보 확인 방법을 설명합니다.',
  alternates: { canonical: '/sansu/about' },
};

export default function AboutPage() {
  return (
    <article className="p-6 pt-12 space-y-7 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-2xl font-black text-gray-900 mb-3">개운산은 어떻게 산을 고르나요?</h1>
        <p>개운산은 산행 후보를 찾아보는 서비스입니다. 산의 모양을 다섯 가지로 비유하는 풍수 오성체와 태어난 해의 띠를 탐색의 출발점으로 사용합니다. 운세를 예측하거나 방문 효과를 판정하지 않습니다.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">입력과 계산 기준</h2>
        <ol className="list-decimal ml-5 space-y-2 text-sm">
          <li>태어난 연도로 12지 띠를 찾습니다. 음력 새해나 입춘을 기준으로 하는 정통 명리 계산과 다릅니다. 연초 출생자는 실제 띠와 다를 수 있습니다.</li>
          <li>띠에 연결해 둔 오행과 오행의 상생 관계로 산형 한 가지를 우선합니다. 이 연결은 사이트가 정한 문화적 분류 규칙이며 개인의 부족한 오행을 진단하지 않습니다.</li>
          <li>선택한 관심 주제와 장소 태그, 요일, 선택적으로 제공한 대략적 직선거리를 반영해 후보를 정렬합니다. 점수는 내부 정렬 기준일 뿐 성공 확률이나 건강 효과가 아닙니다.</li>
        </ol>
        <p className="text-sm">예를 들어 1990년생이 ‘합격’을 선택하면 출생 연도에 해당하는 띠와 관련 산형, 합격 태그가 붙은 장소를 우선 비교합니다. 실제 산행에서는 이 순위보다 난이도, 이동 시간, 날씨와 통제 여부가 중요합니다.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">자료를 읽는 방법</h2>
        <p className="text-sm">30개 장소의 위치, 코스 시간, 교통, 난이도와 전승 이야기를 참고용으로 정리했습니다. 산형과 ‘기운’, 띠 궁합, 소원 키워드는 전통적·주관적 해석입니다. 현장 조사나 공식 산행 안내를 대신하지 않습니다. 특히 절·암자의 높이를 산 정상 고도와 혼동하지 말고, 방문 목적지와 경로를 지도로 다시 확인해 주세요.</p>
        <p className="text-sm">코스 개방 여부와 입산 시간은 수시로 바뀝니다. 국립공원은 <a className="text-brand underline" href="https://www.knps.or.kr" target="_blank" rel="noopener noreferrer">국립공원공단</a>과 <a className="text-brand underline" href="https://reservation.knps.or.kr" target="_blank" rel="noopener noreferrer">예약시스템</a>, 그 밖의 산은 관할 지자체·사찰 공식 공지에서 출발 직전에 확인해 주세요.</p>
      </section>

      <section className="rounded-2xl bg-purple-50 p-5 border border-purple-100 space-y-2">
        <h2 className="font-bold text-purple-900">편집 원칙과 한계</h2>
        <p className="text-sm">이 사이트의 30개 개별 소개는 간략한 탐색 카드입니다. 상세하고 최신인 공식 코스 안내가 필요한 경우 해당 관리 기관 자료를 우선하세요. 의학적 효능, 합격, 인연, 재물운 같은 결과를 보장하지 않습니다.</p>
        <p className="text-sm">내용 오류나 변경 사항은 <Link className="text-brand underline" href="/sansu/contact">문의 페이지</Link>로 알려주시면 확인 후 반영하겠습니다.</p>
      </section>

      <p className="text-xs text-gray-500">마지막 편집 기준 검토: 2026년 9월 23일.</p>
      <Link href="/sansu/mountains" className="inline-block rounded-xl bg-brand text-white font-bold px-5 py-3 text-sm">30곳 비교하기 →</Link>
    </article>
  );
}
