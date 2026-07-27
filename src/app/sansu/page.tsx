import Link from 'next/link';
import type { Metadata } from 'next';
import { getKstDate, getTodayPick } from '@/lib/sansu/recommender';
import { SHAPE_META, DAY_NAMES, DAY_TO_ELEMENT, ELEMENT_LABEL, ShapeType } from '@/lib/sansu/element';
import { SITE_DESCRIPTION } from '@/lib/sansu/site';

export const metadata: Metadata = {
  title: '개운산(GAEUNSAN) - 오늘 어느 산에 가야 운이 트일까?',
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/sansu' },
};

// 요일 기운이 매일 바뀌므로 1시간 주기로 재생성
export const revalidate = 3600;

const SHAPE_ORDER: ShapeType[] = ['wood', 'fire', 'earth', 'metal', 'water'];

const ARTICLES = [
  {
    slug: 'five-elements',
    tag: '풍수지리',
    tagColor: 'text-brand',
    title: '당신의 운명을 바꾸는 산의 5가지 형태: 오성체 가이드',
    desc: '목·화·토·금·수 — 산의 모양에 따라 달라지는 기운',
  },
  {
    slug: 'zodiac-mountain',
    tag: '띠별 궁합',
    tagColor: 'text-amber-600',
    title: '12지신과 궁합이 맞는 명산: 띠별로 다른 영험한 장소들',
    desc: '내 띠와 상생하는 산에서 소원이 더 잘 이뤄지는 이유',
  },
  {
    slug: 'mountain-healing',
    tag: '마인드 케어',
    tagColor: 'text-emerald-600',
    title: '왜 힘들 때 산에 가야 할까? 과학과 풍수가 말하는 치유력',
    desc: '피톤치드와 지기(地氣)의 만남, 마음의 정화',
  },
];

const STEPS = [
  { n: '01', title: '태어난 연도 입력', desc: '12지신에서 타고난 오행을 계산합니다.' },
  { n: '02', title: '부족한 기운 분석', desc: '오행 상생 원리로 채워야 할 기운을 찾습니다.' },
  { n: '03', title: '오늘의 명산 추천', desc: '요일 시너지까지 반영해 명산 30선에서 고릅니다.' },
];

