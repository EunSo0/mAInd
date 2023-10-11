/* eslint-disable react/prop-types */
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import * as L from "../../styles/components/mypage/List.style";
import * as T from "../../styles/components/mypage/Table.style";

const BASE_URL = "http://maind.site";

const CounselList = [
  { num: 1, name: "김내담", birth: "00.04.10", symptom: "우울", count: 1 },
  {
    num: 2,
    name: "차덕성",
    birth: "98.02.21",
    symptom: "수면장애",
    count: 3,
  },
];

export default function List({ isDetail, setIsDetail }) {
  const profileData = useQuery(
    ["profileData"],
    () => axios.get(`${BASE_URL}/profiles/1`),
    {
      onSuccess: (data) => {
        console.log("success", data);
      },
    }
  );
  console.log(profileData);

  const onClickDetail = () => {
    setIsDetail(!isDetail);
  };

  return (
    <L.Wrapper>
      <L.ListWrapper>
        <L.Title>상담목록</L.Title>
      </L.ListWrapper>
      <T.ChartWrapper>
        <T.Chart>
          <T.ChartTr>
            <T.ChartTh>번호</T.ChartTh>
            <T.ChartTh>내담자명</T.ChartTh>
            <T.ChartTh>생년월일</T.ChartTh>
            <T.ChartTh>증상</T.ChartTh>
            <T.ChartTh>상담횟수</T.ChartTh>
          </T.ChartTr>
          {CounselList.map((el, index) => {
            return (
              <T.ChartTr key={index}>
                <T.ChartTd>{index + 1}</T.ChartTd>
                <T.ChartTd onClick={onClickDetail} className="name">
                  {el.name}
                </T.ChartTd>
                <T.ChartTd>{el.birth}</T.ChartTd>
                <T.ChartTd>{el.symptom}</T.ChartTd>
                <T.ChartTd>{el.count}회</T.ChartTd>
              </T.ChartTr>
            );
          })}
        </T.Chart>
      </T.ChartWrapper>
    </L.Wrapper>
  );
}
