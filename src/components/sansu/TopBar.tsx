import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="sticky top-0 z-30 w-full bg-white/85 backdrop-blur-xl border-b border-brand/5">
      <div className="flex items-center justify-between px-5 h-14">
        <Link href="/sansu" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-7 h-7 rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white text-[13px] shadow-md glow-brand">
            山
          </span>
          <span className="font-black text-[15px] tracking-tight text-brand-deep group-hover:text-brand transition">
            개운산
          </span>
        </Link>

        <nav className="flex items-center gap-1.5">
          <Link
            href="/sansu/articles"
            className="px-3 py-1.5 rounded-full text-xs font-bold text-gray-500 hover:text-brand hover:bg-brand-soft transition"
          >
            매거진
          </Link>
          <Link
            href="/sansu/form"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand to-brand-deep shadow-md glow-brand hover:scale-[1.03] active:scale-[0.98] transition"
          >
            내 산 찾기
          </Link>
        </nav>
      </div>
    </div>
  );
}
