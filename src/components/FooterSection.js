import React from "react";
import fb from "./../assets/images/sosmed/fb.png";
import tw from "./../assets/images/sosmed/tw.png";
import yt from "./../assets/images/sosmed/yt.png";
import ig from "./../assets/images/sosmed/ig.png";
import ln from "./../assets/images/sosmed/ln.png";
import appstore from "./../assets/images/appstore.png";
import playstore from "./../assets/images/playstore.png";
import globe from "./../assets/images/persyaratan/globe.png";
const Footer = () => {
  return (
    <section id="footer" className="py-4 bg-footer-learning text-white-50">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="clearfix">
              <div className="foot-link-sosmed float-md-right">
                <div className="link-download">
                  <ul>
                    <li className="list-app">
                      <a href="/#">
                        <img
                          src={playstore}
                          className="playstore"
                          alt="playstore"
                          width="90"
                        />
                      </a>
                    </li>
                    <li className="list-app">
                      <a href="/#">
                        <img
                          src={appstore}
                          className="appstore"
                          alt="appstore"
                          width="75"
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="link-sosmed">
                  <ul>
                    <li className="fb">
                      <a href="/#">
                        <img
                          src={fb}
                          className="facebook"
                          alt="icon-fb"
                          width="70%"
                        />
                      </a>
                    </li>
                    <li className="ig">
                      <a href="/#">
                        <img
                          src={ig}
                          className="instagram"
                          alt="icon-ig"
                          width="100%"
                        />
                      </a>
                    </li>
                    <li className="yt">
                      <a href="/#">
                        <img
                          src={yt}
                          className="youtube"
                          alt="icon-yt"
                          width="100%"
                        />
                      </a>
                    </li>
                    <li className="tw">
                      <a href="/#">
                        <img
                          src={tw}
                          className="twitter"
                          alt="icon-tw"
                          width="100%"
                        />
                      </a>
                    </li>
                    <li className="lin">
                      <a href="/#">
                        <img
                          src={ln}
                          className="linkedln"
                          alt="icon-ln"
                          width="100%"
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="link-bahasa">
                  <div className="dropdown">
                    <button
                      className="btn btn-bahasa dropdown-toggle"
                      id="bahasa"
                      type="button"
                      data-toggle="dropdown"
                    >
                      {" "}
                      <img
                        src={globe}
                        className="globef"
                        alt="icon-globe"
                        width="17"
                      />{" "}
                      &nbsp; Bahasa Indonesia
                      <span className="caret"></span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      role="menu"
                      aria-labelledby="bahasa"
                    >
                      <li role="presentation">
                        <a
                          role="menuitem"
                          className="bahasa-title"
                          tabindex="-1"
                          href="/#"
                        >
                          Bahasa Inggris
                        </a>
                      </li>
                    </ul>
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
export default Footer;
