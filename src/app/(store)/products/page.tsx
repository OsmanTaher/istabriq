// app/product/page.tsx
import { featuredProducts } from "@/lib/data"; // افترضنا أن البيانات في هذا المسار
import ProductCard from "@/components/store/ProductCard";

export default function AllProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8 text-center">كل المنتجات</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
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