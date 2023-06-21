import React from 'react'
import Link from "next/link";

import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineBell } from "react-icons/ai";

function NavbarAfterLogin() {
    return (
      <div id="NavbarAfterLogin" className="bg-white pb-3" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <nav className="container pt-3">
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/">
              <img src="/logo.png" alt="logo" />
            </Link>

            <div>
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
              {/* <Link href="/profile">
                <img
                  src="/fotoProfile.webp"
                  alt="foto profile"
                  className="rounded-circle"
                  style={{
                    height: "25px",
                    width: "25px",
                  }}
                />
              </Link> */}

              <div className="dropdown">
                <img
                  src="/fotoProfile.webp "
                  alt="foto profile"
                  className="rounded-circle "
                  style={{
                    height: "25px",
                    width: "25px",
                  }}
                />
                <div className="dropdownContent card" style={{ right: 0 }}>
                  <Link href="/profile" className="mb-2 text-decoration-none">
                    Profile
                  </Link>
                  <br />
                  <Link href="/editProfile" className="mb-2 text-decoration-none">
                    Edit Profile
                  </Link>
                  <br />
                  <Link href="/homeAkun" className="mb-2 text-decoration-none">
                    Top Job
                  </Link>
                </div>
              </div>

              {/* <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul class="dropdown-menu" style={{zIndex: 1}}>
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavbarAfterLogin
