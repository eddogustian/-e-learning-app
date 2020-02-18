import React from "react";

const Tabs = () => {
  return (
    <section id="tabs">
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
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Tentang
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Konten
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  persyaratan
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-about-tab"
                  data-toggle="tab"
                  href="#nav-about"
                  role="tab"
                  aria-controls="nav-about"
                  aria-selected="false"
                >
                  Ulasan
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tabs;
