import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Component/Layout";
import Home from "../home";
import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";

const LogRec = () => {
    const [value, setValue] = useState(null);

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            let user = {
                email: data.user.email,
                name: data.user.displayName,
                accoutType: "recruiter",
            };
            setValue(user);
            localStorage.setItem("data", JSON.stringify(user));
        });
    }

    useEffect(() => {
        let storedData = localStorage.getItem('data');
        if (storedData) {
            setValue(JSON.parse(storedData));
        }
    }, []);
    return (
        <Layout title={"OverviewRec"}>
            <div>
                <div className="d-flex container my-4 gap-5">
                    
                    <div className="col mx-5 px-5" >
                        <div className="d-flex flex-column align-items-center">

                            <h1><b>Create an account</b></h1>
                            <p>Find your next opportunity !</p>

                            {value ? <Home /> :
                                <button type="button" className="btn border border-secondary p-2 my-3 align-items-center"
                                    style={{ width: "100%" }}
                                    onClick={handleClick}>
                                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                                        style={{ width: "3vh" }} className="me-3" />
                                    Login with Google</button>}
                            <div className="d-flex w-100 align-items-center justify-content-center">
                                <div className="border-top border-secondary " style={{ width: "18%" }}></div>
                                <p className="text-secondary mx-4 my-0">or Sign Up with email</p>
                                <div className="border-top border-secondary " style={{ width: "18%" }}></div>
                            </div>
                            <form className="my-3 w-100">
                                <div className="my-4">
                                    <h5 class="form-label">Email address</h5>
                                    <input type="email" class="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="my-4">
                                    <h5 class="form-label">Password</h5>
                                    <input type="email" class="form-control" placeholder="min 8 charector" />
                                </div>
                                <div className="d-flex text-end">
                                    <Link >Forget Password</Link>
                                </div>
                                <button type="submit" className="btn btn-warning border border-white p-2 my-2 w-100" >Login</button>
                            </form>
                            <h6><b>Not registered <Link className="text-warning" to="/signUpRec">Create an account</Link></b></h6>
                        </div>
                    </div>
                    <div className="col w-50">
                        <img src="https://www.tutorialspoint.com/recruitment_and_selection/images/internal_sources.jpg"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LogRec;