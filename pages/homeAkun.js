import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 
import axios from "axios"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

function HomeAkun() {
const state = useSelector((state)=>state);
const router = useRouter();
const [jobs, setJobs] = React.useState()

// React.useEffect(()=>{
//   if(Object.keys(state.dataAuth.data) == 0){
//     router.push("/login")
//   }else{
//     console.log(state.dataAuth.data);
//   }
// })

axios.get("https://hire-job.onrender.com/v1/job/all")
.then((response) => {
  console.log(response?.data?.data)
  // setJobs(response?.data?.data);

})
.catch((error) => {
  console.log(error)
})

    return (
      <div style={{ backgroundColor: "#E5E5E5" }}>
        {/* start navbar */}
        <Navbar />
        <div className="container-fluid bg-primary d-flex align-content-center mt-1" style={{ width1: "100%", height: "45px" }}>
          <p className="text-light mt-2" style={{ marginLeft: "5%", fontSize: "20px" }}>
            Top Jobs
          </p>
        </div>
        {/* end navbar */}

        {/* start content */}
        <div className="container mt-3">
          <div className="card p-1 mb-3">
            <div class="d-flex">
              <input type="search" class="form-control border-light" placeholder="Search" aria-label="Recipient's username with two button addons" />
              <label className="text-muted text-center mt-1 ms-2 me-2 ps-2" style={{ borderLeft: "1px solid grey" }}>
                Kategori
              </label>
              <button class="btn btn-primary" type="button">
                Search
              </button>
            </div>
          </div>

          {/* {jobs?.map((item, key) =>{
            <div key={key}>
              <h2>{item.fullname}</h2>
            </div>
          })} */}

          <div className="card p-1 mb-3 ">
            {/* {jobs.map((item, key) => {
              <div className="d-flex justify-content-between align-items-center flex-wrap mt-2" key={key}>
                <div className="d-flex">
                  <img src={item.photo} alt="foto profile" className="rounded-circle img-fluid" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />

                  <div>
                    <h5>{item.fullname}</h5>
                    <p className="text-muted">{item.job_title}</p>
                    <p className="text-muted">{item.company}</p>
                    <div className="d-flex flex-wrap">
                      {item.skills.map((itemSkils, keySkills) => (
                        <div className="row me-3 d-flex flex-wrap" key={keySkills}>
                          <p className="bg-warning rounded text-light">{itemSkils}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="" className="text-decoration-none">
                  <button type="button" class="btn btn-primary me-3 ms-3 mb-2" style={{ height: "40px" }}>
                    Lihat Profile
                  </button>
                </Link>
              </div>;
            })} */}

            <hr />

            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="d-flex">
                <img src="/fotoProfile.webp" alt="foto profile" className="rounded-circle img-fluid" style={{ width: "150px", height: "150px", borderRadius: "50%" }}></img>

                <div>
                  <h5>Louis Tomlinson</h5>
                  <p className="text-muted">Web developer</p>
                  <p className="text-muted">Lorem ipsum</p>
                  <div className="d-flex flex-wrap">
                    {["Java", "Kotlin", "PHP", "Javascript"].map((item, key) => (
                      <div className="row me-3 d-flex flex-wrap" key={key}>
                        <p className="bg-warning rounded text-light">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="">
                <button type="button" className="btn btn-primary me-3 ms-3 mb-2" style={{ height: "40px" }}>
                  Lihat Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* end content */}

        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    );
}

export default HomeAkun
