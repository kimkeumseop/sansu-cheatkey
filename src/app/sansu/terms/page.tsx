import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관',
  description: '개운산(GAEUNSAN) 서비스 이용조건, 이용자의 의무 및 책임의 제한에 관한 안내입니다.',
  alternates: { canonical: '/sansu/terms' },
};

export default function TermsPage() {
  return (
    <div className="p-6 pt-12 prose prose-sm max-w-none">
      <h1 className="text-2xl font-bold mb-6">이용약관</h1>
      
      <h2 className="text-lg font-bold mt-8 mb-4">제1조 (목적)</h2>
      <p className="text-gray-600 mb-4">
        이 약관은 GAEUNSAN(이하 &apos;회사&apos;)이 제공하는 웹서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">제2조 (서비스의 내용)</h2>
      <p className="text-gray-600 mb-4">
        개운산은 태어난 해의 띠와 관심 주제를 바탕으로 산행 후보를 비교하는 서비스를 제공합니다. 풍수와 띠의 연결은 문화적 해석이며, 결과는 참고용입니다. 실제 운세·건강 효과를 보증하지 않습니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">제3조 (이용자의 의무)</h2>
      <p className="text-gray-600 mb-4">
        이용자는 본 서비스를 이용함에 있어 관련 법령을 준수해야 하며, 서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-4">제4조 (책임의 제한)</h2>
      <p className="text-gray-600 mb-4">
        회사는 서비스 이용 과정에서 발생할 수 있는 안전사고(등산 사고 등)에 대해 어떠한 책임도 지지 않습니다. 이용자는 반드시 본인의 건강 상태와 날씨, 산행 난이도를 고려하여 안전하게 이용해야 합니다.
      </p>

      <p className="mt-12 text-xs text-gray-400">
        최종 수정일: 2026년 5월 31일
      </p>
    </div>
  );
}
