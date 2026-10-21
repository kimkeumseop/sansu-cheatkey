// 팔공산 갓바위의 공식 자료와 방문 준비를 안내하는 글
import type { Metadata } from 'next';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

const KNPS_COURSES = 'https://www.knps.or.kr/front/portal/visit/visitCourseSubMain.do?menuNo=8000739&parkId=122400&parkNavGb=park';
const HERITAGE = 'https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaAsno=04310000&ccbaCtcd=37&ccbaKdcd=12&pageNo=1_1_1_0';

export const metadata: Metadata = {
  title: '팔공산 갓바위 방문 안내 — 관암사·선본사 길과 확인할 정보',
  description: '팔공산 관봉의 갓바위를 방문하기 전 확인할 두 탐방로, 국가유산 정보, 통제 여부와 하산 계획을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/gatbawi-prayer' },
  openGraph: {
    type: 'article',
    title: '팔공산 갓바위 방문 안내 — 관암사·선본사 길과 확인할 정보',
    description: '공식 탐방로와 국가유산 자료를 바탕으로 방문 전 점검할 정보를 모았습니다.',
    url: '/sansu/articles/gatbawi-prayer',
  },
};

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.26 · 2026.10.22 수정"
      title={<>팔공산 갓바위 방문 안내<br />관암사·선본사 길부터 확인하기</>}
      ctaTitle="기도처를 고르기 전에 이동 조건을 비교해 보세요"
      ctaDesc="후보를 살핀 뒤에는 공식 탐방로의 개방 여부를 확인해야 합니다."
      ctaLabel="산행 후보 찾기"
    >
      <p>갓바위는 팔공산 관봉에 있는 석조여래좌상의 통칭입니다. 국가유산포털에는 정식 명칭이 <strong>경산 팔공산 관봉 석조여래좌상</strong>이고 보물로 지정되어 있다고 나옵니다. 머리 위 판석이 갓처럼 보여 붙은 이름입니다. 한 가지 소원을 들어준다는 이야기는 이곳에 전해지는 믿음이며, 방문의 결과를 보장하는 사실은 아닙니다.</p>

      <H2>출발지에 따라 다른 두 길</H2>
      <p>국립공원공단의 팔공산 탐방코스 목록에는 <strong>관암사(대구)∼관봉</strong>과 <strong>선본사(경산)∼갓바위(관봉)</strong>가 별도로 나옵니다. 같은 목적지를 향해도 출발지와 이동 동선이 다릅니다. 내비게이션에 ‘갓바위’만 입력하기보다 어느 쪽에서 출발할지 먼저 정하세요.</p>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>대구 쪽.</strong> 관암사에서 관봉으로 향하는 코스를 확인합니다. 계단과 경사에 대비하고 돌아올 길까지 같은 지도로 살펴보세요.</li>
        <li><strong>경산 쪽.</strong> 선본사에서 관봉으로 향하는 코스를 확인합니다. 차량 접근과 주차, 마지막 도보 구간을 별도로 확인해야 합니다.</li>
      </ul>
      <p>코스별 길이·소요시간·주차 운영은 계절과 통제 상황에 따라 바뀔 수 있습니다. 이 글의 고정된 숫자보다 <a href={KNPS_COURSES} target="_blank" rel="noopener noreferrer">국립공원공단 팔공산 코스 안내</a>를 출발 직전에 확인하세요. 공단 안내는 탐방 전 입산시간과 통제 현황도 살피도록 안내합니다.</p>

      <H2>방문 계획을 세우는 순서</H2>
      <ol className="list-decimal ml-5 space-y-2">
        <li>관암사 또는 선본사 중 실제로 갈 출발지를 고릅니다.</li>
        <li>공식 코스 페이지에서 개방 여부와 입산 가능 시간을 확인합니다.</li>
        <li>상행뿐 아니라 하행, 휴식, 출발지로 돌아오는 교통시간을 합쳐 일몰 전 하산할 수 있는지 봅니다.</li>
        <li>돌계단과 경사가 있는 길에 맞는 신발과 물을 준비하고, 비나 결빙 예보가 있으면 일정을 다시 검토합니다.</li>
      </ol>
      <Note title="기도 순서는 방문 규칙이 아닙니다">인터넷에서 보이는 기도 횟수나 소원의 개수는 공식 탐방 규정이 아닙니다. 현장 안내와 다른 방문자의 동선을 우선하고, 종교 활동을 하지 않더라도 조용히 국가유산을 살펴볼 수 있습니다.</Note>

      <H2>무엇을 확인한 글인가요</H2>
      <p><a href={HERITAGE} target="_blank" rel="noopener noreferrer">국가유산포털</a>에서 문화유산의 명칭과 지정 정보를, <a href={KNPS_COURSES} target="_blank" rel="noopener noreferrer">국립공원공단</a>에서 두 탐방로 이름과 사전 확인 항목을 확인했습니다. 방문객 수나 특정 시각의 혼잡도는 현장 조사 자료가 없어 수치로 제시하지 않습니다. 안내를 다시 확인한 날짜는 2026년 10월 22일이며, 실제 운영 정보는 출발일 기준의 공지를 따르세요.</p>

      <H2>자주 묻는 질문</H2>
      <div className="not-prose space-y-4">
        <Faq q="관암사와 선본사 중 어느 길이 더 쉬운가요?">두 코스는 출발지와 접근 방식이 다릅니다. 누구에게나 쉬운 길을 단정할 수 없으므로 공식 코스의 경사·길이와 동행자의 이동 능력을 비교하세요.</Faq>
        <Faq q="방문하면 소원이 이루어지나요?">그런 효과를 확인하거나 보증할 근거는 없습니다. 갓바위의 문화적 전승과 방문 경험을 구분해서 읽어 주세요.</Faq>
        <Faq q="비가 와도 갈 수 있나요?">개방 여부와 안전 상태를 공단 공지에서 확인하세요. 젖은 돌계단과 급경사는 미끄러울 수 있으므로 무리한 방문을 피하세요.</Faq>
      </div>
    </ArticleShell>
  );
}
