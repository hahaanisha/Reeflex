// ProgressBar.jsx
import React from "react";

const ProgressBar = ({ current, total }) => {
  const percent = Math.min((current / total) * 100, 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className="bg-teal-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
