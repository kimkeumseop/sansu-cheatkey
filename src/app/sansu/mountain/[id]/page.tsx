import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getAllMountains, getMountainById, getRelatedMountains } from '@/lib/sansu/recommender';
import { SHAPE_META, ELEMENT_LABEL, SHAPE_TO_ELEMENT } from '@/lib/sansu/element';
import { ALL_ZODIACS, ZODIAC_EMOJI } from '@/lib/sansu/zodiac';
import { absoluteUrl } from '@/lib/sansu/site';
import KakaoMap from '@/components/sansu/KakaoMap';
import ShareButtons from '@/components/sansu/ShareButtons';

type Props = { params: { id: string } };

const LEVEL_LABEL: Record<string, { text: string; className: string }> = {
  easy: { text: '초급', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  intermediate: { text: '중급', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  hard: { text: '상급', className: 'bg-rose-50 text-rose-700 border-rose-200' },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mountain = await getMountainById(params.id);
  if (!mountain) return { title: '산을 찾을 수 없습니다' };

  const meta = SHAPE_META[mountain.shape_type];
  const title = `${mountain.name_ko}(${mountain.name_hanja}) - ${meta.formal}`;
  const description = `${mountain.name_ko}은 ${meta.formal}. ${mountain.energy_keywords.join(' · ')}의 기운이 흐릅니다. 명당 포인트와 추천 등산 코스, 잘 맞는 띠까지 한눈에.`;
  const image = `/api/og?mountain=${mountain.id}`;

  return {
    title,
    description,
    alternates: { canonical: `/sansu/mountain/${mountain.id}` },
    openGraph: {
      type: 'article',
      title: `${mountain.name_ko} - ${meta.nickname}`,
      description: mountain.story.slice(0, 160),
      url: `/sansu/mountain/${mountain.id}`,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${mountain.name_ko} - ${meta.nickname}`,
      description: mountain.energy_keywords.join(' · '),
      images: [image],
    },
  };
}

export async function generateStaticParams() {
  const mountains = await getAllMountains();
  return mountains.map((mountain) => ({ id: mountain.id }));
}

export default async function MountainDetailPage({ params }: Props) {
  const mountain = await getMountainById(params.id);
  if (!mountain) notFound();

  const meta = SHAPE_META[mountain.shape_type];
  const related = await getRelatedMountains(mountain);
  const level = LEVEL_LABEL[mountain.level] ?? LEVEL_LABEL.intermediate;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: `${mountain.name_ko}(${mountain.name_hanja})`,
    description: mountain.story,
    url: absoluteUrl(`/sansu/mountain/${mountain.id}`),
    address: { '@type': 'PostalAddress', addressCountry: 'KR', addressLocality: mountain.address },
    geo: { '@type': 'GeoCoordinates', latitude: mountain.lat, longitude: mountain.lng },
    touristType: mountain.wish_categories,
  };

  return (
    <>
      {/* ── 히어로 ────────────────────────────────────────── */}
      <div className={`relative w-full h-64 bg-gradient-to-br ${meta.gradient} overflow-hidden`}>
        <div
          className="absolute -right-8 top-2 text-[13rem] leading-none opacity-15 select-none"
          aria-hidden
        >
          {meta.emoji}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-black tracking-[0.1em] mb-2.5">
            {meta.emoji} {meta.formal}
          </div>
          <h1 className="text-3xl font-black mb-1">{mountain.name_ko}</h1>
          <p className="font-hanja text-lg opacity-80 mb-1.5">{mountain.name_hanja}</p>
          <p className="text-[12px] font-bold opacity-85">
            {mountain.region} · {mountain.elevation_m}m
          </p>
        </div>
      </div>

      <div className="w-full px-6 pt-6 -mt-5 bg-white rounded-t-[2rem] relative z-10">
        {/* 요약 배지 */}
        <div className="flex flex-wrap gap-1.5 mb-7">
          <span className={`px-3 py-1.5 rounded-full border text-[11px] font-bold ${level.className}`}>
            난이도 {level.text}
          </span>
          <span className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-bold">
            오행 <b className="font-hanja">{SHAPE_TO_ELEMENT[mountain.shape_type]}</b> ·{' '}
            {ELEMENT_LABEL[SHAPE_TO_ELEMENT[mountain.shape_type]]}
          </span>
          <span className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-bold">
            기운 좋은 요일 {mountain.best_day_of_week.join('·')}
          </span>
        </div>

        {/* 기운 키워드 */}
        <section className="mb-8">
          <h2 className="font-black text-[15px] mb-3 text-gray-900">이 산의 기운</h2>
          <div className="flex flex-wrap gap-2">
            {mountain.energy_keywords.map((k, i) => (
              <span
                key={i}
                className={`px-3.5 py-2 rounded-2xl text-[13px] font-bold ${meta.tint} ${meta.text} border ${meta.border}`}
              >
                {k}
              </span>
            ))}
          </div>
          <p className="text-[12px] text-gray-500 font-medium mt-3 leading-relaxed">
            {meta.formal}은 {meta.shape} 형태로, {meta.keywords}의 기운을 냅니다.
          </p>
        </section>

        {/* 풍수 스토리 */}
        <section className="mb-8">
          <h2 className="font-black text-[15px] mb-3 text-gray-900">풍수 스토리</h2>
          <p className="text-[13px] text-gray-700 leading-[1.9] font-medium bg-gray-50 p-5 rounded-[1.5rem]">
            {mountain.story}
          </p>
        </section>

        {/* 트렌드 노트 */}
        {mountain.trend_note && (
          <section className="mb-8">
            <div className="relative bg-gradient-to-br from-brand-soft to-white border border-brand/15 p-5 rounded-[1.5rem] card-soft">
              <span className="absolute -top-2.5 left-5 px-2.5 py-0.5 rounded-full bg-brand text-white text-[10px] font-black tracking-[0.1em]">
                TREND
              </span>
              <p className="text-[12.5px] text-gray-700 leading-[1.9] font-medium mt-1">
                {mountain.trend_note}
              </p>
            </div>
          </section>
        )}

        {/* 위치 */}
        <section className="mb-8">
          <h2 className="font-black text-[15px] mb-3 text-gray-900">위치</h2>
          <KakaoMap
            lat={mountain.lat}
            lng={mountain.lng}
            mountainName={mountain.name_ko}
            className="w-full h-56"
          />
          <p className="text-[11px] text-gray-400 mt-2 text-center font-medium">{mountain.address}</p>
        </section>

        {/* 명당 포인트 */}
        <section className="mb-8">
          <h2 className="font-black text-[15px] mb-3 text-gray-900">명당 포인트</h2>
          <div className="space-y-2.5">
            {mountain.famous_spots.map((spot, idx) => (
              <div
                key={idx}
                className="border border-gray-100 p-5 rounded-[1.5rem] card-soft bg-white"
              >
                <h3 className="font-bold text-[14px] text-brand mb-1">📍 {spot.name}</h3>
                <p className="text-[12.5px] text-gray-600 font-medium leading-relaxed">{spot.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 추천 코스 */}
        <section className="mb-8">
          <h2 className="font-black text-[15px] mb-3 text-gray-900">추천 코스</h2>
          <div className="space-y-2.5">
            {mountain.best_courses.map((course, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-[1.5rem] border border-slate-100">
                <div className="flex justify-between items-start gap-3 mb-2.5">
                  <h3 className="font-bold text-[14px] text-gray-900">{course.name}</h3>
                  <span className="shrink-0 text-[11px] bg-white border border-slate-200 px-2.5 py-1 rounded-full text-slate-600 font-bold">
                    {course.difficulty}
                  </span>
                </div>
                <div className="text-[12px] text-gray-500 font-medium flex flex-wrap gap-x-4 gap-y-1">
                  <span>
                    ⏱ 약 {Math.floor(course.duration_min / 60)}시간
                    {course.duration_min % 60 ? ` ${course.duration_min % 60}분` : ''}
                  </span>
                  <span>🚇 {course.transit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 소원 카테고리 */}
        <section className="mb-8">
          <h2 className="font-black text-[15px] mb-3 text-gray-900">이런 분들께 추천해요</h2>
          <div className="flex flex-wrap gap-2">
            {mountain.wish_categories.map((wish, idx) => (
              <span
                key={idx}
                className="bg-brand-soft text-brand px-3.5 py-2 rounded-2xl text-[13px] font-bold"
              >
                #{wish}
              </span>
            ))}
          </div>
        </section>

        {/* 12지 궁합 매트릭스 */}
        <section className="mb-8">
          <h2 className="font-black text-[15px] mb-3 text-gray-900">띠별 궁합</h2>
          <div className="grid grid-cols-4 gap-2">
            {ALL_ZODIACS.map((z) => {
              const match = mountain.best_for_zodiac.includes(z);
              return (
                <div
                  key={z}
                  className={`text-center py-3 rounded-2xl border transition ${
                    match
                      ? 'bg-amber-50 border-amber-200 shadow-sm'
                      : 'bg-gray-50 border-gray-100 opacity-45'
                  }`}
                >
                  <span className="block text-lg leading-none mb-1" aria-hidden>
                    {ZODIAC_EMOJI[z]}
                  </span>
                  <span
                    className={`block text-[10px] font-bold ${
                      match ? 'text-amber-800' : 'text-gray-400'
                    }`}
                  >
                    {z}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-[11px] text-gray-400 mt-2.5 font-medium text-center">
            강조된 띠가 이 산과 특히 잘 맞습니다.
          </p>
        </section>

        {/* 공유 */}
        <section className="mb-10">
          <ShareButtons
            mountainName={mountain.name_ko}
            zodiac={mountain.best_for_zodiac[0] ?? '모든 띠'}
            shapeKo={meta.nickname}
            energyKeywords={mountain.energy_keywords}
            mountainId={mountain.id}
          />
        </section>

        {/* 같은 산형 크로스 추천 */}
        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="font-black text-[15px] mb-1 text-gray-900">같은 기운의 다른 산</h2>
            <p className="text-[12px] text-gray-500 font-medium mb-3">
              {meta.formal}의 기운을 나눠 가진 명산들
            </p>
            <div className="space-y-2.5">
              {related.map((m) => (
                <Link
                  key={m.id}
                  href={`/sansu/mountain/${m.id}`}
                  className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-gray-100 card-soft hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  <span
                    className="shrink-0 grid place-items-center w-11 h-11 rounded-xl text-xl"
                    style={{ backgroundColor: `${meta.hex}1A` }}
                    aria-hidden
                  >
                    {meta.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[14px] text-gray-900 truncate">{m.name_ko}</h3>
                    <p className="text-[11px] text-gray-500 font-medium truncate">
                      {m.region} · {m.energy_keywords.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                  <span className="shrink-0 text-gray-300 text-sm">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-brand-deep via-brand to-purple-900 text-white p-7 rounded-[2rem] text-center shadow-lg glow-brand-lg">
            <h2 className="font-black text-[17px] mb-2">여기가 내 산이 맞을까?</h2>
            <p className="text-[12px] text-purple-100 mb-5 leading-relaxed font-medium">
              태어난 연도로 내 사주와의 궁합을
              <br />
              30초 만에 확인해 보세요.
            </p>
            <Link
              href="/sansu/form"
              className="inline-block bg-white text-brand-deep px-8 py-3.5 rounded-2xl font-black text-[14px] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              내 산 찾기
            </Link>
          </div>
        </section>

        <p className="text-[10px] text-gray-300 text-center font-medium leading-relaxed mb-6">
          산불방지 입산 통제(봄 2~5월, 가을 11~12월) 기간에는
          <br />
          방문 전 관할 국립공원·지자체 공지를 확인해 주세요.
        </p>

        <Link
          href="/sansu"
          className="block w-full text-center text-gray-400 text-[13px] font-bold pb-10 hover:text-gray-900 transition"
        >
          ← 처음으로 돌아가기
        </Link>
      </div>

      <Script
        id={`mountain-jsonld-${mountain.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
