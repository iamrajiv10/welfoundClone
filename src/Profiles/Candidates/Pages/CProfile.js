import React, { useState } from "react";
import CLayout from "../Component/Layout";
import ProfileForm from "./ProfileForm";

function CProfile() {
    const [profilePages, setProfilePages] = useState("profile");

    const handleOverview = () => {
        setProfilePages("overview");
    };

    const handleProfile = () => {
        setProfilePages("profile");
    };

    const handleCv = () => {
        setProfilePages("cv");
    };

    return (
        <CLayout title={"Candidate Profile"}>
            <div className="container">
                <div className="d-flex justify-content-end">
                    <h6>Profile last updated on : </h6>
                </div>
                <div>
                    <h1 className="py-4 text-warning"><b>Edit your ConnectingIds Profile</b></h1>
                </div>
                <div className="d-flex gap-5 my-3 py-3 align-item-center border-bottom border-4">
                    <button className="border-0 p-3" onClick={handleOverview}>Overview</button>
                    <button className="border-0 p-3" onClick={handleProfile}>Profile</button>
                    <button className="border-0 p-3" onClick={handleCv}>Resume/Cv</button>
                </div>
                <div className="py-4">
                    {profilePages === "overview" ? (
                        <div className="border border-2">
                            <p><strong>Name:</strong> John Doe</p>
                            <p><strong>Email:</strong> john.doe@gmail.com</p>
                        </div>
                    ) : profilePages === "profile" ? (
                        <div className="border border-warning p-5">
                            <ProfileForm />
                        </div>
                    ) : profilePages === "cv" ? (
                        <div className="border border-warning p-5">
                            <div className="d-flex gap-5">
                                <div className="w-25">
                                    <h5><b>Upload your recent resume or CV</b></h5>
                                    <p>Upload your most up-to-date resume</p>
                                    <p>File types: PDF, DOCX, PPTX</p>
                                </div>
                                <div className="w-75 ms-5">
                                    <input type="file" className="form-control" />
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </CLayout>
    );
}

export default CProfile;
