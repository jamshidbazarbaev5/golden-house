import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  { id: 1, title: "Передача ключей дольщикам ЖК O'z Mahal", excerpt: "Во флагманском проекте Golden House состоялась торжественная передача ключей новым жильцам комплекса O'z Mahal.", date: "20 октября 2024", bg: "linear-gradient(135deg, #2563eb, #4f46e5)" },
  { id: 2, title: "Осенняя ярмарка недвижимости Golden House", excerpt: "Махаллада дув-дув гап! Приглашаем на осеннюю ярмарку с самыми выгодными предложениями на рынке недвижимости.", date: "5 октября 2024", bg: "linear-gradient(135deg, #0284c7, #06b6d4)" },
  { id: 3, title: "Golden House открывает новый офис продаж", excerpt: "Теперь нас удобно посетить в бизнес-центре Infinity. Новый офис оборудован по последнему слову техники.", date: "15 сентября 2024", bg: "linear-gradient(135deg, #059669, #0d9488)" },
  { id: 4, title: "Старт продаж в ЖК Assalom Havo", excerpt: "Начинаются продажи квартир в новом жилом комплексе Assalom Havo. Специальные условия для первых покупателей.", date: "1 сентября 2024", bg: "linear-gradient(135deg, #7c3aed, #8b5cf6)" },
  { id: 5, title: "Golden House на выставке недвижимости 2024", excerpt: "Компания Golden House приняла участие в крупнейшей выставке недвижимости Узбекистана. Итоги и результаты.", date: "20 августа 2024", bg: "linear-gradient(135deg, #d97706, #ea580c)" },
  { id: 6, title: "Обновление инфраструктуры ЖК Assalom Jomiy", excerpt: "Завершены работы по благоустройству территории и обновлению инфраструктуры жилого комплекса.", date: "10 августа 2024", bg: "linear-gradient(135deg, #e11d48, #ec4899)" },
];

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__label">Новости</span>
          <h1 className="page-hero__title">Новости компании</h1>
          <p className="page-hero__desc">Последние события и обновления из мира Golden House</p>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section__inner">
          <div className="grid-3">
            {newsItems.map((item) => (
              <Link key={item.id} href={`/news/${item.id}`} className="page-news-card">
                <div className="page-news-card__image" style={{ background: item.bg }}>
                  <div className="page-news-card__image-circle1" />
                  <div className="page-news-card__image-circle2" />
                  <span className="page-news-card__badge">Новости</span>
                </div>
                <div className="page-news-card__body">
                  <div className="page-news-card__date"><Calendar /> {item.date}</div>
                  <h3 className="page-news-card__title">{item.title}</h3>
                  <p className="page-news-card__excerpt">{item.excerpt}</p>
                  <div className="page-news-card__more">Читать далее <ArrowRight /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
