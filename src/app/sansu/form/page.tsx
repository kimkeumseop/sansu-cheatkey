'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getZodiacByYear, ZODIAC_EMOJI, ZODIAC_HANJA, ZODIAC_TO_ELEMENT } from '@/lib/sansu/zodiac';
import {
  SUPPLEMENT_RULE,
  ELEMENT_TO_SHAPE,
  SHAPE_META,
  ELEMENT_LABEL,
  WISH_CATEGORIES,
} from '@/lib/sansu/element';

const CURRENT_YEAR = new Date().getFullYear();
const MIN_YEAR = 1920;

export default function SansuFormPage() {
  const router = useRouter();
  const [birthYear, setBirthYear] = useState('1990');
  const [category, setCategory] = useState('합격');
  const [useLocation, setUseLocation] = useState(false);
  const [locating, setLocating] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locError, setLocError] = useState<string | null>(null);

  const year = parseInt(birthYear, 10);
  const isValidYear = !Number.isNaN(year) && year >= MIN_YEAR && year <= CURRENT_YEAR;

  const preview = useMemo(() => {
    if (!isValidYear) return null;
    const zodiac = getZodiacByYear(year);
    const userElement = ZODIAC_TO_ELEMENT[zodiac];
    const supplement = SUPPLEMENT_RULE[userElement];
    return {
      zodiac,
      userElement,
      supplement,
      meta: SHAPE_META[ELEMENT_TO_SHAPE[supplement]],
    };
  }, [year, isValidYear]);

  const handleLocation = () => {
    if (useLocation) {
      setUseLocation(false);
      setCoords(null);
      setLocError(null);
      return;
    }
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setLocError('이 브라우저에서는 위치를 사용할 수 없어요.');
      return;
    }
    setLocating(true);
    setLocError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setUseLocation(true);
        setLocating(false);
      },
      () => {
        setLocError('위치를 가져오지 못했어요. 권한을 확인해 주세요.');
        setLocating(false);
      },
      { timeout: 8000, maximumAge: 300_000 }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidYear) return;

    const params = new URLSearchParams({ birthYear: String(year), category });
    if (useLocation && coords) {
      params.set('lat', coords.lat.toFixed(4));
      params.set('lng', coords.lng.toFixed(4));
    }
    router.push(`/sansu/result?${params.toString()}`);
  };

  return (
    <div className="px-6 pt-10 pb-12">
      <header className="text-center mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-brand-soft text-brand text-[10px] font-black tracking-[0.2em] mb-3">
          STEP 1
        </span>
        <h1 className="text-2xl font-black text-gray-900 mb-2">내 운명의 산 찾기</h1>
        <p className="text-[13px] text-gray-500 font-medium">
          태어난 연도와 지금 필요한 기운만 알려주세요.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="w-full space-y-8">
        {/* 태어난 연도 */}
        <div>
          <label
            htmlFor="birthYear"
            className="block text-[11px] font-black mb-2.5 text-gray-500 tracking-[0.18em]"
          >
            태어난 연도
          </label>
          <div className="relative">
            <input
              id="birthYear"
              type="number"
              inputMode="numeric"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="w-full border border-gray-200 px-4 py-3.5 pr-12 rounded-xl text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              required
              min={MIN_YEAR}
              max={CURRENT_YEAR}
              placeholder="1990"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 pointer-events-none">
              년
            </span>
          </div>

          {!isValidYear && birthYear !== '' && (
            <p className="text-[11px] text-rose-500 font-bold mt-2">
              {MIN_YEAR}년 ~ {CURRENT_YEAR}년 사이로 입력해 주세요.
            </p>
          )}

          {preview && (
            <div className="mt-3 flex items-center gap-3.5 bg-brand-soft border border-brand/10 rounded-2xl px-4 py-3.5 animate-rise">
              <span className="text-2xl" aria-hidden>
                {ZODIAC_EMOJI[preview.zodiac]}
              </span>
              <div className="text-[12px] leading-relaxed">
                <p className="font-black text-gray-900">
                  {preview.zodiac}{' '}
                  <span className="font-hanja text-brand font-normal">
                    {ZODIAC_HANJA[preview.zodiac]}
                  </span>
                </p>
                <p className="text-gray-500 font-medium">
                  타고난 기운 <b className="text-gray-700 font-hanja">{preview.userElement}</b> · 보충할
                  기운{' '}
                  <b className="text-brand font-hanja">{preview.supplement}</b>(
                  {ELEMENT_LABEL[preview.supplement]}) →{' '}
                  <b className="text-gray-700">{preview.meta.nickname}</b>
                </p>
              </div>
            </div>
          )}

          <p className="text-[10px] text-gray-400 mt-2 font-medium leading-relaxed">
            * 띠는 양력 1월 1일 기준으로 계산합니다. 1~2월생은 앞 띠일 수 있어요.
          </p>
        </div>

        {/* 소원 카테고리 */}
        <div>
          <span className="block text-[11px] font-black mb-2.5 text-gray-500 tracking-[0.18em]">
            어떤 기운이 필요한가요?
          </span>
          <div className="grid grid-cols-2 gap-2">
            {WISH_CATEGORIES.map((c) => {
              const active = category === c.key;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCategory(c.key)}
                  aria-pressed={active}
                  className={`flex items-center gap-2 px-4 py-3.5 rounded-2xl border text-[13px] font-bold transition-all duration-150 ${
                    active
                      ? 'bg-gradient-to-r from-brand to-brand-deep text-white border-transparent shadow-lg glow-brand scale-[1.02]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-brand/40 hover:bg-brand-soft'
                  }`}
                >
                  <span aria-hidden>{c.emoji}</span>
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 위치 (선택) */}
        <div>
          <span className="block text-[11px] font-black mb-2.5 text-gray-500 tracking-[0.18em]">
            가까운 산 우선 <span className="text-gray-300">(선택)</span>
          </span>
          <button
            type="button"
            onClick={handleLocation}
            disabled={locating}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border text-[13px] font-bold transition ${
              useLocation
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-white border-gray-200 text-gray-600 hover:border-brand/40'
            } disabled:opacity-60`}
          >
            <span className="flex items-center gap-2">
              <span aria-hidden>📍</span>
              {locating
                ? '위치 확인 중…'
                : useLocation
                  ? '내 위치 반영됨 · 해제하려면 탭'
                  : '내 위치 기준으로 추천받기'}
            </span>
            <span
              className={`w-9 h-5 rounded-full relative transition ${
                useLocation ? 'bg-emerald-500' : 'bg-gray-200'
              }`}
              aria-hidden
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
                  useLocation ? 'left-[1.15rem]' : 'left-0.5'
                }`}
              />
            </span>
          </button>
          {locError && <p className="text-[11px] text-rose-500 font-bold mt-2">{locError}</p>}
          <p className="text-[10px] text-gray-400 mt-2 font-medium">
            위치는 추천 정렬에만 쓰이고 저장하지 않습니다.
          </p>
        </div>

        <button
          type="submit"
          disabled={!isValidYear}
          className="w-full bg-gradient-to-r from-brand to-brand-deep text-white font-black text-[15px] py-4 px-6 rounded-2xl shadow-lg glow-brand-lg hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-40 disabled:hover:scale-100"
        >
          결과 보기
        </button>
      </form>
    </div>
  );
}
