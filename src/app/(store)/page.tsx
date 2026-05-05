import Image from "next/image";
import Link from "next/link";
import { featuredProducts, categories } from "@/lib/data";
import CategoryCard from "@/components/store/CategoryCard";
import ProductCard from "@/components/store/ProductCard";

const finalProducts = [
  ...featuredProducts.filter((p) => p.badge),
  ...featuredProducts.filter((p) => !p.badge).slice(0, 10),
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <section className="relative rounded-2xl overflow-hidden shadow-sm bg-[#F8F5F0]">
        <div className="relative w-full h-100 md:h-150 overflow-hidden flex items-center justify-start">
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
              className="md:bg-[#104028] md:hover:bg-[#1a5c3a]  border-1 text-white px-8 py-3 rounded-xl
                         flex items-center gap-2 transition-all font-semibold shadow-lg hover:shadow-lg
                         "
            >
              تسوق الآن
              <span className="mr-2 ">←</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            تسوق حسب القسم
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              category={cat.category}
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
              imageUrl={product.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
