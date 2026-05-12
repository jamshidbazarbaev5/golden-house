import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const projects = [
  { name: "INFINITY Клубный дом", href: "/projects/infinity" },
  { name: "O'Z Zamin", href: "/projects/oz-zamin" },
  { name: "O'Z Mahal", href: "/projects/oz-mahal" },
  { name: "O'Z Makon Business", href: "/projects/oz-makon" },
  { name: "Assalom Bog'lar", href: "/projects/assalom-boglar" },
  { name: "Assalom Jomiy", href: "/projects/assalom-jomiy" },
  { name: "Assalom Sohil", href: "/projects/assalom-sohil" },
  { name: "Assalom Havo", href: "/projects/assalom-havo" },
];

const navLinks = [
  { name: "Квартиры", href: "/projects" },
  { name: "Коммерция", href: "/commercial" },
  { name: "Ипотека", href: "/mortgage" },
  { name: "О компании", href: "/company" },
  { name: "Вакансии", href: "/vacancies" },
  { name: "Новости", href: "/news" },
  { name: "Акции", href: "/events" },
  { name: "Контакты", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div>
          <div className="footer__brand-logo">
            <div className="header__logo-icon"><span>GH</span></div>
            <div>
              <div className="header__logo-text">GOLDEN HOUSE</div>
              <div className="header__logo-subtitle">Искусство создавать</div>
            </div>
          </div>
          <p className="footer__brand-desc">
            Мы формируем облик столицы, создавая современные жилые комплексы. Новостройки в Ташкенте от Golden House.
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/goldenhouseuz/" target="_blank" rel="noopener noreferrer" className="footer__social">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.instagram.com/goldenhouseuz/" target="_blank" rel="noopener noreferrer" className="footer__social">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCcKZe-zV3TWjmrfGWrl-1uw" target="_blank" rel="noopener noreferrer" className="footer__social">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a href="https://t.me/goldenhouseuz" target="_blank" rel="noopener noreferrer" className="footer__social">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer__heading">Наши проекты</h3>
          <ul>
            {projects.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="footer__link">
                  <span className="footer__link-dot" />{p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Навигация</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer__link">
                  <span className="footer__link-dot" />{l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Контакты</h3>
          <a href="tel:998781501111" className="footer__contact-item" style={{ textDecoration: "none" }}>
            <Phone /><span>+998 78 150-11-11</span>
          </a>
          <div className="footer__contact-item">
            <MapPin /><span>Яшнабадский район, 5-й пр-д Садыка Азимова, бизнес-центр «Infinity» Офис продаж Golden House</span>
          </div>
          <div className="footer__contact-item">
            <Clock />
            <div style={{ fontSize: 14 }}>
              <p>Отдел продаж: Пн-Вс: с 9:00 до 19:00</p>
              <p style={{ marginTop: 4 }}>Коммерческий отдел: Пн-Пт: с 9:00 до 18:00</p>
            </div>
          </div>
          <div className="footer__contact-item">
            <Mail /><span>job@gh.uz</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Группа компаний Golden House &copy; {new Date().getFullYear()} ООО «Golden House Development». Информация на сайте предоставлена в ознакомительных целях.</p>
        <p>*Стоимость со скидкой указана при 100% оплате. Предложение не является публичной офертой.</p>
      </div>
    </footer>
  );
}
