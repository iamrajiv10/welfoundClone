import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Component/Layout";
import Home from "../home";
import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";

const SignUpRec = () => {
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
                    <div className="col w-50">
                        <img src="https://www.tutorialspoint.com/recruitment_and_selection/images/internal_sources.jpg"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="col mx-5 px-5" >
                        <div className="d-flex flex-column align-items-center">

                            <h1><b>Create an account</b></h1>
                            <p>Where the best startups find their teams</p>

                            {value ? <Home /> :
                                <button type="button" className="btn border border-secondary p-2 my-3 align-items-center"
                                    style={{ width: "100%" }}
                                    onClick={handleClick}>
                                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                                        style={{ width: "3vh" }} className="me-3" />
                                    Sign up with Google</button>}

                            <div className="d-flex w-100 align-items-center justify-content-center">
                                <div className="border-top border-secondary " style={{ width: "18%" }}></div>
                                <p className="text-secondary mx-4 my-0">or Sign Up with email</p>
                                <div className="border-top border-secondary " style={{ width: "18%" }}></div>
                            </div>

                            <form className="my-3 w-100">
                                <div className="my-4">
                                    <h5 className="form-label">Full Name</h5>
                                    <input type="text" className="form-control border-secondary" placeholder="enter text" />
                                </div>
                                <div className="my-4">
                                    <h5 className="form-label">Email address</h5>
                                    <input type="email" className="form-control border-secondary" placeholder="name@example.com" />
                                </div>
                                <div className="my-4">
                                    <h5 className="form-label">Password</h5>
                                    <input type="email" className="form-control border-secondary" placeholder="min 8 charector" />
                                </div>
                                <button type="submit" className="btn btn-warning border border-white p-2 my-2 w-100" >Sign Up</button>
                            </form>

                            <h6><b>Already have an account <Link className="text-warning" to="/loginRec">Log in</Link></b></h6>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUpRec;
