import React from "react";
const Tabs = () => {
  return (
    <section id={"Menu"}>
      <div className="container">
        <ol className="breadcrumb purple lighten-4">
          <li className="bred-item">
            <a className="black-text" href="/#">
              Semua Kursus
            </a>
            <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
          </li>
          <li className="bred-item">
            <a className="black-text" href="/#">
              Strategy
            </a>
            <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
          </li>
          <li className="bred-item active">Detail</li>
        </ol>
        <div className="row">
          <div className="col-xs-12 col-md-9">
            <div class="_menu" id="_menu">
              <ul class="_menuChild mt-5">
                <li class="nav-item">
                  <a class="Navlink js-scroll-trigger" href="#tentang">
                    Our Benefit
                  </a>
                </li>
                <li class="nav-item">
                  <a class="Navlink js-scroll-trigger" href="#konten">
                    Our Client
                  </a>
                </li>
                <li class="nav-item">
                  <a class="Navlink js-scroll-trigger" href="#persyaratan">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="Navlink js-scroll-trigger" href="#ulasan">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tabs;
