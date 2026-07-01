
export interface ProductMock {
  id: number;
  title: string;
  category: string;
  count: number;
  image: string;
}

export interface FeaturedProductMock {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  category: string;
  desc: string;
  badge?: {
    text: string;
    colorClass: string;
  };
  images: string[];
}


export const categories: ProductMock[] = [
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
    title: "المصاحف و الكتب",
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

// src/lib/data.ts



export const featuredProducts: FeaturedProductMock[] = [
  {
    id: 1,
    title: "مصحف المدينة بحجم كبير",
    price: 280,
    category: "books-and-quran",
    desc: "مصحف المدينة المنورة الفاخر بطبعة مجمع الملك فهد، يتميز بوضوح الخط وجودة الورق وحجمه الكبير والمناسب للقراءة المريحة في المساجد والمنازل.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 2,
    title: "صندل رجالي جلدي",
    price: 450,
    category: "shoes",
    desc: "صندل رجالي فاخر مصنوع يدويًا من الجلد الطبيعي الممتاز، يمنحك الراحة الفائقة والمظهر الشرقي الأنيق الذي يناسب كافة المناسبات والأعياد.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 3,
    title: "جلابية رجالي فاخرة",
    price: 650,
    category: "jalabiyas",
    desc: "جلابية رجالية راقية بتصميم فضفاض مريح وتفاصيل تقليدية أنيقة، منسوجة من قماش بارد ممتاز ليمنحك مظهرًا مهيبًا وراحة طوال اليوم.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 4,
    title: "عطر عود فاخر 100 مل",
    price: 600,
    oldPrice: 750,
    category: "perfumes-and-incense",
    badge: { text: "خصم 20%", colorClass: "bg-red-600" },
    desc: "توليفة عطرية ساحرة تفوح بنقاوة العود الشرقي الأصيل لثبات فواح يدوم طويلاً، صُمم خصيصاً لأصحاب الذوق الرفيع وللمناسبات الخاصة الرسمية.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 5,
    title: "سواك طبيعي (10 قطع)",
    price: 60,
    category: "siwak",
    desc: "مجموعة من أعواد السواك الطازجة المستخرجة من جذور شجر الأراك الطبيعي، مغلفة حرارياً بعناية فائقة للحفاظ على الرطوبة والنكهة الحارة المميزة الحامية للثة.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 6,
    title: "عطر مسك الطهارة",
    price: 320,
    category: "perfumes-and-incense",
    badge: { text: "جديد", colorClass: "bg-[#104028]" },
    desc: "عطر مسك الطهارة الأصلي برائحته المخملية المنعشة والنظيفة الممتدة، خيار مثالي للاستخدام اليومي بعد الاستحمام لمنحك إحساساً مريحاً بالنقاء والثقة.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 7,
    title: "سبحة عقيق يماني",
    price: 150,
    category: "accessories",
    desc: "سبحة فاخرة مكونة من خرز حجر العقيق اليماني الطبيعي المصقول بدقة، منسقة بشكل متناظر مريح لليد ومزودة بكركوشة متينة تليق بالإهداء والاستخدام الشخصي.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 8,
    title: "شماغ أحمر كلاسيك",
    price: 220,
    category: "jalabiyas",
    desc: "شماغ أحمر كلاسيكي بنقوش تراثية دقيقة وخيوط قطنية ثابتة الألوان وعالية النعومة، يوفر لك المظهر الوقور والأناقة الكاملة في حضورك اليومي والمناسبات.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 9,
    title: "عقال مقصب ملكي",
    price: 180,
    category: "accessories",
    desc: "عقال مقصب ملكي مصنوع بأيدي أمهر الحرفيين من خيوط الصوف الممتاز والزري الذهبي اللامع، يوفر ثباتاً تاماً ومظهراً رسمياً متكاملاً يزيد الثوب فخامة.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 10,
    title: "دهن عود كمبودي معتق",
    price: 1200,
    oldPrice: 1500,
    category: "perfumes-and-incense",
    badge: { text: "حصري", colorClass: "bg-yellow-500" },
    desc: "قطرات نادرة فاخرة من دهن العود الكمبودي النقي المعتق لسنوات طويلة، تمتاز برائحة بخورية دافئة ونفاذة وثبات أسطوري يدوم لأيام على الملابس.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 11,
    title: "سجادة صلاة مبطنة طبية",
    price: 135,
    category: "accessories",
    desc: "سجادة صلاة مصممة هندسياً ببطانة طبية مرنة لتخفيف الضغط تماماً عن الركبتين والقدمين والمفاصل أثناء السجود والقيام، لتمنحك الراحة والخشوع التام.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 12,
    title: "مبخرة خشبية حائلية",
    price: 90,
    category: "perfumes-and-incense",
    desc: "مبخرة تراثية مصنوعة من خشب الأثل الحائلي الأصلي ومزينة بمسامير ونقوش يدوية نحاسية بديعة، قطعة فنية عريقة ومثالية لتطييب منزلك ومجالس الضيافة.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 13,
    title: "بخور عود مروكي",
    price: 450,
    category: "perfumes-and-incense",
    desc: "كسرات من بخور العود المروكي الطبيعي ذو الرائحة البخورية الهادئة والباردة، تزبد بكثافة على الجمر ومناسبة لتعطير الغرف والمساجد برائحة تدوم.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 14,
    title: "ثوب شتوي رجالي داكن",
    price: 350,
    category: "jalabiyas",
    badge: { text: "جديد", colorClass: "bg-[#104028]" },
    desc: "ثوب رجالي شتوي مصمم من أقمشة دافئة وثقيلة ومقاومة للتجعد، بقصة مريحة وألوان داكنة كلاسيكية تمنحك الدفء والأناقة في الأجواء الباردة.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 15,
    title: "طاقية قطن 100%",
    price: 25,
    category: "accessories",
    desc: "طاقية رأس قطنية بيضاء منسوجة بمرونة فائقة وتفاصيل مخرمة ممتازة للتهوية، مريحة جداً تحت الغترة والشماغ للاستخدام الطويل طوال اليوم.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 16,
    title: "عطر أمير العود",
    price: 250,
    category: "perfumes-and-incense",
    desc: "عطر شرقي دافئ يمزج بقوة بين نفحات الأخشاب والعود والمسك الأبيض ليعطيك حضوراً جذباً، مناسب جداً للفترات المسائية والأجواء الشتوية.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 17,
    title: "خاتم فضة عيار 925",
    price: 300,
    oldPrice: 400,
    category: "accessories",
    badge: { text: "خصم 25%", colorClass: "bg-red-600" },
    desc: "خاتم رجالي بصياغة ملكية فاخرة من الفضة الخالصة عيار 925، يتوسطه فص رئيسي مصقول بعناية تامة ليضفي لمسة من الفخامة والتميز على يدك.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 18,
    title: "محفظة بطاقات جلد طبيعي",
    price: 180,
    category: "accessories",
    desc: "محفظة بطاقات صغيرة الحجم وعملية للغاية مصنوعة من الجلد الطبيعي المرن، تحتوي على عدة فتحات منفصلة لحفظ البطاقات والعملات الورقية بأمان وسهولة سحب.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 19,
    title: "ساعة يد كلاسيكية ذهبية",
    price: 850,
    category: "accessories",
    desc: "ساعة يد رجالية بتصميم كلاسيكي فاخر مطلية باللون الذهبي اللامع ومقاومة للرذاذ، تجمع بين دقة الأداء والمظهر الأنيق لتناسب أوقات العمل والمناسبات واللقاءات.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 20,
    title: "حذاء شرقي مطرز يدويًا",
    price: 550,
    category: "shoes",
    desc: "حذاء شرقي فريد يجمع بين أصالة التصميم التراثي وراحة الاستخدام الحديثة، مطرز بنقوش يدوية دقيقة ومبطن بالكامل بجلد طبيعي مرن مانع للاحتكاك.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 21,
    title: "حقيبة يد جلدية للأعمال",
    price: 750,
    category: "accessories",
    desc: "حقيبة أعمال راقية مصنوعة من أجود أنواع الجلود، مصممة بجيوب داخلية متعددة ومنظمة تتسع للمستندات والكمبيوتر المحمول بشكل آمن ومظهر مهني جذاب.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 22,
    title: "مسك الختام (تولة)",
    price: 150,
    category: "perfumes-and-incense",
    desc: "ربع تولة من مسك الختام الفاخر بتركيبته العطرية النقية المركزة، تمزج بنعومة بين جمال المسك والورود والعنبر لرائحة مبهجة وثابتة تدوم طويلاً بالجسم والملابس.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 23,
    title: "حامل مصحف خشبي مزخرف",
    price: 110,
    category: "books-and-quran",
    desc: "مسند وحامل خشبي للمصحف الشريف قابل للطي والتخزين الذكي، مصنوع من خشب متين ومحفور بنقوش إسلامية مفرغة لتسهيل القراءة والترتيل براحة تامة.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 24,
    title: "مصحف التجويد الملون",
    price: 95,
    category: "books-and-quran",
    badge: { text: "الأكثر مبيعاً", colorClass: "bg-blue-600" },
    desc: "القرآن الكريم مع ترميز لوني مبتكر ومبسط يسهل على القارئ تطبيق أحكام التجويد بسلاسة أثناء التلاوة، مغلف بغلاف كرتوني مقوى لحمايته.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 25,
    title: "تفسير ابن كثير (4 مجلدات)",
    price: 320,
    category: "books-and-quran",
    desc: "طبعة محققة ومنقحة بالكامل لكتاب 'تفسير القرآن العظيم' للإمام الحافظ ابن كثير، تأتي في 4 مجلدات فاخرة، وتعد المرجع الشامل والأوضح لتفسير الآيات.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 26,
    title: "عطر ورد طائفي قطفة أولى",
    price: 900,
    oldPrice: 1100,
    category: "perfumes-and-incense",
    badge: { text: "خصم 18%", colorClass: "bg-red-600" },
    desc: "دهن الورد الطائفي الصافي والمستخلص بعناية فائقة من القطفة الأولى لبتلات الورد، برائحة زهرية فواحة غنية تعكس أصالة الترحاب العربي ومثالية للإهداء الفاخر.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 27,
    title: "مسبحة إلكترونية ذكية",
    price: 45,
    category: "accessories",
    desc: "عداد تسبيح رقمي ذكي بتصميم مريح لليد وخفيف الوزن، مزود بـ شاشة LED رقمية واضحة وخاصية التنبيه الاهتزازي لمتابعة الأذكار والورد اليومي بكل يسر.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 28,
    title: "صندوق هدايا فاخر للعود",
    price: 120,
    category: "gifts-and-packaging",
    desc: "علبة كرتونية مقواة ومبطنة بمخمل فاخر بلون داكن مخصصة لتنسيق هدايا العود والبخور والمستلزمات الرجالية، تمنح إهداءك طابعاً ملكياً مبهراً.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 29,
    title: "غترة بيضاء سويسرية",
    price: 190,
    category: "jalabiyas",
    desc: "غترة بيضاء ناصعة مصنوعة من خيوط القطن السويسري عالي الجودة المعالج، تمتاز بخفتها الاستثنائية وثبات أطرافها لتضمن لك هنداماً متناسقاً طوال اليوم.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
  {
    id: 30,
    title: "سديري رجالي بوجهين",
    price: 240,
    category: "jalabiyas",
    badge: { text: "جديد", colorClass: "bg-[#104028]" },
    desc: "سديري شتوي فاخر وعملي مصمم ليرتدى على الوجهين بألوان شتوية دافئة ومتناسقة، يوفر عطلاً ممتازاً وقصة رسمية تزيد من هيبة الثوب بالمجالس.",
    images: [
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png",
      "https://pub-e12827655f16445aa550b52e498084bc.r2.dev/1777241933645-Screenshot-2026-04-14-213329.png"
    ],
  },
];