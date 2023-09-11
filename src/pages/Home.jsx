import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/LoginModal";
import styled from "styled-components";
import Img from "../image/HomeMan.png";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 84px;
`;
const Content = styled.div`
  width: 1200px;
  height: 567px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #b8bff3;
  margin: 0 auto;
  margin-top: 52px;
  border-radius: 8px;
`;
const ManImg = styled.div`
  width: 563px;
  height: 492px;
  background: url(${Img});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: auto;
  margin-bottom: 0;
`;
const ContentTxtWrapper = styled.div`
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
`;
const ContentTxt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 4rem;

  & .title {
    color: #1c2a6f;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }
`;

const StartBtn = styled.button`
  display: flex;
  height: 115px;
  padding: 38px 136px;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  background: #36f;
  color: #fff;
  font-size: 36px;
  font-weight: 500;
  line-height: 24px;
  margin: 59px;
  cursor: pointer;
`;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header />
      <ContentWrapper>
        <Content>
          <ManImg></ManImg>
          <ContentTxtWrapper>
            비대면 심리상담, <br />
            <ContentTxt>
              <p className="title">mAInd</p>
              <p>에서 분석까지 한번에</p>
            </ContentTxt>
          </ContentTxtWrapper>
        </Content>
        <StartBtn onClick={() => setIsModalOpen(true)}>
          지금 바로 시작하기
        </StartBtn>
      </ContentWrapper>
      <Footer></Footer>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
}
