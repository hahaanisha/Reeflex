// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RapidfireHome from "./pages/RapidfireHome";
import RapidfireGame from "./components/RapidfireGame";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rapidfire Game Routes */}
        <Route path="/" element={<RapidfireHome />} />
        <Route path="/rapidfire/:categoryId" element={<RapidfireGame />} />
      </Routes>
    </Router>
  );
};

export default App;
