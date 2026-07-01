"use client";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";

// تعريف دقيق للبيانات المستقبلة متوافقة مع المصفوفة المحدثة
interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  images: string[]; // مصفوفة الصور الجديدة بدلاً من imageUrl الفردية
  desc: string;     // الوصف المضاف للمحاكاة
  badge?: { text: string; colorClass: string };
  onQuickView: () => void; // حدث تشغيل المعاينة السريعة
}

export default function ProductCard({
  id,
  title,
  price,
  oldPrice,
  images,
  badge,
  onQuickView,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const primaryImage = images[0] || "/logo.png"; // الصورة الأولى كصورة رئيسية للعبور

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 relative flex flex-col group cursor-pointer">
      {/* الشارة التوضيحية (Badge) */}
      {badge && (
        <span
          className={`absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-1 rounded-md z-10 shadow-sm ${badge.colorClass}`}
        >
          {badge.text}
        </span>
      )}

      {/* منطقة عرض صورة المنتج */}
      <div className="relative h-44 w-full mb-4 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
        <Image
          src={primaryImage}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300 p-3"
        />
      </div>

      {/* عنوان المنتج */}
      <h3 className="font-semibold text-gray-800 mb-3 text-sm line-clamp-2 leading-relaxed h-10 text-right">
        {title}
      </h3>

      {/* التحكم والأسعار */}
      <div className="mt-auto flex items-center justify-between gap-2">
        {/* قسم الأسعار بالجنيه المصري */}
        <div className="flex flex-col text-right">
          <span className="text-base font-bold text-[#104028]">
            {price} ج.م
          </span>
          {oldPrice && (
            <span className="text-xs text-gray-400 line-through mt-0.5">
              {oldPrice} ج.م
            </span>
          )}
        </div>

        {/* أزرار التفاعل الجانبية */}
        <div className="flex items-center gap-1.5">
          {/* زر المعاينة السريعة الذكي (أيقونة العين) */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView();
            }}
            className="p-2 border border-gray-200 text-gray-500 rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-colors"
            title="معاينة سريعة"
          >
            <Eye size={18} />
          </button>

          {/* زر الإضافة إلى السلة المستمرة */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart({ id, title, price, image: primaryImage });
            }}
            className="p-2 bg-[#104028] text-white rounded-xl hover:bg-[#0b2c1c] transition-colors shadow-sm"
            title="أضف إلى السلة"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}