import { Briefcase, MapPin, Mail } from "lucide-react";

const vacancies = [
  {
    title: "Менеджер по продажам",
    department: "Отдел продаж",
    location: "Ташкент",
    type: "Полная занятость",
    salary: "от 5 000 000 UZS",
    description: "Консультирование клиентов по вопросам покупки недвижимости, проведение показов квартир, ведение документации.",
  },
  {
    title: "Маркетолог",
    department: "Отдел маркетинга",
    location: "Ташкент",
    type: "Полная занятость",
    salary: "от 7 000 000 UZS",
    description: "Разработка маркетинговых стратегий, управление рекламными кампаниями, аналитика рынка недвижимости.",
  },
  {
    title: "Инженер-строитель",
    department: "Строительный отдел",
    location: "Ташкент",
    type: "Полная занятость",
    salary: "от 8 000 000 UZS",
    description: "Контроль качества строительных работ, техническое проектирование, работа с подрядчиками.",
  },
  {
    title: "Дизайнер интерьеров",
    department: "Дизайн-отдел",
    location: "Ташкент",
    type: "Полная занятость",
    salary: "от 6 000 000 UZS",
    description: "Разработка дизайн-проектов квартир и общественных пространств жилых комплексов.",
  },
];

export default function VacanciesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__label">Карьера</span>
          <h1 className="page-hero__title">Вакансии</h1>
          <p className="page-hero__desc">Присоединяйтесь к команде Golden House. Мы всегда в поиске талантливых специалистов.</p>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section__inner" style={{ maxWidth: 900, margin: "0 auto" }}>
          {vacancies.map((vacancy, i) => (
            <div key={i} className="vacancy-card">
              <div className="vacancy-card__header">
                <div>
                  <h3 className="vacancy-card__title">{vacancy.title}</h3>
                  <p className="vacancy-card__dept">{vacancy.department}</p>
                </div>
                <span className="vacancy-card__salary">{vacancy.salary}</span>
              </div>
              <p className="vacancy-card__desc">{vacancy.description}</p>
              <div className="vacancy-card__tags">
                <span className="vacancy-card__tag"><MapPin /> {vacancy.location}</span>
                <span className="vacancy-card__tag"><Briefcase /> {vacancy.type}</span>
              </div>
            </div>
          ))}

          <div className="cta-box">
            <h3 className="cta-box__title">Не нашли подходящую вакансию?</h3>
            <p className="cta-box__desc">Отправьте своё резюме, и мы свяжемся с вами</p>
            <div className="cta-box__actions">
              <a href="tel:998777017220" className="btn btn--gold">+998 (77) 701-72-20</a>
              <a href="mailto:job@gh.uz" className="btn btn--outline-white"><Mail /> job@gh.uz</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
