import axios from "axios";
import { DateFormatTime } from "./../utils/DateFormat";

const token = localStorage.getItem("token");
const BASE_URL = "https://maind.site";

export const getUserInfo = async () => {
  try {
    const response = await axios.get("/mypage/userInfo", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserStatus = async () => {
  try {
    const response = await axios.get("/mypage/status", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReservationList = async () => {
  try {
    const response = await axios.get("/counseling/apply/list", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getInitialSurvey = async (survey_id) => {
  try {
    const response = await axios.get(`/mypage/surveys/${survey_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const submitInitialSurvey = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/mypage/surveys`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editInitialSurvey = async (data) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/mypage/surveys/${data.survey_id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteInitialSurvey = async (survey_id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/mypage/surveys/${survey_id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editInitialSurveyStatus = async (data) => {
  try {
    let newStatus;
    if (data.status === "ACCEPT") {
      newStatus = "ACCEPT";
    } else if (data.status === "REJECT") {
      newStatus = "REJECT";
    } else if (data.status === "HOLD") {
      newStatus = "HOLD";
    }

    console.log(Date());

    const response = await axios.put(
      `${BASE_URL}/counseling/apply/${data.surveyId}/status`,
      { applyStatus: newStatus, statusDate: DateFormatTime(Date()) },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCounselList = async () => {
  try {
    const response = await axios.get("/counseling/list", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const submitVideo = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/counseling/upload`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
