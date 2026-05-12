"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";

export default function CallbackSection() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setPhone("");
    setName("");
  };

  return (
    <section className="callback">
      <div className="callback__glow1" />
      <div className="callback__glow2" />
      <div className="callback__grid" />

      <div className="callback__inner">
        <div>
          <span className="section__label">Свяжитесь с нами</span>
          <h2 className="callback__title" style={{ marginTop: 12 }}>
            Оставьте заявку <span>и мы расскажем</span> о лучших предложениях
          </h2>
          <p className="callback__desc">
            Оставьте свой номер, и мы перезвоним вам. Наши менеджеры помогут подобрать идеальную квартиру под ваш бюджет.
          </p>
          <div className="callback__phone-block">
            <div className="callback__phone-icon"><Phone /></div>
            <div>
              <p className="callback__phone-label">Позвоните нам</p>
              <a href="tel:998781501111" className="callback__phone-number">+998 78 150-11-11</a>
            </div>
          </div>
          <p className="callback__note">Обращаем ваше внимание, что режим работы отдела продаж с 9:00 до 21:00</p>
        </div>

        <div className="callback__form-card">
          {submitted ? (
            <div className="callback__success">
              <CheckCircle />
              <h3>Заявка отправлена!</h3>
              <p>Мы перезвоним вам в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="callback__form-title">Мы вам позвоним</h3>
              <p className="callback__form-subtitle">Оставьте свой номер, и мы перезвоним вам</p>
              <label className="callback__input-label">Ваше имя</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите ваше имя" className="callback__input" required />
              <label className="callback__input-label">Номер телефона</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+998 __ ___ __ __" className="callback__input" required />
              <button type="submit" className="callback__submit">
                <Send style={{ width: 20, height: 20 }} /> Отправить заявку
              </button>
              <p className="callback__privacy">
                Оставив заявку на сайте, вы соглашаетесь с <a href="/privacy">условиями</a> обработки персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
