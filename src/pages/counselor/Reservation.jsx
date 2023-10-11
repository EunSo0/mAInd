import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import * as T from "../../styles/components/mypage/Table.style";
import Img from "../../images/counselImg.png";

const ClientList = [
  {
    apply_date: "23.09.12",
    name: "김내담",
    birth: "00.04.10",
    symptom: "우울",
    status: "확인 전",
    after_date: "확인 전",
  },
  {
    apply_date: "23.09.10",
    name: "차덕성",
    birth: "98.02.21",
    symptom: "수면 장애",
    status: "승인",
    after_date: "23.09.10",
  },
];

export const Base = styled.div`
  width: 100%;
  height: calc(100vh - 148px);
  overflow-x: hidden;
  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin: 50px;
`;

export const CounselImg = styled.div`
  width: 605px;
  height: 378px;
  background: url(${Img});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: auto;
  margin-bottom: 20px;
`;
export default function Reservation() {
  return (
    <Base>
      <Title>신규 상담 신청 내역이 1건 있습니다.</Title>
      <T.ChartWrapper>
        <T.Chart>
          <T.ChartTr>
            <T.ChartTh>번호</T.ChartTh>
            <T.ChartTh>신청일자</T.ChartTh>
            <T.ChartTh>이름</T.ChartTh>
            <T.ChartTh>생년월일</T.ChartTh>
            <T.ChartTh>증상</T.ChartTh>
            <T.ChartTh>승인/거절 일자</T.ChartTh>
            <T.ChartTh>초기설문지</T.ChartTh>
          </T.ChartTr>
          {ClientList.map((el, index) => (
            <T.ChartTr key={index}>
              <T.ChartTd>{el.apply_date}</T.ChartTd>
              <T.ChartTd>{el.name}</T.ChartTd>
              <T.ChartTd>{el.birth}</T.ChartTd>
              <T.ChartTd>{el.symptom}</T.ChartTd>
              <T.ChartTd>{el.status}</T.ChartTd>
              <T.ChartTd>{el.after_date}</T.ChartTd>
              <T.ChartTd>
                <Link to="/initialSurvey/counselor">
                  <T.ResultBtn>초기설문지</T.ResultBtn>
                </Link>
              </T.ChartTd>
            </T.ChartTr>
          ))}
        </T.Chart>
      </T.ChartWrapper>
      <CounselImg />
    </Base>
  );
}
