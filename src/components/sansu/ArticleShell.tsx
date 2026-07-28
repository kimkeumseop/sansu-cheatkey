import Link from 'next/link';

type Props = {
  /** 줄바꿈이 필요하면 <br/>를 포함한 노드를 넘긴다 */
  title: React.ReactNode;
  date: string;
  children: React.ReactNode;
  /** 하단 CTA 문구. 생략하면 기본값 사용 */
  ctaTitle?: string;
  ctaDesc?: React.ReactNode;
  ctaLabel?: string;
  /** 글 성격에 맞는 면책 문구 */
  disclaimer?: React.ReactNode;
};

const DEFAULT_DISCLAIMER = (
  <>
    ※ 본 글은 전통 풍수·민속 문화와 일반적인 산행 정보를 소개하는 콘텐츠이며, 의학적·법률적 조언이 아닙니다. 산행 시에는
    기상 상황과 본인의 건강 상태를 우선 고려하시고, 위험 구간은 반드시 정규 등산로를 이용해 주세요.
  </>
);

export default function ArticleShell({
  title,
  date,
  children,
  ctaTitle = '오늘 나에게 맞는 산은 어디일까?',
  ctaDesc = (
    <>
      태어난 해와 소원 분야만 고르면
      <br />
      개운산이 어울리는 명산을 찾아드립니다.
    </>
  ),
  ctaLabel = '무료로 추천받기',
  disclaimer = DEFAULT_DISCLAIMER,
}: Props) {
  return (
    <article className="p-6 pt-12">
      <Link href="/sansu/articles" className="text-xs text-[#7C3AED] font-bold mb-4 block hover:underline">
        ← 목록으로 돌아가기
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-4">{title}</h1>
        <p className="text-sm text-gray-500">{date} · 개운산 편집팀</p>
      </header>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
        {children}

        <section className="bg-purple-900 text-white p-6 rounded-[2rem] mt-12 text-center not-prose">
          <p className="font-bold mb-4">{ctaTitle}</p>
          <p className="text-xs text-purple-200 mb-6 leading-relaxed">{ctaDesc}</p>
          <Link
            href="/sansu/form"
            className="inline-block bg-white text-[#7C3AED] px-8 py-3 rounded-full text-sm font-bold shadow-xl transition hover:scale-[1.02] active:scale-[0.98]"
          >
            {ctaLabel}
          </Link>
        </section>

        <p className="text-[11px] text-gray-400 leading-relaxed mt-8">{disclaimer}</p>
      </div>
    </article>
  );
}

/** 아티클 본문에서 반복적으로 쓰는 소제목 */
export function H2({ children, accent = 'border-[#7C3AED]' }: { children: React.ReactNode; accent?: string }) {
  return <h2 className={`text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 ${accent} pl-3`}>{children}</h2>;
}

/** 강조 박스 */
export function Note({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="not-prose bg-gray-50 border border-gray-100 rounded-2xl p-5 my-4">
      <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
      <p className="text-[13px] text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

/** 자주 묻는 질문 한 항목 */
export function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5">
      <p className="font-bold text-gray-900 mb-1 text-sm">Q. {q}</p>
      <p className="text-[13px] text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}
