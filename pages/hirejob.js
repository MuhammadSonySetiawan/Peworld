import React from 'react'
import Link from 'next/link';

import Footer from '@/components/footer';
import NavbarAfterLogin from '@/components/navbarAfterLogin';

import { BiMap } from "react-icons/bi";

function Hirejob() {
    return (
      <div style={{ backgroundColor: "#E5E5E5" }}>
        {/* start navbar */}
        <NavbarAfterLogin />
        {/* end navbar */}

        {/* start content */}
        <div className="container mt-5 mb-5">
          <div className="row">
            {/* start content life */}
            <div className="col col-md-4 mb-4">
              <div className="card p-4">
                <div className="d-flex justify-content-center">
                  <img
                    src="/fotoProfile.webp"
                    alt="profile"
                    style={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <h1 style={{ fontSize: "30px", marginTop: "30px" }}>Louis Tomlinson</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.</p>
                <p classname="text-muted">
                  <BiMap /> Purwokerto, Jawa Tengah
                </p>

                <p className="text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>

                <h2 style={{ fontSize: "25px" }}>Skills</h2>

                <div className="d-inline">
                  {["Phyton", "Laravel", "Golang", "Ruby", "Rust", "Javascript", "Express"].map((item, key) => (
                    <span key={key} class="badge bg-warning m-1 p-2 ">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* end content life */}

            {/* strat content right */}
            <div className="col col-md-8">
              <div className="card p-4">
                <h3>Hubungi Louis Tomlinson</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>

                <div className="text-muted" style={{ fontSize: "14px" }}>
                  <p for="inputtext5" class="form-label">
                    Tujuan tentang pesan ini
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Projek" style={{ fontSize: "14px" }}></input>

                  <p for="inputtext5" class="form-label mt-3">
                    Nama Lengkap
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan nama lengkap" style={{ fontSize: "14px" }}></input>

                  <p for="inputtext5" class="form-label  mt-3">
                    Email
                  </p>
                  <input type="Email" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan email" style={{ fontSize: "14px" }}></input>

                  <p for="inputtext5" class="form-label mt-3">
                    No Handphone
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="masukan nomer handphone" style={{ fontSize: "14px" }}></input>

                  <p for="exampleFormControlTextarea1" class="form-label mt-3">
                    Deskripsi
                  </p>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deskripsikan/jelaskan lebih detail"></textarea>

                  <div class="d-grid gap-2 mt-3">
                    <button type="button" class="btn btn-warning text-light " style={{ fontSize: "14px" }}>
                      Hire
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* end content right */}
          </div>
        </div>

        {/* end content */}

        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    );
}

export default Hirejob
