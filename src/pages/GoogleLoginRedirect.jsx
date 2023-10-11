import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function GoogleLoginRedirect() {
  const { token } = useParams();

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("token", token);
    console.log(token);
    window.location.replace("/");
  }, []);

  return <></>;
}

export default GoogleLoginRedirect;
