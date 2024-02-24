import React from "react";
import { useState, useEffect } from "react";
import EmailIcon from "./assets/email-outline.svg";
import PhoneIcon from "./assets/phone.svg";
import AddedDataEdu from "./AddedDataEdu.jsx";

const PersonalInfo = ({ personalInfoAdd }) => {
  const { name, email, phone } = personalInfoAdd;
  return (
    <div className="bg-gray-700 p-8 text-white grid grid-cols-2 items-center justify-items-center">
      <h1 className="col-span-2 mb-4 text-2xl uppercase">{name}</h1>
      <div className="flex gap-4">
        <img src={EmailIcon} alt="Email icon" className="w-8" />
        <h3>{email}</h3>
      </div>
      <div className="flex gap-4">
        <img src={PhoneIcon} alt="Phone icon" className="w-8" />
        <h3>{phone}</h3>
      </div>
    </div>
  );
};

export default function CVContainer({
  personalInfoAdd,
  education,
  experience,
  skills,
  languages,
}) {
  const [educationData, setEducation] = useState([]);
  const [experienceData, setExperience] = useState([]);
  const [skillsData, setSkills] = useState([]);
  const [languagesData, setLanguages] = useState([]);

  useEffect(() => {
    setEducation(education);
  }, [education]);

  useEffect(() => {
    setExperience(experience);
  }, [experience]);

  useEffect(() => {
    setSkills(skills);
  }, [skills]);

  useEffect(() => {
    setLanguages(languages);
  }, [languages]);

  return (
    <main>
      <div className="bg-white drop-shadow-md m-8 a4size ">
        <PersonalInfo personalInfoAdd={personalInfoAdd} />
      </div>
      <section className="educationContainer">
        <AddedDataEdu educationData={educationData} />
      </section>
    </main>
  );
}
