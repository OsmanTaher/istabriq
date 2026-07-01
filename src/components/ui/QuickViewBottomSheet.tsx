"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface QuickViewBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    title: string;
    price: number;
    oldPrice?: number;
    images: string[];
    desc: string;
  } | null;
}

export default function QuickViewBottomSheet({ isOpen, onClose, product }: QuickViewBottomSheetProps) {
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // إعادة تعيين مؤشر الصور عند فتح درج لمنتج جديد
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isOpen) setActiveImageIndex(0);
  }, [isOpen, product]);

  if (!product) return null;

  return (
    <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
      {/* ستارة الخلفية الشفافة المظلمة */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={onClose} 
      />

      {/* هيكل الدرج السفلي المتفاعل مع الانتقالات الحركية (Slide up animation) */}
      <div 
        className={`absolute bottom-0 inset-x-0 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto z-10 text-right p-5 pb-8 flex flex-col transform transition-transform duration-300 ease-out border-t border-gray-100 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* مقبض تجميلي للدرج يمثل أنظمة الموبايل القياسية */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4" onClick={onClose} />
        
        {/* رأس درج المعاينة وزر الخروج السريع */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="p-1.5 rounded-full bg-gray-100 text-gray-500">
            <X size={18} />
          </button>
          <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">معاينة سريعة</span>
        </div>

        {/* عارض الصور الرأسي للهواتف */}
        <div className="relative h-48 w-full bg-gray-50 rounded-2xl mb-3 flex items-center justify-center">
          <Image
            src={product.images[activeImageIndex] || "/logo.png"}
            alt={product.title}
            fill
            className="object-contain p-2"
          />
        </div>

        {/* نقاط التصفح السفلي تحت الصورة للصورتين */}
        <div className="flex justify-center gap-1.5 mb-4">
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`h-2 transition-all rounded-full ${
                activeImageIndex === index ? "w-6 bg-[#104028]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* تفاصيل المنتج النصية */}
        <h2 className="text-base font-bold text-gray-900 mb-2 leading-relaxed">
          {product.title}
        </h2>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-extrabold text-[#104028]">{product.price} ج.م</span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">{product.oldPrice} ج.م</span>
          )}
        </div>

        <p className="text-gray-600 text-xs leading-relaxed mb-6 bg-gray-50 p-3 rounded-xl overflow-y-auto max-h-24">
          {product.desc}
        </p>

        {/* زر الإضافة للسلة الثابت أسفل الشاشة للموبايل */}
        <button
          onClick={() => {
            addToCart({ id: product.id, title: product.title, price: product.price, image: product.images[0] });
            onClose();
          }}
          className="w-full bg-[#104028] text-white py-3.5 rounded-xl font-bold hover:bg-[#0b2c1c] transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <ShoppingCart size={16} />
          إضافة إلى سلة المشتريات
        </button>
      </div>
    </div>
  );
}