import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { LiaUserCircle } from "react-icons/lia";

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 84px;
  border-top: solid 1px #e2e2e2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const Inner = styled.div`
  display: flex;
  width: 80%;
  display: flex;
  flex-grow: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FooterLogo = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #3366ff;
  font-family: "Poppins", sans-serif;
  line-height: 36px;
`;
const Contact = styled.ul`
  line-height: 1.4;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  font-size: 17px;
  margin: 5px 10px 0;
`;

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Inner>
          <Link to="#">
            <FooterLogo>mAInd</FooterLogo>
          </Link>
          <Contact>
            <List>LEE EUNSOO</List>
            <List>JANG JIWON</List>
            <List>CHEON YUNSEO</List>
          </Contact>
        </Inner>
      </Wrapper>
    </>
  );
}
