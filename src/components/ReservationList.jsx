import React from "react";
import * as T from "../styles/components/mypage/Table.style";
import { getUserStatus } from "../api/api";
import { useQuery } from "react-query";
import { DateFormat } from "./../utils/DateFormat";

export default function ReservationList() {
  const { data, isLoading, isError } = useQuery("userInfo", getUserStatus);

  if (isLoading) {
    return <p>Loading user data...</p>;
  } else if (isError) {
    return <p>Error fetching user data</p>;
  }

  return (
    <T.ChartWrapper>
      <T.Chart>
        <thead>
          <T.ChartTr>
            <T.ChartTh>일자</T.ChartTh>
            <T.ChartTh>단계</T.ChartTh>
            <T.ChartTh>진행</T.ChartTh>
            <T.ChartTh>상세 내용</T.ChartTh>
          </T.ChartTr>
        </thead>
        <tbody>
          <T.ChartTr>
            <T.ChartTd>{DateFormat(data.statusDate)}</T.ChartTd>
            {data.userStatus == "ON_MATCHING" ? (
              <>
                <T.ChartTd>상담자 매칭</T.ChartTd>
                <T.ChartTd>진행중</T.ChartTd>
                <T.ChartTd>상담자 매칭이 진행중입니다.</T.ChartTd>
              </>
            ) : (
              <>
                <T.ChartTd>매칭 완료</T.ChartTd>
                <T.ChartTd>완료</T.ChartTd>
                <T.ChartTd>상담자 매칭이 완료되었습니다.</T.ChartTd>
              </>
            )}
          </T.ChartTr>
        </tbody>
      </T.Chart>
    </T.ChartWrapper>
  );
}
