import React from 'react';
import TrashIcon from './assets/trash-can-outline.svg';

const levels = [
  { level: 'A1', numeric: 1 },
  { level: 'A2', numeric: 2 },
  { level: 'B1', numeric: 3 },
  { level: 'B2', numeric: 4 },
  { level: 'C1', numeric: 5 },
  { level: 'C2', numeric: 6 },
];

const LevelCircles = ({ levelLang }) => {
  const levelNumeric = levels.find((item) => item.level === levelLang)?.numeric;
  console.log(levelNumeric);
  const circles = [];
  for (let i = 1; i <= 6; i++) {
    circles.push(
      <div
        key={i}
        className={`w-4 h-4 mx-1 rounded-full border-2 ${
          i <= levelNumeric ? 'bg-gray-700 border-gray-700' : 'border-gray-700'
        }`}
      />,
    );
  }

  return circles;
};

function AddedLang({
  id, addedLang, levelLang, onDeleteLanguages,
}) {
  return (
    <div className="flex items-center">
      <p className="mr-2">{addedLang}</p>
      <p className="mr-2">{levelLang}</p>
      <LevelCircles levelLang={levelLang} />
      {onDeleteLanguages && (
        <button
          className="hover:opacity-50"
          onClick={() => onDeleteLanguages(id)}
        >
          <img src={TrashIcon} alt="Trash can icon" className="w-4" />
        </button>
      )}
    </div>
  );
}

export default function AddedDataLang({ languagesData, onDeleteLanguages }) {
  return (
    <div className="mt-4">
      {languagesData.map((languages) => (
        <AddedLang
          key={languages.id}
          id={languages.id}
          addedLang={languages.addedLang}
          levelLang={languages.levelLang}
          onDeleteLanguages={onDeleteLanguages}
        />
      ))}
    </div>
  );
}
