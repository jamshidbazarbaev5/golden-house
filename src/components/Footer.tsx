import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

const MENU_BASE = "/docs";

type FooterLink = { label: string; href: string; external?: boolean };

const sections: { title: string; links: FooterLink[] }[] = [
  {
    title: "Дирекция ҳақида",
    links: [
      {
        label: "Вазифа ва функциялар",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Вазифа ва функциялар+/Вазифа ва функциялар.docx`,
      },
      {
        label: "Ёшлар маркази ҳақида",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Ёшлар ижтимоий-иқтисодий маркази ҳақида+/Ёшлар маркази ҳақида.docx`,
      },
      {
        label: "Раҳбарият",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Раҳбарият+/Раҳбарият.docx`,
      },
      {
        label: "Ташкилот тузилмаси",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Ташкилот тузилмаси+/ТУЗИЛМА.docx`,
      },
    ],
  },
  {
    title: "Инвесторлар учун",
    links: [
      {
        label: "Қабул қилинган ҳужжатлар",
        href: `${MENU_BASE}/3. Инвсеторлар учун/қабул қилинган ҳужжатлар+/ПҚ-332.pdf`,
      },
      {
        label: "Талаб ва мажбуриятлар",
        href: `${MENU_BASE}/3. Инвсеторлар учун/Талаб ва мажбуриятлар+/Критерия договор.docx`,
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
      },
      {
        label: "Тендерлар",
        href: `${MENU_BASE}/5. Очиқ маълумотлар+/Тендерлар/Тендер.docx`,
      },
      {
        label: "Боғланиш",
        href: `${MENU_BASE}/6. Боғланиш+/Боғланиш учун телефон рақамлари.docx`,
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

const isPdfFile = (href: string) => href.toLowerCase().endsWith(".pdf");

const convertToDownloadUrl = (href: string) => {
  if (!href.startsWith("/docs/")) return href;
  return href.replace("/docs/", "/api/download/");
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div>
          <div className="footer__brand-logo">
            <div className="header__logo-icon header__logo-icon--img">
              <Image src="/logo.jpg" alt="Yoshlar Markazi" width={44} height={44} style={{ width: "auto", height: "100%" }} />
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
          <div className="footer__socials" style={{ marginTop: 20 }}>
            <a href="#" className="footer__social" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="WeChat" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.21 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.664l-.39 1.48c-.019.07-.048.14-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.81-.05-.857-2.578.157-5.972 2.971-7.974C12.385 3.214 10.568 2.188 8.69 2.188zm-2.554 5.146a.998.998 0 1 1 0-1.997.998.998 0 0 1 0 1.997zm4.5 0a.998.998 0 1 1 0-1.997.998.998 0 0 1 0 1.997z"/>
                <path d="M15.194 8.819c-4.16 0-7.537 2.803-7.537 6.258 0 3.455 3.378 6.258 7.537 6.258.826 0 1.622-.112 2.365-.312a.71.71 0 0 1 .596.082l1.584.927a.27.27 0 0 0 .139.045.245.245 0 0 0 .242-.246.28.28 0 0 0-.04-.177l-.325-1.233a.491.491 0 0 1 .178-.553C21.5 18.739 22.73 16.86 22.73 15.077c0-3.455-3.378-6.258-7.537-6.258zm-2.668 5.334a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668zm2.668 0a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668zm2.667 0a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668z"/>
              </svg>
            </a>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="footer__heading">{section.title}</h3>
            <ul>
              {section.links.map((link) => {
                const encodedHref = encodeHref(link.href);
                const isPdf = isPdfFile(link.href);
                const finalHref = isPdf ? convertToDownloadUrl(encodedHref) : encodedHref;
                
                if (isPdf) {
                  return (
                    <li key={link.label}>
                      <a
                        href={finalHref}
                        download
                        className="footer__link"
                      >
                        <span className="footer__link-dot" />
                        {link.label}
                      </a>
                    </li>
                  );
                }
                
                if (link.external) {
                  return (
                    <li key={link.label}>
                      <a
                        href={finalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                      >
                        <span className="footer__link-dot" />
                        {link.label}
                      </a>
                    </li>
                  );
                }
                
                return (
                  <li key={link.label}>
                    <Link href={finalHref} className="footer__link">
                      <span className="footer__link-dot" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
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
