import React from "react";
import line from "./../assets/images/line.png";
import globe from "./../assets/images/persyaratan/globe.png";
import trending from "./../assets/images/persyaratan/trending-up.png";
import users from "./../assets/images/persyaratan/users.png";

const Persyaratan = () => {
  return (
    <section className="contentPersyaratan" id={"persyaratan"}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Persyaratan Kursus </h4>
            <img src={line} className="line" alt="line" width="100" />
            <div className="mt-4">
              <h5>Kursus ini memiliki 3 Persyaratan, diantaranya :</h5>
              <ul>
                <li>
                  <img src={globe} className="globe" alt="globe" width="20" />
                  <span>Menggunakan Bahasa Indonesia</span>
                </li>
                <li>
                  <img
                    src={trending}
                    className="trending"
                    alt="trending"
                    width="20"
                  />
                  <span>Level Pemula</span>
                </li>
                <li>
                  <img src={users} className="users" alt="users" width="20" />
                  <span>Pesrta adalah semua orang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Persyaratan;
