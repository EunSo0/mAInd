import React, { useEffect } from "react";
import { GOOGLE_AUTH_URL } from "../../constants";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import * as M from "../../styles/components/LoginModal.style";

export default function GoogleLogin(authenticated) {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state && location.state.error) {
      setTimeout(() => {
        alert.error(location.state.error, {
          timeout: 5000,
        });
        history.replace({
          pathname: location.pathname,
          state: {},
        });
      }, 100);
    }
  }, [location.state, history]);

  if (authenticated) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: location },
        }}
      />
    );
  }

  return (
    <M.Btn href={GOOGLE_AUTH_URL}>
      <M.GoogleLogo></M.GoogleLogo>
      <M.SignTxt>Google로 시작하기</M.SignTxt>
    </M.Btn>
  );
}
