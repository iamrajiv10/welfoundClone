import React, { useState, useEffect } from "react";
import CLayout from "../Component/Layout";
import { specificCities, SkillOptions } from "./dropdowns";

function CJob() {
  const [skills, setSkills] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [matchingSkills, setMatchingSkills] = useState([]);

  const handleSkillChange = (e) => {
    const inputValue = e.target.value;
    setSkills(inputValue);
    const filteredSkills = SkillOptions.filter((skill) =>
      skill.toLowerCase().includes(inputValue.toLowerCase())
    );
    setMatchingSkills(filteredSkills);
  };

  const handleSkillClick = (selectedSkill) => {
    setSkills(""); // Clear the input field
    setMatchingSkills([]);
    setSelectedSkills([...selectedSkills, selectedSkill]);
    console.log(specificCities);
  };

  const handleRemoveSkills = (skillToRemove) => {
    const updatedSkills = selectedSkills.filter((skill) => skill !== skillToRemove);
    setSelectedSkills(updatedSkills);
  };

  return (
    <CLayout company={"Candidate Profile"}>
      <div className="container">
        <h1>Welcome to the candidate Job page</h1>
        <br />
        <div>
          {selectedSkills.length > 0 && (
            <div className="flex-wrap my-2 w-100 d-flex">
              {selectedSkills.map((skil, index) => (
                <div key={index} className="px-1 m-1 rounded bg-primary">
                  {skil}
                  <span
                    onClick={() => handleRemoveSkills(skil)}
                    className="mx-1 text-white position-relative translate-middle"
                    style={{ cursor: "pointer", top: "-.25em" }}
                  >
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
            onChange={handleSkillChange}
            value={skills}
            name="Skills"
          />
          {skills && matchingSkills.length > 0 && (
            <div className="overflow-scroll">
              <ul className="list-group">
                {matchingSkills.map((skil, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    onClick={() => handleSkillClick(skil)}
                  >
                    {skil}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </CLayout>
  );
}

export default CJob;
