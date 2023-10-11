import React from "react";
import styled from "@emotion/styled";
import Profile from "../components/mypage/Profile";
import List from "../components/mypage/List";
import Detail from "../components/mypage/DetailList";
import { useRecoilState } from "recoil";
import { detailState } from "../recoil/atom";

const Base = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eff1ff;
`;

export default function MyPage() {
  const [isDetail, setIsDetail] = useRecoilState(detailState);

  return (
    <>
      <Base>
        <Profile></Profile>

        {isDetail ? (
          <Detail></Detail>
        ) : (
          <List setIsDetail={(isDetail, setIsDetail)}></List>
        )}
      </Base>
    </>
  );
}
