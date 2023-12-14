import React, { useState } from "react";
import { specificCities, positionOptions, experienceOptions, SkillOptions } from "./dropdowns";

function ProfileForm() {
    const [name, setName] = useState("");
    const [cities, setCities] = useState("");
    const [selectedCities, setSelectedCities] = useState([]);
    const [matchingCities, setMatchingCities] = useState([]);

    const handleCitiesChange = (e) => {
        const inputValue = e.target.value;
        setCities(inputValue);
        const filteredCities = specificCities.filter((city) =>
            city.toLowerCase().includes(inputValue.toLowerCase())
        );

        setMatchingCities(filteredCities);
    };

    const handleCityClick = (selectedCity) => {
        setCities("");
        setMatchingCities([]);
        setSelectedCities([...selectedCities, selectedCity]);
    };

    const handleRemoveCity = (cityToRemove) => {
        const updatedCities = selectedCities.filter(
            (city) => city !== cityToRemove
        );
        setSelectedCities(updatedCities);
    };

    //---------------------------------Primary Position--------------------------------------- \\

    const [primaryPosition, setPrimaryPosition] = useState("");
    const handlePrimaryPosition = (e) => {
        setPrimaryPosition(e.target.value);
    };


    // --------------------------------Experience year---------------------------------------- \\
    const [selectedExperience, setSelectedExperience] = useState("");
    const handleExperienceChange = (e) => {
        setSelectedExperience(e.target.value);
    };


    // --------------------------------------Opening Roles------------------------------------------

    const [openRoles, setOpenRoles] = useState("");
    const [selectedOpenRoles, setSelectedOpenRoles] = useState([]);
    const [matchingOpenRoles, setMatchingOpenRoles] = useState([]);

    const handleOpenRoleChange = (e) => {
        const inputValue = e.target.value;
        setOpenRoles(inputValue);
        const filteredOpenRoles = positionOptions.filter((roles) =>
            roles.toLowerCase().includes(inputValue.toLowerCase())
        );
        setMatchingOpenRoles(filteredOpenRoles);
    };

    const handleOpenRolesClick = (selectedOpenRole) => {
        setOpenRoles("");
        setMatchingOpenRoles([]);
        setSelectedOpenRoles([...selectedOpenRoles, selectedOpenRole]);
    };

    const handleRemoveOpenRole = (roleToRemove) => {
        const updatedOpenRoles = selectedOpenRoles.filter(
            (roles) => roles !== roleToRemove
        );
        setSelectedOpenRoles(updatedOpenRoles);
    };

    // --------------------------------------Education History------------------------------------------

    const [educationHistory, setEducationHistory] = useState([
        {
            title: "",
            school: "",
            year: "",
            marks: "",
        },
    ]);

    const handleAddEducation = () => {
        setEducationHistory([...educationHistory, {
            title: "",
            school: "",
            year: "",
            marks: "",
        }]);
    };

    const handleRemoveEducation = () => {
        if (educationHistory.length > 1) {
            const updatedEducation = [...educationHistory];
            updatedEducation.pop();
            setEducationHistory(updatedEducation);
        }
    };

    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...educationHistory];
        updatedEducation[index][field] = value;
        setEducationHistory(updatedEducation);
    };

    //---------------------------------------Work History---------------------------------

    const [workHistory, setWorkHistory] = useState([
        {
            company: "",
            rank: "",
            startDate: "",
            endDate: "",
        },
    ]);

    //   useEffect(() => {
    //     const storedData = localStorage.getItem("workHistory");
    //     if (storedData) {
    //       const parsedData = JSON.parse(storedData);
    //       const updatedData = parsedData.map((work) => ({
    //         ...work,
    //         checked: work.endDate === "till date",
    //       }));
    //       setWorkHistory(updatedData);
    //     }
    //   }, []);

    const handleAddWork = () => {
        setWorkHistory([
            ...workHistory,
            {
                company: "",
                rank: "",
                startDate: "",
                endDate: "",
            },
        ]);
    };

    const handleRemoveWork = () => {
        if (workHistory.length > 1) {
            const updatedworkcation = [...workHistory];
            updatedworkcation.pop();
            setWorkHistory(updatedworkcation);
        }
    };

    const handleWorkChange = (index, field, value) => {
        const updatedworkcation = [...workHistory];
        if (field === "endDate" && value === "till date") {
            updatedworkcation[index]["checked"] = true;
        }
        updatedworkcation[index][field] = value;
        setWorkHistory(updatedworkcation);
    };

    //-------------------------------------------Skills----------------------------------------

    const [skills, setSkills] = useState("");
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [matchingSkills, setMatchingSkills] = useState([]);

    const handleSkillChange = (e) => {
        const inputValue = e.target.value;
        setSkills(inputValue);
        const filteredSkills = SkillOptions.filter((skill) =>
            skill.toLowerCase().includes(inputValue.toLowerCase()));
        setMatchingSkills(filteredSkills);
    };

    const handleSkillClick = (selectedSkill) => {
        setSkills("");
        setMatchingSkills([]);
        setSelectedSkills([...selectedSkills, selectedSkill]);
        console.log(specificCities);
    };

    const handleRemoveSkills = (skillToRemove) => {
        const updatedSkills = selectedSkills.filter((skill) => skill !== skillToRemove);
        setSelectedSkills(updatedSkills);
    };

    return (
        <form>
            <div className="d-flex gap-5">
                <div className="w-25">
                    <h5><b>About</b></h5>
                    <p>Tell us about your self to get max reach.</p>
                </div>
                <div className="w-75 ms-5">

                    {/* -----------------------------------Name------------------------------------ */}
                    <div>
                        <h5 class="form-label">Your Name<span className="text-danger">*</span></h5>
                        <input type="text" class="form-control" placeholder="" value={name}
                        onChange={(e) => {setName(e.target.value)}} />
                    </div>
                    {/* ----------------------------------Image------------------------------------- */}
                    <div className="d-flex my-4">
                        <div>
                            {/* {showImg ? (
        <img
            class="rounded-circle w-50"
            src={userData.profilePhoto}
            style={{ cursor: "pointer", width: "120px", height: "120px" }}
            alt="profile"
            onClick={() => fileInputRef.current.click()}
        />
    ) : ( */}
                            <img
                                class="rounded-circle "
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                style={{ cursor: "pointer", width: "80px" }}
                                alt="profile"
                            // onClick={() => fileInputRef.current.click()}
                            />
                            {/* )} */}
                        </div>
                        <div className="d-flex align-items-center ms-4">
                            <input
                                type="file"
                            // ref={fileInputRef}
                            // onChange={(e) => handleFileChange(e)}
                            />
                        </div>
                    </div>
                    {/* ---------------------------Location-------------------------------- */}
                    <div className="mb-4">
                        <h5 className="form-label">Where are you based?<span className="text-danger">*</span></h5>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={cities}
                            onChange={handleCitiesChange}
                            name="cities"
                        />
                        {cities && matchingCities.length > 0 && (
                            <div class="overflow-scroll">
                                <ul className="list-group ">
                                    {matchingCities.map((city, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item"
                                            onClick={() => handleCityClick(city)}
                                        >
                                            {city}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {selectedCities.length > 0 && (
                            <div className="flex-wrap my-2 selected-skills w-100 d-flex">
                                {selectedCities.map((city, index) => (
                                    <div
                                        key={index}
                                        className="px-1 m-1 rounded selected-skill bg-primary"
                                    >
                                        {city}
                                        <span
                                            onClick={() => handleRemoveCity(city)}
                                            className="mx-1 text-white remove-skill position-relative translate-middle"
                                            style={{ top: "-.25em", cursor: "pointer" }}
                                        >
                                            &times;
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="d-flex gap-5 my-3">

                        {/* -----------------------------------Primary Position--------------------------------------- */}

                        <div className="w-75">
                            <h5 className="form-label">Primary Position<span className="text-danger">*</span></h5>
                            <select
                                id="position_id"
                                className="form-select form-select-lg"
                                onChange={handlePrimaryPosition}
                                value={primaryPosition}>
                                <option value="">Select...</option>
                                {positionOptions.map((position, index) => (
                                    <option key={index} value={position}>
                                        {position}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* --------------------------------------Experience------------------------------------------ */}

                        <div className="w-25">
                            <h5 className="form-label">Years of Experience:<span className="text-danger">*</span></h5>
                            <select
                                id="experienceDropdown"
                                className="form-select form-select-lg"
                                onChange={handleExperienceChange}
                                value={selectedExperience}>
                                <option value="">Select...</option>
                                {experienceOptions.map((experience, index) => (
                                    <option key={index} value={experience}>
                                        {experience}
                                    </option>
                                ))}
                            </select>

                            {selectedExperience && (
                                <p>You selected: {selectedExperience}</p>
                            )}
                        </div>
                    </div>

                    {/* ---------------------------------------Open to Roles-------------------------------------------- */}

                    <div className="my-4">
                        <h5 className="form-label">Open to the following roles<span className="text-danger">*</span></h5>
                        {selectedOpenRoles.length > 0 && (
                            <div className="flex-wrap my-2 selected-skills w-100 d-flex">
                                {selectedOpenRoles.map((openRole, index) => (
                                    <div key={index} className="px-1 m-1 rounded selected-skill bg-primary">
                                        {openRole}
                                        <span
                                            onClick={() => handleRemoveOpenRole(openRole)}
                                            className="mx-1 text-white position-relative translate-middle"
                                            style={{ top: "-.25em", cursor: "pointer" }}>
                                            &times;
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={openRoles}
                            onChange={handleOpenRoleChange}
                            name="OpenRoles"
                        />
                        {openRoles && matchingOpenRoles.length > 0 && (
                            <div class="overflow-scroll">
                                <ul className="list-group ">
                                    {matchingOpenRoles.map((openRole, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item"
                                            onClick={() => handleOpenRolesClick(openRole)}
                                        >
                                            {openRole}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* ---------------------------------------Your Bio-------------------------------------------- */}
                    <div className="my-4">
                        <h5 className="form-label">Your Bio</h5>
                        <textarea
                            type="textarea"
                            rows="5"
                            className="form-control"
                            placeholder="e.g Stanford CS, Full stack generalist: launched a successful Android app, worked at Google"
                        />
                    </div>
                </div>
            </div>
            <hr />

            {/* ---------------------------------------Your Bio-------------------------------------------- */}

            <div className="d-flex gap-5 py-4">
                <div className="w-25">
                    <h5>Social Profiles</h5>
                    <p>Where can people find you online?</p>
                </div>
                <div className="w-75 ms-5">
                    <div className="mb-4">
                        <h5 className="form-label mt-1">Website</h5>
                        <input className="form-control"
                            type="url"
                            placeholder="http://url" />
                    </div>
                    <div className="mb-4">
                        <h5 className="form-label mt-1">Linkedin</h5>
                        <input className="form-control"
                            type="url"
                            placeholder="http://linkedin.com/username" />
                    </div>
                    <div className="mb-4">
                        <h5 className="form-label mt-1">GitHub</h5>
                        <input className="form-control"
                            type="url"
                            placeholder="http://github.com/username" />
                    </div>
                    <div className="mb-4">
                        <h5 className="form-label mt-1">Twitter</h5>
                        <input className="form-control"
                            type="url"
                            placeholder="http://twitter.com/username" />
                    </div>
                </div>
            </div>
            <hr />

            {/* -------------------------------------Work History----------------------------------- */}

            <div className="d-flex gap-5 py-4">
                <div className="w-25">
                    <h5>Work Experience</h5>
                    <p>Add your professional experience details here.</p>
                </div>
                <div className="w-75 ms-5">
                    {workHistory.map((work, index) => (
                        <div
                            key={index}
                            className="p-3 my-4 rounded bodyAll"
                            style={{ backgroundColor: "rgb(247, 247, 247)" }}
                        >
                            <div className="mb-4">
                                <label className="form-label">company:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={work.company}
                                    onChange={(e) =>
                                        handleWorkChange(index, "company", e.target.value)
                                    }
                                    name={`company-${index}`}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Rank Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={work.rank}
                                    onChange={(e) =>
                                        handleWorkChange(index, "rank", e.target.value)
                                    }
                                    name={`rankName-${index}`}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Start Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    required
                                    value={work.startDate}
                                    onChange={(e) =>
                                        handleWorkChange(index, "startDate", e.target.value)
                                    }
                                    name={`startDate-${index}`}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">End Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={work.endDate}
                                    onChange={(e) =>
                                        handleWorkChange(index, "endDate", e.target.value)
                                    }
                                    name={`endDate-${index}`}
                                />
                                <div className="d-flex my-2">
                                    <input
                                        type="checkbox"
                                        value={"till date"}
                                        onChange={(e) =>
                                            handleWorkChange(index, "endDate", e.target.value)
                                        }
                                        checked={work.checked || false}
                                    />
                                    <h6 className="m-2">I currently work here</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-between">
                        <button
                            className="p-2 btn btn-warning"
                            onClick={handleAddWork}
                        >
                            Add work details
                        </button>

                        <button
                            className="p-2 btn btn-warning"
                            onClick={handleRemoveWork}
                        >
                            Remove Last work details
                        </button>
                    </div>
                </div>
            </div>
            <hr />

            {/* -------------------------------------Education History----------------------------------- */}


            <div className="d-flex gap-5 py-4">
                <div className="w-25">
                    <h5>Education</h5>
                    <p>What schools have you studied at?</p>
                </div>
                <div className="w-75 ms-5">

                    {educationHistory.map((edu, index) => (
                        <div key={index} >
                            <div className="mb-4">
                                <h5 className="form-label">Education Title:</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={edu.title}
                                    onChange={(e) =>
                                        handleEducationChange(index, "title", e.target.value)
                                    }
                                    name="educationTitle"
                                    placeholder="B.Tect/B.Ca/MBA"
                                />
                            </div>
                            <div className="mb-4">
                                <h5 className="form-label">College/University</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={edu.school}
                                    onChange={(e) =>
                                        handleEducationChange(index, "school", e.target.value)
                                    }
                                    name="schoolName"
                                    placeholder="University of Technology"
                                />
                            </div>
                            <div className="mb-4">
                                <h5 className="form-label">Graduation</h5>
                                <input
                                    type="date"
                                    className="form-control"
                                    required
                                    value={edu.year}
                                    onChange={(e) =>
                                        handleEducationChange(index, "year", e.target.value)
                                    }
                                    name="year"
                                />
                            </div>
                            <div className="mb-4">
                                <h5 className="form-label">CGPA / Percentage</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={edu.marks}
                                    onChange={(e) =>
                                        handleEducationChange(index, "marks", e.target.value)
                                    }
                                    name="marks"
                                />
                            </div>

                        </div>
                    ))}

                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-warning"
                            onClick={handleAddEducation}
                        >
                            Add Education
                        </button>

                        <button
                            className="btn btn-warning"
                            onClick={handleRemoveEducation}
                        >
                            Remove Last Education
                        </button>
                    </div>
                </div>
            </div>
            <hr />

            {/* --------------------------------------------Skills----------------------------------------- */}

            <div className="d-flex gap-5 py-4">
                <div className="w-25">
                    <h5>Your Skills</h5>
                    <p>This will help startups hone in on your strengths.</p>
                </div>
                <div className="w-75 ms-5">
                    {selectedSkills.length > 0 && (
                        <div className="flex-wrap my-2 w-100 d-flex">
                            {selectedSkills.map((skil, index) => (
                                <div key={index} className="px-1 m-1 rounded bg-primary">
                                    {skil}
                                    <span onClick={() => handleRemoveSkills(skil)}
                                        className="mx-1 text-white position-relative translate-middle"
                                        style={{ cursor: 'pointer', top: "-.25em" }}>&times;</span>
                                </div>
                            ))}
                        </div>
                    )}
                    <input
                        type="text" className="form-control" required
                        onChange={handleSkillChange} value={skills} name="Skills"
                        placeholder="e.g. Pythin, React" />
                    {skills && matchingSkills.length > 0 && (
                        <div className="overflow-scroll">
                            <ul className="list-group">
                                {matchingSkills.map((skil, index) => (
                                    <li
                                        key={index} className="list-group-item"
                                        onClick={() => handleSkillClick(skil)}>
                                        {skil}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <hr />

            {/* -------------------------------------Skills History----------------------------------- */}

            <div className="d-flex gap-5 py-4">
                <div className="w-25">
                    <h5>Achievements</h5>
                    <p>Sharing more details about yourself will help you stand out more.</p>
                </div>
                <div className="w-75 ms-5">
                    <textarea
                        type="textarea"
                        rows="7"
                        className="form-control"
                        maxLength={2000}
                        placeholder="e.g. I launched 3 successful Facebook apps which in total reached 2M+ users and generated $100K+ in revenue. I built everthing form the front-end to the back-end and eveything in between."
                        
                    />
                </div>
            </div>
        </form>
    );
}

export default ProfileForm;































