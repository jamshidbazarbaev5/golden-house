import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

const MENU_BASE = "/Меню";

type FooterLink = { label: string; href: string; external?: boolean };

const sections: { title: string; links: FooterLink[] }[] = [
  {
    title: "Дирекция ҳақида",
    links: [
      {
        label: "Вазифа ва функциялар",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Вазифа ва функциялар+/Вазифа ва функциялар.docx`,
        external: true,
      },
      {
        label: "Ёшлар маркази ҳақида",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Ёшлар ижтимоий-иқтисодий маркази ҳақида+/Ёшлар маркази ҳақида.doc`,
        external: true,
      },
      {
        label: "Раҳбарият",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Раҳбарият+/Раҳбарият.docx`,
        external: true,
      },
      {
        label: "Ташкилот тузилмаси",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Ташкилот тузилмаси+/ТУЗИЛМА.doc`,
        external: true,
      },
    ],
  },
  {
    title: "Инвесторлар учун",
    links: [
      {
        label: "Қабул қилинган ҳужжатлар",
        href: `${MENU_BASE}/3. Инвсеторлар учун/қабул қилинган ҳужжатлар+/ПҚ-332.pdf`,
        external: true,
      },
      {
        label: "Талаб ва мажбуриятлар",
        href: `${MENU_BASE}/3. Инвсеторлар учун/Талаб ва мажбуриятлар+/Критерия договор.docx`,
        external: true,
      },
      { label: "Ер участкалари", href: "#" },
      { label: "Инвестицион лойиҳалар", href: "#" },
    ],
  },
  {
    title: "Хизматлар",
    links: [
      {
        label: "Яратилган имтиёзлар",
        href: `${MENU_BASE}/4. Яратилган имтиёзлар+/ҚР имтиёзлар рўйхати +.docx`,
        external: true,
      },
      {
        label: "Тендерлар",
        href: `${MENU_BASE}/5. Очиқ маълумотлар+/Тендерлар/Тендер.docx`,
        external: true,
      },
      {
        label: "Боғланиш",
        href: `${MENU_BASE}/6. Боғланиш+/Боғланиш учун телефон рақамлари.docx`,
        external: true,
      },
      { label: "Мурожаат", href: "#" },
    ],
  },
];

const encodeHref = (href: string) => {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return href
      .split("/")
      .map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg)))
      .join("/");
  }
  return href;
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div>
          <div className="footer__brand-logo">
            <div className="header__logo-icon header__logo-icon--img">
              <Image src="/gerb.jpeg" alt="Yoshlar Markazi" width={44} height={44} />
            </div>
            <div>
              <div className="header__logo-text">YOSHLAR MARKAZI</div>
              <div className="header__logo-subtitle">Ёшлар ижтимоий-иқтисодий маркази</div>
            </div>
          </div>
          <p className="footer__brand-desc">
            Yoshlar ijtimoiy-iqtisodiy markazi — yoshlarning ijtimoiy va iqtisodiy
            faolligini qo&apos;llab-quvvatlash hamda investitsion loyihalarni
            rivojlantirish bo&apos;yicha direksiya.
          </p>
          <div className="footer__contact-item">
            <MapPin />
            <span>Ўзбекистон Республикаси</span>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="footer__heading">{section.title}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={encodeHref(link.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      <span className="footer__link-dot" />
                      {link.label}
                    </a>
                  ) : (
                    <Link href={encodeHref(link.href)} className="footer__link">
                      <span className="footer__link-dot" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>
          Yoshlar Markazi &copy; {new Date().getFullYear()} — Ёшлар ижтимоий-иқтисодий
          маркази. Сайтдаги маълумотлар танишиш мақсадида берилган.
        </p>
      </div>
    </footer>
  );
}
