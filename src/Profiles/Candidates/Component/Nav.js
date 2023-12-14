import React from "react";
import PLayout from "./Layout";
import { Link } from "react-router-dom";

function VerticalNav() {
    return (
        <div style={{ backgroundColor: "whitesmoke", width: "20vh" }}>
            <div class="d-flex flex-column align-items-start" >
                <Link to="/canHome" className="w-100">
                    <button type="button" class="btn btn-light p-4 w-100 rounded my-1">Home</button>
                </Link>
                <Link to="/canProfile" className="w-100">
                    <button type="button" class="btn btn-light p-4 w-100 rounded my-1">Profile</button>
                </Link>
                <Link to="/canJob" className="w-100">
                    <button type="button" class="btn btn-light p-4 w-100 rounded my-1">job</button>
                </Link>
                <Link to="/canApplied" className="w-100">
                    <button type="button" class="btn btn-light p-4 w-100 rounded my-1">Applied</button>
                </Link>
                <Link to="/canMessage" className="w-100">
                    <button type="button" class="btn btn-light p-4 w-100 rounded my-1">Message</button>
                </Link>
                <button type="button" class="btn btn-light p-4 w-100 rounded my-1">Light</button>
            </div>
        </div>
    )
}
export default VerticalNav