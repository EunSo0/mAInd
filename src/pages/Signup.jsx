import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import {
  emailValidation,
  passwordValidation,
  phoneValidation,
  birthValidation,
} from "../utility/validation";
import { signUpFetcher } from "../api/api";
import { useNavigate } from "react-router-dom";

const All = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

const Base = styled.div`
  height: 1050px;
  margin: 0px auto;
  max-width: 400px;
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

const Group = styled.div`
  height: 90px;
`;

const GroupWrap = styled.div`
  display: flex;
  height: 100px;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  width: 23rem;
  height: 1.5rem;
  max-width: 100%;
  margin: -1px auto;
  display: block;
`;

const Label = styled.h1`
  font-weight: 800;
  display: flex;
  font-size: 15px;
  margin: 10px;
`;

const Text = styled.h1`
  font-size: 15px;
  text-align: center;
  color: rgb(150, 150, 150);
  display: flex;
`;

const TextEmpha = styled.h1`
  font-size: 15px;
  text-align: center;
  margin: 0px;
  display: flex;
`;

const Button = styled.button`
  font: inherit;
  font-weight: 800;
  background-color: #85b3cd;
  color: #ffffff;
  border: 1px solid #85b3cd;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 15px auto;
  display: block;
  width: 24rem;
  height: 3rem;
`;

const Link = styled.a`
  text-decoration: none;
`;

const WarningSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #f36868;
`;

function Signup() {
  const { register, handleSubmit } = useForm();

  const navigation = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isPasswordValidate, setIsPasswordValidate] = useState(false);
  const [isRePasswordValidate, setIsRePasswordValidate] = useState(false);
  const [isPhoneValidate, setIsPhoneValidate] = useState(false);
  const [isBirthValidate, setIsBirthValidate] = useState(false);

  const signUpSubmitHandler = (data) => {
    // 여기서 submit 처리
    const { id, password, name, birth, email, phone } = data;

    signUpFetcher({ id, password, name, birth, email, phone })
      .then((data) => {
        if (data.code !== 200) {
          alert(data.message);
        } else {
          alert(data.response);
          navigation("/login");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <All>
        <Header />
        <Base onSubmit={handleSubmit(signUpSubmitHandler)}>
          <Title>회원가입</Title>
          <form>
            <Group>
              <Label>아이디</Label>
              <Input
                placeholder="아이디를 입력해주세요."
                type="id"
                {...register("id", {
                  onChange: (e) => {
                    const { value } = e.target;
                    setId(value);
                  },
                  value: id,
                  required: true,
                })}
              />
            </Group>
            <Group>
              <Label>비밀번호</Label>
              <Input
                placeholder="비밀번호를 입력해주세요"
                type="password"
                {...register("password", {
                  onChange: (e) => {
                    const { value } = e.target;
                    setPassword(value);
                    setIsPasswordValidate(passwordValidation(value));
                  },
                  value: password,
                  required: true,
                })}
              />
              {isPasswordValidate || password.length === 0 ? null : (
                <WarningSpan>
                  비밀번호는 특수문자,알파벳,숫자를 포함한 8~20자의 문자입니다.
                </WarningSpan>
              )}
            </Group>
            <Group>
              <Label>비밀번호 확인</Label>
              <Input
                placeholder="다시한번 비밀번호를 입력해주세요"
                type="password"
                {...register("rePassword", {
                  onChange: (e) => {
                    const { value } = e.target;
                    setRePassword(value);
                    setIsRePasswordValidate(password === e.target.value);
                  },
                  value: rePassword,
                  required: true,
                })}
              />
              {isRePasswordValidate || rePassword.length === 0 ? null : (
                <WarningSpan>비밀번호와 같지 않습니다.</WarningSpan>
              )}
            </Group>
            <Group>
              <Label>이름</Label>
              <Input
                placeholder="이름을 입력해주세요."
                type="name"
                {...register("name", {
                  onChange: (e) => {
                    const { value } = e.target;
                    setName(value);
                  },
                  required: true,
                  value: name,
                })}
              />
            </Group>
            <GroupWrap>
              <Group>
                <Label>생년월일</Label>
                <Input
                  placeholder="생년월일(8자)"
                  type="birth"
                  {...register("birth", {
                    onChange: (e) => {
                      const { value } = e.target;
                      setBirth(value);
                      setIsBirthValidate(birthValidation(value));
                    },
                    value: birth,
                    required: true,
                  })}
                />
                {isBirthValidate || birth.length === 0 ? null : (
                  <WarningSpan>
                    생년월일은 8자로 입력하세요. ex)20230101
                  </WarningSpan>
                )}
              </Group>
            </GroupWrap>
            <Group>
              <Label>이메일</Label>
              <Input
                placeholder="이메일을 입력해주세요"
                type="email"
                {...register("email", {
                  onChange: (e) => {
                    const { value } = e.target;
                    setEmail(value);
                    setIsEmailValidate(emailValidation(value));
                  },
                  value: email,
                  required: true,
                })}
              />
              {isEmailValidate || email.length === 0 ? null : (
                <WarningSpan>올바른 이메일 형식을 입력하세요.</WarningSpan>
              )}
            </Group>
            <Group>
              <Label>휴대전화</Label>
              <Input
                placeholder="전화번호을 입력해주세요"
                type="phone"
                {...register("phone", {
                  onChange: (e) => {
                    const { value } = e.target;
                    setPhone(value);
                    setIsPhoneValidate(phoneValidation(value));
                  },
                  value: phone,
                  required: true,
                })}
              />
              {isPhoneValidate || phone.length === 0 ? null : (
                <WarningSpan>올바른 핸드폰번호를 입력하세요.</WarningSpan>
              )}
            </Group>
            <Button
              type="submit"
              disabled={!isPasswordValidate || !isRePasswordValidate}
            >
              회원가입하기
            </Button>
          </form>
          <Text>이미 가입하셨나요?</Text>
          <Link href="/login">
            <TextEmpha>로그인</TextEmpha>
            <br />
          </Link>
        </Base>
      </All>
    </>
  );
}

export default Signup;
