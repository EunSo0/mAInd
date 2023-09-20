import React, { useState } from "react";

import * as I from "../styles/pages/InitialSurvey.style";

const symptomData = [
  { id: 1, name: "우울" },
  { id: 2, name: "불안" },
  { id: 3, name: "강박" },
  { id: 4, name: "트라우마" },
  { id: 5, name: "급식 및 섭식장애" },
  { id: 6, name: "수면장애" },
  { id: 7, name: "중독 장애(약/알코올)" },
];
export default function InitialSurvey() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleCheckboxChange = (id) => {
    // 선택한 증상의 ID를 토글합니다.
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  return (
    <>
      <I.Base>
        <I.Title>초기 설문지</I.Title>
        <I.Wrapper>
          <I.InfoWrapper>
            <I.InputWrapper>
              <I.Label>이름</I.Label>
              <I.InputBox></I.InputBox>
            </I.InputWrapper>
            <I.InputWrapper>
              <I.Label>이메일</I.Label>
              <I.InputBox></I.InputBox>
            </I.InputWrapper>
            <I.InputWrapper>
              <I.Label>휴대폰</I.Label>
              <I.InputBox></I.InputBox>
            </I.InputWrapper>
            <I.InputWrapper>
              <I.Label>생년월일</I.Label>
              <I.BirthDatePicker />
            </I.InputWrapper>
            <I.InputWrapper>
              <I.Label>학력</I.Label>
              <I.InputBox></I.InputBox>
            </I.InputWrapper>
          </I.InfoWrapper>
          <I.InputWrapper>
            <I.RadioWrapper>
              <I.Label>성별</I.Label>
              <I.GenderRadio type="radio" name="radio" />
              <I.GenderLabel>남자</I.GenderLabel>
            </I.RadioWrapper>
            <I.RadioWrapper>
              <I.GenderRadio type="radio" name="radio" />
              <I.GenderLabel>여자</I.GenderLabel>
            </I.RadioWrapper>
          </I.InputWrapper>
          <I.InputWrapper>
            <I.Label>증상</I.Label>
            <I.CheckboxContainer>
              {symptomData.map((symptom) => (
                <I.CheckboxItem key={symptom.id}>
                  <I.CustomCheckbox
                    type="checkbox"
                    id={`symptom-${symptom.id}`}
                    value={symptom.id}
                    checked={selectedSymptoms.includes(symptom.id)}
                    onChange={() => handleCheckboxChange(symptom.id)}
                  />
                  <I.CustomLabel htmlFor={`symptom-${symptom.id}`}>
                    {symptom.name}
                  </I.CustomLabel>
                </I.CheckboxItem>
              ))}
            </I.CheckboxContainer>
          </I.InputWrapper>

          <I.QuestionWrapper>
            <I.Question>1. 당신의 증상 및 문제행동은 무엇입니까?</I.Question>
            <I.Answer />
            <I.Question>
              2. 당신의 증상 및 문제 행동은 언제부터 시작하였습니까?
            </I.Question>
            <I.Answer />
            <I.Question>
              3. 당신의 증상 및 문제 행동을 어떻게 알게 되셨습니까?
            </I.Question>
            <I.Answer />
            <I.Question>
              4. 당신의 증상 및 문제 행동에 대하여 어떻게 생각하고 느끼십니까?
            </I.Question>
            <I.Answer />
            <I.Question>
              5. 당신의 증상 및 문제 행동을 보고 주위에서 어떠한 반응을
              보이셨습니까?
            </I.Question>
            <I.Answer />
            <I.Question>
              6. 당신의 증상 및 문제행동이 가족을 비롯한 주위에 어떻게 영향을
              주고 있습니까?
            </I.Question>
            <I.Answer />
            <I.Question>
              7. 당신의 증상 및 문제 행동의 원인이 무엇이라고 생각하십니까?
            </I.Question>
            <I.Answer />
            <I.Question>8. 상담을 통해 어떤 결과를 원하시나요?</I.Question>
            <I.Answer />
          </I.QuestionWrapper>

          <I.SubmitBtn>제출하기</I.SubmitBtn>
        </I.Wrapper>
      </I.Base>
    </>
  );
}
