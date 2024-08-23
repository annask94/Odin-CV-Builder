import React, { useState } from "react";
import Form from "./Form.jsx";
import CVContainer from "./CVContainer.jsx";

export default function App() {
  // PERSONAL INFORMATION

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

  // EDUCATION

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

    setEducation((prevEducation) => [...prevEducation, newEducation]);

    e.target.reset();
  };

  const handleDeleteEducation = (id) => {
    setEducation((prevEducation) =>
      prevEducation.filter((edu) => edu.id !== id)
    );
  };

  // EXPERIENCE

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

    setExperience((prevExperience) => [...prevExperience, newExperience]);

    e.target.reset();
  };

  const handleDeleteExperience = (id) => {
    setExperience((prevExperience) =>
      prevExperience.filter((exp) => exp.id !== id)
    );
  };

  // SKILLS

  const [skills, setSkills] = useState([]);

  const handleAddSkills = (e) => {
    e.preventDefault();
    const newSkills = {
      id: crypto.randomUUID(),
      addedSkill: e.target.addedSkill.value,
    };

    setSkills((prevSkills) => [...prevSkills, newSkills]);

    e.target.reset();
  };

  const handleDeleteSkills = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  // LANGUAGES

  const [languages, setLanguages] = useState([]);

  const handleAddLanguages = (e) => {
    e.preventDefault();
    const newLanguages = {
      id: crypto.randomUUID(),
      addedLang: e.target.language.value,
      levelLang: e.target.levels.value,
    };

    setLanguages((prevLanguages) => [...prevLanguages, newLanguages]);

    e.target.reset();
  };

  const handleDeleteLanguages = (id) => {
    setLanguages((prevLanguages) =>
      prevLanguages.filter((lang) => lang.id !== id)
    );
  };

  return (
    <div className="flex gap-4">
      <section className="formContainer">
        <Form
          onAddPersonalInfo={handleAddPersonalInfo}
          onAddEducation={handleAddEducation}
          onDeleteEducation={handleDeleteEducation}
          onDeleteExperience={handleDeleteExperience}
          onAddExperience={handleAddExperience}
          onAddSkills={handleAddSkills}
          onDeleteSkills={handleDeleteSkills}
          onAddLanguages={handleAddLanguages}
          onDeleteLanguages={handleDeleteLanguages}
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
