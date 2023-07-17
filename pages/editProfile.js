import React from 'react';
import Link from "next/link";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'; 

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import axios from 'axios';
import Swal from "sweetalert2";
import { eddAuth } from '@/store/reducers/dataAuth';

function EditProfile() {
  const dispatch = useDispatch()
  const router = useRouter()
  const state = useSelector((state) => state)
  const [user, setUser] = React.useState("")

  const [name, setName] = React.useState("");
  const [tempatKerja, setTempatKerja] = React.useState("");
  const [jobDesk, setJobDesk] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [deskripi, setDeskripi] = React.useState("");
  const [domisili, setDomisili] = React.useState("");

  const [skill, setSkill] = React.useState("");

  React.useEffect(() => {
    if(Object.keys(state.dataAuth.data) == 0){
      router.push("/login")
    }else{
      setUser(state.dataAuth.data)
      
    }
  })

  const hendleUpdate = () =>{
    // console.log(state.dataAuth)

    axios
      .patch("https://hire-job.onrender.com/v1/profile", {
        fullname: name ?? data.fullname,
        company: tempatKerja ?? data.company,
        job_title: jobDesk ?? data.job_title,
        phone: phone ?? data.phone,
        description: deskripi ?? data.description,
        domicile: domisili ?? data.domicile,
      })
      .then(( response ) => {
        console.log(response.config.data);
        Swal.fire({
          title: "Update Success!",
          text: "Update Success ",
          icon: "success",
        });
          dispatch(eddAuth(response.data.data.user));
          console.log(response)
          // router.push("/profile");

        axios
        .get("https://hire-job.onrender.com/v1/profile",)
        .then((response) => {
          console.log(eddAuth(response));
          // dispatch(eddAuth(response.data.data.user));

          // router.push("/profile");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.message ?? "Something wrong Update!",
          icon: "error",
        });
      });
  }

    return (
      <div id="edit-profile_page" style={{ backgroundColor: "#E5E5E5" }}>
        {/* Strat navbar */}
        <Navbar />
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
                    src={user.photo}
                    alt="profile"
                    style={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <p className="text-muted text-center mt-3 " style={{ fontSize: "18px" }}>
                  Edit
                </p>
                <h5 style={{ fontSize: "20px", marginTop: "30px" }}>{user.fullname}</h5>
                <p style={{ fontSize: "14px" }}>{user.job_title}</p>

                <p className="text-muted-50" style={{ fontSize: "14px" }}>
                  {user.domicile}
                </p>
              </div>
              <div className="d-flex flex-column">
                <Link href="" className="btn-lg">
                  <button className="btn btn-primary btn-lg mt-4 mb-2" style={{ width: "100%" }} onClick={hendleUpdate}>
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
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan nama lengkap" style={{ fontSize: "14px" }} onChange={(e) => setName(e.target.value)} />

                  <p for="inputtext5" class="form-label mt-3">
                    Job desk
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan job desk" style={{ fontSize: "14px" }} onChange={(e) => setJobDesk(e.target.value)} />

                  <p for="inputtext5" class="form-label  mt-3">
                    Domisili
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan domisili" style={{ fontSize: "14px" }} onChange={(e) => setDomisili(e.target.value)} />

                  <p for="inputtext5" class="form-label mt-3">
                    Tempat kerja
                  </p>
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="Masukan tempat kerja" style={{ fontSize: "14px" }} onChange={(e) => setTempatKerja(e.target.value)} />

                  <p for="exampleFormControlTextarea1" class="form-label mt-3">
                    Deskripsi singkat
                  </p>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deskripsikan pekerjaan anda" onChange={(e) => setDeskripi(e.target.value)} />
                </div>
              </div>

              <div className="card p-4 mb-4">
                <h5>Skill</h5>
                <hr />

                <div className="d-flex">
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="ex. java" style={{ fontSize: "14px" }} onChange={(e) => setSkill(e.target.value)} />
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
                  <input type="text" id="inputtext5" class="form-control" aria-labelledby="textHelpBlock" placeholder="ex. Web developer" style={{ fontSize: "14px" }} onChange={(e) => setPosisi(e.target.value)} />

                  <div class="row">
                    <div class="col">
                      <p for="inputtext5" class="form-label mt-3">
                        Nama perusahaan
                      </p>
                      <input type="text" class="form-control" placeholder="ex. PT Harus bisa" aria-label="First name" style={{ fontSize: "14px" }} onChange={(e) => setNamaPerusahaan(e.target.value)} />
                    </div>
                    <div class="col">
                      <p for="inputtext5" class="form-label mt-3">
                        Bulan/tahun
                      </p>
                      <input type="text" class="form-control" placeholder="ex. Januari 2018" aria-label="Last name" style={{ fontSize: "14px" }} onChange={(e) => setLamaBekerja(e.target.value)} />
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
