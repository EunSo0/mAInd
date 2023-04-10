import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Header from "../components/Header";

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

const Birth = styled.div`
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

const Input2 = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  width: 7rem;
  height: 1.5rem;
  max-width: 100%;
  margin: -1px auto;
  display: block;
`;

const Select = styled.select`
  position: relative;
  width: 7rem;
  height: 40px;
  border: 1px solid #dfdfdf;
  margin: 0 10px 0 7px;
`;

const Label = styled.h1`
  font-weight: 800;
  display: flex;
  font-size: 15px;
  margin: 10px;
`;
const Condition = styled.h1`
  font-weight: 800;
  display: flex;
  font-size: 12px;
  margin: 10px;
  color: rgb(130, 130, 130);
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

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  // const router = useRouter();

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식으로 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const onChangePhone = useCallback((e) => {
    const phoneRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const phoneCurrent = e.target.value;
    setPhone(phoneCurrent);

    if (!phoneRegex.test(phoneCurrent)) {
      setPhoneMessage("숫자만 입력해주세요.");
      setIsPhone(false);
    } else {
      setPhoneMessage("");
      setIsPhone(true);
    }
  }, []);

  return (
    <>
      <All>
        <Header />
        <Base>
          <Title>회원가입</Title>
          <form>
            <Group>
              <Label>아이디</Label>
              <Input placeholder="아이디를 입력해주세요." type="text" id="id" />
            </Group>
            <Group>
              <Label>비밀번호</Label>
              <Input
                placeholder="비밀번호를 입력해주세요."
                type="password"
                id="password"
                onChange={onChangePassword}
              />
              {password.length > 0 && <Condition>{passwordMessage}</Condition>}
            </Group>
            <Group>
              <Label>비밀번호 확인</Label>
              <Input
                placeholder="비밀번호를 한번 더 입력해주세요."
                type="password"
                id="confirmPassword"
                onChange={onChangePasswordConfirm}
              />
              {passwordConfirm.length > 0 && (
                <Condition>{passwordConfirmMessage}</Condition>
              )}
            </Group>
            <Group>
              <Label>이름</Label>
              <Input placeholder="이름을 입력해주세요." type="text" id="name" />
            </Group>
            <GroupWrap>
              <Group>
                <Label>생년월일</Label>
                <Birth>
                  <Input2 placeholder="년(4자)" type="number" />
                  <Select>
                    <option>월</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </Select>
                  <Input2 placeholder="일" type="text" />
                </Birth>
              </Group>
            </GroupWrap>
            <Group>
              <Label>이메일</Label>
              <Input
                placeholder="이메일을 입력해주세요"
                type="text"
                id="email"
                onChange={onChangeEmail}
              />
              {email.length > 0 && <Condition>{emailMessage}</Condition>}
            </Group>
            <Group>
              <Label>휴대전화</Label>
              <Input
                placeholder="전화번호를 입력해주세요."
                type="text"
                id="number"
                onChange={onChangePhone}
              />
              {phone.length > 0 && <Condition>{phoneMessage}</Condition>}
            </Group>
            <Button
              disabled={
                !(isEmail && isPassword && isPasswordConfirm && isPhone)
              }
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
