"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__label">Контакты</span>
          <h1 className="page-hero__title">Свяжитесь с нами</h1>
          <p className="page-hero__desc">Мы всегда рады ответить на ваши вопросы. Посетите наш офис или свяжитесь с нами любым удобным способом.</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="section__inner">
          <div className="contact-grid">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="icon-box"><Phone /></div>
                <h3 className="contact-card__title">Телефон</h3>
                <a href="tel:998781501111" className="contact-card__link">+998 78 150-11-11</a>
                <p className="contact-card__sub">По вопросам трудоустройства: +998 (77) 701-72-20</p>
              </div>

              <div className="contact-card">
                <div className="icon-box"><MapPin /></div>
                <h3 className="contact-card__title">Адрес</h3>
                <p className="contact-card__text">Яшнабадский район, 5-й пр-д Садыка Азимова, бизнес-центр «Infinity» Офис продаж Golden House</p>
                <p className="contact-card__sub">Ориентир: Бывший вин завод. Жилой комплекс &quot;Infinity&quot;</p>
              </div>

              <div className="contact-card">
                <div className="icon-box"><Clock /></div>
                <h3 className="contact-card__title">Время работы</h3>
                <div className="contact-card__hours">
                  <div className="contact-card__hour-row"><span className="contact-card__hour-label">Отдел продаж</span><span className="contact-card__hour-value">Пн-Вс: 9:00 — 19:00</span></div>
                  <div className="contact-card__hour-row"><span className="contact-card__hour-label">Коммерческий отдел</span><span className="contact-card__hour-value">Пн-Пт: 9:00 — 18:00</span></div>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-box"><Mail /></div>
                <h3 className="contact-card__title">Email</h3>
                <a href="mailto:job@gh.uz" className="contact-card__link" style={{ fontSize: 16 }}>job@gh.uz</a>
              </div>
            </div>

            <div>
              <div className="contact-form-wrap">
                {submitted ? (
                  <div className="contact-form__success">
                    <CheckCircle />
                    <h3>Заявка отправлена!</h3>
                    <p>Мы перезвоним вам в ближайшее время.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="contact-form__title">Оставьте заявку</h3>
                    <p className="contact-form__desc">Заполните форму и мы свяжемся с вами</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                      <div>
                        <label className="contact-form__label">Ваше имя *</label>
                        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Введите ваше имя" className="contact-form__input" required />
                      </div>
                      <div>
                        <label className="contact-form__label">Номер телефона *</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+998 __ ___ __ __" className="contact-form__input" required />
                      </div>
                      <div>
                        <label className="contact-form__label">Сообщение</label>
                        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Опишите ваш вопрос или пожелание..." rows={4} className="contact-form__input contact-form__textarea" />
                      </div>
                    </div>
                    <button type="submit" className="contact-form__submit"><Send /> Отправить заявку</button>
                    <p className="contact-form__note">Оставив заявку, вы соглашаетесь с условиями обработки персональных данных</p>
                  </form>
                )}
              </div>

              <div className="contact-socials">
                <span className="contact-socials__label">Мы в соцсетях:</span>
                <div className="contact-socials__links">
                  {[
                    { name: "Telegram", href: "https://t.me/goldenhouseuz", svg: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" },
                    { name: "Instagram", href: "https://www.instagram.com/goldenhouseuz/", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                    { name: "Facebook", href: "https://www.facebook.com/goldenhouseuz/", svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                    { name: "YouTube", href: "https://www.youtube.com/channel/UCcKZe-zV3TWjmrfGWrl-1uw", svg: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                  ].map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="contact-social" title={social.name}>
                      <svg fill="currentColor" viewBox="0 0 24 24"><path d={social.svg} /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map__overlay">
          <div className="contact-map__inner">
            <MapPin />
            <p>Карта расположения офиса</p>
            <p>Яшнабадский район, бизнес-центр «Infinity»</p>
          </div>
        </div>
      </section>
    </>
  );
}
