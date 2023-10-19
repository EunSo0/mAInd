import React, { useState } from "react";
import * as R from "../styles/pages/Result.style";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { resultData } from "../recoil/atom";
// import { useRecoilState } from "recoil";

const result = {
  countNum: 1,
  emotion_values: {
    2.829: {
      경멸: 0,
      공포: 0,
      놀람: 0,
      슬픔: 15.2,
      중립: 79.60000000000001,
      행복: 0,
      혐오: 0,
      화남: 0,
    },
    220.259: {
      경멸: 0,
      공포: 0,
      놀람: 0,
      슬픔: 21.91235059760956,
      중립: 63.745019920318725,
      행복: 2.788844621513944,
      혐오: 0,
      화남: 0,
    },
  },
  merged_array: [
    ["spk_0", "지난 주는 어떻게 지내셨어요"],
    [
      "spk_1",
      "저는 지난 주에 기분이 성장이 우울하고 힘들었어요 많은 스트레스와 압박 때문에 에너지가 없었고 일상 생활에 대한 흥미를 잃은 것 같아요",
    ],
    [
      "spk_0",
      "최근에 어떤 일이 가장 큰 스트레스를 유발 했나요 그 상황을 설명해 주세요",
    ],
    [
      "spk_1",
      "최근에는 업무에서 의 실패 압박 때문에 많은 스트레스를 받았어요 저희 실수로 인해 중요한 프로젝트가 망가져 버렸고 그로 인해 상사의 관계가 악화 되었어요 이 일로 인해 많은 자책 스트레스를 느꼈고 자신감을 잃고 우울해 지게 되었어요",
    ],
    [
      "spk_0",
      "현재 어떤 감경을 가장 많이 느끼고 있나요 그 감경을 어떻게 묘소 할 수 있을까요",
    ],
    [
      "spk_1",
      "현재 가장 많이 느끼는 감정은 허무 함과 무기력 밤이에요 일상에서 아무것도 흥미로워 보이지 않고 미래에 대한 희망도 잃어버린 것 같아요 마치 무거운 짐을 진다는 느낌이 들어서 힘들고 지치는 기분이에요",
    ],
    [
      "spk_0",
      "일상 생활에서 즐거웠던 경험이나 흥미로운 일은 있었나요 그것에 대해 자세히 얘기해 주세요",
    ],
    ["spk_1", "요즘은 즐거웠던 경험을 찾기가 어려워요 하지만 옛날에는 음악을"],
    [
      "spk_0",
      "음악이 거는 제가 읽는 것이 즐거웠어요 그런 활동을 할 때는 마음이 제 생의 흥미를 느꼈어요 우울한 감정이나 부정적인 생각이 떠오를 때 어떤 사건이나 상황이 그 감정을 유발 하는지 알려주세요",
    ],
    [
      "spk_1",
      "주로 일과 관련된 실패와 스트레스가 제 우유 감에 더욱 악화시키는 원인이에요 제가 틀리거나 실수한 경우에 자책 과 부정적인 생각이 떠오르면서 우울해지고",
    ],
    [
      "spk_0",
      "일상에서 긍정적인 변화를 만들기 위해 어떤 노력을 하고 있나요 그것이 어떤 결과를 가져 왔나요",
    ],
    [
      "spk_1",
      "최근에는 운동을 조금 더 하려고 노력하고 있어요 운동을 하면 조금은 기분이 좋아지는 것 같아요 하지만 아직은 효과를 확실히 느끼지는 못하고 있어요",
    ],
    [
      "spk_0",
      "우울증 증상이 어떤 방식으로 일상 생활에 영향을 미치고 있는지 설명해 주세요",
    ],
    [
      "spk_1",
      "우울증 증상으로 인해 일상 생활에 집중력이 떨어지고 에너지가 없어져요 일을 처리하는 데 어려움을 겪고 흥미를 잃어버려서 일상 생활에서 즐거움을 찾기 어렵게 되었어요 또한 사회적 관계에서의 이해 관계가 약해져서 가족이나 친구들 과의 교류도 줄어들었어요",
    ],
    [
      "spk_0",
      "일상 생활에서 재미나 흥미를 느끼거나 만족감을 얻는 활동은 무엇인가요 어떻게 그 활동에 더 많은 시간을 할려 할 수 있을까요",
    ],
    [
      "spk_1",
      "예전에는 음악을 듣거나 책을 읽는 게 좋았어요 그런데 요즘은 그런 활동에 소홀 해져서 다시 찾아보려고 해요 더 많은 시간을 확보하기 위해서는 스케줄을 조정하고 일을 효율적으로 처리해야 겠죠",
    ],
    [
      "spk_0",
      "가족 친구 동료 등의 관계에서 지원을 받고 있는지 어떻게 생각하시나요",
    ],
    [
      "spk_1",
      "가족과 친구들은 저에게 많은 지원을 해주려고 노력하지만 때로는 제 상태를 이해해 주지 못하는 것 같아요 저는 그들에게 이해와 경력 그리고 함께 쉬는 시간을 보내는 것을 원하고 필요로 해요",
    ],
    ["spk_0", "오늘 상담을 마치고 난 기분은 없어진 건데요"],
    [
      "spk_1",
      "오늘 상담을 통해 제 성모 함을 털어 놓고 이야기할 수 있어서 안도감을 느꼈어요 또한 상담자 분의 이해와 지원을 받으며 조금은 기분이 가벼워진 것 같아요",
    ],
  ],
  sentence_predictions: [
    {
      sentence:
        "저는 지난 주에 기분이 성장이 우울하고 힘들었어요 많은 스트레스와 압박 때문에 에너지가 없었고 일상 생활에 대한 흥미를 잃은 것 같아요",
      emotion: "불안",
    },
    {
      sentence:
        "최근에는 업무에서 의 실패 압박 때문에 많은 스트레스를 받았어요 저희 실수로 인해 중요한 … 되었어요 이 일로 인해 많은 자책 스트레스를 느꼈고 자신감을 잃고 우울해 지게 되었어요",
      emotion: "분노",
    },
    {
      sentence:
        "현재 가장 많이 느끼는 감정은 허무 함과 무기력 밤이에요 일상에서 아무것도 흥미로워 보이지…망도 잃어버린 것 같아요 마치 무거운 짐을 진다는 느낌이 들어서 힘들고 지치는 기분이에요",
      emotion: "불안",
    },
    {
      sentence: "요즘은 즐거웠던 경험을 찾기가 어려워요 하지만 옛날에는 음악을",
      emotion: "중립",
    },
    {
      sentence:
        "주로 일과 관련된 실패와 스트레스가 제 우유 감에 더욱 악화시키는 원인이에요 제가 틀리거나 실수한 경우에 자책 과 부정적인 생각이 떠오르면서 우울해지고",
      emotion: "슬픔",
    },
    {
      sentence:
        "최근에는 운동을 조금 더 하려고 노력하고 있어요 운동을 하면 조금은 기분이 좋아지는 것 같아요 하지만 아직은 효과를 확실히 느끼지는 못하고 있어요",
      emotion: "중립",
    },
    {
      sentence:
        "우울증 증상으로 인해 일상 생활에 집중력이 떨어지고 에너지가 없어져요 일을 처리하는 데 어…요 또한 사회적 관계에서의 이해 관계가 약해져서 가족이나 친구들 과의 교류도 줄어들었어요",
      emotion: "불안",
    },
    {
      sentence:
        "예전에는 음악을 듣거나 책을 읽는 게 좋았어요 그런데 요즘은 그런 활동에 소홀 해져서 다시… 해요 더 많은 시간을 확보하기 위해서는 스케줄을 조정하고 일을 효율적으로 처리해야 겠죠",
      emotion: "중립",
    },
    {
      sentence:
        "가족과 친구들은 저에게 많은 지원을 해주려고 노력하지만 때로는 제 상태를 이해해 주지 못하…아요 저는 그들에게 이해와 경력 그리고 함께 쉬는 시간을 보내는 것을 원하고 필요로 해요",
      emotion: "슬픔",
    },
    {
      sentence:
        "오늘 상담을 통해 제 성모 함을 털어 놓고 이야기할 수 있어서 안도감을 느꼈어요 또한 상담자 분의 이해와 지원을 받으며 조금은 기분이 가벼워진 것 같아요",
      emotion: "행복",
    },
  ],
  total_percentages: [
    { emotion: "불안", percentage: 30 },
    { emotion: "분노", percentage: 10 },
    { emotion: "중립", percentage: 30 },
    { emotion: "슬픔", percentage: 20 },
    { emotion: "행복", percentage: 10 },
  ],
};

