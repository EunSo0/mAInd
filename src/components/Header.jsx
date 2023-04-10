import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Base = styled.div`
  width: 100%;
  height: 60px;
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

const Left = styled.li`
  display: flex;
  align-items: center;
  height: 50px;
  flex-shrink: 0;
  &:not(:first-child) {
    margin: 0 0 0 10px;
  }
`;

const Right = styled.li`
  display: flex;
  align-items: center;
  height: 50px;
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
            <Left>mAInd</Left>
          </Link>
          <Right>
            <Menu>상담하기</Menu>
            <Menu>상담 예약</Menu>
            <Menu>상담 기록</Menu>
            <Link to="/login">
              <Sign isPrimaryBg={true}>로그인</Sign>
            </Link>
          </Right>
        </List>
      </Base>
    </>
  );
}
