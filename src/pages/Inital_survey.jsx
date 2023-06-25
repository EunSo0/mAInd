import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const All = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 100px 0;
`;

const Title = styled.h1`
  text-align: center;
  padding: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
`;

const ShortLabel = styled.label`
  width: 200px;
  font-size: 20px;
  margin: 20px;
  text-align: right;
  padding: 7px 0px;
`;

const ShortInput = styled.input`
  width: 200px;
  height: 20px;
  margin: 20px 5px;
  padding: 10px 0;
  font-size: 20px;
  padding: 10px;
  border: 1px solid;
`;

const Info = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const Info2 = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Label = styled.label`
  width: 200px;
  height: 40px;
  font-size: 20px;
  margin: 20px;
  text-align: right;
  padding: 9px 0px;
`;

const LongLabel = styled.label`
  font-size: 20px;
  padding: 0 20px;
`;

const Input = styled.textarea`
  width: 100%;
  height: 100px;
  margin: 20px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 3px;
`;

const Submit = styled.button`
  justify-content: center;
  background-color: #85b3cd;
  border: 1px solid #85b3cd;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  margin: 50px 0;
`;

export default function InitialSurvey() {
  return (
    <>
      <Header />
      <All>
        <Title>초기 설문지</Title>
        <Wrapper>
          <table>
            <tbody>
              <tr>
                <td>
                  <ShortLabel>이름</ShortLabel>
                </td>
                <td>
                  <ShortInput id="name" />
                </td>
                <td>
                  <ShortLabel>성별</ShortLabel>
                </td>
                <td>
                  <ShortInput id="gender" />
                </td>
                <td>
                  <ShortLabel>E-mail</ShortLabel>
                </td>
                <td>
                  <ShortInput id="mail" />
                </td>
              </tr>
              <tr>
                <td>
                  <ShortLabel>생년월일</ShortLabel>
                </td>
                <td>
                  <ShortInput id="birth" />
                </td>
                <td>
                  <ShortLabel>휴대폰</ShortLabel>
                </td>
                <td>
                  <ShortInput id="phone" />
                </td>
                <td>
                  <ShortLabel>학력</ShortLabel>
                </td>
                <td>
                  <ShortInput id="edu" />
                </td>
              </tr>
            </tbody>
          </table>
        </Wrapper>
        <Wrapper>
          <Info>
            <Label>상담 의뢰 내용</Label>
            <Input />
          </Info>
          <Info>
            <Label>병력 / 복용 약</Label>
            <Input />
          </Info>
          <Info>
            <Label>상담 경험</Label>
            <Input />
          </Info>
        </Wrapper>
        <Wrapper>
          <Info2>
            <LongLabel>당신의 증상 및 문제 행동은 무엇입니까?</LongLabel>
            <Input />
          </Info2>
          <Info2>
            <LongLabel>
              당신의 증상 및 문제 행동은 언제부터 시작하였습니까?
            </LongLabel>
            <Input />
          </Info2>
          <Info2>
            <LongLabel>
              당신의 증상 및 문제 행동을 어떻게 알게 되셨습니까?
            </LongLabel>
            <Input />
          </Info2>
          <Info2>
            <LongLabel>
              당신의 증상 및 문제 행동에 대하여 어떻게 생각하고 느끼십니까?
            </LongLabel>
            <Input />
          </Info2>
          <Info2>
            <LongLabel>
              당신의 증상 및 문제 행동을 보고 주위에서 어떠한 반응을
              보이셨습니까?
            </LongLabel>
            <Input />
          </Info2>
          <Info2>
            <LongLabel>
              당신의 증상 및 문제행동이 가족을 비롯한 주위에 어떻게 영향을 주고
              있습니까?
            </LongLabel>
            <Input />
          </Info2>
          <Info2>
            <LongLabel>
              당신의 증상 및 문제 행동의 원인이 무엇이라고 생각하십니까?
            </LongLabel>
            <Input />
          </Info2>
          <Info2>
            <LongLabel>상담을 통해 어떤 결과를 원하시나요?</LongLabel>
            <Input />
          </Info2>
          <Submit>제출하기</Submit>
        </Wrapper>
      </All>
    </>
  );
}
