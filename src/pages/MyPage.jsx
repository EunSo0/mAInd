import React from "react";
import styled from "@emotion/styled";
import Profile from "../components/MyPage/Profile";
//import List from "../components/MyPage/List";
import Detail from "../components/MyPage/DetailList";

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
      <Base>
        <Profile></Profile>
        <Detail></Detail>
      </Base>
    </>
  );
}
