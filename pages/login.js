import Link from "next/link";
import React from "react";
import axios from "axios";

import { useRouter } from "next/router";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { eddAuth } from "@/store/reducers/dataAuth";


function Login() {
      const router = useRouter();
      const state = useSelector((state) => state)
      const dispatch = useDispatch()

      const [email, setEmail] = React.useState("");
      const [password, setPassword] = React.useState("");
      const [errMsg, setErrMsg] = React.useState(null);

      React.useEffect(() => {
        // const storedToken = localStorage.getItem("auth")
        // console.log(storedToken)

        if (Object.keys(state.dataAuth.data).length != 0) {
          router.push("profile");
        }
        
        // if(localStorage.getItem("auth") == "True"){
        //   router.push("/profile")
        // }
      })

      const handleLogin = (event) => {
        event.preventDefault();

        axios
          .post("https://hire-job.onrender.com/v1/auth/login", {
            email,
            password,
          })
          .then((response) => {
            const token = response?.data?.data.token
            console.log(response.data.data.user);
                dispatch(eddAuth(response.data.data.user))
                // localStorage.setItem("user", "True");
                localStorage.setItem("token", token);
                console.log(token);

                // token = response?.data?.data.token
                // console.log(response?.data?.data.token);
                // document.cookie = `token= ${token}; path=/dashnboard`;

                router.push("/profile");
          })
          .catch(({ error }) => {
            setErrMsg(error?.response?.data?.message ?? "Something wrong in our server");
          });
      };

    return (
      <div  >
      <main id="login_page" className="container" >
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
              <div className="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukan alamat email" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-5">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Masukan kata sandi" onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
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
      </div>
    );
}

export default Login
