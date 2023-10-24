/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import * as DL from "../../styles/components/mypage/DetailList.style";
import * as T from "../../styles/components/mypage/Table.style";
import { detailId } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { getClientDetail, getClientCounselingList } from "../../api/api";
import { useQuery } from "react-query";
import { DateFormat } from "../../utils/DateFormat";
import { AiOutlineDoubleLeft } from "react-icons/ai";

export default function DetailList({ setIsDetail }) {
  const [surveyId] = useRecoilState(detailId);
  console.log(surveyId);

  const { data: detailProfile } = useQuery(
    "detaiProfile",
    () => getClientDetail(surveyId),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const { data: detailList } = useQuery(
    "detailList",
    () => getClientCounselingList(surveyId),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  console.log(detailList);

  const onClickBack = () => {
    setIsDetail(false);
  };

  return (
    <DL.Wrapper>
      {detailProfile ? (
        <>
          <DL.ListWrapper>
            <AiOutlineDoubleLeft className="back" onClick={onClickBack} />
            <DL.Title>
              내담자 목록 {">"} {detailProfile.name}
            </DL.Title>
          </DL.ListWrapper>
          <DL.ContentWrapper>
            <DL.ContentList>
              <DL.ContentTitle>이름</DL.ContentTitle>
              <DL.ContentTxt>{detailProfile.name}</DL.ContentTxt>
            </DL.ContentList>
            <DL.ContentList>
              <DL.ContentTitle>생년월일</DL.ContentTitle>
              <DL.ContentTxt>{DateFormat(detailProfile.birth)}</DL.ContentTxt>
            </DL.ContentList>
            <DL.ContentList>
              <DL.ContentTitle>이메일</DL.ContentTitle>
              <DL.ContentTxt>{detailProfile.email}</DL.ContentTxt>
            </DL.ContentList>
            <DL.ContentList>
              <DL.ContentTitle>증상</DL.ContentTitle>
              <DL.ContentTxt>{detailProfile.symptoms.join(", ")}</DL.ContentTxt>
            </DL.ContentList>
            <DL.ContentList>
              <DL.ContentTitle>초기설문지</DL.ContentTitle>
              <DL.ContentTxt>
                <DL.SurveyBtn>초기설문지</DL.SurveyBtn>
              </DL.ContentTxt>
            </DL.ContentList>
          </DL.ContentWrapper>
        </>
      ) : (
        <p>Loading...</p>
      )}

      {detailList !== null && (
        <T.ChartWrapper>
          <T.Chart>
            <thead>
              <T.ChartTr>
                <T.ChartTh>상담회차</T.ChartTh>
                <T.ChartTh>내담자명</T.ChartTh>
                <T.ChartTh>상담일자</T.ChartTh>
                <T.ChartTh>증상</T.ChartTh>
                <T.ChartTh>상담일지</T.ChartTh>
              </T.ChartTr>
            </thead>
            <tbody>
              {detailList &&
                detailList.map((el) => (
                  <T.ChartTr key={el.num}>
                    <T.ChartTd>{el.countNum}</T.ChartTd>
                    <T.ChartTd>{el.name}</T.ChartTd>
                    <T.ChartTd>{DateFormat(el.date)}</T.ChartTd>
                    <T.ChartTd>{el.symptoms.join(", ")}</T.ChartTd>
                    <T.ChartTd>
                      <Link to={`/result/${el.counseling_id}`}>
                        <T.ResultBtn>상담일지</T.ResultBtn>
                      </Link>
                    </T.ChartTd>
                  </T.ChartTr>
                ))}
            </tbody>
          </T.Chart>
        </T.ChartWrapper>
      )}
    </DL.Wrapper>
  );
}
