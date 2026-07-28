import type { Metadata } from 'next';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

export const metadata: Metadata = {
  title: '첫 산행 준비물 체크리스트: 초보가 가장 많이 하는 실수 7가지',
  description:
    '등산화부터 행동식, 헤드랜턴까지 처음 산에 가는 사람이 실제로 챙겨야 하는 것과, 초보가 반복해서 겪는 실수 7가지를 정리했습니다.',
  alternates: { canonical: '/sansu/articles/beginner-hiking' },
  openGraph: {
    type: 'article',
    title: '첫 산행 준비물 체크리스트: 초보가 가장 많이 하는 실수 7가지',
    description: '처음 산에 가는 사람이 실제로 챙겨야 하는 것만.',
    url: '/sansu/articles/beginner-hiking',
  },
};

const MISTAKES = [
  {
    t: '새 등산화를 첫 산행에 신는다',
    d: '가장 흔하고 가장 아픈 실수입니다. 새 신발은 발에 맞춰지기까지 시간이 걸립니다. 사자마자 산에 가면 물집이 거의 확실합니다. 동네를 며칠 걸어 길들인 뒤 산에 신고 가세요.',
  },
  {
    t: '면 티셔츠를 입는다',
    d: '면은 땀을 머금고 마르지 않습니다. 능선에 올라 바람을 맞는 순간 젖은 면은 체온을 빠르게 빼앗습니다. 여름에도 기능성 소재를 입어야 하는 이유입니다.',
  },
  {
    t: '물을 적게 가져간다',
    d: '무게를 줄이려다 벌어지는 일입니다. 왕복 3시간 기준 1인 1L 이상, 여름에는 1.5~2L가 기본입니다. 정상에 매점이 있을 거라는 가정은 하지 마세요.',
  },
  {
    t: '내려오는 시간을 계산하지 않는다',
    d: '초보자가 가장 많이 놓치는 부분입니다. 하산은 오를 때의 70~80% 시간이 걸리고, 무릎에는 더 큰 부담이 갑니다. 정상에서 “이제 다 왔다”고 생각하면 안 됩니다.',
  },
  {
    t: '헤드랜턴을 두고 간다',
    d: '“어두워지기 전에 내려올 건데”라는 생각이 사고로 이어집니다. 산에서는 예정보다 늦어지는 일이 흔하고, 해가 지면 5분 만에 발밑이 보이지 않습니다. 무게도 부피도 작으니 항상 넣어 두세요.',
  },
  {
    t: '남의 속도에 맞춰 걷는다',
    d: '첫 산행에서 숨이 턱까지 차오르면 그 뒤로 산이 싫어집니다. 옆 사람과 대화가 가능한 속도가 자기 페이스입니다. 일행이 있다면 가장 느린 사람 기준으로 갑니다.',
  },
  {
    t: '길이 아닌 곳으로 질러간다',
    d: '지름길처럼 보이는 샛길은 대부분 지름길이 아닙니다. 조난 신고의 상당수가 정규 등산로 이탈에서 시작됩니다. 리본과 이정표를 따라가세요.',
  },
];

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.16"
      title={
        <>
          첫 산행 준비물 체크리스트:
          <br />
          초보가 많이 하는 실수 7가지
        </>
      }
      ctaTitle="첫 산행, 어느 산으로 갈까요?"
      ctaDesc={
        <>
          난이도와 목적에 맞는 코스까지
          <br />
          함께 안내해 드립니다.
        </>
      }
      ctaLabel="입문용 명산 추천받기"
    >
      <p>
        처음 산에 가기로 마음먹으면 제일 먼저 검색하는 것이 준비물입니다. 그런데 검색 결과는 대개 전문 장비 목록이라
        시작하기 전부터 부담스러워집니다. 결론부터 말하면, 왕복 3시간 안쪽의 산에 가는 데 필요한 것은 생각보다 적습니다.
      </p>

      <H2 accent="border-green-600">꼭 필요한 것</H2>
      <div className="not-prose space-y-3 my-4">
        {[
          ['발에 맞는 운동화 또는 등산화', '가장 중요한 한 가지입니다. 바닥이 딱딱하고 미끄러운 신발만 아니면 처음에는 러닝화도 괜찮습니다. 다만 바위가 많은 산이라면 접지력이 좋은 등산화를 권합니다.'],
          ['물 1L 이상', '작은 병 두 개로 나눠 담으면 무게 배분이 낫습니다.'],
          ['간단한 행동식', '초콜릿, 견과류, 에너지바처럼 바로 먹을 수 있는 것. 저혈당은 산에서 판단력을 떨어뜨립니다.'],
          ['방풍이 되는 얇은 겉옷', '능선의 체감 온도는 들머리보다 5~10도 낮습니다. 여름에도 챙기세요.'],
          ['헤드랜턴 또는 손전등', '쓸 일이 없기를 바라며 넣어 두는 물건입니다.'],
          ['휴대폰과 보조배터리', '지도 앱과 비상 연락용. 추위에서 배터리가 급격히 닳는다는 점을 감안하세요.'],
        ].map(([t, d], i) => (
          <div key={i} className="flex gap-3 border border-gray-100 rounded-2xl p-4">
            <span className="shrink-0 grid place-items-center w-6 h-6 rounded-lg bg-green-600 text-white text-[11px] font-bold">
              ✓
            </span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">{t}</p>
              <p className="text-[13px] text-gray-600 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>

      <H2 accent="border-slate-400">있으면 좋은 것</H2>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">등산 스틱</strong> &mdash; 하산 시 무릎 부담을 크게 줄여 줍니다. 무릎이 약한
          분에게는 사실상 필수입니다.
        </li>
        <li>
          <strong className="text-gray-900">여벌 양말</strong> &mdash; 젖은 양말만 갈아 신어도 컨디션이 달라집니다.
        </li>
        <li>
          <strong className="text-gray-900">작은 배낭(20~30L)</strong> &mdash; 손에 들고 오르면 균형이 무너집니다.
        </li>
        <li>
          <strong className="text-gray-900">모자와 자외선 차단제</strong> &mdash; 능선은 그늘이 없습니다.
        </li>
        <li>
          <strong className="text-gray-900">반창고·진통제</strong> &mdash; 물집과 잔부상에 대비합니다.
        </li>
      </ul>

      <Note title="처음부터 사지 않아도 됩니다">
        등산복 한 벌을 갖춰 입고 시작해야 한다는 부담을 가질 필요는 없습니다. 운동복에 운동화, 물 한 병으로 낮은 산을 몇
        번 다녀본 뒤, 자신에게 정말 부족했던 것부터 하나씩 채우는 순서가 훨씬 합리적입니다.
      </Note>

      <H2 accent="border-rose-400">초보가 가장 많이 하는 실수 7가지</H2>
      <div className="not-prose space-y-3 my-4">
        {MISTAKES.map((m, i) => (
          <div key={i} className="flex gap-3 border border-gray-100 rounded-2xl p-4">
            <span className="shrink-0 grid place-items-center w-6 h-6 rounded-lg bg-rose-500 text-white text-[11px] font-bold">
              {i + 1}
            </span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">{m.t}</p>
              <p className="text-[13px] text-gray-600 leading-relaxed">{m.d}</p>
            </div>
          </div>
        ))}
      </div>

      <H2 accent="border-[#7C3AED]">첫 산은 어떻게 고를까</H2>
      <p>기준은 세 가지면 충분합니다.</p>
      <ol className="list-decimal ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">왕복 3시간 이내.</strong> 첫 산행에서 5시간짜리 코스를 잡으면 다음이
          없습니다.
        </li>
        <li>
          <strong className="text-gray-900">대중교통으로 접근 가능한 곳.</strong> 들머리까지 가는 데 지치면 산행 전에 이미
          체력이 절반입니다.
        </li>
        <li>
          <strong className="text-gray-900">사람이 어느 정도 다니는 산.</strong> 초보에게는 인적이 드문 산보다 등산객이
          꾸준한 산이 안전합니다.
        </li>
      </ol>
      <p>
        수도권이라면 관악산 과천향교 코스, 북한산 둘레길 구간, 청계산처럼 대중교통이 닿고 코스가 잘 정비된 산부터
        시작하는 것이 무난합니다.
      </p>

      <H2 accent="border-[#7C3AED]">산행 당일 순서</H2>
      <ol className="list-decimal ml-5 space-y-2">
        <li>전날 저녁 날씨와 일몰 시각, 입산 통제 여부를 확인합니다.</li>
        <li>가는 산과 코스, 하산 예정 시각을 가족이나 친구에게 알립니다.</li>
        <li>출발 전 10분 정도 가볍게 몸을 풉니다. 특히 발목과 무릎.</li>
        <li>처음 20분은 일부러 천천히 걷습니다. 초반 페이스가 전체를 좌우합니다.</li>
        <li>30~40분마다 짧게 쉬며 물을 조금씩 마십니다. 한 번에 몰아 마시지 않습니다.</li>
        <li>정상에서는 오래 머물지 않습니다. 땀이 식으면 급격히 추워집니다.</li>
        <li>하산은 보폭을 좁게, 무릎을 살짝 굽힌 채 내려옵니다.</li>
      </ol>

      <H2 accent="border-[#7C3AED]">자주 묻는 질문</H2>
      <div className="not-prose space-y-4">
        <Faq q="체력이 정말 없는데 가능할까요?">
          가능합니다. 관건은 산의 높이가 아니라 코스 선택입니다. 완만한 둘레길 구간부터 시작해 서서히 늘려 가면 됩니다.
          첫날 정상에 못 가도 아무 문제 없습니다.
        </Faq>
        <Faq q="혼자 가도 괜찮나요?">
          사람이 꾸준히 다니는 산의 정규 코스라면 괜찮습니다. 다만 행선지와 하산 예정 시각을 반드시 누군가에게 알리고,
          배터리를 충분히 확보하세요.
        </Faq>
        <Faq q="등산화는 얼마짜리를 사야 하나요?">
          가격보다 발에 맞는지가 훨씬 중요합니다. 반드시 신어 보고 사고, 오후에 발이 부었을 때 신어 보는 것이 좋습니다.
          내리막에서 발가락이 앞에 닿지 않을 정도의 여유가 필요합니다.
        </Faq>
        <Faq q="산에서 길을 잃으면 어떻게 하나요?">
          왔던 길을 되짚어 마지막으로 확실했던 지점까지 돌아가는 것이 원칙입니다. 내려가는 방향이 안전해 보여도 계곡으로
          내려가는 것은 위험합니다. 판단이 서지 않으면 그 자리에서 119에 신고하고, 주변 국가지점번호 표지판을 찾아
          알리세요.
        </Faq>
      </div>
    </ArticleShell>
  );
}
