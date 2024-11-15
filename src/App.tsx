import React from "react";
import Header from "./components/Header/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;