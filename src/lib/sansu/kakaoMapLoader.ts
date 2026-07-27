/**
 * Kakao Maps JS SDK 로더.
 *
 * 카카오맵이 안 뜨는 원인은 대부분 셋 중 하나다:
 *  1) 개발자 콘솔 > 앱 설정 > 플랫폼 > Web 에 현재 도메인이 미등록 (sdk.js가 401)
 *  2) 제품 설정 > 카카오맵 미활성화
 *  3) autoload=false 없이 스크립트를 넣고 kakao.maps.load()를 안 부름
 *
 * 1·2번은 콘솔 설정이라 코드로 못 고친다. 그래서 로드에 실패하면
 * 조용히 죽지 않고 reject 시켜서, 호출부가 구글 지도로 폴백하게 한다.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    kakao?: any;
  }
}

const SCRIPT_ID = 'kakao-maps-sdk';
const LOAD_TIMEOUT_MS = 7000;

let loaderPromise: Promise<any> | null = null;

export function loadKakaoMaps(appKey: string): Promise<any> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('SSR 환경에서는 로드할 수 없습니다'));
  }
  if (!appKey) {
    return Promise.reject(new Error('KAKAO_JS_KEY가 비어 있습니다'));
  }
  if (window.kakao?.maps?.Map) {
    return Promise.resolve(window.kakao);
  }
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    let settled = false;

    const fail = (reason: string) => {
      if (settled) return;
      settled = true;
      // 실패한 promise를 캐시해두면 영영 재시도가 안 되므로 초기화한다
      loaderPromise = null;
      reject(new Error(reason));
    };

    const timer = setTimeout(() => fail('SDK 로드 타임아웃'), LOAD_TIMEOUT_MS);

    const onReady = () => {
      // sdk.js가 401을 받으면 스크립트는 로드되지만 window.kakao가 안 생긴다
      if (!window.kakao?.maps?.load) {
        clearTimeout(timer);
        fail('도메인 미등록 또는 카카오맵 미활성화로 보입니다');
        return;
      }
      window.kakao.maps.load(() => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve(window.kakao);
      });
    };

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === '1') onReady();
      else {
        existing.addEventListener('load', onReady);
        existing.addEventListener('error', () => {
          clearTimeout(timer);
          fail('SDK 스크립트를 불러오지 못했습니다');
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    // autoload=false + kakao.maps.load() 조합이 아니면 Next.js에서 타이밍이 어긋난다
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.onload = () => {
      script.dataset.loaded = '1';
      onReady();
    };
    script.onerror = () => {
      clearTimeout(timer);
      fail('SDK 스크립트를 불러오지 못했습니다');
    };
    document.head.appendChild(script);
  });

  return loaderPromise;
}

/** 카카오맵 웹/앱 링크 — API 키 없이도 동작한다 */
export function kakaoPlaceUrl(name: string, lat: number, lng: number) {
  return `https://map.kakao.com/link/map/${encodeURIComponent(name)},${lat},${lng}`;
}

export function kakaoRouteUrl(name: string, lat: number, lng: number) {
  return `https://map.kakao.com/link/to/${encodeURIComponent(name)},${lat},${lng}`;
}