export default async function SansuLandingPage() {
  const today = getKstDate();
  const dayName = DAY_NAMES[today.getDay()];
  const dayElement = DAY_TO_ELEMENT[today.getDay()];
  const todayPick = await getTodayPick(today);
  const pickMeta = SHAPE_META[todayPick.shape_type];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="relative w-full px-6 pt-12 pb-14 text-center overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-soft to-transparent -z-10" />

        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-brand/15 text-[11px] font-black text-brand tracking-[0.12em] card-soft mb-6">
          🏔️ 명산 30선 · 풍수 오성체 분석
        </span>

        <h2 className="text-brand font-black text-xs tracking-[0.3em] mb-3">GAEUNSAN</h2>

        <h1 className="text-[2rem] leading-[1.25] font-black text-gray-900 mb-4 text-balance">
          오늘 어느 산에 가야
          <br />
          <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">
            운이 트일까?
          </span>
        </h1>

        <p className="text-gray-500 text-[15px] font-medium leading-relaxed mb-8">
          사주 12지 오행 + 풍수 오성체 분석으로 찾은,
          <br />
          오늘 당신이 가야 할 영험한 산
        </p>

        <Link
          href="/sansu/form"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand-deep text-white font-bold py-4 px-10 rounded-2xl shadow-lg glow-brand-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          내 산 찾기
          <span aria-hidden>→</span>
        </Link>

        <p className="text-[11px] text-gray-400 mt-4 font-medium">
          30초 · 무료 · 가입 없음
        </p>

        <div className="mt-8 mx-auto max-w-[20rem] rounded-2xl bg-white/90 backdrop-blur border border-brand/10 px-4 py-3 card-soft">
          <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
            오늘 <b className="text-gray-900">{dayName}요일</b>은{' '}
            <b className="text-brand font-hanja">{dayElement}</b>({ELEMENT_LABEL[dayElement]})의 날 —{' '}
            {ELEMENT_LABEL[dayElement]}의 기운을 품은 산이 가장 강해집니다.
          </p>
        </div>
      </header>

      {/* ── 오늘의 추천 ───────────────────────────────────── */}
      <section className="px-6 pb-4">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="font-black text-[17px] text-gray-900">오늘의 산</h3>
          <span className="text-[11px] font-bold text-gray-400">
            {today.getMonth() + 1}월 {today.getDate()}일 · {dayName}요일
          </span>
        </div>

        <Link
          href={`/sansu/mountain/${todayPick.id}`}
          className={`block relative overflow-hidden rounded-[2rem] p-7 text-white bg-gradient-to-br ${pickMeta.gradient} shadow-lg hover:-translate-y-1 transition-transform duration-200`}
        >
          <div className="absolute -right-8 -bottom-10 text-[9rem] leading-none opacity-15 select-none" aria-hidden>
            {pickMeta.emoji}
          </div>

          <div className="relative">
            <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur text-[10px] font-black tracking-[0.15em] mb-4">
              {pickMeta.formal}
            </span>
            <h4 className="text-3xl font-black mb-1">{todayPick.name_ko}</h4>
            <p className="font-hanja text-lg opacity-80 mb-4">{todayPick.name_hanja}</p>
            <p className="text-[13px] font-medium opacity-90 leading-relaxed mb-5">
              {todayPick.energy_keywords.slice(0, 4).join(' · ')}
            </p>
            <div className="flex items-center justify-between text-[12px] font-bold">
              <span className="opacity-80">
                {todayPick.region} · {todayPick.elevation_m}m
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur">
                자세히 보기 →
              </span>
            </div>
          </div>
        </Link>

        <p className="text-[11px] text-gray-400 mt-3 text-center font-medium">
          내 사주까지 반영한 추천은{' '}
          <Link href="/sansu/form" className="text-brand font-bold underline underline-offset-2">
            여기서 확인
          </Link>
        </p>
      </section>

      {/* ── 오성체 5종 ────────────────────────────────────── */}
      <section className="px-6 pt-10 pb-2">
        <h3 className="font-black text-[17px] text-center mb-2 text-gray-900">왜 30개 산인가?</h3>
        <p className="text-[13px] text-gray-500 text-center mb-6 font-medium leading-relaxed">
          산은 생김새에 따라 다섯 가지 기운을 냅니다.
          <br />
          당신에게 부족한 기운을 채워줄 산형을 찾습니다.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {SHAPE_ORDER.map((shape, i) => {
            const m = SHAPE_META[shape];
            const isLast = i === SHAPE_ORDER.length - 1;
            return (
              <div
                key={shape}
                className={`${m.tint} ${m.border} border p-5 rounded-[1.5rem] text-center card-soft ${
                  isLast ? 'col-span-2' : ''
                }`}
              >
                <span className="text-2xl block mb-1.5">{m.emoji}</span>
                <span className={`${m.text} font-black text-[14px] block mb-1`}>{m.nickname}</span>
                <span className="text-[11px] text-gray-500 font-medium block mb-1.5">{m.keywords}</span>
                <span className="text-[10px] text-gray-400 font-bold tracking-wider font-hanja">
                  {m.formal}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 작동 방식 ─────────────────────────────────────── */}
      <section className="px-6 pt-10">
        <h3 className="font-black text-[17px] text-center mb-6 text-gray-900">어떻게 찾아주나요?</h3>
        <ol className="space-y-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="flex gap-4 items-start bg-white border border-gray-100 rounded-[1.5rem] p-5 card-soft"
            >
              <span className="shrink-0 grid place-items-center w-9 h-9 rounded-xl bg-brand-soft text-brand font-black text-[13px]">
                {s.n}
              </span>
              <div>
                <h4 className="font-bold text-[14px] text-gray-900 mb-0.5">{s.title}</h4>
                <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 풍수 근거 ─────────────────────────────────────── */}
      <section className="px-6 pt-10">
        <h3 className="font-black text-[17px] text-center mb-5 text-gray-900">
          600년 전부터 인정받은 풍수
        </h3>
        <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-6 rounded-[2rem] card-soft">
          <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-white border border-amber-200 text-[10px] font-black text-amber-700 tracking-[0.1em]">
            조선왕조실록
          </span>
          <p className="text-[13px] text-gray-700 leading-[1.85] font-medium">
            조선시대 경복궁 터를 정할 때, 관악산이{' '}
            <b className="text-gray-900 font-hanja">화형산(火形山)</b>이라 그 화기(火氣)를 우려해
            광화문 앞에 해태 석상을 세웠다는 기록이 있습니다. 산의 모양이 사람의 운을 흔든다고 본
            선조들의 시선 — 지금 당신에게 필요한 기운은 무엇인가요?
          </p>
        </div>
      </section>

      {/* ── 매거진 ────────────────────────────────────────── */}
      <section className="px-6 pt-10">
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="font-black text-[17px] text-gray-900">개운 매거진</h3>
          <Link href="/sansu/articles" className="text-[11px] text-brand font-bold hover:underline">
            모두 보기 →
          </Link>
        </div>
        <div className="space-y-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/sansu/articles/${a.slug}`}
              className="block bg-white border border-gray-100 p-5 rounded-[1.5rem] card-soft hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <span className={`text-[10px] ${a.tagColor} font-black block mb-1.5 tracking-[0.1em]`}>
                {a.tag}
              </span>
              <h4 className="font-bold text-[14px] mb-1.5 leading-snug text-gray-900">{a.title}</h4>
              <p className="text-[12px] text-gray-500 font-medium line-clamp-1">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 최종 CTA ──────────────────────────────────────── */}
      <section className="px-6 pt-12 pb-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-purple-900 text-white p-8 rounded-[2rem] text-center shadow-lg glow-brand-lg">
          <div className="absolute -right-6 -top-8 text-[8rem] leading-none opacity-10 select-none" aria-hidden>
            山
          </div>
          <div className="relative">
            <h3 className="font-black text-xl mb-2">당신의 산은 어디일까요?</h3>
            <p className="text-[12px] text-purple-100 mb-6 leading-relaxed font-medium">
              태어난 연도 하나면 충분합니다.
              <br />
              오늘 기준 가장 잘 맞는 명산 3곳을 알려드려요.
            </p>
            <Link
              href="/sansu/form"
              className="inline-block bg-white text-brand-deep px-9 py-4 rounded-2xl font-black text-[15px] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              무료로 추천받기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
