// RapidfireGame.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../data/rapidfireData";
import ProgressBar from "./ProgressBar";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const RapidfireGame = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const [selectedTexts, setSelectedTexts] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [options, setOptions] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [clickedOption, setClickedOption] = useState(null);

  useEffect(() => {
    generateOptions();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameEnded(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const generateOptions = () => {
    const allStatements = categories.flatMap((c) =>
      c.statements.map((text) => ({ text, categoryId: c.id }))
    );
    let filtered = allStatements.filter((s) => !selectedTexts.includes(s.text));
    setOptions(shuffle(filtered).slice(0, 5));
    setClickedOption(null);
  };

  const handleClick = (option) => {
    if (selectedTexts.includes(option.text)) return;
    setSelectedTexts((prev) => [...prev, option.text]);
    setClickedOption(option);
    if (option.categoryId === categoryId) setScore((prev) => prev + 1);
    setTimeout(() => {
      generateOptions();
    }, 500);
  };

  if (!category)
    return <div className="p-8 text-red-600">Category not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-teal-600 text-center mb-4">
        Rapidfire: {category.title}
      </h1>

      <ProgressBar current={30 - timeLeft} total={30} />
      {!gameEnded ? (
        <>
          <p className="text-sm text-gray-600 mb-4">
            Select only the correct statements for this category.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {options.map((option, idx) => {
              const isClicked = clickedOption?.text === option.text;
              const isCorrect = option.categoryId === categoryId;

              const style = isClicked
                ? isCorrect
                  ? "bg-green-100 border-green-500 text-green-800"
                  : "bg-red-100 border-red-500 text-red-800"
                : "hover:bg-gray-100";

              return (
                <button
                  key={idx}
                  onClick={() => handleClick(option)}
                  className={`p-4 rounded-md border transition text-left ${style}`}
                >
                  {option.text}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-right text-sm text-gray-600">
            Score: {score}
          </p>
        </>
      ) : (
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-green-700">
            🎯 You scored {score} points
          </h2>
          <p className="text-lg mt-2">
            {score >= 15
              ? "🌟 Outstanding! You’re lightning sharp."
              : score >= 10
              ? "⚡ Great job!"
              : score >= 5
              ? "🌀 Try again to improve!"
              : "🚫 Time to refresh those facts!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default RapidfireGame;
