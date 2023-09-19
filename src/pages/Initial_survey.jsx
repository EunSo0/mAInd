import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DatePicker } from "antd";
import styled from "@emotion/styled";

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
      <Header />

      <Base>
        <Title>초기 설문지</Title>
        <Wrapper>
          <InfoWrapper>
            <InputWrapper>
              <Label>이름</Label>
              <InputBox></InputBox>
            </InputWrapper>
            <InputWrapper>
              <Label>이메일</Label>
              <InputBox></InputBox>
            </InputWrapper>
            <InputWrapper>
              <Label>휴대폰</Label>
              <InputBox></InputBox>
            </InputWrapper>
            <InputWrapper>
              <Label>생년월일</Label>
              <BirthDatePicker />
            </InputWrapper>
            <InputWrapper>
              <Label>학력</Label>
              <InputBox></InputBox>
            </InputWrapper>
          </InfoWrapper>
          <InputWrapper>
            <RadioWrapper>
              <Label>성별</Label>
              <GenderRadio type="radio" name="radio" />
              <GenderLabel>남자</GenderLabel>
            </RadioWrapper>
            <RadioWrapper>
              <GenderRadio type="radio" name="radio" />
              <GenderLabel>여자</GenderLabel>
            </RadioWrapper>
          </InputWrapper>
          <InputWrapper>
            <Label>증상</Label>
            <CheckboxContainer>
              {symptomData.map((symptom) => (
                <CheckboxItem key={symptom.id}>
                  <CustomCheckbox
                    type="checkbox"
                    id={`symptom-${symptom.id}`}
                    value={symptom.id}
                    checked={selectedSymptoms.includes(symptom.id)}
                    onChange={() => handleCheckboxChange(symptom.id)}
                  />
                  <CustomLabel htmlFor={`symptom-${symptom.id}`}>
                    {symptom.name}
                  </CustomLabel>
                </CheckboxItem>
              ))}
            </CheckboxContainer>
          </InputWrapper>

          <QuestionWrapper>
            <Question>1. 당신의 증상 및 문제행동은 무엇입니까?</Question>
            <Answer />
            <Question>
              2. 당신의 증상 및 문제 행동은 언제부터 시작하였습니까?
            </Question>
            <Answer />
            <Question>
              3. 당신의 증상 및 문제 행동을 어떻게 알게 되셨습니까?
            </Question>
            <Answer />
            <Question>
              4. 당신의 증상 및 문제 행동에 대하여 어떻게 생각하고 느끼십니까?
            </Question>
            <Answer />
            <Question>
              5. 당신의 증상 및 문제 행동을 보고 주위에서 어떠한 반응을
              보이셨습니까?
            </Question>
            <Answer />
            <Question>
              6. 당신의 증상 및 문제행동이 가족을 비롯한 주위에 어떻게 영향을
              주고 있습니까?
            </Question>
            <Answer />
            <Question>
              7. 당신의 증상 및 문제 행동의 원인이 무엇이라고 생각하십니까?
            </Question>
            <Answer />
            <Question>8. 상담을 통해 어떤 결과를 원하시나요?</Question>
            <Answer />
          </QuestionWrapper>

          <SubmitBtn>제출하기</SubmitBtn>
        </Wrapper>
      </Base>

      <Footer />
    </>
  );
}

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eff1ff;
`;
const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-top: 80px;
`;

const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  border-radius: 16px;
  border: 1px solid #868686;
  background: #f4f4f4;
  margin: 32px 0 64px 0;
  padding: 60px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
const Label = styled.div`
  width: 130px;
  color: #000;
  font-size: 24px;
  font-weight: 400;
  line-height: 3rem;
`;
const InputBox = styled.input`
  width: 320px;
  height: 48px;
  border: 1px solid #868686;
  background: #fff;
  padding-left: 12px;
`;
const BirthDatePicker = styled(DatePicker)`
  width: 320px;
  height: 48px;
  border: 1px solid #868686;
`;
const RadioWrapper = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GenderRadio = styled.input`
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 9px;
`;
const GenderLabel = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 400;
`;

const CheckboxContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 8px;
`;
const CustomCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;

  &:checked + label {
    border: 1px solid #36f;
    background: #eff1ff;
  }
`;
const CustomLabel = styled.label`
  padding: 8px 32px;
  height: 3.5rem;
  cursor: pointer;
  border-radius: 2rem;
  background-color: #f2f4f6;
  font-size: 24px;
  color: #383838;
  border: 1px solid #868686;
`;

const QuestionWrapper = styled.div`
  margin: 24px 0;
`;
const Question = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 24px;
`;
const Answer = styled.textarea`
  width: 998px;
  height: 200px;
  border: 0.5px solid #868686;
  background: #fff;
  padding: 10px;
  resize: none;
`;
const SubmitBtn = styled.div`
  width: 390px;
  padding: 28px 0;
  margin: 0 auto;
  margin-top: 200px;
  text-align: center;
  border-radius: 16px;
  background: #36f;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;
