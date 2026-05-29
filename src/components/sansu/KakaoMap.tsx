'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface MapProps {
  lat: number;
  lng: number;
  level?: number;
  className?: string;
  mountainName: string;
}

export default function KakaoMap({ lat, lng, level = 5, className = "w-full h-64", mountainName }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const initializeMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          if (!mapRef.current) return;

          try {
            const options = {
              center: new window.kakao.maps.LatLng(lat, lng),
              level: level,
            };

            const map = new window.kakao.maps.Map(mapRef.current, options);

            const markerPosition = new window.kakao.maps.LatLng(lat, lng);
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);

            const content = `<div style="padding:5px 10px; background:white; border-radius:20px; border:2px solid #7C3AED; font-size:12px; font-weight:bold; color:#7C3AED; box-shadow:0 2px 6px rgba(0,0,0,0.1); white-space:nowrap;">${mountainName}</div>`;
            const customOverlay = new window.kakao.maps.CustomOverlay({
              position: markerPosition,
              content: content,
              yAnchor: 2.3
            });
            customOverlay.setMap(map);
            setIsLoaded(true);
          } catch (e) {
            console.error('Map init error', e);
            setHasError(true);
          }
        });
      } else {
        setHasError(true);
      }
    };

    // Retry for a few seconds if kakao is not ready
    let retryCount = 0;
    const checkKakao = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        initializeMap();
        clearInterval(checkKakao);
      } else if (retryCount > 30) { // 3 seconds timeout
        setHasError(true);
        clearInterval(checkKakao);
      }
      retryCount++;
    }, 100);

    return () => clearInterval(checkKakao);
  }, [lat, lng, level, mountainName]);

  const mapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(mountainName)},${lat},${lng}`;

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-inner border border-gray-200 ${className}`}>
      <div ref={mapRef} className="w-full h-full bg-gray-100 flex items-center justify-center">
        {!isLoaded && !hasError && (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7C3AED] mb-2"></div>
            <p className="text-xs text-gray-400">지도를 불러오는 중...</p>
          </div>
        )}
        {hasError && (
          <div className="flex flex-col items-center p-4 text-center">
            <p className="text-sm text-gray-500 mb-3">지도를 직접 보시려면 아래 버튼을 눌러주세요.</p>
            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold text-xs shadow-sm"
            >
              카카오맵에서 위치 보기
            </a>
          </div>
        )}
      </div>
      {isLoaded && (
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 z-20 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-gray-500 border border-gray-200 shadow-sm"
        >
          큰 지도보기 ↗
        </a>
      )}
    </div>
  );
}
