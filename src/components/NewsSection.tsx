import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllNews } from "@/data/newsData";

const categoryColors: Record<string, string> = {
  Madaniyat: "rgba(16,185,129,0.75)",
  Tadbirkorlik: "rgba(200,168,85,0.85)",
  "Ko'ngillilik": "rgba(59,130,246,0.8)",
  "Ta'lim": "rgba(139,92,246,0.8)",
};

export default function NewsSection() {
  const newsItems = getAllNews();

  return (
    <section className="showcase">
      <div className="showcase__inner">
        <div className="showcase__header">
          <span className="showcase__label">So&apos;nggi yangiliklar</span>
          <h2 className="showcase__title showcase__title--center">
            Yangiliklar va tadbirlar
          </h2>
          <p className="showcase__sub">
            Eng muhim yangiliklar va rejalashtirilgan tadbirlar
          </p>
        </div>

        <div className="news-grid">
          {newsItems.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="news-card"
            >
              <div className="news-card__image">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="news-card__image-circles" />
                <span
                  className="news-card__category"
                  style={{
                    background:
                      categoryColors[item.category] || "rgba(0,0,0,0.55)",
                  }}
                >
                  {item.category}
                </span>
              </div>
              <div className="news-card__body">
                <div className="news-card__date">
                  <Calendar />
                  {item.date}
                </div>
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__excerpt">{item.excerpt}</p>
                <span className="news-card__more">
                  Batafsil <ArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/news" className="news-section__cta">
            Barcha yangiliklar <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
