import Link from 'next/link';

export default function SansuLandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center max-w-md mx-auto bg-white shadow-xl relative pb-20">
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

      <footer className="w-full p-6 text-center text-xs text-gray-400 mt-10 border-t border-gray-100">
        본 서비스는 전통 풍수 오성체 이론과 사주 12지 오행을 결합한 콘텐츠 추천이며, 종교·의료·법률 자문이 아닙니다. 등산 시 안전수칙을 준수하시고, 위험 코스는 전문 가이드와 동행하세요.
      </footer>
    </div>
  );
}
