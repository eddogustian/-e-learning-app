import React from "react";
import line from "./../assets/images/line.png";
import globe from "./../assets/images/persyaratan/globe.png";
import trending from "./../assets/images/persyaratan/trending-up.png";
import users from "./../assets/images/persyaratan/users.png";

const Persyaratan = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h4>Persyaratan Kursus </h4>
          <img src={line} className="line" alt="line" width="1.5%" />
          <di>
            <h4>Kursus ini memiliki 3 Persyaratan, diantaranya :</h4>
            <ul>
              <li>
                <img src={globe} className="line" alt="line" width="1.5%" />
                Menggunakan Bahasa Indonesia
              </li>
              <li>
                <img src={trending} className="line" alt="line" width="1.5%" />
                Level Pemula
              </li>
              <li>
                <img src={users} className="line" alt="line" width="1.5%" />
                Pesrta adalah semua orang
              </li>
            </ul>
          </di>
        </div>
      </div>
    </div>
  );
};
export default Persyaratan;
