"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  const FREE_SHIPPING_THRESHOLD = 260;
  const shippingCost = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 30;
  const finalTotal = totalPrice + shippingCost;
  const progressPercentage = Math.min(
    (totalPrice / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center flex flex-col items-center">
        <ShoppingBag size={64} className="text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          سلة التسوق فارغة
        </h2>
        <p className="text-gray-500 mb-6">
          لم تقم بإضافة أي منتجات إلى السلة بعد.
        </p>
        <Link
          href="/products"
          className="bg-[#104028] text-white px-8 py-3 rounded-lg font-bold"
        >
          تصفح المنتجات
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#104028]">
          الرئيسية
        </Link>
        <span>{"<"}</span>
        <span className="text-gray-800 font-semibold">سلة التسوق</span>
      </div>

      <div className="flex items-center justify-end gap-2 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">سلة التسوق</h1>
        <ShoppingBag className="text-gray-800" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="hidden md:grid grid-cols-12 gap-4 text-gray-500 text-sm pb-2 border-b border-gray-200 text-center">
            <div className="col-span-5 text-right">المنتج</div>
            <div className="col-span-2">السعر</div>
            <div className="col-span-3">الكمية</div>
            <div className="col-span-2 text-left">الإجمالي</div>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:grid md:grid-cols-12 gap-4 items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="col-span-5 flex items-center gap-4 w-full justify-end md:justify-start flex-row-reverse md:flex-row">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg relative flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="text-right w-full">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="col-span-2 text-center text-gray-600 font-medium hidden md:block">
                  {item.price} ج.م
                </div>

                <div className="col-span-3 flex justify-center items-center w-full">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-50 text-gray-600"
                    >
                      +
                    </button>
                    <span className="px-4 py-1 font-semibold text-gray-800 border-x border-gray-200">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-50 text-gray-600"
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="col-span-2 flex items-center justify-between md:justify-end w-full gap-4">
                  <span className="font-bold text-[#104028] text-lg">
                    {item.price * item.quantity} ج.م
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f2f8f5] rounded-xl p-4 flex flex-col gap-2 border border-[#e0f0e9]">
            <div className="flex justify-between items-center text-sm font-semibold text-[#104028]">
              <Truck size={20} />
              <span>
                {totalPrice >= FREE_SHIPPING_THRESHOLD
                  ? "أنت مؤهل للحصول على شحن مجاني!"
                  : `أضف ${FREE_SHIPPING_THRESHOLD - totalPrice} ج.م لتحصل على شحن مجاني`}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-[#104028] h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-[#FDFBF7] rounded-2xl p-6 border border-[#f0ebe1] sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-right">
              ملخص الطلب
            </h2>

            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between text-gray-600">
                <span>{cartItems.length}</span>
                <span>عدد المنتجات</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>{totalPrice} ج.م</span>
                <span>المجموع الفرعي</span>
              </div>
              <div className="flex justify-between text-[#104028] font-semibold">
                <span>
                  {shippingCost === 0 ? "مجاني" : `${shippingCost} ج.م`}
                </span>
                <span>الشحن</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#104028]">
                  {finalTotal} ج.م
                </span>
                <span className="text-lg font-bold text-gray-800">
                  الإجمالي
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/checkout"
                className="w-full bg-[#104028] text-white py-3 rounded-lg font-bold text-center hover:bg-[#1a5c3a] transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-xl">←</span> إتمام الطلب
              </Link>
              <Link
                href="/products"
                className="w-full bg-white text-gray-700 border border-gray-300 py-3 rounded-lg font-bold text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-xl text-gray-400">←</span> متابعة التسوق
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
