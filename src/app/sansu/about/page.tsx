import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개',
  description:
    '개운산(GAEUNSAN)은 600년 조선 풍수의 오성체 이론과 사주 명리학을 결합해, 지금 당신에게 필요한 기운을 가진 산을 찾아주는 운명 가이드입니다.',
  alternates: { canonical: '/sansu/about' },
};

export default function AboutPage() {
  return (
    <div className="p-6 pt-12">
      <h1 className="text-2xl font-bold mb-6 text-[#7C3AED]">소개: 개운산(GAEUNSAN)</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="font-bold text-lg">
          &quot;오늘 가야 할 산이 당신의 내일을 바꿉니다.&quot;
        </p>
        
        <p>
          개운산(GAEUNSAN)은 단순히 등산 코스를 알려주는 앱이 아닙니다. 600년 조선의 풍수지리 전통인 &apos;오성체(五星體)&apos; 이론과 개인의 사주 명리학을 결합하여, 현재 당신에게 가장 필요한 기운을 가진 산을 찾아주는 &apos;운명 가이드&apos;입니다.
        </p>

        <section className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
          <h2 className="font-bold mb-3 text-purple-900">우리의 철학</h2>
          <p className="text-sm">
            동양 철학에서는 공간이 사람의 운명에 미치는 영향을 중요시합니다. 특히 산은 그 모양에 따라 나무(木), 불(火), 흙(土), 금(金), 물(水)의 고유한 에너지를 내뿜습니다. 개운산은 당신의 생년월일에 따른 부족한 오행을 분석하여, 그 결핍을 채워줄 수 있는 영험한 산을 매칭해 드립니다.
          </p>
        </section>

        <h2 className="text-lg font-bold mt-8">주요 기능</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li><strong>사주 기반 맞춤 추천:</strong> 12지신과 오행 분석을 통한 최적의 산 매칭</li>
          <li><strong>풍수 오성체 데이터:</strong> 한국 명산 30선의 기운 분석 데이터 제공</li>
          <li><strong>명당 포인트:</strong> 산의 에너지가 가장 강한 지점 안내</li>
          <li><strong>맞춤 코스:</strong> 난이도와 소원 목적에 따른 등산 경로 추천</li>
        </ul>

        <p className="text-sm">
          답답한 정체기를 뚫고 싶을 때, 새로운 시작을 앞두고 용기가 필요할 때, 혹은 지친 마음을 위로받고 싶을 때 개운산이 추천하는 당신만의 &apos;영험한 산&apos;을 찾아 떠나보세요.
        </p>
      </div>
    </div>
  );
}
