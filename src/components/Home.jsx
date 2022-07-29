import React from "react";
import logo1 from "../images/logo1.gif"
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import companies from "../tp"
import axios from "axios"
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory()
    function postalldata(data) {
        console.log(data)
        const company = {
            Name: data.Name,
            Salary1718: data.Salary1718,
            N1718: data.N1718,
            Salary1819: data.Salary1819,
            N1819: data.N1819,
            Salary1920: data.Salary1920,
            N1920: data.N1920,
            Salary2021: data.Salary2021,
            N2021: data.N2021
        }

        //  console.log(data.Name)
        axios.post("/data", company).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err)
        })


    }

    return (
        <div style={{ backgroundColor: "rgba(0 ,42,87)", width: "auto" }}>
            <div className="logo">
                <img className="" src={logo1} alt="" />
            </div>
            <Divider variant="middle" style={{ background: 'white' }} />
            <div className="info">


                <p>
                    Welcome to placement informer. This website is built with an intend to provide placement statistics of our College (PICT, Pune) from academic year 2017 to 2021.Data is Collected from official website and represented in easy-to-understand format so that upcoming batches would be able to its advantage. Companies are Sorted in descending order of salaries offered in these years with total number of students placed. Year in which ‘- ‘sign is used to indicted that company had not visited the campus for that particular year. ‘0’ is used to indicate that Company had visited the college but not given an offer. I hope this placement informer will help you to analyse the placement scenario of our college.
                </p>

            </div>
            <Divider variant="middle" style={{ background: 'white' }} />

            <div className=" " style={{display:"flex",justifyContent:"center",gap:"10px",margin:"30px 0px"}}>
                <Button variant="contained" style={{ "backgroundColor": "white", "color": "black", fontFamily: "verdana" }} onClick={() => {
                    history.push("/res")
                }} >
                    Check Placement Statistic
                </Button>
                <Button variant="contained" style={{ "backgroundColor": "white", "color": "black", fontFamily: "verdana" }}>
                Check Internship Statistic
                </Button>
            </div>


            <div>
                <footer class=" text-center text-white" style={{backgroundColor:"rgba(0 ,42,87)"}}>

                    <div class="container p-4 pb-0">
                        <section class="mb-4">
                           

                            <a class="btn btn-outline-light btn-floating m-1" href="mailto:abhinavkudnar152@gmail.com" role="button"
                            ><i class="fab fa-google"></i></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/abhinavkudnar/" role="button"
                            ><i class="fab fa-instagram"></i></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/abhinav-kudnar-912a711b6/" role="button"
                            ><i class="fab fa-linkedin-in"></i></a>


                            <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/abhi152" role="button"
                            ><i class="fab fa-github"></i></a>
                        </section>
                    </div>
                    <div class="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
                        © 2022 Copyright:
                        <a class="text-white" href="https://abhinavkudnar.netlify.app/" >Abhinav Kudnar</a>
                    </div>
                </footer>
            </div>

        </div>
    )
}
export default Home;