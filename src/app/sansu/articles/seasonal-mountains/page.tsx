import type { Metadata } from 'next';
import ArticleShell, { Faq, H2, Note } from '@/components/sansu/ArticleShell';

export const metadata: Metadata = {
  title: '계절별 명산 고르는 법: 봄·여름·가을·겨울 산행 기준',
  description:
    '같은 산도 계절에 따라 완전히 다른 산이 됩니다. 계절별로 어울리는 산형과 코스, 산불 조심 기간 입산 통제, 계절마다 달라지는 안전 기준을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/seasonal-mountains' },
  openGraph: {
    type: 'article',
    title: '계절별 명산 고르는 법: 봄·여름·가을·겨울 산행 기준',
    description: '같은 산도 계절에 따라 완전히 다른 산이 됩니다.',
    url: '/sansu/articles/seasonal-mountains',
  },
};

const SEASONS = [
  {
    name: '봄',
    period: '3~5월',
    accent: 'border-green-500',
    chip: 'bg-green-50 text-green-700 border-green-100',
    element: '목(木)',
    pick: '나무가 울창한 목형산, 계곡을 낀 완만한 산',
    why: '만물이 올라오는 계절이라 시작·성장과 결이 맞습니다. 새 학기, 새 직장, 새로 배우기 시작한 일이 있다면 봄 산행이 가장 자연스럽게 어울립니다.',
    caution:
      '가장 조심해야 할 계절입니다. 산불 조심 기간(대체로 2월 초~5월 중순)에 입산 통제 구간이 광범위하게 생깁니다. 또 낮과 밤의 기온 차가 10도 이상 벌어지고, 응달과 고지대에는 잔설과 결빙이 남아 있습니다.',
    gear: '방풍 상의, 아이젠(3~4월 고산), 마스크(황사·꽃가루)',
  },
  {
    name: '여름',
    period: '6~8월',
    accent: 'border-blue-500',
    chip: 'bg-blue-50 text-blue-700 border-blue-100',
    element: '수(水)',
    pick: '계곡 산행, 숲이 짙은 저지대 산',
    why: '물가를 따라 걷는 계절입니다. 피톤치드 농도가 가장 높은 시기이기도 해서, 회복이 목적이라면 여름 숲길이 좋은 선택입니다.',
    caution:
      '탈수와 온열질환이 최대 위험입니다. 오전 10시~오후 3시는 능선 산행을 피하세요. 여름 소나기와 장마철 계곡물은 순식간에 불어납니다. 계곡을 건너는 코스는 비 예보가 있으면 아예 가지 않는 것이 원칙입니다.',
    gear: '물 넉넉히(1인 1.5L 이상), 염분 보충 간식, 여벌 양말, 모자',
  },
  {
    name: '가을',
    period: '9~11월',
    accent: 'border-amber-500',
    chip: 'bg-amber-50 text-amber-700 border-amber-100',
    element: '금(金)',
    pick: '조망이 트인 능선, 단풍이 드는 대표 명산',
    why: '거두고 정리하는 계절입니다. 한 해를 결산하거나 큰 결정을 앞두고 있다면 시야가 넓게 트인 능선에 오르는 것이 어울립니다. 1년 중 시야와 기온이 가장 좋은 시기입니다.',
    caution:
      '해가 빠르게 짧아집니다. 여름과 같은 감각으로 출발했다가 하산 중 어두워지는 사고가 이 계절에 가장 많습니다. 11월부터는 다시 가을철 산불 조심 기간이 시작됩니다.',
    gear: '헤드랜턴(필수), 얇은 보온 상의, 장갑',
  },
  {
    name: '겨울',
    period: '12~2월',
    accent: 'border-slate-400',
    chip: 'bg-slate-100 text-slate-700 border-slate-200',
    element: '수(水)',
    pick: '눈이 적은 저지대 산, 남향 코스',
    why: '가장 조용한 계절입니다. 사람이 적어 기도처를 찾기에는 오히려 좋은 시기입니다. 정초에 한 해 운을 비는 산행도 이 계절에 집중됩니다.',
    caution:
      '저체온증과 실족이 위험 요소입니다. 눈이 덮이면 등산로 흔적이 사라져 길을 잃기 쉽습니다. 해가 짧아 실질적인 산행 가능 시간은 5~6시간 남짓입니다.',
    gear: '아이젠·스패츠, 보온병, 방한 장갑, 여벌 옷(땀에 젖은 옷은 곧바로 저체온으로 이어집니다)',
  },
];

