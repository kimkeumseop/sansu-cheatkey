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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mapInstance: any = null;

    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        try {
          const options = {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: level,
          };

          mapInstance = new window.kakao.maps.Map(mapRef.current, options);

          const markerPosition = new window.kakao.maps.LatLng(lat, lng);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(mapInstance);

          const content = `<div style="padding:5px 10px; background:white; border-radius:20px; border:2px solid #7C3AED; font-size:12px; font-weight:bold; color:#7C3AED; box-shadow:0 2px 6px rgba(0,0,0,0.1); white-space:nowrap;">${mountainName}</div>`;
          const customOverlay = new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content: content,
            yAnchor: 2.3
          });
          customOverlay.setMap(mapInstance);

          // Ensure map is correctly sized and centered
          setTimeout(() => {
            if (mapInstance) {
              mapInstance.relayout();
              mapInstance.setCenter(new window.kakao.maps.LatLng(lat, lng));
              setIsLoaded(true);
            }
          }, 100);
          
        } catch (e) {
          console.error('Kakao Map init failed:', e);
          setHasError(true);
        }
      });
    };

    const checkAndInit = () => {
      if (window.kakao && window.kakao.maps) {
        initializeMap();
      } else {
        // Retry logic
        const interval = setInterval(() => {
          if (window.kakao && window.kakao.maps) {
            initializeMap();
            clearInterval(interval);
          }
        }, 500);
        
        // Timeout after 5 seconds
        setTimeout(() => {
          clearInterval(interval);
          if (!window.kakao || !window.kakao.maps) {
            setHasError(true);
          }
        }, 5000);
      }
    };

    checkAndInit();

    return () => {
      // Cleanup if necessary
    };
  }, [lat, lng, level, mountainName]);

  const mapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(mountainName)},${lat},${lng}`;

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-md border border-gray-100 ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-full bg-gray-50" 
        style={{ minHeight: '100%' }}
      />
      
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7C3AED] mb-2"></div>
          <p className="text-[10px] text-gray-400 font-medium">영험한 기운을 지도로 불러오는 중...</p>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-400 mb-3 font-medium leading-relaxed">
            지도를 불러올 수 없습니다.<br/>도메인 등록 상태를 확인해 주세요.
          </p>
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#7C3AED] text-white px-4 py-2 rounded-full font-bold text-[10px] shadow-sm hover:bg-purple-700 transition"
          >
            카카오맵으로 바로보기 ↗
          </a>
        </div>
      )}

      {isLoaded && (
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-20 bg-white/90 px-2 py-1.5 rounded-lg text-[9px] font-black text-[#7C3AED] border border-purple-100 shadow-sm"
        >
          큰 지도로 보기
        </a>
      )}
    </div>
  );
}
