import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
// import { LiaUserCircle } from "react-icons/lia";

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Inner>
          <Link to="#">
            <FooterLogo>mAInd</FooterLogo>
          </Link>
          <Contact>
            © 2023. 천원은행복(이은수, 장지원, 천윤서). All rights reserved
          </Contact>
        </Inner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.footer`
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
  flex-grow: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FooterLogo = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #3366ff;
  font-family: "Poppins", sans-serif;
  line-height: 36px;
`;
const Contact = styled.ul`
  font-size: 12px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
