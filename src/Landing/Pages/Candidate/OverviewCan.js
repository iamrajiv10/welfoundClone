import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Component/Layout";
import HeaderCan from "../../Component/HeaderCan";

const OverviewCan = () => {
  return (
    <>
    <HeaderCan />
    <Layout title={"OverviewCan"}>
      <div>
        <div className="d-flex container my-4 gap-5">
          <div className="col " >
            <div className="w-75">
            <h1 className="text-warning my-2" style={{ fontSize: "60px" }}><b>Find the job made for you</b></h1>
            <h6>Startup-ready candidates you can't find anywhere else, and all the tools you need to hire. Get started for free.</h6>
            <button type="button" className="btn btn-warning border border-white py-2 px-5 my-5">Sign Up</button>
            </div>
          </div>
          <div className="col ">
            <img src="https://www.tutorialspoint.com/recruitment_and_selection/images/internal_sources.jpg"
              style={{ width: "80vh" }} />
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default OverviewCan;