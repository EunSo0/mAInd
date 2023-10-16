/* eslint-disable react/prop-types */
import React from "react";
import * as L from "../styles/components/LogoutModal.style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { nameValue } from "../recoil/atom";
import jwt_decode from "jwt-decode";

export default function LogoutModal({
  isLogoutModalOpen,
  setIsLogoutModalOpen,
  isLogin,
  setIsLogin,
}) {
  const navigate = useNavigate();
  const [name] = useRecoilState(nameValue);
  const onClickLogout = () => {
    setIsLogin(!isLogin);
    setIsLogoutModalOpen(!isLogoutModalOpen);
    try {
      localStorage.clear();
      navigate("/");
      console.log("token: " + localStorage.getItem("token"));
    } catch (e) {
      console.log(e);
    }
  };
  const picture = jwt_decode(localStorage.getItem("token")).picture;

  return (
    <L.ModalWrapper>
      <L.Profile src={picture}></L.Profile>
      <L.Name>{name}</L.Name>
      <L.LogoutBtn onClick={onClickLogout}>로그아웃</L.LogoutBtn>
    </L.ModalWrapper>
  );
}
