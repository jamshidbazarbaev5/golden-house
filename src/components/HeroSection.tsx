"use client";

import { useState } from "react";
import Image from "next/image";

interface Point {
  x: number;
  y: number;
}

interface LegendItem {
  id: number;
  label: string;
  points: Point[]; // multiple pin locations on the map
}

const legend: LegendItem[] = [
  { id: 1,  label: "Маъмурий марказ",                      points: [{ x: 48.6, y: 50 }] },
  { id: 2,  label: "Мехмонхоналар",                        points: [{ x: 43, y: 50 }] },
  { id: 3,  label: "Бизнес марказ",                        points: [{ x: 40, y: 53.9 }] },
  { id: 4,  label: "Савдо маркази",                        points: [{ x: 45.3, y: 46.7 }] },
  { id: 5,  label: "Саноат ҳудуди",                        points: [{ x: 55.4, y: 43.4 }, { x: 52, y: 38.4 }] },
  { id: 6,  label: "Спорт мажмуаси",                       points: [{ x: 56.3, y: 54.6 }] },
  { id: 7,  label: "Сайлгоҳ",                              points: [{ x: 47.1, y: 55 }] },
  { id: 8,  label: "Соғлиқ сайлгоҳ",                      points: [{ x: 39.3, y: 48.5 }] },
  { id: 9,  label: "Энгин хавфсизлиги депоси",             points: [{x: 57.9, y: 57.2 }] },
  { id: 10, label: "Кўп тармоқли поликлиника",             points: [{ x: 40.4, y: 59.6}] },
  { id: 11, label: "Амфитеатр",                            points: [{x: 37.8, y: 57.8 }] },
  { id: 12, label: "Маданий марказ",                       points: [{x: 41.7, y: 57.6 }] },
  { id: 13, label: "Олий таълим муассасаси",               points: [{ x: 50.5, y: 61.3 }] },
  { id: 14, label: "Умумтаълим мактаби",                   points: [{x: 42.4, y: 62.9 }] },
  { id: 15, label: "Бошланғич мактаб ва мактабгача",       points: [{x: 48.2, y: 64.9 }] },
  { id: 16, label: "Савдо-кўнгилоқар бинолари",            points: [{ x: 34.1, y: 58 }, {x: 36.8, y: 64.3 }, {x: 36.8, y: 64.3}, {x: 42.3, y: 73 }, { x: 44.9, y: 69.5 }, {x: 33.9, y: 69.9 },{x: 68.8, y: 56.4},{x: 73.2, y: 63.5}] },
  { id: 17, label: "Экобозор",                             points: [{ x: 52.9, y: 72.1 }] },
  { id: 18, label: "Сомон ёйи дам олиш маскани",           points: [{ x: 64.7, y: 46.9 }] },
  { id: 19, label: "Саноат ҳудуди (турар-жой)",            points: [{x: 44.6, y: 31.9},{ x: 34.4, y: 25.1 }, { x: 25.6, y: 30.7 },{ x: 27.9, y: 19.1 }, { x: 44.2, y: 16.9 }] },
  { id: 20, label: "Подстанция (110 кВ)",                  points: [{ x: 59.1, y: 32 }] },
  { id: 21, label: "Ичимлик сув иншооти",                  points: [{ x: 58, y: 29.6 }] },
  { id: 22, label: "Кохонхона",                            points: [{x: 60.5, y: 34.6}] },
  { id: 23, label: "Оқавасув тозалаш иншооти",             points: [{x: 18.8, y: 11}] },
  { id: 24, label: "Мавжуд турар-жой бинолари",            points: [{x: 58.3, y: 74.9}] },
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
            width={6884}
            height={4961}
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="hero-map__image"
            priority
          />

          {/* Pins overlaid on the image */}
          {legend.flatMap((item) =>
            item.points.map((pt, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`hero-map__pin${activeId === item.id ? " hero-map__pin--active" : ""}`}
                style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <span className="hero-map__pin-ring" />
                <span className="hero-map__pin-number">{item.id}</span>
              </div>
            ))
          )}
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