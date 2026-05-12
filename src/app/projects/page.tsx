"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Building, ArrowRight, Search } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "INFINITY",
    type: "Клубный дом",
    location: "Яшнабадский район",
    price: "от 18 000 $/м²",
    status: "Сдан",
    statusBg: "#10b981",
    rooms: "2-5 комнат",
    area: "от 72 м²",
    floors: "25 этажей",
    completion: "2023",
    category: "premium",
    href: "/projects/infinity",
    bg: "linear-gradient(135deg, #0a1628, #1a3060)",
  },
  {
    id: 2,
    name: "O'Z MAHAL",
    type: "Жилой комплекс",
    location: "Юнусабадский район",
    price: "от 8 500 $/м²",
    status: "Строится",
    statusBg: "#3b82f6",
    rooms: "1-4 комнат",
    area: "от 45 м²",
    floors: "16 этажей",
    completion: "2025",
    category: "comfort",
    href: "/projects/oz-mahal",
    bg: "linear-gradient(135deg, #1a1020, #3a2060)",
  },
  {
    id: 3,
    name: "O'Z ZAMIN",
    type: "Жилой комплекс",
    location: "Сергелийский район",
    price: "от 7 200 $/м²",
    status: "Строится",
    statusBg: "#3b82f6",
    rooms: "1-3 комнат",
    area: "от 38 м²",
    floors: "12 этажей",
    completion: "2026",
    category: "economy",
    href: "/projects/oz-zamin",
    bg: "linear-gradient(135deg, #1a1828, #382850)",
  },
  {
    id: 4,
    name: "O'Z MAKON",
    type: "Бизнес-центр",
    location: "Мирзо-Улугбекский район",
    price: "от 9 000 $/м²",
    status: "Продажа",
    statusBg: "#f59e0b",
    rooms: "Офисы",
    area: "от 30 м²",
    floors: "20 этажей",
    completion: "2024",
    category: "commercial",
    href: "/projects/oz-makon",
    bg: "linear-gradient(135deg, #18200a, #304018)",
  },
  {
    id: 5,
    name: "ASSALOM BOG'LAR",
    type: "Жилой комплекс",
    location: "Чиланзарский район",
    price: "от 6 800 $/м²",
    status: "Строится",
    statusBg: "#3b82f6",
    rooms: "1-4 комнат",
    area: "от 40 м²",
    floors: "14 этажей",
    completion: "2026",
    category: "comfort",
    href: "/projects/assalom-boglar",
    bg: "linear-gradient(135deg, #0a2018, #1a4030)",
  },
  {
    id: 6,
    name: "ASSALOM JOMIY",
    type: "Жилой комплекс",
    location: "Яккасарайский район",
    price: "от 7 500 $/м²",
    status: "Сдан",
    statusBg: "#10b981",
    rooms: "1-3 комнат",
    area: "от 42 м²",
    floors: "16 этажей",
    completion: "2023",
    category: "comfort",
    href: "/projects/assalom-jomiy",
    bg: "linear-gradient(135deg, #201018, #401830)",
  },
  {
    id: 7,
    name: "ASSALOM SOHIL",
    type: "Жилой комплекс",
    location: "Мирабадский район",
    price: "от 8 000 $/м²",
    status: "Продажа",
    statusBg: "#f59e0b",
    rooms: "2-4 комнат",
    area: "от 55 м²",
    floors: "18 этажей",
    completion: "2025",
    category: "comfort",
    href: "/projects/assalom-sohil",
    bg: "linear-gradient(135deg, #0a1520, #1a3050)",
  },
  {
    id: 8,
    name: "ASSALOM HAVO",
    type: "Жилой комплекс",
    location: "Шайхантахурский район",
    price: "от 7 800 $/м²",
    status: "Строится",
    statusBg: "#3b82f6",
    rooms: "1-4 комнат",
    area: "от 36 м²",
    floors: "15 этажей",
    completion: "2026",
    category: "economy",
    href: "/projects/assalom-havo",
    bg: "linear-gradient(135deg, #101a20, #203848)",
  },
];

type Filter = "all" | "premium" | "comfort" | "economy" | "commercial";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchesFilter = filter === "all" || p.category === filter;
    const matchesSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__label">Наши проекты</span>
          <h1 className="page-hero__title">Жилые комплексы</h1>
          <p className="page-hero__desc">Выберите квартиру вашей мечты в одном из наших жилых комплексов. Мы предлагаем квартиры в различных ценовых категориях.</p>
        </div>
      </section>

      <section className="filter-bar">
        <div className="filter-bar__inner">
          <div className="filter-bar__tabs">
            {([
              { key: "all" as Filter, label: "Все проекты" },
              { key: "premium" as Filter, label: "Премиум" },
              { key: "comfort" as Filter, label: "Комфорт" },
              { key: "economy" as Filter, label: "Эконом" },
              { key: "commercial" as Filter, label: "Коммерция" },
            ]).map((tab) => (
              <button key={tab.key} onClick={() => setFilter(tab.key)} className={`tab ${filter === tab.key ? "tab--active" : "tab--inactive"}`}>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="filter-bar__search">
            <Search className="filter-bar__search-icon" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск по названию..." className="filter-bar__input" />
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section__inner">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--g400)", fontSize: 18 }}>Проекты не найдены</div>
          ) : (
            <div className="grid-3">
              {filtered.map((project) => (
                <Link key={project.id} href={project.href} className="pcard">
                  <div className="pcard__image" style={{ background: project.bg }}>
                    <div className="pcard__circle1" />
                    <div className="pcard__circle2" />
                    <div className="pcard__fade" />
                    <span className="pcard__status" style={{ background: project.statusBg }}>{project.status}</span>
                    <div className="pcard__name-block">
                      <div className="pcard__name">{project.name}</div>
                      <div className="pcard__type">{project.type}</div>
                    </div>
                  </div>
                  <div className="pcard__body">
                    <div className="pcard__location"><MapPin /> {project.location}</div>
                    <div className="pcard__grid">
                      <div><div className="pcard__stat-label">Стоимость</div><div className="pcard__stat-value pcard__stat-value--lg">{project.price}</div></div>
                      <div><div className="pcard__stat-label">Площадь</div><div className="pcard__stat-value">{project.area}</div></div>
                      <div><div className="pcard__stat-label">Этажность</div><div className="pcard__stat-value">{project.floors}</div></div>
                      <div><div className="pcard__stat-label">Сдача</div><div className="pcard__stat-value">{project.completion}</div></div>
                    </div>
                    <div className="pcard__footer">
                      <div className="pcard__rooms"><Building /> {project.rooms}</div>
                      <span className="pcard__more">Подробнее <ArrowRight /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
