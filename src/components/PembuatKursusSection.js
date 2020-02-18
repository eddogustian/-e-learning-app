import React from "react";
import line from "./../assets/images/line.png";
import people from "./../assets/images/pembuatkursus/people.png";

const PembuatKursus = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h4>Pembuat Kursus </h4>
          <img src={line} className="line" alt="line" width="11.5%" />
          <div class="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="col-md-5">
                  <img src={people} className="card-img" alt="people" />{" "}
                </div>
                <div className="card-body">
                  <h5 className="card-title">xxxxxxxxxxx</h5>
                  <p className="card-text">Instruktur</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item border-0">Ulasan</li>
                  <li class="list-group-item border-0">Peserta Kursus</li>
                  <li class="list-group-item border-0">Kursus</li>
                </ul>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
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
export default PembuatKursus;
