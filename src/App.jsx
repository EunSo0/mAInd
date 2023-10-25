import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Result from "./pages/Result";
import MyPage from "./pages/MyPage";
import Counsel from "./pages/Counsel";
import ReservationClient from "./pages/client/Reservation";
import InitialSurveyClient from "./pages/client/InitialSurvey";
import InitialSurveyEdit from "./pages/client/InitialSurveyEdit";
import ReservationCounselor from "./pages/counselor/Reservation";
import InitialSurveyCounselor from "./pages/counselor/InitialSurvey";
import GoogleLoginRedirect from "./pages/GoogleLoginRedirect";
import Upload from "./pages/Upload";
import OnlineMeeting from "./components/OnlineMeeting/OnlineMeeting";
import WebCam from "./components/webRTC/Webcam";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counsel" element={<Counsel />} />
        <Route path="/counsel/upload/:survey_id" element={<Upload />} />
        <Route path="/reservation/client" element={<ReservationClient />} />
        <Route path="/initialSurvey/client" element={<InitialSurveyClient />} />
        <Route
          path="/initialSurvey/edit/:survey_id"
          element={<InitialSurveyEdit />}
        />
        <Route
          path="/reservation/counselor"
          element={<ReservationCounselor />}
        />
        <Route
          path="/initialSurvey/:survey_id"
          element={<InitialSurveyCounselor />}
        />
        <Route path="/result/:counseling_id" element={<Result />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route
          path="/oauth2/redirect/:token"
          element={<GoogleLoginRedirect />}
        />
        <Route path="/OnlineMeeting" element={<OnlineMeeting />} />
        <Route path="/WebCam" element={<WebCam />} />
      </Routes>
    </>
  );
}

export default App;
