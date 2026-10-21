// 시험 전 산행을 이동 시간과 난이도 기준으로 비교하는 안내 글
import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

export const metadata: Metadata = {
  title: '시험을 앞둔 산행 후보 5곳 — 거리와 체력부터 비교하기',
  description: '합격을 보장하는 장소 대신 이동 거리, 산행 시간과 난이도로 다섯 방문 후보를 비교하고 시험 일정에 맞춰 계획하는 방법을 안내합니다.',
  alternates: { canonical: '/sansu/articles/exam-mountains' },
  openGraph: {
    type: 'article',
    title: '시험을 앞둔 산행 후보 5곳 — 거리와 체력부터 비교하기',
    description: '시험 준비를 해치지 않는 산행 계획과 다섯 방문 후보의 차이.',
    url: '/sansu/articles/exam-mountains',
  },
};

const PLACES = [
  { name: '팔공산 갓바위', id: 'palgongsan-gatbawi', region: '대구·경산', plan: '관암사와 선본사 중 출발지를 먼저 정하고 돌계단과 하산 시간을 확인합니다.', note: '국가유산과 전승을 살펴보는 방문입니다. 소원의 결과를 보장하지 않습니다.' },
  { name: '관악산', id: 'gwanaksan', region: '서울·경기', plan: '여러 출발지 가운데 이동이 편한 곳을 고르고, 암릉이 포함되는지 확인합니다.', note: '수도권에서도 경로에 따라 체력 부담이 크게 달라집니다.' },
  { name: '북한산', id: 'bukhansan', region: '서울·경기', plan: '공식 탐방로와 입산시간을 먼저 보고 현재 체력에 맞는 구간을 고릅니다.', note: '봉우리 이름만 보고 코스를 정하면 예상보다 긴 산행이 될 수 있습니다.' },
  { name: '계룡산', id: 'gyeryongsan', region: '충남', plan: '집에서 출발지까지 왕복 이동시간과 탐방로 통제 여부를 함께 확인합니다.', note: '장거리 이동이 필요한 경우 시험 준비 일정과 충돌하지 않는지가 우선입니다.' },
  { name: '남산 (서울)', id: 'namsan-seoul', region: '서울', plan: '짧은 산책이 목적이라면 순환로의 출발지와 대중교통을 먼저 확인합니다.', note: '비교적 짧은 동선을 찾더라도 실제 경사와 날씨를 살펴야 합니다.' },
];

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.22 · 2026.10.22 수정"
      title={<>시험을 앞둔 산행 후보 5곳<br />거리와 체력부터 비교하기</>}
      ctaTitle="이동 가능한 지역과 코스를 먼저 골라보세요"
      ctaDesc="띠·산형 추천은 문화적 참고이며 시험 결과와 연결되지 않습니다."
      ctaLabel="산행 후보 찾기"
    >
      <p>시험을 앞두고 기도처나 산을 찾는 사람이 있습니다. 방문이 마음을 정리하는 계기가 될 수는 있지만, 어느 산이 특정 시험에 유리하다는 근거는 없습니다. 여기서는 시험 종류와 오행을 연결하지 않고 <strong>왕복 이동, 산행 부담, 준비 일정</strong>에 따라 후보를 비교합니다.</p>

      <H2>방문 여부를 결정하는 세 기준</H2>
      <ol className="list-decimal ml-5 space-y-2">
        <li><strong>남은 일정.</strong> 시험 전날처럼 수면과 준비 시간이 더 중요한 날에는 장거리 방문을 미룹니다.</li>
        <li><strong>왕복 시간.</strong> 걷는 시간뿐 아니라 집에서 출발지까지 이동·대기·하산 시간을 합칩니다.</li>
        <li><strong>체력과 개방 여부.</strong> 평소 걷지 않은 계단이나 암릉을 무리해서 오르지 않고 공식 통제 공지를 확인합니다.</li>
      </ol>

      <H2>다섯 후보의 실제 차이</H2>
      <div className="not-prose space-y-4">
        {PLACES.map((place) => (
          <section key={place.id} className="rounded-2xl border border-gray-200 p-5 space-y-2">
            <h3 className="font-bold text-gray-900">{place.name} <span className="font-normal text-xs text-gray-500">{place.region}</span></h3>
            <p className="text-sm text-gray-700">{place.plan}</p>
            <p className="text-xs text-gray-500">{place.note}</p>
            <Link href={`/sansu/mountain/${place.id}`} className="inline-block text-sm font-bold text-brand underline underline-offset-2">위치와 예시 코스 보기</Link>
          </section>
        ))}
      </div>
      <p>개운산의 코스 시간과 난이도는 방문 후보를 좁히기 위한 참고값입니다. 실시간 공지나 모든 출발지의 평균값이 아닙니다. 국립공원은 <a href="https://www.knps.or.kr" target="_blank" rel="noopener noreferrer">국립공원공단</a>, 그 밖의 산은 관할 지자체의 최신 안내에서 출발 전 다시 확인하세요.</p>

      <H2>가상 일정에 적용해 보기</H2>
      <p>가상의 수험생 A가 토요일 오전에 모의고사를 보고 다음 주 월요일에도 수업이 있다고 가정해 보겠습니다. A는 유명한 기도처에 가는 것보다 일요일에 필요한 휴식과 이동 가능 시간을 먼저 적습니다. 왕복 이동만으로 하루가 지나간다면 가까운 산책로를 택하거나 방문을 시험 뒤로 미루는 선택이 합리적일 수 있습니다. 이 예시는 어느 산이 합격을 돕는다는 이야기가 아닙니다.</p>
      <Note title="기도와 결과는 별개입니다">방문이 위안이 될 수는 있지만 합격 가능성을 높인다고 말할 수 없습니다. 공부 계획, 건강 상태, 실제 시험 안내를 산행보다 우선하세요.</Note>

      <H2>자주 묻는 질문</H2>
      <div className="not-prose space-y-4">
        <Faq q="시험 직전에 꼭 다녀와야 하나요?">그럴 필요가 없습니다. 이동과 피로가 부담되면 시험이 끝난 뒤 방문하거나 가까운 길을 잠깐 걷는 것으로 충분합니다.</Faq>
        <Faq q="특정 시험에 맞는 산이 있나요?">시험 종류와 산의 오행을 연결해 결과를 예측할 근거는 없습니다. 갈 수 있는 지역과 체력을 기준으로 고르세요.</Faq>
      </div>
    </ArticleShell>
  );
}
