import React from 'react';
import Link from "next/link";

import NavbarAfterLogin from "@/components/navbarAfterLogin";
import Footer from "@/components/footer";

function EditProfile() {
    return (
      <div id="edit-profile_page" style={{ backgroundColor: "#E5E5E5" }}>
        {/* Strat navbar */}
        <NavbarAfterLogin />
        <div style={{ height: "50%", width: "100%" }}>
          <div className="bg-primary position-absolute" style={{ height: "250px", width: "100%" }}></div>
        </div>
        {/* end navbar */}

        <div className="container mt-5 mb-5">
          <div className="row">
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
                <p className="text-muted text-center mt-3 " style={{ fontSize: "18px" }}>
                  {" "}
                  Edit{" "}
                </p>
                <h5 style={{ fontSize: "20px", marginTop: "30px" }}>Louis Tomlinson</h5>
                <p style={{ fontSize: "14px" }}>Web Developer</p>

                <p className="text-muted-50" style={{ fontSize: "14px" }}>
                  Purwokerto, Jawa Tengah
                </p>
              </div>
              <div className="d-flex flex-column">
                <Link href="/profile" className="btn-lg">
                  <button className="btn btn-primary btn-lg mt-4 mb-2" style={{ width: "100%" }}>
                    Simpan
                  </button>
                </Link>
                <Link href="/profile">
                  <button type="button" className="btn btn-outline-primary btn-lg" style={{ width: "100%" }}>
                    Batal
                  </button>
                </Link>
              </div>

              {/* <h2 style={{ fontSize: "25px" }}>Skills</h2> */}

              {/* <div className="d-inline">
                  {["Phyton", "Laravel", "Golang", "Ruby", "Rust", "Javascript", "Express"].map((item, key) => (
                    <span key={key} class="badge bg-warning m-1 p-2 ">
                      {item}
                    </span>
                  ))}
                </div> */}
            </div>

            <div className="col col-md-8">
              <div className="card p-4 mb-4">
                <h5>Data diri</h5>
                <hr />
                <div className="text-muted" style={{ fontSize: "14px" }}>
                  <p for="inputtext5" class="form-label">
                    Nama Lengkap
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan nama lengkap" style={{ fontSize: "14px" }}></input>

                  <p for="inputtext5" class="form-label mt-3">
                    Job desk
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan job desk" style={{ fontSize: "14px" }}></input>

                  <p for="inputtext5" class="form-label  mt-3">
                    Domisili
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan domisili" style={{ fontSize: "14px" }}></input>

                  <p for="inputtext5" class="form-label mt-3">
                    Tempat kerja
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan tempat kerja" style={{ fontSize: "14px" }}></input>

                  <p for="exampleFormControlTextarea1" class="form-label mt-3">
                    Deskripsi singkat
                  </p>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deskripsikan pekerjaan anda"></textarea>
                </div>
              </div>

              <div className="card p-4 mb-4">
                <h5>Skill</h5>
                <hr />

                <div className="d-flex">
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="ex. java" style={{ fontSize: "14px" }}></input>
                  <button type="button" className="btn btn-warning text-light ms-3" style={{ fontSize: "14px" }}>
                    Simpan
                  </button>
                </div>
              </div>

              <div className="card p-4 mb-4">
                <h5>Pengalaman Pekerjaan</h5>
                <hr />

                <div style={{ fontSize: "14px" }}>
                  <p for="inputtext5" class="form-label">
                    Posisi
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="ex. Web developer" style={{ fontSize: "14px" }}></input>

                  <div class="row">
                    <div class="col">
                      <p for="inputtext5" class="form-label mt-3">
                        Nama perusahaan
                      </p>
                      <input type="text" class="form-control" placeholder="ex. PT Harus bisa" aria-label="First name" style={{ fontSize: "14px" }} />
                    </div>
                    <div class="col">
                      <p for="inputtext5" class="form-label mt-3">
                        Bulan/tahun
                      </p>
                      <input type="text" class="form-control" placeholder="ex. Januari 2018" aria-label="Last name" style={{ fontSize: "14px" }} />
                    </div>
                    <p for="exampleFormControlTextarea1" class="form-label mt-3">
                      Example textarea
                    </p>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                    <hr />

                    <div class="d-grid gap-2">
                      <button type="button" class="btn btn-outline-warning" style={{ fontSize: "14px" }}>
                        Tambah pengalaman kerja
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h5>Portofolio</h5>
                <hr />
                <div style={{ fontSize: "14px" }}>
                  <p for="exampleFormControlTextarea1" class="form-label">
                    Nama aplikasi
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan nama aplikasi" style={{ fontSize: "14px" }}></input>

                  <p for="exampleFormControlTextarea1" class="form-label mt-3">
                    Link repositoty
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan link repositoty" style={{ fontSize: "14px" }}></input>

                  <p for="exampleFormControlTextarea1" class="form-label mt-3">
                    Link repositoty
                  </p>
                  <div className="d-flex ">
                    <div class="form-check ">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ fontSize: "14px" }} />
                      <p class="form-check-label" for="flexRadioDefault1">
                        Aplikasi mobile
                      </p>
                    </div>
                    <div class="form-check ms-3">
                      <p class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked style={{ fontSize: "14px" }} />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Aplikasi web
                      </label>
                    </div>
                  </div>

                  <label for="exampleFormControlTextarea1" class="form-label mt-3">
                    Upload gambar
                  </label>
                  <div style={{ width: "100%", height: "50px", border: "2px dashed #E5E5E5" }}></div>

                  <hr />
                  <div class="d-grid gap-2">
                    <button type="button" class="btn btn-outline-warning" style={{ fontSize: "14px" }}>
                      Tambah portofolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    );
}

export default EditProfile
