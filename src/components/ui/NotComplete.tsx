import Link from "next/link";
import { Home, ShoppingBag, Construction } from "lucide-react";

export default function NotComplete() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-[#FCF9F4] px-4 rtl text-right">
      {/* أيقونة تحت الإنشاء مع تأثير النبض */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#104028] blur-[60px] opacity-20 rounded-full h-32 w-32 mx-auto animate-pulse"></div>
        <Construction
          size={100}
          className="text-[#104028] relative z-10 mx-auto"
          strokeWidth={1.5}
        />
      </div>

      {/* نص الحالة */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#104028] mb-4 drop-shadow-sm">
        قيد التطوير
      </h1>
      
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
        نعمل على تجهيز تجربة تليق بك!
      </h2>

      <p className="text-gray-500 max-w-md text-center mb-10 leading-relaxed text-sm md:text-base">
        هذه الصفحة في متجر <span className="font-bold text-[#104028]">استبرق</span> تخضع حالياً لمساتنا الأخيرة لتوفير أفضل تجربة تسوق للعطور والملابس. سنكون جاهزين قريباً جداً.
      </p>

      {/* أزرار التنقل */}
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
          استكشاف المتوفر حالياً
        </Link>
      </div>

      {/* لمسة إضافية: شريط تقدم بسيط يوحي بالعمل */}
      <div className="mt-12 w-full max-w-xs bg-gray-200 h-1.5 rounded-full overflow-hidden">
        <div className="bg-[#104028] h-full w-2/3 animate-progress"></div>
      </div>
    </div>
  );
}