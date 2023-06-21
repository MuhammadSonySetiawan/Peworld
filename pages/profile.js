import React from 'react';
import Link from 'next/link';

import NavbarAfterLogin from '@/components/navbarAfterLogin';
import Footer from "@/components/footer";

import { BiMap } from "react-icons/bi";

function Profile() {
let company = [...new Array(2)];
    return (
      <div id="profile_page" style={{ backgroundColor: "#E5E5E5" }}>
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

                <h1 style={{ fontSize: "30px", marginTop: "30px" }}>Louis Tomlinson</h1>
                <p>Web Developer</p>
                <p classname="text-muted">
                  <BiMap /> Purwokerto, Jawa Tengah
                </p>
                <p>Freelancer</p>

                <p className="text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>

                <Link href="/hirejob" class="d-grid gap-2 mt-3 text-decoration-none">
                  <button className="btn btn-primary btn-lg mb-3">Hire</button>
                </Link>

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

            <div className="col col-md-8">
              <div className="card p-4">
                <ul className="nav nav-underline">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Pengalaman kerja
                    </a>
                  </li>
                </ul>

                {company.map((item, key) => (
                  <div className="row mt-4 descProfile d-flex flex-wrap" key={key}>
                    <div className="col col-md-2">
                      <img src="hiring-1.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="col col-md-10">
                      <h5 className="mb-0">Web Developer</h5>
                      <p className="mb-0">Tokopedia</p>
                      <div className="d-flex align-items-center">
                        <p style={{ color: "#9EA0A5" }}>July 2019 - January 2020</p>
                        <p style={{ marginLeft: "30px", color: "#9EA0A5" }}>6 months</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>

                      {key === company.length - 1 ? null : <hr />}
                    </div>
                  </div>
                ))}
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

export default Profile
