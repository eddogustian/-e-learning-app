import React from "react";
import line from "./../assets/images/line.png";

const Tentang = () => {
  return (
    <section className="ContentTentang" id={"tentang"}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Tentang Kursus</h4>
            <img src={line} className="line" alt="line" width="100" />
            <p>
              Program ini menjelaskan Manajemen Kinerja Individu berbasis
              Balanced Scorecard lewat sebuah studi kasus Rumah Lilin, sehingga
              mudah untuk dipahami dan diadaptasi dalam organisasi Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tentang;
