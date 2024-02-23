import React from "react";
import TrashIcon from "./assets/trash-can-outline.svg";

const AddedSkills = ({ id, addedSkill, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <section className="flex gap-4">
      <p>{addedSkill}</p>
      <button className="hover:opacity-50" onClick={handleDelete}>
        <img src={TrashIcon} alt="Trash can icon" className="w-4" />
      </button>
    </section>
  );
};

export default function AddedDataSkills({ skillsData, onDeleteSkills }) {
  return (
    <div className="mt-4">
      {skillsData.map((skill) => (
        <AddedSkills
          key={skill.id}
          id={skill.id}
          addedSkill={skill.addedSkill}
          onDelete={onDeleteSkills}
        />
      ))}
    </div>
  );
}
