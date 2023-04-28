import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { setLocalStorage } from "../utility/storage";
import { passwordValidation } from "../utility/validation";
import { useForm } from "react-hook-form";
// import loginStateAtom from "../recoil/atom";
import { useNavigate } from "react-router-dom";
// import { useSetRecoilState } from "recoil";
import { loginFetcher } from "../api/api";

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
  const { register, handleSubmit } = useForm();
  // const setLoginState = useSetRecoilState(loginStateAtom);

  const navigation = useNavigate();

  const [isPasswordValidation, setIsPasswordValidation] = useState(false);

  const inputChangeHandler = ({ e, validate, validationFunc }) => {
    const { value } = e.target;
    validate(validationFunc(value));
  };

  const loginSubmitHandler = async (data) => {
    const loginInfo = await loginFetcher({
      id: data["id"],
      password: data["password"],
    });
    if (loginInfo.code === 200) {
      const { accessToken } = loginInfo.data;
      const token = accessToken.split(" ")[1];
      // setLoginState(true);
      setLocalStorage("token", token);
      navigation("/");
    } else {
      alert(loginInfo.message);
    }
  };
  return (
    <>
      <All>
        <Header />
        <Base onSubmit={handleSubmit(loginSubmitHandler)}>
          <Title>로그인</Title>
          <Input
            type={"id"}
            {...register("id")}
            placeholder="이메일"
            required={true}
          />
          <Input
            type={"password"}
            {...register("password")}
            placeholder="비밀번호"
            required={true}
            onChange={(e) =>
              inputChangeHandler({
                e,
                validate: setIsPasswordValidation,
                validationFunc: passwordValidation,
              })
            }
          />
          <Button type="submit" disabled={!isPasswordValidation}>
            로그인
          </Button>
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
