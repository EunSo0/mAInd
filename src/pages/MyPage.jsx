import React from "react";
import styled from "@emotion/styled";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Mypage/Profile";
import List from "../components/Mypage/List";
//import Detail from "../components/Mypage/DetailList";

const Base = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eff1ff;
`;

export default function MyPage() {
  return (
    <>
      <Header />

      <Base>
        <Profile></Profile>
        <List></List>
      </Base>

      <Footer />
    </>
  );
}
