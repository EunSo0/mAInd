import React, { useState } from "react";
import * as R from "../styles/pages/Result.style";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  getClientCounselingResult,
  counselingResultEdit,
  counselingResultStatus,
} from "../api/api";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate, Link } from "react-router-dom";
import { DateFormat } from "../utils/DateFormat";
import { roleState } from "../recoil/atom";
import { useRecoilState } from "recoil";

function Result() {
  const { counseling_id } = useParams();
  const navigate = useNavigate();
  const [role] = useRecoilState(roleState);

  const [counselingData, setCounselingData] = useState();
  const [facialEmotion1, setFacialEmotion1] = useState();
  const [facialEmotion2, setFacialEmotion2] = useState();
  const [textEmotion, setTextEmotion] = useState();
  const [totalTextEmotion, setTotalTextEmotion] = useState();
  const [counselorOpinion, setCounselorOpinion] = useState();

  const { mutate: opinionMutate, status: opinionStatus } = useMutation(
    "editStatus",
    counselingResultEdit
  );
  const { mutate: resultMutate, status: resultStatus } = useMutation(
    "submitResult",
    counselingResultStatus
  );

  const {
    data: result,
    isLoading,
    isError,
  } = useQuery("counselList", () => getClientCounselingResult(counseling_id), {
    onSuccess: (data) => {
      console.log(data);
      setCounselingData(data.merged_array);
      setFacialEmotion1(data.emotion_values[0]);
      setFacialEmotion2(data.emotion_values[1]);
      setTextEmotion(data.sentence_predictions);
      setTotalTextEmotion(data.total_percentages);
    },
  });

  if (isLoading) {
    return <p>Loading user data...</p>;
  } else if (isError) {
    return <p>Error fetching user data</p>;
  }

  if (opinionStatus === "loading") {
    return <p>Edit data...</p>;
  }
  if (resultStatus === "loading") {
    return <p>submit result data...</p>;
  }

  const separateDialogueBySpeaker = (counselingData) => {
    if (!counselingData || !Array.isArray(counselingData)) {
      return [];
    }

    const separatedData = [];
    let currentQuestion = "";
    let currentAnswer = "";

    counselingData.forEach((item) => {
      const { speakers, sentence } = item;

      if (speakers === "spk_0") {
        // 'spk_0'인 경우 질문으로 처리
        currentQuestion = sentence;
      } else if (speakers === "spk_1") {
        // 'spk_1'인 경우 답변으로 처리
        currentAnswer = sentence;
        // 질문과 답변을 묶어서 배열에 추가
        separatedData.push([currentQuestion, currentAnswer]);
      }
    });

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

  const startHour =
    result && result.startHour !== undefined
      ? result.startHour.toString().padStart(2, "0")
      : "00";
  const startMin =
    result && result.startMin !== undefined
      ? result.startMin.toString().padStart(2, "0")
      : "00";
  const endHour =
    result && result.endHour !== undefined
      ? result.endHour.toString().padStart(2, "0")
      : "00";
  const endMin =
    result && result.endMin !== undefined
      ? result.endMin.toString().padStart(2, "0")
      : "00";

  console.log(startMin);

  const onChange = (e) => {
    setCounselorOpinion(e.target.value);
  };

  const opinionEdit = () => {
    const dataToSend = {
      opinion: counselorOpinion,
      counseling_id: counseling_id,
    };

    opinionMutate(dataToSend, {
      onSuccess: (response) => {
        console.log("Mutation successful", response);
        navigate("/mypage");
      },
      onError: (error) => {
        console.error("Mutation error", error);
      },
    });
  };

  const submitResult = () => {
    const dataToSend = {
      resultOfferStatus: "ACCEPT",
      counseling_id: counseling_id,
    };

    resultMutate(dataToSend, {
      onSuccess: (response) => {
        console.log("Mutation successful", response);
        navigate("/mypage");
      },
      onError: (error) => {
        console.error("Mutation error", error);
      },
    });
  };

  return (
    <R.ContentWrapper>
      <R.Text>상담 일지</R.Text>
      <R.Container>
        <R.Table>
          <tbody>
            <tr>
              <th>날짜</th>
              <td>{DateFormat(result.date)}</td>
              <th>상담시간</th>
              <td>{`${startHour}:${startMin} ~ ${endHour}:${endMin}`}</td>
            </tr>
            <tr>
              <th>상담자</th>
              <td>{result.counselorName}</td>
              <th>내담자</th>
              <td>{result.clientName}</td>
            </tr>
            <tr>
              <th>치료목표</th>
              <td>{result.symptoms ? result.symptoms.join(", ") : ""}</td>
              <th>회기수</th>
              <td>{result.countNum}</td>
            </tr>
          </tbody>
        </R.Table>

        <div>
          {separatedCounselingData.map((dialogue, index) => {
            const question = dialogue[0];
            const answer = dialogue[1];

            // 질문과 답변에 대한 감정 분석 결과를 가져옵니다

            return (
              <R.CounselingEntry key={index}>
                <R.QuestionWrapper>
                  <R.Title>질문 {index + 1}</R.Title>
                  <R.Answer>{question}</R.Answer>
                </R.QuestionWrapper>
                <R.AnswerWrapper>
                  <R.Title>답변 {index + 1}</R.Title>
                  <R.Answer>{answer}</R.Answer>
                </R.AnswerWrapper>

                <R.EmotionWrapper>
                  <R.Title>분석 {index + 1}</R.Title>
                  <R.Emotion>
                    <R.EmotionLabel>텍스트 감정분석 {index + 1}</R.EmotionLabel>
                    <R.TextEmotionCircle value={textEmotion[index]?.emotion}>
                      <R.TextEmotion>
                        {textEmotion[index]?.emotion}
                      </R.TextEmotion>
                    </R.TextEmotionCircle>
                  </R.Emotion>
                  <R.Emotion>
                    {(index === 0 ||
                      index === separatedCounselingData.length - 1) && (
                      <div style={{ width: "200px", height: "auto" }}>
                        <R.EmotionLabel>
                          표정 감정분석 {index + 1}
                        </R.EmotionLabel>
                        <R.FacialExpressionChart
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
                  </R.Emotion>
                </R.EmotionWrapper>
              </R.CounselingEntry>
            );
          })}
        </div>
        <R.TotalWrapper>
          <R.Total>최종 텍스트 감정분석 결과</R.Total>
          <R.TotalChartWrapper>
            <R.TotalChart
              key="totalchart"
              data={{
                labels: (totalTextEmotion || []).map((item) => item.emotion),
                datasets: [
                  {
                    data: (totalTextEmotion || []).map(
                      (item) => item.percentage
                    ),
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
                      const label =
                        context.chart.data.labels[context.dataIndex];
                      return `${label}: ${value}%`;
                    },
                  },
                },
              }}
              plugins={[ChartDataLabels]} // ChartDataLabels 플러그인 추가
            />
          </R.TotalChartWrapper>
        </R.TotalWrapper>
      </R.Container>
      {role === "COUNSELOR" ? (
        <R.InputArea>
          <R.InputText>상담자 소견</R.InputText>
          <R.Input defaultValue={result.opinion} onChange={onChange} />
        </R.InputArea>
      ) : (
        <R.InputArea>
          <R.InputText>상담자 소견</R.InputText>
          <R.Opinion>{result.opinion}</R.Opinion>
        </R.InputArea>
      )}

      {result.resultOfferStatus === "ACCEPT" || role == "CLIENT" ? (
        <R.ButtonWrapper>
          <Link to="/mypage">
            <R.Button>닫기</R.Button>
          </Link>
        </R.ButtonWrapper>
      ) : (
        <R.ButtonWrapper>
          <R.Button onClick={opinionEdit}>수정</R.Button>
          <R.Button className="submit" onClick={submitResult}>
            내담자에게 전송
          </R.Button>
        </R.ButtonWrapper>
      )}
    </R.ContentWrapper>
  );
}

export default Result;
