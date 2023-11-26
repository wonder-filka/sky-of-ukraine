import "./App.css";
import React from "react";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Reports } from "./pages/Reports";
import { About } from "./pages/About";
import Project from "./components/Project/Project";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Login } from "./pages/Login";

function App() {
  // eslint-disable-next-line
  const { t } = useTranslation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="reports" element={<Reports />} />
        <Route path="about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
