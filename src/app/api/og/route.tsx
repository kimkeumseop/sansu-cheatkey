import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import data from '../../../mountains.json';
import { Mountain } from '@/types/mountain';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mountainId = searchParams.get('mountain');
    const zodiac = searchParams.get('zodiac') || '??';
    const name = searchParams.get('name') || '방문자';

    const mountain = (data.mountains as Mountain[]).find((m) => m.id === mountainId);

    if (!mountain) {
      return new Response('Mountain not found', { status: 404 });
    }

    const colors: Record<string, string> = {
      wood: '#4ADE80',
      fire: '#F87171',
      earth: '#FBBF24',
      metal: '#94A3B8',
      water: '#60A5FA',
    };

    const bgColor = colors[mountain.shape_type] || '#7C3AED';

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
            backgroundColor: '#fff',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: bgColor,
              width: '90%',
              height: '85%',
              borderRadius: '40px',
              padding: '40px',
              color: 'white',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px', opacity: 0.9 }}>
              [{zodiac}띠] {name}님의 운명의 산
            </div>
            <div style={{ fontSize: '80px', fontWeight: '900', marginBottom: '10px' }}>
              {mountain.name_ko}
            </div>
            <div style={{ fontSize: '40px', opacity: 0.8, marginBottom: '40px' }}>
              {mountain.name_hanja}
            </div>
            <div style={{ display: 'flex', borderTop: '2px solid rgba(255,255,255,0.3)', width: '100%', paddingTop: '40px', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '24px', opacity: 0.8 }}>오늘의 기운</div>
                <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{mountain.shape_ko}</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '20px', fontSize: '24px', color: '#666', fontWeight: 'bold' }}>
            개운산 (GAEUNSAN) - 사주로 찾는 내 운명의 산
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    console.log(`${message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
