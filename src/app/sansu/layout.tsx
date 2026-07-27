import Footer from '@/components/sansu/Footer';
import TopBar from '@/components/sansu/TopBar';

export default function SansuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[#F6F4F9] bg-[radial-gradient(120%_60%_at_50%_0%,rgba(124,58,237,0.10),transparent_60%)]">
      <div className="min-h-screen flex flex-col max-w-md mx-auto bg-white shadow-[0_0_60px_-15px_rgba(76,29,149,0.25)] relative">
        <TopBar />
        <main className="w-full flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
