// 산행 후보 30곳을 방문 준비 정보 중심으로 비교하는 안내 페이지
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllMountains } from '@/lib/sansu/recommender';

export const metadata: Metadata = {
  title: '산행 후보 30곳 비교',
  description: '개운산의 산행 후보 30곳을 지역, 난이도, 예상 코스 시간, 대중교통 안내로 비교합니다.',
  alternates: { canonical: '/sansu/mountains' },
};

const LEVELS = [
  { key: 'easy', label: '가볍게 시작하기', note: '짧은 산책이나 사찰 방문이라도 계단·경사·날씨를 확인하세요.' },
  { key: 'intermediate', label: '시간과 체력 계획하기', note: '왕복 시간과 대중교통 막차를 먼저 맞춰 보세요.' },
  { key: 'hard', label: '산행 경험이 필요해요', note: '기상 변화, 입산 시간, 장비와 동행 여부를 먼저 확인하세요.' },
] as const;

function duration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours ? `${hours}시간 ` : ''}${mins ? `${mins}분` : ''}`.trim();
}

export default async function MountainsPage() {
  const mountains = await getAllMountains();

  return (
    <article className="p-6 pt-10 space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl font-black text-gray-900">산행 후보 30곳 비교</h1>
        <p className="text-sm leading-relaxed text-gray-600">개운산의 띠 추천보다 먼저 살펴볼 것은 갈 수 있는 지역, 코스 길이, 난이도입니다. 아래 시간과 교통은 사이트가 정리한 예시 경로의 참고값입니다. 산 전체의 평균 난이도나 실시간 안내가 아닙니다.</p>
      </header>

      <section className="rounded-2xl bg-purple-50 border border-purple-100 p-5 text-sm text-gray-700 space-y-2">
        <h2 className="font-bold text-gray-900">고르는 순서</h2>
        <ol className="list-decimal ml-5 space-y-1">
          <li>출발지에서 갈 수 있는 지역과 이동 수단을 정합니다.</li>
          <li>일몰 전 하산할 수 있도록 안내된 소요시간에 이동·휴식 시간을 더합니다.</li>
          <li>국립공원공단이나 관할 지자체의 최신 개방·기상 공지를 확인합니다.</li>
          <li>그다음 관심 주제와 풍수 이야기를 여행의 선택 요소로 참고합니다.</li>
        </ol>
      </section>

      {LEVELS.map((group) => {
        const items = mountains.filter((mountain) => mountain.level === group.key);
        return (
          <section key={group.key} className="space-y-3">
            <h2 className="text-lg font-black text-gray-900">{group.label} <span className="text-brand">{items.length}곳</span></h2>
            <p className="text-xs text-gray-500">{group.note}</p>
            <div className="space-y-3">
              {items.map((mountain) => {
                const course = mountain.best_courses[0];
                return (
                  <div key={mountain.id} className="rounded-2xl border border-gray-200 p-4 space-y-2">
                    <div className="flex justify-between gap-3 items-baseline">
                      <h3 className="font-bold text-gray-900">{mountain.name_ko}</h3>
                      <span className="text-xs text-gray-500 shrink-0">{mountain.region}</span>
                    </div>
                    <p className="text-xs text-gray-600">예시 경로: {course.name} · 약 {duration(course.duration_min)}</p>
                    <p className="text-xs text-gray-600">접근: {course.transit}</p>
                    <p className="text-xs text-gray-600">살펴볼 곳: {mountain.famous_spots.map((spot) => spot.name).join(' · ')}</p>
                    <Link className="inline-block text-xs font-bold text-brand underline underline-offset-2" href={`/sansu/mountain/${mountain.id}`}>소개와 지도 보기 →</Link>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      <section className="text-xs text-gray-600 leading-relaxed space-y-2">
        <h2 className="font-bold text-gray-900">자료 확인과 주의사항</h2>
        <p>예상 시간은 개인 속도, 날씨, 경로에 따라 달라집니다. ‘초급’이어도 계단이나 가파른 구간이 있을 수 있습니다. 코스가 폐쇄되거나 예약제로 전환될 수 있으므로 <a href="https://www.knps.or.kr" target="_blank" rel="noopener noreferrer" className="text-brand underline">국립공원공단</a> 또는 관할 기관에서 당일 확인하세요.</p>
        <p>산형과 띠의 연결은 <Link href="/sansu/about" className="text-brand underline">개운산의 문화적 분류 방식</Link>이며 산행 안전 판단이나 운세 예측에 사용하지 않습니다.</p>
      </section>
    </article>
  );
}
