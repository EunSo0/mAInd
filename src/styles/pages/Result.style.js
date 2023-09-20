import styled from "@emotion/styled";
import { Doughnut } from "react-chartjs-2";

export const Container = styled.div`
  width: 70%;
  margin: 20px auto;
`;

export const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 40px 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th,
  td {
    padding: 10px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

export const CounselingEntry = styled.div`
  margin: 40px 0;
`;

export const Question = styled.div`
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: bold;
  color: #333;
  font-size: 24px;
`;

export const EmotionLabel = styled.div`
  text-align: center;
  font-weight: bold;
  color: #333;
  font-size: 24px;
`;

export const Answer = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
`;

export const EmotionWrapper = styled.div`
  display: flex;
`;

export const Emotion = styled.h3`
  margin: 0 50px 0 0;
`;

export const TextEmotionCircle = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 0 auto;

  ${({ value }) => {
    if (value === "행복") {
      return `
      background-color: #F08080;
    `;
    } else if (value === "슬픔") {
      return `
      background-color: #87ceeb;
    `;
    } else if (value === "불안") {
      return `
      background-color: #FFA500;
    `;
    } else if (value === "분노") {
      return `
      background-color: #DC143C;
    `;
    } else {
      return `
      background-color: #A9A9A9;
    `;
    }
  }}
`;

export const TextEmotion = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  padding-top: 70px;
`;

export const Total = styled.h1`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export const FacialExpressionChart = styled(Doughnut)`
  width: 200px;
  margin-top: 25px;
`;

export const TotalChartWrapper = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0 80px;
`;

export const TotalChart = styled(Doughnut)`
  width: 200px;
`;
export const InputArea = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin: 50px;
`;

export const Input = styled.textarea`
  width: 80%;
  height: 400px;
  margin: 0 auto;
  font-size: 20px;
  border: 1px solid;
  border-radius: 3px;
  text-align: left;
  padding: 15px;
`;
