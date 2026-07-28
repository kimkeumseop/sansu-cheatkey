import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '왜 힘들 때 산에 가야 할까? 과학과 풍수가 말하는 치유력',
  description:
    '피톤치드·음이온 같은 과학적 근거부터 지기(地氣) 순환이라는 풍수적 해석까지, 마음이 지쳤을 때 산이 주는 회복의 원리와 실제 회복 산행법을 정리했습니다.',
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
          왜 힘들 때 산에 가야 할까?
          <br />
          과학과 풍수가 말하는 산의 치유력
        </h1>
        <p className="text-sm text-gray-500">2026.05.30 · 개운산 편집팀</p>
      </header>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          복잡한 도시의 소음과 스트레스에서 벗어나 산에 오를 때, 우리는 형언할 수 없는 평온함을 느낍니다. 이는 단순히
          기분 탓만은 아닙니다. 숲이 실제로 사람의 몸에 미치는 영향은 여러 나라에서 연구 주제로 다뤄져 왔고, 우리 전통은
          같은 현상을 &apos;기(氣)&apos;라는 언어로 설명해 왔습니다. 이 글은 두 갈래의 설명을 나란히 놓고, 마지막에는 실제로
          지쳤을 때 어떻게 산에 다녀오면 좋은지까지 정리합니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-green-500 pl-3">
          1. 숲의 선물, 피톤치드와 음이온
        </h2>
        <p>
          &apos;피톤치드(phytoncide)&apos;는 나무가 세균과 해충으로부터 자신을 지키기 위해 내뿜는 휘발성 물질을 통틀어
          부르는 말입니다. 편백나무, 잣나무, 소나무 같은 침엽수에서 특히 많이 나옵니다. 일본에서 시작된 &apos;삼림욕(森林浴,
          shinrin-yoku)&apos; 연구에서는 숲에서 시간을 보낸 참가자들의 스트레스 호르몬인 코르티솔 수치와 혈압이 도심에서
          같은 시간을 보낸 대조군보다 낮게 측정됐다는 결과가 반복적으로 보고되었습니다.
        </p>
        <p>
          계곡이나 폭포 주변에 풍부한 음이온도 자주 언급됩니다. 물이 부딪히며 잘게 부서질 때 공기 중 음이온 농도가 올라가고,
          이것이 자율신경의 안정과 관련이 있다는 설명입니다. 다만 이 부분은 피톤치드에 비해 근거가 제한적이라는 점도 함께
          알아 두시면 좋습니다.
        </p>
        <div className="not-prose bg-green-50 border border-green-100 rounded-2xl p-5 text-[13px] text-green-900 leading-relaxed">
          <strong className="block mb-1">피톤치드가 가장 짙은 때</strong>
          기온이 오르는 여름철, 그중에서도 습도가 높은 오전 시간대에 농도가 높은 것으로 알려져 있습니다. 계곡을 낀
          침엽수림 길을 아침에 걷는 것이 가장 좋은 조합입니다.
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-400 pl-3">
          2. 풍수학적 정화, 지기(地氣)의 흡수
        </h2>
        <p>
          풍수학에서 산은 지구의 에너지가 흐르는 &apos;맥(脈)&apos;입니다. 큰 산에서 뻗어 나온 능선을 용(龍)이라 부르고,
          그 기운이 모이는 자리를 혈(穴)이라 했습니다. 우리가 산행하며 땀을 흘리고 거친 숨을 내뱉는 과정은, 전통적인
          해석으로는 몸 안의 탁한 기운을 내보내고 산의 맑은 정기를 들이는 &apos;기의 순환&apos;입니다.
        </p>
        <p>
          흥미로운 것은 이 설명이 현대의 관찰과 크게 어긋나지 않는다는 점입니다. 옛사람들이 기가 모인다고 본 자리는
          대체로 바람이 순하고 물이 가깝고 볕이 드는 곳이었습니다. 오래 머물기에 실제로 편안한 지형을 골라냈던 셈입니다.
          본인의 오행과 어울리는 산을 찾으라는 조언 역시, 지금 나에게 필요한 환경을 의식적으로 고르라는 말로 읽을 수
          있습니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-purple-500 pl-3">
          3. 심리적 개운, 성취감과 관조의 시간
        </h2>
        <p>
          산행은 그 자체로 &apos;시작과 끝이 분명한 과제&apos;입니다. 일상의 고민은 대개 끝이 보이지 않는데, 산은 오르면
          정상이 있고 내려오면 끝납니다. 몇 시간 안에 완결되는 성취를 경험하는 것만으로도 무너진 자기 효능감이 회복되는
          경우가 많습니다.
        </p>
        <p>
          또 하나는 시야의 문제입니다. 능선에 서면 시선이 수백 미터 밖으로 나갑니다. 하루 종일 30cm 앞의 화면만 보던
          눈에는 그 자체가 휴식입니다. 발아래로 마을과 도로가 작게 보일 때 복잡했던 문제가 별것 아니게 느껴지는 경험은,
          거리를 두고 상황을 다시 보게 되는 자연스러운 결과입니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-amber-500 pl-3">
          4. 지쳤을 때는 어떤 산을 골라야 할까
        </h2>
        <p>
          마음이 소진된 상태에서 험한 암릉 산행을 택하는 것은 좋지 않습니다. 회복이 목적일 때의 기준은 단순합니다.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong className="text-gray-900">바위보다 흙과 숲이 많은 산</strong> — 발밑이 부드러우면 긴장이 덜합니다.
            풍수로 보면 토(土)와 수(水)의 성질을 띤 산입니다.
          </li>
          <li>
            <strong className="text-gray-900">물길을 따라가는 코스</strong> — 계곡 옆 길은 소리와 온도 모두 안정적입니다.
          </li>
          <li>
            <strong className="text-gray-900">왕복 3시간 이내</strong> — 회복 산행은 길이보다 여유가 중요합니다.
          </li>
          <li>
            <strong className="text-gray-900">중간에 앉을 곳이 있는 산</strong> — 사찰, 약수터, 전망대처럼 &apos;머무는
            지점&apos;이 있는 코스가 좋습니다.
          </li>
        </ul>
        <p>
          이런 조건에 맞는 곳으로는 전나무 숲길로 유명한 오대산 월정사 일대, 편백 조림지로 알려진 장성 축령산, 사찰을 낀
          완만한 코스가 많은 남해·양양 권역의 산들이 자주 꼽힙니다.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-teal-500 pl-3">
          5. 회복을 위한 산행법 5가지
        </h2>
        <div className="not-prose space-y-3">
          {[
            ['속도를 절반으로', '평소 페이스의 60~70%로 걷습니다. 숨이 차면 회복이 아니라 운동이 됩니다. 옆 사람과 대화가 가능한 속도가 기준입니다.'],
            ['30분마다 멈추기', '짧게라도 멈춰서 소리를 듣습니다. 물소리, 바람, 새소리에 주의를 두는 것만으로 생각의 반추가 끊깁니다.'],
            ['정상을 목표로 두지 않기', '오늘의 목표는 정상이 아니라 &quot;돌아왔을 때 덜 무거운 상태&quot;입니다. 중간에 좋은 자리를 만나면 거기서 끝내도 됩니다.'],
            ['휴대폰은 지도와 안전 용도로만', '사진과 연락은 하산 후로 미룹니다. 다만 위치 공유와 배터리는 반드시 챙기세요.'],
            ['하산 후 30분 정리', '바로 일상으로 복귀하지 말고, 차 한 잔이라도 마시며 산행을 마무리하는 시간을 두면 효과가 오래갑니다.'],
          ].map(([t, d], i) => (
            <div key={i} className="flex gap-3 border border-gray-100 rounded-2xl p-4">
              <span className="shrink-0 grid place-items-center w-6 h-6 rounded-lg bg-[#7C3AED] text-white text-[11px] font-bold">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{t}</p>
                <p className="text-[13px] text-gray-600 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-rose-400 pl-3">
          6. 안전은 회복의 전제입니다
        </h2>
        <p>
          지친 상태에서의 산행은 판단력과 체력이 평소보다 떨어져 있다는 점을 전제로 계획해야 합니다. 아래 항목만큼은
          컨디션과 무관하게 지켜 주세요.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>일몰 2시간 전에는 하산을 시작합니다. 산은 도심보다 훨씬 빨리 어두워집니다.</li>
          <li>가는 산과 코스, 예상 하산 시각을 누군가에게 알려 둡니다.</li>
          <li>물과 간단한 행동식, 여벌 상의를 챙깁니다. 능선의 체감 온도는 들머리보다 크게 낮습니다.</li>
          <li>정규 등산로를 벗어나지 않습니다. 국가지점번호 표지판을 지날 때마다 눈으로 확인해 두면 신고 시 도움이 됩니다.</li>
          <li>산불 조심 기간에는 입산 통제 구간이 생깁니다. 출발 전 관할 기관 공지를 확인하세요.</li>
        </ul>
        <p>
          마음이 많이 힘든 시기라면 산행은 도움이 되는 여러 방법 중 하나일 뿐입니다. 일상 기능에 지장이 있을 정도라면
          전문가의 도움을 함께 받으시길 권합니다.
        </p>

        <section className="bg-purple-900 text-white p-6 rounded-[2rem] mt-12 text-center not-prose">
          <p className="font-bold mb-4">당신에게 지금 필요한 에너지는 무엇인가요?</p>
          <p className="text-xs text-purple-200 mb-6 leading-relaxed">
            나의 상황과 사주에 꼭 맞는
            <br />
            치유의 명산을 개운산이 찾아드립니다.
          </p>
          <Link href="/sansu/form" className="inline-block bg-white text-[#7C3AED] px-8 py-3 rounded-full text-sm font-bold shadow-xl">
            치유의 산 추천받기
          </Link>
        </section>

        <p className="text-[11px] text-gray-400 leading-relaxed mt-8">
          ※ 본 글은 전통 문화와 일반적인 건강 정보를 소개하는 콘텐츠이며, 의학적 진단이나 치료를 대신하지 않습니다.
          지속적인 우울감이나 불안이 있다면 의료 전문가와 상담하시기 바랍니다.
        </p>
      </div>
    </article>
  );
}
