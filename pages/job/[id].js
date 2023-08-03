import React from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


import Navbar from '@/components/navbar';
import Footer from "@/components/footer";

import { BiMap } from "react-icons/bi";
import axios from 'axios';

import {sendHireTo} from '@/store/reducers/hireSlice'

function Profile() {
  const router = useRouter();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [user, setUser] = React.useState("");
  const [hire, setHire] = React.useState()
  const [contact, setContact] = React.useState()

  React.useEffect(() =>{
    
    if(Object.keys(state?.dataAuth?.data).length == 0){
      router.push("/login")
    }else{
      setUser(state.dataAuth.data);

      console.log(state)
      axios
      .get("https://hire-job.onrender.com/v1/job/")
      .then((response) => 
      console.log()
      )
      const id = router?.query?.id
      axios
        .get(`https://hire-job.onrender.com/v1/job/detail/${id}`)
        .then((response) =>{ 
        setContact(response?.data?.data)
        dispatch(sendHireTo(response?.data?.data));
      });
        
  }

 },[])

 const handleHire =()=>{
  router?.query?.id;
  router.replace('../hirejob.js')
 }


let company = [...new Array(2)];
    return (
      <div id="profile_page" style={{ backgroundColor: "#E5E5E5" }}>
        {/* Strat navbar */}
        <Navbar />
        <div style={{ height: "50%", width: "100%" }}>
          <div
            className="bg-primary position-absolute"
            style={{ height: "250px", width: "100%" }}
          ></div>
        </div>
        {/* end navbar */}

        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col col-md-4 mb-4">
              <div className="card p-4">
                <div className="d-flex justify-content-center">
                  <img
                    src={contact?.photo ?? "../public/auth.png"}
                    alt="profile"
                    style={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <h1 style={{ fontSize: "30px", marginTop: "30px" }}>
                  {contact?.fullname} 
                </h1>
                <p>{contact?.job_title}</p>
                <p classname="text-muted">
                  <BiMap /> {user?.domicile == 0 ? "tidak ada" : user?.domicile}
                </p>
                <p>{contact?.company}</p>

                <p className="text-black-50">{contact?.description}</p>

                <Link
                  {...router?.query?.id}
                  href="/hirejob"
                  class="d-grid gap-2 mt-3 text-decoration-none"
                >
                  <button className="btn btn-primary btn-lg mb-3">
                    Rekrut
                  </button>
                </Link>

                <h2 style={{ fontSize: "18px" }}>Keterampilan</h2>
                {contact?.skills == 0 ? (
                  "belum ada skill"
                ) : (
                  <div className="d-inline">
                    {contact?.skills?.map((item, key) => (
                      <span key={key} class="badge bg-warning mb-2 me-1 p-2 ">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="col col-md-8">
              <div className="card p-4">
                <ul className="nav nav-underline">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Pengalaman kerja
                    </a>
                  </li>
                </ul>
                {user?.job_history == 0 ? (
                  "Belum ada pengalaman kerja"
                ) : (
                  <>
                    {" "}
                    {contact?.job_history?.map((item, key) => (
                      <div
                        className="row mt-4 descProfile d-flex flex-wrap"
                        key={key}
                      >
                        <div className="col col-md-2">
                          <img src={item.logo} style={{ width: "100%" }} />
                        </div>

                        <div className="col col-md-10">
                          <h5 className="mb-0">
                            {item.position ?? "Pelum ada posisi"}
                          </h5>
                          <p className="mb-0">
                            {item.company ?? "Perusahaan belum ada"}
                          </p>
                          <div className="d-flex align-items-center">
                            <p style={{ color: "#9EA0A5" }}>{item.date}</p>
                            <p style={{ marginLeft: "30px", color: "#9EA0A5" }}>
                              6 months
                            </p>
                          </div>
                          <p>{item.description}</p>

                          {key === company.length - 1 ? null : <hr />}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    );
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts

  const {
    data: {data}
  } = await axios.get("https://hire-job.onrender.com/v1/job/all");
  
  //  const listId = [1, 2, 3, 4, 5];

    // Get the paths we want to pre-render based on posts
    const paths = data.map((post) => ({
        params: { id: post?.id?.toString()
        }
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" }
}

// convert this page into html
export async function getStaticProps() {
    // const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      
        props: {
          id: null,
        },
      revalidate: 10,
    }
}

export default Profile
