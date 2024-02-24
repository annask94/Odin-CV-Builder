import React from "react";
import { useState } from "react";
import Form from "./Form.jsx";
import CVContainer from "./CVContainer.jsx";

export default function App() {
  //PERSONAL INFORMATION

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleAddPersonalInfo = (e) => {
    e.preventDefault();
    setPersonalInfo({
      ...personalInfo,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    });
  };

  //EDUCATION

  const [education, setEducation] = useState([]);

  const handleAddEducation = (e) => {
    e.preventDefault();
    const newEducation = {
      id: crypto.randomUUID(),
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      current: e.target.current.checked,
      course: e.target.course.value,
      institution: e.target.institution.value,
    };

    setEducation([...education, newEducation]);

    e.target.reset();
  };

  //EXPERIENCE

  const [experience, setExperience] = useState([]);

  const handleAddExperience = (e) => {
    e.preventDefault();
    const newExperience = {
      id: crypto.randomUUID(),
      startDateExp: e.target.startDateExp.value,
      endDateExp: e.target.endDateExp.value,
      currentExp: e.target.currentExp.checked,
      position: e.target.position.value,
      company: e.target.company.value,
    };

    setExperience([...experience, newExperience]);

    e.target.reset();
  };

  //SKILLS

  const [skills, setSkills] = useState([]);

  const handleAddSkills = (e) => {
    e.preventDefault();
    const newSkills = {
      id: crypto.randomUUID(),
      addedSkill: e.target.addedSkill.value,
    };

    setSkills([...skills, newSkills]);

    e.target.reset();
  };

  //LANGUAGES

  const [languages, setLanguages] = useState([]);

  const handleAddLanguages = (e) => {
    e.preventDefault();
    const newLanguages = {
      id: crypto.randomUUID(),
      addedLang: e.target.language.value,
      levelLang: e.target.levels.value,
    };

    setLanguages([...languages, newLanguages]);

    e.target.reset();
  };

  //RETURN
  return (
    <div className="flex gap-4">
      <section className="formContainer">
        <Form
          onAddPersonalInfo={handleAddPersonalInfo}
          onAddEducation={handleAddEducation}
          onAddExperience={handleAddExperience}
          onAddSkills={handleAddSkills}
          onAddLanguages={handleAddLanguages}
          education={education}
          experience={experience}
          skills={skills}
          languages={languages}
        />
      </section>

      <section className="cvTemplateContainer">
        <CVContainer
          personalInfoAdd={personalInfo}
          education={education}
          experience={experience}
          skills={skills}
          languages={languages}
        />
      </section>
    </div>
  );
}
