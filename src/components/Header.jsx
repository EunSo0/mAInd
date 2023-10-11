import React, { useState, useEffect } from "react";
import * as H from "../styles/components/Header.styles";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState, loginModalState, logoutModalState } from "../recoil/atom";
import LoginModal from "../components/login/LoginModal";
import LogoutModal from "./LogoutModal";
import jwt_decode from "jwt-decode";

const MenuList = [
  { name: "상담하기", page: "/counsel" },
  { name: "상담예약", page: "/reservation/client" },
  { name: "마이페이지", page: "/mypage" },
];

export default function Header() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isLoginModalOpen, setIsLoginModalOpen] =
    useRecoilState(loginModalState);
  const [isLogoutModalOpen, setIsLogoutModalOpen] =
    useRecoilState(logoutModalState);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

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
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.log("error: " + JSON.stringify(localStorage));
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
                {MenuList.map((el) => (
                  <H.NavLink key={el.page}>
                    <Link to={el.page}>{el.name}</Link>
                  </H.NavLink>
                ))}
              </H.NavLinks>
              <H.Name>{name}님</H.Name>
              {role == "CLIENT" ? (
                <H.RoleBtn onClick={clickLogoutBtn}>내담자</H.RoleBtn>
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
