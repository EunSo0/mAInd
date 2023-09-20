import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 795px;
  height: 100%;
  border-radius: 8px;
  border-top: 24px solid #36f;
  padding: 28px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 100px;
  margin-left: 30px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #36f;
  border-bottom: 1px solid #36f;
  padding: 2px;
  margin-right: 10px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`;
const ContentList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: end;
  margin: 8px 0;
`;
const ContentTitle = styled.div`
  width: 130px;
  color: #666;
  font-size: 20px;
  font-weight: 400;
`;
const ContentTxt = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
`;
const SurveyBtn = styled.button`
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  background: #666;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border: none;
  cursor: pointer;
`;
const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
const Chart = styled.table`
  border-radius: 4px;
  border: 1px solid #b9b9b9;
  border-collapse: collapse;
`;
const ChartTr = styled.tr`
  height: 44px;
`;
const ChartTh = styled.th`
  width: 125px;
  flex-direction: column;
  justify-content: center;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  background-color: #f0f0f0;
  border: 1px solid #b9b9b9;
`;
const ChartTd = styled.td`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  border: 1px solid #b9b9b9;
`;
const ResultBtn = styled.button`
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  background: #36f;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border: none;
  cursor: pointer;
`;

export default function List() {
  return (
    <Wrapper>
      <ListWrapper>
        <Title>내담자 목록 {">"} 김내담</Title>
      </ListWrapper>
      <ContentWrapper>
        <ContentList>
          <ContentTitle>이름</ContentTitle>
          <ContentTxt>김내담</ContentTxt>
        </ContentList>
        <ContentList>
          <ContentTitle>생년월일</ContentTitle>
          <ContentTxt>00.04.10</ContentTxt>
        </ContentList>
        <ContentList>
          <ContentTitle>이메일</ContentTitle>
          <ContentTxt>naedam@gmail.com</ContentTxt>
        </ContentList>
        <ContentList>
          <ContentTitle>증상</ContentTitle>
          <ContentTxt>우울</ContentTxt>
        </ContentList>
        <ContentList>
          <ContentTitle>초기설문지</ContentTitle>
          <ContentTxt>
            <SurveyBtn>초기설문지</SurveyBtn>
          </ContentTxt>
        </ContentList>
      </ContentWrapper>
      <ChartWrapper>
        <Chart>
          <ChartTr>
            <ChartTh>상담회차</ChartTh>
            <ChartTh>내담자명</ChartTh>
            <ChartTh>상담일자</ChartTh>
            <ChartTh>증상</ChartTh>
            <ChartTh>상담일지</ChartTh>
          </ChartTr>
          <ChartTr>
            <ChartTd>2</ChartTd>
            <ChartTd>김상담</ChartTd>
            <ChartTd>23.09.13</ChartTd>
            <ChartTd>우울</ChartTd>
            <ChartTd>제공전</ChartTd>
          </ChartTr>
          <ChartTr>
            <ChartTd>1</ChartTd>
            <ChartTd>김상담</ChartTd>
            <ChartTd>23.09.06</ChartTd>
            <ChartTd>우울</ChartTd>
            <ChartTd>
              <ResultBtn>상담일지</ResultBtn>
            </ChartTd>
          </ChartTr>
        </Chart>
      </ChartWrapper>
    </Wrapper>
  );
}
