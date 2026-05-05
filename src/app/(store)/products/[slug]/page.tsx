import { featuredProducts, categories } from "@/lib/data";
import ProductCard from "@/components/store/ProductCard";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const filteredProducts = featuredProducts.filter(
    (product) => product.category === slug,
  );

  if (filteredProducts.length === 0) {
    notFound();
  }

  const categoryArabicTitle =
    categories.find((product) => product.category === slug)?.title ||
    "قسم غير معروف";

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center text-[#104028]">
        {categoryArabicTitle}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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
    </div>
  );
}
