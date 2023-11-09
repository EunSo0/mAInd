/* eslint-disable react/prop-types */
import React from "react";

import * as L from "../../styles/components/mypage/List.style";
import * as T from "../../styles/components/mypage/Table.style";
import { getCounselList, getCounselingList } from "../../api/api";
import { useQuery } from "react-query";
import { DateFormat } from "./../../utils/DateFormat";
import { detailId, roleState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

export default function List({ setIsDetail }) {
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
    setIsDetail(true);
    setSurveyId(survey_id);
  };

  return (
    <L.Wrapper>
      <L.ListWrapper>
        <L.Title>상담목록</L.Title>
      </L.ListWrapper>
      {role === "COUNSELOR" ? (
        <T.ChartWrapper>
          {Array.isArray(counselList) && counselList.length > 0 ? (
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
                {counselList.map((el, index) => (
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
                ))}
              </tbody>
            </T.Chart>
          ) : (
            <L.Undefined>상담 목록이 없습니다.</L.Undefined>
          )}
        </T.ChartWrapper>
      ) : (
        <T.ChartWrapper>
          {Array.isArray(clientList) && clientList.length > 0 ? (
            <T.Chart>
              <thead>
                <T.ChartTr>
                  <T.ChartTh>번호</T.ChartTh>
                  <T.ChartTh>내담자명</T.ChartTh>
                  <T.ChartTh>상담일자</T.ChartTh>
                  <T.ChartTh>증상</T.ChartTh>
                  <T.ChartTh>상담결과</T.ChartTh>
                </T.ChartTr>
              </thead>
              <tbody>
                {clientList.map((el, index) => (
                  <T.ChartTr key={index}>
                    <T.ChartTd>{index + 1}</T.ChartTd>
                    <T.ChartTd>{el.name}</T.ChartTd>
                    <T.ChartTd>{DateFormat(el.date)}</T.ChartTd>
                    <T.ChartTd key={index}>{el.symptoms.join(", ")}</T.ChartTd>
                    <T.ChartTd>
                      <Link to={`/result/${el.counseling_id}`}>
                        <T.ResultBtn>상담일지</T.ResultBtn>
                      </Link>
                    </T.ChartTd>
                  </T.ChartTr>
                ))}
              </tbody>
            </T.Chart>
          ) : (
            <L.Undefined>상담 목록이 없습니다.</L.Undefined>
          )}
        </T.ChartWrapper>
      )}
    </L.Wrapper>
  );
}
