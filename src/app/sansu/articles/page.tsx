import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개운 매거진',
  description: '풍수 오성체, 띠별 명산 궁합, 산의 치유력 — 산과 운명에 관한 이야기들.',
  alternates: { canonical: '/sansu/articles' },
};

const ARTICLES = [
  {
    slug: 'five-elements',
    title: '당신의 운명을 바꾸는 산의 5가지 형태: 오성체(五星體) 가이드',
    desc: '목, 화, 토, 금, 수 - 산의 모양에 따라 달라지는 풍수적 기운과 나에게 맞는 산을 찾는 방법.',
    date: '2026.05.31',
  },
  {
    slug: 'mountain-healing',
    title: '왜 힘들 때 산에 가야 할까? 과학과 풍수가 말하는 산의 치유력',
    desc: '피톤치드와 지기(地氣)의 만남. 마음의 정화가 필요할 때 꼭 방문해야 할 명소들.',
    date: '2026.05.30',
  },
  {
    slug: 'zodiac-mountain',
    title: '12지신과 궁합이 맞는 명산: 띠별로 다른 영험한 장소들',
    desc: '자신과 어울리는 띠의 기운을 가진 산에서 소원을 빌면 더 잘 이루어지는 이유.',
    date: '2026.05.29',
  }
];

export default function ArticlesPage() {
  return (
    <div className="p-6 pt-12">
      <h1 className="text-2xl font-bold mb-2">개운 매거진</h1>
      <p className="text-gray-500 text-sm mb-8 font-medium">산과 운명에 관한 영험한 이야기들</p>
      
      <div className="space-y-6">
        {ARTICLES.map((article, idx) => (
          <Link 
            key={idx} 
            href={`/sansu/articles/${article.slug}`}
            className="block group border-b border-gray-100 pb-6 last:border-0"
          >
            <span className="text-[10px] text-[#7C3AED] font-bold mb-1 block uppercase tracking-wider">{article.date}</span>
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#7C3AED] transition mb-2 leading-snug">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
              {article.desc}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-slate-900 text-white p-8 rounded-[2rem] text-center">
        <h3 className="font-bold mb-2">운명의 산을 찾으셨나요?</h3>
        <p className="text-xs text-gray-400 mb-6 leading-relaxed">
          당신의 사주와 가장 잘 맞는<br/>영험한 산을 지금 바로 확인해 보세요.
        </p>
        <Link href="/sansu/form" className="inline-block bg-[#7C3AED] px-8 py-3 rounded-full font-bold text-sm shadow-xl">
          무료로 추천받기
        </Link>
      </div>
    </div>
  );
}
