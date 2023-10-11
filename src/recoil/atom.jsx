import { atom } from "recoil";

export const loginState = atom({
  key: "isLogin",
  default: false,
});

export const loginModalState = atom({
  key: "isLoginModalOpen",
  default: false,
});

export const logoutModalState = atom({
  key: "isLogoutModalOpen",
  default: false,
});

export const detailState = atom({
  key: "isDetail",
  default: false,
});

export const reservationState = atom({
  key: "isReservation",
  default: false,
});

export const matchingState = atom({
  key: "isMatching",
  default: false,
});
