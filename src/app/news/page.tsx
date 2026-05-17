import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";
import { getAllNews } from "@/data/newsData";
import "../styles/news.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoshlar markazi — Yangiliklar",
  description: "Yoshlar hayoti, ta'lim, madaniyat va tadbirkorlikdan eng so'nggi yangiliklar.",
};

export default function NewsPage() {
  const news = getAllNews();
  const [featured, ...rest] = news;

  return (
    <main className="page">
      <header className="index-header">
        <p className="eyebrow">Yoshlar markazi · Yangiliklar</p>
        <h1 className="index-title">
          Bugun nima <em>sodir bo'lmoqda</em>.
        </h1>
      </header>

      <section className="index-section">
        <Link
          href={`/news/${featured.id}`}
          className="featured"
        >
          <div className="featured-img-wrap">
            <img src={featured.image} alt={featured.title} className="featured-img" />
          </div>
          <div className="featured-body">
            <span className="category">{featured.category}</span>
            <h2 className="featured-title">{featured.title}</h2>
            <p className="featured-excerpt">{featured.excerpt}</p>
            <span className="read-more">
              Davomini o'qish <ArrowUpRight size={16} />
            </span>
          </div>
        </Link>

        <div className="grid">
          {rest.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="card"
            >
              <div className="card-img-wrap">
                <img src={item.image} alt={item.title} className="card-img" />
              </div>
              <div className="card-meta">
                <span className="category">{item.category}</span>
                <span>·</span>
                <span className="meta-date">
                  <Calendar size={12} /> {item.date}
                </span>
              </div>
              <h3 className="card-title">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
