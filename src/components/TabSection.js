import React from "react";
import home from "./../assets/images/home.png";

const Tabs = () => {
  return (
    <nav id={"Menu"}>
      <div className="container">
        <ol className="breadcrumb purple lighten-4">
          <li className="bred-item">
            <a className="black-text" href="/#">
              <img src={home} className="home" alt="home" width="15" />
            </a>
            <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
          </li>
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
            <div className="_menu" id="_menu">
              <ul className="_menuChild mt-5">
                <li className="nav-item">
                  <a className="Navlink js-scroll-trigger" href="#tentang">
                    Our Benefit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Navlink js-scroll-trigger" href="#konten">
                    Our Client
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Navlink js-scroll-trigger" href="#persyaratan">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Navlink js-scroll-trigger" href="#ulasan">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Tabs;
