import Link from "next/link";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function Registrasi() {
    const router = useRouter()

     const [fullname, setFullname] = React.useState("");
     const [email, setEmail] = React.useState("");
     const [phone, setPhone] = React.useState("");
     const [company, setCompany] = React.useState("");
     const [job_title, setJob_title] = React.useState("")
     const [password, setPassword] = React.useState("");
     const [comfirmPassword, setComfirmPassword] = React.useState("");
     const [isLoading, setIsLoading] = React.useState(false);


     const handleRegistrasi = (event) => {
       event.preventDefault();
      setIsLoading(true);
      if (password == comfirmPassword && password.length >= 8) {
        axios
          .post("https://hire-job.onrender.com/v1/auth/register", {
            fullname,
            email,
            phone,
            company,
            job_title,
            password,
          })
          .then((res) => {
            // console.log(res);

            Swal.fire({
              title: "Registration Success!",
              text: "Registration Success! Please Login",
              icon: "success",
            }).then(() => {
               router.push("/login")
            })
          })
          .catch(( error ) => {
            // console.log(error.response.data.messages.job_title.message);
            Swal.fire({
              title: "Error!",
              text:
                error?.response?.data?.messages?.job_title?.message ??
                error?.response?.data?.messages ??
                "Something wrong in our App!",
              icon: "error",
            }); 
            // ??
            //   Swal.fire({
            //     title: "Error!",
            //     text:
            //       error?.response?.data?.messages ??
            //       "Something wrong in our App!",
            //     icon: "error",
            //   });
          })
          .finally(() => {
            setIsLoading(false);
          })
          
      }else if(password.length < 8){
        Swal.fire({
          title: "Error!",
          text: "Password must consist of 8 characters!",
          icon: "error",
        });
      }else{
         Swal.fire({
           title: "Error!",
           text: "Password and Confirm Password is different!",
           icon: "error",
         });
      }
     };
    return (
      <main id="register_page" className="container">
        <div className="row align-items-center mt-3 mb-3">
          <div className="col col-md-6">
            <div style={{ position: "relative" }}>
              <div
                className="bg-primary content-to-center"
                style={{
                  height: "125vh",
                  width: "100%",
                  position: "absolute",
                  top: 40,
                  opacity: 0.8,
                  padding: "20px",
                  marginTop: "-40px",
                }}
              >
                <h1 className="text-white">
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </div>

            <img src="/auth.png" width="100%" style={{ height: "125vh" }} />
          </div>
          <div class="col-md-6 p-4 inputRegister">
            <h2>Halo, Pewpeople</h2>

            <form onSubmit={handleRegistrasi} disabled={isLoading}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="exampleInputName"
                  aria-describedby="namelHelp"
                  placeholder="Masukan nama panjang"
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">
                  Email
                </label>
                <input
                  type="enail"
                  class="form-control form-control-lg"
                  id="exampleInputEmail"
                  placeholder="Masukan alamat email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPhone" class="form-label">
                  Nomor telepon
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="exampleInputPhone"
                  aria-describedby="PhoneHelp"
                  placeholder="Masukan nomor telepon"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputcompany" class="form-label">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="exampleInputCompany"
                  aria-describedby="companyHelp"
                  placeholder="Masukan nama perushaan"
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputjob_title" class="form-label">
                  Jabatan
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="exampleInputJob_title"
                  aria-describedby="job_titleHelp"
                  placeholder="Masukan jabatan"
                  onChange={(e) => setJob_title(e.target.value)}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword" class="form-label">
                  Kata sandi
                </label>
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="exampleInputPassword"
                  aria-describedby="PasswordHelp"
                  placeholder="Masukan kata sandi"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputComfirmPassword" class="form-label">
                  Konfirmasi kata sandi
                </label>
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="exampleInputComfirmPassword"
                  aria-describedby="ComfirmPasswordHelp"
                  placeholder="Masukan konfirmasi kata sandi"
                  onChange={(e) => setComfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" class="btn btn-primary btn-lg">
                  {isLoading === true ? "Tunggu sebentar..." : "Daftar"}
                </button>
              </div>

              <p className="text-center mt-3">
                Anda sudah punya akun?{" "}
                <Link
                  href="/login"
                  className="text-decoration-none text-warning"
                >
                  Masuk disini
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    );
}

export default Registrasi
