import React from "react";
import { useState } from "react";
import AddedDataEdu from "./AddedData.jsx";

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

export default function Form() {
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

  const handleDeleteEducation = (id) => {
    setEducation((prevEducation) =>
      prevEducation.filter((edu) => edu.id !== id)
    );
  };

  return (
    <div className="bg-white drop-shadow p-4">
      <FieldsetLegend legend="Personal Informations">
        <Input label="Full Name" id="name" type="text" />
        <Input label="E-mail adress" id="email" type="email" />
        <Input label="Phone number" id="phone" type="tel" />
        <AddSubmitBtn action="Add" />
      </FieldsetLegend>
      <FieldsetLegend legend="Education" onSubmit={handleAddEducation}>
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
        onDeleteEducation={handleDeleteEducation}
      />

      <FieldsetLegend legend="Experience">
        <div className="grid grid-cols-2 gap-x-4">
          <Input label="Start date" id="start-date-work" type="month" />
          <Input label="End date" id="end-date-work" type="month" />
          <Input label="Still" id="current-work" type="checkbox" />
          <Input label="Position" id="position" type="text" />
          <Input label="Company" id="company" type="text" />
          <AddSubmitBtn action="Add" />
        </div>
      </FieldsetLegend>
      <FieldsetLegend legend="Skills">
        <div className="">
          <Input label="Type your skills" id="skills" type="text" />
          <AddSubmitBtn action="Add" />
        </div>
      </FieldsetLegend>
      <FieldsetLegend legend="Languages">
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
    </div>
  );
}
