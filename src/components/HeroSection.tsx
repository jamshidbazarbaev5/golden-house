"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { X, MapPin, Layers, CheckCircle2 } from "lucide-react";

interface Point {
  x: number;
  y: number;
}

interface LegendItem {
  id: number;
  label: string;
  stage: string;
  points: Point[];
}

const stageColors: Record<string, string> = {
  "Лойиҳалаштириш":     "#8b5cf6",
  "Ер ишлари":           "#f59e0b",
  "Пойдевор":            "#3b82f6",
  "Бетон ишлари":        "#06b6d4",
  "Монтаж ишлари":       "#f97316",
  "Қопламa ишлари":      "#ec4899",
  "Кўкаламзорлаштириш":  "#10b981",
  "Битказилган":         "#22c55e",
};

const stageOrder = [
  "Лойиҳалаштириш",
  "Ер ишлари",
  "Пойдевор",
  "Бетон ишлари",
  "Монтаж ишлари",
  "Қопламa ишлари",
  "Кўкаламзорлаштириш",
  "Битказилган",
];

const stageProgress: Record<string, number> = {
  "Лойиҳалаштириш":     10,
  "Ер ишлари":           25,
  "Пойдевор":            40,
  "Бетон ишлари":        55,
  "Монтаж ишлари":       70,
  "Қопламa ишлари":      85,
  "Кўкаламзорлаштириш":  90,
  "Битказилган":         100,
};

const legend: LegendItem[] = [
  { id: 1,  label: "Маъмурий марказ",                      stage: "Бетон ишлари",          points: [{ x: 48.6, y: 50 }] },
  { id: 2,  label: "Мехмонхоналар",                        stage: "Пойдевор",              points: [{ x: 43, y: 50 }] },
  { id: 3,  label: "Бизнес марказ",                        stage: "Монтаж ишлари",         points: [{ x: 40, y: 53.9 }] },
  { id: 4,  label: "Савдо маркази",                        stage: "Қопламa ишлари",        points: [{ x: 45.3, y: 46.7 }] },
  { id: 5,  label: "Саноат ҳудуди",                        stage: "Пойдевор",              points: [{ x: 55.4, y: 43.4 }, { x: 52, y: 38.4 }] },
  { id: 6,  label: "Спорт мажмуаси",                       stage: "Лойиҳалаштириш",       points: [{ x: 56.3, y: 54.6 }] },
  { id: 7,  label: "Сайилгоҳ",                              stage: "Кўкаламзорлаштириш",   points: [{ x: 47.1, y: 55 }] },
  { id: 8,  label: "Соҳил бўйи сайилгоҳ",                      stage: "Ер ишлари",             points: [{ x: 39.3, y: 48.5 }] },
  { id: 9,  label: "Ёнғин хавфсизлиги депоси",             stage: "Бетон ишлари",          points: [{x: 57.9, y: 57.2 }] },
  { id: 10, label: "Кўп тармоқли поликлиника",             stage: "Монтаж ишлари",         points: [{ x: 40.4, y: 59.6}] },
  { id: 11, label: "Амфитеатр",                            stage: "Пойдевор",              points: [{x: 37.8, y: 57.8 }] },
  { id: 12, label: "Маданий марказ",                       stage: "Қопламa ишлари",        points: [{x: 41.7, y: 57.6 }] },
  { id: 13, label: "Олий таълим муассасаси",               stage: "Бетон ишлари",          points: [{ x: 50.5, y: 61.3 }] },
  { id: 14, label: "Умумтаълим мактаби",                   stage: "Монтаж ишлари",         points: [{x: 42.4, y: 62.9 }] },
  { id: 15, label: "Бошланғич мактаб ва мактабгача таълим ташкилоти",       stage: "Пойдевор",  points: [{x: 48.2, y: 64.9 }] },
  { id: 16, label: "Савдо-кўнгилочар бинолари",            stage: "Ер ишлари",             points: [{ x: 34.1, y: 58 }, {x: 36.8, y: 64.3 }, {x: 36.8, y: 64.3}, {x: 42.3, y: 73 }, { x: 44.9, y: 69.5 }, {x: 33.9, y: 69.9 },{x: 68.8, y: 56.4},{x: 73.2, y: 63.5}] },
  { id: 17, label: "Экобозор",                             stage: "Лойиҳалаштириш",       points: [{ x: 52.9, y: 72.1 }] },
  { id: 18, label: "Соҳил бўйи дам олиш маскани",           stage: "Ер ишлари",             points: [{ x: 64.7, y: 46.9 }] },
  { id: 19, label: "Саноат ҳудуди",            stage: "Бетон ишлари",          points: [{x: 44.6, y: 31.9},{ x: 34.4, y: 25.1 }, { x: 25.6, y: 30.7 },{ x: 27.9, y: 19.1 }, { x: 44.2, y: 16.9 }] },
  { id: 20, label: "Подстанция (110 кВ)",                  stage: "Монтаж ишлари",         points: [{ x: 59.1, y: 32 }] },
  { id: 21, label: "Ичимлик сув иншооти",                  stage: "Қопламa ишлари",        points: [{ x: 58, y: 29.6 }] },
  { id: 22, label: "Қозонхона",                            stage: "Пойдевор",              points: [{x: 60.5, y: 34.6}] },
  { id: 23, label: "Оқовасув тозалаш иншооти",             stage: "Ер ишлари",             points: [{x: 18.8, y: 11}] },
  { id: 24, label: "Мавжуд турар-жой бинолари",            stage: "Битказилган",           points: [{x: 58.3, y: 74.9}] },
];

