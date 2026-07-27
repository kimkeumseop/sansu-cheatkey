'use client';

import { useCallback, useEffect, useState } from 'react';
import { KAKAO_JS_KEY } from '@/lib/sansu/site';

interface ShareButtonsProps {
  mountainName: string;
  /** '쥐띠'처럼 이미 '띠'가 포함된 형태 */
  zodiac: string;
  /** 산형 별칭 (예: 돌파의 산) */
  shapeKo: string;
  energyKeywords: string[];
  mountainId: string;
  score?: number;
}

interface KakaoSDK {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Share: {
    sendDefault: (options: Record<string, unknown>) => void;
  };
}

declare global {
  interface Window {
    Kakao?: KakaoSDK;
  }
}

export default function ShareButtons({
  mountainName,
  zodiac,
  shapeKo,
  energyKeywords,
  mountainId,
  score,
}: ShareButtonsProps) {
  const [kakaoReady, setKakaoReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // SDK가 lazyOnload로 붙기 때문에 준비될 때까지 잠시 폴링한다
  useEffect(() => {
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      const sdk = window.Kakao;
      if (sdk) {
        try {
          if (!sdk.isInitialized()) sdk.init(KAKAO_JS_KEY);
          setKakaoReady(sdk.isInitialized());
        } catch {
          setKakaoReady(false);
        }
        clearInterval(timer);
      } else if (tries > 20) {
        clearInterval(timer);
      }
    }, 300);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  const shareText = `${zodiac}인 내 운명의 산은 ${mountainName} 🏔️ ${shapeKo}의 기운${
    typeof score === 'number' ? ` · 추천도 ${score}%` : ''
  }`;

  const getUrl = () => (typeof window !== 'undefined' ? window.location.href : '');
  const getOrigin = () => (typeof window !== 'undefined' ? window.location.origin : '');

  const handleKakaoShare = useCallback(() => {
    const sdk = window.Kakao;
    if (!sdk?.isInitialized()) {
      setToast('카카오 공유를 불러오지 못했어요');
      return;
    }
    const url = getUrl();
    sdk.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${zodiac}인 당신의 운명의 산은 ${mountainName}`,
        description: `${shapeKo} · ${energyKeywords.slice(0, 4).join('·')}`,
        imageUrl: `${getOrigin()}/api/og?mountain=${mountainId}&zodiac=${encodeURIComponent(zodiac)}${
          typeof score === 'number' ? `&score=${score}` : ''
        }`,
        link: { mobileWebUrl: url, webUrl: url },
      },
      buttons: [
        {
          title: '내 운명의 산 보기',
          link: {
            mobileWebUrl: `${getOrigin()}/sansu`,
            webUrl: `${getOrigin()}/sansu`,
          },
        },
      ],
    });
  }, [zodiac, mountainName, shapeKo, energyKeywords, mountainId, score]);

  const handleXShare = () => {
    const text = `${shareText}\n\n#개운산행 #풍수 #오성체 #${mountainName}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(getUrl())}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleNativeShare = async () => {
    const url = getUrl();
    if (navigator.share) {
      try {
        await navigator.share({ title: `${mountainName} | 개운산`, text: shareText, url });
        return;
      } catch {
        // 사용자가 취소한 경우 — 복사로 폴백하지 않는다
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setToast('링크가 복사되었습니다');
    } catch {
      setToast('복사에 실패했어요');
    }
  };

  return (
    <div className="relative flex flex-col gap-3 w-full mt-6 pt-5 border-t border-gray-100">
      <p className="text-center text-[10px] text-gray-400 font-black tracking-[0.18em]">
        결과 공유하기
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={handleKakaoShare}
          disabled={!kakaoReady}
          className="w-12 h-12 bg-[#FEE500] rounded-full grid place-items-center shadow-md hover:scale-105 active:scale-95 transition-transform disabled:opacity-40 disabled:hover:scale-100"
          title="카카오톡 공유"
          aria-label="카카오톡으로 공유"
        >
          <span className="text-[#3C1E1E] font-black text-xs">톡</span>
        </button>

        <button
          onClick={handleXShare}
          className="w-12 h-12 bg-black rounded-full grid place-items-center shadow-md hover:scale-105 active:scale-95 transition-transform"
          title="X 공유"
          aria-label="X에 공유"
        >
          <span className="text-white font-bold text-lg">𝕏</span>
        </button>

        <button
          onClick={handleNativeShare}
          className="w-12 h-12 bg-gray-100 rounded-full grid place-items-center shadow-md hover:scale-105 active:scale-95 transition-transform"
          title="링크 공유 / 복사"
          aria-label="링크 공유하거나 복사"
        >
          <span className="text-gray-600 text-[10px] font-black">URL</span>
        </button>
      </div>

      {toast && (
        <div
          role="status"
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gray-900 text-white text-[12px] font-bold shadow-lg whitespace-nowrap animate-rise"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
