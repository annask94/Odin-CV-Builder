import React from "react";
import AddedDataEdu from "./AddedDataEdu.jsx";
import AddedDataExp from "./AddedDataExp.jsx";
import AddedDataSkills from "./AddedDataSkills.jsx";
import AddedDataLang from "./AddedDataLang.jsx";

function FieldsetLegend({ legend, onSubmit, children }) {
  return (
    <fieldset className="mt-4">
      <legend className="uppercase mb-4 text-lg text-gray-700 border-b-2 border-gray-700">
        {legend}
      </legend>
      <form onSubmit={onSubmit}>{children}</form>
    </fieldset>
  );
}

function Input({ label, ...props }) {
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
}

function AddSubmitBtn({ action }) {
  return (
    <button
      type="submit"
      className="col-span-3 p-2 bg-gray-700 text-white uppercase rounded-md hover:opacity-70 w-full"
    >
      {action}
    </button>
  );
}

export default function Form({
  education,
  experience,
  skills,
  languages,
  onAddPersonalInfo,
  onAddEducation,
  onDeleteEducation,
  onAddExperience,
  onDeleteExperience,
  onAddSkills,
  onDeleteSkills,
  onAddLanguages,
  onDeleteLanguages,
}) {
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
        educationData={education}
        onDeleteEducation={onDeleteEducation}
        customClassNameEdu="border-b-2 mb-2 p-4 flex gap-4"
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
        experienceData={experience}
        onDeleteExperience={onDeleteExperience}
        customClassNameExp="border-b-2 mb-2 p-4 flex gap-4"
      />
      <FieldsetLegend legend="Skills" onSubmit={onAddSkills}>
        <div className="">
          <Input label="Type your skills" id="addedSkill" type="text" />
          <AddSubmitBtn action="Add" />
        </div>
      </FieldsetLegend>
      <AddedDataSkills skillsData={skills} onDeleteSkills={onDeleteSkills} />
      <FieldsetLegend legend="Languages" onSubmit={onAddLanguages}>
        <Input label="Language" id="language" type="text" />
        <Input label="Levels" id="levels" type="text" list="languageLevel" />
        <datalist id="languageLevel">
          <option aria-label="A1" value="A1" />
          <option aria-label="A2" value="A2" />
          <option aria-label="B1" value="B1" />
          <option aria-label="B2" value="B2" />
          <option aria-label="C1" value="C1" />
          <option aria-label="C2" value="C2" />
        </datalist>
        <AddSubmitBtn action="Add" />
      </FieldsetLegend>
      <AddedDataLang
        languagesData={languages}
        onDeleteLanguages={onDeleteLanguages}
      />
    </div>
  );
}
