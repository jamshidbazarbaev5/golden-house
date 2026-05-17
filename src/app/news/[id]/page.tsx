import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Share2, Clock, Send } from "lucide-react";
import { getAllNews, getNewsById } from "@/data/newsData";
import "../../styles/news.css";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const news = getNewsById(parseInt(id));
  
  if (!news) {
    return { title: "Yangilik topilmadi" };
  }

  return {
    title: `${news.title} — Yoshlar markazi`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      images: [news.image],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const news = getNewsById(parseInt(id));
  
  if (!news) {
    notFound();
  }

  const allNews = getAllNews();
  const relatedNews = allNews
    .filter((item) => item.id !== news.id && item.category === news.category)
    .slice(0, 3);
  const otherNews = allNews.filter((n) => n.id !== news.id).slice(0, 3);
  const sidebarNews = relatedNews.length > 0 ? relatedNews : otherNews;

  const shareUrl = `https://yoshlar-markazi.uz/news/${news.id}`;

  return (
    <article className="page">
      <header className="hero">
        <div className="hero-bg">
          <img src={news.image} alt={news.title} />
          <div className="hero-overlay" />
        </div>

        <div className="hero-inner">
          <div className="hero-meta-wrap">
            <span className="badge">{news.category}</span>
            <h1 className="hero-title">{news.title}</h1>
            <p className="hero-excerpt">{news.excerpt}</p>

            <div className="hero-meta">
              <span><Calendar size={16} /> {news.date}</span>
              {news.author && <span><User size={16} /> {news.author}</span>}
              <span><Clock size={16} /> {news.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="detail-body">
        <div className="detail-grid">
          <div className="article-card">
            <div className="prose">
              {news.content.split("\n\n").map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="share">
              <span className="share-label">
                <Share2 size={16} /> Ulashish:
              </span>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(news.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
              >
                <Send size={16} /> Telegram
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
              >
                <Share2 size={16} /> Facebook
              </a>
            </div>

            <Link href="/news" className="back-link">
              <ArrowLeft size={16} /> Yangiliklarga qaytish
            </Link>
          </div>

          <aside className="sidebar">
            <h2 className="sidebar-title">O'xshash yangiliklar</h2>
            <div className="sidebar-rule" />
            <div className="sidebar-list">
              {sidebarNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="side-card"
                >
                  <div className="side-img-wrap">
                    <img src={item.image} alt={item.title} className="side-img" />
                    <span className="side-badge">{item.category}</span>
                  </div>
                  <div className="side-body">
                    <div className="side-date">
                      <Calendar size={12} /> {item.date}
                    </div>
                    <h3 className="side-title">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <div className="bottom-space" />
      </div>
    </article>
  );
}
