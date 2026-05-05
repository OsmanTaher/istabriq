"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, ShoppingBag, ShoppingCart, User, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { featuredProducts } from "@/lib/data";

export default function Header() {
  const { totalItems, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchTerm("");
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchResults =
    searchTerm.trim() === ""
      ? []
      : featuredProducts
          .filter((product) => product.title.includes(searchTerm))
          .slice(0, 10);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="text-right">
            <h1 className="text-2xl font-bold text-[#104028]">إستبرق</h1>
            <p className="text-[10px] text-[#cf8e30]">للمستلزمات الإسلامية</p>
          </div>
        </Link>

        <div
          ref={searchContainerRef}
          className={`absolute top-full right-0 left-0 w-full bg-white p-4 shadow-md border-t border-gray-100 md:static md:block md:flex-1 md:max-w-xl md:p-0 md:shadow-none md:border-none md:bg-transparent transition-all z-40 ${
            isMobileSearchOpen ? "block" : "hidden"
          }`}
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="ابحث عن العطور، الجلابيات، والمزيد..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-12 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#104028] focus:border-transparent transition-all"
              autoFocus={isMobileSearchOpen}
            />

            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            {searchTerm !== "" && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors bg-gray-100 hover:bg-red-50 p-1 rounded-full"
                aria-label="مسح البحث"
              >
                <X size={16} />
              </button>
            )}

            {searchTerm.trim() !== "" && (
              <div className="absolute top-full mt-1 right-0 left-0 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                {searchResults.length > 0 ? (
                  <ul className="flex flex-col max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {searchResults.map((product) => (
                      <li
                        key={product.id}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <Link
                          onClick={() => {
                            setSearchTerm("");
                            setIsMobileSearchOpen(false);
                          }}
                          href={`/products/${product.category}`}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                sizes="40px"
                                className="object-contain p-1"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-gray-800 group-hover:text-[#104028] transition-colors line-clamp-1">
                                {product.title}
                              </span>
                              <span className="text-xs text-gray-500 mt-0.5">
                                {product.price} ج.م
                              </span>
                            </div>
                          </div>

                          <button
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
                            className="p-2 text-gray-400 hover:text-[#104028] hover:bg-[#104028]/10 rounded-full transition-all"
                            aria-label="أضف إلى السلة"
                          >
                            <ShoppingBag size={18} />
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-6 text-center text-gray-500 text-sm">
                    لا توجد نتائج مطابقة لـ &quot;
                    <span className="font-bold text-gray-700">
                      {searchTerm}
                    </span>
                    &quot;
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#104028] transition-colors rounded-full hover:bg-gray-100"
            aria-label="بحث"
          >
            {isMobileSearchOpen ? <X size={22} /> : <Search size={22} />}
          </button>

          <Link
            href="/login"
            className="flex items-center gap-1 p-2 text-gray-700 hover:text-[#104028] transition-colors rounded-full hover:bg-gray-100"
            title="تسجيل الدخول"
          >
            <User size={22} />
            <span className="hidden md:inline font-semibold text-sm">دخول</span>
          </Link>

          <Link
            href="/cart"
            className="relative p-2 text-gray-700 hover:text-[#104028] transition-colors rounded-full hover:bg-gray-100"
            aria-label="سلة المشتريات"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-[#104028] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
