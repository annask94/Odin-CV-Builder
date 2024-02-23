import React from "react";
import TrashIcon from "./assets/trash-can-outline.svg";

const AddedExp = ({
  id,
  startDateExp,
  endDateExp,
  currentExp,
  position,
  company,
  onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <section className="AddedData border-b-2 mb-2 p-4 flex gap-4">
      <div>
        <p className="duration">
          {startDateExp} - {currentExp ? "Present" : endDateExp}
        </p>
        <h2 className="course">{position}</h2>
        <p className="institution">{company}</p>
      </div>
      <button className="hover:opacity-50" onClick={handleDelete}>
        <img src={TrashIcon} alt="Trash can icon" className="w-8" />
      </button>
    </section>
  );
};

export default function AddedDataExp({ experienceData, onDeleteExperience }) {
  return (
    <div>
      {experienceData.map((exp) => (
        <AddedExp
          key={exp.id}
          id={exp.id}
          startDateExp={exp.startDateExp}
          endDateExp={exp.currentExp ? "Present" : exp.endDateExp}
          position={exp.position}
          company={exp.company}
          onDelete={onDeleteExperience}
        />
      ))}
    </div>
  );
}
