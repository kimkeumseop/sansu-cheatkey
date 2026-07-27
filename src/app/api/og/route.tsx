import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import data from '../../../mountains.json';
import { Mountain } from '@/types/mountain';

export const runtime = 'edge';

const SHAPE_STYLE: Record<string, { from: string; to: string; label: string; emoji: string }> = {
  wood: { from: '#22C55E', to: '#065F46', label: '목형산 木', emoji: '🌿' },
  fire: { from: '#EF4444', to: '#7F1D1D', label: '화형산 火', emoji: '🔥' },
  earth: { from: '#F59E0B', to: '#92400E', label: '토형산 土', emoji: '⛰️' },
  metal: { from: '#64748B', to: '#1E293B', label: '금형산 金', emoji: '💎' },
  water: { from: '#3B82F6', to: '#1E3A8A', label: '수형산 水', emoji: '💧' },
};

/**
 * @vercel/og 기본 폰트는 라틴 전용이라 한글이 두부(□)로 깨진다.
 * Google Fonts에서 필요한 글자만 서브셋한 TTF를 받아 넘긴다.
 */
async function loadKoreanFont(text: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await fetch(url, {
      headers: {
        // 구형 UA로 요청해야 woff2 대신 ImageResponse가 읽을 수 있는 ttf를 준다
        'User-Agent':
          'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.85 Safari/537.36',
      },
    }).then((r) => r.text());

    const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:opentype|truetype)'\)/);
    if (!match) return null;

    const res = await fetch(match[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mountainId = searchParams.get('mountain');
    const zodiac = searchParams.get('zodiac') ?? '';
    const scoreRaw = searchParams.get('score');
    const score = scoreRaw && !Number.isNaN(Number(scoreRaw)) ? Number(scoreRaw) : null;

    const mountain = (data.mountains as Mountain[]).find((m) => m.id === mountainId);

    const style = mountain ? SHAPE_STYLE[mountain.shape_type] : { from: '#7C3AED', to: '#2E1065', label: '오성체 五星體', emoji: '🏔️' };

    const headline = mountain
      ? zodiac
        ? `${zodiac}의 운명의 산`
        : '오늘의 영험한 산'
      : '내 사주로 찾는 운명의 산';
    const nameKo = mountain?.name_ko ?? '개운산';
    const nameHanja = mountain?.name_hanja ?? '開運山';
    const keywords = mountain
      ? mountain.energy_keywords.slice(0, 4).join(' · ')
      : '풍수 오성체 × 사주 오행';
    const footer = '개운산 GAEUNSAN · 사주로 찾는 내 운명의 산';
    const scoreText = score !== null ? `추천도 ${score}%` : '';

    const allText = `${headline}${nameKo}${nameHanja}${keywords}${footer}${style.label}${scoreText}0123456789%·`;
    const [bold, regular] = await Promise.all([
      loadKoreanFont(allText, 700),
      loadKoreanFont(allText, 400),
    ]);

    const fonts = [
      ...(bold ? [{ name: 'NotoKR', data: bold, weight: 700 as const, style: 'normal' as const }] : []),
      ...(regular ? [{ name: 'NotoKR', data: regular, weight: 400 as const, style: 'normal' as const }] : []),
    ];

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${style.from} 0%, ${style.to} 100%)`,
            fontFamily: 'NotoKR, sans-serif',
            position: 'relative',
            paddingBottom: 70,
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: -60,
              bottom: -120,
              fontSize: 460,
              opacity: 0.13,
              display: 'flex',
            }}
          >
            {style.emoji}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              padding: '0 60px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 30,
                fontWeight: 400,
                padding: '12px 28px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.18)',
                marginBottom: 36,
              }}
            >
              {headline}
            </div>

            <div style={{ display: 'flex', fontSize: 132, fontWeight: 700, lineHeight: 1.05 }}>
              {nameKo}
            </div>

            <div style={{ display: 'flex', fontSize: 52, opacity: 0.75, marginTop: 8 }}>
              {nameHanja}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                marginTop: 44,
                paddingTop: 32,
                borderTop: '2px solid rgba(255,255,255,0.28)',
                fontSize: 30,
                opacity: 0.92,
              }}
            >
              <span style={{ display: 'flex' }}>{style.label}</span>
              <span style={{ display: 'flex', opacity: 0.5 }}>|</span>
              <span style={{ display: 'flex' }}>{keywords}</span>
              {scoreText ? <span style={{ display: 'flex', opacity: 0.5 }}>|</span> : null}
              {scoreText ? (
                <span style={{ display: 'flex', fontWeight: 700 }}>{scoreText}</span>
              ) : null}
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 44,
              display: 'flex',
              fontSize: 24,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            {footer}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        ...(fonts.length > 0 ? { fonts } : {}),
      }
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    console.error('[og]', message);
    return new Response('Failed to generate the image', { status: 500 });
  }
}
