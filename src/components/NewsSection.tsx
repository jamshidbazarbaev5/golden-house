"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  { id: 1, title: "Когда цветы — это только начало. Акция от Golden House", excerpt: "Специальное весеннее предложение для наших клиентов. Скидки до 15% на квартиры во всех жилых комплексах.", date: "15 марта 2025", category: "Акции", catBg: "#f43f5e", href: "/events/spring-promo", bg: "linear-gradient(135deg, #e11d48, #ec4899)" },
  { id: 2, title: "С заботой о тех, кто защищает. Акция ко Дню защитников Родины", excerpt: "Особые условия покупки для военнослужащих и их семей. Ипотека под 12% годовых.", date: "14 января 2025", category: "Акции", catBg: "#10b981", href: "/events/defenders-day", bg: "linear-gradient(135deg, #059669, #14b8a6)" },
  { id: 3, title: "GOLDEN FRIDAY с Golden House — момент, когда пора покупать", excerpt: "Только в эту пятницу! Беспрецедентные скидки на все типы квартир. Успейте забронировать.", date: "29 ноября 2024", category: "Акции", catBg: "#c8a855", href: "/events/golden-friday", bg: "linear-gradient(135deg, #d97706, #ea580c)" },
  { id: 4, title: "Передача ключей дольщикам ЖК O'z Mahal", excerpt: "Во флагманском проекте Golden House состоялась торжественная передача ключей новым жильцам.", date: "20 октября 2024", category: "Новости", catBg: "#3b82f6", href: "/news/oz-mahal-keys", bg: "linear-gradient(135deg, #2563eb, #4f46e5)" },
  { id: 5, title: "11.11 — Фестиваль недвижимости Golden House", excerpt: "Грандиозная распродажа недвижимости. Скидки, подарки и специальные условия ипотеки.", date: "11 ноября 2024", category: "Акции", catBg: "#a855f7", href: "/events/11-11-festival", bg: "linear-gradient(135deg, #9333ea, #7c3aed)" },
  { id: 6, title: "Осенняя ярмарка недвижимости Golden House", excerpt: "Махаллада дув-дув гап! Приглашаем на осеннюю ярмарку с выгодными предложениями.", date: "5 октября 2024", category: "Новости", catBg: "#0ea5e9", href: "/news/autumn-fair", bg: "linear-gradient(135deg, #0284c7, #06b6d4)" },
];

type Tab = "all" | "events" | "news";

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const filtered = activeTab === "all" ? newsItems : activeTab === "events" ? newsItems.filter((n) => n.category === "Акции") : newsItems.filter((n) => n.category === "Новости");

  return (
    <section className="section section--white">
      <div className="section__inner">
        <div className="section__header section__header--center">
          <span className="section__label">Новости компании</span>
          <h2 className="section__title">Новости и акции</h2>
          <p className="section__subtitle section__subtitle--center">Будьте в курсе последних событий и специальных предложений</p>
        </div>

        <div className="tabs">
          {([{ key: "all", label: "Все" }, { key: "events", label: "Акции" }, { key: "news", label: "Новости" }] as { key: Tab; label: string }[]).map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`tab ${activeTab === tab.key ? "tab--active" : "tab--inactive"}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filtered.map((item) => (
            <Link key={item.id} href={item.href} className="news-card">
              <div className="news-card__image" style={{ background: item.bg }}>
                <div className="news-card__image-circles" />
                <span className="news-card__category" style={{ background: item.catBg }}>{item.category}</span>
              </div>
              <div className="news-card__body">
                <div className="news-card__date"><Calendar /> {item.date}</div>
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__excerpt">{item.excerpt}</p>
                <div className="news-card__more">Читать далее <ArrowRight /></div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/news" className="btn-view-all btn-view-all--outline">
            Смотреть все новости <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
