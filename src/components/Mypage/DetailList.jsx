import React from "react";
import * as DL from "../../styles/components/mypage/DetailList.style";
import * as T from "../../styles/components/mypage/Table.style";

const DetailListData = [
  { num: 1, name: "김내담", date: "23.09.13", symptom: "우울", counsel: false },
  { num: 2, name: "김내담", date: "23.09.06", symptom: "우울", counsel: true },
];

export default function DetailList() {
  return (
    <DL.Wrapper>
      <DL.ListWrapper>
        <DL.Title>내담자 목록 {">"} 김내담</DL.Title>
      </DL.ListWrapper>
      <DL.ContentWrapper>
        <DL.ContentList>
          <DL.ContentTitle>이름</DL.ContentTitle>
          <DL.ContentTxt>김내담</DL.ContentTxt>
        </DL.ContentList>
        <DL.ContentList>
          <DL.ContentTitle>생년월일</DL.ContentTitle>
          <DL.ContentTxt>00.04.10</DL.ContentTxt>
        </DL.ContentList>
        <DL.ContentList>
          <DL.ContentTitle>이메일</DL.ContentTitle>
          <DL.ContentTxt>naedam@gmail.com</DL.ContentTxt>
        </DL.ContentList>
        <DL.ContentList>
          <DL.ContentTitle>증상</DL.ContentTitle>
          <DL.ContentTxt>우울</DL.ContentTxt>
        </DL.ContentList>
        <DL.ContentList>
          <DL.ContentTitle>초기설문지</DL.ContentTitle>
          <DL.ContentTxt>
            <DL.SurveyBtn>초기설문지</DL.SurveyBtn>
          </DL.ContentTxt>
        </DL.ContentList>
      </DL.ContentWrapper>

      <T.ChartWrapper>
        <T.Chart>
          <T.ChartTr>
            <T.ChartTh>상담회차</T.ChartTh>
            <T.ChartTh>내담자명</T.ChartTh>
            <T.ChartTh>상담일자</T.ChartTh>
            <T.ChartTh>증상</T.ChartTh>
            <T.ChartTh>상담일지</T.ChartTh>
          </T.ChartTr>
          {DetailListData.map((el) => (
            <T.ChartTr key={el.num}>
              <T.ChartTd>{el.num}</T.ChartTd>
              <T.ChartTd>{el.name}</T.ChartTd>
              <T.ChartTd>{el.date}</T.ChartTd>
              <T.ChartTd>{el.symptom}</T.ChartTd>
              <T.ChartTd>
                {el.counsel ? <T.ResultBtn>상담일지</T.ResultBtn> : "제공전"}
              </T.ChartTd>
            </T.ChartTr>
          ))}
        </T.Chart>
      </T.ChartWrapper>
    </DL.Wrapper>
  );
}
