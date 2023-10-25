/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import styled from "styled-components";
import OpenViduVideoComponent from "./OvVideo";
import "./UserVideo.css";
import { useRecoilState } from "recoil";
import { nameValue } from "../../recoil/atom";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const UserVideoComponent = (props) => {
  const [name] = useRecoilState(nameValue);

  useEffect(() => {
    // You can update the Recoil state in this function if needed
    // For example, setName("New Name");
  }, []); // Make sure to include any dependencies if needed

  return (
    <Container>
      {props.streamManager !== undefined ? (
        <div className="streamcomponent">
          <OpenViduVideoComponent streamManager={props.streamManager} />
          <div>
            <p>{name}</p>
          </div>
        </div>
      ) : null}
    </Container>
  );
};

export default UserVideoComponent;
