import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import axios from "axios";
import Swal from "sweetalert2";
import { eddAuth } from "@/store/reducers/dataAuth";

function EditProfile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state) => state);
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    if (
      Object.keys(state.dataAuth.data) ==
      // &&
      // !localStorage.getItem("token")
      0
    ) {
      router.push("/login");
    } else {
      setUser(state.dataAuth.data);
      // const token = localStorage.getItem("token");
      // console.log(token);
      // console.log(state?.dataAuth.data)
    }
  });

  //Start Update Profile
  const [fullname, setFullname] = React.useState(user?.fullname);
  const [company, setCompany] = React.useState(user?.company);
  const [job_title, setJob_title] = React.useState(user?.job_title);
  const [phone, setPhone] = React.useState(user?.phone);
  const [description, setDescription] = React.useState(user?.description);
  const [domicile, setDomicile] = React.useState(user?.domicile);

  const hendleUpdate = () => {
    // console.log(state.dataAuth);
    const formData = new FormData();
    const token = localStorage.getItem("token");
    axios
      .patch(
        "https://hire-job.onrender.com/v1/profile",
        {
          fullname: fullname ?? user.fullname,
          phone: phone ?? user.phone,
          job_title: job_title ?? user.job_title,
          domicile: domicile ?? user.domicile,
          company: company ?? user.company,
          description: description ?? user.description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        Swal.fire({
          title: "Update Success!",
          text: response?.data?.messages,
          icon: "success",
        });
        console.log(response);
        // setUser(response?.data?.data);
        // dispatch(eddAuth(response?.data?.data));
        // });
         router.push("/profile");

        // window.location.href = "/profile";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //End Update Profile

  //Start Update Photo Profile
  const [photo, setPhoto] = React.useState(user?.photo);
   const hendlePhoto = () => {
        const token = localStorage.getItem("token");
    axios
      .patch(
        "https://hire-job.onrender.com/v1/profile/picture",
        {
          photo: photo ?? user.photo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
   };
  //End Update Photo Profile


  const [skills, setSkills] = React.useState([]);

  const hendleSkills = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://hire-job.onrender.com/v1/skills",
        {
          skills: skills,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [idDelete, setIdDelete] = React.useState();

  console.log(idDelete);
  const hendleSkillsDelete = () => {
    console.log(state);
    const id = user?.skills;
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://hire-job.onrender.com/v1/skills/${id}`,
        {
          skills: skills,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [posisi, setPosisi] = React.useState("");
  const [namaPerusahaan, setNamaPerusahaan] = React.useState("");
  const [lamaBekerja, setLamaBekerja] = React.useState("");
  const [dscrip, setDescrip] = React.useState("");
  const [logo, setlogo] = React.useState("");

  const hendleCompany = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://hire-job.onrender.com/v1/job",
        {
          logo: logo,
          position: posisi,
          company: namaPerusahaan,
          date: lamaBekerja,
          description: dscrip,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hendleCompanyDelete = () => {
    const idCompany = axios
      .delete(`https://hire-job.onrender.com/v1/job/${idCompany}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="edit-profile_page" style={{ backgroundColor: "#E5E5E5" }}>
      {/* Strat navbar */}
      <Navbar />
      <div style={{ height: "50%", width: "100%" }}>
        <div
          className="bg-primary position-absolute"
          style={{ height: "250px", width: "100%" }}
        ></div>
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
              <p
                className="text-muted text-center mt-3 "
                style={{ fontSize: "18px" }}
              >
                <form className="input-group mb-3 mt-3">
                  <input
                    className="form-control h-20"
                    type="file"
                    id="formFileDisabled"
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </form>
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={hendlePhoto}
                >
                  Edit
                </button>
              </p>
              <h5 style={{ fontSize: "20px", marginTop: "30px" }}>
                {user.fullname}
              </h5>
              <p style={{ fontSize: "14px" }}>{user.job_title}</p>

              <p className="text-muted-50" style={{ fontSize: "14px" }}>
                {user.domicile}
              </p>
            </div>
            <div className="d-flex flex-column">
              <Link href="" className="btn-lg">
                <button
                  className="btn btn-primary btn-lg mt-4 mb-2"
                  style={{ width: "100%" }}
                  onClick={hendleUpdate}
                >
                  Simpan
                </button>
              </Link>
              <Link href="/profile">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                  style={{ width: "100%" }}
                >
                  Batal
                </button>
              </Link>
            </div>
          </div>

          <div className="col col-md-8">
            <div className="card p-4 mb-4">
              <h5>Data diri</h5>
              <hr />
              <div className="text-muted" style={{ fontSize: "14px" }}>
                <p for="inputtext5" class="form-label">
                  Nama Lengkap
                </p>
                <input
                  type="text"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Masukan nama lengkap"
                  style={{ fontSize: "14px" }}
                  defaultValue={user?.fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />

                <p for="inputtext5" class="form-label  mt-3">
                  Nomer Telepon
                </p>
                <input
                  type="number"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Masukan nomer telepon"
                  style={{ fontSize: "14px" }}
                  defaultValue={user?.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <p for="inputtext5" class="form-label mt-3">
                  Pekerjaan
                </p>
                <input
                  type="text"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Masukan pekerjaan"
                  style={{ fontSize: "14px" }}
                  defaultValue={user?.job_title}
                  onChange={(e) => setJob_title(e.target.value)}
                />

                <p for="inputtext5" class="form-label  mt-3">
                  Alamat
                </p>
                <input
                  type="text"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Masukan alamat"
                  style={{ fontSize: "14px" }}
                  vdefaultValue={user?.domicile}
                  onChange={(e) => setDomicile(e.target.value)}
                />

                <p for="inputtext5" class="form-label mt-3">
                  Tempat Kerja
                </p>
                <input
                  type="text"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Masukan tempat kerja"
                  style={{ fontSize: "14px" }}
                  defaultValue={user?.company}
                  onChange={(e) => setCompany(e.target.value)}
                />

                <p for="exampleFormControlTextarea1" class="form-label mt-3">
                  Deskripsi Singkat
                </p>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Deskripsikan pekerjaan anda"
                  defaultValue={user?.description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <form className="card p-4 mb-4">
              <h5>Keterampilan</h5>
              <hr />

              <div className="d-flex">
                <input
                  type="text"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Contoh. java"
                  style={{ fontSize: "14px" }}
                  onChange={(e) => setSkills(e.target.value)}
                />

                <button
                  type="button"
                  className="btn btn-warning text-light ms-3"
                  style={{ fontSize: "14px" }}
                  onClick={hendleSkills}
                >
                  Simpan
                </button>
              </div>
              {user?.skills == 0 ? (
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  Belum ada skill
                </div>
              ) : (
                <div className="d-inline">
                  {user?.skills?.map((item, key) => (
                    <span
                      key={key}
                      class="badge bg-warning mt-3 ms-1 p-2 text-center "
                    >
                      {item}
                      <button
                        type="button"
                        className="btn-close ms-2"
                        aria-label="Close"
                        onClick={() => {
                          hendleSkillsDelete, (key = { setIdDelete });
                        }}
                      />
                      {/* <button
                        type="button"
                        class="btn btn-light ms-3 text-md-start"
                        style={{
                          borderRadius: "10px",
                          width: "20px",
                          height: "20px",
                          fontSize: "15px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        <label style={{textAlign:"center"}}>X</label>
                      </button> */}
                    </span>
                  ))}
                </div>
              )}
            </form>

            <form className="card p-4 mb-4">
              <h5>Pengalaman Pekerjaan</h5>
              <hr />

              <div style={{ fontSize: "14px" }}>
                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Masukan gambar logo peruhasaan
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setlogo(e.target.value)}
                  />
                </div>

                <p for="inputtext5" class="form-label">
                  Posisi
                </p>
                <input
                  type="text"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Contoh. Web developer"
                  style={{ fontSize: "14px" }}
                  onChange={(e) => setPosisi(e.target.value)}
                />

                <div class="row">
                  <div class="col">
                    <p for="inputtext5" class="form-label mt-3">
                      Nama perusahaan
                    </p>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Contoh. PT Harus bisa"
                      aria-label="First name"
                      style={{ fontSize: "14px" }}
                      onChange={(e) => setNamaPerusahaan(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <p for="inputtext5" class="form-label mt-3">
                      Bulan/tahun
                    </p>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Contoh. 07-2002"
                      aria-label="Last name"
                      style={{ fontSize: "14px" }}
                      onChange={(e) => setLamaBekerja(e.target.value)}
                    />
                  </div>
                  <p for="exampleFormControlTextarea1" class="form-label mt-3">
                    Deskripsi Pekerjaan
                  </p>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={(e) => setDescrip(e.target.value)}
                  />

                  <div class="d-grid gap-2 mt-3">
                    <button
                      type="button"
                      class="btn btn-outline-warning"
                      style={{ fontSize: "14px" }}
                      onClick={hendleCompany}
                    >
                      Tambah pengalaman kerja
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              {user?.job_history == 0 ? (
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  Belum ada pengalaman kerja
                </div>
              ) : (
                <>
                  {user?.job_history?.map((item, key) => (
                    <div
                      className="row mt-4 descProfile d-flex flex-wrap"
                      key={key}
                    >
                      <div className="row mt-4 mb-4 descProfile d-flex flex-wrap">
                        <div className="col col-md-2">
                          <img src={item.logo} style={{ width: "100%" }} />
                        </div>

                        <div className="col col-md-10">
                          <h5 className="mb-0">
                            {item.position ?? "Pelum ada posisi"}
                          </h5>
                          <p className="mb-0">
                            {item.company ?? "Perusahaan belum ada"}
                          </p>
                          <div className="d-flex align-items-center">
                            <p style={{ color: "#9EA0A5" }}>{item.date}</p>
                            <p style={{ marginLeft: "30px", color: "#9EA0A5" }}>
                              6 months
                            </p>
                          </div>
                          <p>{item.description}</p>

                          {/* {key === company.length - 1 ? null : <hr />} */}
                        </div>
                      </div>
                      {/* <button type="button" className="btn-close" aria-label="Close"></button>*/}
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={hendleCompanyDelete}
                      >
                        Hapus
                      </button>
                    </div>
                  ))}
                </>
              )}
            </form>

            {/* <div className="card p-4">
              <h5>Portofolio</h5>
              <hr />
              <div style={{ fontSize: "14px" }}>
                <p for="exampleFormControlTextarea1" class="form-label">
                  Nama aplikasi
                </p>
                <input
                  type="text"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Masukan nama aplikasi"
                  style={{ fontSize: "14px" }}
                ></input>

                <p for="exampleFormControlTextarea1" class="form-label mt-3">
                  Link repositoty
                </p>
                <input
                  type="text"
                  id="inputtext5"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                  placeholder="Masukan link repositoty"
                  style={{ fontSize: "14px" }}
                ></input>

                <p for="exampleFormControlTextarea1" class="form-label mt-3">
                  Link repositoty
                </p>
                <div className="d-flex ">
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      style={{ fontSize: "14px" }}
                    />
                    <p class="form-check-label" for="flexRadioDefault1">
                      Aplikasi mobile
                    </p>
                  </div>
                  <div class="form-check ms-3">
                    <p
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                      style={{ fontSize: "14px" }}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Aplikasi web
                    </label>
                  </div>
                </div>

                <label
                  for="exampleFormControlTextarea1"
                  class="form-label mt-3"
                >
                  Upload gambar
                </label>
                <div
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "2px dashed #E5E5E5",
                  }}
                ></div>

                <hr />
                <div class="d-grid gap-2">
                  <button
                    type="button"
                    class="btn btn-outline-warning"
                    style={{ fontSize: "14px" }}
                  >
                    Tambah portofolio
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* start footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
}

export default EditProfile;
