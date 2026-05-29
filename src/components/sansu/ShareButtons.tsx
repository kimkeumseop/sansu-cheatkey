'use client';

import { useEffect } from 'react';

interface ShareButtonsProps {
  mountainName: string;
  zodiac: string;
  shapeKo: string;
  energyKeywords: string[];
  mountainId: string;
}

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: Record<string, unknown>) => void;
      };
    };
  }
}

export default function ShareButtons({ 
  mountainName, 
  zodiac, 
  shapeKo, 
  energyKeywords,
  mountainId 
}: ShareButtonsProps) {
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const ogImageUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/api/og?mountain=${mountainId}&zodiac=${zodiac}`;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Kakao && !window.Kakao.isInitialized()) {
      try {
        window.Kakao.init('60e6fb2a346462f871ceaad6a90caf99'); 
      } catch (e) {
        console.error('Kakao init failed', e);
      }
    }
  }, []);

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${zodiac}띠 당신의 운명의 산은 ${mountainName}`,
          description: `${shapeKo} 기운 - ${energyKeywords.join('·')}`,
          imageUrl: ogImageUrl,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: '내 운명의 산 보기',
            link: {
              mobileWebUrl: `${typeof window !== 'undefined' ? window.location.origin : ''}/sansu`,
              webUrl: `${typeof window !== 'undefined' ? window.location.origin : ''}/sansu`,
            },
          },
        ],
      });
    }
  };

  const handleXShare = () => {
    const text = `내 운명의 산은 ${mountainName} 🏔️ ${shapeKo} 기운으로 운세전환! #사주 #풍수 #개운산 #GAEUNSAN`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('링크가 복사되었습니다!');
  };

  return (
    <div className="flex flex-col gap-3 w-full mt-6">
      <p className="text-center text-xs text-gray-400 font-bold mb-1">결과 공유하기</p>
      <div className="flex justify-center gap-4">
        <button 
          onClick={handleKakaoShare}
          className="w-12 h-12 bg-[#FEE500] rounded-full flex items-center justify-center shadow-sm hover:opacity-90 transition"
          title="카카오톡 공유"
        >
          <span className="text-[#3C1E1E] font-bold text-xs">톡</span>
        </button>
        <button 
          onClick={handleXShare}
          className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-sm hover:opacity-90 transition"
          title="X 공유"
        >
          <span className="text-white font-bold text-lg">𝕏</span>
        </button>
        <button 
          onClick={handleCopyLink}
          className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-sm hover:opacity-90 transition"
          title="링크 복사"
        >
          <span className="text-gray-600 text-xs font-bold">URL</span>
        </button>
      </div>
    </div>
  );
}
