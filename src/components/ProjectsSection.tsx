"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Building, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { id: 1, name: "INFINITY", type: "Клубный дом", location: "Яшнабадский район", price: "от 18 000 $/м²", status: "Сдан", statusBg: "#10b981", rooms: "2-5 комнат", area: "от 72 м²", href: "/projects/infinity", bg: "linear-gradient(135deg, #0a1628, #1a3060)" },
  { id: 2, name: "O'Z MAHAL", type: "Жилой комплекс", location: "Юнусабадский район", price: "от 8 500 $/м²", status: "Строится", statusBg: "#3b82f6", rooms: "1-4 комнат", area: "от 45 м²", href: "/projects/oz-mahal", bg: "linear-gradient(135deg, #1a1020, #3a2060)" },
  { id: 3, name: "O'Z ZAMIN", type: "Жилой комплекс", location: "Сергелийский район", price: "от 7 200 $/м²", status: "Строится", statusBg: "#3b82f6", rooms: "1-3 комнат", area: "от 38 м²", href: "/projects/oz-zamin", bg: "linear-gradient(135deg, #1a1828, #382850)" },
  { id: 4, name: "O'Z MAKON", type: "Бизнес-центр", location: "Мирзо-Улугбекский район", price: "от 9 000 $/м²", status: "Продажа", statusBg: "#c8a855", rooms: "Офисы", area: "от 30 м²", href: "/projects/oz-makon", bg: "linear-gradient(135deg, #18200a, #304018)" },
  { id: 5, name: "ASSALOM BOG'LAR", type: "Жилой комплекс", location: "Чиланзарский район", price: "от 6 800 $/м²", status: "Строится", statusBg: "#3b82f6", rooms: "1-4 комнат", area: "от 40 м²", href: "/projects/assalom-boglar", bg: "linear-gradient(135deg, #0a2018, #1a4030)" },
  { id: 6, name: "ASSALOM JOMIY", type: "Жилой комплекс", location: "Яккасарайский район", price: "от 7 500 $/м²", status: "Сдан", statusBg: "#10b981", rooms: "1-3 комнат", area: "от 42 м²", href: "/projects/assalom-jomiy", bg: "linear-gradient(135deg, #201018, #401830)" },
  { id: 7, name: "ASSALOM SOHIL", type: "Жилой комплекс", location: "Мирабадский район", price: "от 8 000 $/м²", status: "Продажа", statusBg: "#c8a855", rooms: "2-4 комнат", area: "от 55 м²", href: "/projects/assalom-sohil", bg: "linear-gradient(135deg, #0a1520, #1a3050)" },
  { id: 8, name: "ASSALOM HAVO", type: "Жилой комплекс", location: "Шайхантахурский район", price: "от 7 800 $/м²", status: "Строится", statusBg: "#3b82f6", rooms: "1-4 комнат", area: "от 36 м²", href: "/projects/assalom-havo", bg: "linear-gradient(135deg, #101a20, #203848)" },
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
  };

  return (
    <section className="section section--gray">
      <div className="section__inner">
        <div className="section__header section__header--between">
          <div>
            <span className="section__label">Наши проекты</span>
            <h2 className="section__title">Жилые комплексы</h2>
            <p className="section__subtitle">Выберите квартиру вашей мечты в одном из наших жилых комплексов</p>
          </div>
          <div className="scroll-arrows">
            <button onClick={() => scroll("left")} disabled={!canScrollLeft} className="scroll-arrow">
              <ChevronLeft style={{ width: 20, height: 20 }} />
            </button>
            <button onClick={() => scroll("right")} disabled={!canScrollRight} className="scroll-arrow">
              <ChevronRight style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="projects__scroll">
          {projects.map((p) => (
            <Link key={p.id} href={p.href} className="project-card">
              <div className="project-card__image" style={{ background: p.bg }}>
                <div className="project-card__circle1" />
                <div className="project-card__circle2" />
                <div className="project-card__fade" />
                <span className="project-card__badge" style={{ background: p.statusBg }}>{p.status}</span>
                <div className="project-card__name">
                  <h3>{p.name}</h3>
                  <p>{p.type}</p>
                </div>
              </div>
              <div className="project-card__body">
                <div className="project-card__location">
                  <MapPin /> {p.location}
                </div>
                <div className="project-card__info">
                  <div>
                    <div className="project-card__info-label">Стоимость</div>
                    <div className="project-card__info-value">{p.price}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="project-card__info-label">Площадь</div>
                    <div className="project-card__info-value project-card__info-value--sm">{p.area}</div>
                  </div>
                </div>
                <div className="project-card__footer">
                  <div className="project-card__rooms"><Building /> {p.rooms}</div>
                  <span className="project-card__more">Подробнее <ArrowRight /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/projects" className="btn-view-all btn-view-all--navy">
            Смотреть все проекты <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
