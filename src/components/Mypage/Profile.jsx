import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 389px;
  height: 300px;
  border-radius: 8px;
  border-top: 24px solid #36f;
  padding: 28px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 100px;
  margin-right: 30px;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: end;
`;
const ProfileTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #36f;
  border-bottom: 1px solid #36f;
  padding: 2px;
  margin-right: 10px;
`;
const Role = styled.div`
  padding: 4px 16px;
  border-radius: 16px;
  background: #36f;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const ContentList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;
const Title = styled.div`
  width: 100px;
  color: #666;
  font-size: 20px;
  font-weight: 400;
`;
const Content = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
`;

export default function Profile() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileTitle>프로필</ProfileTitle>
        <Role>내담자</Role>
      </ProfileWrapper>
      <ContentWrapper>
        <ContentList>
          <Title>이름</Title>
          <Content>김내담</Content>
        </ContentList>
        <ContentList>
          <Title>이메일</Title>
          <Content>naedam@gmail.com</Content>
        </ContentList>
        <ContentList>
          <Title>가입일</Title>
          <Content>2023.07.01</Content>
        </ContentList>
      </ContentWrapper>
    </Wrapper>
  );
}
