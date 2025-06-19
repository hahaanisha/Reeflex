// StatementCard.jsx
import React from "react";

const StatementCard = ({ option, selected, correctCategory, onClick }) => {
  const isSelected = selected.includes(option.text);
  const isCorrect = option.categoryId === correctCategory;

  const style = isSelected
    ? isCorrect
      ? "bg-green-100 border-green-500 text-green-800"
      : "bg-red-100 border-red-500 text-red-800"
    : "hover:bg-gray-100";

  return (
    <button
      onClick={() => onClick(option)}
      disabled={isSelected}
      className={`p-4 rounded-md border transition text-left ${style}`}
    >
      {option.text}
    </button>
  );
};

export default StatementCard;
