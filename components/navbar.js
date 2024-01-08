import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { useRouter } from "next/router";
 
function Navbar() {
  const [auth, setAuth] = React.useState("")
  const [dataUser, setDataUser] = React.useState("")
  const state = useSelector((state) => state)
  const router = useRouter();
  
  const hendleLogout = () =>{
    localStorage.clear()
    window.location.href = "/login"
  }

  React.useEffect(() => {
    const auth = state?.dataAuth?.data;
    const keys = Object?.keys(auth)?.length;
    console.log(keys)
    setAuth(keys);
    setDataUser(auth) 
  })

  const hendlePhoto = (event) =>{
    event(dataUser.photo)
  }

    return (
      <div className="bg-white navbarMargin pb-3">
        <nav className="container pt-3">
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/">
              <img src="/logo.png" alt="logo" />
            </Link>

            {auth != 0 ? (
              <div key={1} id="NavbarAfterLogin">
                <Link href="#">
                  <AiOutlineBell
                    className="text-muted me-3"
                    style={{
                      height: "25px",
                      width: "25px",
                    }}
                  />
                </Link>
                <Link href="#">
                  <AiOutlineMail
                    className="text-muted me-3"
                    style={{
                      height: "25px",
                      width: "25px",
                    }}
                  />
                </Link>

                <div className="dropdown">
                  <img
                    src={dataUser.photo}
                    alt="foto profile"
                    className="rounded-circle "
                    style={{
                      height: "25px",
                      width: "25px",
                    }}
                  />
                  <div className="dropdownContent card" style={{ right: 0 }}>
                    <Link href="/profile" className="mb-2 text-decoration-none color-primary menuNavbar">
                      Profile
                    </Link>
                    <br />
                    <Link href="/editProfile" className="mb-2 text-decoration-none color-primary menuNavbar">
                      Edit Profile
                    </Link>
                    <br />
                    <Link href="/homeAkun" className="mb-2 text-decoration-none color-primary menuNavbar">
                      Top Job
                    </Link>
                    <br />
                    <Link href="" className="mb-2 text-decoration-none color-primary menuNavbar" onClick={hendleLogout}>
                      Logout
                    </Link>
                  </div>
                </div>
                
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <button className="btn btn-outline-primary" style={{ marginRight: "10px" }}>
                    Masuk
                  </button>
                </Link>
                <Link href="/register">
                  <button button className="btn btn-primary">
                    Daftar
                  </button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
}

export default Navbar
