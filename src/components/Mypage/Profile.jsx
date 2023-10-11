import React from "react";
import * as P from "../../styles/components/mypage/Profile..style";

export default function Profile() {
  return (
    <P.Wrapper>
      <P.ProfileWrapper>
        <P.ProfileTitle>프로필</P.ProfileTitle>
        <P.Role>내담자</P.Role>
      </P.ProfileWrapper>
      <P.ContentWrapper>
        <P.ContentList>
          <P.Title>이름</P.Title>
          <P.Content>김내담</P.Content>
        </P.ContentList>
        <P.ContentList>
          <P.Title>이메일</P.Title>
          <P.Content>naedam@gmail.com</P.Content>
        </P.ContentList>
        <P.ContentList>
          <P.Title>가입일</P.Title>
          <P.Content>2023.07.01</P.Content>
        </P.ContentList>
      </P.ContentWrapper>
    </P.Wrapper>
  );
}
