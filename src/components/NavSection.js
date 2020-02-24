import React from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import ylreal from "./../assets/images/ylreal.png";
import ktgr from "./../assets/images/header/grid.png";
import foto from "./../assets/images/header/Rectangle 157.png";
import clock from "./../assets/images/header/clock.png";
import cart from "./../assets/images/header/mdi-light_cart.png";

import edit from "./../assets/images/checkout/edit.png";
import file from "./../assets/images/checkout/file-text.png";
import monitor from "./../assets/images/checkout/monitor.png";
import unlock from "./../assets/images/checkout/unlock.png";
import video from "./../assets/images/checkout/video.png";

const Navigation = () => {
  return (
    <StickyHeader
      header={
        <nav className="navbar navbar-expand-lg navbar-light" id="header">
          <div className="container">
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item m-auto">
                  <img src={ktgr} className="ktgr" alt="ktgr" width="20" />
                </li>
                <li className="nav-item m-auto titleName">Kategori</li>
                <li className="nav-item m-auto">
                  <form className="form-inline my-2 my-lg-0" id="btnCari">
                    <div className="ui icon input cari">
                      <input type="text" size="big" placeholder="Search..." />
                      <i aria-hidden="true" className="search icon"></i>
                    </div>
                  </form>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item m-auto titleName">
                  Sebagai Instruktur
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <div className="vl"></div>
                  </a>
                </li>
                <li className="nav-item m-auto">
                  <a className="nav-link" href="/#">
                    <img src={cart} className="cart" alt="cart" width="20" />
                  </a>
                </li>
                <li className="nav-item masuk">
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
                <li className="nav-item daftar">
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
              <div className="_headerContet mt-4">
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
              <div className="card" id="cardMain">
                <img className="card-img-top" src={foto} alt="foto" />
                <div className="card-body">
                  <h5 className="card-title">Jenis Kursus :</h5>
                  <div className="card-text">
                    <p className="float-right">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="exampleRadios1"
                        >
                          Kursus Komplit
                        </label>
                      </div>
                    </p>
                    <p className="float-left">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          for="exampleRadios2"
                        >
                          Kursus Pendek
                        </label>
                      </div>
                    </p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 info">
                    <p className="desc">Detail harga kursus pendek</p>
                    <p className="price">Rp 20.000</p>
                    <p>
                      <img
                        src={clock}
                        className="clock"
                        alt="clock"
                        width="20"
                      />
                      <span className="time">
                        <b>8 hari</b> dengan harga ini
                      </span>
                    </p>
                  </li>
                  <li className="list-group-item border-0 action">
                    <button type="button" className="btnCart">
                      Tambah ke Keranjang
                    </button>
                  </li>
                  <li className="list-group-item border-0 action">
                    <button type="button" className="btnBuy">
                      Beli Sekarang
                    </button>
                  </li>
                </ul>
                <div className="card-body listKursus">
                  <h5 className="card-title">Kursus ini terdiri dari :</h5>
                  <div className="card-text listKursusText">
                    <p>
                      <img
                        src={video}
                        className="video"
                        alt="video"
                        width="17"
                      />
                      <span className="listKursusDesc">
                        30 Menit durasi video
                      </span>
                    </p>
                    <p>
                      <img src={file} className="file" alt="file" width="17" />
                      <span className="listKursusDesc">5 Materi Bacaan</span>
                    </p>
                    <p>
                      <img
                        src={unlock}
                        className="unlock"
                        alt="unlock"
                        width="17"
                      />
                      <span className="listKursusDesc">Akses seumur hidup</span>
                    </p>
                    <p>
                      <img
                        src={monitor}
                        className="monitor"
                        alt="monitor"
                        width="17"
                      />
                      <span className="listKursusDesc">
                        Akses diwebsite dan mobile
                      </span>
                    </p>
                    <p>
                      <img src={edit} className="edit" alt="edit" width="17" />
                      <span className="listKursusDesc">Tugas</span>
                    </p>
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
