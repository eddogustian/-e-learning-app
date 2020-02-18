import React from "react";
import line from "./../assets/images/line.png";
import people from "./../assets/images/pembuatkursus/people.png";
import message from "./../assets/images/pembuatkursus/message-circle.png";
import user from "./../assets/images/pembuatkursus/user.png";
import layer from "./../assets/images/pembuatkursus/layers.png";

const PembuatKursus = () => {
  return (
    <section className="contentPembuatKusus" id="pembuatKursus">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4>Pembuat Kursus </h4>
            <img src={line} className="line" alt="line" width="100" />
            <div className="card mb-3 mt-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div className="col-md-5">
                    <img src={people} className="card-img" alt="people" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">xxxxxxxxxxx</h5>
                    <p className="card-text">Instruktur</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 d-flex flex-row">
                      <div class="p-2">
                        <img
                          src={message}
                          className="message"
                          alt="message"
                          width="20"
                        />
                      </div>
                      <div class="p-2">11</div>
                      <div class="p-2">Ulasan</div>
                    </li>
                    <li className="list-group-item border-0  d-flex flex-row">
                      <div class="p-2">
                        <img
                          src={user}
                          className="user"
                          alt="user"
                          width="20"
                        />
                      </div>
                      <div class="p-2">11</div>
                      <div class="p-2">Peserta Kursus</div>
                    </li>
                    <li className="list-group-item border-0  d-flex flex-row">
                      <div class="p-2">
                        <img
                          src={layer}
                          className="layer"
                          alt="layer"
                          width="20"
                        />
                      </div>
                      <div class="p-2">10</div>
                      <div class="p-2">Kursus</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
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
export default PembuatKursus;
