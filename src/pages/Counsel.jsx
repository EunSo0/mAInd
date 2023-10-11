import React from "react";
import * as C from "../styles/pages/Counsel.style";
import * as T from "../styles/components/mypage/Table.style";

const UploadList = [
  {
    submitDate: "23.09.12",
    name: "김상담",
    birth: "00.04.01",
    symptom: "우울",
    count: 2,
    recentDate: "23.09.11",
    upload: false,
  },
  {
    submitDate: "23.09.06",
    name: "김성담",
    birth: "98.02.21",
    symptom: "수면장애",
    count: 1,
    recentDate: "23.09.10",
    upload: true,
  },
];

export default function Counsel() {
  return (
    <C.Wrapper>
      <C.Title>상담 영상 업로드</C.Title>
      <C.Txt>
        상담영상을 업로드하면 텍스트 추출과 감정 분석이 자동으로 진행됩니다.
        <br />
        mAInd와 함께 간편하게 상담일지를 작성해 보세요.
      </C.Txt>
      <T.ChartWrapper>
        <T.Chart>
          <T.ChartTr>
            <T.ChartTh>번호</T.ChartTh>
            <T.ChartTh>신청일자</T.ChartTh>
            <T.ChartTh>이름</T.ChartTh>
            <T.ChartTh>생년월일</T.ChartTh>
            <T.ChartTh>증상</T.ChartTh>
            <T.ChartTh>상담횟수</T.ChartTh>
            <T.ChartTh>최근 상담일자</T.ChartTh>
            <T.ChartTh>영상 업로드</T.ChartTh>
          </T.ChartTr>
          {UploadList.map((el, index) => (
            <T.ChartTr key={index}>
              <T.ChartTd>{index + 1}</T.ChartTd>
              <T.ChartTd>{el.submitDate}</T.ChartTd>
              <T.ChartTd>{el.name}</T.ChartTd>
              <T.ChartTd>{el.birth}</T.ChartTd>
              <T.ChartTd>{el.symptom}</T.ChartTd>
              <T.ChartTd>{el.count}</T.ChartTd>
              <T.ChartTd>{el.recentDate}</T.ChartTd>
              <T.ChartTd>
                {!el.upload ? (
                  <T.ResultBtn>업로드하기</T.ResultBtn>
                ) : (
                  "업로드완료"
                )}
              </T.ChartTd>
            </T.ChartTr>
          ))}
        </T.Chart>
      </T.ChartWrapper>
    </C.Wrapper>
  );
}
