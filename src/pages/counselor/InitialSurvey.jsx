import React from "react";
import * as I from "../../styles/pages/InitialSurvey.style";
import { useQuery, useMutation } from "react-query";
import {
  getInitialSurvey,
  editInitialSurveyStatus,
  deleteInitialSurvey,
} from "../../api/api";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { roleState } from "../../recoil/atom";
import { DateFormat } from "./../../utils/DateFormat";

export default function InitialSurvey() {
  const navigate = useNavigate();
  const { survey_id } = useParams();
  const [role] = useRecoilState(roleState);

  const {
    data: result,
    isLoading,
    isError,
  } = useQuery("initialSurvey", () => getInitialSurvey(survey_id));

  const { mutate: editMutate, status: editStatus } = useMutation(
    "editStatus",
    editInitialSurveyStatus
  );
  const { mutate: deleteMutate, status: deleteStatus } = useMutation(
    "delete",
    deleteInitialSurvey
  );

  if (isLoading) {
    return <p>Loading user data...</p>;
  } else if (isError) {
    return <p>Error fetching user data</p>;
  } else if (!result) {
    return <p>No data available</p>;
  }

  const handleStatusChange = (newStatus) => {
    const data = { surveyId: survey_id, status: newStatus };
    console.log(data);

    editMutate(data, {
      onSuccess: (response) => {
        console.log("Edit Mutation successful", response);
      },
      onError: (error) => {
        console.error("Edit Mutation error", error);
      },
    });
  };

  const deleteClick = () => {
    deleteMutate(survey_id, {
      onSuccess: (response) => {
        console.log("Delete Mutation successful", response);
        navigate("/mypage");
      },
      onError: (error) => {
        console.error("Delete Mutation error", error);
      },
    });
  };

  if (editStatus === "loading" || deleteStatus === "loading") {
    return <p>Loading user data...</p>;
  }

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
              <I.TextBox>{DateFormat(result.birth)}</I.TextBox>
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
            {result.symptoms &&
              result.symptoms.map((item, index) => (
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
          <I.ButtonWrapper>
            {result.applyStatus == "BEFORE" ? (
              <>
                {role == "CLIENT" ? (
                  <>
                    <Link to={`/initialSurvey/edit/${survey_id}`}>
                      <I.Button className="approve">수정</I.Button>
                    </Link>
                    <I.Button onClick={deleteClick}>삭제</I.Button>
                    <Link to={`/mypage`}>
                      <I.Button className="close">닫기</I.Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <I.Button
                      className="approve"
                      onClick={() => handleStatusChange("ACCEPT")}
                    >
                      승인
                    </I.Button>
                    <I.Button onClick={() => handleStatusChange("HOLD")}>
                      보류
                    </I.Button>
                    <I.Button onClick={() => handleStatusChange("REJECT")}>
                      거절
                    </I.Button>
                  </>
                )}
              </>
            ) : (
              <>
                {role == "CLIENT" ? (
                  <Link to={`/mypage`}>
                    <I.Button className="close">닫기</I.Button>
                  </Link>
                ) : (
                  <Link to={`/reservation/counselor`}>
                    <I.Button className="close">닫기</I.Button>
                  </Link>
                )}
              </>
            )}
          </I.ButtonWrapper>
        </I.Wrapper>
      </I.Base>
    </>
  );
}
