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
    title: '팔공산 갓바위, 소원 하나는 들어준다는 기도처 완전 가이드',
    desc: '합격 기도의 대명사. 가는 길과 계단, 기도하는 순서, 사람이 가장 몰리는 시기까지 정리했습니다.',
    date: '2026.07.26',
    lastModified: '2026-07-26',
  },
  {
    slug: 'boriam-fate',
    title: '남해 보리암: 3대 기도처에서 인연을 비는 법',
    desc: '이성계가 기도했다는 금산 절벽 위 암자. 언제 어떻게 찾아야 하는지 실제 동선 중심으로 안내합니다.',
    date: '2026.07.24',
    lastModified: '2026-07-24',
  },
  {
    slug: 'exam-mountains',
    title: '합격 기원 명산 5곳: 시험을 앞두고 어디로 가야 할까',
    desc: '갓바위부터 관악산 연주대까지. 시험 유형별로 어울리는 산과 방문 시기를 정리했습니다.',
    date: '2026.07.22',
    lastModified: '2026-07-22',
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
    title: '당신의 운명을 바꾸는 산의 5가지 형태: 오성체(五星體) 가이드',
    desc: '목, 화, 토, 금, 수 - 산의 모양에 따라 달라지는 풍수적 기운과 나에게 맞는 산을 찾는 방법.',
    date: '2026.05.31',
    lastModified: '2026-05-31',
  },
  {
    slug: 'mountain-healing',
    title: '왜 힘들 때 산에 가야 할까? 과학과 풍수가 말하는 산의 치유력',
    desc: '피톤치드와 지기(地氣)의 만남. 마음의 정화가 필요할 때 꼭 방문해야 할 명소들.',
    date: '2026.05.30',
    lastModified: '2026-05-30',
  },
  {
    slug: 'zodiac-mountain',
    title: '12지신과 궁합이 맞는 명산: 띠별로 다른 영험한 장소들',
    desc: '자신과 어울리는 띠의 기운을 가진 산에서 소원을 빌면 더 잘 이루어지는 이유.',
    date: '2026.05.29',
    lastModified: '2026-05-29',
  },
];
