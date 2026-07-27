import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '왜 힘들 때 산에 가야 할까? 과학과 풍수가 말하는 치유력',
  description:
    '피톤치드·음이온 같은 과학적 근거부터 지기(地氣) 순환이라는 풍수적 해석까지, 마음이 지쳤을 때 산이 주는 회복의 원리를 정리했습니다.',
  alternates: { canonical: '/sansu/articles/mountain-healing' },
  openGraph: {
    type: 'article',
    title: '왜 힘들 때 산에 가야 할까? 과학과 풍수가 말하는 산의 치유력',
    description: '피톤치드와 지기(地氣)의 만남. 마음의 정화가 필요할 때.',
    url: '/sansu/articles/mountain-healing',
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
          왜 힘들 때 산에 가야 할까?<br/>과학과 풍수가 말하는 산의 치유력
        </h1>
        <p className="text-sm text-gray-500">2026.05.30 · 헬스&마인드 필진</p>
      </header>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          복잡한 도시의 소음과 스트레스에서 벗어나 산에 오를 때, 우리는 형언할 수 없는 평온함을 느낍니다. 이는 단순히 기분의 문제가 아닙니다. 산은 과학적인 치유 물질과 풍수지리적인 에너지가 만나는 거대한 &apos;자연 병원&apos;이기 때문입니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-green-500 pl-3">1. 숲의 선물, 피톤치드와 음이온</h2>
        <p>
          식물이 해충으로부터 자신을 보호하기 위해 내뿜는 &apos;피톤치드&apos;는 인간의 면역력을 높이고 스트레스 호르몬인 코르티솔의 수치를 낮추는 데 탁월합니다. 또한 산의 계곡 주변에 풍부한 음이온은 뇌의 자율신경을 안정시키고 활력을 불어넣어 줍니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-400 pl-3">2. 풍수학적 정화, 지기(地氣)의 흡수</h2>
        <p>
          풍수학적으로 산은 지구의 에너지가 흐르는 &apos;맥(脈)&apos;입니다. 우리가 산행을 하며 땀을 흘리고 거친 숨을 내뱉는 과정은 몸 안의 탁한 기운을 배출하고 산의 맑은 정기를 들이마시는 &apos;기(氣)의 순환&apos; 과정입니다. 
          특히 본인의 오행과 맞는 기운을 가진 산을 찾았을 때 이 정화 작용은 극대화됩니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-purple-500 pl-3">3. 심리적 개운, 정상의 성취감</h2>
        <p>
          산행은 그 자체로 고난과 극복의 과정입니다. 가파른 오르막을 지나 정상에 섰을 때 맛보는 성취감은 자존감을 높여주며, 발아래 펼쳐진 풍경을 바라보며 얻는 관조의 시간은 복잡했던 문제를 단순하게 바라볼 수 있는 지혜를 줍니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-amber-500 pl-3">4. 추천하는 치유의 명산</h2>
        <p>
          마음이 지쳤을 때는 바위가 험한 산보다는 흙이 많고 나무가 울창한 산이 좋습니다. 
          오대산의 전나무 숲길이나, 치유의 숲으로 유명한 장성 축령산, 혹은 사찰이 있어 정적인 에너지가 흐르는 양양 낙산사 주변의 산행을 추천합니다.
        </p>

        <section className="bg-purple-900 text-white p-6 rounded-[2rem] mt-12 text-center">
          <p className="font-bold mb-4">당신에게 지금 필요한 에너지는 무엇인가요?</p>
          <p className="text-xs text-purple-200 mb-6 leading-relaxed">
            나의 상황과 사주에 꼭 맞는<br/>치유의 명산을 개운산이 찾아드립니다.
          </p>
          <Link href="/sansu/form" className="inline-block bg-white text-[#7C3AED] px-8 py-3 rounded-full text-sm font-bold shadow-xl">
            치유의 산 추천받기
          </Link>
        </section>
      </div>
    </article>
  );
}
