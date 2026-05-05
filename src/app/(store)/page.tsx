import Image from "next/image";
import Link from "next/link";
import CategoryCard from "@/components/store/CategoryCard";
import ProductCard from "@/components/store/ProductCard";

const categories = [
  {
    id: 1,
    title: "هدايا وتغليف",
    count: 12,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 2,
    title: "إكسسوارات",
    count: 19,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 3,
    title: "المصاحف والكتب",
    count: 15,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 4,
    title: "الأحذية والنعال",
    count: 21,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 5,
    title: "الجلابيات",
    count: 32,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 6,
    title: "السواك",
    count: 18,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 7,
    title: "العطور والبخور",
    count: 24,
    image:
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
];

const featuredProducts = [
  {
    id: 1,
    title: "مصحف المدينة بحجم كبير",
    price: 280,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 2,
    title: "صندل رجالي جلدي",
    price: 450,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 3,
    title: "جلابية رجالي فاخرة",
    price: 650,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 4,
    title: "عطر عود فاخر 100 مل",
    price: 600,
    oldPrice: 750,
    badge: { text: "خصم 20%", colorClass: "bg-red-600" },
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 5,
    title: "سواك طبيعي (10 قطع)",
    price: 60,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 6,
    title: "عطر مسك الطهارة",
    price: 320,
    badge: { text: "جديد", colorClass: "bg-[#104028]" },
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 7,
    title: "سبحة عقيق يماني",
    price: 150,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 8,
    title: "شماغ أحمر كلاسيك",
    price: 220,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 9,
    title: "عقال مقصب ملكي",
    price: 180,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 10,
    title: "دهن عود كمبودي معتق",
    price: 1200,
    oldPrice: 1500,
    badge: { text: "حصري", colorClass: "bg-yellow-500" },
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 11,
    title: "سجادة صلاة مبطنة طبية",
    price: 135,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 12,
    title: "مبخرة خشبية حائلية",
    price: 90,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 13,
    title: "بخور عود مروكي",
    price: 450,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 14,
    title: "ثوب شتوي رجالي داكن",
    price: 350,
    badge: { text: "جديد", colorClass: "bg-[#104028]" },
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 15,
    title: "طاقية قطن 100%",
    price: 25,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 16,
    title: "عطر أمير العود",
    price: 250,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 17,
    title: "خاتم فضة عيار 925",
    price: 300,
    oldPrice: 400,
    badge: { text: "خصم 25%", colorClass: "bg-red-600" },
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 18,
    title: "محفظة بطاقات جلد طبيعي",
    price: 180,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 19,
    title: "ساعة يد كلاسيكية ذهبية",
    price: 850,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 20,
    title: "حذاء شرقي مطرز يدويًا",
    price: 550,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 21,
    title: "حقيبة يد جلدية للأعمال",
    price: 750,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 22,
    title: "مسك الختام (تولة)",
    price: 150,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 23,
    title: "حامل مصحف خشبي مزخرف",
    price: 110,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 24,
    title: "مصحف التجويد الملون",
    price: 95,
    badge: { text: "الأكثر مبيعاً", colorClass: "bg-blue-600" },
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 25,
    title: "تفسير ابن كثير (4 مجلدات)",
    price: 320,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 26,
    title: "عطر ورد طائفي قطفة أولى",
    price: 900,
    oldPrice: 1100,
    badge: { text: "خصم 18%", colorClass: "bg-red-600" },
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 27,
    title: "مسبحة إلكترونية ذكية",
    price: 45,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 28,
    title: "صندوق هدايا فاخر للعود",
    price: 120,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 29,
    title: "غترة بيضاء سويسرية",
    price: 190,
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  },
  {
    id: 30,
    title: "سديري رجالي بوجهين",
    price: 240,
    badge: { text: "جديد", colorClass: "bg-[#104028]" },
    image: "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
  }
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
              منتجات إسلامية أصلية <br className="md:hidden" /> بجودة عالية وأسعار مميزة
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
          {featuredProducts.map((product) => (
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
