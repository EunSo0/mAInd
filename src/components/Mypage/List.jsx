/* eslint-disable react/prop-types */
import React from "react";

import * as L from "../../styles/components/mypage/List.style";
import * as T from "../../styles/components/mypage/Table.style";
import { getCounselList, getCounselingList } from "../../api/api";
import { useQuery } from "react-query";
import { DateFormat } from "./../../utils/DateFormat";
import { detailId, roleState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

export default function List({ isDetail, setIsDetail }) {
  const [, setSurveyId] = useRecoilState(detailId);
  const [role] = useRecoilState(roleState);

  const {
    data: counselList,
    isLoading: counselLoading,
    isError: counselError,
  } = useQuery("counselList", getCounselList);

  const {
    data: clientList,
    isLoading: clientLoading,
    isError: clientError,
  } = useQuery("clientList", getCounselingList);

  if (counselLoading) {
    return <p>Loading user data...</p>;
  } else if (counselError) {
    return <p>Error fetching user data</p>;
  }

  if (clientLoading) {
    return <p>Loading user data...</p>;
  } else if (clientError) {
    return <p>Error fetching user data</p>;
  }

  console.log(counselList);
  console.log(clientList);

  const onClickDetail = (survey_id) => {
    setIsDetail(!isDetail);
    setSurveyId(survey_id);
  };

  return (
    <L.Wrapper>
      <L.ListWrapper>
        <L.Title>상담목록</L.Title>
      </L.ListWrapper>
      {counselList.length === 0 ? (
        <L.Undefined>상담 목록이 없습니다.</L.Undefined>
      ) : role === "COUNSELOR" ? (
        <T.ChartWrapper>
          <T.Chart>
            <thead>
              <T.ChartTr>
                <T.ChartTh>번호</T.ChartTh>
                <T.ChartTh>내담자명</T.ChartTh>
                <T.ChartTh>생년월일</T.ChartTh>
                <T.ChartTh>증상</T.ChartTh>
              </T.ChartTr>
            </thead>
            <tbody>
              {Array.isArray(counselList) && counselList.length > 0 ? (
                counselList.map((el, index) => (
                  <T.ChartTr key={index}>
                    <T.ChartTd>{index + 1}</T.ChartTd>
                    <T.ChartTd
                      onClick={() => onClickDetail(el.survey_id)}
                      className="name"
                    >
                      {el.name}
                    </T.ChartTd>
                    <T.ChartTd>{DateFormat(el.birth)}</T.ChartTd>
                    <T.ChartTd key={index}>{el.symptoms.join(", ")}</T.ChartTd>
                  </T.ChartTr>
                ))
              ) : (
                <L.Undefined>상담 목록이 없습니다.</L.Undefined>
              )}
            </tbody>
          </T.Chart>
        </T.ChartWrapper>
      ) : (
        <T.ChartWrapper>
          <T.Chart>
            <thead>
              <T.ChartTr>
                <T.ChartTh>번호</T.ChartTh>
                <T.ChartTh>내담자명</T.ChartTh>
                <T.ChartTh>생년월일</T.ChartTh>
                <T.ChartTh>증상</T.ChartTh>
              </T.ChartTr>
            </thead>
            <tbody>
              {Array.isArray(clientList) && clientList.length > 0 ? (
                clientList.map((el, index) => (
                  <T.ChartTr key={index}>
                    <T.ChartTd>{index + 1}</T.ChartTd>
                    <T.ChartTd
                      onClick={() => onClickDetail(el.survey_id)}
                      className="name"
                    >
                      {el.name}
                    </T.ChartTd>
                    <T.ChartTd>{DateFormat(el.birth)}</T.ChartTd>
                    <T.ChartTd key={index}>{el.symptoms.join(", ")}</T.ChartTd>
                  </T.ChartTr>
                ))
              ) : (
                <L.Undefined>상담 목록이 없습니다.</L.Undefined>
              )}
            </tbody>
          </T.Chart>
        </T.ChartWrapper>
      )}
    </L.Wrapper>
  );
}
