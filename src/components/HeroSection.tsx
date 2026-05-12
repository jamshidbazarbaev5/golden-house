"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "INFINITY",
    subtitle: "Клубный дом",
    description: "Премиальный жилой комплекс в самом сердце Ташкента",
    price: "от 18 000 $/м²",
    badge: "Премиум",
    bg: "linear-gradient(135deg, #0a1628, #162040, #1a3060)",
    href: "/projects/infinity",
  },
  {
    title: "O'Z MAHAL",
    subtitle: "Жилой комплекс",
    description: "Современный жилой комплекс с развитой инфраструктурой",
    price: "от 8 500 $/м²",
    badge: "Популярный",
    bg: "linear-gradient(135deg, #1a1020, #2a1840, #3a2060)",
    href: "/projects/oz-mahal",
  },
  {
    title: "ASSALOM BOG'LAR",
    subtitle: "Жилой комплекс",
    description: "Уютный жилой комплекс в экологически чистом районе",
    price: "от 6 800 $/м²",
    badge: "Новинка",
    bg: "linear-gradient(135deg, #0a2018, #163020, #1a4030)",
    href: "/projects/assalom-boglar",
  },
  {
    title: "O'Z ZAMIN",
    subtitle: "Жилой комплекс",
    description: "Доступные квартиры нового поколения",
    price: "от 7 200 $/м²",
    badge: "Акция",
    bg: "linear-gradient(135deg, #1a1828, #2a2040, #382850)",
    href: "/projects/oz-zamin",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section className="hero">
      <div className="hero__bg" style={{ background: slide.bg }} />
      <div className="hero__decor">
        <div className="hero__glow1" />
        <div className="hero__glow2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <div className="hero__inner">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span className="hero__badge-text">{slide.badge}</span>
            </div>

            <h1 key={`t-${currentSlide}`} className="hero__title animate-fade-in-up">
              {slide.title}
            </h1>
            <p key={`s-${currentSlide}`} className="hero__subtitle animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {slide.subtitle}
            </p>
            <p key={`d-${currentSlide}`} className="hero__desc animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {slide.description}
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="hero__price-label">Стоимость</div>
              <div className="hero__price-value">{slide.price}</div>
            </div>

            <div className="hero__cta animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link href={slide.href} className="hero__cta-primary">
                Подробнее <ArrowRight style={{ width: 20, height: 20 }} />
              </Link>
              <Link href="/projects" className="hero__cta-secondary">
                Все проекты
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__nav">
        <button onClick={prevSlide} className="hero__nav-btn">
          <ChevronLeft style={{ width: 20, height: 20 }} />
        </button>
        <button onClick={nextSlide} className="hero__nav-btn">
          <ChevronRight style={{ width: 20, height: 20 }} />
        </button>
      </div>

      <div className="hero__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero__dot ${index === currentSlide ? "hero__dot--active" : "hero__dot--inactive"}`}
          />
        ))}
      </div>
    </section>
  );
}
