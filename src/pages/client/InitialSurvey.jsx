/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { reservationState } from "../../recoil/atom";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as I from "../../styles/pages/InitialSurvey.style";
import InputDatePicker from "../../components/DatePicker";
import axios from "axios";

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
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    getValues,
  } = useForm();
  const [isReservation, seIsReservation] = useRecoilState(reservationState);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (id) => {
    const currentValues = getValues().symptoms || [];
    if (currentValues.includes(id)) {
      setValue(
        "symptoms",
        currentValues.filter((item) => item !== id)
      );
    } else {
      setValue("symptoms", [...currentValues, id]);
    }
  };

  const onClickSubmit = () => {
    seIsReservation(true);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);

    const {
      name,
      gender,
      email,
      birth,
      phone,
      education,
      q_1,
      q_2,
      q_3,
      q_4,
      q_5,
      q_6,
      q_7,
      q_8,
    } = data;
    try {
      const response = await axios.post(
        "/mypage/surveys",
        {
          name,
          gender,
          email,
          birth,
          phone,
          education,
          q_1,
          q_2,
          q_3,
          q_4,
          q_5,
          q_6,
          q_7,
          q_8,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      navigate("/reservation/client");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <>
      <I.Base>
        <I.Title>초기 설문지</I.Title>
        <form onSubmit={handleSubmit(onSubmit)} method="GET">
          <I.Wrapper>
            <I.InfoWrapper>
              <I.InputWrapper>
                <I.Label>이름</I.Label>
                <I.InputBox
                  id="name"
                  type="text"
                  {...register("name", { required: "이름을 입력해주세요" })}
                />
              </I.InputWrapper>
              <I.ErrorText>{errors?.name?.message}</I.ErrorText>
              <I.InputWrapper>
                <I.Label>이메일</I.Label>
                <I.InputBox
                  id="email"
                  type="email"
                  {...register("email", { required: "이메일을 입력해주세요" })}
                />
              </I.InputWrapper>
              <I.ErrorText>{errors?.email?.message}</I.ErrorText>
              <I.InputWrapper>
                <I.Label>휴대폰</I.Label>
                <I.InputBox
                  id="phone"
                  type="text"
                  {...register("phone", {
                    required: "전화번호를 입력해주세요",
                  })}
                />
              </I.InputWrapper>
              <I.ErrorText>{errors?.phone?.message}</I.ErrorText>
              <I.InputWrapper>
                <I.Label>생년월일</I.Label>
                <InputDatePicker control={control} />
              </I.InputWrapper>
              <I.ErrorText>{errors?.birth?.message}</I.ErrorText>
              <I.InputWrapper>
                <I.Label>학력</I.Label>
                <I.InputBox
                  id="education"
                  type="text"
                  {...register("education", {
                    required: "학력을 입력해주세요",
                  })}
                />
              </I.InputWrapper>
              <I.ErrorText>{errors?.education?.message}</I.ErrorText>
            </I.InfoWrapper>
            <I.InputWrapper>
              <I.RadioWrapper>
                <I.Label>성별</I.Label>
                <I.GenderRadio
                  type="radio"
                  name="gender"
                  value="남자"
                  {...register("gender", { required: "성별을 선택해주세요" })}
                />
                <I.GenderLabel>남자</I.GenderLabel>
              </I.RadioWrapper>
              <I.RadioWrapper>
                <I.GenderRadio
                  type="radio"
                  name="gender"
                  value="여자"
                  {...register("gender", { required: "성별을 선택해주세요" })}
                />
                <I.GenderLabel>여자</I.GenderLabel>
              </I.RadioWrapper>
            </I.InputWrapper>
            <I.ErrorText>{errors?.gender?.message}</I.ErrorText>
            <I.InputWrapper>
              <I.Label>증상</I.Label>
              <I.CheckboxContainer>
                {symptomData.map((symptom) => (
                  <I.CheckboxItem key={symptom.id}>
                    <I.CustomCheckbox
                      type="checkbox"
                      id={`symptom-${symptom.id}`}
                      value={symptom.name}
                      checked={
                        getValues().symptoms &&
                        getValues().symptoms.includes(symptom.id)
                      }
                      onChange={() => handleCheckboxChange(symptom.id)}
                      {...register("symptom")}
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
              <I.Answer
                {...register("q_1", { required: "답변을 입력해주세요" })}
              />
              <I.ErrorText2>{errors?.q_1?.message}</I.ErrorText2>
              <I.Question>
                2. 당신의 증상 및 문제 행동은 언제부터 시작하였습니까?
              </I.Question>
              <I.Answer
                {...register("q_2", { required: "답변을 입력해주세요" })}
              />
              <I.ErrorText2>{errors?.q_2?.message}</I.ErrorText2>
              <I.Question>
                3. 당신의 증상 및 문제 행동을 어떻게 알게 되셨습니까?
              </I.Question>
              <I.Answer
                {...register("q_3", { required: "답변을 입력해주세요" })}
              />
              <I.ErrorText2>{errors?.q_3?.message}</I.ErrorText2>
              <I.Question>
                4. 당신의 증상 및 문제 행동에 대하여 어떻게 생각하고 느끼십니까?
              </I.Question>
              <I.Answer
                {...register("q_4", { required: "답변을 입력해주세요" })}
              />
              <I.ErrorText2>{errors?.q_4?.message}</I.ErrorText2>
              <I.Question>
                5. 당신의 증상 및 문제 행동을 보고 주위에서 어떠한 반응을
                보이셨습니까?
              </I.Question>
              <I.Answer
                {...register("q_5", { required: "답변을 입력해주세요" })}
              />
              <I.ErrorText2>{errors?.q_5?.message}</I.ErrorText2>
              <I.Question>
                6. 당신의 증상 및 문제행동이 가족을 비롯한 주위에 어떻게 영향을
                주고 있습니까?
              </I.Question>
              <I.Answer
                {...register("q_6", { required: "답변을 입력해주세요" })}
              />
              <I.ErrorText2>{errors?.q_6?.message}</I.ErrorText2>
              <I.Question>
                7. 당신의 증상 및 문제 행동의 원인이 무엇이라고 생각하십니까?
              </I.Question>
              <I.Answer
                {...register("q_7", { required: "답변을 입력해주세요" })}
              />
              <I.ErrorText2>{errors?.q_7?.message}</I.ErrorText2>
              <I.Question>8. 상담을 통해 어떤 결과를 원하시나요?</I.Question>
              <I.Answer
                {...register("q_8", { required: "답변을 입력해주세요" })}
              />
              <I.ErrorText2>{errors?.q_8?.message}</I.ErrorText2>
            </I.QuestionWrapper>

            {/* <Link to="/reservation/client"> */}
            <I.ButtonWrapper>
              <I.SubmitBtn type="submit" onClick={onClickSubmit}>
                제출하기
              </I.SubmitBtn>
            </I.ButtonWrapper>
            {/* </Link> */}
          </I.Wrapper>
        </form>
      </I.Base>
    </>
  );
}
