import React from "react";
import line from "./../assets/images/line.png";

const Konten = () => {
  return (
    <section className="contentSection" id={"konten"}>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4>Konten Kursus</h4>
            <img src={line} className="line" alt="line" width="100" />
            <div id="accordion" className="accordion">
              <div className="card mb-0 mt-3">
                <div className="card">
                  <div className="card-header">
                    <h5>
                      Rumah Lilin : Manajemen Kinerja Individu Berbasis Balanced
                      Scorecard (BSC)
                    </h5>
                    <p>5 Pelajaran dengan durasi 30 Menit</p>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>1. Pre Test</p>
                    </blockquote>
                  </div>
                </div>
                <div
                  className="card-header card-headers collapsed"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <span className="card-title">
                    <h5>Penejelasan dengan PDF</h5>
                    <p>2 Materi dengan PDF</p>
                  </span>
                </div>
                <div
                  id="collapseOne"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p>2. Tujuan dari Materi 1</p>
                  <p>3. Tujuan dari Materi 2</p>
                </div>
                <div
                  className="card-header card-headers collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <span className="card-title">
                    <h5>Penejelasan dengan Video</h5>
                    <p>2 Materi dengan Video</p>
                  </span>
                </div>
                <div
                  id="collapseTwo"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p>4. Tujuan dari Materi 1</p>
                  <p>5. Tujuan dari Materi 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*container end */}
    </section>
  );
};
export default Konten;
