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


                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iusto ullam eaque similique saepe voluptatibus, a itaque nesciunt ipsam quisquam porro minus deserunt? A quo, nemo beatae cum amet ratione.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iusto ullam eaque similique saepe voluptatibus, a itaque nesciunt ipsam quisquam porro minus deserunt? A quo, nemo beatae cum amet ratione
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iusto ullam eaque similique saepe voluptatibus, a itaque nesciunt ipsam quisquam porro minus deserunt? A quo, nemo beatae cum amet ratione
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iusto ullam eaque similique saepe voluptatibus, a itaque nesciunt ipsam quisquam porro minus deserunt? A quo, nemo beatae cum amet ratione
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
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-facebook-f"></i></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-twitter"></i></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-google"></i></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-instagram"></i></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-linkedin-in"></i></a>


                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i class="fab fa-github"></i></a>
                        </section>
                    </div>
                    <div class="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
                        © 2022 Copyright:
                        <a class="text-white" >Abhinav Kudnar</a>
                    </div>
                </footer>
            </div>

        </div>
    )
}
export default Home;