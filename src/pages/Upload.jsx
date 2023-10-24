/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as U from "../styles/pages/Upload.js";
import {
  InputCounselDatePicker,
  InputCounselTimePicker,
} from "../components/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import {
  submitVideo,
  submitVideoData,
  counselingVideoResult,
} from "../api/api";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { resultData } from "../recoil/atom";
import { useRecoilState } from "recoil";

export default function Upload() {
  const navigate = useNavigate();
  const { survey_id } = useParams();
  const [file, setFile] = useState(null);
  const { mutate: mutateSubmitVideo, status: statusSubmitVideo } = useMutation(
    "submitVideo",
    submitVideo
  );
  const { mutate: mutateSubmitVideoData, status: statusSubmitVideoData } =
    useMutation("submitVideoData", submitVideoData);
  const { mutate: mutateSubmitResult, status: statusSubmitResult } =
    useMutation("submitResult", counselingVideoResult);

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
    const videoData = {
      surveyId: Number(survey_id), // survey_id는 문자열일 수 있으므로 숫자로 변환
      date: data.date,
      startHour: Number(data.time[0].split(":")[0]),
      startMin: Number(data.time[0].split(":")[1]),
      endHour: Number(data.time[1].split(":")[0]),
      endMin: Number(data.time[1].split(":")[1]),
      countNum: Number(data.countNum), // countNum도 숫자로 변환
    };

    const requestBody = {
      countNum: Number(data.countNum),
      survey_id: Number(survey_id),
    };
    let videoFormData = new FormData();
    videoFormData.append("file", file);
    videoFormData.append("requestBody", JSON.stringify(requestBody));

    const pathData = {
      surveyId: Number(survey_id),
      countNum: Number(data.countNum),
    };

    console.log(pathData);

    mutateSubmitVideoData(videoData, {
      onSuccess: (response) => {
        console.log(response);

        mutateSubmitVideo(videoFormData, {
          onSuccess: (videoResponse) => {
            console.log(videoResponse);
            setUploadResult(videoResponse);

            mutateSubmitResult(videoResponse, {
              onSuccess: (resultResponse) => {
                console.log(resultResponse);
                navigate("/counsel");
              },
              onError: (error) => {
                console.error(error);
                alert(JSON.stringify(error.response.data));
              },
            });
          },
          onError: (error) => {
            console.error(error);
            alert(JSON.stringify(error.response.data));
          },
        });
      },
      onError: (error) => {
        console.error(error);
        alert(JSON.stringify(error.response.data));
      },
    });

    console.log(uploadResult);
  };

  if (statusSubmitVideo === "loading") {
    console.log("영상 분석중..");
  }
  if (statusSubmitVideoData === "loading") {
    console.log("데이터보내는중..");
  }
  if (statusSubmitResult === "loading") {
    console.log("결과보내는중..");
  }

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
