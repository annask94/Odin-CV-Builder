import React from 'react';
import TrashIcon from './assets/trash-can-outline.svg';

function AddedSkills({ id, addedSkill, onDeleteSkills }) {
  return (
    <section className="flex gap-4">
      <p>{addedSkill}</p>
      {onDeleteSkills && (
        <button className="hover:opacity-50" onClick={() => onDeleteSkills(id)}>
          <img src={TrashIcon} alt="Trash can icon" className="w-4" />
        </button>
      )}
    </section>
  );
}

export default function AddedDataSkills({ skillsData, onDeleteSkills }) {
  return (
    <div className="mt-4 grid grid-cols-2">
      {skillsData.map((skill) => (
        <AddedSkills
          key={skill.id}
          id={skill.id}
          addedSkill={skill.addedSkill}
          onDeleteSkills={onDeleteSkills}
        />
      ))}
    </div>
  );
}
