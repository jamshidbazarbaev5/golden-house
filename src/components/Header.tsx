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
  const [activeLocale, setActiveLocale] = useState<"UZ" | "RU">("UZ");
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
              <Image src="/gerb.jpeg" alt="Yoshlar Markazi" width={40} height={40} style={{ width: "auto", height: "100%" }} />
            </div>
            <div>
              <div className="header__logo-text">YOSHLAR MARKAZI</div>
              <div className="header__logo-subtitle">Ёшлар ижтимоий-иқтисодий маркази</div>
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
            <div className="header__lang">
              <button
                onClick={() => setActiveLocale("UZ")}
                className={`header__lang-btn ${activeLocale === "UZ" ? "header__lang-btn--active" : ""}`}
              >UZ</button>
              <button
                onClick={() => setActiveLocale("RU")}
                className={`header__lang-btn ${activeLocale === "RU" ? "header__lang-btn--active" : ""}`}
              >RU</button>
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
          </div>
        </div>
      </div>
    </>
  );
}
