import React from "react";
import { Link } from "react-router-dom";
import * as R from "../../styles/pages/Reservation.style";
import { useRecoilState } from "recoil";
import { reservationState } from "../../recoil/atom";
import Step1 from "../../images/step1.png";
import Step2 from "../../images/step2.png";
import ReservationList from "../../components/ReservationList";
// import Step3 from "../../images/step1.png";

export default function Reservation() {
  const [isReservation] = useRecoilState(reservationState);
  return (
    <R.Wrapper>
      {!isReservation ? (
        <>
          <R.Title>
            상담을 예약하고 싶으신가요?
            <br />
            초기 설문지를 작성해 주세요
          </R.Title>
          <R.Txt>김내담 님과 가장 적합한 상담자님이 매칭됩니다.</R.Txt>
          <R.Step img={Step1} />
          <Link to="/initialSurvey/client">
            <R.WriteBtn>초기 설문지 작성하기</R.WriteBtn>
          </Link>
        </>
      ) : (
        <>
          <R.Title>초기 설문지 작성을 완료했습니다</R.Title>
          <R.Txt>김내담 님과 가장 적합한 상담자님을 찾는 중입니다.</R.Txt>
          <R.Step img={Step2} />
          <ReservationList />
        </>
      )}
    </R.Wrapper>
  );
}