function Result() {
  //const [result] = useRecoilState(resultData);
  const keys = Object.keys(result.emotion_values);
  const firstKey = keys[0];
  const secondKey = keys[1];

  const firstValue = result.emotion_values[firstKey];
  const secondValue = result.emotion_values[secondKey];

  const [counselingData] = useState(result.merged_array);
  const [facialEmotion1] = useState(firstValue);
  const [facialEmotion2] = useState(secondValue);
  const [textEmotion] = useState(result.sentence_predictions);
  const [totalTextEmotion] = useState(result.total_percentages);

  console.log(result);

  console.log(counselingData);
  console.log(facialEmotion1);
  console.log(facialEmotion2);
  console.log(textEmotion);
  console.log(totalTextEmotion);

  const data = {
    date: "2023-06-20",
    time: "18:00~19:00",
    sessionNumber: 1,
    counselorName: "이은수",
    clientName: "장지원",
    treatmentGoal: "우울",
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
    <R.ContentWrapper>
      <R.Text>상담 일지</R.Text>
      <R.Container>
        <R.Table>
          <tbody>
            <tr>
              <th>날짜</th>
              <td>{data.date}</td>
              <th>상담시간</th>
              <td>{data.time}</td>
            </tr>
            <tr>
              <th>상담자</th>
              <td>{data.counselorName}</td>
              <th>내담자</th>
              <td>{data.clientName}</td>
            </tr>
            <tr>
              <th>치료목표</th>
              <td>{data.treatmentGoal}</td>
              <th>회기수</th>
              <td>{data.sessionNumber}</td>
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
      <R.InputArea>
        <R.InputText>상담자 소견</R.InputText>
        <R.Input />
      </R.InputArea>
      <R.ButtonWrapper>
        <R.Button>수정</R.Button>
        <R.Button className="submit">내담자에게 전송</R.Button>
      </R.ButtonWrapper>
    </R.ContentWrapper>
  );
}

export default Result;
