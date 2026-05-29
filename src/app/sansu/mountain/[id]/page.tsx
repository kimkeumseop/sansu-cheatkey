import { getAllMountains } from '@/lib/sansu/recommender';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const mountains = await getAllMountains();
  const mountain = mountains.find(m => m.id === params.id);

  if (!mountain) return {};

  return {
    title: `${mountain.name_ko}(${mountain.name_hanja}) - 산수치트키`,
    description: `${mountain.name_ko}의 풍수 스토리와 추천 코스. ${mountain.shape_ko} 기운으로 ${mountain.energy_keywords.join(', ')}를 경험해보세요.`,
    openGraph: {
      title: `${mountain.name_ko} - 당신의 운명을 트일 영험한 산`,
      description: mountain.story,
      images: [`/api/og?mountain=${mountain.id}`],
    },
  };
}

export async function generateStaticParams() {
  const mountains = await getAllMountains();
  return mountains.map((mountain) => ({
    id: mountain.id,
  }));
}

export default async function MountainDetailPage({ params }: { params: { id: string } }) {
  const mountains = await getAllMountains();
  const mountain = mountains.find(m => m.id === params.id);

  if (!mountain) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center max-w-md mx-auto bg-white shadow-xl relative pb-20">
      <div className="w-full h-64 bg-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="inline-block bg-[#7C3AED] px-2 py-1 rounded text-xs font-bold mb-2">
            {mountain.shape_ko} ({mountain.five_element})
          </div>
          <h1 className="text-3xl font-extrabold">{mountain.name_ko}</h1>
          <p className="opacity-90">{mountain.region} · {mountain.elevation_m}m</p>
        </div>
      </div>

      <div className="w-full p-6 -mt-4 bg-white rounded-t-2xl relative z-10">
        <section className="mb-8">
          <h3 className="font-bold text-lg mb-3">위치</h3>
          <KakaoMap 
            lat={mountain.lat} 
            lng={mountain.lng} 
            mountainName={mountain.name_ko}
            className="w-full h-56"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">{mountain.address}</p>
        </section>

        <section className="mb-8">
          <h3 className="font-bold text-lg mb-3">풍수 스토리</h3>
          <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl">
            {mountain.story}
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-bold text-lg mb-3">명당 포인트</h3>
          <div className="space-y-3">
            {mountain.famous_spots.map((spot, idx) => (
              <div key={idx} className="border border-gray-100 p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#7C3AED] mb-1">{spot.name}</h4>
                <p className="text-sm text-gray-600">{spot.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="font-bold text-lg mb-3">추천 코스</h3>
          <div className="space-y-3">
            {mountain.best_courses.map((course, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold">{course.name}</h4>
                  <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700">
                    난이도: {course.difficulty}
                  </span>
                </div>
                <div className="text-sm text-gray-500 flex gap-4">
                  <span>⏱ {course.duration_min}분</span>
                  <span>🚌 {course.transit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="font-bold text-lg mb-3">이런 분들께 추천해요</h3>
          <div className="flex flex-wrap gap-2">
            {mountain.wish_categories.map((wish, idx) => (
              <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                #{wish}
              </span>
            ))}
          </div>
          
          <div className="mt-4 bg-yellow-50 p-4 rounded-xl border border-yellow-100">
            <h4 className="font-bold text-yellow-800 text-sm mb-2">가장 잘 맞는 띠</h4>
            <div className="flex gap-2">
              {mountain.best_for_zodiac.map((zodiac, idx) => (
                <span key={idx} className="bg-white text-yellow-900 px-3 py-1 rounded-full text-sm font-bold border border-yellow-200 shadow-sm">
                  {zodiac}띠
                </span>
              ))}
            </div>
          </div>
        </section>

        <Link href="/sansu" className="block w-full text-center text-gray-500 text-sm font-bold mt-10 hover:text-gray-900 underline">
          ← 처음으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
