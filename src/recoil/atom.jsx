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

export const nameValue = atom({
  key: "name",
  default: "",
});

export const roleState = atom({
  key: "isClient",
  default: "",
});

export const surveyState = atom({
  key: "isSubmitSurvey",
  default: "",
});

export const matchingState = atom({
  key: "isMatching",
  default: "",
});

export const editSurveyState = atom({
  key: "isEdit",
  default: false,
});

export const resultData = atom({
  key: "uploadResult",
  default: null,
});

export const detailId = atom({
  key: "detailSurveyId",
  default: "",
});
