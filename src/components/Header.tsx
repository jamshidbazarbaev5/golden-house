"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, User } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Квартиры" },
  { href: "/commercial", label: "Коммерция" },
  { href: "/mortgage", label: "Ипотека" },
  { href: "/company", label: "О компании" },
  { href: "/vacancies", label: "Вакансии" },
  { href: "/news", label: "Новости" },
  { href: "/events", label: "Акции" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLocale, setActiveLocale] = useState<"RU" | "UZ">("RU");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "header--scrolled" : "header--transparent"}`}>
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <div className="header__logo-icon"><span>GH</span></div>
            <div>
              <div className="header__logo-text">GOLDEN HOUSE</div>
              <div className="header__logo-subtitle">Искусство создавать</div>
            </div>
          </Link>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="header__nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__right">
            <a href="tel:998781501111" className="header__phone">
              <Phone style={{ width: 16, height: 16 }} />
              <span>+998 78 150-11-11</span>
            </a>
            <Link href="/account" className="header__login">
              <User style={{ width: 16, height: 16 }} />
              <span>Войти</span>
            </Link>
            <div className="header__lang">
              <button
                onClick={() => setActiveLocale("RU")}
                className={`header__lang-btn ${activeLocale === "RU" ? "header__lang-btn--active" : ""}`}
              >RU</button>
              <button
                onClick={() => setActiveLocale("UZ")}
                className={`header__lang-btn ${activeLocale === "UZ" ? "header__lang-btn--active" : ""}`}
              >UZ</button>
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-overlay__link"
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-overlay__bottom">
            <a href="tel:998781501111" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--gold)", fontSize: 18, fontWeight: 600, marginBottom: 16, textDecoration: "none" }}>
              <Phone style={{ width: 20, height: 20 }} />
              +998 78 150-11-11
            </a>
            <Link href="/account" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
              <User style={{ width: 20, height: 20 }} />
              <span>Войти в личный кабинет</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
