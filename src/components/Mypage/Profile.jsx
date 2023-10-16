import React from "react";
import { Link } from "react-router-dom";
import * as P from "../../styles/components/mypage/Profile..style";
import { useRecoilState } from "recoil";
import { roleState } from "../../recoil/atom";
import { DateFormat } from "./../../utils/DateFormat";
import { getUserInfo } from "../../api/api";
import { useQuery } from "react-query";

export default function Profile() {
  const [role] = useRecoilState(roleState);
  console.log(role);

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery("userInfo", getUserInfo);

  if (isLoading) {
    return <p>Loading user data...</p>;
  } else if (isError) {
    return <p>Error fetching user data</p>;
  }

  // userData를 사용하여 데이터 표시
  console.log(userData);

  return (
    <P.Wrapper>
      <P.ProfileWrapper>
        <P.ProfileTitle>프로필</P.ProfileTitle>
        {role == "CLIENT" ? (
          <P.Role className="client">내담자</P.Role>
        ) : (
          <P.Role>상담자</P.Role>
        )}
      </P.ProfileWrapper>
      <P.ContentWrapper>
        <P.ContentList>
          <P.Title>이름</P.Title>
          <P.Content>{userData.name}</P.Content>
        </P.ContentList>
        <P.ContentList>
          <P.Title>이메일</P.Title>
          <P.Content>{userData.email}</P.Content>
        </P.ContentList>
        <P.ContentList>
          <P.Title>가입일</P.Title>
          <P.Content>{DateFormat(userData.createdDate)}</P.Content>
        </P.ContentList>
        {role == "CLIENT" && (
          <P.ContentList>
            <P.Title>초기설문지</P.Title>
            {userData.survey_id == 0 ? (
              <P.Btn className="none">초기설문지</P.Btn>
            ) : (
              <Link to={`/initialSurvey/${userData.survey_id}`}>
                <P.Btn>초기설문지</P.Btn>
              </Link>
            )}
          </P.ContentList>
        )}
      </P.ContentWrapper>
    </P.Wrapper>
  );
}
