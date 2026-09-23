import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { recommend, getFortuneProfile } from '@/lib/sansu/recommender';
import { SHAPE_META, ELEMENT_LABEL, getWishCategory } from '@/lib/sansu/element';
import { ZODIAC_EMOJI, ZODIAC_HANJA } from '@/lib/sansu/zodiac';
import ShareButtons from '@/components/sansu/ShareButtons';
import KakaoMap from '@/components/sansu/KakaoMap';

type SearchParams = { [key: string]: string | string[] | undefined };

function readNumber(v: string | string[] | undefined): number | undefined {
  const raw = Array.isArray(v) ? v[0] : v;
  if (!raw) return undefined;
  const n = Number(raw);
  return Number.isFinite(n) ? n : undefined;
}

function readString(v: string | string[] | undefined): string | undefined {
  const raw = Array.isArray(v) ? v[0] : v;
  return raw || undefined;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const birthYear = readNumber(searchParams.birthYear);
  if (!birthYear) return { title: '추천 결과' };

  const category = readString(searchParams.category);
  const results = await recommend({ birthYear, category });
  const best = results[0];
  if (!best) return { title: '추천 결과' };

  const { zodiac } = getFortuneProfile(birthYear);
  const title = `${zodiac}의 산행 후보: ${best.mountain.name_ko}`;
  const description = `${SHAPE_META[best.mountain.shape_type].formal} · ${best.mountain.region} — 띠와 관심 주제로 비교한 산행 후보`;
  const image = `/api/og?mountain=${best.mountain.id}&zodiac=${encodeURIComponent(zodiac)}`;

  return {
    title,
    description,
    // 파라미터 조합마다 URL이 생기므로 색인은 막고 링크만 따라가게 한다
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function ResultPage({ searchParams }: { searchParams: SearchParams }) {
  const birthYear = readNumber(searchParams.birthYear);
  if (!birthYear || birthYear < 1920 || birthYear > new Date().getFullYear()) {
    redirect('/sansu/form');
  }

  const category = readString(searchParams.category);
  const userLat = readNumber(searchParams.lat);
  const userLng = readNumber(searchParams.lng);

  const recommendations = await recommend({ birthYear, category, userLat, userLng });
  const profile = getFortuneProfile(birthYear);

  if (recommendations.length === 0) {
    return (
      <div className="p-10 text-center">
        <p className="text-gray-500 font-medium mb-6">결과를 찾을 수 없습니다.</p>
        <Link href="/sansu/form" className="text-brand font-bold underline">
          다시 시도하기
        </Link>
      </div>
    );
  }

  const best = recommendations[0];
  const meta = SHAPE_META[best.mountain.shape_type];
  const wish = getWishCategory(category);
  const runnersUp = recommendations.slice(1);

  return (
    <div className="pb-16">
      {/* ── 메인 결과 카드 ────────────────────────────────── */}
      <div
        className={`relative w-full px-6 pt-10 pb-20 text-white text-center bg-gradient-to-br ${meta.gradient} rounded-b-[2.5rem] overflow-hidden`}
      >
        <div className="absolute -right-10 -bottom-12 text-[12rem] leading-none opacity-10 select-none" aria-hidden>
          {meta.emoji}
        </div>

        <div className="relative animate-rise">
          <p className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-[11px] font-black mb-5">
            <span aria-hidden>{ZODIAC_EMOJI[profile.zodiac]}</span>
            {profile.zodiac}
            <span className="font-hanja opacity-70">{ZODIAC_HANJA[profile.zodiac]}</span>
            산행 후보
          </p>

          <h1 className="text-[2.75rem] leading-none font-black mb-2.5">{best.mountain.name_ko}</h1>
          <p className="text-xl opacity-80 font-hanja mb-5">{best.mountain.name_hanja}</p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-[11px] font-bold">
              {meta.formal}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-[11px] font-bold">
              {best.mountain.region}
            </span>
            {typeof best.distanceKm === 'number' && (
              <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-[11px] font-bold">
                내 위치에서 직선거리 약 {Math.round(best.distanceKm)}km
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── 선정 근거 카드 ────────────────────────────────── */}
      <div className="w-[90%] mx-auto -mt-12 relative">
        <div className="bg-white rounded-[2rem] shadow-lg glow-brand p-6 border border-brand/5">
          <div className="flex items-end justify-between mb-2">
            <span className="text-[11px] font-black text-gray-500 tracking-[0.18em]">이 후보를 고른 기준</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">태어난 해의 띠, 관심 주제, 요일과 선택한 위치를 비교했습니다. 운세나 실제 효과를 예측하지 않습니다. <Link href="/sansu/about" className="text-brand underline">선정 기준</Link></p>

          <div className="flex flex-wrap gap-1.5">
            {best.isShapeMatch && (
              <span className="px-2.5 py-1 rounded-full bg-brand-soft text-brand text-[11px] font-bold">
                ✓ 산형 분류 일치
              </span>
            )}
            {best.isZodiacMatch && (
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-[11px] font-bold">
                ✓ {profile.zodiac} 분류 일치
              </span>
            )}
            {best.matchedWishes.length > 0 && wish && (
              <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 text-[11px] font-bold">
                ✓ {wish.label} 태그 일치
              </span>
            )}
            {(best.isDayMatch || best.isBestDay) && (
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                오늘({profile.dayName}) 요일 분류 일치
              </span>
            )}
          </div>

          <ShareButtons
            mountainName={best.mountain.name_ko}
            zodiac={profile.zodiac}
            shapeKo={meta.nickname}
            energyKeywords={best.mountain.energy_keywords}
            mountainId={best.mountain.id}
          />
        </div>
      </div>

      {/* ── 오행 흐름 ─────────────────────────────────────── */}
      <section className="w-[90%] mx-auto mt-8">
        <h2 className="font-black text-[15px] text-gray-900 mb-3">왜 이 산인가요?</h2>

        <div className="flex items-center justify-center gap-2 bg-gray-50 rounded-2xl py-5 px-4 mb-3">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 grid place-items-center font-hanja text-2xl text-gray-700 shadow-sm mb-1.5">
              {profile.userElement}
            </div>
            <p className="text-[10px] font-bold text-gray-500">띠의 오행</p>
          </div>

          <div className="text-center px-1">
            <p className="text-[10px] font-black text-gray-400 mb-1 tracking-wider">상생</p>
            <p className="text-gray-300 text-lg leading-none">→</p>
          </div>

          <div className="text-center">
            <div
              className="w-14 h-14 rounded-2xl grid place-items-center font-hanja text-2xl text-white shadow-md mb-1.5"
              style={{ backgroundColor: meta.hex }}
            >
              {profile.supplementElement}
            </div>
            <p className="text-[10px] font-bold text-gray-500">
              관련 · {ELEMENT_LABEL[profile.supplementElement]}
            </p>
          </div>

          <div className="text-center px-1">
            <p className="text-[10px] font-black text-gray-400 mb-1 tracking-wider">매칭</p>
            <p className="text-gray-300 text-lg leading-none">→</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 grid place-items-center text-2xl shadow-sm mb-1.5">
              {meta.emoji}
            </div>
            <p className="text-[10px] font-bold text-gray-500">{meta.nickname}</p>
          </div>
        </div>

        <p className="text-[13px] text-gray-600 leading-[1.9] font-medium">{best.reason}</p>

        <div className="mt-4 bg-brand-soft border border-brand/10 rounded-2xl p-4">
          <span className="text-[10px] font-black text-brand tracking-[0.18em] block mb-1.5">
            문화 키워드
          </span>
          <p className="text-[13px] font-bold text-gray-800">
            {best.mountain.energy_keywords.join(' · ')}
          </p>
        </div>
      </section>

      {/* ── 지도 ──────────────────────────────────────────── */}
      <section className="w-[90%] mx-auto mt-8">
        <h2 className="font-black text-[15px] text-gray-900 mb-3">위치</h2>
        <KakaoMap
          lat={best.mountain.lat}
          lng={best.mountain.lng}
          mountainName={best.mountain.name_ko}
          className="w-full h-48"
        />
        <p className="text-[11px] text-gray-400 mt-2 text-center font-medium">
          {best.mountain.address}
        </p>
      </section>

      {/* ── 명당 & 코스 미리보기 ──────────────────────────── */}
      {best.mountain.famous_spots.length > 0 && (
        <section className="w-[90%] mx-auto mt-8">
          <h2 className="font-black text-[15px] text-gray-900 mb-3">살펴볼 장소</h2>
          <div className="space-y-2.5">
            {best.mountain.famous_spots.slice(0, 2).map((spot, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 card-soft">
                <h3 className="font-bold text-[14px] text-gray-900 mb-1">{spot.name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="w-[90%] mx-auto mt-6">
        <Link
          href={`/sansu/mountain/${best.mountain.id}`}
          className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          {best.mountain.name_ko} 자세히 보기 (코스 · 지도)
        </Link>
      </div>

      {/* ── 차순위 ────────────────────────────────────────── */}
      {runnersUp.length > 0 && (
        <section className="w-[90%] mx-auto mt-10">
          <h2 className="font-black text-[15px] text-gray-900 mb-3">다른 산행 후보</h2>
          <div className="space-y-2.5">
            {runnersUp.map((rec) => {
              const m = SHAPE_META[rec.mountain.shape_type];
              return (
                <Link
                  key={rec.mountain.id}
                  href={`/sansu/mountain/${rec.mountain.id}`}
                  className="flex items-center gap-3.5 bg-white p-4 rounded-2xl card-soft border border-gray-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  <span
                    className="shrink-0 grid place-items-center w-11 h-11 rounded-xl text-xl"
                    style={{ backgroundColor: `${m.hex}1A` }}
                    aria-hidden
                  >
                    {m.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[14px] text-gray-900 truncate">
                      {rec.mountain.name_ko}
                    </h3>
                    <p className="text-[11px] text-gray-500 font-medium truncate">
                      {m.nickname} · {rec.mountain.region}
                    </p>
                  </div>
                  <span className="shrink-0 text-gray-300 text-sm">→</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── 재시도 CTA ────────────────────────────────────── */}
      <div className="w-[90%] mx-auto mt-10 text-center">
        <Link
          href="/sansu/form"
          className="inline-block text-[13px] font-bold text-gray-500 hover:text-brand underline underline-offset-4 transition"
        >
          다른 연도 · 다른 관심 주제로 다시 보기
        </Link>
        <p className="text-[10px] text-gray-300 mt-4 font-medium leading-relaxed">
          입산 통제와 기상 정보는 방문 전 해당 국립공원·지자체 공지를 확인해 주세요.
        </p>
      </div>
    </div>
  );
}
