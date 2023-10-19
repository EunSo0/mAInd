/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as U from "../styles/pages/Upload.js";
import {
  InputCounselDatePicker,
  InputCounselTimePicker,
} from "../components/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import { submitVideo } from "../api/api";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { resultData } from "../recoil/atom";
import { useRecoilState } from "recoil";

export default function Upload() {
  const navigate = useNavigate();
  const { survey_id } = useParams();
  const [file, setFile] = useState(null);
  const { mutate, status } = useMutation("submitSurvey", submitVideo);
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();
  const [uploadResult, setUploadResult] = useRecoilState(resultData);

  const fileUpload = (e) => {
    const selectedFile = e.target.files[0]; // 선택된 파일
    setFile(selectedFile);
    console.log("Selected file:", selectedFile);
  };
  const onSubmitVideo = (data) => {
    // const requestData = {
    //   survey_id: Number(survey_id), // survey_id는 문자열일 수 있으므로 숫자로 변환
    //   date: data.date,
    //   startHour: Number(data.time[0].split(":")[0]),
    //   startMin: Number(data.time[0].split(":")[1]),
    //   endHour: Number(data.time[1].split(":")[0]),
    //   endMin: Number(data.time[1].split(":")[1]),
    //   countNum: Number(data.countNum), // countNum도 숫자로 변환
    // };

    const requestBody = {
      countNum: Number(data.countNum),
      survey_id: Number(survey_id),
    };
    let formData = new FormData();
    formData.append("file", file);
    formData.append("requestBody", JSON.stringify(requestBody));

    mutate(formData, {
      onSuccess: (response) => {
        console.log(response);
        setUploadResult(response);
        console.log(uploadResult);
        navigate("/counsel");
      },
      onError: (error) => {
        console.error(error);
        alert(JSON.stringify(error.response.data));
      },
    });

    console.log(uploadResult);
  };

  if (status === "loading") {
    return <p>Loading user data...</p>;
  }

  console.log(uploadResult);
  return (
    <U.Wrapper>
      <U.Title>상담영상업로드</U.Title>
      <form onSubmit={handleSubmit(onSubmitVideo)}>
        <U.ContentWrapper>
          <U.ListWrapper>
            <U.ListTitle>상담일자</U.ListTitle>
            <InputCounselDatePicker control={control} />
          </U.ListWrapper>
          <U.ErrorText>{errors?.date?.message}</U.ErrorText>
          <U.ListWrapper>
            <U.ListTitle>상담시간</U.ListTitle>
            <InputCounselTimePicker control={control} />
          </U.ListWrapper>
          <U.ErrorText>{errors?.time?.message}</U.ErrorText>
          <U.ListWrapper>
            <U.ListTitle>회기수</U.ListTitle>
            <U.sessionContent
              id="countNum"
              type="text"
              {...register("countNum", { required: "회기수를 입력해주세요" })}
            />
          </U.ListWrapper>
          <U.ErrorText>{errors?.countNum?.message}</U.ErrorText>
          <U.ListWrapper>
            <U.ListTitle>영상</U.ListTitle>
            <U.selectBtn type="file" accept="video/*" onChange={fileUpload} />
          </U.ListWrapper>
          <U.ErrorText>{errors?.videoName?.message}</U.ErrorText>
          <U.UploadBtn type="submit">업로드</U.UploadBtn>
        </U.ContentWrapper>
      </form>
    </U.Wrapper>
  );
}
