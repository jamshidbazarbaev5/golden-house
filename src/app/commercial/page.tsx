import Link from "next/link";
import { MapPin, ArrowRight, Building, Ruler, DollarSign } from "lucide-react";

const commercialProperties = [
  { id: 1, name: "O'Z MAKON Business", type: "Бизнес-центр", location: "Мирзо-Улугбекский район", price: "от 9 000 $/м²", area: "от 30 м²", floors: "20 этажей", spaces: "Офисы, магазины, рестораны", status: "Продажа", bg: "linear-gradient(135deg, #18200a, #304018)" },
  { id: 2, name: "INFINITY Коммерция", type: "Коммерческие помещения", location: "Яшнабадский район", price: "от 15 000 $/м²", area: "от 50 м²", floors: "1-2 этажи", spaces: "Магазины, салоны красоты, кафе", status: "Продажа", bg: "linear-gradient(135deg, #0a1628, #1a3060)" },
  { id: 3, name: "Assalom Sohil Коммерция", type: "Коммерческие помещения", location: "Мирабадский район", price: "от 10 000 $/м²", area: "от 40 м²", floors: "1 этаж", spaces: "Магазины, аптеки, офисы", status: "Строится", bg: "linear-gradient(135deg, #0a1520, #1a3050)" },
];

export default function CommercialPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__label">Для бизнеса</span>
          <h1 className="page-hero__title">Коммерческая недвижимость</h1>
          <p className="page-hero__desc">Офисы, торговые площади и помещения под бизнес в жилых комплексах Golden House</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="section__inner">
          <div className="grid-4">
            {[
              { icon: Building, label: "Высокий трафик", desc: "Расположение в густонаселённых ЖК" },
              { icon: Ruler, label: "Гибкая планировка", desc: "Возможность перепланировки" },
              { icon: DollarSign, label: "Инвестиция", desc: "Высокая доходность вложений" },
              { icon: MapPin, label: "Топ-локации", desc: "Лучшие районы Ташкента" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="stat-box">
                  <div className="icon-box"><Icon /></div>
                  <div className="stat-box__value" style={{ fontSize: 16 }}>{item.label}</div>
                  <div className="stat-box__desc">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section__inner">
          {commercialProperties.map((property) => (
            <div key={property.id} className="commercial-card" style={{ marginBottom: 32 }}>
              <div className="commercial-card__grid">
                <div className="commercial-card__image" style={{ background: property.bg }}>
                  <div className="commercial-card__circle" />
                  <div className="commercial-card__meta">
                    <span className="commercial-card__status">{property.status}</span>
                    <div className="commercial-card__name">{property.name}</div>
                    <div className="commercial-card__type">{property.type}</div>
                  </div>
                </div>
                <div className="commercial-card__body">
                  <div className="commercial-card__location"><MapPin /> {property.location}</div>
                  <div className="commercial-card__stats">
                    <div><div className="commercial-card__stat-label">Стоимость</div><div className="commercial-card__stat-value commercial-card__stat-value--lg">{property.price}</div></div>
                    <div><div className="commercial-card__stat-label">Площадь</div><div className="commercial-card__stat-value">{property.area}</div></div>
                    <div><div className="commercial-card__stat-label">Этажи</div><div className="commercial-card__stat-value">{property.floors}</div></div>
                    <div><div className="commercial-card__stat-label">Типы</div><div className="commercial-card__stat-value" style={{ fontSize: 14 }}>{property.spaces}</div></div>
                  </div>
                  <Link href="/projects/oz-makon" className="btn btn--navy">Подробнее <ArrowRight /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
