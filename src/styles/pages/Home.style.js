import styled from "@emotion/styled";
import Img from "../../images/HomeMan.png";

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 148px);
  overflow-x: hidden;
  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #b8bff3;
  margin: 0 auto;
  margin-top: 52px;
  border-radius: 8px;
`;
export const ManImg = styled.div`
  width: 478px;
  height: 322px;
  background: url(${Img});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: auto;
  margin-bottom: 20px;
`;
export const ContentTxtWrapper = styled.div`
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
  margin-top: 80px;
`;
export const ContentTxt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;

  & .title {
    color: #1c2a6f;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }
`;

export const StartBtn = styled.button`
  display: flex;
  height: 115px;
  padding: 38px 136px;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  background: #36f;
  color: #fff;
  font-size: 36px;
  font-weight: 500;
  line-height: 24px;
  margin: 52px;
  cursor: pointer;
`;
