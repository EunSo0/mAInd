/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as I from "../../styles/pages/InitialSurvey.style";
import axios from "axios";
import { useQuery } from "react-query";

const surveyContent = {
  name: "김내담",
  email: "naedam@gamil.com",
  phone: "01012345678",
  birth: "2000년 4월 24일",
  education: "덕성여자대학교 졸업",
  gender: "여자",
  symptom: ["우울", "급식 및 섭식 장애"],
};

export default function InitialSurvey() {
  const [result, setResult] = useState([]);
  const token = localStorage.getItem("token");

  const { data } = useQuery("getSurvey", () =>
    axios
      .get("/mypage/surveys/1", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log(data.data);
        setResult(data.data);
      })
  );

  return (
    <>
      <I.Base>
        <I.Title>초기 설문지</I.Title>
        <I.Wrapper>
          <I.InfoWrapper>
            <I.InputWrapper>
              <I.Label>이름</I.Label>
              <I.TextBox>{result.name}</I.TextBox>
            </I.InputWrapper>
            <I.InputWrapper>
              <I.Label>이메일</I.Label>
              <I.TextBox>{result.email}</I.TextBox>
            </I.InputWrapper>
            <I.InputWrapper>
              <I.Label>휴대폰</I.Label>
              <I.TextBox>{result.phone}</I.TextBox>
            </I.InputWrapper>
            <I.InputWrapper>
              <I.Label>생년월일</I.Label>
              <I.TextBox>{result.birth}</I.TextBox>
            </I.InputWrapper>
            <I.InputWrapper>
              <I.Label>학력</I.Label>
              <I.TextBox>{result.education}</I.TextBox>
            </I.InputWrapper>
          </I.InfoWrapper>
          <I.InputWrapper>
            <I.RadioWrapper>
              <I.Label>성별</I.Label>
              <I.GenderLabel>{result.gender}</I.GenderLabel>
            </I.RadioWrapper>
          </I.InputWrapper>
          <I.InputWrapper>
            <I.Label>증상</I.Label>
            {surveyContent.symptom.map((item, index) => (
              <I.CustomLabel key={index} className="symptom">
                {item}
              </I.CustomLabel>
            ))}
          </I.InputWrapper>
          <I.QuestionWrapper>
            <I.Question>1. 당신의 증상 및 문제행동은 무엇입니까?</I.Question>
            <I.AnswerBox>{result.q_1}</I.AnswerBox>
            <I.Question>
              2. 당신의 증상 및 문제 행동은 언제부터 시작하였습니까?
            </I.Question>
            <I.AnswerBox>{result.q_2}</I.AnswerBox>
            <I.Question>
              3. 당신의 증상 및 문제 행동을 어떻게 알게 되셨습니까?
            </I.Question>
            <I.AnswerBox>{result.q_3}</I.AnswerBox>
            <I.Question>
              4. 당신의 증상 및 문제 행동에 대하여 어떻게 생각하고 느끼십니까?
            </I.Question>
            <I.AnswerBox>{result.q_4}</I.AnswerBox>
            <I.Question>
              5. 당신의 증상 및 문제 행동을 보고 주위에서 어떠한 반응을
              보이셨습니까?
            </I.Question>
            <I.AnswerBox>{result.q_5}</I.AnswerBox>
            <I.Question>
              6. 당신의 증상 및 문제행동이 가족을 비롯한 주위에 어떻게 영향을
              주고 있습니까?
            </I.Question>
            <I.AnswerBox>{result.q_6}</I.AnswerBox>
            <I.Question>
              7. 당신의 증상 및 문제 행동의 원인이 무엇이라고 생각하십니까?
            </I.Question>
            <I.AnswerBox>{result.q_7}</I.AnswerBox>
            <I.Question>8. 상담을 통해 어떤 결과를 원하시나요?</I.Question>
            <I.AnswerBox>{result.q_8}</I.AnswerBox>
          </I.QuestionWrapper>

          <Link to="/reservation/counselor">
            <I.ButtonWrapper>
              <I.Button className="approve">승인</I.Button>
              <I.Button>보류</I.Button>
              <I.Button>거절</I.Button>
            </I.ButtonWrapper>
          </Link>
        </I.Wrapper>
      </I.Base>
    </>
  );
}
