import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import OnlineMeeting from "../components/OnlineMeeting/OnlineMeeting";
import Initial_survey from "./Initial_survey";
import Result from "./Result";
import Mypage from "./MyPage";

function URLRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<OnlineMeeting />} />
        <Route path="/initial_survey" element={<Initial_survey />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default URLRoutes;
