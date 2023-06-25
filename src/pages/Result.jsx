import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const Container = styled.div`
  width: 70%;
  margin: 20px auto;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 40px 0;
`;

const Table = styled.table`
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

const CounselingEntry = styled.div`
  margin: 40px 0;
`;

const Question = styled.div`
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: bold;
  color: #333;
  font-size: 24px;
`;

const EmotionLabel = styled.div`
  text-align: center;
  font-weight: bold;
  color: #333;
  font-size: 24px;
`;

const Answer = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
`;

const EmotionWrapper = styled.div`
  display: flex;
`;

const Emotion = styled.h3`
  margin: 0 50px 0 0;
`;

const TextEmotionCircle = styled.div`
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

const TextEmotion = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  padding-top: 70px;
`;

const Total = styled.h1`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

const FacialExpressionChart = styled(Doughnut)`
  width: 200px;
  margin-top: 25px;
`;

const TotalChartWrapper = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0 80px;
`;

const TotalChart = styled(Doughnut)`
  width: 200px;
`;
const InputArea = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const Input = styled.textarea`
  width: 80%;
  height: 400px;
  margin: 0 auto;
  font-size: 20px;
  border: 1px solid;
  border-radius: 3px;
  text-align: left;
`;

function Result() {
  const [counselingData, setCounselingData] = useState([]);
  const [facialEmotion1, setFacialEmotion1] = useState([]);
  const [facialEmotion2, setFacialEmotion2] = useState([]);
  const [textEmotion, setTextEmotion] = useState([]);
  const [totalTextEmotion, setTotalTextEmotion] = useState([]);

  useEffect(() => {
    fetch("/convey")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.emotion_values);

        const keys = Object.keys(data.emotion_values);
        const firstKey = keys[0];
        const secondKey = keys[1];

        const firstValue = data.emotion_values[firstKey];
        const secondValue = data.emotion_values[secondKey];

        setFacialEmotion1(firstValue);
        setFacialEmotion2(secondValue);
        setCounselingData(data.merged_array);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("/get_json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setTextEmotion(data.predictions);
        setTotalTextEmotion(data.percentages);
        console.log(data.percentages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!counselingData) {
    return null; // 데이터를 받아오기 전에는 null을 반환하여 화면에 아무것도 표시하지 않음
  }

  const data = {
    date: "2023-06-20",
    sessionNumber: 1,
    counselorName: "천윤서",
    clientName: "장지원",
    treatmentGoal: "우울증",
  };

  // 질문과 답변을 구분하는 함수
  const separateDialogueBySpeaker = (counselingData) => {
    const separatedData = [];
    for (let i = 0; i < counselingData.length; i += 2) {
      const question = String(counselingData[i]).replace(/^spk_0,/, "");
      const answer = String(counselingData[i + 1]).replace(/^spk_1,/, "");
      separatedData.push([question, answer]);
    }
    return separatedData;
  };

  // 질문과 답변을 구분한 데이터
  const separatedCounselingData = separateDialogueBySpeaker(counselingData);

  // 차트 색상 랜덤으로 불러오기
  function getRandomColor(colors, selectedColors) {
    const availableColors = colors.filter(
      (color) => !selectedColors.includes(color)
    );

    if (availableColors.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableColors.length);
    const selectedColor = availableColors[randomIndex];
    selectedColors.push(selectedColor);

    return selectedColor;
  }

  const facialColors = [
    "#FF6384", // 핑크
    "#36A2EB", // 하늘색
    "#FFCE56", // 노랑
    "#FF9F40", // 오렌지
    "#8E8CD8", // 연보라
    "#4BC0C0", // 밝은 청록색
    "#F08080", // 라이트코랄
    "#4CAF50", // 라임 그린
  ];
  const selectColors = [];

  return (
    <>
      <Header />
      <Text>상담 일지</Text>
      <Container>
        <Table>
          <tbody>
            <tr>
              <th>날짜</th>
              <td>{data.date}</td>
              <th>회기수</th>
              <td>{data.sessionNumber}</td>
            </tr>
            <tr>
              <th>상담사 이름</th>
              <td>{data.counselorName}</td>
              <th>내담자 이름</th>
              <td>{data.clientName}</td>
            </tr>
            <tr>
              <th colSpan="1">치료목표</th>
              <td colSpan="3">{data.treatmentGoal}</td>
            </tr>
          </tbody>
        </Table>

        <div>
          {separatedCounselingData.map((dialogue, index) => {
            const question = dialogue[0];
            const answer = dialogue[1];

            // 질문과 답변에 대한 감정 분석 결과를 가져옵니다

            return (
              <CounselingEntry key={index}>
                <Question>질문 {index + 1}</Question>
                <Answer>{question}</Answer>
                <Question>답변 {index + 1}</Question>
                <Answer>{answer}</Answer>
                <EmotionWrapper>
                  <Emotion>
                    <EmotionLabel>텍스트 감정분석 {index + 1}</EmotionLabel>
                    <TextEmotionCircle value={textEmotion[index]?.emotion}>
                      <TextEmotion>{textEmotion[index]?.emotion}</TextEmotion>
                    </TextEmotionCircle>
                  </Emotion>
                  <Emotion>
                    {(index === 0 ||
                      index === separatedCounselingData.length - 1) && (
                      <div style={{ width: "200px", height: "auto" }}>
                        <EmotionLabel>표정 감정분석 {index + 1}</EmotionLabel>
                        <FacialExpressionChart
                          key="facialchart"
                          data={{
                            labels: Object.keys(
                              index === 0
                                ? facialEmotion1
                                : facialEmotion2 || {}
                            ).map((key) => {
                              return index === 0 && facialEmotion1[key] !== 0.0
                                ? key
                                : index !== 0 && facialEmotion2[key] !== 0.0
                                ? key
                                : "";
                            }),
                            datasets: [
                              {
                                data: Object.values(
                                  index === 0
                                    ? facialEmotion1
                                    : facialEmotion2 || {}
                                ),
                                backgroundColor: Object.values(
                                  index === 0
                                    ? facialEmotion1
                                    : facialEmotion2 || {}
                                ).map((value) =>
                                  value !== 0.0
                                    ? getRandomColor(facialColors, selectColors)
                                    : "rgba(0, 0, 0, 0)"
                                ),
                                hoverBackgroundColor: Object.values(
                                  index === 0
                                    ? facialEmotion1
                                    : facialEmotion2 || {}
                                ).map((value) =>
                                  value !== 0.0
                                    ? getRandomColor(facialColors, selectColors)
                                    : "rgba(0, 0, 0, 0)"
                                ),
                              },
                            ],
                          }}
                          options={{
                            responsive: true,
                            plugins: {
                              legend: {
                                display: false, // 범례 비활성화
                              },
                              datalabels: {
                                display: function (context) {
                                  // 값이 0.0인 경우 데이터 레이블 비활성화
                                  const value =
                                    context.dataset.data[context.dataIndex];
                                  return value !== 0.0;
                                },
                                color: "#000000", // 글씨 색상 설정
                                font: {
                                  size: 14, // 글씨 크기 설정
                                },
                                formatter: function (value, context) {
                                  // 차트 위에 표시할 글씨 포맷팅
                                  const label =
                                    context.chart.data.labels[
                                      context.dataIndex
                                    ];
                                  return `${label}: ${value.toFixed(1)}%`;
                                },
                              },
                            },
                          }}
                          plugins={[ChartDataLabels]} // ChartDataLabels 플러그인 추가
                        />
                      </div>
                    )}
                  </Emotion>
                </EmotionWrapper>
                <hr />
              </CounselingEntry>
            );
          })}
        </div>
      </Container>
      <Total>최종 텍스트 감정분석 결과</Total>
      <TotalChartWrapper>
        <TotalChart
          key="totalchart"
          data={{
            labels: totalTextEmotion.map((item) => item.emotion),
            datasets: [
              {
                data: totalTextEmotion.map((item) => item.percentage),
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#9966FF",
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#9966FF",
                ],
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false, // 범례 비활성화
              },
              datalabels: {
                display: function (context) {
                  // 값이 0.0인 경우 데이터 레이블 비활성화
                  const value = context.dataset.data[context.dataIndex];
                  return value !== 0.0;
                },
                color: "#000000", // 글씨 색상 설정
                font: {
                  size: 18, // 글씨 크기 설정
                },
                formatter: function (value, context) {
                  // 차트 위에 표시할 글씨 포맷팅
                  const label = context.chart.data.labels[context.dataIndex];
                  return `${label}: ${value}%`;
                },
              },
            },
          }}
          plugins={[ChartDataLabels]} // ChartDataLabels 플러그인 추가
        />
      </TotalChartWrapper>
      <Total>상담자 평가</Total>
      <InputArea>
        <Input />
      </InputArea>
    </>
  );
}

export default Result;
