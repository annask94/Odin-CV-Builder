import React from "react";
import TrashIcon from "./assets/trash-can-outline.svg";

const AddedExp = ({
  id,
  startDateExp,
  endDateExp,
  currentExp,
  position,
  company,
  onDeleteExperience,
  customClassNameExp,
  customClassNameExpPosition,
}) => {
  const handleDelete = () => {
    onDeleteExperience(id);
  };
  return (
    <section className={customClassNameExp}>
      <div>
        <p className="duration">
          {startDateExp} - {currentExp ? "Present" : endDateExp}
        </p>
        <h2 className={customClassNameExpPosition}>{position}</h2>
        <p className="company">{company}</p>
      </div>
      {onDeleteExperience && (
        <button className="hover:opacity-50" onClick={handleDelete}>
          <img src={TrashIcon} alt="Trash can icon" className="w-8" />
        </button>
      )}
    </section>
  );
};

export default function AddedDataExp({
  experienceData,
  onDeleteExperience,
  customClassNameExp,
  customClassNameExpPosition,
}) {
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
          onDeleteExperience={onDeleteExperience}
          customClassNameExp={customClassNameExp}
          customClassNameExpPosition={customClassNameExpPosition}
        />
      ))}
    </div>
  );
}
