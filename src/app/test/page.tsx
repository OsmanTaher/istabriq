"use client";

import { useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function LiveSearchTestPage() {
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");

  const searchResults =
    searchTerm.trim() === ""
      ? []
      : featuredProducts
          .filter((product) => product.title.includes(searchTerm))
          .slice(0, 10);

  return (
    <div className="min-h-screen bg-[#FCF9F4] p-10 rtl text-right flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[#104028] mb-8">
        تجربة البحث الحي
      </h2>

      <div className="relative w-full max-w-lg z-50">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن العطور، الجلابيات، والمزيد..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-12 py-4 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#104028] focus:border-transparent transition-all"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={22}
          />
        </div>

        {searchTerm !== "" && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {searchResults.length > 0 ? (
              <ul className="flex flex-col">
                {searchResults.map((product) => (
                  <li
                    key={product.id}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <Link
                      href={`/products/${product.category}`}
                      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group"
                    >
                      <div className="relative w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="flex flex-col flex-1">
                        <span className="text-sm font-bold text-gray-800 group-hover:text-[#104028] transition-colors line-clamp-1">
                          {product.title}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          {product.price} ج.م
                        </span>
                      </div>

                      <ShoppingBag
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.image,
                          });
                        }}
                        size={22}
                        className="text-gray-300 group-hover:text-[#104028] cursor-pointer"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <p>
                  لا توجد نتائج مطابقة لـ &quot;
                  <span className="font-bold">{searchTerm}</span>&quot;
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {searchTerm !== "" && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={() => setSearchTerm("")}
        />
      )}
    </div>
  );
}
