import React from "react";
import TrashIcon from "./assets/trash-can-outline.svg";

const AddedLang = ({ id, addedLang, levelLang, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 1; i <= 6; i++) {
      circles.push(
        <div
          key={i}
          className={`w-4 h-4 mx-1 rounded-full border-2 ${
            i <= levelLang ? "bg-gray-700" : "border-gray-700"
          }`}
        ></div>
      );
    }
    return circles;
  };

  return (
    <div className="flex items-center">
      <p className="mr-2">{addedLang}</p>
      <p className="mr-2">{levelLang}</p>
      {renderCircles()}

      <button className="hover:opacity-50" onClick={handleDelete}>
        <img src={TrashIcon} alt="Trash can icon" className="w-4" />
      </button>
    </div>
  );
};

export default function AddedDataLang({ langData, onDeleteLang }) {
  return (
    <div className="mt-4">
      {langData.map((languages) => (
        <AddedLang
          key={languages.id}
          id={languages.id}
          addedLang={languages.addedLang}
          levelLang={languages.levelLang}
          onDelete={onDeleteLang}
        />
      ))}
    </div>
  );
}
