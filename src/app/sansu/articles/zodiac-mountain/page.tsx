import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '12지신과 궁합이 맞는 명산: 띠별로 다른 영험한 장소들',
  description:
    '쥐띠부터 돼지띠까지 — 띠마다 타고난 오행이 다르고, 상생(相生) 관계에 있는 산도 다릅니다. 띠별로 잘 맞는 산형을 정리했습니다.',
  alternates: { canonical: '/sansu/articles/zodiac-mountain' },
  openGraph: {
    type: 'article',
    title: '12지신과 궁합이 맞는 명산: 띠별로 다른 영험한 장소들',
    description: '내 띠와 상생하는 산에서 소원이 더 잘 이뤄지는 이유.',
    url: '/sansu/articles/zodiac-mountain',
  },
};

export default function ArticlePage() {
  return (
    <article className="p-6 pt-12">
      <Link href="/sansu/articles" className="text-xs text-[#7C3AED] font-bold mb-4 block hover:underline">
        ← 목록으로 돌아가기
      </Link>
      
      <header className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          12지신과 궁합이 맞는 명산:<br/>띠별로 다른 영험한 장소들
        </h1>
        <p className="text-sm text-gray-500">2026.05.29 · 풍수 가이드</p>
      </header>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          한국의 풍수와 명리학은 서로 밀접하게 연결되어 있습니다. 우리가 태어난 해의 띠(12지신)는 고유한 오행의 기운을 가지고 있으며, 산 역시 그 지세와 형상에 따라 특정 오행의 기운을 강하게 품고 있습니다. 
          자신의 띠와 &apos;상생(相生)&apos; 관계에 있는 산을 찾으면, 그 영험함이 배가 된다는 사실을 알고 계셨나요?
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-500 pl-3">수(水)의 기운: 쥐띠, 돼지띠</h2>
        <p>
          지혜와 유연함을 상징하는 수(水)의 기운을 가진 분들은 금(金)의 기운을 가진 산에서 에너지를 보충받거나, 같은 수(水)의 기운이 흐르는 산에서 마음을 정화하는 것이 좋습니다. 계곡이 깊고 물소리가 끊이지 않는 산들이 여러분과 잘 맞습니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-green-600 pl-3">목(木)의 기운: 호랑이띠, 토끼띠</h2>
        <p>
          성장과 의욕을 상징하는 목(木)의 기운을 가진 분들은 수(水)의 기운을 가진 산(계곡이 많은 산)이나, 나무가 울창한 목형산에서 큰 힘을 얻습니다. 봄철의 생동감 넘치는 산행이 특히 운세 개선에 효과적입니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-red-500 pl-3">화(火)의 기운: 뱀띠, 말띠</h2>
        <p>
          열정과 확산을 상징하는 화(火)의 기운을 가진 분들은 목(木)의 기운을 가진 산에서 연료를 얻거나, 토(土)의 기운을 가진 산에서 과한 열기를 안정시키는 것이 좋습니다. 뾰족한 암릉보다는 부드러운 능선이 이어지는 산이 정서적 안정에 도움을 줍니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-yellow-600 pl-3">토(土)의 기운: 소띠, 용띠, 양띠, 개띠</h2>
        <p>
          신용과 안정을 상징하는 토(土)의 기운을 가진 분들은 화(火)의 기운을 가진 산에서 열정의 에너지를 공급받는 것이 좋습니다. 기암괴석이 화려하고 기세가 당당한 산(예: 설악산, 관악산)이 여러분의 잠재력을 일깨워 줄 것입니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-slate-500 pl-3">금(金)의 기운: 원숭이띠, 닭띠</h2>
        <p>
          결단과 의리를 상징하는 금(金)의 기운을 가진 분들은 토(土)의 기운을 가진 산(정상이 평평하고 넉넉한 산)에서 안식처를 찾습니다. 흙이 깊고 산세가 웅장한 지리산 같은 곳이 금(金)의 기운을 가진 분들에게 최고의 명당이 됩니다.
        </p>

        <section className="bg-slate-50 p-6 rounded-2xl border border-gray-100 mt-12">
          <p className="font-bold mb-2">🔍 내 띠와 찰떡궁합인 산은 어디?</p>
          <p className="text-sm">
            복잡한 오행 계산, 직접 하실 필요 없습니다. &apos;개운산&apos;이 당신의 태어난 연도와 필요 기운을 분석하여 최고의 상생 명산을 바로 찾아드립니다.
          </p>
          <Link href="/sansu/form" className="mt-4 inline-block bg-[#7C3AED] text-white px-6 py-2 rounded-full text-xs font-bold shadow-md">
            띠별 맞춤 산 추천받기
          </Link>
        </section>
      </div>
    </article>
  );
}
