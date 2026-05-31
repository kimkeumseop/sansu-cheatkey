import { recommend } from '@/lib/sansu/recommender';
import { getZodiacByYear } from '@/lib/sansu/zodiac';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ShareButtons from '@/components/sansu/ShareButtons';
import GoogleMap from '@/components/sansu/GoogleMap';

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const birthYear = searchParams.birthYear ? parseInt(searchParams.birthYear as string, 10) : undefined;
  const category = searchParams.category as string;

  if (!birthYear) {
    redirect('/sansu/form');
  }

  const recommendations = await recommend({ birthYear, category });
  if (!recommendations || recommendations.length === 0) {
    return <div className="p-8 text-center">결과를 찾을 수 없습니다.</div>;
  }

  const bestMatch = recommendations[0];
  const zodiac = getZodiacByYear(birthYear);

  return (
    <div className="min-h-screen flex flex-col items-center max-w-md mx-auto bg-gray-50 shadow-xl pb-20">
      <div className="w-full bg-[#7C3AED] p-6 text-white text-center pt-10 pb-16 rounded-b-[2.5rem]">
        <p className="text-purple-200 text-sm font-bold mb-1">[{zodiac}] 님의 운명의 산</p>
        <h1 className="text-4xl font-extrabold mb-2">{bestMatch.mountain.name_ko}</h1>
        <p className="text-xl opacity-90 font-serif">{bestMatch.mountain.name_hanja}</p>
      </div>

      <div className="w-[90%] -mt-10 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 relative">
        <div className="absolute top-0 right-4 -translate-y-1/2 bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-full text-xs shadow-md">
          {bestMatch.mountain.shape_ko} ({bestMatch.mountain.five_element})
        </div>
        
        <h3 className="font-bold text-lg mb-2">왜 이 산인가요?</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {bestMatch.reason}
        </p>

        <div className="bg-gray-50 p-3 rounded-lg text-sm">
          <span className="font-bold block mb-1">기운 키워드</span>
          {bestMatch.mountain.energy_keywords.join(' · ')}
        </div>

        <ShareButtons 
          mountainName={bestMatch.mountain.name_ko}
          zodiac={zodiac}
          shapeKo={bestMatch.mountain.shape_ko}
          energyKeywords={bestMatch.mountain.energy_keywords}
          mountainId={bestMatch.mountain.id}
        />
      </div>

      <div className="w-[90%] mt-4">
        <h3 className="font-bold text-gray-800 mb-2 ml-1 text-sm">산 위치 확인하기</h3>
        <GoogleMap 
          lat={bestMatch.mountain.lat} 
          lng={bestMatch.mountain.lng} 
          mountainName={bestMatch.mountain.name_ko}
          className="w-full h-48"
        />
      </div>

      <div className="w-[90%] mt-4">
        <Link href={`/sansu/mountain/${bestMatch.mountain.id}`} className="block w-full bg-gray-900 text-white text-center font-bold py-3 rounded-xl hover:bg-gray-800 transition">
          자세히 보기 (코스/명당)
        </Link>
      </div>

      {recommendations.length > 1 && (
        <div className="w-[90%] mt-8">
          <h3 className="font-bold text-gray-800 mb-3">차순위 추천 산</h3>
          <div className="space-y-3">
            {recommendations.slice(1).map((rec, idx) => (
              <Link key={idx} href={`/sansu/mountain/${rec.mountain.id}`} className="block bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold">{rec.mountain.name_ko}</h4>
                  <p className="text-xs text-gray-500">{rec.mountain.shape_ko} · {rec.mountain.region}</p>
                </div>
                <div className="text-gray-400 text-sm">
                  보기 ➔
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
