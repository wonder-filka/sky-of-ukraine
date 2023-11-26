import { Authentication } from "./pages/authentication";
import "./App.css";
import { Home } from "./pages/home";
import { AddProject } from "./pages/addProject";
import { Route, Routes } from "react-router-dom";
import EditProject from "./components/EditCase";
import { CurrentUserProvider } from "./contexts/currentUser";
import CurrentUserChecker from "./components/CurrentUserChecker";
import { Reports } from "./pages/reports";
import EditReport from "./components/EditReport";
import { AddReport } from "./pages/addReport";

function App() {
  return (
    <>
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<EditProject />} />
            <Route path="/add" element={<AddProject />} />
            <Route path="/add-reports" element={<AddReport />} />
            <Route path="/login" element={<Authentication />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/report/:id" element={<EditReport />} />
          </Routes>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </>
  );
}

export default App;
