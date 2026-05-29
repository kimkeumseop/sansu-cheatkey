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
    const loadMap = () => {
      if (window.kakao && window.kakao.maps && mapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: level,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);

        // Add Marker
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // Add Custom Overlay or InfoWindow
        const content = `<div style="padding:5px; background:white; border-radius:5px; border:1px solid #ccc; font-size:12px; font-weight:bold;">${mountainName}</div>`;
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          yAnchor: 2.5
        });
        customOverlay.setMap(map);
      }
    };

    if (window.kakao && window.kakao.maps) {
      loadMap();
    } else {
      // Script is loaded in layout, but double check
      const interval = setInterval(() => {
        if (window.kakao && window.kakao.maps) {
          loadMap();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [lat, lng, level, mountainName]);

  return (
    <div className={`rounded-xl overflow-hidden shadow-inner border border-gray-200 ${className}`}>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
