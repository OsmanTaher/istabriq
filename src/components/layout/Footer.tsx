import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F5F0] border-t border-[#f0ebe1] py-8 mt-12">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div
          dir="rtl"
          className="flex items-center flex-wrap justify-center gap-2 md:gap-3 text-sm md:text-base font-medium text-[#104028]"
        >
          <span>مطور المنصة </span>

          <a
            href="https://www.facebook.com/twshkndy.qlashy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#cf8e30] text-white px-4 py-1 rounded-md font-bold hover:bg-[#b57a27] hover:-translate-y-0.5 transition-all shadow-sm"
          >
            الأسواني
          </a>

          <span>كل الحقوق محفظوفة &copy; 2026</span>
        </div>
      </div>
    </footer>
  );
}
