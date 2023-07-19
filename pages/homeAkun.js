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
const [currentPage, setCurrentPage] = React.useState(1)
const [data, setData] = React.useState([])
const [totalPage, setTotalPage] = React.useState(1)

React.useEffect(() =>{
  axios
    .get('https://hire-job.onrender.com/v1/job?page=1&limit8')
    .then(({data :{data}}) => {
      // console.log(res),
      setTotalPage(data?.total_page)
      setData(data?.rows)
    })
},[])

const hendleNextPage = (page) =>{
  axios
    .get(`https://hire-job.onrender.com/v1/job?page=${page}&limit8`)
    .then(({ data: { data } }) => {
      // console.log(res),
      setTotalPage(data?.total_page)
      setData(data?.rows)
      setCurrentPage(page)
    })
}

// React.useEffect(()=>{
//   if(Object.keys(state.dataAuth.data) == 0){
//     router.push("/login")
//   }else{
//     console.log(state.dataAuth.data);
//   }
// },[])

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

            
            {data.map((item, key) => (
          <div className="card p-1 mb-3 ">
              <div className="d-flex justify-content-between align-items-center flex-wrap" key={key}>
                <div className="d-flex p-3">
                  <img src={item.photo ?? "profile-error.png"} 
                  alt="foto profile" 
                  className="rounded-circle img-fluid" 
                  style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} 
                  />

                  <div className="ms-4">
                    <h5>{item.fullname}</h5>
                    <p className="text-muted">{item.job_title ?? 'belum ada pekerjaan'}</p>
                    <p className="text-muted">{item.company}</p>
                    <div className="d-flex flex-wrap">
                      {item?.skills?.map((item, key) => (
                        <div className="row me-3 d-flex flex-wrap" key={key}>
                          <p className="bg-warning rounded text-light">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="">
                  <Link href={`./job/${key}`} type="button" className="btn btn-primary me-3 ms-3 mb-2" style={{ height: "40px" }}>
                    Lihat Profile
                  </Link>
                </div>
              
              </div>  
          </div>
            ))}
            
          {/* pagination */}
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              {[...new Array(totalPage)].map((item, key) => {
                const _page = ++key
                  
                    return(
                  <li 
                  class={`page-item ${_page === currentPage ? "active" : ""}`} 
                    key={key}>
                      <a class="page-link" 
                        onClick={() => hendleNextPage(_page)} >
                        {_page}
                      </a></li>
                    )
              })}
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>

        {/* end content */}

        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    );
}

export default HomeAkun
