// RapidfireHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/rapidfireData";

const RapidfireHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
        Select Rapidfire Category
      </h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => navigate(`/rapidfire/${cat.id}`)}
            className="p-6 border border-gray-300 rounded-xl cursor-pointer shadow hover:shadow-md transition bg-white hover:bg-teal-50 w-[260px]"
          >
            <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
            <p className="text-sm text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RapidfireHome;
