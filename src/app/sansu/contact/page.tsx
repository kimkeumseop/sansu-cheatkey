import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기',
  description: '개운산(GAEUNSAN) 서비스 문의, 오류 제보, 제휴 제안을 위한 연락처 안내입니다.',
  alternates: { canonical: '/sansu/contact' },
};

export default function ContactPage() {
  return (
    <div className="p-6 pt-12">
      <h1 className="text-2xl font-bold mb-6">문의하기</h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        서비스 이용 중 불편한 점이나 제안하고 싶은 의견이 있으시면 아래 채널을 통해 문의해 주세요. 최대한 빠른 시일 내에 답변해 드리겠습니다.
      </p>

      <div className="space-y-4">
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-1">이메일 문의</h2>
          <p className="text-[#7C3AED] font-medium">support@gaeunsan.com</p>
          <p className="text-xs text-gray-400 mt-2">* 메일 확인 후 영업일 기준 2~3일 내에 회신 드립니다.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-1">운영 시간</h2>
          <p className="text-sm text-gray-600">평일 10:00 - 18:00 (주말 및 공휴일 제외)</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
          <h2 className="font-bold text-purple-900 mb-1">제휴 제안</h2>
          <p className="text-sm text-purple-800 leading-relaxed">
            등산 용품, 지역 관광, 풍수 전문가 협업 등 다양한 비즈니스 제휴를 환영합니다. 이메일 제목에 [제휴]를 머릿말로 작성해 주세요.
          </p>
        </div>
      </div>

      <div className="mt-12 p-4 text-center">
        <p className="text-[10px] text-gray-400 leading-relaxed">
          GAEUNSAN | 대표: 김금섭
          <br />
          경기도 과천시 과천대로 2길
        </p>
      </div>
    </div>
  );
}
