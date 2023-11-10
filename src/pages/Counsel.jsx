import React from "react";
import * as C from "../styles/pages/Counsel.style";
import * as T from "../styles/components/mypage/Table.style";
import { useRecoilState } from "recoil";
import { roleState } from "../recoil/atom";
import { Link } from "react-router-dom";
import { getCounselList } from "../api/api";
import { useQuery } from "react-query";
import { DateFormat } from "./../utils/DateFormat";

export default function Counsel() {
  const [role] = useRecoilState(roleState);

  const { data, isLoading, isError } = useQuery("counselList", getCounselList);

  if (isLoading) {
    return <p>Loading user data...</p>;
  } else if (isError) {
    return <p>Error fetching user data</p>;
  }

  console.log(data.upload);

  return (
    <C.Wrapper>
      {role !== "CLIENT" ? (
        <>
          <C.Title>상담 영상 업로드</C.Title>
          <C.Txt>
            상담영상을 업로드하면 텍스트 추출과 감정 분석이 자동으로 진행됩니다.
            <br />
            mAInd와 함께 간편하게 상담일지를 작성해 보세요.
          </C.Txt>
          {data.length !== 0 ? (
            <>
              <T.ChartWrapper>
                <T.Chart>
                  <thead>
                    <T.ChartTr>
                      <T.ChartTh>번호</T.ChartTh>
                      <T.ChartTh>이름</T.ChartTh>
                      <T.ChartTh>생년월일</T.ChartTh>
                      <T.ChartTh>증상</T.ChartTh>
                      <T.ChartTh>상담영상 업로드</T.ChartTh>
                    </T.ChartTr>
                  </thead>
                  <tbody>
                    {data ? (
                      data.length > 0 ? (
                        data.map((el, index) => (
                          <T.ChartTr key={index}>
                            <T.ChartTd>{index + 1}</T.ChartTd>
                            <T.ChartTd>{el.name}</T.ChartTd>
                            <T.ChartTd>{DateFormat(el.birth)}</T.ChartTd>
                            <T.ChartTd key={index}>
                              {el.symptoms ? el.symptoms.join(", ") : ""}
                            </T.ChartTd>
                            <T.ChartTd>
                              {!el.upload ? (
                                <Link to={`/counsel/upload/${el.survey_id}`}>
                                  <T.ResultBtn className="upload">
                                    영상업로드하기
                                  </T.ResultBtn>
                                </Link>
                              ) : (
                                "업로드완료"
                              )}
                            </T.ChartTd>
                          </T.ChartTr>
                        ))
                      ) : (
                        <p>상담 목록이 없습니다.</p>
                      )
                    ) : (
                      <p>Loading user data...</p>
                    )}
                  </tbody>
                </T.Chart>
              </T.ChartWrapper>
            </>
          ) : (
            <div></div>
          )}
        </>
      ) : (
        <>
          <C.Title>준비 중인 서비스입니다</C.Title>
          <C.Image></C.Image>
        </>
      )}
    </C.Wrapper>
  );
}
