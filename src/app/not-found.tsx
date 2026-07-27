import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#F6F4F9] bg-[radial-gradient(120%_60%_at_50%_0%,rgba(124,58,237,0.10),transparent_60%)]">
      <div className="min-h-screen max-w-md mx-auto bg-white shadow-[0_0_60px_-15px_rgba(76,29,149,0.25)] flex flex-col items-center justify-center text-center px-8">
        <span className="text-6xl mb-6" aria-hidden>
          🧭
        </span>
        <h1 className="text-2xl font-black text-gray-900 mb-3">길을 잃으셨네요</h1>
        <p className="text-[13px] text-gray-500 font-medium leading-relaxed mb-8">
          찾으시는 산이나 페이지가 없습니다.
          <br />
          다시 산 아래에서 시작해 볼까요?
        </p>

        <div className="flex flex-col gap-2.5 w-full max-w-[16rem]">
          <Link
            href="/sansu"
            className="w-full bg-gradient-to-r from-brand to-brand-deep text-white font-bold py-4 px-6 rounded-2xl shadow-lg glow-brand hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            홈으로 가기
          </Link>
          <Link
            href="/sansu/form"
            className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-4 px-6 rounded-2xl hover:border-brand/40 transition"
          >
            내 산 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}
