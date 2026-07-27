import { ZODIAC_TO_ELEMENT } from './zodiac';

export type Element = '木' | '火' | '土' | '金' | '水';
export type ShapeType = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export const SUPPLEMENT_RULE: Record<Element, Element> = {
  '木': '水',  // 수생목 - 木이 약하면 水가 보충
  '火': '木',  // 목생화
  '土': '火',  // 화생토
  '金': '土',  // 토생금
  '水': '金',  // 금생수
};

export const ELEMENT_TO_SHAPE: Record<Element, ShapeType> = {
  '木': 'wood',
  '火': 'fire',
  '土': 'earth',
  '金': 'metal',
  '水': 'water',
};

export const SHAPE_TO_ELEMENT: Record<string, Element> = {
  'wood': '木',
  'fire': '火',
  'earth': '土',
  'metal': '金',
  'water': '水',
};

/** 오성체 5종의 표시용 메타데이터 (컬러·설명·별칭) */
export interface ShapeMeta {
  element: Element;
  formal: string;
  nickname: string;
  emoji: string;
  hex: string;
  gradient: string;
  tint: string;
  text: string;
  border: string;
  keywords: string;
  shape: string;
}

export const SHAPE_META: Record<ShapeType, ShapeMeta> = {
  wood: {
    element: '木',
    formal: '목형산(木形山)',
    nickname: '성장의 산',
    emoji: '🌿',
    hex: '#22C55E',
    gradient: 'from-emerald-500 via-green-600 to-emerald-800',
    tint: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    keywords: '학업 · 시험 · 예술',
    shape: '하늘로 곧게 뻗은 길쭉한 능선',
  },
  fire: {
    element: '火',
    formal: '화형산(火形山)',
    nickname: '돌파의 산',
    emoji: '🔥',
    hex: '#EF4444',
    gradient: 'from-rose-500 via-red-600 to-rose-900',
    tint: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-200',
    keywords: '막힌 운 뚫기 · 합격',
    shape: '불꽃처럼 치솟은 날카로운 암릉',
  },
  earth: {
    element: '土',
    formal: '토형산(土形山)',
    nickname: '어머니 산',
    emoji: '⛰️',
    hex: '#F59E0B',
    gradient: 'from-amber-500 via-orange-600 to-amber-800',
    tint: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    keywords: '재물 · 가정 · 안정',
    shape: '정상이 평평하고 넉넉한 일(一)자 형',
  },
  metal: {
    element: '金',
    formal: '금형산(金形山)',
    nickname: '귀인의 산',
    emoji: '💎',
    hex: '#64748B',
    gradient: 'from-slate-500 via-slate-600 to-slate-900',
    tint: 'bg-slate-100',
    text: 'text-slate-700',
    border: 'border-slate-300',
    keywords: '권위 · 리더십 · 귀인',
    shape: '종을 엎어놓은 듯 둥글고 단단한 형',
  },
  water: {
    element: '水',
    formal: '수형산(水形山)',
    nickname: '인연의 산',
    emoji: '💧',
    hex: '#3B82F6',
    gradient: 'from-blue-500 via-indigo-600 to-blue-900',
    tint: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    keywords: '연애 · 치유 · 새출발',
    shape: '물결처럼 완만하게 이어지는 봉우리',
  },
};

export const ELEMENT_LABEL: Record<Element, string> = {
  '木': '나무',
  '火': '불',
  '土': '흙',
  '金': '쇠',
  '水': '물',
};

// 동양 점성술 요일 = 오성(五星) + 일월
export const DAY_TO_ELEMENT: Record<number, Element> = {
  0: '火', // 일요일 = 태양
  1: '水', // 월요일 = 달/수성
  2: '火', // 화요일 = 화성
  3: '水', // 수요일 = 수성
  4: '木', // 목요일 = 목성
  5: '金', // 금요일 = 금성
  6: '土', // 토요일 = 토성
};

export const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'] as const;

// 핵심 함수: 띠 입력 → 추천 산형 출력
export function recommendShapeByZodiac(zodiac: string): ShapeType {
  const userElement = ZODIAC_TO_ELEMENT[zodiac];
  const supplementElement = SUPPLEMENT_RULE[userElement];
  return ELEMENT_TO_SHAPE[supplementElement];
}

// 오늘 요일의 오행이 산형의 오행과 일치하면 시너지
export function isDaySynergy(today: Date, shapeType: string): boolean {
  return DAY_TO_ELEMENT[today.getDay()] === SHAPE_TO_ELEMENT[shapeType];
}

// 오늘 요일이 추천 산형의 오행과 일치하면 +20% 시너지
export function getDayBonus(today: Date, shapeType: string): number {
  return isDaySynergy(today, shapeType) ? 1.2 : 1.0;
}

/**
 * 서비스가 노출하는 소원 카테고리 → mountains.json의 wish_categories 동의어 묶음.
 * 데이터에는 '수능', '공무원', '재기'처럼 잘게 쪼개진 값이 들어 있어
 * 단순 일치 비교로는 대부분의 산이 매칭에서 탈락한다.
 */
export interface WishCategory {
  key: string;
  label: string;
  emoji: string;
  synonyms: string[];
}

export const WISH_CATEGORIES: WishCategory[] = [
  {
    key: '합격',
    label: '합격 · 시험',
    emoji: '📖',
    synonyms: ['합격', '수능', '공무원', '고시', '학업', '수험', '지혜', '집중력', '취업', '재수운', '후학양성'],
  },
  {
    key: '재물',
    label: '재물 · 사업',
    emoji: '💰',
    synonyms: ['재물', '사업', '사업확장', '사업개시', '창업', '복권', '재기', '일대도약'],
  },
  {
    key: '인연',
    label: '인연 · 결혼',
    emoji: '💗',
    synonyms: ['인연', '결혼', '새출발', '데이트', '야경'],
  },
  {
    key: '건강',
    label: '건강 · 치유',
    emoji: '🌿',
    synonyms: ['건강', '치유', '회복', '장수', '정화', '부모건강', '효도'],
  },
  {
    key: '가정',
    label: '가정 · 안정',
    emoji: '🏠',
    synonyms: ['가족', '가족안녕', '안정', '평안', '공동체', '자녀', '포용', '덕'],
  },
  {
    key: '승진',
    label: '승진 · 귀인',
    emoji: '🎖️',
    synonyms: ['승진', '이직', '리더십', '권위확립', '명예', '왕운', '멘토', '국가'],
  },
  {
    key: '결단',
    label: '결단 · 돌파',
    emoji: '⚡',
    synonyms: ['결단', '결단력', '도전', '도전돌파', '추진력', '돌파', '운세전환', '운명전환', '변화', '일상기운전환', '초보도전'],
  },
  {
    key: '영성',
    label: '영성 · 수양',
    emoji: '🕯️',
    synonyms: ['영성', '정신수양', '수행', '성찰', '번뇌해소', '기도성취', '정성기도', '은밀한소원', '도심영성', '수계', '장기적성취', '잡귀퇴치'],
  },
];

export function getWishCategory(key?: string): WishCategory | undefined {
  if (!key) return undefined;
  return WISH_CATEGORIES.find((c) => c.key === key);
}

/** 산의 wish_categories 중 선택한 카테고리와 겹치는 항목을 돌려준다. */
export function matchWishes(category: string | undefined, wishes: string[]): string[] {
  const target = getWishCategory(category);
  if (!target) return [];
  return wishes.filter((w) => target.synonyms.includes(w));
}
