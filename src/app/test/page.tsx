import Link from "next/link";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  ShieldCheck,
  Truck,
  HeadphonesIcon,
  RefreshCw,
} from "lucide-react";

type Category = { id: string; name: string; count: number; image: string };
type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  badge?: string;
};

const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "هدايا وتغليف",
    count: 19,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&q=80",
  },
  {
    id: "2",
    name: "إكسسوارات",
    count: 19,
    image:
      "https://images.unsplash.com/photo-1599643478514-4a720230ed5a?w=300&q=80",
  },
  {
    id: "3",
    name: "المصاحف والكتب",
    count: 15,
    image:
      "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?w=300&q=80",
  },
  {
    id: "4",
    name: "الأحذية والنعال",
    count: 21,
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&q=80",
  },
  {
    id: "5",
    name: "الجلابيات",
    count: 32,
    image:
      "https://images.unsplash.com/photo-1583391733958-d20531e115fa?w=300&q=80",
  },
  {
    id: "6",
    name: "السواك",
    count: 18,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80",
  },
  {
    id: "7",
    name: "العطور والبخور",
    count: 24,
    image:
      "https://images.unsplash.com/photo-1594034183923-8376e1858ba5?w=300&q=80",
  },
];

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "مصحف المدينة بحجم كبير",
    price: 280,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?w=400&q=80",
  },
  {
    id: "2",
    name: "صندل رجالي جلدي",
    price: 450,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&q=80",
  },
  {
    id: "3",
    name: "جلابية رجالي فاخرة",
    price: 650,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1583391733958-d20531e115fa?w=400&q=80",
  },
  {
    id: "4",
    name: "عطر عود فاخر 100 مل",
    price: 600,
    oldPrice: 750,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1594034183923-8376e1858ba5?w=400&q=80",
    badge: "خصم 20%",
  },
  {
    id: "5",
    name: "سواك طبيعي (10 قطع)",
    price: 60,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
  },
  {
    id: "6",
    name: "عطر مسك الطهارة",
    price: 320,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80",
    badge: "جديد",
  },
];

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-16">
      <section className="bg-[#f9f6f0] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="flex-1 space-y-6 z-10 text-center md:text-start">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            كل ما تحتاجه <br /> في مكان واحد
          </h1>
          <p className="text-lg text-slate-600">
            منتجات إسلامية أصلية بجودة عالية وأسعار مميزة
          </p>
          <button className="bg-[#1a4731] hover:bg-[#133524] text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto md:mx-0 transition-colors">
            <span>تسوق الآن</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 relative h-[300px] w-full rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1000"
            alt="Hero Islamic Products"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold text-slate-800">تسوق حسب القسم</h2>
          <Link
            href="/categories"
            className="text-slate-500 hover:text-[#1a4731] flex items-center gap-1 text-sm font-medium"
          >
            عرض جميع الأقسام <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="min-w-[140px] flex flex-col items-center bg-white border border-slate-100 p-4 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3 bg-slate-50">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-slate-800 text-center">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500">{cat.count} منتج</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold text-slate-800">منتجات مميزة</h2>
          <Link
            href="/products"
            className="text-slate-500 hover:text-[#1a4731] flex items-center gap-1 text-sm font-medium"
          >
            عرض جميع المنتجات <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col relative hover:shadow-lg transition-shadow group"
            >
              {product.badge && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  {product.badge}
                </span>
              )}

              <div className="aspect-square bg-slate-50 rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-sm font-bold text-slate-800 mb-1 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center gap-1 mb-3">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-slate-600">
                  {product.rating}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-[#1a4731]">
                    {product.price} ج.م
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {product.oldPrice} ج.م
                    </span>
                  )}
                </div>
                <button className="bg-slate-100 hover:bg-[#1a4731] hover:text-white text-slate-700 p-2 rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-slate-100 rounded-2xl p-6">
        <div className="flex items-center gap-3 justify-center text-center md:text-start flex-col md:flex-row">
          <Truck className="w-8 h-8 text-[#1a4731]" />
          <div>
            <h4 className="font-bold text-slate-800 text-sm">توصيل سريع</h4>
            <p className="text-xs text-slate-500">لكل أنحاء مصر</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center text-center md:text-start flex-col md:flex-row">
          <ShieldCheck className="w-8 h-8 text-[#1a4731]" />
          <div>
            <h4 className="font-bold text-slate-800 text-sm">
              منتجات أصلية 100%
            </h4>
            <p className="text-xs text-slate-500">جودة مضمونة</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center text-center md:text-start flex-col md:flex-row">
          <RefreshCw className="w-8 h-8 text-[#1a4731]" />
          <div>
            <h4 className="font-bold text-slate-800 text-sm">إرجاع سهل</h4>
            <p className="text-xs text-slate-500">خلال 14 يوم</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center text-center md:text-start flex-col md:flex-row">
          <HeadphonesIcon className="w-8 h-8 text-[#1a4731]" />
          <div>
            <h4 className="font-bold text-slate-800 text-sm">دعم العملاء</h4>
            <p className="text-xs text-slate-500">نحن هنا لخدمتك</p>
          </div>
        </div>
      </section>
    </main>
  );
}
