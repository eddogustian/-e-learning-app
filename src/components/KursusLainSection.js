import React from "react";
import line from "./../assets/images/line.png";

const KursusLain = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h4>Kursus lainnya</h4>
          <img src={line} className="line" alt="line" width="11.5%" />
        </div>
      </div>
    </div>
  );
};
export default KursusLain;
