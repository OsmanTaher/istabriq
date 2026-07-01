"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface QuickViewModalProps {
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

export default function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !product) return null;

  return (
    <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-4">
      {/* الخلفية المعتمة والمغسولة (Blur Backdrop) */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* جسم النافذة المنبثقة المنظم بتوجيه RTL */}
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative z-10 grid grid-cols-2 dir-rtl text-right animate-in fade-in zoom-in-95 duration-200">
        
        {/* زر الإغلاق العلوي */}
        <button 
          onClick={onClose} 
          className="absolute top-4 left-4 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors z-20"
        >
          <X size={18} />
        </button>

        {/* الجزء الأيمن: لوحة الصور وعارض التبديل */}
        <div className="p-6 bg-gray-50/50 flex flex-col justify-center items-center border-l border-gray-100">
          <div className="relative h-64 w-full mb-4">
            <Image
              src={product.images[activeImageIndex] || "/logo.png"}
              alt={product.title}
              fill
              className="object-contain p-2"
            />
          </div>
          {/* أزرار المعاينة التبديلية للصورتين */}
          <div className="flex gap-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 bg-white ${
                  activeImageIndex === index ? "border-[#104028]" : "border-gray-200"
                }`}
              >
                <Image src={img} alt="" fill className="object-contain p-1" />
              </button>
            ))}
          </div>
        </div>

        {/* الجزء الأيسر: تفاصيل ومميزات المنتج */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 leading-relaxed">
              {product.title}
            </h2>
            
            {/* عرض السعر والخصم المطبق */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-black text-[#104028]">
                {product.price} ج.م
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.oldPrice} ج.م
                </span>
              )}
            </div>

            {/* الوصف التفصيلي الدقيق للمنتج */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 bg-gray-50 p-3 rounded-xl border border-gray-100 h-32 overflow-y-auto">
              {product.desc}
            </p>
          </div>

          {/* زر الشراء المباشر وإضافته للسلة */}
          <button
            onClick={() => {
              addToCart({ id: product.id, title: product.title, price: product.price, image: product.images[0] });
              onClose();
            }}
            className="w-full bg-[#104028] text-white py-3.5 rounded-xl font-bold hover:bg-[#0b2c1c] transition-colors flex items-center justify-center gap-2 shadow-md shadow-green-900/10"
          >
            <ShoppingCart size={20} />
            إضافة إلى سلة المشتريات
          </button>
        </div>

      </div>
    </div>
  );
}