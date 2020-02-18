import React from "react";
import line from "./../assets/images/line.png";

const Ulasan = () => {
  return (
    <section className="contentUlasan">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4>Ulasan Peserta</h4>
            <img src={line} className="line" alt="line" width="11.5%" />
            <div className="row">
              <div className="col-xs-12 col-md-3 text-center">
                <h1 className="rating-num">5</h1>
                <div className="rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
                <div>
                  <span className="glyphicon glyphicon-user"></span>1 Peringkat
                  Kursus
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="row rating-desc">
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>5
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="sr-only">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star checked"></span>4
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="sr-only">60%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star checked"></span>3
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="sr-only">40%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star checked"></span>2
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="sr-only">20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star checked"></span>1
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="sr-only">15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ulasan;
