import React, { useEffect } from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 
import axios from "axios"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import _debounce from 'lodash/debounce';
import {useCallback} from 'react';

function HomeAkun(props) {
const state = useSelector((state)=>state);
const router = useRouter();

const [jobs, setJobs] = React.useState()
const [currentPage, setCurrentPage] = React.useState(1)
const [totalPage, setTotalPage] = React.useState(props?.request?.data?.total_page)
const [data, setData] = React.useState(props?.request?.data?.rows)
const [isLoading, setIsLoading] = React.useState(false);


const hendleHire =(e)=>{
  console.log(e.target)
  currentPage
}

React.useEffect(()=>{
  currentPage
}, [])

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

console.log(currentPage)
const hendleSearch = (keyword) =>{
  if(keyword) {
    axios
    .get(`https://hire-job.onrender.com/v1/job/filter?keyword=${keyword}`)
    .then(({ data: { data } }) => {
      // console.log(res),
      setTotalPage(0)
      setData(data ?? [])
      setCurrentPage(1)
    })
  }else{
    hendleNextPage(1)
  }
}

const debounceFn = useCallback(_debounce(hendleSearch, 1000), []);

    return (
      <div style={{ backgroundColor: "#E5E5E5" }}>
        {/* start navbar */}
        <Navbar />
        <div
          className="container-fluid bg-primary d-flex align-content-center mt-1"
          style={{ width1: "100%", height: "45px" }}
        >
          <p
            className="text-light mt-2"
            style={{ marginLeft: "5%", fontSize: "20px" }}
          >
            Top Jobs
          </p>
        </div>
        {/* end navbar */}

        {/* start content */}
        <div className="container mt-3">
          <div className="card p-1 mb-3">
            <div class="d-flex">
              <input
                type="search"
                class="form-control border-light"
                placeholder="Search"
                aria-label="Recipient's username with two button addons"
                onChange={(e) => {
                  // hendleSearch(e.target.value);
                  debounceFn(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    hendleSearch(e.target.value);
                  }
                }}
              />
            </div>
          </div>

          {data.length === 0 ? (
            <>
              <div className="d-flex justify-content-center mt-4">
                <img src="/empty.svg" style={{ width: "300px" }} />
              </div>
              <h3 className="text-center mt-3">Data not found</h3>
            </>
          ) : null}
          {data.map((item, key) => (
            <div className="card p-1 mb-3 " key={key}>
              <div
                className="d-flex justify-content-between align-items-center flex-wrap"
                key={key}
              >
                <div className="d-flex p-3">
                  <img
                    src={item.photo ?? "profile-error.png"}
                    alt="foto profile"
                    className="rounded-circle img-fluid"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />

                  <div className="ms-4">
                    <h5>{item.fullname ?? "Unknown"}</h5>
                    <p className="text-muted">{item.job_title ?? "Unknown"}</p>
                    <p className="text-muted">{item.company ?? "Unknown"}</p>
                    <div className="d-flex flex-wrap">
                      {item?.skills == 0 ? (
                        <div
                          className="text-secondary"
                          style={{ textAlign: "center", marginTop: "10px" }}
                        >
                          Belum ada skill
                        </div>
                      ) : (
                        <>
                          {item?.skills?.slice(0, 5)?.map((item, key) => (
                            <div
                              className="row me-3 d-flex flex-wrap"
                              key={key}
                            >
                              <p className="bg-warning rounded text-light">
                                {item}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="">
                  {/* <button onClick={hendleHire} id={key}>
                Lihat profile
                </button> */}
                  <Link
                    href={`./job/${item.id}` }
                    name={hendleHire}
                    type="button"
                    className="btn btn-primary me-3 ms-3 mb-2"
                    style={{ height: "40px" }}
                  >
                    Lihat Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {totalPage > 0 ? (
            <nav aria-label="Page navigation example">
              <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item">
                  <a
                    class="page-link"
                    onClick={() => {
                      if (currentPage > 1) {
                        hendleNextPage(currentPage - 1);
                      }
                    }}
                  >
                    Previous
                  </a>
                </li>
                {[...new Array(totalPage)].map((item, key) => {
                  const _page = ++key;

                  return (
                    <li
                      class={`page-item ${
                        _page === currentPage ? "active" : ""
                      }`}
                      key={key}
                    >
                      <a
                        class="page-link"
                        onClick={() => hendleNextPage(_page)}
                      >
                        {_page}
                      </a>
                    </li>
                  );
                })}
                <li class="page-item">
                  <a
                    class="page-link"
                    onClick={() => {
                      if (currentPage > 1) {
                        hendleNextPage(currentPage + 1);
                      }
                    }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          ) : null}
          {/* pagination */}
        </div>

        {/* end content */}

        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    );
}
 
export async function getServerSideProps() {
const request = await axios
  .get(`https://hire-job.onrender.com/v1/job?page=1&limit8`)
  .then((res) => 
    res?.data
  // console.log(res)
);
     // Pass data to the page via props
  return { props: { request } }
}

export default HomeAkun
