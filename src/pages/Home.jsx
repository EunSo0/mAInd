import React, { useState } from "react";

import Modal from "../components/LoginModal";
import * as H from "../styles/pages/Home.style";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <H.ContentWrapper>
        <H.Content>
          <H.ContentTxtWrapper>
            비대면 심리상담, <br />
            <H.ContentTxt>
              <p className="title">mAInd</p>
              <p>에서 분석까지 한번에</p>
            </H.ContentTxt>
          </H.ContentTxtWrapper>
          <H.ManImg />
        </H.Content>
        <H.StartBtn onClick={() => setIsModalOpen(true)}>
          지금 바로 시작하기
        </H.StartBtn>
      </H.ContentWrapper>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
}
