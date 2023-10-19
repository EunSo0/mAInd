/* eslint-disable react/prop-types */
import React from "react";

import * as L from "../../styles/components/mypage/List.style";
import * as T from "../../styles/components/mypage/Table.style";
import { getCounselList } from "../../api/api";
import { useQuery } from "react-query";
import { DateFormat } from "./../../utils/DateFormat";

export default function List({ isDetail, setIsDetail }) {
  const onClickDetail = () => {
    setIsDetail(!isDetail);
  };

  const { data, isLoading, isError } = useQuery("counselList", getCounselList);

  if (isLoading) {
    return <p>Loading user data...</p>;
  } else if (isError) {
    return <p>Error fetching user data</p>;
  }

  return (
    <L.Wrapper>
      <L.ListWrapper>
        <L.Title>상담목록</L.Title>
      </L.ListWrapper>
      {data.length == 0 ? (
        <L.Undefined>상담 목록이 없습니다.</L.Undefined>
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
              {data.map((el, index) => {
                return (
                  <T.ChartTr key={index}>
                    <T.ChartTd>{index + 1}</T.ChartTd>
                    <T.ChartTd onClick={onClickDetail} className="name">
                      {el.name}
                    </T.ChartTd>
                    <T.ChartTd>{DateFormat(el.birth)}</T.ChartTd>
                    <T.ChartTd key={index}>{el.symptoms.join(", ")}</T.ChartTd>
                  </T.ChartTr>
                );
              })}
            </tbody>
          </T.Chart>
        </T.ChartWrapper>
      )}
    </L.Wrapper>
  );
}
