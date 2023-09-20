import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import InitialSurvey from "./pages/InitialSurvey";
import Result from "./pages/Result";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initial_survey" element={<InitialSurvey />} />
        <Route path="/result" element={<Result />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
