/* eslint-disable react/prop-types */
import React from "react";
import { TimePicker, DatePicker } from "antd";
import { Controller } from "react-hook-form";

export function InputBirthDatePicker({ control }) {
  const dateFormat = "YYYY-MM-DD";

  return (
    <Controller
      control={control}
      name="birth"
      format={dateFormat}
      rules={{ required: "생년월일을 입력해주세요" }}
      render={({ field: { onChange } }) => (
        <DatePicker
          onChange={(value, dateString) => {
            onChange(dateString);
          }}
          format={dateFormat}
          style={{ border: "1px solid #868686" }}
        />
      )}
    />
  );
}

export function InputCounselDatePicker({ control }) {
  const dateFormat = "YYYY-MM-DD";

  return (
    <Controller
      control={control}
      name="date"
      format={dateFormat}
      rules={{ required: "상담 날짜를 입력해주세요" }}
      render={({ field: { onChange } }) => (
        <DatePicker
          onChange={(value, dateString) => {
            onChange(dateString);
          }}
          format={dateFormat}
          style={{ border: "1px solid #868686" }}
        />
      )}
    />
  );
}

export function InputCounselTimePicker({ control }) {
  return (
    <Controller
      control={control}
      name="time"
      rules={{ required: "상담시간을 입력해주세요" }}
      render={({ field: { onChange } }) => (
        <TimePicker.RangePicker
          onChange={(value, dateString) => {
            onChange(dateString);
          }}
          style={{ border: "1px solid #868686" }}
        />
      )}
    />
  );
}
