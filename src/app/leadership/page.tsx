import Image from "next/image";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import "./leadership.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Раҳбарият — Ёшлар маркази",
  description: "Ёшлар ижтимоий-иқтисодий маркази раҳбарияти.",
};

interface Leader {
  name: string;
  position: string;
  department: string;
  photo: string;
  phone: string;
  email: string;
  bio: string;
  responsibilities: string[];
}

const leaders: Leader[] = [
  {
    name: "Исмоилов Жасур Бахтиёрович",
    position: "Директор",
    department: "Дирекция",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
    phone: "+998 71 123 45 67",
    email: "director@yoshlarmarkazi.uz",
    bio: "2018 йилдан буён Ёшлар ижтимоий-иқтисодий маркази директори лавозимида фаолият юритмоқда. Ташкилотнинг стратегик ривожланиш йўналишларини белгилаш ва амалга оширишда етакчи роль ўйнайди.",
    responsibilities: [
      "Ташкилот фаолиятига умумий раҳбарлик қилиш",
      "Стратегик ривожланиш режаларини ишлаб чиқиш",
      "Давлат органлари билан ҳамкорлик",
      "Инвестицион лойиҳаларни бошқариш",
    ],
  },
  {
    name: "Каримова Дилноза Рустамовна",
    position: "Директор ўринбосари",
    department: "Лойиҳалар бўлими",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
    phone: "+998 71 123 45 68",
    email: "d.karimova@yoshlarmarkazi.uz",
    bio: "Лойиҳалар бўлимини бошқариш ва ёшларга оид инвестицион лойиҳаларни ривожлантириш бўйича масъул.",
    responsibilities: [
      "Инвестицион лойиҳаларни режалаштириш",
      "Халқаро ҳамкорлик дастурларини мувофиқлаштириш",
      "Ёшлар тадбиркорлигини қўллаб-қувватлаш",
    ],
  },
  {
    name: "Ахмедов Бобур Шухратович",
    position: "Директор ўринбосари",
    department: "Молия-иқтисод бўлими",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
    phone: "+998 71 123 45 69",
    email: "b.ahmedov@yoshlarmarkazi.uz",
    bio: "Молия-иқтисод бўлимига раҳбарлик қилиш ва ташкилот молиявий барқарорлигини таъминлашда масъул.",
    responsibilities: [
      "Молиявий режалаштириш ва бюджет бошқаруви",
      "Иқтисодий таҳлил ва ҳисоботлар тайёрлаш",
      "Тендер жараёнларини назорат қилиш",
    ],
  },
  {
    name: "Рахимова Мадина Алишеровна",
    position: "Бўлим бошлиғи",
    department: "Кадрлар бўлими",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face",
    phone: "+998 71 123 45 70",
    email: "m.rahimova@yoshlarmarkazi.uz",
    bio: "Кадрлар сиёсатини шакллантириш ва амалга ошириш, ходимларнинг малакасини ошириш дастурларини ишлаб чиқишда масъул.",
    responsibilities: [
      "Кадрлар сиёсатини ишлаб чиқиш",
      "Ходимларни танлаш ва жойлаштириш",
      "Малака ошириш дастурларини ташкил этиш",
    ],
  },
  {
    name: "Тўраев Сардор Баходирович",
    position: "Бўлим бошлиғи",
    department: "Ҳуқуқий бўлим",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    phone: "+998 71 123 45 71",
    email: "s.turaev@yoshlarmarkazi.uz",
    bio: "Ташкилотнинг ҳуқуқий масалаларини ҳал қилиш, шартномалар тайёрлаш ва юридик экспертизадан ўтказишда масъул.",
    responsibilities: [
      "Ҳуқуқий ҳужжатларни тайёрлаш",
      "Шартномаларни юридик назорат қилиш",
      "Суд ва арбитраж ишларини олиб бориш",
    ],
  },
];

export default function LeadershipPage() {
  const [featured, ...rest] = leaders;

  return (
    <main className="ld-page">
      <header className="ld-header">
        <p className="ld-eyebrow">Дирекция ҳақида · Раҳбарият</p>
        <h1 className="ld-title">
          Раҳбар <em>ходимлар</em>
        </h1>
      </header>

      <section className="ld-section">
        {/* Featured — Director */}
        <div className="ld-featured">
          <div className="ld-featured__img-wrap">
            <Image
              src={featured.photo}
              alt={featured.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
          <div className="ld-featured__body">
            <span className="ld-label">{featured.department}</span>
            <h2 className="ld-featured__name">{featured.name}</h2>
            <p className="ld-featured__pos">{featured.position}</p>
            <p className="ld-featured__bio">{featured.bio}</p>
            <ul className="ld-featured__tasks">
              {featured.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <div className="ld-featured__contacts">
              <a href={`tel:${featured.phone.replace(/\s/g, "")}`} className="ld-contact">
                <Phone size={14} /> {featured.phone}
              </a>
              <a href={`mailto:${featured.email}`} className="ld-contact">
                <Mail size={14} /> {featured.email}
              </a>
            </div>
          </div>
        </div>

        {/* Grid — Other leaders */}
        <div className="ld-grid">
          {rest.map((leader, i) => (
            <div key={i} className="ld-card">
              <div className="ld-card__img-wrap">
                <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="ld-card__meta">
                <span className="ld-label">{leader.department}</span>
              </div>
              <h3 className="ld-card__name">{leader.name}</h3>
              <p className="ld-card__pos">{leader.position}</p>
              <p className="ld-card__bio">{leader.bio}</p>
              <div className="ld-card__contacts">
                <a href={`tel:${leader.phone.replace(/\s/g, "")}`} className="ld-contact ld-contact--sm">
                  <Phone size={12} /> {leader.phone}
                </a>
                <a href={`mailto:${leader.email}`} className="ld-contact ld-contact--sm">
                  <Mail size={12} /> {leader.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
