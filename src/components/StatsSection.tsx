"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: 15, suffix: "+", label: "Жилых комплексов", description: "Проектов реализовано" },
  { icon: Users, value: 10000, suffix: "+", label: "Довольных семей", description: "Уже живут в наших домах" },
  { icon: Award, value: 12, suffix: " лет", label: "На рынке", description: "Опыта строительства" },
  { icon: TrendingUp, value: 100, suffix: "%", label: "Сдача в срок", description: "Гарантируем качество" },
];

function useCountUp(end: number, duration: number, trigger: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setValue(end); clearInterval(timer); } else { setValue(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, end, duration]);
  return value;
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats">
      <div className="stats__line stats__line--top" />
      <div className="stats__line stats__line--bottom" />
      <div className="stats__grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const count = useCountUp(stat.value, 2000, visible);
          return (
            <div
              key={index}
              className="stats__card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(20px)",
                transition: `all 0.6s ease ${index * 0.15}s`,
              }}
            >
              <div className="stats__card-icon"><Icon /></div>
              <div className="stats__card-value">
                {count.toLocaleString()}<span>{stat.suffix}</span>
              </div>
              <div className="stats__card-label">{stat.label}</div>
              <div className="stats__card-desc">{stat.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
