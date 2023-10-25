import React from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../../styles/pages/Reservation.style";
import { useRecoilState } from "recoil";
import { nameValue } from "../../recoil/atom";
import Step1 from "../../images/step1.png";
import Step2 from "../../images/step2.png";
import Step3 from "../../images/step1.png";
import ReservationList from "../../components/ReservationList";
import { getUserStatus } from "../../api/api";
import { useQuery } from "react-query";

export default function Reservation() {
  let navigate = useNavigate();
  const [name] = useRecoilState(nameValue);

  function clickWrite() {
    navigate("/initialSurvey/client");
  }

  const { data, isLoading, isError } = useQuery("userInfo", getUserStatus);

  if (isLoading) {
    return <p>Loading user data...</p>;
  } else if (isError) {
    return <p>Error fetching user data</p>;
  }

  return (
    <R.Wrapper>
      {data.userStatus !== "BEFORE_SURVEY" ? (
        <>
          <R.Title>
            상담을 예약하고 싶으신가요?
            <br />
            초기 설문지를 작성해 주세요
          </R.Title>
          <R.Txt>{name}님과 가장 적합한 상담자님이 매칭됩니다.</R.Txt>
          <R.Step img={Step1} />
          <R.WriteBtn onClick={clickWrite}>초기 설문지 작성하기</R.WriteBtn>
        </>
      ) : data.userStatus == "ON_MATCHING" ? (
        <>
          <R.Title>초기 설문지 작성을 완료했습니다</R.Title>
          <R.Txt>{name}님과 가장 적합한 상담자님을 찾는 중입니다.</R.Txt>
          <R.Step img={Step2} />
          <ReservationList />
        </>
      ) : (
        <>
          <R.Title>매칭이 완료되었습니다.</R.Title>
          <R.Txt>
            매칭 후 3일 이내로 상담자의 연락이 갑니다. <br /> 기타 사항은
            고객센터를 통해 문의 바랍니다.
          </R.Txt>
          <R.Step img={Step3} />
          <ReservationList />
        </>
      )}
    </R.Wrapper>
  );
}
