import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
