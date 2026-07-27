'use client';

import { useEffect, useRef, useState } from 'react';
import { KAKAO_JS_KEY } from '@/lib/sansu/site';
import { loadKakaoMaps, kakaoPlaceUrl, kakaoRouteUrl } from '@/lib/sansu/kakaoMapLoader';
import GoogleMap from './GoogleMap';

interface KakaoMapProps {
  lat: number;
  lng: number;
  mountainName: string;
  /** 카카오맵 확대 레벨. 1이 가장 가깝고 숫자가 클수록 멀어진다 (구글 zoom과 반대) */
  level?: number;
  className?: string;
}

export default function KakaoMap({
  lat,
  lng,
  mountainName,
  level = 6,
  className = 'w-full h-64',
}: KakaoMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'failed'>('loading');

  useEffect(() => {
    let cancelled = false;

    loadKakaoMaps(KAKAO_JS_KEY)
      .then((kakao) => {
        if (cancelled || !containerRef.current) return;

        const position = new kakao.maps.LatLng(lat, lng);
        const map = new kakao.maps.Map(containerRef.current, { center: position, level });

        map.addControl(
          new kakao.maps.ZoomControl(),
          kakao.maps.ControlPosition.RIGHT
        );

        new kakao.maps.Marker({ position, map });

        new kakao.maps.CustomOverlay({
          position,
          map,
          yAnchor: 2.1,
          content:
            `<div style="padding:4px 10px;border-radius:999px;background:#7C3AED;color:#fff;` +
            `font-size:11px;font-weight:800;white-space:nowrap;` +
            `box-shadow:0 4px 12px rgba(76,29,149,0.35)">${mountainName}</div>`,
        });

        setStatus('ready');
      })
      .catch((err) => {
        if (cancelled) return;
        console.warn('[KakaoMap] 카카오맵 로드 실패 → 구글 지도로 대체합니다:', err.message);
        setStatus('failed');
      });

    return () => {
      cancelled = true;
    };
  }, [lat, lng, level, mountainName]);

  // 카카오맵을 못 쓰는 상황에서도 지도는 보여야 한다
  if (status === 'failed') {
    return <GoogleMap lat={lat} lng={lng} mountainName={mountainName} className={className} />;
  }

  return (
    <div className="w-full">
      <div
        className={`relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-100 ${className}`}
      >
        <div ref={containerRef} className="w-full h-full" />

        {status === 'loading' && (
          <div className="absolute inset-0 grid place-items-center bg-gray-50">
            <span className="text-[11px] font-bold text-gray-400">지도를 불러오는 중…</span>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-2">
        <a
          href={kakaoPlaceUrl(mountainName, lat, lng)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-xl bg-[#FEE500] text-[#3C1E1E] text-[12px] font-bold shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          카카오맵에서 보기
        </a>
        <a
          href={kakaoRouteUrl(mountainName, lat, lng)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-xl bg-gray-900 text-white text-[12px] font-bold shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          길찾기
        </a>
      </div>
    </div>
  );
}
