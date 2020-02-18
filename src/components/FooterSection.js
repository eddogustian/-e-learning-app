import React from "react";
import fb from "./../assets/images/sosmed/fb.png";
import tw from "./../assets/images/sosmed/tw.png";
import yt from "./../assets/images/sosmed/yt.png";
import ig from "./../assets/images/sosmed/ig.png";
import ln from "./../assets/images/sosmed/ln.png";
import appstore from "./../assets/images/appstore.png";
import playstore from "./../assets/images/playstore.png";

const Footer = () => {
  return (
    <footer id="footer" className="py-4 bg-footer-cermati text-white-50">
      <div className="container text-center">
        <div className="row">
          <div className="col-auto mr-auto"></div>
          <div className="col-auto">
            <div className="foot-link-download">
              <ul>
                <li className="playstore">
                  <a href="/#">
                    <img
                      src={playstore}
                      className="playstore"
                      alt="playstore"
                      width="11.5%"
                    />
                  </a>
                </li>
                <li className="appstore">
                  <a href="/#">
                    <img
                      src={appstore}
                      className="appstore"
                      alt="appstore"
                      width="10%"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="foot-link-sosmed">
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
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
