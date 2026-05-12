"use client";

import { useState } from "react";
import { Calculator, CheckCircle, ArrowRight, Percent, Clock, CreditCard, Shield } from "lucide-react";

const plans = [
  {
    name: "Ипотека от банка",
    rate: "от 22%",
    term: "до 15 лет",
    downPayment: "от 20%",
    features: [
      "Первоначальный взнос от 20%",
      "Срок кредитования до 15 лет",
      "Процентная ставка от 22% годовых",
      "Быстрое одобрение",
      "Для граждан Узбекистана",
    ],
    accentColor: "#3b82f6",
    popular: false,
  },
  {
    name: "Рассрочка от застройщика",
    rate: "0%",
    term: "до 24 мес",
    downPayment: "от 30%",
    features: [
      "Беспроцентная рассрочка",
      "Срок до 24 месяцев",
      "Первоначальный взнос от 30%",
      "Без банковских комиссий",
      "Быстрое оформление",
    ],
    accentColor: "#c8a855",
    popular: true,
  },
  {
    name: "100% оплата",
    rate: "Скидка",
    term: "Моментально",
    downPayment: "100%",
    features: [
      "Максимальная скидка до 15%",
      "Моментальное оформление",
      "Приоритет в выборе квартиры",
      "Бонусная программа",
      "Персональный менеджер",
    ],
    accentColor: "#10b981",
    popular: false,
  },
];

export default function MortgagePage() {
  const [amount, setAmount] = useState(50000);
  const [term, setTerm] = useState(10);
  const [rate] = useState(22);
  const monthlyPayment = Math.round(
    (amount * (rate / 100 / 12) * Math.pow(1 + rate / 100 / 12, term * 12)) /
      (Math.pow(1 + rate / 100 / 12, term * 12) - 1)
  );

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="page-hero__inner">
          <span className="page-hero__label">Финансирование</span>
          <h1 className="page-hero__title">Ипотека и рассрочка</h1>
          <p className="page-hero__desc">Гибкие условия оплаты для каждого. Выберите наиболее удобный способ приобретения квартиры.</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="section__inner">
          <div className="grid-4">
            {[
              { icon: Percent, label: "Ставка от 0%", desc: "На рассрочку от застройщика" },
              { icon: Clock, label: "До 15 лет", desc: "Максимальный срок ипотеки" },
              { icon: CreditCard, label: "Взнос от 20%", desc: "Минимальный первый взнос" },
              { icon: Shield, label: "Гарантия", desc: "Прозрачные условия" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="stat-box">
                  <div className="icon-box"><Icon /></div>
                  <div className="stat-box__value" style={{ fontSize: 16 }}>{item.label}</div>
                  <div className="stat-box__desc">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section__inner">
          <div className="section__header section__header--center">
            <h2 className="section__title">Варианты оплаты</h2>
            <p className="section__subtitle section__subtitle--center">Выберите удобный для вас план покупки квартиры</p>
          </div>
          <div className="grid-3">
            {plans.map((plan, i) => (
              <div key={i} className={`plan-card ${plan.popular ? "plan-card--popular" : ""}`}>
                {plan.popular && <div className="plan-card__badge">Популярный</div>}
                <div className="plan-card__accent" style={{ background: plan.accentColor }} />
                <h3 className="plan-card__name">{plan.name}</h3>
                <div style={{ marginTop: 24 }}>
                  <div className="plan-card__row"><span className="plan-card__row-label">Ставка</span><span className="plan-card__row-value plan-card__row-value--lg">{plan.rate}</span></div>
                  <div className="plan-card__row"><span className="plan-card__row-label">Срок</span><span className="plan-card__row-value">{plan.term}</span></div>
                  <div className="plan-card__row"><span className="plan-card__row-label">Первый взнос</span><span className="plan-card__row-value">{plan.downPayment}</span></div>
                </div>
                <div className="plan-card__features">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="plan-card__feature"><CheckCircle /> <span>{feature}</span></div>
                  ))}
                </div>
                <button className="btn btn--navy" style={{ width: "100%", justifyContent: "center", marginTop: 32 }}>Подробнее <ArrowRight /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="section__inner" style={{ maxWidth: 768, margin: "0 auto" }}>
          <div className="section__header section__header--center">
            <div className="icon-box icon-box--lg"><Calculator /></div>
            <h2 className="section__title">Ипотечный калькулятор</h2>
            <p className="section__subtitle section__subtitle--center">Рассчитайте ежемесячный платёж по ипотеке</p>
          </div>
          <div className="calc">
            <div style={{ marginBottom: 32 }}>
              <div className="calc__slider-header">
                <label className="calc__slider-label">Стоимость квартиры</label>
                <span className="calc__slider-value">${amount.toLocaleString()}</span>
              </div>
              <input type="range" min={10000} max={500000} step={5000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="calc__range" />
              <div className="calc__range-labels"><span>$10,000</span><span>$500,000</span></div>
            </div>
            <div>
              <div className="calc__slider-header">
                <label className="calc__slider-label">Срок кредита</label>
                <span className="calc__slider-value">{term} лет</span>
              </div>
              <input type="range" min={1} max={15} step={1} value={term} onChange={(e) => setTerm(Number(e.target.value))} className="calc__range" />
              <div className="calc__range-labels"><span>1 год</span><span>15 лет</span></div>
            </div>
            <div className="calc__result">
              <p className="calc__result-label">Ежемесячный платёж</p>
              <p className="calc__result-value">${monthlyPayment.toLocaleString()}</p>
              <p className="calc__result-note">* Расчёт приблизительный. Для точных условий обратитесь в отдел продаж.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
