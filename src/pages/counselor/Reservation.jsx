import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import * as T from "../../styles/components/mypage/Table.style";
import Img from "../../images/counselImg.png";
import { DateFormat } from "./../../utils/DateFormat";
import { getReservationList } from "../../api/api";
import { useQuery } from "react-query";

export const Base = styled.div`
  width: 100%;
  min-height: 800px;
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
  const { data, isLoading, isError } = useQuery("userInfo", getReservationList);

  if (isLoading) {
    return <p>Loading user data...</p>;
  } else if (isError) {
    return <p>Error fetching user data</p>;
  }

  // userData를 사용하여 데이터 표시
  console.log(data);
  return (
    <Base>
      <Title>신규 상담 신청 내역이 1건 있습니다.</Title>
      <T.ChartWrapper>
        <T.Chart>
          <thead>
            <T.ChartTr>
              <T.ChartTh>번호</T.ChartTh>
              <T.ChartTh>신청일자</T.ChartTh>
              <T.ChartTh>이름</T.ChartTh>
              <T.ChartTh>생년월일</T.ChartTh>
              <T.ChartTh>증상</T.ChartTh>
              <T.ChartTh>승인/거절 일자</T.ChartTh>
              <T.ChartTh>초기설문지</T.ChartTh>
            </T.ChartTr>
          </thead>
          <tbody>
            {data.name ??
              data.map((el, index) => (
                <T.ChartTr key={index}>
                  <T.ChartTd>{index + 1}</T.ChartTd>
                  <T.ChartTd>{DateFormat(el.createdDate)}</T.ChartTd>
                  <T.ChartTd>{el.name}</T.ChartTd>
                  <T.ChartTd>{DateFormat(el.birth)}</T.ChartTd>
                  <T.ChartTd>{el.symptoms.join(", ")}</T.ChartTd>
                  {el.applyStatus === "ACCEPT" ? (
                    <T.ChartTd>{DateFormat(el.statusDate)}</T.ChartTd>
                  ) : el.applyStatus === "REJECT" ? (
                    <T.ChartTd>거절</T.ChartTd>
                  ) : el.applyStatus === "HOLD" ? (
                    <T.ChartTd>보류</T.ChartTd>
                  ) : (
                    <T.ChartTd>확인 전</T.ChartTd>
                  )}
                  <T.ChartTd>
                    <Link to={`/initialSurvey/${el.survey_id}`}>
                      <T.ResultBtn>초기설문지</T.ResultBtn>
                    </Link>
                  </T.ChartTd>
                </T.ChartTr>
              ))}
          </tbody>
        </T.Chart>
      </T.ChartWrapper>
      <CounselImg />
    </Base>
  );
}
