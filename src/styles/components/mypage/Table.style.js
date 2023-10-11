import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
export const Chart = styled.table`
  border: 1px solid #b9b9b9;
  border-collapse: collapse;
  border-radius: 16px;
`;
export const ChartTr = styled.tr`
  height: 44px;
`;
export const ChartTh = styled.th`
  flex-direction: column;
  justify-content: center;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  background-color: #f0f0f0;
  border: 1px solid #b9b9b9;

  padding: 0 14px;
`;
export const ChartTd = styled.td`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  border: 1px solid #b9b9b9;
  padding: 0 30px;
  background-color: #fff;

  &.name {
    cursor: pointer;
  }
`;
export const ResultBtn = styled.button`
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
