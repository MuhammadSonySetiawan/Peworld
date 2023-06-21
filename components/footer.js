import React from 'react'
import Link  from 'next/link'

function Footer() {
    return (
      <footer className="bg-primary" style={{ minHeight: "300px" }}>
        <div className="container pt-5">
          <img src="/logo-white.png" alt="logo" />

          <p className="text-white mt-3 mb-5">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In euismod ipsum
            <br /> et dui rhoncus auctor.
          </p>

          <hr style={{ borderBottom: "2px solid white" }} />

          <p className="text-white mt-3">2020 Pewworld. All right reserved</p>
        </div>
      </footer>
    );
}

export default Footer
