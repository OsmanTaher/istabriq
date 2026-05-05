import Link  from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  count: number;
  category: string;
  imageUrl: string;
}

export default function CategoryCard({
  title,
  category,
  count,
  imageUrl,
}: CategoryCardProps) {
  return (
    <Link href={`/products/${category}`} className="bg-[#FCF9F4] border border-[#f0ebe1] rounded-2xl p-3 flex items-center justify-between min-w-[220px] hover:shadow-md transition-all cursor-pointer group">
      <div className="text-right">
        <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-[#104028] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{count} منتج</p>
      </div>
      <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-xl p-1 shadow-sm">
        <Image src={imageUrl} alt={title} fill className="object-contain p-1" />
      </div>
    </Link>
  );
}
