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
    전통 풍수·민속 문화는 실제 운세나 방문 효과를 보증하지 않습니다. 코스 시간과 개방 여부는 출발 전 관리 기관의 최신 안내를 확인해 주세요.
  </>
);

export default function ArticleShell({
  title,
  date,
  children,
  ctaTitle = '다음 산행 후보는 어디일까?',
  ctaDesc = (
    <>
      태어난 해와 관심 주제를 고르면
      <br />
      개운산의 산행 후보를 비교할 수 있습니다.
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
        <p className="text-[11px] text-gray-500 leading-relaxed">
          방문 전에는 <a href="https://www.knps.or.kr" target="_blank" rel="noopener noreferrer" className="underline">국립공원공단</a> 또는 관할 기관의 공지를 확인하세요. <Link href="/sansu/about" className="underline">개운산의 편집 기준</Link>도 참고할 수 있습니다.
        </p>
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
