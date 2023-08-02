import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import { BiMap } from "react-icons/bi";
import axios from "axios";
import Swal from "sweetalert2";


function Hirejob() {
const [user, setUser] = React.useState("")
const state = useSelector((state) => state)
const router = useRouter()

React.useEffect(() =>{
  if(Object.keys(state.dataAuth.data).lenght == 0){
    router.push("/login")
  }else{
    setUser(state.dataAuth.data)
  }
})

console.log(router);

const [subject, setSubject] = React.useState();
const [description, setDescription] = React.useState();

const hendleHire =()=>{
  const token = localStorage.getItem("token");
  axios
    .post(
      "https://hire-job.onrender.com/v1/contact/1",
      {
        subject: subject,
        description: description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => {
      Swal.fire({
        title: "Update Success!",
        text: res?.data?.messages,
        icon: "success",
      });
      console.log(res?.data?.messages);
       router.push("/homeAkun");
    })
    .catch((err) => {
      console.log(err);
    });
}

    return (
      <div style={{ backgroundColor: "#E5E5E5" }}>
        {/* start navbar */}
        <Navbar />
        {/* end navbar */}

        {/* start content */}
        <div className="container mt-5 mb-5">
          <div className="row">
            {/* start content life */}
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

                <h1 style={{ fontSize: "30px", marginTop: "30px" }}>
                  {user.fullname}
                </h1>
                <p>{user.job_title}</p>
                <p classname="text-muted">
                  <BiMap /> {user.domicile}
                </p>

                <p className="text-black-50">{user.description}</p>

                <h2 style={{ fontSize: "18px" }}>Keterampilan</h2>

                <div className="d-inline">
                  {user?.skills?.map((item, key) => (
                    <span key={key} class="badge bg-warning me-1 p-2 ">
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
                <h3>Hubungi {user.fullname}</h3>
                <p>
                  Kirimkan pesan untuk rekruter yang sesuai dengan kriteria
                  perushaan anda.
                </p>

                <div className="text-muted" style={{ fontSize: "14px" }}>
                  <p for="inputtext5" class="form-label">
                    Tujuan tentang pesan ini
                  </p>
                  <input
                    type="text"
                    id="inputtext5"
                    class="form-control"
                    aria-labelledby="textHelpBlock"
                    placeholder="Projek"
                    style={{ fontSize: "14px" }}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  {/* <p for="inputtext5" class="form-label mt-3">
                    Nama Lengkap
                  </p>
                  <input
                    type="text"
                    id="inputtext5"
                    class="form-control"
                    aria-labelledby="textHelpBlock"
                    placeholder="Masukan nama lengkap"
                    style={{ fontSize: "14px" }}
                  ></input> */}

                  {/* <p for="inputtext5" class="form-label  mt-3">
                    Email
                  </p>
                  <input
                    type="Email"
                    id="inputtext5"
                    class="form-control"
                    aria-labelledby="textHelpBlock"
                    placeholder="Masukan email"
                    style={{ fontSize: "14px" }}
                  ></input> */}

                  {/* <p for="inputtext5" class="form-label mt-3">
                    No Handphone
                  </p>
                  <input
                    type="text"
                    id="inputtext5"
                    class="form-control"
                    aria-labelledby="textHelpBlock"
                    placeholder="masukan nomer handphone"
                    style={{ fontSize: "14px" }}
                  ></input> */}

                  <p for="exampleFormControlTextarea1" class="form-label mt-3">
                    Deskripsi
                  </p>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Deskripsikan/jelaskan lebih detail"
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <div class="d-grid gap-2 mt-3">
                    <button
                      type="button"
                      class="btn btn-warning text-light "
                      style={{ fontSize: "14px" }}
                      onClick={hendleHire}
                    >
                      Kirim Pesan
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
