import styled from "@emotion/styled";
import Google from "../../images/goggle.png";

export const Base = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
  backdrop-filter: blur(3px);
`;
export const Modal = styled.div`
  width: 518px;
  height: 384px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1.5rem;
  text-align: center;
  padding: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;
export const Close = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;
export const ModalContents = styled.div`
  height: 360px;
  margin-top: 0.5rem;
  font-size: 16px;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 2.5rem;
`;

export const Btn = styled.a`
  border-radius: 30px;
  background-color: #fffc;
  position: relative;
  margin: 0 auto;
  height: 60px;
  width: 412px;
  border: 1px solid #9f9f9f;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const GoogleLogo = styled.div`
  margin-left: 25px;
  height: 22px;
  width: 22px;
  background: url(${Google});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const SignTxt = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #111826;
`;
export const TextWrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  font-size: 14px;
  line-height: 1.25rem;
  color: #9ca3af;
`;
export const Text = styled.div``;
export const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextPolicy = styled.p`
  cursor: pointer;
  color: #4f46e5;
  text-decoration-line: underline;
  font-size: 14px;
  line-height: 1.25rem;
`;
