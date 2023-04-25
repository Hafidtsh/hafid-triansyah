import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DetailSkill from "./pages/DetailSkill";
import Introduction from "./pages/Introduction";
import SkillPage from "./pages/SkillPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="\" element={<Introduction />} />
      <Route path="\about" element={<AboutPage />} />
      <Route path="\skill" element={<SkillPage />} />
      <Route path="\skill\:item" element={<DetailSkill />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
