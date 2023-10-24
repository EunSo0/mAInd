import React from "react";
import styled from "@emotion/styled";
import Profile from "../components/Mypage/Profile";
import List from "../components/Mypage/List";
import Detail from "../components/Mypage/DetailList";
import { useRecoilState } from "recoil";
import { detailState } from "../recoil/atom";

const Base = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eff1ff;
`;

export default function MyPage() {
  const [isDetail, setIsDetail] = useRecoilState(detailState);
  console.log(isDetail);

  return (
    <>
      <Base>
        <Profile></Profile>
        {isDetail ? (
          <Detail setIsDetail={setIsDetail} />
        ) : (
          <List setIsDetail={setIsDetail} />
        )}
      </Base>
    </>
  );
}
