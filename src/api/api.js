import axios from "axios";
import { DateFormatTime } from "./../utils/DateFormat";

const token = localStorage.getItem("token");
const BASE_URL = "https://maind.shop";
const BASE_URL_VIDEO = "http://maind-meeting.shop:5001";

//초기 설문지
export const getInitialSurvey = async (survey_id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mypage/surveys/${survey_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
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

export const getUserStatus = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mypage/status`, {
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

// 상담하기 페이지
export const getCounselList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/client/list`, {
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

export const submitVideoData = async (data) => {
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

export const submitVideo = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL_VIDEO}/file_upload`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const counselingVideoResult = async (uploadResult) => {
  try {
    console.log(uploadResult);
    const response = await axios.post(
      `${BASE_URL}/counseling/${uploadResult.survey_id}/${uploadResult.countNum}`,
      uploadResult,
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

//상담예약 페이지
export const getReservationList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/counseling/apply/list`, {
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

// 마이페이지
export const getUserInfo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mypage/userInfo`, {
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

export const getClientDetail = async (data) => {
  try {
    const response = await axios.get(`${BASE_URL}/mypage/clientInfo/${data}`, {
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

export const getClientCounselingList = async (data) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mypage/${data}/counseling/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getClientCounselingResult = async (data) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mypage/counseling/result/${data}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const counselingResultEdit = async (data) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/mypage/counseling/result/${data.counseling_id}/opinion`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const counselingResultStatus = async (data) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/mypage/counseling/result/${data.counseling_id}/status`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCounselingList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mypage/counseling/list`, {
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
