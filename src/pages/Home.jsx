import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/LoginModal";
import styled from "@emotion/styled";
import Img from "../image/HomeMan.png";

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
          <ContentTxtWrapper>
            비대면 심리상담, <br />
            <ContentTxt>
              <p className="title">mAInd</p>
              <p>에서 분석까지 한번에</p>
            </ContentTxt>
          </ContentTxtWrapper>
          <ManImg />
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

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #b8bff3;
  margin: 0 auto;
  margin-top: 52px;
  border-radius: 8px;
`;
const ManImg = styled.div`
  width: 478px;
  height: 322px;
  background: url(${Img});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: auto;
  margin-bottom: 20px;
`;
const ContentTxtWrapper = styled.div`
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
  margin-top: 80px;
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
  margin: 52px;
  cursor: pointer;
`;
