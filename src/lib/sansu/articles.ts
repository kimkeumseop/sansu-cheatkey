/**
 * 매거진 아티클 목록. 목록 페이지와 sitemap이 각자 배열을 들고 있어
 * 글을 추가할 때마다 어긋나던 것을 이 파일 한 곳으로 모았다.
 * 새 글을 쓰면 여기에 한 줄 추가하면 목록·사이트맵에 함께 반영된다.
 */
export type Article = {
  slug: string;
  title: string;
  desc: string;
  date: string; // 표시용 (YYYY.MM.DD)
  lastModified: string; // sitemap용 (ISO)
};

export const ARTICLES: Article[] = [
  {
    slug: 'gatbawi-prayer',
    title: '팔공산 갓바위 방문 안내 — 관암사·선본사 길과 확인할 정보',
    desc: '공식 탐방로와 국가유산 자료를 바탕으로 두 출발지와 하산 계획을 비교합니다.',
    date: '2026.07.26',
    lastModified: '2026-10-22',
  },
  {
    slug: 'boriam-fate',
    title: '남해 보리암 방문 안내 — 복곡 주차장과 금산 산책 코스',
    desc: '남해군 관광 자료를 바탕으로 주차장과 금산의 2㎞ 산책 동선을 비교합니다.',
    date: '2026.07.24',
    lastModified: '2026-10-22',
  },
  {
    slug: 'exam-mountains',
    title: '시험을 앞둔 산행 후보 5곳 — 거리와 체력부터 비교하기',
    desc: '시험 결과를 점치는 대신 이동 거리와 산행 부담으로 다섯 방문 후보를 비교합니다.',
    date: '2026.07.22',
    lastModified: '2026-10-22',
  },
  {
    slug: 'seasonal-mountains',
    title: '계절별 명산 고르는 법: 봄·여름·가을·겨울 산행 기준',
    desc: '같은 산도 계절에 따라 완전히 다른 산이 됩니다. 입산 통제 시기와 계절별 안전 기준까지.',
    date: '2026.07.19',
    lastModified: '2026-07-19',
  },
  {
    slug: 'beginner-hiking',
    title: '첫 산행 준비물 체크리스트: 초보가 가장 많이 하는 실수 7가지',
    desc: '등산화부터 행동식까지, 처음 산에 가는 사람이 실제로 챙겨야 하는 것만 골랐습니다.',
    date: '2026.07.16',
    lastModified: '2026-07-16',
  },
  {
    slug: 'prayer-etiquette',
    title: '기도터 예절과 산행 매너: 하지 말아야 할 것들',
    desc: '사찰 기도처에서의 기본 예의, 다른 사람의 기도를 방해하지 않는 법, 산에서 지켜야 할 최소한의 규칙.',
    date: '2026.07.13',
    lastModified: '2026-07-13',
  },
  {
    slug: 'myeongdang',
    title: '명당(明堂)이란 무엇인가: 용·혈·사·수로 읽는 풍수 기초',
    desc: '풍수의 네 가지 기본 개념을 통해, 옛사람들이 좋은 자리를 어떻게 찾았는지 알아봅니다.',
    date: '2026.07.10',
    lastModified: '2026-07-10',
  },
  {
    slug: 'five-elements',
    title: '산의 모습을 다섯 가지로 읽는 오성체(五星體) 가이드',
    desc: '목, 화, 토, 금, 수로 산형을 비유하는 전통적 분류와 산행 정보에 적용할 때의 한계.',
    date: '2026.09.23',
    lastModified: '2026-09-23',
  },
  {
    slug: 'mountain-healing',
    title: '지쳤을 때 부담을 줄이는 산행 계획',
    desc: '코스 길이, 쉼터, 기상과 통제 정보를 확인하는 순서와 준비물.',
    date: '2026.09.23',
    lastModified: '2026-09-23',
  },
  {
    slug: 'zodiac-mountain',
    title: '띠와 산형을 연결하는 전통적 해석',
    desc: '태어난 해를 바탕으로 산을 고르는 방식과 실제 산행에 적용할 때의 한계.',
    date: '2026.09.23',
    lastModified: '2026-09-23',
  },
];
