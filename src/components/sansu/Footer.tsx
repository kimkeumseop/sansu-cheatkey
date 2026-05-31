import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full p-6 text-center text-xs text-gray-400 mt-10 border-t border-gray-100 bg-white">
      <div className="flex justify-center gap-4 mb-4 font-medium">
        <Link href="/sansu/about" className="hover:text-gray-900 transition">소개</Link>
        <Link href="/sansu/privacy" className="hover:text-gray-900 transition font-bold">개인정보처리방침</Link>
        <Link href="/sansu/terms" className="hover:text-gray-900 transition">이용약관</Link>
        <Link href="/sansu/contact" className="hover:text-gray-900 transition">문의</Link>
      </div>
      <p className="mb-2">
        본 서비스는 전통 풍수 오성체 이론과 사주 12지 오행을 결합한 콘텐츠 추천이며, 종교·의료·법률 자문이 아닙니다.
      </p>
      <p className="mb-4">
        등산 시 안전수칙을 준수하시고, 위험 코스는 전문 가이드와 동행하세요.
      </p>
      <p>© 2026 GAEUNSAN. All rights reserved.</p>
    </footer>
  );
}
