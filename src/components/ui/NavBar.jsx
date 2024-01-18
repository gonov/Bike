import React from 'react';

export default function NavBar({ user }) {
  return (
    <nav
      className="navbar navbar-expand bg-body-tertiary"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"

        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">
              Маршруты
            </a>
            <a className="nav-link" href="/map">
              Карта
            </a>
            {(user && (
              <>
            <a className="nav-link" href={`/profile/${user.id}`}>
              Профиль
            </a>
            <a className="nav-link" href='/add'>
            Добавить
            </a>
            </>
            ))}

            {user ? null : (
              <>
                <a className="nav-link" href="/auth/signup">
                  Регистрация
                </a>
                <a className="nav-link" href="/auth/login">
                  Войти
                </a>
              </>
            )}
            {user && (
              <a className="nav-link" href="/auth/logout">
                Выйти
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
