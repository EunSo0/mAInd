/* eslint-disable react/prop-types */
import React from "react";
import * as L from "../styles/components/LogoutModal.style";
import { useNavigate } from "react-router-dom";

export default function LogoutModal({
  isLogoutModalOpen,
  setIsLogoutModalOpen,
  isLogin,
  setIsLogin,
}) {
  const navigate = useNavigate();
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

  return (
    <>
      <L.ModalWrapper>
        <L.Profile></L.Profile>
        <L.Name>김내담</L.Name>
        <L.LogoutBtn onClick={onClickLogout}>로그아웃</L.LogoutBtn>
      </L.ModalWrapper>
    </>
  );
}
