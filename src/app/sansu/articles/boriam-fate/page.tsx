// 남해 보리암의 공식 방문 자료와 산책 동선을 안내하는 글
import type { Metadata } from 'next';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

const BORIAM_INFO = 'https://www.namhae.go.kr/tour/00917/00085.web';
const GEUMSAN_ROUTE = 'https://www.namhae.go.kr/tour/00007/00042.web?amode=view&idx=25';

export const metadata: Metadata = {
  title: '남해 보리암 방문 안내 — 복곡 주차장과 금산 산책 코스',
  description: '남해군 관광 안내를 바탕으로 보리암의 위치, 복곡 주차장과 금산바래길 동선, 출발 전 확인할 사항을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/boriam-fate' },
  openGraph: {
    type: 'article',
    title: '남해 보리암 방문 안내 — 복곡 주차장과 금산 산책 코스',
    description: '남해군의 공식 방문 자료를 바탕으로 보리암과 금산의 동선을 비교합니다.',
    url: '/sansu/articles/boriam-fate',
  },
};

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.24 · 2026.10.22 수정"
      title={<>남해 보리암 방문 안내<br />주차장과 금산 산책 동선 비교하기</>}
      ctaTitle="다음 방문 후보의 이동 조건도 살펴보세요"
      ctaDesc="문화적 이야기와 실제 코스 정보를 나눠 비교할 수 있습니다."
      ctaLabel="산행 후보 찾기"
    >
      <p>보리암은 경남 남해군 금산에 있는 암자입니다. 남해군 문화관광은 위치를 <strong>보리암로 665</strong>로 안내하고, 복곡 제1·2주차장을 주차 정보로 제시합니다. 이성계의 기도 이야기도 남해군 자료에 전승으로 소개되어 있습니다. 그 이야기는 역사적 방문 동기를 설명하지만 개인의 소원이나 인연이 이루어진다는 근거는 아닙니다.</p>

      <H2>목적에 맞게 동선을 먼저 정하세요</H2>
      <p>보리암 자체를 둘러볼지, 금산의 여러 지점을 걸을지에 따라 필요한 시간이 달라집니다. 남해군의 <a href={GEUMSAN_ROUTE} target="_blank" rel="noopener noreferrer">남해 12경 안내</a>에는 보리암주차장에서 시작해 보리암·금산산장·단군성전·화엄봉을 거쳐 주차장으로 돌아오는 <strong>금산바래길 지선 3코스 약 2㎞</strong>가 소개됩니다.</p>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>보리암 중심 방문.</strong> 복곡 주차장과 보리암 사이의 현장 이동 방식, 마지막 도보 구간과 계단을 확인합니다. 주차장에 도착했다고 바로 암자에 닿는 것은 아닙니다.</li>
        <li><strong>금산 산책을 더하는 방문.</strong> 남해군이 소개한 2㎞ 순환 동선을 지도에서 먼저 확인합니다. 짧은 거리라도 경사·기상·동행자의 체력에 따라 필요한 시간은 달라집니다.</li>
      </ul>
      <p>주차 가능 대수, 차량 진입 방식, 이용료와 운영 시간은 바뀔 수 있습니다. 출발 직전에 <a href={BORIAM_INFO} target="_blank" rel="noopener noreferrer">남해군 보리암 안내</a>와 현장 운영 공지를 다시 확인하세요. 오래된 글에 적힌 셔틀·요금·혼잡 시간만 믿고 일정을 잡지 않는 편이 좋습니다.</p>

      <H2>하루 방문을 계획하는 네 단계</H2>
      <ol className="list-decimal ml-5 space-y-2">
        <li>보리암만 볼지 2㎞ 산책 코스까지 걸을지 정합니다.</li>
        <li>복곡 제1·2주차장과 실제 출발 지점을 지도에서 구분합니다.</li>
        <li>이동·휴식·하산 시간을 더해 일몰 전에 돌아올 수 있는지 확인합니다.</li>
        <li>현장의 개방·기상 공지가 계획과 다르면 코스를 줄이거나 방문일을 바꿉니다.</li>
      </ol>
      <Note title="전승과 방문 정보를 구분합니다">보리암은 기도처로 알려져 있지만 특정 장소가 인연이나 건강에 영향을 준다는 사실은 확인되지 않았습니다. 이 글은 종교적 효과의 순위가 아니라 이동 경로와 방문 준비를 설명합니다.</Note>

      <H2>자료와 확인 범위</H2>
      <p><a href={BORIAM_INFO} target="_blank" rel="noopener noreferrer">남해군 보리암 소개</a>에서 주소와 주차장 정보를, <a href={GEUMSAN_ROUTE} target="_blank" rel="noopener noreferrer">남해군 금산 안내</a>에서 2㎞ 산책 동선을 확인했습니다. 2026년 10월 22일에 자료를 다시 살폈지만, 현장 조사나 실시간 주차 정보는 제공하지 않습니다.</p>

      <H2>자주 묻는 질문</H2>
      <div className="not-prose space-y-4">
        <Faq q="복곡 주차장에서 바로 보리암에 도착하나요?">주차와 마지막 도보는 별개입니다. 제1·2주차장의 위치와 실제 보행 구간을 출발 전 지도에서 확인하세요.</Faq>
        <Faq q="금산 산책 코스는 누구나 쉬운가요?">남해군이 약 2㎞ 동선을 소개하지만 거리만으로 난이도를 판단할 수는 없습니다. 경사·계단·날씨와 동행자의 체력을 함께 고려하세요.</Faq>
        <Faq q="기도 방식이나 횟수가 정해져 있나요?">이 글은 특정 기도법을 권하지 않습니다. 현장 안내와 다른 방문자의 동선을 존중하고, 개인적 소망은 방문 효과가 보장된 정보와 구분해 주세요.</Faq>
      </div>
    </ArticleShell>
  );
}
