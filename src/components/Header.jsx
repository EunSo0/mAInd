import React, { useEffect } from "react";
import * as H from "../styles/components/Header.styles";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  loginState,
  loginModalState,
  logoutModalState,
  roleState,
  surveyState,
  nameValue,
} from "../recoil/atom";
import LoginModal from "../components/login/LoginModal";
import LogoutModal from "./LogoutModal";
import jwt_decode from "jwt-decode";

export default function Header() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isLoginModalOpen, setIsLoginModalOpen] =
    useRecoilState(loginModalState);
  const [isLogoutModalOpen, setIsLogoutModalOpen] =
    useRecoilState(logoutModalState);
  const [name, setName] = useRecoilState(nameValue);
  const [role, setRole] = useRecoilState(roleState);
  const [, seIsSubmitSurvey] = useRecoilState(surveyState);

  const clickLoginBtn = () => {
    setIsLoginModalOpen((prev) => !prev);
  };
  const clickLogoutBtn = () => {
    setIsLogoutModalOpen((prev) => !prev);
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("token") !== null) {
        setIsLogin(true);
        console.log(jwt_decode(localStorage.getItem("token")));
        setName(jwt_decode(localStorage.getItem("token")).name);
        setRole(jwt_decode(localStorage.getItem("token")).role);
        seIsSubmitSurvey(jwt_decode(localStorage.getItem("token")).status);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.log("error: " + JSON.stringify(localStorage));
      console.log(error);
    }
  }, [isLogin]);

  return (
    <>
      <H.Wrapper>
        <H.Inner>
          <H.LogoWrapper>
            <Link to="/">
              <H.Logo>mAInd</H.Logo>
              <H.LogoTxt>비대면 심리 상담 서비스</H.LogoTxt>
            </Link>
          </H.LogoWrapper>
          {isLogin ? (
            <H.LinkWrapper>
              <H.NavLinks>
                {role == "CLIENT" ? (
                  <>
                    <H.NavLink>
                      <Link to="/reservation/client">상담예약</Link>
                    </H.NavLink>
                    <H.NavLink>
                      <Link to="/OnlineMeeting">화상상담</Link>
                    </H.NavLink>
                    <H.NavLink>
                      <Link to="/mypage">마이페이지</Link>
                    </H.NavLink>
                  </>
                ) : (
                  <>
                    <H.NavLink>
                      <Link to="/reservation/counselor">예약내역</Link>
                    </H.NavLink>
                    <H.NavLink>
                      <Link to="/counsel">상담분석</Link>
                    </H.NavLink>
                    <H.NavLink>
                      <Link to="/OnlineMeeting">화상상담</Link>
                    </H.NavLink>
                    <H.NavLink>
                      <Link to="/mypage">마이페이지</Link>
                    </H.NavLink>
                  </>
                )}
              </H.NavLinks>
              <H.Name>{name}님</H.Name>
              {role == "CLIENT" ? (
                <H.RoleBtn onClick={clickLogoutBtn} className="client">
                  내담자
                </H.RoleBtn>
              ) : (
                <H.RoleBtn onClick={clickLogoutBtn}>상담자</H.RoleBtn>
              )}
            </H.LinkWrapper>
          ) : (
            <H.Login onClick={clickLoginBtn}>로그인/회원가입</H.Login>
          )}
        </H.Inner>
      </H.Wrapper>
      {isLoginModalOpen && (
        <LoginModal
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      )}
      {isLogoutModalOpen && (
        <LogoutModal
          isLogoutModalOpen={isLogoutModalOpen}
          setIsLogoutModalOpen={setIsLogoutModalOpen}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      )}
    </>
  );
}
