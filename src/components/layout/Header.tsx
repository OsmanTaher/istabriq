"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-700 hover:text-[#104028] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <div className="text-right">
              <h1 className="text-2xl font-bold text-[#104028]">إستبرق</h1>
              <p className="text-[10px] text-[#cf8e30]">للمستلزمات الإسلامية</p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-semibold">
          <Link
            href="/"
            className="text-[#104028] border-b-2 border-[#104028] pb-1"
          >
            الرئيسية
          </Link>
          <Link
            href="/products"
            className="hover:text-[#104028] transition-colors"
          >
            المنتجات
          </Link>
          <Link
            href="/categories"
            className="hover:text-[#104028] transition-colors"
          >
            الأقسام
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#104028] transition-colors"
          >
            تواصل معنا
          </Link>
        </nav>

        <div className="flex items-center">
          <Link
            href="/cart"
            className="relative p-2 text-gray-700 hover:text-[#104028] transition-colors"
          >
            <ShoppingCart size={24} />

            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-[#104028] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg pb-4">
          <nav className="flex flex-col text-right px-4 pt-2 text-gray-700 font-semibold">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-[#104028] border-b border-gray-50"
            >
              الرئيسية
            </Link>
            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 hover:text-[#104028] border-b border-gray-50 transition-colors"
            >
              المنتجات
            </Link>
            <Link
              href="/categories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 hover:text-[#104028] border-b border-gray-50 transition-colors"
            >
              الأقسام
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 hover:text-[#104028] transition-colors"
            >
              تواصل معنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
