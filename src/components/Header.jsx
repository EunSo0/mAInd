import React, { useState } from "react";
import * as H from "../styles/components/Header.styles";
import { Link } from "react-router-dom";
// import Modal from "../components/LoginModal";

const MenuList = [
  { name: "상담하기", page: "/meeting" },
  { name: "상담예약", page: "/initial_survey" },
  { name: "마이페이지", page: "/mypage" },
];

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const loginState = () => {
    setIsLogin((prev) => !prev);
  };

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
          {isLogin && (
            <H.LinkWrapper>
              <H.NavLinks>
                {MenuList.map((el) => (
                  <H.NavLink key={el.page}>
                    <Link to={el.page}>{el.name}</Link>
                  </H.NavLink>
                ))}
              </H.NavLinks>
              <H.Name>김상담님</H.Name>
              <H.RoleBtn>상담자</H.RoleBtn>
            </H.LinkWrapper>
          )}
          {!isLogin && (
            // <Login onClick={() => setIsModalOpen(true)}>로그인/회원가입</Login>
            <H.Login onClick={loginState}>로그인/회원가입</H.Login>
          )}
        </H.Inner>
      </H.Wrapper>
      {/* {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />} */}
    </>
  );
}
