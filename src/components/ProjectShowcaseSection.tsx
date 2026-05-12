import Image from "next/image";
import { Home, Factory, Leaf, MapPin, Building2, TreePine, Car, Briefcase } from "lucide-react";

const pillars = [
  {
    icon: Home,
    title: "Обитаемый город",
    subtitle: "Комфортное проживание для всех",
    description: "Комфорт для любых возрастов. Гармония с природой.",
    color: "#0ea5e9",
  },
  {
    icon: Factory,
    title: "Промышленный круг",
    subtitle: "Движущая сила промышленности",
    description: "Интеграция отрасли. Индустриальный инкубатор.",
    color: "#c8a855",
  },
  {
    icon: Leaf,
    title: "Экологический источник",
    subtitle: "Эко-город",
    description: "Экологическая ось. Экологический коридор.",
    color: "#10b981",
  },
];

const landUse = [
  { label: "Жилая и сопут. застройка", value: 43.6, percent: 29.26, color: "#10b981", icon: Home },
  { label: "Индустриальная зона", value: 42.4, percent: 28.46, color: "#c8a855", icon: Factory },
  { label: "Озеленение", value: 20.4, percent: 13.69, color: "#84cc16", icon: TreePine },
  { label: "Дорожные объекты", value: 21.7, percent: 14.56, color: "#6b7280", icon: Car },
  { label: "IT-Кампус", value: 15.3, percent: 10.27, color: "#8b5cf6", icon: Building2 },
  { label: "Коммерция", value: 3.2, percent: 2.15, color: "#f59e0b", icon: Briefcase },
  { label: "Сервисы", value: 2.4, percent: 1.61, color: "#06b6d4", icon: MapPin },
];

const zones = [
  {
    image: "/slide-images/img-140.jpg",
    title: "Центральная зона обслуживания",
    description:
      "Находится в центре района, предоставляет жителям нового города общественные услуги и пространство для общения и совместного использования, создавая образ ворот нового города.",
  },
  {
    image: "/slide-images/img-119.jpg",
    title: "IT-Кампус и стадион",
    description:
      "Среда и пространство совместно создают привлекательное место для научных исследований и сосредоточения молодёжи. Современная спортивная инфраструктура для активной жизни.",
  },
  {
    image: "/slide-images/img-178.jpg",
    title: "Жилой район будущего",
    description:
      "Расположен рядом с природным водоёмом, обладает превосходными ландшафтными ресурсами, экология благоприятна для проживания. Образовательные и общественные зоны рядом обеспечивают удобство в повседневной жизни.",
  },
  {
    image: "/slide-images/img-105.jpg",
    title: "Городская среда",
    description:
      "Структура пространственного ландшафта с проницаемостью голубых и зелёных зон, характеризующаяся большой открытостью и небольшой плотностью, объединяющая городские функции и природную экосистему.",
  },
];

