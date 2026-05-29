import { ZODIAC_TO_ELEMENT } from './zodiac';

export const SUPPLEMENT_RULE = {
  '木': '水',  // 수생목 - 木이 약하면 水가 보충
  '火': '木',  // 목생화
  '土': '火',  // 화생토
  '金': '土',  // 토생금
  '水': '金',  // 금생수
} as const;

export const ELEMENT_TO_SHAPE = {
  '木': 'wood',
  '火': 'fire',
  '土': 'earth',
  '金': 'metal',
  '水': 'water',
} as const;

// 동양 점성술 요일 = 오성(五星) + 일월
export const DAY_TO_ELEMENT: Record<number, '木' | '火' | '土' | '金' | '水'> = {
  0: '火', // 일요일 = 태양
  1: '水', // 월요일 = 달/수성
  2: '火', // 화요일 = 화성
  3: '水', // 수요일 = 수성
  4: '木', // 목요일 = 목성
  5: '金', // 금요일 = 금성
  6: '土', // 토요일 = 토성
};

export const SHAPE_TO_ELEMENT: Record<string, '木' | '火' | '土' | '金' | '水'> = {
  'wood': '木',
  'fire': '火',
  'earth': '土',
  'metal': '金',
  'water': '水',
};

// 핵심 함수: 띠 입력 → 추천 산형 출력
export function recommendShapeByZodiac(zodiac: string): string {
  const userElement = ZODIAC_TO_ELEMENT[zodiac];
  const supplementElement = SUPPLEMENT_RULE[userElement];
  return ELEMENT_TO_SHAPE[supplementElement];
}

// 오늘 요일이 추천 산형의 오행과 일치하면 +20% 시너지
export function getDayBonus(today: Date, shapeType: string): number {
  const dayElement = DAY_TO_ELEMENT[today.getDay()];
  const shapeElement = SHAPE_TO_ELEMENT[shapeType];
  return dayElement === shapeElement ? 1.2 : 1.0;
}
