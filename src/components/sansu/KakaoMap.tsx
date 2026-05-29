'use client';

import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const initializeMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          if (!mapRef.current) return;

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

          const content = `<div style="padding:5px 10px; background:white; border-radius:20px; border:2px solid #7C3AED; font-size:12px; font-weight:bold; color:#7C3AED; box-shadow:0 2px 6px rgba(0,0,0,0.1);">${mountainName}</div>`;
          const customOverlay = new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content: content,
            yAnchor: 2.3
          });
          customOverlay.setMap(map);
        });
      }
    };

    if (window.kakao && window.kakao.maps) {
      initializeMap();
    }
  }, [lat, lng, level, mountainName]);

  return (
    <div className={`rounded-xl overflow-hidden shadow-inner border border-gray-200 ${className}`}>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
