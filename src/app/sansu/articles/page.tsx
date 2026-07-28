import Link from 'next/link';
import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/sansu/articles';

export const metadata: Metadata = {
  title: '개운 매거진',
  description:
    '풍수 오성체, 띠별 명산 궁합, 기도처 가이드, 계절별 산행 기준까지 — 산과 운명에 관한 이야기와 실전 정보를 모았습니다.',
  alternates: { canonical: '/sansu/articles' },
};

export default function ArticlesPage() {
  return (
    <div className="p-6 pt-12">
      <h1 className="text-2xl font-bold mb-2">개운 매거진</h1>
      <p className="text-gray-500 text-sm mb-8 font-medium">산과 운명에 관한 영험한 이야기들</p>

      <div className="space-y-6">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/sansu/articles/${article.slug}`}
            className="block group border-b border-gray-100 pb-6 last:border-0"
          >
            <span className="text-[10px] text-[#7C3AED] font-bold mb-1 block uppercase tracking-wider">
              {article.date}
            </span>
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#7C3AED] transition mb-2 leading-snug">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{article.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-slate-900 text-white p-8 rounded-[2rem] text-center">
        <h3 className="font-bold mb-2">운명의 산을 찾으셨나요?</h3>
        <p className="text-xs text-gray-400 mb-6 leading-relaxed">
          당신의 사주와 가장 잘 맞는
          <br />
          영험한 산을 지금 바로 확인해 보세요.
        </p>
        <Link
          href="/sansu/form"
          className="inline-block bg-[#7C3AED] px-8 py-3 rounded-full font-bold text-sm shadow-xl transition hover:scale-[1.02] active:scale-[0.98]"
        >
          무료로 추천받기
        </Link>
      </div>
    </div>
  );
}
