"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

const MENU_BASE = "/docs";

const menu: MenuItem[] = [
  {
    label: "Дирекция ҳақида",
    children: [
      {
        label: "Вазифа ва функциялар",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Вазифа ва функциялар+/Вазифа ва функциялар.docx`,
      },
      {
        label: "Ёшлар ижтимоий-иқтисодий маркази ҳақида",
        href: `${MENU_BASE}/1. Дирекция ҳақида+/Ёшлар ижтимоий-иқтисодий маркази ҳақида+/Ёшлар маркази ҳақида.docx`,
      },
      {
        label: "Раҳбарият",
        href: "/leadership",
      },
      {
        label: "Ташкилот тузилмаси",
        href: "/structure",
      },
    ],
  },
  
  {
    label: "Инвесторлар учун",
    children: [
      { label: "Ер участкалари", href: "#" },
      {
        label: "Қабул қилинган ҳужжатлар",
        href: `${MENU_BASE}/3. Инвсеторлар учун/қабул қилинган ҳужжатлар+/ПҚ-332.pdf`,
      },
      { label: "Инвестицион лойиҳалар", href: "#" },
      {
        label: "Талаб ва мажбуриятлар",
        href: `${MENU_BASE}/3. Инвсеторлар учун/Талаб ва мажбуриятлар+/Критерия договор.docx`,
      },
    ],
  },
  {
    label: "Яратилган имтиёзлар",
    href: `${MENU_BASE}/4. Яратилган имтиёзлар+/ҚР имтиёзлар рўйхати +.docx`,
  },
  {
    label: "Очиқ маълумотлар",
    children: [
      {
        label: "Тендерлар",
        href: `${MENU_BASE}/5. Очиқ маълумотлар+/Тендерлар/Тендер.docx`,
      },
    ],
  },
  {
    label: "Боғланиш",
    href: `${MENU_BASE}/6. Боғланиш+/Боғланиш учун телефон рақамлари.docx`,
  },
  {
    label: "Янгиликлар",
    href: "/news",
  },
  {
    label: "Мурожаат",
    href: "#",
  },
];

const encodeHref = (href?: string) => {
  if (!href) return "#";
  if (href.startsWith("/") && !href.startsWith("//")) {
    return href
      .split("/")
      .map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg)))
      .join("/");
  }
  return href;
};

const isPdfFile = (href?: string) =>
  !!href && href.toLowerCase().endsWith(".pdf");

const convertToDownloadUrl = (href?: string): string => {
  if (!href || !href.startsWith("/docs/")) return href || "#";
  // Convert /docs/... to /api/download/...
  return href.replace("/docs/", "/api/download/");
};

const isExternalFile = (href?: string) =>
  !!href && href.startsWith("/Меню");

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLocale, setActiveLocale] = useState<"UZ" | "RU" | "ZH" | "EN">("UZ");
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderTopLink = (item: MenuItem) => {
    const href = encodeHref(item.href);
    const isPdf = isPdfFile(item.href);
    const finalHref = isPdf ? convertToDownloadUrl(href) : href;
    
    if (!finalHref || finalHref === "#") {
      return (
        <span className="header__nav-link">
          {item.label}
        </span>
      );
    }
    
    if (isExternalFile(item.href)) {
      return (
        <a 
          href={finalHref} 
          className="header__nav-link" 
          target="_blank" 
          rel="noopener noreferrer"
          download={isPdf}
        >
          {item.label}
        </a>
      );
    }
    
    if (isPdf) {
      return (
        <a 
          href={finalHref} 
          className="header__nav-link"
          download
        >
          {item.label}
        </a>
      );
    }
    
    return (
      <Link href={finalHref} className="header__nav-link">
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <header className={`header ${isScrolled ? "header--scrolled" : "header--transparent"}`}>
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <div className="header__logo-icon header__logo-icon--img">
              <Image src="/logo.jpg" alt="Yoshlar Markazi" width={80} height={80} style={{ width: "auto", height: "100%" }} />
            </div>
            <div>
              <div className="header__logo-text">YOSHLAR MARKAZI</div>
              {/* <div className="header__logo-subtitle">Ёшлар ижтимоий-иқтисодий маркази</div> */}
            </div>
          </Link>

          <nav className="header__nav">
            {menu.map((item, idx) =>
              item.children && item.children.length > 0 ? (
                <div key={idx} className="header__nav-item header__nav-item--dropdown">
                  <button className="header__nav-link header__nav-link--btn">
                    <span>{item.label}</span>
                    <ChevronDown style={{ width: 14, height: 14, marginLeft: 4 }} />
                  </button>
                  <div className="header__dropdown">
                    {item.children.map((child, cIdx) => {
                      const childHref = encodeHref(child.href);
                      const isPdf = isPdfFile(child.href);
                      const finalHref = isPdf ? convertToDownloadUrl(childHref) : childHref;
                      
                      if (!finalHref || finalHref === "#") {
                        return (
                          <span key={cIdx} className="header__dropdown-link">
                            {child.label}
                          </span>
                        );
                      }
                      
                      if (isPdf) {
                        return (
                          <a
                            key={cIdx}
                            href={finalHref}
                            className="header__dropdown-link"
                            download
                          >
                            {child.label}
                          </a>
                        );
                      }
                      
                      if (isExternalFile(child.href)) {
                        return (
                          <a
                            key={cIdx}
                            href={finalHref}
                            className="header__dropdown-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {child.label}
                          </a>
                        );
                      }
                      
                      return (
                        <Link
                          key={cIdx}
                          href={finalHref}
                          className="header__dropdown-link"
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div key={idx} className="header__nav-item">
                  {renderTopLink(item)}
                </div>
              ),
            )}
          </nav>

          <div className="header__right">
            {/* <div className="header__socials">
              <a href="#" className="header__social" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="#" className="header__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="header__social" aria-label="WeChat" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.21 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.664l-.39 1.48c-.019.07-.048.14-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.81-.05-.857-2.578.157-5.972 2.971-7.974C12.385 3.214 10.568 2.188 8.69 2.188zm-2.554 5.146a.998.998 0 1 1 0-1.997.998.998 0 0 1 0 1.997zm4.5 0a.998.998 0 1 1 0-1.997.998.998 0 0 1 0 1.997z"/>
                  <path d="M15.194 8.819c-4.16 0-7.537 2.803-7.537 6.258 0 3.455 3.378 6.258 7.537 6.258.826 0 1.622-.112 2.365-.312a.71.71 0 0 1 .596.082l1.584.927a.27.27 0 0 0 .139.045.245.245 0 0 0 .242-.246.28.28 0 0 0-.04-.177l-.325-1.233a.491.491 0 0 1 .178-.553C21.5 18.739 22.73 16.86 22.73 15.077c0-3.455-3.378-6.258-7.537-6.258zm-2.668 5.334a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668zm2.668 0a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668zm2.667 0a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668z"/>
                </svg>
              </a>
            </div> */}
            <div className="header__lang">
              <button
                onClick={() => setActiveLocale("UZ")}
                className={`header__lang-btn ${activeLocale === "UZ" ? "header__lang-btn--active" : ""}`}
              >UZ</button>
              <button
                onClick={() => setActiveLocale("RU")}
                className={`header__lang-btn ${activeLocale === "RU" ? "header__lang-btn--active" : ""}`}
              >RU</button>
              <button
                onClick={() => setActiveLocale("ZH")}
                className={`header__lang-btn ${activeLocale === "ZH" ? "header__lang-btn--active" : ""}`}
              >ZH</button>
              <button
                onClick={() => setActiveLocale("EN")}
                className={`header__lang-btn ${activeLocale === "EN" ? "header__lang-btn--active" : ""}`}
              >EN</button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="header__menu-btn"
            >
              {isMobileMenuOpen ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-overlay ${isMobileMenuOpen ? "mobile-overlay--open" : ""}`}>
        <div className="mobile-overlay__bg" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="mobile-overlay__panel">
          {menu.map((item, idx) => {
            const hasChildren = !!item.children && item.children.length > 0;
            const isOpen = openMobileIndex === idx;
            if (hasChildren) {
              return (
                <div key={idx} className="mobile-overlay__group">
                  <button
                    className="mobile-overlay__link mobile-overlay__link--btn"
                    onClick={() => setOpenMobileIndex(isOpen ? null : idx)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      style={{
                        width: 18,
                        height: 18,
                        transition: "transform 0.2s",
                        transform: isOpen ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div className="mobile-overlay__sublist">
                      {item.children!.map((child, cIdx) => {
                        const childHref = encodeHref(child.href);
                        const isPdf = isPdfFile(child.href);
                        const finalHref = isPdf ? convertToDownloadUrl(childHref) : childHref;
                        
                        if (!finalHref || finalHref === "#") {
                          return (
                            <span
                              key={cIdx}
                              className="mobile-overlay__sublink"
                            >
                              {child.label}
                            </span>
                          );
                        }
                        
                        if (isPdf) {
                          return (
                            <a
                              key={cIdx}
                              href={finalHref}
                              className="mobile-overlay__sublink"
                              download
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          );
                        }
                        
                        if (isExternalFile(child.href)) {
                          return (
                            <a
                              key={cIdx}
                              href={finalHref}
                              className="mobile-overlay__sublink"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          );
                        }
                        
                        return (
                          <Link
                            key={cIdx}
                            href={finalHref}
                            className="mobile-overlay__sublink"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            const finalHref = encodeHref(item.href);
            
            if (!finalHref || finalHref === "#") {
              return (
                <span
                  key={idx}
                  className="mobile-overlay__link"
                >
                  {item.label}
                </span>
              );
            }
            
            return isExternalFile(item.href) ? (
              <a
                key={idx}
                href={finalHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-overlay__link"
              >
                {item.label}
              </a>
            ) : isPdfFile(item.href) ? (
              <a
                key={idx}
                href={convertToDownloadUrl(finalHref)}
                download
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-overlay__link"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={idx}
                href={finalHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-overlay__link"
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mobile-overlay__bottom">
            <a href="tel:+998000000000" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--gold)", fontSize: 18, fontWeight: 600, textDecoration: "none" }}>
              <Phone style={{ width: 20, height: 20 }} />
              Боғланиш
            </a>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
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
        </div>
      </div>
    </>
  );
}
