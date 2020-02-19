import React from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import ylreal from "./../assets/images/ylreal.png";
import ktgr from "./../assets/images/header/grid.png";
import foto from "./../assets/images/header/Rectangle 157.png";
import clock from "./../assets/images/header/clock.png";

const Navigation = () => {
  return (
    <StickyHeader
      // This is the sticky part of the header.
      header={
        <nav className="navbar navbar-expand-lg navbar-light" id="header">
          <a className="navbar-brand" href="/#">
            <img src={ylreal} className="ylreal" alt="ylreal" width="100" />
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
                  <img src={ktgr} className="ktgr" alt="ktgr" width="20" />
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
      <section className="header" id="headerCta">
        <div className="container">
          <div className="row">
            <div className="col-md-8" id="headerContent">
              <div className="title-content">
                <h2>
                  Rumah Lilin : Manajemen Kinerja Individu Berbasis Balanced
                  <br></br>
                  Scorecard (BSC)
                </h2>
              </div>
              <div className="_headerContet">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="title-rating">
                  5 (11 Ratings), 11 Peserta Terdaftar
                </span>
                <span className="desc-rating">
                  <h2>
                    Dibuat oleh Suwardi Luis, terakhir diperbaharui 6/2019
                  </h2>
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={foto} alt="foto" />
                <div className="card-body">
                  <h5 className="card-title">Jenis Kursus :</h5>
                  <div className="card-text">
                    <p className="float-right">Kursus Komplit</p>
                    <p className="float-left">Kursus Pendek</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <p>Detail harga kursus pendek</p>
                    <p>Rp 20.000</p>
                    <p>
                      <img src={clock} className="ktgr" alt="ktgr" width="20" />
                      8 hari dengan harga ini
                    </p>
                  </li>
                  <li className="list-group-item">
                    <button type="button">Tambah ke Keranjang</button>
                  </li>
                  <li className="list-group-item">
                    <button type="button">Beli Sekarang</button>
                  </li>
                </ul>
                <div className="card-body">
                  <h5 className="card-title">Kursus ini terdiri dari :</h5>
                  <div className="card-text">
                    <p>30 Menit durasi video</p>
                    <p>5 Materi Bacaan</p>
                    <p>Akses seumur hidup</p>
                    <p>Akses diwebsite dan mobile</p>
                    <p>Tugas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StickyHeader>
  );
};
export default Navigation;
