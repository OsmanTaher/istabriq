import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/lib/data";
import CategoryCard from "@/components/store/CategoryCard";
import ProductCard from "@/components/store/ProductCard";

const categories = [
  {
    id: 5,
    title: "الجلابيات",
    category: "jalabiyas",
    count: 32,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 6,
    title: "السواك",
    category: "siwak",
    count: 18,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 7,
    title: "العطور والبخور",
    category: "perfumes-and-incense",
    count: 24,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 4,
    title: "الأحذية والنعال",
    category: "shoes",
    count: 21,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 3,
    title: "المصاحف والكتب",
    category: "books-and-quran",
    count: 15,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 1,
    title: "هدايا وتغليف",
    category: "gifts-and-packaging",
    count: 12,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 2,
    title: "إكسسوارات",
    category: "accessories",
    count: 19,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
];


const finalProducts = [
  ...featuredProducts.filter((p) => p.badge),
  ...featuredProducts.filter((p) => !p.badge).slice(0, 10),
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <section className="relative rounded-2xl overflow-hidden shadow-sm bg-[#F8F5F0]">
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden flex items-center justify-start">
          <Image
            src="/heroImg.png"
            alt="منتجات إسلامية متنوعة"
            fill
            className="object-cover brightness-75"
            priority
          />

          <div className="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-start">
            <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold text-white leading-tight mb-4 drop-shadow-lg">
              كل ما تحتاجه <br /> في مكان واحد
            </h2>

            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-100 mb-8 max-w-lg drop-shadow-md">
              منتجات إسلامية أصلية <br className="md:hidden" /> بجودة عالية
              وأسعار مميزة
            </p>

            <Link
              href="/products"
              className="bg-[#104028] hover:bg-[#1a5c3a] text-white px-8 py-3 rounded-xl flex items-center gap-2 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              تسوق الآن
              <span className="mr-2">←</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            تسوق حسب القسم
          </h2>
          <Link
            href="/categories"
            className="text-sm text-gray-500 hover:text-[#104028] transition-colors flex items-center gap-1"
          >
            <span className="text-[10px]">{"<"}</span> عرض جميع الأقسام
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar boundary">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}

              count={cat.count}
              imageUrl={cat.image}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            منتجات مميزة
          </h2>
          <Link
            href="/products"
            className="text-sm text-gray-500 hover:text-[#104028] transition-colors flex items-center gap-1"
          >
            <span className="text-[10px]">{"<"}</span> عرض جميع المنتجات
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {finalProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              badge={product.badge}
              imageUrl={product.image} // هنا قمنا بالربط اليدوي الصحيح
            />
          ))}
        </div>
      </section>
    </div>
  );
}
