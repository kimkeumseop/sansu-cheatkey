import { Mountain } from '@/types/mountain';
import { ZODIAC_TO_ELEMENT, getZodiacByYear } from './zodiac';
import {
  SUPPLEMENT_RULE,
  ELEMENT_TO_SHAPE,
  SHAPE_META,
  SHAPE_TO_ELEMENT,
  ELEMENT_LABEL,
  DAY_NAMES,
  isDaySynergy,
  matchWishes,
  getWishCategory,
  Element,
  ShapeType,
} from './element';

// Temporary mock for database. In real app, replace with Firestore call.
import data from '../../mountains.json';

export interface RecommendationInput {
  birthYear: number;
  category?: string;
  date?: Date;
  userLat?: number;
  userLng?: number;
}

export interface MountainRecommendation {
  mountain: Mountain;
  /** 0~100으로 정규화한 추천도 */
  score: number;
  /** 5점 만점 별점 (표시용) */
  stars: number;
  reason: string;
  /** 사용자 사주에 보충되는 산형인지 */
  isShapeMatch: boolean;
  /** 오늘 요일과 산의 기운이 맞는지 */
  isDayMatch: boolean;
  /** 데이터가 명시한 최적 요일에 오늘이 포함되는지 */
  isBestDay: boolean;
  /** 띠 직접 궁합 */
  isZodiacMatch: boolean;
  /** 선택한 소원 카테고리와 겹친 세부 키워드 */
  matchedWishes: string[];
  /** 위치를 제공한 경우 대략적인 직선 거리(km) */
  distanceKm?: number;
}

export interface FortuneProfile {
  zodiac: string;
  userElement: Element;
  supplementElement: Element;
  recommendedShape: ShapeType;
  dayName: string;
  today: Date;
}

/** 서버 타임존(대개 UTC)과 무관하게 한국 기준 '오늘'을 구한다. */
export function getKstDate(base?: Date): Date {
  const now = base ?? new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  return new Date(utcMs + 9 * 60 * 60_000);
}

export async function getAllMountains(): Promise<Mountain[]> {
  return data.mountains as Mountain[];
}

export async function getMountainsByShape(shapeType: string): Promise<Mountain[]> {
  const mountains = await getAllMountains();
  return mountains.filter((m) => m.shape_type === shapeType);
}

export async function getMountainById(id: string): Promise<Mountain | undefined> {
  const mountains = await getAllMountains();
  return mountains.find((m) => m.id === id);
}

/** 같은 산형의 다른 산들 (상세 페이지 크로스 추천용) */
export async function getRelatedMountains(mountain: Mountain, limit = 3): Promise<Mountain[]> {
  const mountains = await getAllMountains();
  return mountains
    .filter((m) => m.shape_type === mountain.shape_type && m.id !== mountain.id)
    .slice(0, limit);
}

export function getFortuneProfile(birthYear: number, date?: Date): FortuneProfile {
  const today = date ?? getKstDate();
  const zodiac = getZodiacByYear(birthYear);
  const userElement = ZODIAC_TO_ELEMENT[zodiac];
  const supplementElement = SUPPLEMENT_RULE[userElement];

  return {
    zodiac,
    userElement,
    supplementElement,
    recommendedShape: ELEMENT_TO_SHAPE[supplementElement],
    dayName: DAY_NAMES[today.getDay()],
    today,
  };
}

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/** 받침 유무에 따라 조사를 골라 붙인다 (관악산은 / 계룡산는 → 계룡산은). */
function withParticle(word: string, withJong: string, withoutJong: string): string {
  const last = word.charCodeAt(word.length - 1);
  const isHangul = last >= 0xac00 && last <= 0xd7a3;
  if (!isHangul) return `${word}${withJong}(${withoutJong})`;
  return `${word}${(last - 0xac00) % 28 !== 0 ? withJong : withoutJong}`;
}

/**
 * 입력값에 대해 결정적인 해시. 동점 처리에 쓴다.
 * 같은 사용자는 항상 같은 결과(공유 링크가 안정적)를 보되,
 * 사용자마다 다른 산이 뽑히도록 흩뜨리는 용도.
 */
function stableHash(...parts: (string | number | undefined)[]): number {
  const s = parts.filter((p) => p !== undefined).join('|');
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % 1000;
}

