export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  author?: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    title: "Yoshlar uchun yangi ijodiy markaz ochildi",
    category: "Madaniyat",
    date: "12-may, 2026",
    author: "Aziza Karimova",
    readTime: "5 daqiqa",
    excerpt:
      "Toshkent shahrida zamonaviy texnologiyalar bilan jihozlangan yoshlar markazi o'z eshiklarini ochdi.",
    content:
      "Toshkent shahrining markazida bugun zamonaviy yoshlar markazi rasman ish boshladi. Markaz tarkibida media-studiya, robotika laboratoriyasi, dizayn ustaxonasi va kutubxona joylashgan.\n\nLoyiha mualliflari ta'kidlashicha, markaz har kuni 500 dan ortiq yoshga xizmat ko'rsatishi mumkin. Bu yerda bepul kurslar, ustozlik dasturlari va startap inkubatori ham ishlaydi.\n\n\"Bizning maqsadimiz — yoshlarga o'z g'oyalarini ro'yobga chiqarish uchun zarur barcha sharoitlarni yaratish\", — deydi loyiha rahbari.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
  },
  {
    id: 2,
    title: "Xalqaro startap tanlovi g'oliblari aniqlandi",
    category: "Tadbirkorlik",
    date: "8-may, 2026",
    author: "Bekzod Olimov",
    readTime: "4 daqiqa",
    excerpt:
      "Yoshlar markazida o'tkazilgan startap tanlovida 12 ta loyiha sovrinli o'rinlarni egalladi.",
    content:
      "Uch kun davom etgan tanlovda 80 dan ortiq jamoa o'z loyihalarini taqdim etdi. Bosh sovrinni AI yordamida fermerlar uchun yechim ishlab chiqqan jamoa qo'lga kiritdi.\n\nG'oliblarga jami 200 ming dollar miqdorida grant va xalqaro akseleratorda qatnashish imkoniyati taqdim etildi.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80",
  },
  {
    id: 3,
    title: "Yozgi ko'ngillilik dasturi e'lon qilindi",
    category: "Ko'ngillilik",
    date: "5-may, 2026",
    author: "Dilnoza Saidova",
    readTime: "3 daqiqa",
    excerpt:
      "Iyun-avgust oylarida 14 viloyatda 3000 dan ortiq yosh ko'ngilli sifatida ishtirok etadi.",
    content:
      "Dastur doirasida yoshlar ekologik aksiyalar, ta'lim loyihalari va ijtimoiy yordam ishlarida qatnashadilar. Ishtirok etish uchun ariza topshirish 20-mayga qadar davom etadi.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80",
  },
  {
    id: 4,
    title: "Yoshlar uchun bepul ingliz tili kurslari",
    category: "Ta'lim",
    date: "1-may, 2026",
    author: "Sanjar Toirov",
    readTime: "2 daqiqa",
    excerpt:
      "16-25 yoshli yoshlar uchun yangi ta'lim mavsumi boshlandi.",
    content:
      "Kurslar A1 dan C1 darajagacha o'tkaziladi. Bitiruvchilarga xalqaro sertifikat imtihoniga tayyorgarlik bo'yicha qo'shimcha mashg'ulotlar tashkil etiladi.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
  },
];

export const getAllNews = () => news;
export const getNewsById = (id: number) => news.find((n) => n.id === id);
