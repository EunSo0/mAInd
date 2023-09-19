import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 795px;
  height: 100%;
  border-radius: 8px;
  border-top: 24px solid #36f;
  padding: 28px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 100px;
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
  background: #666;
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
        <Title>상담목록</Title>
      </ListWrapper>
      <ChartWrapper>
        <Chart>
          <ChartTr>
            <ChartTh>번호</ChartTh>
            <ChartTh>상담자명</ChartTh>
            <ChartTh>상담일자</ChartTh>
            <ChartTh>증상</ChartTh>
            <ChartTh>상담결과</ChartTh>
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
              <Link to="/result">
                <ResultBtn>상담결과</ResultBtn>
              </Link>
            </ChartTd>
          </ChartTr>
        </Chart>
      </ChartWrapper>
    </Wrapper>
  );
}
