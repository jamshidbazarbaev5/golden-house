import { Building2, Users, Award, Target, Shield, Heart, Star, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Надёжность",
    description: "Более 12 лет на рынке недвижимости Узбекистана. Мы сдаём объекты в срок и с высоким качеством.",
  },
  {
    icon: Heart,
    title: "Забота о клиентах",
    description: "Каждый клиент для нас — член семьи. Мы помогаем на всех этапах покупки и после заселения.",
  },
  {
    icon: Star,
    title: "Качество",
    description: "Используем только лучшие материалы и современные технологии строительства.",
  },
  {
    icon: TrendingUp,
    title: "Инновации",
    description: "Внедряем передовые технологии умного дома и энергоэффективные решения.",
  },
];

const timeline = [
  { year: "2012", title: "Основание компании", description: "Golden House начинает свой путь в строительной отрасли Узбекистана." },
  { year: "2015", title: "Первый жилой комплекс", description: "Успешная сдача первого жилого комплекса Assalom Jomiy." },
  { year: "2018", title: "Расширение портфолио", description: "Запуск нескольких крупных проектов, включая O'Z Mahal и Assalom Bog'lar." },
  { year: "2020", title: "10 000 довольных семей", description: "Преодолена отметка в 10 000 семей, живущих в наших домах." },
  { year: "2022", title: "Премиум-сегмент", description: "Запуск клубного дома INFINITY — флагманского проекта компании." },
  { year: "2024", title: "Лидер рынка", description: "Golden House становится одним из крупнейших застройщиков Ташкента." },
];

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="page-hero__inner">
          <span className="page-hero__label">О компании</span>
          <h1 className="page-hero__title">Golden House — <span>Искусство создавать</span></h1>
          <p className="page-hero__desc">Мы формируем облик столицы, создавая современные жилые комплексы. С 2012 года мы строим не просто дома — мы создаём пространства для счастливой жизни.</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="section__inner">
          <div className="grid-4">
            {[
              { icon: Building2, value: "15+", label: "Жилых комплексов" },
              { icon: Users, value: "10 000+", label: "Довольных семей" },
              { icon: Award, value: "12 лет", label: "На рынке" },
              { icon: Target, value: "100%", label: "Сдача в срок" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="stat-box">
                  <div className="icon-box"><Icon /></div>
                  <div className="stat-box__value">{stat.value}</div>
                  <div className="stat-box__label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section__inner">
          <div className="grid-2-lg">
            <div>
              <span className="page-hero__label">Наша миссия</span>
              <h2 className="section__title" style={{ marginTop: 12 }}>Мы строим будущее Ташкента</h2>
              <p style={{ color: "var(--g600)", marginTop: 24, fontSize: 18, lineHeight: 1.6 }}>Golden House — это группа компаний, которая занимается строительством и продажей жилой и коммерческой недвижимости в Ташкенте. Наша цель — сделать качественное жильё доступным для каждой семьи.</p>
              <p style={{ color: "var(--g600)", marginTop: 16, fontSize: 18, lineHeight: 1.6 }}>Мы используем лучшие мировые практики строительства, современные материалы и инновационные технологии, чтобы каждый наш проект стал образцом качества и комфорта.</p>
            </div>
            <div className="info-panel">
              <h3 className="info-panel__title">Почему выбирают нас</h3>
              {[
                "Прозрачные условия покупки",
                "Гибкие системы оплаты и ипотека",
                "Развитая инфраструктура в каждом комплексе",
                "Авторский дизайн и планировки",
                "Гарантия качества строительства",
                "Профессиональная команда специалистов",
              ].map((item, i) => (
                <div key={i} className="info-panel__item">
                  <span className="info-panel__dot" />
                  <span className="info-panel__text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="section__inner">
          <div className="section__header section__header--center">
            <span className="section__label">Наши ценности</span>
            <h2 className="section__title">Что нами движет</h2>
          </div>
          <div className="grid-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="value-card">
                  <div className="icon-box"><Icon /></div>
                  <h3 className="value-card__title">{value.title}</h3>
                  <p className="value-card__desc">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section__inner">
          <div className="section__header section__header--center">
            <span className="section__label">Наша история</span>
            <h2 className="section__title">Путь Golden House</h2>
          </div>
          <div className="timeline">
            <div className="timeline__line" />
            {timeline.map((item, i) => (
              <div key={i} className={`timeline__item ${i % 2 !== 0 ? "timeline__item--reverse" : ""}`}>
                <div className={`timeline__content ${i % 2 === 0 ? "timeline__content--right" : ""}`}>
                  <div className="timeline__card">
                    <span className="timeline__year">{item.year}</span>
                    <h3 className="timeline__card-title">{item.title}</h3>
                    <p className="timeline__card-desc">{item.description}</p>
                  </div>
                </div>
                <div className="timeline__dot" />
                <div className="timeline__spacer" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
