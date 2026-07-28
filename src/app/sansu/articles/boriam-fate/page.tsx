import type { Metadata } from 'next';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

export const metadata: Metadata = {
  title: '남해 보리암: 3대 기도처에서 인연을 비는 법',
  description:
    '이성계가 기도했다는 남해 금산 절벽 위의 암자 보리암. 3대 관음 기도처로 꼽히는 이유와 가는 길, 일출 시간, 인연을 비는 사람들이 지키는 방식을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/boriam-fate' },
  openGraph: {
    type: 'article',
    title: '남해 보리암: 3대 기도처에서 인연을 비는 법',
    description: '금산 절벽 위 암자. 언제 어떻게 찾아야 하는지.',
    url: '/sansu/articles/boriam-fate',
  },
};

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.24"
      title={
        <>
          남해 보리암:
          <br />
          3대 기도처에서 인연을 비는 법
        </>
      }
      ctaTitle="인연운을 부르는 산은 따로 있습니다"
      ctaDesc={
        <>
          수(水)의 기운이 흐르는 산은
          <br />
          관계와 인연의 자리로 읽어 왔습니다.
        </>
      }
      ctaLabel="내 인연 명산 찾기"
    >
      <p>
        경남 남해군 금산(錦山, 705m) 정상 부근, 바다가 내려다보이는 절벽 위에 작은 암자가 있습니다.{' '}
        <strong className="text-gray-900">보리암(菩提庵)</strong>입니다. 양양 낙산사 홍련암, 강화 석모도 보문사와 함께
        우리나라 3대 관음 기도처로 꼽히는 곳입니다.
      </p>
      <p>
        신라 시대 원효대사가 창건했다고 전해지며, 조선을 세우기 전 이성계가 이곳에서 백일기도를 올렸다는 이야기가
        남아 있습니다. 원래 보광산으로 불리던 산이 금산(비단산)이 된 것도 그 기도가 이루어진 뒤 비단을 두르겠다는 약속에서
        비롯됐다는 전설이 따라붙습니다.
      </p>

      <H2 accent="border-blue-500">왜 인연의 기도처로 불리나</H2>
      <p>
        갓바위가 합격과 시험으로 굳어졌다면, 보리암은 인연과 관계 쪽으로 이야기가 모입니다. 이유는 몇 가지가 겹칩니다.
      </p>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">관음 기도처라는 성격</strong> &mdash; 관세음보살은 중생의 어려움을 살피는
          존재로 여겨져, 예로부터 개인의 소원과 관계의 문제를 비는 대상이 되어 왔습니다.
        </li>
        <li>
          <strong className="text-gray-900">바다를 마주한 지형</strong> &mdash; 풍수에서 물은 재물과 인연을 함께
          상징합니다. 산이 바다를 정면으로 안고 있는 지형은 기운이 밖에서 들어오는 자리로 읽힙니다.
        </li>
        <li>
          <strong className="text-gray-900">완만하게 이어지는 능선</strong> &mdash; 금산은 기암이 많지만 전체 인상은
          부드럽게 굽이치는 편이라 수(水)의 성질로 해석됩니다. 지혜·정화·인연에 대응하는 기운입니다.
        </li>
      </ul>

      <H2 accent="border-blue-500">가는 길</H2>
      <p>
        보리암은 산 정상 가까이 있지만 오래 걷지 않고도 닿을 수 있다는 점이 큰 장점입니다. 대표적인 두 가지 방법입니다.
      </p>
      <div className="not-prose space-y-3">
        {[
          {
            n: '1',
            t: '복곡 제2주차장 → 셔틀 또는 도보',
            d: '차로 산 중턱까지 올라간 뒤 마지막 구간만 걷는 방식입니다. 실제 걷는 거리가 짧아 어르신, 아이와 함께 가기에 가장 부담이 없습니다. 성수기에는 주차장이 일찍 마감되므로 오전에 도착하는 편이 안전합니다.',
          },
          {
            n: '2',
            t: '금산탐방지원센터 → 쌍홍문 → 보리암',
            d: '제대로 산행을 하려는 경우입니다. 쌍홍문을 비롯한 금산의 기암 구간을 지나며, 왕복 2~3시간 정도 걸립니다. 경치는 이쪽이 압도적입니다.',
          },
        ].map((c) => (
          <div key={c.n} className="flex gap-3 border border-gray-100 rounded-2xl p-4">
            <span className="shrink-0 grid place-items-center w-6 h-6 rounded-lg bg-[#7C3AED] text-white text-[11px] font-bold">
              {c.n}
            </span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">{c.t}</p>
              <p className="text-[13px] text-gray-600 leading-relaxed">{c.d}</p>
            </div>
          </div>
        ))}
      </div>

      <Note title="주차가 가장 큰 변수입니다">
        보리암은 한려해상국립공원 구역에 속하고, 산 위 주차 공간이 제한적입니다. 주말과 연휴에는 차량 진입이 통제되거나
        대기가 길어질 수 있으니, 출발 전 한려해상국립공원 안내를 확인하고 이른 시간에 도착하는 것을 권합니다.
      </Note>

      <H2 accent="border-blue-500">일출과 계절</H2>
      <p>
        보리암은 남해의 일출 명소로도 유명합니다. 절벽 아래로 상주 은모래비치와 다도해가 펼쳐지고, 그 위로 해가 올라오는
        풍경 때문에 새해 첫날에는 자리를 잡기 어려울 정도로 사람이 몰립니다.
      </p>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">봄·가을</strong> &mdash; 가장 무난합니다. 기온과 시야 모두 좋습니다.
        </li>
        <li>
          <strong className="text-gray-900">여름</strong> &mdash; 남해는 습도가 높습니다. 이른 아침이 아니면 체력 소모가
          큽니다.
        </li>
        <li>
          <strong className="text-gray-900">겨울</strong> &mdash; 눈은 적지만 절벽 위 바람이 매섭습니다. 방풍 상의가
          필수입니다.
        </li>
        <li>
          <strong className="text-gray-900">1월 1일 전후</strong> &mdash; 일출 인파가 극심합니다. 조용히 기도하려는 목적이면
          피하는 편이 낫습니다.
        </li>
      </ul>

      <H2 accent="border-blue-500">인연을 비는 사람들이 지키는 방식</H2>
      <p>
        절대적인 규칙은 없습니다. 다만 오래 다닌 분들 사이에 공통적으로 이야기되는 태도가 있습니다.
      </p>
      <ol className="list-decimal ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">특정 사람을 지목해 빌지 않습니다.</strong> &quot;누구와 이어지게 해 달라&quot;
          보다 &quot;좋은 인연을 알아볼 수 있게 해 달라&quot;는 쪽으로 청하는 것이 이곳의 오랜 방식입니다.
        </li>
        <li>
          <strong className="text-gray-900">서두르지 않습니다.</strong> 도착하자마자 비는 대신, 바다를 한동안 바라보다
          마음이 가라앉은 뒤에 시작합니다.
        </li>
        <li>
          <strong className="text-gray-900">한 번으로 끝내지 않습니다.</strong> 계절이 바뀔 때 다시 찾는 사람이 많습니다.
        </li>
        <li>
          <strong className="text-gray-900">사진보다 시간을 남깁니다.</strong> 좁은 기도 공간에서 촬영에 오래 머무르는 것은
          다른 참배객에게 방해가 됩니다.
        </li>
      </ol>

      <H2 accent="border-blue-500">함께 둘러보기 좋은 곳</H2>
      <p>
        남해까지 간 김에 하루를 채우고 싶다면, 보리암과 동선이 이어지는 곳들이 있습니다. 금산 정상의 봉수대는 보리암에서
        가깝고 시야가 가장 넓습니다. 산 아래 상주은모래비치는 걸어서 바다를 마주하기 좋고, 다랭이마을은 남해 특유의
        계단식 논 풍경으로 잘 알려져 있습니다.
      </p>

      <H2 accent="border-blue-500">자주 묻는 질문</H2>
      <div className="not-prose space-y-4">
        <Faq q="산행을 못 해도 보리암에 갈 수 있나요?">
          가능합니다. 복곡 제2주차장까지 차로 올라가면 실제 걷는 구간이 매우 짧습니다. 다만 마지막 접근로에 계단과 경사가
          있으니 편한 신발은 필요합니다.
        </Faq>
        <Faq q="입장료나 주차료가 있나요?">
          국립공원 구역이며 주차료 및 사찰 관련 요금이 발생할 수 있습니다. 금액과 운영 방식은 변동되므로 방문 전 한려해상
          국립공원 또는 보리암 공지를 확인하시기 바랍니다.
        </Faq>
        <Faq q="갓바위와 보리암 중 어디가 더 영험한가요?">
          비교할 성질이 아닙니다. 전통적으로 갓바위는 시험·명예, 보리암은 인연·관계 쪽으로 이야기가 쌓여 왔을 뿐입니다.
          지금 자신에게 필요한 것이 무엇인지가 선택의 기준이 됩니다.
        </Faq>
      </div>
    </ArticleShell>
  );
}
