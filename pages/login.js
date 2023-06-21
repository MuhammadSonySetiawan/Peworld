import Link from "next/link";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
function Login() {
      const router = useRouter();

      const [email, setEmail] = React.useState("");
      const [password, setPassword] = React.useState("");
      const [errMsg, setErrMsg] = React.useState(null);

      const handleLogin = (event) => {
        event.preventDefault();

        axios
          .post("/api/auth/login", { email, password })
          .then((response) => {
            localStorage.setItem("token", response?.data?.token);

            router.replace("/homeAkun");
          })
          .catch(({ response }) => {
            setErrMsg(response?.data?.message ?? "Something wrong in our server");
          });
      };

    return (
      <main id="login_page" className="container">
        <div className="row align-items-center mt-3">

          <div className="col col-md-6">
            <div style={{ position: "relative" }}>
              <div
                className="bg-primary content-to-center"
                style={{
                  height: "95vh",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  opacity: 0.8,
                  padding: "20px",
                }}
              >
                <h1 className="text-white">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
              </div>
            </div>

            <img src="/auth.png" width="100%" style={{ height: "95vh" }} />
          </div>

          <div className="col-md-6 p-4 inputLogin">
            <h2>Halo, Pewpeople</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

            {errMsg ? (
              <div class="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}

            <form onSubmit={handleLogin}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukan alamat email" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div class="mb-5">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Masukan kata sandi" onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <div className="d-grid">
                <button type="submit" class="btn btn-primary btn-lg">
                  Submit
                </button>
              </div>

              <p className="text-center mt-3">
                Anda belum punya akun?{" "}
                <Link href="/register" className="text-decoration-none text-warning">
                  Daftar disini
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    );
}

export default Login
