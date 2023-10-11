/* eslint-disable react/prop-types */
import React from "react";
import { DatePicker } from "antd";
import { Controller } from "react-hook-form";

function InputDatePicker({ control }) {
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

export default InputDatePicker;
