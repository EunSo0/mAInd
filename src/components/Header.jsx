import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "../components/LoginModal";

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
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

// const NavLinks = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
// `;

// const NavLink = styled.li`
//   margin: 0 20px;
//   font-size: 20px;
//   color: #000;
//   font-family: "Montserrat", sans-serif;
//   transition: color 0.4s;

//   a {
//     text-decoration: none;
//     color: inherit;

//     &:hover {
//       color: #ff6b6b;
//     }
//   }
// `;

const Login = styled.div`
  background-color: #3366ff;
  color: #fff;
  font-size: 16px;
  padding: 8px 16px;
  margin-left: 50px;
  border-radius: 16px;
`;

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
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

          {/* <NavLinks>
          <NavLink>
            <Link to="/meeting">상담하기</Link>
          </NavLink>
          <NavLink>
            <Link to="/initial_survey">상담예약</Link>
          </NavLink>
          <NavLink>
            <Link to="/result">상담기록</Link>
          </NavLink>
          <NavLink> */}

          <Link to="/">
            <Login onClick={() => setIsModalOpen(true)}>로그인/회원가입</Login>
          </Link>

          {/* </NavLink>
        </NavLinks> */}
        </Inner>
      </Wrapper>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
}
