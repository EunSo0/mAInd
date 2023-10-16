import React, { useState } from "react";
import * as U from "../styles/pages/Upload.js";
import { TimePicker, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { submitVideo } from "../api/api";
import { useMutation } from "react-query";

export default function Upload() {
  const navigate = useNavigate();
  //const [date, setDate] = useState("");
  //const [startTime, setStartTime] = useState("");
  //const [endTime, setEndTime] = useState("");
  const [file, setFile] = useState({});
  const { mutate, status } = useMutation("submitSurvey", submitVideo);

  const fileUpload = (e) => {
    setFile({
      url: URL.createObjectURL(e.target.files[0]),
    });
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (response) => {
        console.log(response);
        navigate("/counsel");
      },
      onError: (error) => {
        console.error(error);
        alert(JSON.stringify(error.response.data));
      },
    });
  };

  if (status === "loading") {
    return <p>Loading user data...</p>;
  }

  return (
    <U.Wrapper>
      <U.Title>상담영상업로드</U.Title>
      <U.ContentWrapper>
        <U.ListWrapper>
          <U.ListTitle>상담일자</U.ListTitle>
          <DatePicker />
        </U.ListWrapper>
        <U.ListWrapper>
          <U.ListTitle>상담시간</U.ListTitle>
          <TimePicker.RangePicker />
        </U.ListWrapper>
        <U.ListWrapper>
          <U.ListTitle>회기수</U.ListTitle>
          <U.sessionContent defaultValue="회기" />
        </U.ListWrapper>
        <U.ListWrapper>
          <U.ListTitle>영상</U.ListTitle>
          <U.selectBtn type="file" accept="video/*" onChange={fileUpload} />
          {file.video && <video src={file.url} controls width="350px" />}
        </U.ListWrapper>
        <U.UploadBtn onClick={onSubmit}>업로드</U.UploadBtn>
      </U.ContentWrapper>
    </U.Wrapper>
  );
}
