import Image from "next/image";
import { ShoppingCart } from "lucide-react";


interface ProductCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  badge?: { text: string; colorClass: string };
}

export default function ProductCard({
  title,
  price,
  oldPrice,
  imageUrl,
  badge,
}: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-lg transition-shadow relative flex flex-col group cursor-pointer">
      {badge && (
        <span
          className={`absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-1 rounded-md z-10 ${badge.colorClass}`}
        >
          {badge.text}
        </span>
      )}

      <div className="relative h-40 w-full mb-4 bg-gray-50/50 rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
        />
      </div>

      <h3 className="font-semibold text-gray-800 mb-4 text-sm line-clamp-2 leading-relaxed">
        {title}
      </h3>

      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#104028]">
              {price} ج.م
            </span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {oldPrice} ج.م
              </span>
            )}
          </div>
        </div>

        <button className="p-2 border border-[#104028] text-[#104028] rounded-xl hover:bg-[#104028] hover:text-white transition-colors">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}
