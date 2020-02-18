import React from "react";
import line from "./../assets/images/line.png";
import gambarone from "./../assets/images/kursuslain/gambar1.png";
import gambartwo from "./../assets/images/kursuslain/gambar2.png";
import gambarthree from "./../assets/images/kursuslain/gambar3.png";

const KursusLain = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h4>Kursus lainnya</h4>
          <img src={line} className="line" alt="line" width="11.5%" />
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img className="card-img-top" src={gambarone} alt="GambarOne" />
                <div className="card-body">
                  <h5 className="card-title">
                    Innovative People : Boosting Your Business
                  </h5>
                  <a href="/#" className="btn btn-sm btn-kursuslain">
                    Motivation
                  </a>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img className="card-img-top" src={gambartwo} alt="GambarTwo" />
                <div className="card-body">
                  <h5 className="card-title">
                    Innovative People : Boosting Your Business
                  </h5>
                  <a href="/#" className="btn btn-sm btn-kursuslain">
                    Motivation
                  </a>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KursusLain;
