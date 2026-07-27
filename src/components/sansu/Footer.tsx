import Link from 'next/link';

const LINKS = [
  { href: '/sansu', label: '홈' },
  { href: '/sansu/articles', label: '매거진' },
  { href: '/sansu/about', label: '소개' },
  { href: '/sansu/privacy', label: '개인정보처리방침' },
  { href: '/sansu/terms', label: '이용약관' },
  { href: '/sansu/contact', label: '문의' },
];

export default function Footer() {
  return (
    <footer className="w-full mt-14 border-t border-gray-100 bg-gray-50/60 px-6 py-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-5">
        <span className="grid place-items-center w-6 h-6 rounded-lg bg-gradient-to-br from-brand to-brand-deep text-white text-[11px]">
          山
        </span>
        <span className="font-black text-[13px] tracking-tight text-brand-deep">개운산</span>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-[11px] font-bold text-gray-500 hover:text-brand transition"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="space-y-2 text-[10px] text-gray-400 font-medium leading-relaxed max-w-[22rem] mx-auto">
        <p>
          본 서비스는 전통 풍수 오성체 이론과 사주 12지 오행을 결합한 <b>콘텐츠 추천</b>이며, 종교·의료·법률
          자문이 아닙니다.
        </p>
        <p>
          등산 시 안전수칙을 준수하시고, 위험 코스는 전문 가이드와 동행하세요. 산불방지 입산 통제
          기간에는 관할 기관 공지를 먼저 확인해 주세요.
        </p>
      </div>

      <p className="text-[10px] text-gray-300 font-bold mt-6">© 2026 GAEUNSAN</p>
    </footer>
  );
}
