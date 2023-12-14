import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Component/Layout";

const PageNotFound = () => {
  return (
    <Layout title={"Go back - Oops Page Not Found"}>
      <div className="pnf container d-flex justify-content-center align-items-center my-5">
        <div className="shadow-lg p-5 bg-body rounded d-flex justify-content-center align-items-center" style={{height:"60vh", width:"100vh"}}>
          <div className="text-center d-grid gap-3">
        <h1 className="pnf-title ">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <Link to="/" className="pnf-btn p-1 text-warning rounded text-decoration-none bg-secondary">
          <b>Go Back</b>
        </Link>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
