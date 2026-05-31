import Footer from '@/components/sansu/Footer';

export default function SansuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center max-w-md mx-auto bg-white shadow-xl relative">
      <main className="w-full flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
