import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
      <div className="bg-white pb-3">
        <nav className="container pt-3">
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/">
                <img src="/logo.png" alt="logo" />
            </Link>

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
          </div>
        </nav>
      </div>
    );
}

export default Navbar
