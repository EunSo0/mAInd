import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const Base = styled.div`
  width: 100%;
  height: 4rem;
  posittion: fixed;
  top: 0;
  left: 0;
`;

const List = styled.ul`
  margin: 0 auto;
  width: 85%;
  height: 100%;
  padding: 0;
  display: flex;
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  height: 4rem;
  flex-shrink: 0;
  &:not(:first-child) {
    margin: 0 0 0 10px;
  }
`;

const Right = styled.li`
  display: flex;
  align-items: center;
  height: 4rem;
  flex-shrink: 1;
  margin: 0 0 0 auto;
`;

const Menu = styled.button`
  font-size: 15px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0 30px;
`;

const Sign = styled.button`
  background: white;
  border: 1px solid;
  border-radius: 6px;
  min-width: 65px;
  height: 30px;
  cursor: pointer;
  margin: 10px 5px 10px 15px;
`;

export default function Header() {
  return (
    <>
      <Base>
        <List>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          <Right>
            <Link to="/meeting">
              <Menu>상담하기</Menu>
            </Link>
            <Link to="/initial_survey">
              <Menu>상담예약</Menu>
            </Link>
            <Link to="/result">
              <Menu>상담 기록</Menu>
            </Link>
            <Link to="/login">
              <Sign isPrimaryBg={true}>로그인</Sign>
            </Link>
          </Right>
        </List>
      </Base>
    </>
  );
}
