import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { AiOutlineClose } from "react-icons/ai";
import Google from "../image/goggle.png";

// eslint-disable-next-line react/prop-types
export default function LoginModal({ isOpen, onClose }) {
  useEffect(() => {
    // 모달이 열릴 때 body의 스크롤을 막음
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // 모달이 닫힐 때 스크롤을 다시 활성화
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      // 컴포넌트가 언마운트 될 때 스크롤을 다시 활성화
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <Base onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Close onClick={onClose}>
            <AiOutlineClose />
          </Close>
          <ModalContents>
            <Title>시작하기</Title>
            <Btn>
              <GoogleLogo />
              <SignTxt>Google로 계속하기</SignTxt>
            </Btn>
            <TextWrapper>
              <Text>mAInd 서비스 필수 동의 항목</Text>
              <PolicyWrapper>
                <TextPolicy>개인정보 수집이용 동의</TextPolicy>
                <p>, </p>
                <TextPolicy>개인정보 제3자 제공 동의</TextPolicy>
                <p>에 동의하시면</p>
              </PolicyWrapper>
              <Text>위의 버튼을 눌러 시작해주세요</Text>
            </TextWrapper>
          </ModalContents>
        </Modal>
      </Base>
    </>
  );
}

const Base = styled.div`
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
const Modal = styled.div`
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
const Close = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;
const ModalContents = styled.div`
  height: 360px;
  margin-top: 0.5rem;
  font-size: 16px;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 2.5rem;
  margin-bottom: 30px;
`;

const Btn = styled.button`
  border-radius: 30px;
  background-color: #fffc;
  position: relative;
  margin: 0 auto;
  height: 60px;
  width: 412px;
  border-width: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const GoogleLogo = styled.div`
  margin-left: 25px;
  height: 22px;
  width: 22px;
  background: url(${Google});
  background-size: contain;
  background-repeat: no-repeat;
`;
const SignTxt = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #111826;
`;
const TextWrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  font-size: 14px;
  line-height: 1.25rem;
  color: #9ca3af;
`;
const Text = styled.div``;
const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TextPolicy = styled.p`
  cursor: pointer;
  color: #4f46e5;
  text-decoration-line: underline;
  font-size: 14px;
  line-height: 1.25rem;
`;
