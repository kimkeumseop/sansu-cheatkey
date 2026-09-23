/**
 * 사이트 전역 상수. 도메인이 바뀌면 이 파일 한 곳만 고치면 된다.
 * (기존에는 layout / sitemap / robots.txt가 서로 다른 도메인을 가리키고 있었다.)
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://gaeunsan.vercel.app';

export const SITE_NAME = '개운산 (GAEUNSAN)';

export const SITE_DESCRIPTION =
  '태어난 해의 띠와 관심 주제를 바탕으로 30곳의 산행 후보를 비교합니다. 풍수 오성체는 전통 문화 해석으로 소개하며, 코스와 방문 정보는 출발 전 확인하도록 안내합니다.';

/**
 * 카카오 JavaScript 키. 도메인 등록 기반 공개 키라 소스에 남아도 무방하지만,
 * 배포 도메인이 바뀌면 NEXT_PUBLIC_KAKAO_JS_KEY로 덮어쓸 수 있게 해둔다.
 */
export const KAKAO_JS_KEY =
  process.env.NEXT_PUBLIC_KAKAO_JS_KEY ?? '60e6fb2a346462f871ceaad6a90caf99';

export const ADSENSE_CLIENT = 'ca-pub-1059415497859090';

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
