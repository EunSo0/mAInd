import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const All = styled.div`
  width: 100%;
  height: 100%;
`;

const Base = styled.div`
  height: 800px;
  margin: -50px auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin: 15px 0;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  width: 15rem;
  height: 1.5rem;
  max-width: 100%;
  margin: 5px auto;
  display: block;
`;
const Button = styled.button`
  font: inherit;
  background-color: #85b3cd;
  color: #ffffff;
  border: 1px solid #85b3cd;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  margin: 15px auto;
  display: block;
  width: 16.3rem;
  height: 2.5rem;
`;

const Text = styled.a`
  font-weight: 800;
  display: flex;
  font-size: 14px;
  text-align: center;
  color: rgb(100, 100, 100);
  margin: 3px;
`;

const Link = styled.a`
  text-decoration: none;
`;

export default function Login() {
  return (
    <>
      <All>
        <Header />
        <Base>
          <Title>로그인</Title>
          <Input placeholder="이메일" type="text" id="email" />
          <Input placeholder="비밀번호" type="password" id="password" />
          <Button>로그인</Button>
          <Link href="/signup">
            <Text>회원가입</Text>
          </Link>
          <Link href="/">
            <Text>비밀번호찾기</Text>
          </Link>
        </Base>
      </All>
    </>
  );
}
