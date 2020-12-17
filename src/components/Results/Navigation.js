import React from 'react'

export default function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="page-nav">
        <p className="nav-info">Page {props.pages.currentQuery.currentPage} of {props.pages.totalPages}</p>

        <button
          className="nav-btn"
          onClick={props.navigate.goBackward}
        >{'<'}</button>

        <button
          className="nav-btn"
          onClick={props.navigate.goForward}
        >{'>'}</button>
      </nav>

      <a
        className="db-link"
        href="https://themoviedb.org">
        <img
          className="mdb-logo mdb-logo-large"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
          alt="themovidedb.org logo"
        />
        <img
          className="mdb-logo mdb-logo-small"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="themovidedb.org logo"
        />
      </a>
    </div>
  )
}