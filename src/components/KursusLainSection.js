import React from "react";
import line from "./../assets/images/line.png";
import gambarone from "./../assets/images/kursuslain/gambar1.png";
import gambartwo from "./../assets/images/kursuslain/gambar2.png";
import gambarthree from "./../assets/images/kursuslain/gambar3.png";
import fotosatu from "./../assets/images/kursuslain/foto1.png";
import fotodua from "./../assets/images/kursuslain/foto2.png";
import fototiga from "./../assets/images/kursuslain/foto3.png";

const KursusLain = () => {
  return (
    <section className="contentKursusLain" id="kursusLain">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4>Kursus lainnya</h4>
            <img src={line} className="line" alt="line" width="100" />
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="card mb-4">
                  <img
                    className="card-img-top"
                    src={gambarone}
                    alt="GambarOne"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Innovative People : Boosting Your Business
                    </h5>
                    <a href="/#" className="btn btn-sm btn-kursuslain">
                      Motivation
                    </a>
                    <p className="card-text">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            className="fotosatu"
                            src={fotosatu}
                            alt="fotosatu"
                            width="40"
                          />
                        </div>
                        <div class="p-2 titleName">
                          <h5>Cyntha Aghta</h5>
                          <p>Instruktur</p>
                          <div className="rating">
                            <p className="star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="countUlas">(11 Ulasan)</span>
                            </p>
                            <p className="priceAwal">Rp 200.00</p>
                            <p className="discont">Rp 100.000</p>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img
                    className="card-img-top"
                    src={gambartwo}
                    alt="GambarTwo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Innovative People : Boosting Your Business
                    </h5>
                    <a href="/#" className="btn btn-sm btn-kursuslain">
                      Motivation
                    </a>
                    <p className="card-text">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            className="fotodua"
                            src={fotodua}
                            alt="fotodua"
                            width="40"
                          />
                        </div>
                        <div class="p-2 titleName">
                          <h5>Cyntha Aghta</h5>
                          <p>Instruktur</p>
                          <div className="rating">
                            <p className="star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="countUlas">(11 Ulasan)</span>
                            </p>
                            <p className="priceAwal">Rp 200.00</p>
                            <p className="discont">Rp 100.000</p>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img
                    className="card-img-top"
                    src={gambarthree}
                    alt="GambarThree"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Innovative People : Boosting Your Business
                    </h5>
                    <a href="/#" className="btn btn-sm btn-kursuslain">
                      Motivation
                    </a>
                    <p className="card-text">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            className="fototiga"
                            src={fototiga}
                            alt="fototiga"
                            width="40"
                          />
                        </div>
                        <div class="p-2 titleName">
                          <h5>Cyntha Aghta</h5>
                          <p>Instruktur</p>
                          <div className="rating">
                            <p className="star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="countUlas">(11 Ulasan)</span>
                            </p>
                            <p className="priceAwal">Rp 200.00</p>
                            <p className="discont">Rp 100.000</p>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KursusLain;