function buildReason(
  profile: FortuneProfile,
  mountain: Mountain,
  matchedWishes: string[],
  isDayMatch: boolean,
  category?: string
): string {
  const meta = SHAPE_META[mountain.shape_type];
  const parts: string[] = [];

  parts.push(
    `${profile.zodiac}는 ${profile.userElement}(${ELEMENT_LABEL[profile.userElement]})의 기운을 타고났습니다. ` +
      `이 기운을 살리려면 이를 낳아주는 ${profile.supplementElement}(${ELEMENT_LABEL[profile.supplementElement]})의 기운이 필요합니다.`
  );

  parts.push(
    `${withParticle(mountain.name_ko, '은', '는')} ${meta.formal} — ${meta.shape} 형태로 ` +
      `${SHAPE_TO_ELEMENT[mountain.shape_type]}의 기운이 강한 산입니다.`
  );

  if (matchedWishes.length > 0) {
    const label = getWishCategory(category)?.label ?? category;
    parts.push(`특히 ${label} 발원지로 알려져 있습니다 (${matchedWishes.join(' · ')}).`);
  }

  if (mountain.best_for_zodiac.includes(profile.zodiac)) {
    parts.push(`예로부터 ${profile.zodiac}와 궁합이 좋다고 전해지는 산입니다.`);
  }

  if (isDayMatch) {
    parts.push(`오늘은 ${profile.dayName}요일 — 이 산의 기운이 가장 강해지는 날입니다.`);
  }

  return parts.join(' ');
}

export async function recommend(input: RecommendationInput): Promise<MountainRecommendation[]> {
  const profile = getFortuneProfile(input.birthYear, input.date);
  const mountains = await getAllMountains();

  const scored = mountains.map((m) => {
    const isShapeMatch = m.shape_type === profile.recommendedShape;
    const matchedWishes = matchWishes(input.category, m.wish_categories);
    const isZodiacMatch = m.best_for_zodiac.includes(profile.zodiac);
    const isDayMatch = isDaySynergy(profile.today, m.shape_type);
    const isBestDay = m.best_day_of_week.includes(profile.dayName);

    // 45점을 기준으로 가산. 상한 99로 정규화해 '추천도 %'로 그대로 노출한다.
    let score = 45;
    if (isShapeMatch) score += 25;
    score += Math.min(matchedWishes.length * 7, 14);
    if (isZodiacMatch) score += 9;
    if (isDayMatch) score += 4;
    if (isBestDay) score += 6;

    let distanceKm: number | undefined;
    if (typeof input.userLat === 'number' && typeof input.userLng === 'number') {
      distanceKm = getDistance(input.userLat, input.userLng, m.lat, m.lng);
      if (distanceKm < 50) score += 8;
      else if (distanceKm < 100) score += 4;
      else if (distanceKm > 250) score -= 4;
    }

    score = Math.max(0, Math.min(99, Math.round(score)));

    return {
      mountain: m,
      score,
      stars: Math.max(3, Math.min(5, Math.round(score / 20))),
      reason: buildReason(profile, m, matchedWishes, isDayMatch, input.category),
      isShapeMatch,
      isDayMatch,
      isBestDay,
      isZodiacMatch,
      matchedWishes,
      distanceKm,
    };
  });

  // 동점 분산용 — 점수에는 반영하지 않고 정렬에만 쓴다
  const tiebreak = new Map(
    mountains.map((m) => [m.id, stableHash(m.id, input.birthYear, input.category)])
  );

  return scored
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      // 산형 일치가 우선, 그다음은 입력값 기반 해시로 흩뜨린다.
      // (고도 같은 고정 기준으로 정렬하면 특정 산이 모든 동점을 독식한다)
      if (a.isShapeMatch !== b.isShapeMatch) return a.isShapeMatch ? -1 : 1;
      return (tiebreak.get(a.mountain.id) ?? 0) - (tiebreak.get(b.mountain.id) ?? 0);
    })
    .slice(0, 3);
}

/** 랜딩 '오늘의 추천' — 사주 입력 없이 오늘 요일 기운만으로 뽑는 산 */
export async function getTodayPick(date?: Date): Promise<Mountain> {
  const today = date ?? getKstDate();
  const dayName = DAY_NAMES[today.getDay()];
  const mountains = await getAllMountains();

  const bestDayMatches = mountains.filter((m) => m.best_day_of_week.includes(dayName));
  const pool = bestDayMatches.length > 0 ? bestDayMatches : mountains;

  // 날짜 기반 결정적 선택 — 매일 바뀌되 같은 날엔 항상 같은 산
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return pool[seed % pool.length];
}
