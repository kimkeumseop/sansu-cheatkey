import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '산의 5가지 형태: 오성체(五星體) 완전 가이드',
  description:
    '목형산·화형산·토형산·금형산·수형산 — 산의 모양에 따라 달라지는 풍수 기운과, 눈으로 산형을 구분하는 법, 내 사주에 맞는 산형을 고르는 방법을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/five-elements' },
  openGraph: {
    type: 'article',
    title: '당신의 운명을 바꾸는 산의 5가지 형태: 오성체 가이드',
    description: '목, 화, 토, 금, 수 — 산의 모양에 따라 달라지는 풍수적 기운.',
    url: '/sansu/articles/five-elements',
  },
};

const SHAPES = [
  {
    n: '1',
    name: '목형산(木形山)',
    tag: '성장의 기운',
    color: 'border-green-600',
    silhouette: '위로 곧게 솟은 원기둥 / 붓끝',
    look: '산 전체가 위로 길쭉하게 뻗어 있고, 정상부는 뾰족하지 않고 둥글게 마무리됩니다. 옆에서 보면 붓을 세워 둔 것 같아 예부터 문필봉(文筆峰)이라 불렸습니다.',
    means: '공부, 학문, 시험, 문학, 예술, 기획',
    when: '수험 생활이 길어질 때, 논문이나 창작물이 막혔을 때, 새로 배우기 시작한 것이 있을 때',
    caution: '목형산은 기운이 위로만 뻗어 추진력을 주지는 않습니다. 결단이 필요한 시기라면 화형산을 함께 찾는 편이 낫습니다.',
  },
  {
    n: '2',
    name: '화형산(火形山)',
    tag: '돌파의 기운',
    color: 'border-red-500',
    silhouette: '여러 갈래로 갈라진 불꽃 / 톱니',
    look: '봉우리가 하나로 정리되지 않고 여러 개로 갈라지며, 날카로운 바위(암릉)가 드러나 있습니다. 능선이 톱니처럼 오르내리는 것이 특징입니다. 서울 관악산이 교과서적인 화형산입니다.',
    means: '결단, 돌파, 변화, 승부, 이직, 합격',
    when: '몇 달째 같은 자리에 머물러 있다고 느낄 때, 결정을 미루고 있을 때, 승부처를 앞두고 있을 때',
    caution: '화기(火氣)가 센 산은 이미 조급하고 예민한 상태에서 오르면 오히려 소모적입니다. 번아웃 상태라면 토형산이나 수형산을 먼저 권합니다.',
  },
  {
    n: '3',
    name: '토형산(土形山)',
    tag: '안정의 기운',
    color: 'border-yellow-500',
    silhouette: '정상이 평평한 사다리꼴 / 일(一)자',
    look: '정상부가 뾰족하지 않고 넓고 평평합니다. 멀리서 보면 지붕이나 밥상을 엎어 놓은 듯한 일(一)자 실루엣을 그립니다. 산세가 두툼하고 흙이 깊습니다.',
    means: '재물, 기반, 가정, 신용, 부동산, 어머니',
    when: '사업이나 살림의 기반을 다질 때, 이사·계약을 앞두고 있을 때, 가족의 평안을 빌 때',
    caution: '변화를 만들어 내는 산은 아닙니다. 지금 상태를 굳히고 싶을 때 유효하며, 판을 바꿔야 할 때는 맞지 않습니다.',
  },
  {
    n: '4',
    name: '금형산(金形山)',
    tag: '귀인의 기운',
    color: 'border-slate-400',
    silhouette: '종을 엎어 놓은 반원 / 가마솥',
    look: '전체가 둥글고 단단해 보이며, 노출된 바위보다 흙과 숲이 산을 덮고 있습니다. 부드러운 곡선이지만 가볍지 않고 묵직한 인상을 줍니다.',
    means: '명예, 승진, 귀인, 리더십, 조직운',
    when: '승진·인사를 앞두고 있을 때, 나를 끌어 줄 사람이 필요할 때, 조직에서 인정받고 싶을 때',
    caution: '금형산의 기운은 천천히 쌓입니다. 한 번 다녀와서 즉각적인 변화를 기대하기보다 정기적으로 찾는 편이 어울립니다.',
  },
  {
    n: '5',
    name: '수형산(水形山)',
    tag: '치유의 기운',
    color: 'border-blue-500',
    silhouette: '물결처럼 이어지는 완만한 연봉',
    look: '하나의 뚜렷한 정상 대신, 비슷한 높이의 완만한 봉우리가 물결치듯 옆으로 이어집니다. 계곡이 깊고 물이 마르지 않는 산이 많습니다.',
    means: '지혜, 인연, 정화, 회복, 유연함',
    when: '사람에게 상처받았을 때, 마음이 소진됐을 때, 새로운 인연이나 관계의 전환이 필요할 때',
    caution: '기운이 부드러운 만큼 추진력은 약합니다. 회복이 끝난 뒤에는 목형산·화형산으로 넘어가는 흐름이 자연스럽습니다.',
  },
];

