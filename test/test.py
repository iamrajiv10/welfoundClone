 {/* -----------------------------------Name------------------------------------ */}
            <div>
                <h5 class="form-label">Your Name<span className="text-danger">*</span></h5>
                <input type="text" class="form-control" placeholder="" />
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