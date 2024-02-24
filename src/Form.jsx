import React from "react";
import { useState, useEffect } from "react";
import AddedDataEdu from "./AddedDataEdu.jsx";
import AddedDataExp from "./AddedDataExp.jsx";
import AddedDataSkills from "./AddedDataSkills.jsx";
import AddedDataLang from "./AddedDataLang.jsx";

const FieldsetLegend = ({ legend, onSubmit, children }) => {
  return (
    <fieldset className="mt-4">
      <legend className="uppercase mb-4 text-lg text-gray-700 border-b-2 border-gray-700">
        {legend}
      </legend>
      <form onSubmit={onSubmit}>{children}</form>
    </fieldset>
  );
};

const Input = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.id}
      >
        {label}
      </label>
      <input
        {...props}
        className="border border-gray-300 px-2 py-1 rounded-md w-full"
      />
    </div>
  );
};

const AddSubmitBtn = ({ action }) => {
  return (
    <button
      type="submit"
      className="col-span-3 p-2 bg-gray-700 text-white uppercase rounded-md hover:opacity-70 w-full"
    >
      {action}
    </button>
  );
};

export default function Form({
  education,
  experience,
  skills,
  languages,
  onAddPersonalInfo,
  onAddEducation,
  onAddExperience,
  onAddSkills,
  onAddLanguages,
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

  console.log("Education prop:", education);
  console.log("EducationData state:", educationData);
  //EDUCATION

  const handleDeleteEducation = (id) => {
    setEducation((prevEducation) =>
      prevEducation.filter((edu) => edu.id !== id)
    );
  };

  //EXPERIENCE

  const handleDeleteExperience = (id) => {
    setExperience((prevExperience) =>
      prevExperience.filter((exp) => exp.id !== id)
    );
  };

  //SKILLS

  const handleDeleteSkills = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  //LANGUAGES

  const handleDeleteLang = (id) => {
    setLanguages((prevLanguages) =>
      prevLanguages.filter((lang) => lang.id !== id)
    );
  };

  return (
    <div className="bg-white drop-shadow-md p-4 m-8">
      <FieldsetLegend
        legend="Personal Informations"
        onSubmit={onAddPersonalInfo}
      >
        <Input label="Full Name" id="name" type="text" />
        <Input label="E-mail adress" id="email" type="email" />
        <Input label="Phone number" id="phone" type="tel" />
        <AddSubmitBtn action="Add" />
      </FieldsetLegend>
      <FieldsetLegend legend="Education" onSubmit={onAddEducation}>
        <div className="grid grid-cols-2 gap-x-4">
          <Input label="Start date" id="startDate" type="month" />
          <Input label="End date" id="endDate" type="month" />
          <Input label="Still" id="current" type="checkbox" />
          <Input
            label="Course"
            id="course"
            type="text"
            placeholder="eg. Masters in Graphic Design"
          />
          <Input label="Institution" id="institution" type="text" />
          <AddSubmitBtn action="Add" />
        </div>
      </FieldsetLegend>
      <AddedDataEdu
        educationData={educationData}
        onDeleteEducation={handleDeleteEducation}
      />

      <FieldsetLegend legend="Experience" onSubmit={onAddExperience}>
        <div className="grid grid-cols-2 gap-x-4">
          <Input label="Start date" id="startDateExp" type="month" />
          <Input label="End date" id="endDateExp" type="month" />
          <Input label="Still" id="currentExp" type="checkbox" />
          <Input label="Position" id="position" type="text" />
          <Input label="Company" id="company" type="text" />
          <AddSubmitBtn action="Add" />
        </div>
      </FieldsetLegend>
      <AddedDataExp
        experienceData={experienceData}
        onDeleteExperience={handleDeleteExperience}
      />
      <FieldsetLegend legend="Skills" onSubmit={onAddSkills}>
        <div className="">
          <Input label="Type your skills" id="addedSkill" type="text" />
          <AddSubmitBtn action="Add" />
        </div>
      </FieldsetLegend>
      <AddedDataSkills
        skillsData={skillsData}
        onDeleteSkills={handleDeleteSkills}
      />
      <FieldsetLegend legend="Languages" onSubmit={onAddLanguages}>
        <Input label="Language" id="language" type="text" />
        <Input label="Levels" id="levels" type="text" list="languageLevel" />
        <datalist id="languageLevel">
          <option value="A1"></option>
          <option value="A2"></option>
          <option value="B1"></option>
          <option value="B2"></option>
          <option value="C1"></option>
          <option value="C2"></option>
        </datalist>
        <AddSubmitBtn action="Add" />
      </FieldsetLegend>
      <AddedDataLang
        languagesData={languagesData}
        onDeleteLang={handleDeleteLang}
      />
    </div>
  );
}
