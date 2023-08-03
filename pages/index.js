import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import Link from "next/link";

export default function Home() {
  // const hendleCOnter = () =>{

  // }
  return (
    <>
      <div id="home_page">
        {/* start navbar */}
        <Navbar />
        {/* end navbar */}

        {/* Header */}
        <header className="container content-to-center">
          <div className="row d-flex justify-content-between align-items-center flex-wrap-reverse">
            <div className="col-md-5">
              <h1 className="d-block mb-3">
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <p className="d-block mb-5">
                Cara mudah mencari kandidat bertalenta untuk perusahan
              </p>
              <Link href="/homeAkun">
                <button className="btn btn-primary btn-lg">
                  Mulai Dari Sekarang
                </button>
              </Link>
              {/* <button className="btn btn-primary btn-lg" onClick={}>conter :</button> */}
            </div>

            <div className="col-md-5 mb-3">
              <div
                className="position-absolute bgHome"
                style={{
                  marginTop: "10px",
                  height: "58%",
                  width: "31%",
                  backgroundColor: "#E5E5E5",
                  transform: "rotate(20deg)",
                }}
              ></div>
              <div className="position-relative img-fluid">
                <img
                  src="/home_1.jpg"
                  alt="Home Picture"
                  className="img-fluid rounded"
                  style={{ alignSelf: "center" }}
                />
              </div>
            </div>
          </div>
        </header>
        {/* End of Header */}

        {/* Why Peeworld */}
        <section className="container mt-5" style={{ marginBottom: "5%" }}>
          <div className="row">
            <div className="col-md-5">
              <img
                src="/home_2.jpg"
                alt="Home Picture"
                className="img-fluid mb-2 rounded"
              />
            </div>
            <div className="col-md-5">
              <h2 className="mb-5">Kenapa harus mencari tallent di Peworld</h2>

              {[
                "Memiliki berbagai keahlian",
                "Kandidat berkualitas",
                "Proses pencarian kandidat mudah",
                "Kandidat yang bertalenta",
              ].map((item, key) => (
                <div className="d-flex align-items-center mb-3" key={key}>
                  <img src="/circleCheck.svg" style={{ marginRight: "20px" }} />
                  <p className="mb-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Of Why Peeworld */}

        {/* Skill Tallent */}
        <section className="container ">
          <div className="row justify-content-end d-flex flex-wrap-reverse">
            <div className="col-md-5">
              <h2>Skill Tallent</h2>
              <p className="mb-5">Keahlian yang di miliki talenta</p>

              <div className="row">
                <div className="col-md-6 d-flex flex-wrap">
                  {["Java", "Kotlin", "PHP", "Javascript"].map((item, key) => (
                    <div
                      className="d-flex align-items-center mb-3 me-5"
                      key={key}
                    >
                      <img
                        src="/circleCheckYellow.svg"
                        style={{ marginRight: "20px" }}
                      />
                      <p className="mb-0">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="col-md-6 d-flex flex-wrap">
                  {["Golang", "C++", "Ruby", "10+ Bahasa lainnya"].map(
                    (item, key) => (
                      <div
                        className="d-flex align-items-center mb-3 me-5"
                        key={key}
                      >
                        <img
                          src="/circleCheckYellow.svg"
                          style={{ marginRight: "20px" }}
                        />
                        <p className="mb-0">{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-5 mb-3">
              <div
                className="position-absolute bgHome"
                style={{
                  marginTop: "15px",
                  // top: 0,
                  height: "43%",
                  width: "37%",
                  backgroundColor: "#E5E5E5",
                  transform: "rotate(20deg)",
                }}
              ></div>
              <div className="position-relative img-fluid">
                <img
                  src="/home_3.jpg"
                  alt="Home Picture"
                  className="img-fluid rounded"
                  style={{ alignSelf: "center" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Of Skill Tallent */}

        {/* start carosel */}
        <div className="mt-5 mb-5 d-flex justify-content-center">
          <div
            className="bg-primary d-flex justify-content-between align-items-center bgButton"
            style={{ height: "200px", width: "60%", borderRadius: "50px 2px" }}
          >
            <div className="ms-5">
              <p className="text-light " style={{ fontSize: "30px" }}>
                Mau bergabung dengan kami?
              </p>
            </div>
            <Link href="/homeAkun">
              <button
                type="button"
                class="btn btn-light me-5 bgButtonDown"
                style={{ width: "90%",  fontSize: "20px" }}
              >
                Mulai dari sekarang
              </button>
            </Link>
          </div>
        </div>
        <div></div>
        {/* end carosel */}

        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    </>
  );
}
