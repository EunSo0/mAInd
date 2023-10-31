/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import * as M from "../../styles/components/LoginModal.style";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function LoginModal({
  isLoginModalOpen,
  setIsLoginModalOpen,
  isLogin,
  setIsLogin,
}) {
  const onClickClose = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  const onClickLogin = () => {
    setIsLogin(!isLogin);
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  useEffect(() => {
    // 모달이 열릴 때 body의 스크롤을 막음
    if (isLoginModalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      // 모달이 닫힐 때 스크롤을 다시 활성화
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }

    return () => {
      // 컴포넌트가 언마운트 될 때 스크롤을 다시 활성화
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [isLoginModalOpen]);

  const navigate = useNavigate();

  return (
    <>
      <M.Base onClick={onClickClose}>
        <M.Modal onClick={(e) => e.stopPropagation()}>
          <M.Close onClick={onClickClose}>
            <AiOutlineClose />
          </M.Close>
          <M.ModalContents>
            <M.Title>시작하기</M.Title>
            <M.Btn href="http://maind.site:8080/oauth2/authorization/google">
              <M.GoogleLogo></M.GoogleLogo>
              <M.SignTxt>Google로 시작하기</M.SignTxt>
            </M.Btn>
            <M.TextWrapper>
              <M.Text>mAInd 서비스 필수 동의 항목</M.Text>
              <M.PolicyWrapper>
                <M.TextPolicy>개인정보 수집이용 동의</M.TextPolicy>
                <p>, </p>
                <M.TextPolicy>개인정보 제3자 제공 동의</M.TextPolicy>
                <p>에 동의하시면</p>
              </M.PolicyWrapper>
              <M.Text>위의 버튼을 눌러 시작해주세요</M.Text>
            </M.TextWrapper>
          </M.ModalContents>
        </M.Modal>
      </M.Base>
    </>
  );
}
