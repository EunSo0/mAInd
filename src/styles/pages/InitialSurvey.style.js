import styled from "@emotion/styled";
import { DatePicker } from "antd";

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eff1ff;
`;
export const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-top: 80px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  border-radius: 16px;
  border: 1px solid #868686;
  background: #f4f4f4;
  margin: 32px 0 64px 0;
  padding: 60px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const Label = styled.div`
  width: 130px;
  color: #000;
  font-size: 24px;
  font-weight: 400;
  line-height: 3rem;
`;
export const InputBox = styled.input`
  width: 320px;
  height: 48px;
  border: 1px solid #868686;
  background: #fff;
  padding-left: 12px;
  font-size: 18px;
`;
export const BirthDatePicker = styled(DatePicker)`
  width: 320px;
  height: 48px;
  border: 1px solid #868686;
  font-size: 18px;
`;
export const RadioWrapper = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GenderRadio = styled.input`
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 9px;
`;
export const GenderLabel = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 400;
`;

export const CheckboxContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 8px;
`;
export const CustomCheckbox = styled.input`
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
    background: #e0e6ff;
  }
`;
export const CustomLabel = styled.label`
  padding: 8px 32px;
  height: 3.5rem;
  cursor: pointer;
  border-radius: 2rem;
  background-color: #f2f4f6;
  font-size: 24px;
  color: #383838;
  border: 1px solid #868686;
`;

export const QuestionWrapper = styled.div`
  margin: 24px 0;
`;
export const Question = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 24px;
`;
export const Answer = styled.textarea`
  width: 998px;
  height: 200px;
  border: 0.5px solid #868686;
  background: #fff;
  padding: 10px;
  resize: none;
  font-size: 18px;
`;
export const SubmitBtn = styled.div`
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
