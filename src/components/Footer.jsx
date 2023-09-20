import React from "react";
import * as F from "../styles/components/Footer.styles";
import { Link } from "react-router-dom";
// import { LiaUserCircle } from "react-icons/lia";

export default function Footer() {
  return (
    <>
      <F.Wrapper>
        <F.Inner>
          <Link to="#">
            <F.FooterLogo>mAInd</F.FooterLogo>
          </Link>
          <F.Contact>
            © 2023. 천원은행복(이은수, 장지원, 천윤서). All rights reserved
          </F.Contact>
        </F.Inner>
      </F.Wrapper>
    </>
  );
}
