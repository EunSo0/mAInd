import styled from "@emotion/styled";
import Img from "../../images/Ing.png";

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;
export const Title = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
`;
export const Txt = styled.div`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const Image = styled.div`
  width: 456px;
  height: 456px;
  background: url(${Img});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 100px;
`;
