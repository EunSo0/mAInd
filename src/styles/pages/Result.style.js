import styled from "@emotion/styled";
import { Doughnut } from "react-chartjs-2";

export const ContentWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

export const CounselingEntry = styled.div``;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px 10px;
  border: 1px solid #ccc;
`;

export const Title = styled.div`
  width: 150px;
  font-weight: bold;
  color: #000;
  font-size: 24px;
  margin: 0 30px;
`;

export const Answer = styled.div`
  width: calc(100% - 150px);
  font-size: 18px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 20px 10px;
  border: 1px solid #ccc;
`;

export const EmotionWrapper = styled.div`
  background-color: #fff;
  display: flex;
  padding: 20px 10px;
  border: 1px solid #ccc;
`;

export const EmotionLabel = styled.div`
  text-align: center;
  color: #333;
  font-size: 24px;
  font-weight: 500;
`;

export const Emotion = styled.h3`
  margin: 0 50px 0 0;
`;

export const TextEmotionCircle = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-top: 25px;

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

export const FacialExpressionChart = styled(Doughnut)`
  width: 200px;
  margin-top: 25px;
`;

export const TotalWrapper = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
`;

export const Total = styled.h1`
  margin: 20px;
  font-size: 24px;
  text-align: center;
  padding: 20px;
  font-weight: 500;
`;

export const TotalChartWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
`;
export const InputText = styled.div`
  padding: 10px;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: left;
  padding: 15px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 200px;
`;

export const Button = styled.button`
  display: flex;
  width: 288px;
  height: 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid #36f;
  background: #36f;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  margin: 10px;
  cursor: pointer;

  &.submit {
    background: #666;
    color: #fff;
    border: none;
  }
`;
