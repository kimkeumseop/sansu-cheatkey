import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '12지신과 궁합이 맞는 명산: 띠별로 다른 영험한 장소들',
  description:
    '쥐띠부터 돼지띠까지 — 띠마다 타고난 오행이 다르고, 상생(相生) 관계에 있는 산도 다릅니다. 12띠별로 잘 맞는 산형과 고르는 기준을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/zodiac-mountain' },
  openGraph: {
    type: 'article',
    title: '12지신과 궁합이 맞는 명산: 띠별로 다른 영험한 장소들',
    description: '내 띠와 상생하는 산에서 소원이 더 잘 이뤄지는 이유.',
    url: '/sansu/articles/zodiac-mountain',
  },
};

const GROUPS = [
  {
    element: '수(水)',
    color: 'border-blue-500',
    chip: 'bg-blue-50 text-blue-700 border-blue-100',
    zodiacs: '쥐띠(子) · 돼지띠(亥)',
    trait: '지혜와 유연함. 상황을 읽는 눈이 빠르고 적응력이 좋습니다. 대신 생각이 많아 결정이 늦어지기 쉽습니다.',
    need: '금생수(金生水) — 금(金)의 기운이 수를 살립니다.',
    shape: '금형산',
    shapeDesc: '종을 엎어 놓은 듯 둥글고 흙이 두터운 산. 노출된 바위보다 숲이 산을 덮고 있는 곳.',
    also: '같은 수(水)의 기운이 흐르는 산, 즉 계곡이 깊고 물소리가 끊이지 않는 산에서 마음을 정리하는 것도 잘 맞습니다.',
  },
  {
    element: '목(木)',
    color: 'border-green-600',
    chip: 'bg-green-50 text-green-700 border-green-100',
    zodiacs: '호랑이띠(寅) · 토끼띠(卯)',
    trait: '성장과 의욕. 새로 시작하는 일에 강하고 추진력이 있습니다. 다만 지치면 회복이 느린 편입니다.',
    need: '수생목(水生木) — 물이 나무를 키웁니다.',
    shape: '수형산',
    shapeDesc: '완만한 봉우리가 물결처럼 이어지고 계곡이 발달한 산.',
    also: '나무가 울창한 목형산에서 같은 결의 기운을 보태는 것도 좋습니다. 봄철 신록이 오를 때의 산행이 특히 어울립니다.',
  },
  {
    element: '화(火)',
    color: 'border-red-500',
    chip: 'bg-red-50 text-red-700 border-red-100',
    zodiacs: '뱀띠(巳) · 말띠(午)',
    trait: '열정과 확산. 표현력이 좋고 사람을 끌어당깁니다. 대신 에너지 소모가 커서 번아웃이 오기 쉽습니다.',
    need: '목생화(木生火) — 나무가 불의 땔감이 됩니다.',
    shape: '목형산',
    shapeDesc: '위로 곧게 뻗은 길쭉한 형태에 정상부가 둥근 산. 이른바 문필봉.',
    also: '이미 과열된 상태라면 정상이 평평하고 넉넉한 토형산에서 열기를 가라앉히는 편이 낫습니다. 뾰족한 암릉은 피하세요.',
  },
  {
    element: '토(土)',
    color: 'border-yellow-600',
    chip: 'bg-amber-50 text-amber-700 border-amber-100',
    zodiacs: '소띠(丑) · 용띠(辰) · 양띠(未) · 개띠(戌)',
    trait: '신용과 안정. 꾸준하고 신뢰를 얻습니다. 대신 변화를 만들어 내는 힘이 부족해 정체되기 쉽습니다.',
    need: '화생토(火生土) — 불이 흙을 두텁게 합니다.',
    shape: '화형산',
    shapeDesc: '봉우리가 여러 갈래로 갈라지고 날카로운 암릉이 드러난 산. 관악산, 설악산이 대표적입니다.',
    also: '정체된 시기를 뚫어야 할 때 가장 효과적인 조합입니다. 다만 암릉 구간은 난이도가 높으니 코스 선택에 주의하세요.',
  },
  {
    element: '금(金)',
    color: 'border-slate-500',
    chip: 'bg-slate-100 text-slate-700 border-slate-200',
    zodiacs: '원숭이띠(申) · 닭띠(酉)',
    trait: '결단과 의리. 기준이 분명하고 마무리가 깔끔합니다. 대신 긴장이 잘 풀리지 않습니다.',
    need: '토생금(土生金) — 흙 속에서 쇠가 만들어집니다.',
    shape: '토형산',
    shapeDesc: '정상이 평평하고 산세가 두툼한 산. 흙이 깊고 품이 넓은 지리산 권역이 대표적입니다.',
    also: '넉넉한 산에서 오래 머무는 것이 핵심입니다. 짧고 빠른 산행보다 하루를 통째로 쓰는 코스가 어울립니다.',
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
          12지신과 궁합이 맞는 명산:
          <br />
          띠별로 다른 영험한 장소들
        </h1>
        <p className="text-sm text-gray-500">2026.05.29 · 개운산 편집팀</p>
      </header>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          한국의 풍수와 명리학은 서로 밀접하게 연결되어 있습니다. 우리가 태어난 해의 띠(12지신)는 고유한 오행의 기운을
          가지고 있고, 산 역시 그 지세와 형상에 따라 특정 오행의 기운을 강하게 품고 있습니다. 자신의 띠와{' '}
          <strong className="text-gray-900">상생(相生)</strong> 관계에 있는 산을 찾으면 그 영험함이 배가 된다는 것이
          전통적인 해석입니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-[#7C3AED] pl-3">
          먼저, 내 띠의 오행부터
        </h2>
        <p>
          12지지는 각각 정해진 오행에 배속됩니다. 아래 표에서 자신의 띠를 먼저 찾아 보세요.
        </p>
        <div className="not-prose overflow-x-auto -mx-1 px-1">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-100 px-3 py-2 text-left font-bold text-gray-900">오행</th>
                <th className="border border-gray-100 px-3 py-2 text-left font-bold text-gray-900">해당 띠</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <td className="border border-gray-100 px-3 py-2 font-bold text-blue-600">수(水)</td>
                <td className="border border-gray-100 px-3 py-2">쥐(子), 돼지(亥)</td>
              </tr>
              <tr>
                <td className="border border-gray-100 px-3 py-2 font-bold text-green-700">목(木)</td>
                <td className="border border-gray-100 px-3 py-2">호랑이(寅), 토끼(卯)</td>
              </tr>
              <tr>
                <td className="border border-gray-100 px-3 py-2 font-bold text-red-600">화(火)</td>
                <td className="border border-gray-100 px-3 py-2">뱀(巳), 말(午)</td>
              </tr>
              <tr>
                <td className="border border-gray-100 px-3 py-2 font-bold text-amber-600">토(土)</td>
                <td className="border border-gray-100 px-3 py-2">소(丑), 용(辰), 양(未), 개(戌)</td>
              </tr>
              <tr>
                <td className="border border-gray-100 px-3 py-2 font-bold text-slate-600">금(金)</td>
                <td className="border border-gray-100 px-3 py-2">원숭이(申), 닭(酉)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-gray-500">
          띠는 음력 기준이며, 명리에서는 보통 입춘(양력 2월 4일 무렵)을 한 해의 경계로 봅니다. 1~2월 초에 태어나셨다면
          앞 해의 띠에 해당할 수 있습니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-12 mb-4 border-l-4 border-[#7C3AED] pl-3">
          띠별로 잘 맞는 산
        </h2>

        {GROUPS.map((g) => (
          <section key={g.element} className={`not-prose border-l-4 ${g.color} pl-4 py-1 mt-8`}>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-[11px] font-bold px-2 py-1 rounded-full border ${g.chip}`}>{g.element}</span>
              <h3 className="text-lg font-bold text-gray-900">{g.zodiacs}</h3>
            </div>
            <div className="space-y-3 text-[14px] text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">타고난 성향</strong>
                <br />
                {g.trait}
              </p>
              <p>
                <strong className="text-gray-900">필요한 기운</strong>
                <br />
                {g.need}
              </p>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-1">👉 추천 산형: {g.shape}</p>
                <p className="text-[13px] text-gray-600 leading-relaxed">{g.shapeDesc}</p>
              </div>
              <p className="text-[13px] text-gray-600">{g.also}</p>
            </div>
          </section>
        ))}

        <h2 className="text-xl font-bold text-gray-900 mt-12 mb-4 border-l-4 border-[#7C3AED] pl-3">
          띠만으로 다 정해지는 것은 아닙니다
        </h2>
        <p>
          여기까지가 띠(태어난 해)를 기준으로 한 가장 단순한 방식입니다. 본래의 사주는 연·월·일·시 네 기둥을 모두 보고,
          여덟 글자의 오행 분포를 따져 무엇이 넘치고 무엇이 부족한지를 판단합니다. 띠 하나로 보는 것은 그 여덟 글자 중
          하나만 보는 셈입니다.
        </p>
        <p>그래서 실제로 산을 고를 때는 아래 두 가지를 함께 놓고 보시길 권합니다.</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong className="text-gray-900">타고난 기운(띠)</strong> — 장기적으로 나에게 부족하기 쉬운 것.
          </li>
          <li>
            <strong className="text-gray-900">지금의 상황</strong> — 시험을 앞뒀는지, 정체됐는지, 지쳤는지. 이쪽이 오히려
            더 중요할 때가 많습니다.
          </li>
        </ul>
        <p>
          예를 들어 같은 소띠라도, 승부를 앞둔 시기에는 화형산이 맞지만 번아웃이 온 시기에는 화형산이 부담스럽습니다.
          전통 이론을 기준선으로 삼되, 오늘의 컨디션을 최종 판단 기준으로 두세요.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-12 mb-4 border-l-4 border-[#7C3AED] pl-3">자주 묻는 질문</h2>
        <div className="not-prose space-y-4">
          <div className="border border-gray-100 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-1 text-sm">Q. 상극인 산에 가면 나쁜 일이 생기나요?</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              그렇게 보지 않습니다. 상극은 &apos;해롭다&apos;가 아니라 &apos;누른다&apos;는 뜻입니다. 기운이 과할 때
              눌러서 균형을 잡는 용도로 오히려 활용해 왔습니다. 가면 안 되는 산이라는 개념은 전통 이론에도 없습니다.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-1 text-sm">Q. 가족이 서로 띠가 다르면 어느 산에 가야 하나요?</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              여럿이 함께 간다면 토형산처럼 성질이 두루 무난한 산을 고르는 편이 좋습니다. 실용적으로도 정상부가 평평한
              산은 난이도가 낮아 동행자의 체력 편차를 감당하기 쉽습니다.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-1 text-sm">Q. 태어난 시간을 몰라도 되나요?</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              이 글의 방식은 태어난 해만 사용하므로 시간을 몰라도 됩니다. 개운산의 추천 기능도 마찬가지로 태어난 해와
              소원 분야만 입력받습니다.
            </p>
          </div>
        </div>

        <section className="bg-slate-50 p-6 rounded-2xl border border-gray-100 mt-12">
          <p className="font-bold mb-2">🔍 내 띠와 찰떡궁합인 산은 어디?</p>
          <p className="text-sm">
            복잡한 오행 계산을 직접 하실 필요는 없습니다. &apos;개운산&apos;이 태어난 연도와 필요한 기운을 분석해 상생하는
            명산을 바로 찾아드립니다.
          </p>
          <Link
            href="/sansu/form"
            className="mt-4 inline-block bg-[#7C3AED] text-white px-6 py-2 rounded-full text-xs font-bold shadow-md"
          >
            띠별 맞춤 산 추천받기
          </Link>
        </section>

        <p className="text-[11px] text-gray-400 leading-relaxed mt-8">
          ※ 본 글은 전통 명리·풍수 문화를 소개하는 콘텐츠이며 점술적 예언이나 전문 상담이 아닙니다. 산행 시에는 기상 상황과
          본인의 건강 상태를 우선 고려해 주세요.
        </p>
      </div>
    </article>
  );
}
