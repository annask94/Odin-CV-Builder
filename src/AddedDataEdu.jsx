import React from "react";
import TrashIcon from "./assets/trash-can-outline.svg";

const AddedEdu = ({
  id,
  startDate,
  endDate,
  current,
  course,
  institution,
  onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <section className="AddedData border-b-2 mb-2 p-4 flex gap-4">
      <div>
        <p className="duration">
          {startDate} - {current ? "Present" : endDate}
        </p>
        <h2 className="course">{course}</h2>
        <p className="institution">{institution}</p>
      </div>
      <button className="hover:opacity-50" onClick={handleDelete}>
        <img src={TrashIcon} alt="Trash can icon" className="w-8" />
      </button>
    </section>
  );
};

export default function AddedDataEdu({ educationData, onDeleteEducation }) {
  console.log("educationData:", educationData);
  return (
    <div>
      {educationData &&
        educationData.map((edu) => (
          <AddedEdu
            key={edu.id}
            id={edu.id}
            startDate={edu.startDate}
            endDate={edu.current ? "Present" : edu.endDate}
            course={edu.course}
            institution={edu.institution}
            onDelete={onDeleteEducation}
          />
        ))}
    </div>
  );
}
