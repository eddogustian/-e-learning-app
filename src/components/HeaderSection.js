import React from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

const Header = () => {
  return (
    <StickyHeader
      // This is the sticky part of the header.
      header={
        <nav className="navbar navbar-expand-lg navbar-light" id="header">
          <a className="navbar-brand" href="/#">
            ylreal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Kategori
                </a>
              </li>
              <form className="form-inline my-2 my-lg-0" id="btnCari">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Cari"
                  aria-label="Search"
                ></input>
              </form>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Sebagai Instruktur
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <button
                    className="btn my-2 my-sm-0"
                    id="btnMasuk"
                    type="submit"
                  >
                    Masuk
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <button
                    className="btn my-2 my-sm-0"
                    id="btnDaftar"
                    type="submit"
                  >
                    Daftar
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      }
    >
      <section>
        <h2>
          Rumah Lilin : Manajemen Kinerja Individu Berbasis Balanced Scorecard
          (BSC)
        </h2>
      </section>
    </StickyHeader>
  );
};
export default Header;