export default function ArticlePage() {
  return (
    <article className="p-6 pt-12">
      <Link href="/sansu/articles" className="text-xs text-[#7C3AED] font-bold mb-4 block hover:underline">
        ← 목록으로 돌아가기
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          당신의 운명을 바꾸는 산의 5가지 형태:
          <br />
          오성체(五星體) 가이드
        </h1>
        <p className="text-sm text-gray-500">2026.05.31 · 개운산 편집팀</p>
      </header>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          전통 풍수지리에서는 산을 단순히 흙과 돌의 덩어리로 보지 않았습니다. 산은 살아 있는 거대한 에너지의 응집체이며,
          그 형태에 따라 우주 만물을 구성하는 다섯 가지 원소인 &apos;오행(五行)&apos;의 기운을 내뿜는다고 여겼습니다. 이를{' '}
          <strong className="text-gray-900">오성체(五星體)</strong>라고 합니다.
        </p>
        <p>
          이 분류는 명나라 시대 풍수서 『인자수지(人子須知)』를 비롯한 여러 형기풍수(形氣風水) 문헌에서 다루어져 왔습니다.
          형기풍수는 땅의 &apos;모양&apos;을 읽어 기운을 해석하는 계통으로, 산의 실루엣을 다섯 가지 기본형으로 나눈 것이
          오성체입니다. 조선의 지관들이 도읍과 묘터를 정할 때 가장 먼저 본 것도 주변 산들의 이 형태였습니다.
        </p>

        <section className="bg-purple-50 p-5 rounded-2xl border border-purple-100 not-prose">
          <p className="font-bold text-purple-900 mb-2 text-sm">먼저 알아 둘 것</p>
          <p className="text-[13px] text-purple-800 leading-relaxed">
            오성체는 과학적으로 검증된 이론이 아니라 전통 문화이자 해석의 틀입니다. 산의 모양이 실제로 운을 바꾼다기보다,
            &quot;지금 나에게 필요한 것&quot;을 기준으로 갈 산을 정하는 하나의 방법으로 받아들이시면 좋습니다. 실제로도 어떤
            날엔 험한 암릉이, 어떤 날엔 완만한 숲길이 몸과 마음에 맞습니다.
          </p>
        </section>

        {SHAPES.map((s) => (
          <section key={s.n} className="not-prose pt-4">
            <h2 className={`text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 ${s.color} pl-3`}>
              {s.n}. {s.name} — {s.tag}
            </h2>

            <p className="text-[13px] font-bold text-gray-500 mb-3">실루엣: {s.silhouette}</p>

            <div className="space-y-3 text-[14px] text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">어떻게 생겼나</strong>
                <br />
                {s.look}
              </p>
              <p>
                <strong className="text-gray-900">상징하는 기운</strong>
                <br />
                {s.means}
              </p>
              <p>
                <strong className="text-gray-900">이럴 때 찾으세요</strong>
                <br />
                {s.when}
              </p>
              <p className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-[13px] text-gray-600">
                <strong className="text-gray-800">주의할 점</strong>
                <br />
                {s.caution}
              </p>
            </div>
          </section>
        ))}

        <h2 className="text-xl font-bold text-gray-900 mt-12 mb-4 border-l-4 border-[#7C3AED] pl-3">
          산형을 직접 구분하는 3단계
        </h2>
        <p>
          현장에서 오성체를 판별하는 데 특별한 도구는 필요하지 않습니다. 아래 순서대로 보면 대부분의 산은 다섯 가지 중
          하나로 정리됩니다.
        </p>
        <ol className="list-decimal ml-5 space-y-3">
          <li>
            <strong className="text-gray-900">멀리서 능선 전체를 본다.</strong> 산 안에 들어가면 형태가 보이지 않습니다.
            산행 들머리로 향하는 길이나 건너편 능선, 지도 앱의 위성사진에서 산의 전체 윤곽을 먼저 확인하세요.
          </li>
          <li>
            <strong className="text-gray-900">정상부의 마무리를 본다.</strong> 뾰족하고 갈라졌으면 화(火), 둥글고 길쭉하면
            목(木), 평평하면 토(土), 반원형이면 금(金)입니다.
          </li>
          <li>
            <strong className="text-gray-900">봉우리의 개수와 높낮이를 본다.</strong> 비슷한 높이의 봉우리가 완만하게
            여럿 이어지면 수(水)입니다.
          </li>
        </ol>
        <p>
          실제 산은 두 가지 성질이 섞인 경우가 흔합니다. 예를 들어 몸통은 두툼한 토형인데 정상만 바위로 갈라진 산은
          &apos;토체에 화가 얹힌&apos; 형태로 읽습니다. 이럴 때는 산 전체에서 가장 눈에 띄는 특징을 주된 기운으로 봅니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-12 mb-4 border-l-4 border-[#7C3AED] pl-3">
          상생과 상극: 어떤 산을 골라야 하나
        </h2>
        <p>
          오행은 서로를 살리는 <strong className="text-gray-900">상생(相生)</strong>과 서로를 누르는{' '}
          <strong className="text-gray-900">상극(相剋)</strong>의 관계로 이어져 있습니다.
        </p>
        <div className="not-prose bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-2 text-[13px] text-gray-700">
          <p>
            <strong className="text-gray-900">상생</strong> — 목생화(木生火) · 화생토(火生土) · 토생금(土生金) ·
            금생수(金生水) · 수생목(水生木)
          </p>
          <p>
            <strong className="text-gray-900">상극</strong> — 목극토(木剋土) · 토극수(土剋水) · 수극화(水剋火) ·
            화극금(火剋金) · 금극목(金剋木)
          </p>
        </div>
        <p>산을 고르는 방식은 크게 두 갈래입니다.</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong className="text-gray-900">부족한 기운을 채우기</strong> — 내 사주에 약한 오행을 가진 산을 찾아
            보완합니다. 가장 널리 쓰이는 방식입니다.
          </li>
          <li>
            <strong className="text-gray-900">목적에 맞는 기운을 빌리기</strong> — 사주와 무관하게, 지금 필요한 일에
            대응하는 산을 찾습니다. 시험이면 목형산, 승부처면 화형산처럼 단순하게 접근하는 방법입니다.
          </li>
        </ul>
        <p>
          어느 쪽이든 상극에 해당하는 산을 &apos;가면 안 되는 산&apos;으로 볼 필요는 없습니다. 전통적으로도 지나치게 강한
          기운을 눌러 균형을 잡는 용도로 상극 관계를 활용했습니다. 앞서 말한 화기가 센 관악산을 두고 조선이 광화문 앞에
          해태(물의 상징)를 두었다는 이야기가 대표적인 예입니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-12 mb-4 border-l-4 border-[#7C3AED] pl-3">자주 묻는 질문</h2>
        <div className="not-prose space-y-4">
          <div className="border border-gray-100 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-1 text-sm">Q. 꼭 정상까지 올라가야 하나요?</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              그렇지 않습니다. 전통적으로 중요하게 본 것은 정복이 아니라 그 산의 기운이 모이는 자리에 머무는 시간입니다.
              체력이나 날씨가 여의치 않다면 능선 초입이나 사찰, 전망 바위까지만 다녀와도 충분합니다. 무리한 산행이 오히려
              가장 나쁜 선택입니다.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-1 text-sm">Q. 얼마나 자주 가야 하나요?</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              정해진 횟수는 없습니다. 다만 한 번의 특별한 산행보다, 계절이 바뀔 때마다 같은 산을 찾는 편이 몸과 마음의
              변화를 스스로 확인하기에 좋습니다.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-1 text-sm">Q. 산행하기 좋은 시간대가 따로 있나요?</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              풍수에서는 해가 뜨는 시간의 기운을 귀하게 봅니다. 실용적으로도 이른 아침 산행은 하산 시간을 넉넉히 확보할 수
              있어 안전합니다. 일몰 2시간 전에는 하산을 시작하는 것을 원칙으로 하세요.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-1 text-sm">Q. 봄·가을에 못 가는 산도 있나요?</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              있습니다. 봄철(대체로 2~5월)과 가을철(11~12월)에는 산불 조심 기간으로 입산이 통제되는 구간이 생깁니다.
              출발 전 국립공원공단 또는 관할 지자체 공지를 반드시 확인하세요.
            </p>
          </div>
        </div>

        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-12">
          <p className="font-bold mb-2">💡 나에게 맞는 산은 어디일까?</p>
          <p className="text-sm">
            자신의 타고난 사주(연도)에 따라 부족한 기운을 채워 주는 것이 풍수 개운법의 핵심입니다. 지금 바로
            &apos;개운산&apos;에서 오행 분석 결과와 함께 어울리는 산을 확인해 보세요.
          </p>
          <Link
            href="/sansu/form"
            className="mt-4 inline-block bg-[#7C3AED] text-white px-6 py-2 rounded-full text-xs font-bold shadow-md"
          >
            추천 받으러 가기
          </Link>
        </section>

        <p className="text-[11px] text-gray-400 leading-relaxed mt-8">
          ※ 본 글은 전통 풍수 문화를 소개하는 콘텐츠이며 의학적·법률적 조언이 아닙니다. 산행 시에는 기상 상황과 본인의
          건강 상태를 우선 고려하시고, 위험 구간은 반드시 정규 등산로를 이용해 주세요.
        </p>
      </div>
    </article>
  );
}
