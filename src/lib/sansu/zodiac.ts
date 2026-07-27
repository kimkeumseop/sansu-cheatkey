export const ZODIAC_TO_ELEMENT: Record<string, '木' | '火' | '土' | '金' | '水'> = {
  '쥐': '水', '쥐띠': '水',
  '소': '土', '소띠': '土',
  '호랑이': '木', '범': '木', '호랑이띠': '木',
  '토끼': '木', '토끼띠': '木',
  '용': '土', '용띠': '土',
  '뱀': '火', '뱀띠': '火',
  '말': '火', '말띠': '火',
  '양': '土', '양띠': '土',
  '원숭이': '金', '원숭이띠': '金',
  '닭': '金', '닭띠': '金',
  '개': '土', '개띠': '土',
  '돼지': '水', '돼지띠': '水',
  '자': '水', '축': '土', '인': '木', '묘': '木', '진': '土', '사': '火', 
  '오': '火', '미': '土', '신': '金', '유': '金', '술': '土', '해': '水',
};

const ZODIAC_NAMES: Record<string, string> = {
  '자': '쥐띠',
  '축': '소띠',
  '인': '호랑이띠',
  '묘': '토끼띠',
  '진': '용띠',
  '사': '뱀띠',
  '오': '말띠',
  '미': '양띠',
  '신': '원숭이띠',
  '유': '닭띠',
  '술': '개띠',
  '해': '돼지띠',
};

/**
 * 띠 계산 핵심 로직 (12지신 순서 기반)
 * 1900년 = 자년(쥐)
 * 1988년 = (1988 - 1900) % 12 = 88 % 12 = 4 -> 5번째 띠(진 - 용띠)
 */
export function getZodiacByYear(year: number): string {
  const cycle = ['자','축','인','묘','진','사','오','미','신','유','술','해'];
  const base = 1900; // 1900년은 경자년(쥐띠)
  const index = ((year - base) % 12 + 12) % 12;
  const branch = cycle[index];
  return ZODIAC_NAMES[branch] || branch;
}

export const BRANCH_TO_FRIENDLY: Record<string, string> = ZODIAC_NAMES;
export const FRIENDLY_TO_BRANCH: Record<string, string> = Object.entries(ZODIAC_NAMES).reduce((acc, [k, v]) => ({ ...acc, [v]: k }), {});

export const ZODIAC_EMOJI: Record<string, string> = {
  '쥐띠': '🐭',
  '소띠': '🐮',
  '호랑이띠': '🐯',
  '토끼띠': '🐰',
  '용띠': '🐲',
  '뱀띠': '🐍',
  '말띠': '🐴',
  '양띠': '🐑',
  '원숭이띠': '🐵',
  '닭띠': '🐔',
  '개띠': '🐶',
  '돼지띠': '🐷',
};

export const ZODIAC_HANJA: Record<string, string> = {
  '쥐띠': '子',
  '소띠': '丑',
  '호랑이띠': '寅',
  '토끼띠': '卯',
  '용띠': '辰',
  '뱀띠': '巳',
  '말띠': '午',
  '양띠': '未',
  '원숭이띠': '申',
  '닭띠': '酉',
  '개띠': '戌',
  '돼지띠': '亥',
};

/** 띠 순서 목록 (UI 매트릭스용) */
export const ALL_ZODIACS: string[] = ['쥐띠','소띠','호랑이띠','토끼띠','용띠','뱀띠','말띠','양띠','원숭이띠','닭띠','개띠','돼지띠'];
