import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import OnlineMeeting from "../components/OnlineMeeting/OnlineMeeting";
import Inital_survey from "./Inital_survey";
import Result from "./Result";

function URLRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<OnlineMeeting />} />
        <Route path="/initial_survey" element={<Inital_survey />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default URLRoutes;
