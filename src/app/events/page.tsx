import Link from "next/link";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const events = [
  { id: 1, title: "Когда цветы — это только начало. Акция от Golden House", excerpt: "Специальное весеннее предложение для наших клиентов. Скидки до 15% на квартиры во всех жилых комплексах Golden House.", date: "15 марта 2025", discount: "до 15%", bg: "linear-gradient(135deg, #e11d48, #ec4899)" },
  { id: 2, title: "С заботой о тех, кто защищает. Акция ко Дню защитников Родины", excerpt: "Особые условия покупки для военнослужащих и их семей. Ипотека под специальный процент.", date: "14 января 2025", discount: "Спец. условия", bg: "linear-gradient(135deg, #059669, #0d9488)" },
  { id: 3, title: "GOLDEN FRIDAY с Golden House — момент, когда пора покупать", excerpt: "Только в эту пятницу! Беспрецедентные скидки на все типы квартир. Успейте забронировать свою квартиру мечты.", date: "29 ноября 2024", discount: "до 20%", bg: "linear-gradient(135deg, #d97706, #ea580c)" },
  { id: 4, title: "11.11 — Фестиваль недвижимости Golden House", excerpt: "Грандиозная распродажа недвижимости. Скидки, подарки и специальные условия ипотеки для каждого покупателя.", date: "11 ноября 2024", discount: "до 25%", bg: "linear-gradient(135deg, #9333ea, #7c3aed)" },
];

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__label">Специальные предложения</span>
          <h1 className="page-hero__title">Акции и скидки</h1>
          <p className="page-hero__desc">Не упустите возможность приобрести квартиру по выгодной цене</p>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section__inner">
          <div className="grid-2">
            {events.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`} className="event-card">
                <div className="event-card__image" style={{ background: event.bg }}>
                  <div className="event-card__circle1" />
                  <div className="event-card__circle2" />
                  <span className="event-card__discount"><Sparkles /> {event.discount}</span>
                  <span className="event-card__badge">Акция</span>
                </div>
                <div className="event-card__body">
                  <div className="event-card__date"><Calendar /> {event.date}</div>
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__excerpt">{event.excerpt}</p>
                  <div className="event-card__more">Узнать подробнее <ArrowRight /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
