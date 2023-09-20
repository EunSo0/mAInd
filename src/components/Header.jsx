import React, { useState } from "react";
import styled from "@emotion/styled";
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
      <Wrapper>
        <Inner>
          <LogoWrapper>
            <Link to="/">
              <Logo>mAInd</Logo>
              <LogoTxt>비대면 심리 상담 서비스</LogoTxt>
            </Link>
          </LogoWrapper>
          {isLogin && (
            <LinkWrapper>
              <NavLinks>
                {MenuList.map((el) => (
                  <NavLink key={el.page}>
                    <Link to={el.page}>{el.name}</Link>
                  </NavLink>
                ))}
              </NavLinks>
              <Name>김상담님</Name>
              <RoleBtn>상담자</RoleBtn>
            </LinkWrapper>
          )}
          {!isLogin && (
            // <Login onClick={() => setIsModalOpen(true)}>로그인/회원가입</Login>
            <Login onClick={loginState}>로그인/회원가입</Login>
          )}
        </Inner>
      </Wrapper>
      {/* {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />} */}
    </>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #e2e2e2;
`;

const Inner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 34px;
  letter-spacing: 1px;
  transition: all 0.4s;
  color: #36f;
  font-weight: 700;
  text-align: center;
  font-family: "Poppins", sans-serif;
  line-height: 36px;
`;
const LogoTxt = styled.div`
  font-size: 12px;
  color: #36f;
  text-align: center;
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NavLink = styled.div`
  margin: 0 20px;
  font-size: 18px;
  color: #666;
  font-family: "Montserrat", sans-serif;
  transition: color 0.4s;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #000;
    }
  }
`;

const Name = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-right: 30px;
`;
const RoleBtn = styled.div`
  display: flex;
  padding: 8px 18px;
  border-radius: 16px;
  background: #14ae5c;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Login = styled.div`
  background-color: #3366ff;
  color: #fff;
  font-size: 16px;
  padding: 8px 16px;
  margin-left: 50px;
  border-radius: 16px;
  cursor: pointer;
`;
