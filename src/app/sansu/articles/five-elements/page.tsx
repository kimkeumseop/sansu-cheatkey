import Link from 'next/link';

export default function ArticlePage() {
  return (
    <article className="p-6 pt-12">
      <Link href="/sansu/articles" className="text-xs text-[#7C3AED] font-bold mb-4 block hover:underline">
        ← 목록으로 돌아가기
      </Link>
      
      <header className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">
          당신의 운명을 바꾸는 산의 5가지 형태:<br/>오성체(五星體) 가이드
        </h1>
        <p className="text-sm text-gray-500">2026.05.31 · 풍수학 전문 필진</p>
      </header>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          전통 풍수지리에서는 산을 단순히 흙과 돌의 덩어리로 보지 않습니다. 산은 살아있는 거대한 에너지의 응집체이며, 그 형태에 따라 우주 만물을 구성하는 다섯 가지 원소인 '오행(五行)'의 기운을 내뿜는다고 믿었습니다. 이를 **오성체(五星體)**라고 합니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-[#7C3AED] pl-3">1. 목형산(木形山) - 성장의 기운</h2>
        <p>
          목형산은 나무가 하늘을 향해 곧게 뻗은 것처럼 위로 솟은 형태를 띱니다. 정상 부위가 둥글면서도 전체적으로 길쭉한 모양입니다. 
          풍수적으로는 **'공부, 학문, 문학, 예술'**의 기운을 상징합니다. 고시 공부를 하거나 창작 활동을 하는 분들에게 큰 영감을 주는 산입니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-red-500 pl-3">2. 화형산(火形山) - 돌파의 기운</h2>
        <p>
          불꽃이 타오르는 것처럼 봉우리가 여러 개로 갈라지고 날카로운 암석이 많은 산입니다. 서울의 관악산이 대표적인 화형산입니다. 
          화형산은 **'결단, 돌파, 변화'**를 의미합니다. 정체된 운세를 뚫고 싶거나, 강력한 추진력이 필요할 때 방문하면 화형산의 뜨거운 에너지가 큰 도움을 줍니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-yellow-500 pl-3">3. 토형산(土形山) - 안정의 기운</h2>
        <p>
          정상이 평평하고 넓은 형태를 띠는 산입니다. 마치 지붕이나 일(一)자 모양처럼 보이기도 합니다. 
          토형산은 **'재물, 어머니, 안정'**을 상징합니다. 가정이 평안하기를 빌거나 사업의 기반을 튼튼히 다지고 싶을 때 토형산의 넉넉한 기운을 받는 것이 좋습니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-slate-400 pl-3">4. 금형산(金形山) - 귀인의 기운</h2>
        <p>
          종을 엎어놓은 것처럼 둥글고 단단해 보이는 산입니다. 전체적으로 바위보다는 흙이 덮여 있어 부드럽지만 묵직한 느낌을 줍니다. 
          금형산은 **'명예, 귀인, 리더십'**을 의미합니다. 조직에서 승진을 원하거나 인생의 중요한 조력자를 만나고 싶을 때 추천하는 산형입니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-500 pl-3">5. 수형산(水형山) - 치유의 기운</h2>
        <p>
          마치 물결이 치는 것처럼 여러 봉우리가 완만하게 이어지는 산입니다. 
          수형산은 **'지혜, 인연, 정화'**의 에너지를 담고 있습니다. 인간관계로 상처받은 마음을 치유하거나, 새로운 인연을 만나고 싶을 때 수형산의 유연한 기운이 큰 힘이 됩니다.
        </p>

        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-12">
          <p className="font-bold mb-2">💡 나에게 맞는 산은 어디일까?</p>
          <p className="text-sm">
            자신의 타고난 사주(연도)에 따라 부족한 기운을 채워주는 것이 풍수 개운법의 핵심입니다. 지금 바로 '개운산' 앱에서 당신의 운명을 트일 영험한 산을 찾아보세요.
          </p>
          <Link href="/sansu/form" className="mt-4 inline-block bg-[#7C3AED] text-white px-6 py-2 rounded-full text-xs font-bold shadow-md">
            추천 받으러 가기
          </Link>
        </section>
      </div>
    </article>
  );
}
