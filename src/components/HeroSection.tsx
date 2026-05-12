"use client";

import { useState } from "react";
import Image from "next/image";

interface LegendItem {
  id: number;
  label: string;
  x?: number; // optional pin position (% from left of image)
  y?: number; // optional pin position (% from top of image)
}

// Numbered facilities from the master plan legend
// Add x/y to show a pin marker on the map for any item.
// Items without x/y will appear only in the side list.
const legend: LegendItem[] = [
  { id: 1, label: "Маҳаллий клиника", x: 34, y: 44 },
  { id: 2, label: "Ихтисослашган мактаб", x: 40, y: 40 },
  { id: 3, label: "Мактаб", x: 37, y: 50 },
  { id: 4, label: "Садиқ", x: 43, y: 47 },
  { id: 5, label: "Савдо саройи", x: 47, y: 42 },
  { id: 6, label: "Савдо маркази", x: 52, y: 44 },
  { id: 7, label: "Санатория", x: 49, y: 56 },
  { id: 8, label: "Спорт зали ва стадион", x: 39, y: 60 },
  { id: 9, label: "Рекреация зонаси", x: 44, y: 63 },
  { id: 10, label: "Кўп тармоқли поликлиника", x: 55, y: 53 },
  { id: 11, label: "Амфитеатр", x: 50, y: 66 },
  { id: 12, label: "Маданий маркази", x: 53, y: 70 },
  { id: 13, label: "Автотурар жой", x: 23, y: 22 },
  { id: 14, label: "Умумий ресторан", x: 45, y: 52 },
  { id: 15, label: "Парк ва спорт майдони", x: 27, y: 15 },
  { id: 16, label: "Ободонлаштириш", x: 33, y: 13 },
  { id: 17, label: "Эковоқзал", x: 58, y: 46 },
  { id: 18, label: "Сув кўл", x: 39, y: 24 },
  { id: 19, label: "Санат саройи", x: 19, y: 30 },
  { id: 20, label: "Подстанция", x: 60, y: 32 },
  { id: 21, label: "Инженерик майдончаси", x: 56, y: 62 },
  { id: 22, label: "Кранжозал", x: 62, y: 52 },
  { id: 23, label: "Ўқув маркази", x: 30, y: 36 },
  { id: 24, label: "Маҳалла маркази", x: 48, y: 72 },
];

export default function HeroSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="hero-map">
      <div className="hero-map__layout">
        {/* Map */}
        <div className="hero-map__image-wrap">
          <Image
            src="/jaslar.jpg"
            alt="Ёшлар ижтимоий-иқтисодий маркази — Генеральный план"
            width={2000}
            height={1414}
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="hero-map__image"
            priority
          />

          {/* Pins overlaid on the image */}
          {legend
            .filter((item) => item.x !== undefined && item.y !== undefined)
            .map((item) => (
              <div
                key={item.id}
                className={`hero-map__pin${activeId === item.id ? " hero-map__pin--active" : ""}`}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <span className="hero-map__pin-ring" />
                <span className="hero-map__pin-number">{item.id}</span>
              </div>
            ))}
        </div>

        {/* Side legend */}
        <aside className="hero-map__legend">
          <div className="hero-map__legend-header">
            <h2 className="hero-map__legend-title">Бино ва иншоотлар</h2>
            <p className="hero-map__legend-sub">Наведите на пункт, чтобы увидеть его на карте</p>
          </div>
          <ul className="hero-map__legend-list">
            {legend.map((item) => (
              <li
                key={item.id}
                className={`hero-map__legend-item${activeId === item.id ? " hero-map__legend-item--active" : ""}`}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <span className="hero-map__legend-num">{item.id}</span>
                <span className="hero-map__legend-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
