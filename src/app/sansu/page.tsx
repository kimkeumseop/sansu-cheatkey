import Link from 'next/link';

export default function SansuLandingPage() {
  return (
    <>
      <header className="w-full p-6 text-center pt-12">
        <h2 className="text-[#7C3AED] font-black text-xl tracking-tighter mb-2 italic">GAEUNSAN</h2>
        <h1 className="text-3xl font-extrabold leading-tight text-gray-900 mb-4">
          오늘 어느 산에 가야<br/>운이 트일까?
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          사주 + 풍수 오성체 분석으로 찾은,<br/>오늘 가야 할 영험한 산
        </p>
        
        <Link href="/sansu/form" className="inline-block bg-[#7C3AED] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-purple-700 transition transform hover:scale-105">
          내 산 찾기
        </Link>
      </header>

      <section className="w-full p-6 bg-gray-50 mt-8">
        <h3 className="font-bold text-lg mb-4 text-center">왜 30개 산인가?</h3>
        <p className="text-sm text-gray-600 text-center mb-6">오행의 기운을 담은 5가지 산형(오성체)으로 당신의 부족한 기운을 채워줍니다.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-xl text-center border border-green-200">
            <span className="text-green-600 font-bold block mb-1">🌿 성장의 산</span>
            <span className="text-xs text-gray-500">학업 · 시험 · 예술</span>
          </div>
          <div className="bg-red-100 p-4 rounded-xl text-center border border-red-200">
            <span className="text-red-600 font-bold block mb-1">🔥 돌파의 산</span>
            <span className="text-xs text-gray-500">막힌 운 뚫기 · 합격</span>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl text-center border border-yellow-200">
            <span className="text-yellow-600 font-bold block mb-1">⛰️ 어머니 산</span>
            <span className="text-xs text-gray-500">재물 · 가정 · 안정</span>
          </div>
          <div className="bg-slate-200 p-4 rounded-xl text-center border border-slate-300">
            <span className="text-slate-600 font-bold block mb-1">💎 귀인의 산</span>
            <span className="text-xs text-gray-500">권위 · 리더십 · 귀인</span>
          </div>
          <div className="col-span-2 bg-blue-100 p-4 rounded-xl text-center border border-blue-200">
            <span className="text-blue-600 font-bold block mb-1">💧 인연의 산</span>
            <span className="text-xs text-gray-500">연애 · 치유 · 새출발</span>
          </div>
        </div>
      </section>

      <section className="w-full p-6 mt-4">
        <h3 className="font-bold text-lg mb-4 text-center">600년 전부터 인정받은 풍수</h3>
        <p className="text-sm text-gray-600 leading-relaxed bg-amber-50 p-4 rounded-lg border border-amber-100">
          조선시대 경복궁 터 선정시 관악산 화형산(火形山)의 화기 때문에 광화문 앞에 해태 석상을 세웠다는 정사 기록이 있습니다. 선조들이 믿었던 명산의 기운, 지금 당신에게 필요한 기운은 무엇인가요?
        </p>
      </section>

      <section className="w-full p-6 mt-4">
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-bold text-lg">개운 매거진</h3>
          <Link href="/sansu/articles" className="text-xs text-[#7C3AED] font-bold hover:underline">모두 보기</Link>
        </div>
        <div className="space-y-4">
          <Link href="/sansu/articles/five-elements" className="block bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="text-[10px] text-[#7C3AED] font-bold block mb-1">풍수지리</span>
            <h4 className="font-bold text-sm mb-1 leading-tight">당신의 운명을 바꾸는 산의 5가지 형태: 오성체 가이드</h4>
            <p className="text-xs text-gray-500 line-clamp-1">목, 화, 토, 금, 수 - 산의 모양에 따라 달라지는 기운...</p>
          </Link>
          <Link href="/sansu/articles/mountain-healing" className="block bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="text-[10px] text-green-600 font-bold block mb-1">마인드 케어</span>
            <h4 className="font-bold text-sm mb-1 leading-tight">왜 힘들 때 산에 가야 할까? 과학과 풍수가 말하는 치유력</h4>
            <p className="text-xs text-gray-500 line-clamp-1">피톤치드와 지기(地氣)의 만남. 마음의 정화가 필요할 때...</p>
          </Link>
        </div>
      </section>
    </>
  );
}
