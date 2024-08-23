import React from "react";
import TrashIcon from "./assets/trash-can-outline.svg";

function AddedEdu({
  id,
  startDate,
  endDate,
  current,
  course,
  institution,
  onDeleteEducation,
  customClassNameEdu,
  customClassNameEduCourse,
}) {
  return (
    <section className={customClassNameEdu}>
      <div>
        <p className="duration">
          {startDate} -{current ? "Present" : endDate}
        </p>
        <h2 className={customClassNameEduCourse}>{course}</h2>
        <p className="institution">{institution}</p>
      </div>
      {onDeleteEducation && (
        <button
          className="hover:opacity-50"
          type="button"
          onClick={() => onDeleteEducation(id)}
        >
          <img src={TrashIcon} alt="Trash can icon" className="w-8" />
        </button>
      )}
    </section>
  );
}

export default function AddedDataEdu({
  educationData,
  onDeleteEducation,
  customClassNameEdu,
  customClassNameEduCourse,
}) {
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
            onDeleteEducation={onDeleteEducation}
            customClassNameEdu={customClassNameEdu}
            customClassNameEduCourse={customClassNameEduCourse}
          />
        ))}
    </div>
  );
}
