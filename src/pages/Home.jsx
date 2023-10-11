import React from "react";
import { useRecoilState } from "recoil";
import { loginState, loginModalState } from "../recoil/atom";
import LoginModal from "../components/login/LoginModal";
import * as H from "../styles/pages/Home.style";

//export const BASE_URL = "http://maind.site";

export default function Home() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isLoginModalOpen, setIsLoginModalOpen] =
    useRecoilState(loginModalState);

  const clickLoginBtn = () => {
    setIsLoginModalOpen((prev) => !prev);
  };
  return (
    <>
      <H.ContentWrapper>
        <H.Content>
          <H.ContentTxtWrapper>
            비대면 심리상담, <br />
            <H.ContentTxt>
              <p className="title">mAInd</p>
              <p>에서 분석까지 한번에</p>
            </H.ContentTxt>
          </H.ContentTxtWrapper>
          <H.ManImg />
        </H.Content>
        {!isLogin && (
          <H.StartBtn onClick={clickLoginBtn}>지금 바로 시작하기</H.StartBtn>
        )}
      </H.ContentWrapper>
      {isLoginModalOpen && (
        <LoginModal
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      )}
    </>
  );
}