export default function Page() {
  return (
    <ArticleShell
      date="2026.07.19"
      title={
        <>
          계절별 명산 고르는 법:
          <br />
          봄·여름·가을·겨울 산행 기준
        </>
      }
    >
      <p>
        같은 산도 계절이 바뀌면 다른 산이 됩니다. 여름에 시원했던 계곡 코스가 겨울에는 가장 위험한 구간이 되고, 봄에
        걸었던 능선이 가을에는 전혀 다른 시야를 보여 줍니다. 산을 고를 때 산의 이름만큼 중요한 것이 &apos;지금이 몇
        월인가&apos;입니다.
      </p>
      <p>
        풍수에서도 계절은 오행과 짝을 이룹니다. 봄은 목(木), 여름은 화(火), 가을은 금(金), 겨울은 수(水)에 해당하고,
        환절기는 토(土)가 맡습니다. 계절에 맞는 산형을 고른다는 것은 결국 그 시기의 자연 조건에 맞는 코스를 고르는 일과
        크게 다르지 않습니다.
      </p>

      {SEASONS.map((s) => (
        <section key={s.name} className={`not-prose border-l-4 ${s.accent} pl-4 py-1 mt-10`}>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <h2 className="text-xl font-bold text-gray-900">{s.name}</h2>
            <span className="text-[11px] font-bold text-gray-400">{s.period}</span>
            <span className={`text-[11px] font-bold px-2 py-1 rounded-full border ${s.chip}`}>{s.element}</span>
          </div>

          <div className="space-y-3 text-[14px] text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">어울리는 산</strong>
              <br />
              {s.pick}
            </p>
            <p>
              <strong className="text-gray-900">왜 이 계절인가</strong>
              <br />
              {s.why}
            </p>
            <p className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-[13px] text-rose-900">
              <strong>주의할 점</strong>
              <br />
              {s.caution}
            </p>
            <p className="text-[13px] text-gray-600">
              <strong className="text-gray-800">챙길 것</strong> · {s.gear}
            </p>
          </div>
        </section>
      ))}

      <H2>산불 조심 기간을 먼저 확인하세요</H2>
      <p>
        계절 산행에서 가장 많이 겪는 낭패는 날씨가 아니라 <strong className="text-gray-900">입산 통제</strong>입니다.
        전국적으로 봄철(대략 2월~5월 중순)과 가을철(대략 11월~12월 중순)에 산불 조심 기간이 운영되고, 이 기간에는 일부
        등산로와 능선 구간이 폐쇄됩니다.
      </p>
      <Note title="확인하는 방법">
        국립공원 구역은 국립공원공단 안내, 그 외의 산은 관할 시·군·구청 또는 산림청 공지에서 확인할 수 있습니다. 통제 구간과
        기간은 해마다, 지역마다 다르므로 &quot;작년에 열려 있었다&quot;는 기준은 위험합니다. 출발 전날 한 번 확인하는
        습관을 들이세요.
      </Note>

      <H2>계절 무관 원칙 4가지</H2>
      <ol className="list-decimal ml-5 space-y-2">
        <li>
          <strong className="text-gray-900">일몰 2시간 전 하산 시작.</strong> 산은 도심보다 훨씬 빨리 어두워집니다. 계절에
          따라 일몰 시각이 두 시간 이상 차이 난다는 점을 매번 새로 계산하세요.
        </li>
        <li>
          <strong className="text-gray-900">헤드랜턴은 사계절 상비.</strong> 밤 산행 계획이 없어도 넣어 두는 물건입니다.
        </li>
        <li>
          <strong className="text-gray-900">행선지와 하산 예정 시각을 알리기.</strong> 혼자 가는 경우 특히 중요합니다.
        </li>
        <li>
          <strong className="text-gray-900">정규 등산로 이탈 금지.</strong> 국가지점번호 표지판을 지날 때 눈에 담아 두면
          사고 시 위치 전달이 빨라집니다.
        </li>
      </ol>

      <H2>자주 묻는 질문</H2>
      <div className="not-prose space-y-4">
        <Faq q="기도하러 가기 가장 좋은 계절이 있나요?">
          전통적으로는 정초와 초하루·보름에 기도객이 몰리지만, 계절에 따라 효험이 다르다는 근거는 없습니다. 오히려 사람이
          적어 조용한 겨울 평일이 차분하게 머물기에는 낫습니다.
        </Faq>
        <Faq q="초보인데 겨울 산행이 가능할까요?">
          가능하지만 조건이 있습니다. 눈이 적은 낮은 산, 남향 코스, 왕복 3시간 이내, 그리고 아이젠. 이 네 가지가 갖춰지지
          않으면 미루는 편이 좋습니다.
        </Faq>
        <Faq q="장마철에는 아예 가지 말아야 하나요?">
          계곡을 건너거나 계곡을 따라가는 코스는 피하세요. 상류에 내린 비로 물이 갑자기 불어나는 일이 실제로 자주
          발생합니다. 능선 코스도 낙뢰 위험이 있어 예보를 반드시 확인해야 합니다.
        </Faq>
      </div>
    </ArticleShell>
  );
}
