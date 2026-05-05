// app/product/[slug]/page.tsx
import { featuredProducts } from "@/lib/data";
import ProductCard from "@/components/store/ProductCard";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // تصفية المنتجات بناءً على الـ category (slug)
  const filteredProducts = featuredProducts.filter(
    (product) => product.category === slug
  );

  // إذا كان القسم غير موجود في بياناتنا، أظهر صفحة 404
  if (filteredProducts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8 text-center uppercase">
        قسم: {slug.replace(/-/g, ' ')} 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            badge={product.badge}
            imageUrl={product.image}
          />
        ))}
      </div>
    </div>
  );
}