export default function ProjectShowcaseSection() {
  return (
    <>
      {/* About */}
      <section className="showcase">
        <div className="showcase__inner">
          <div className="showcase__intro">
            <span className="showcase__label">О проекте</span>
            <h2 className="showcase__title">
              Молодёжный социально-экономический центр
            </h2>
            <p className="showcase__location">
              <MapPin style={{ width: 16, height: 16 }} />
              Ходжалинский район, г. Нукус, Республика Узбекистан
            </p>
            <p className="showcase__desc">
              Проект городского дизайна площадью <strong>149 гектаров</strong>,
              объединяющий жилые кварталы, инновационный IT-кампус, промышленную
              зону и обширные зелёные пространства. Создаётся современный город
              для молодёжи с акцентом на экологию, удобство жизни и
              экономическое развитие региона.
            </p>
          </div>

          <div className="showcase__hero-image">
            <Image
              src="/slide-images/img-084.jpg"
              alt="Общий вид с высоты"
              fill
              sizes="(max-width: 1024px) 100vw, 1280px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Vision pillars */}
      <section className="showcase showcase--alt">
        <div className="showcase__inner">
          <div className="showcase__header">
            <span className="showcase__label">Концепция</span>
            <h2 className="showcase__title showcase__title--center">
              Три основы проекта
            </h2>
            <p className="showcase__sub">Видение и стратегия развития</p>
          </div>

          <div className="pillars">
            {pillars.map((p) => (
              <div key={p.title} className="pillar">
                <div className="pillar__icon" style={{ background: p.color }}>
                  <p.icon style={{ width: 28, height: 28, color: "#fff" }} />
                </div>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__subtitle">{p.subtitle}</p>
                <p className="pillar__desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Land use stats */}
      <section className="showcase">
        <div className="showcase__inner">
          <div className="showcase__header">
            <span className="showcase__label">Городской дизайн</span>
            <h2 className="showcase__title showcase__title--center">
              Общий план и показатели
            </h2>
            <p className="showcase__sub">149.0 га • 24 функциональные зоны</p>
          </div>

          <div className="land-use">
            <div className="land-use__map">
              <Image
                src="/slide-images/img-074.jpg"
                alt="Общий план"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="land-use__list">
              {landUse.map((item) => (
                <div key={item.label} className="land-use__item">
                  <div
                    className="land-use__icon"
                    style={{ background: `${item.color}20`, color: item.color }}
                  >
                    <item.icon style={{ width: 20, height: 20 }} />
                  </div>
                  <div className="land-use__info">
                    <div className="land-use__label">{item.label}</div>
                    <div className="land-use__bar">
                      <div
                        className="land-use__bar-fill"
                        style={{
                          width: `${item.percent}%`,
                          background: item.color,
                        }}
                      />
                    </div>
                  </div>
                  <div className="land-use__values">
                    <div className="land-use__ha">{item.value} га</div>
                    <div className="land-use__pct">{item.percent}%</div>
                  </div>
                </div>
              ))}
              <div className="land-use__total">
                <span>Итого</span>
                <strong>149.0 га • 100%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day / Night */}
      <section className="showcase showcase--dark">
        <div className="showcase__inner">
          <div className="showcase__header">
            <span className="showcase__label" style={{ color: "#c8a855" }}>
              Визуализация
            </span>
            <h2 className="showcase__title showcase__title--center" style={{ color: "#fff" }}>
              День и ночь
            </h2>
            <p className="showcase__sub" style={{ color: "rgba(255,255,255,0.6)" }}>
              Общий вид с высоты в разное время суток
            </p>
          </div>

          <div className="day-night">
            <div className="day-night__card">
              <div className="day-night__image">
                <Image
                  src="/slide-images/img-077.jpg"
                  alt="Дневной вид"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="day-night__caption">Дневной вид</div>
            </div>
            <div className="day-night__card">
              <div className="day-night__image">
                <Image
                  src="/slide-images/img-091.jpg"
                  alt="Ночной вид"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="day-night__caption">Ночной вид</div>
            </div>
          </div>
        </div>
      </section>

      {/* Functional zones */}
      <section className="showcase">
        <div className="showcase__inner">
          <div className="showcase__header">
            <span className="showcase__label">Зоны проекта</span>
            <h2 className="showcase__title showcase__title--center">
              Ключевые функциональные зоны
            </h2>
            <p className="showcase__sub">Распределение пространства и назначение</p>
          </div>

          <div className="zones">
            {zones.map((zone, i) => (
              <div key={zone.title} className={`zone${i % 2 ? " zone--reverse" : ""}`}>
                <div className="zone__image">
                  <Image
                    src={zone.image}
                    alt={zone.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="zone__content">
                  <div className="zone__num">0{i + 1}</div>
                  <h3 className="zone__title">{zone.title}</h3>
                  <p className="zone__desc">{zone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Street view */}
      <section className="showcase showcase--alt">
        <div className="showcase__inner">
          <div className="showcase__header">
            <span className="showcase__label">Атмосфера</span>
            <h2 className="showcase__title showcase__title--center">
              Жизнь в новом городе
            </h2>
            <p className="showcase__sub">Вид с уровня улицы — торговая зона</p>
          </div>

          <div className="street-view">
            <Image
              src="/slide-images/img-133.jpg"
              alt="Торговая зона"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
