"use client";

import { useState } from "react";
import { User, Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="account">
      <div className="account__inner">
        <div className="account__header">
          <div className="icon-box icon-box--lg"><User /></div>
          <h1 className="account__title">{isLogin ? "Вход в аккаунт" : "Регистрация"}</h1>
          <p className="account__subtitle">{isLogin ? "Войдите в личный кабинет Golden House" : "Создайте аккаунт для отслеживания статуса"}</p>
        </div>

        <div className="account__card">
          <div className="account__tabs">
            <button onClick={() => setIsLogin(true)} className={`account__tab ${isLogin ? "account__tab--active" : "account__tab--inactive"}`}>Вход</button>
            <button onClick={() => setIsLogin(false)} className={`account__tab ${!isLogin ? "account__tab--active" : "account__tab--inactive"}`}>Регистрация</button>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Личный кабинет — демо режим"); }}>
            {!isLogin && (
              <div>
                <label className="account__label">Имя</label>
                <div className="account__input-wrap"><User /><input type="text" placeholder="Введите имя" className="account__input" /></div>
              </div>
            )}
            <div>
              <label className="account__label">Email или телефон</label>
              <div className="account__input-wrap"><Mail /><input type="text" placeholder="Введите email или телефон" className="account__input" /></div>
            </div>
            <div>
              <label className="account__label">Пароль</label>
              <div className="account__input-wrap"><Lock /><input type="password" placeholder="Введите пароль" className="account__input" /></div>
            </div>
            <button type="submit" className="account__submit">
              {isLogin ? "Войти" : "Зарегистрироваться"} <ArrowRight />
            </button>
          </form>

          {isLogin && (
            <p className="account__forgot"><a href="#">Забыли пароль?</a></p>
          )}
        </div>

        <p className="account__back"><Link href="/">Вернуться на главную</Link></p>
      </div>
    </section>
  );
}
