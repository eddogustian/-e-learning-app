import React from "react";
import line from "./../assets/images/line.png";
import fotosatu from "./../assets/images/ulasan/foto1.png";
import fotodua from "./../assets/images/ulasan/foto2.png";
import fototiga from "./../assets/images/ulasan/foto3.png";
import fotoempat from "./../assets/images/ulasan/foto4.png";
import fotolima from "./../assets/images/ulasan/foto5.png";

const Ulasan = () => {
  return (
    <section className="contentUlasan" id={"ulasan"}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Ulasan Peserta</h4>
            <img src={line} className="line" alt="line" width="100" />
            <div className="row mt-3">
              <div className="col-xs-12 col-md-3 text-center">
                <h1 className="rating-num">5</h1>
                <div className="rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
                <div className="rating-desc">
                  <h5>1 Peringkat Kursus</h5>
                </div>
              </div>
              <div className="col-xs-12 col-md-9">
                <div className="row rating-desc">
                  <div className="col-xs-8 col-md-8">
                    <div className="checkedProgress progress-striped">
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
                  <div className="col-xs-3 col-md-4 text-right">
                    <div className="d-flex flex-row">
                      <div className="p-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </div>
                      <div className="p-2">
                        <span className="persen"> 100%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-8 col-md-8">
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
                  <div className="col-xs-3 col-md-4 text-right">
                    <div className="d-flex flex-row">
                      <div className="p-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star unchecked"></span>
                      </div>
                      <div className="p-2">
                        <span className="persen">0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-8 col-md-8">
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
                  <div className="col-xs-3 col-md-4 text-right">
                    <div className="d-flex flex-row">
                      <div className="p-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star unchecked"></span>
                        <span className="fa fa-star unchecked"></span>
                      </div>
                      <div className="p-2">
                        <span className="persen">0%</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-8 col-md-8">
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
                  <div className="col-xs-3 col-md-4 text-right">
                    <div className="d-flex flex-row">
                      <div className="p-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star unchecked"></span>
                        <span className="fa fa-star unchecked"></span>
                        <span className="fa fa-star unchecked"></span>
                      </div>
                      <div className="p-2">
                        <span className="persen">0%</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-8 col-md-8">
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
                  <div className="col-xs-3 col-md-4 text-right">
                    <div className="d-flex flex-row">
                      <div className="p-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star unchecked"></span>
                        <span className="fa fa-star unchecked"></span>
                        <span className="fa fa-star unchecked"></span>
                        <span className="fa fa-star unchecked"></span>
                      </div>
                      <div className="p-2">
                        <span className="persen"> 0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
        <div className="row mt-5">
          <div className="col-md-8">
            <div className="row" id="descUlasan">
              <div className="col-xs-12 col-md-3 text-center">
                <div className="d-flex flex-row row">
                  <div className="p-2 col-xs-12 col-md-4 col-xl-6">
                    <img
                      src={fotosatu}
                      className="fotosatu"
                      alt="fotosatu"
                      width="50"
                    />
                  </div>
                  <div className="p-2 col-xs-12 col-md-8 col-xl-6 titleName">
                    <h5>Cynda</h5>
                    <p>1 jam lalu</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-9 descContent">
                <div className="d-flex flex-column">
                  <div className="p-2 star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <div className="p-2 desc">
                    Lorem ipsum dolor sit amet, scaevola lucilius nam ea. Sonet
                    integre nonumes ea vis, nostrum tractatos sit ex, nec ea
                    appetere philosophia. Pro dicta adipisci ei. Est eu ullum
                    vivendo. Nulla eripuit mea ad. Ad cum iracundia posidonium.
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
            <div className="row" id="descUlasan">
              <div className="col-xs-12 col-md-3 text-center">
                <div className="d-flex flex-row row">
                  <div className="p-2 col-xs-12 col-md-4 col-xl-6">
                    <img
                      src={fotodua}
                      className="fotosatu"
                      alt="fotosatu"
                      width="50"
                    />
                  </div>
                  <div className="p-2 col-xs-12 col-md-8 col-xl-6 titleName">
                    <h5>Cynda</h5>
                    <p>1 jam lalu</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-9 descContent">
                <div className="d-flex flex-column">
                  <div className="p-2 star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <div className="p-2 desc">
                    Lorem ipsum dolor sit amet, scaevola lucilius nam ea. Sonet
                    integre nonumes ea vis, nostrum tractatos sit ex, nec ea
                    appetere philosophia. Pro dicta adipisci ei. Est eu ullum
                    vivendo. Nulla eripuit mea ad. Ad cum iracundia posidonium.
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
            <div className="row" id="descUlasan">
              <div className="col-xs-12 col-md-3 text-center">
                <div className="d-flex flex-row row">
                  <div className="p-2 col-xs-12 col-md-4 col-xl-6">
                    <img
                      src={fototiga}
                      className="fotosatu"
                      alt="fotosatu"
                      width="50"
                    />
                  </div>
                  <div className="p-2 col-xs-12 col-md-8 col-xl-6 titleName">
                    <h5>Cynda</h5>
                    <p>1 jam lalu</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-9 descContent">
                <div className="d-flex flex-column">
                  <div className="p-2 star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <div className="p-2 desc">
                    Lorem ipsum dolor sit amet, scaevola lucilius nam ea. Sonet
                    integre nonumes ea vis, nostrum tractatos sit ex, nec ea
                    appetere philosophia. Pro dicta adipisci ei. Est eu ullum
                    vivendo. Nulla eripuit mea ad. Ad cum iracundia posidonium.
                  </div>
                </div>
              </div>
            </div>
            {/* row end  */}
            <div className="row" id="descUlasan">
              <div className="col-xs-12 col-md-3 text-center">
                <div className="d-flex flex-row row">
                  <div className="p-2 col-xs-12 col-md-4 col-xl-6">
                    <img
                      src={fotoempat}
                      className="fotosatu"
                      alt="fotosatu"
                      width="50"
                    />
                  </div>
                  <div className="p-2 col-xs-12 col-md-8 col-xl-6 titleName">
                    <h5>Cynda</h5>
                    <p>1 jam lalu</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-9 descContent">
                <div className="d-flex flex-column">
                  <div className="p-2 star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <div className="p-2 desc">
                    Lorem ipsum dolor sit amet, scaevola lucilius nam ea. Sonet
                    integre nonumes ea vis, nostrum tractatos sit ex, nec ea
                    appetere philosophia. Pro dicta adipisci ei. Est eu ullum
                    vivendo. Nulla eripuit mea ad. Ad cum iracundia posidonium.
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
            <div className="row" id="descUlasan">
              <div className="col-xs-12 col-md-3 text-center">
                <div className="d-flex flex-row row">
                  <div className="p-2 col-xs-12 col-md-4 col-xl-6">
                    <img
                      src={fotolima}
                      className="fotosatu"
                      alt="fotosatu"
                      width="50"
                    />
                  </div>
                  <div className="p-2 col-xs-12 col-md-8 col-xl-6 titleName">
                    <h5>Cynda</h5>
                    <p>1 jam lalu</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-9 descContent">
                <div className="d-flex flex-column">
                  <div className="p-2 star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <div className="p-2 desc">
                    Lorem ipsum dolor sit amet, scaevola lucilius nam ea. Sonet
                    integre nonumes ea vis, nostrum tractatos sit ex, nec ea
                    appetere philosophia. Pro dicta adipisci ei. Est eu ullum
                    vivendo. Nulla eripuit mea ad. Ad cum iracundia posidonium.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </section>
  );
};
export default Ulasan;