export default function HeroSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [stageFilter, setStageFilter] = useState<string | null>(null);

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    legend.forEach((item) => {
      counts[item.stage] = (counts[item.stage] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredLegend = stageFilter
    ? legend.filter((item) => item.stage === stageFilter)
    : legend;

  const selectedItem = selectedId ? legend.find((item) => item.id === selectedId) : null;
  const highlightId = selectedId ?? activeId;

  const handlePinClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const completedStages = (stage: string) => {
    const idx = stageOrder.indexOf(stage);
    return stageOrder.slice(0, idx + 1);
  };

  return (
    <section className="hero-map">
      {/* Stage summary bar */}
      <div className="hero-map__summary">
       
      </div>

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
            item.points.map((pt, idx) => {
              const isVisible = !stageFilter || item.stage === stageFilter;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className={`hero-map__pin${highlightId === item.id ? " hero-map__pin--active" : ""}${!isVisible ? " hero-map__pin--dimmed" : ""}`}
                  style={{
                    left: `${pt.x}%`,
                    top: `${pt.y}%`,
                    "--pin-color": stageColors[item.stage] || "#e53935",
                  } as React.CSSProperties}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => handlePinClick(item.id)}
                >
                  <span className="hero-map__pin-ring" />
                  <span className="hero-map__pin-number">{item.id}</span>
                  <span className="hero-map__pin-tooltip">
                    {item.label}
                    <br />
                    <small style={{ opacity: 0.8 }}>{item.stage}</small>
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Side legend */}
        <aside className="hero-map__legend">
          <div className="hero-map__legend-header">
            <h2 className="hero-map__legend-title">Бино ва иншоотлар қайдномаси</h2>
            <p className="hero-map__legend-sub">
              {stageFilter
                ? `${stageFilter} — ${filteredLegend.length} объект`
                : `Жами ${legend.length} объект · Босқични танланг`}
            </p>
          </div>
          <ul className="hero-map__legend-list">
            {filteredLegend.map((item) => (
              <li
                key={item.id}
                className={`hero-map__legend-item${highlightId === item.id ? " hero-map__legend-item--active" : ""}`}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => handlePinClick(item.id)}
              >
                <span
                  className="hero-map__legend-num"
                  style={{ background: stageColors[item.stage] }}
                >
                  {item.id}
                </span>
                <span className="hero-map__legend-label">{item.label}</span>
                <span
                  className="hero-map__legend-stage"
                  style={{ background: stageColors[item.stage] }}
                >
                  {item.stage}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Detail panel (shown on click) */}
      {selectedItem && (
        <div className="hero-map__detail-overlay" onClick={() => setSelectedId(null)}>
          <div className="hero-map__detail" onClick={(e) => e.stopPropagation()}>
            <button className="hero-map__detail-close" onClick={() => setSelectedId(null)}>
              <X style={{ width: 20, height: 20 }} />
            </button>

            <div className="hero-map__detail-header">
              <span
                className="hero-map__detail-badge"
                style={{ background: stageColors[selectedItem.stage] }}
              >
                {selectedItem.stage}
              </span>
              <div className="hero-map__detail-id">#{selectedItem.id}</div>
            </div>

            <h3 className="hero-map__detail-title">{selectedItem.label}</h3>

            <div className="hero-map__detail-meta">
              <div className="hero-map__detail-meta-item">
                <MapPin style={{ width: 14, height: 14 }} />
                {selectedItem.points.length} жойлашув{selectedItem.points.length > 1 ? "лар" : ""}
              </div>
              <div className="hero-map__detail-meta-item">
                <CheckCircle2 style={{ width: 14, height: 14 }} />
                {stageProgress[selectedItem.stage]}% бажарилди
              </div>
            </div>

            {/* Progress bar */}
            <div className="hero-map__detail-progress">
              <div className="hero-map__detail-progress-label">Қурилиш жараёни</div>
              <div className="hero-map__detail-progress-bar">
                <div
                  className="hero-map__detail-progress-fill"
                  style={{
                    width: `${stageProgress[selectedItem.stage]}%`,
                    background: stageColors[selectedItem.stage],
                  }}
                />
              </div>
              <div className="hero-map__detail-progress-pct">
                {stageProgress[selectedItem.stage]}%
              </div>
            </div>

            {/* Stages checklist */}
            <div className="hero-map__detail-stages">
              <div className="hero-map__detail-stages-title">Босқичлар</div>
              {stageOrder.map((stage) => {
                const done = completedStages(selectedItem.stage).includes(stage);
                const isCurrent = stage === selectedItem.stage;
                return (
                  <div
                    key={stage}
                    className={`hero-map__detail-stage-row${done ? " hero-map__detail-stage-row--done" : ""}${isCurrent ? " hero-map__detail-stage-row--current" : ""}`}
                  >
                    <span
                      className="hero-map__detail-stage-dot"
                      style={{
                        background: done ? stageColors[stage] : "#d1d5db",
                        boxShadow: isCurrent ? `0 0 0 3px ${stageColors[stage]}40` : "none",
                      }}
                    />
                    <span className="hero-map__detail-stage-name">{stage}</span>
                    {done && (
                      <CheckCircle2
                        style={{
                          width: 14,
                          height: 14,
                          color: stageColors[stage],
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}