import React from "react";
import * as T from "../styles/components/mypage/Table.style";

const ReservationListData = [
  {
    date: "현재",
    step: "상담자 매칭",
    progress: "진행중",
    contents: "상담자 매칭이 진행 중입니다",
  },
  {
    date: "23.09.11",
    step: "설문지 작성",
    progress: "완료",
    contents: "초기 설문지 작성을 완료했습니다",
  },
];

export default function ReservationList() {
  return (
    <T.ChartWrapper>
      <T.Chart>
        <T.ChartTr>
          <T.ChartTh>일자</T.ChartTh>
          <T.ChartTh>단계</T.ChartTh>
          <T.ChartTh>진행</T.ChartTh>
          <T.ChartTh>상세 내용</T.ChartTh>
        </T.ChartTr>
        {ReservationListData.map((el, index) => (
          <T.ChartTr key={index}>
            <T.ChartTd>{el.date}</T.ChartTd>
            <T.ChartTd>{el.step}</T.ChartTd>
            <T.ChartTd>{el.progress}</T.ChartTd>
            <T.ChartTd>{el.contents}</T.ChartTd>
          </T.ChartTr>
        ))}
      </T.Chart>
    </T.ChartWrapper>
  );
}
