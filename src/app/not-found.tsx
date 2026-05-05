import Link from "next/link";
import { Home, ShoppingBag, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-[#FCF9F4] px-4 rtl text-right">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#104028] blur-[60px] opacity-20 rounded-full h-32 w-32 mx-auto animate-pulse"></div>
        <SearchX
          size={100}
          className="text-[#104028] relative z-10 mx-auto"
          strokeWidth={1.5}
        />
      </div>

      <h1 className="text-6xl md:text-8xl font-extrabold text-[#104028] mb-4 drop-shadow-sm">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
        عذراً، الصفحة غير موجودة!
      </h2>
      <p className="text-gray-500 max-w-md text-center mb-10 leading-relaxed text-sm md:text-base">
        يبدو أنك تبحث عن صفحة أو منتج تم نقله أو أنه غير متوفر حالياً في متجر{" "}
        <span className="font-bold text-[#104028]">استبرق</span>. لا تقلق، يمكنك
        العودة لتسوق أحدث منتجاتنا.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 px-8 py-4 bg-[#104028] text-white rounded-xl font-bold hover:bg-[#1a603b] hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[#104028]/40 active:scale-95"
        >
          <Home size={20} />
          العودة للرئيسية
        </Link>

        <Link
          href="/products"
          className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#104028] border-2 border-[#104028] rounded-xl font-bold hover:bg-[#104028]/5 hover:-translate-y-1 transition-all duration-300 active:scale-95"
        >
          <ShoppingBag size={20} />
          تصفح المنتجات
        </Link>
      </div>
    </div>
  );
}
