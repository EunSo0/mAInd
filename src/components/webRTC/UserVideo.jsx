/* eslint-disable react/prop-types */
import React, { Component } from "react";
import OvVideo from "@/components/WebRtc/OvVideo";
import styled from "styled-components";

// styled-components를 사용하여 CSS 스타일을 정의합니다.
const UserVideoContainer = styled.div`
  video {
    width: 100%;
    height: 100%;
    max-height: none !important;
  }

  .inactive-user,
  .active-user {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.blackColor};
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    justify-items: stretch;
    margin: 0 auto;
  }

  .inactive-user-img {
    padding: 20px 0;
  }

  .inactive-user-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  .inactive-icon {
    display: inline-block;
    color: ${(props) => props.theme.lightColor};
  }

  .user-name {
    display: inline-block;
    position: relative;
    bottom: 30px;
    background: rgba(255, 255, 255, 0.5);
    width: 100px;
    height: 30px;
    border-radius: 15px 15px 0 0;

    span {
      line-height: 2em;
    }
  }
`;

class UserVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusChk: false,
    };
  }

  getConnectionData() {
    const { connection } = this.props.streamManager.stream;
    return JSON.parse(connection.data);
  }

  focusCam() {
    this.setState({ focusChk: !this.state.focusChk });
  }

  render() {
    const streamManager = this.props.streamManager;
    const clientData = this.getConnectionData();
    const username = clientData.username;
    const userimg = clientData.userimg;

    return (
      <UserVideoContainer>
        <div
          className={`user-video ${streamManager ? "focus-cam" : ""}`}
          onClick={this.focusCam}
        >
          <div
            className={
              streamManager.stream.videoActive ? "active-user" : "inactive-user"
            }
          >
            {streamManager.stream.videoActive ? (
              <OvVideo streamManager={streamManager} />
            ) : (
              <div className="inactive-user-img">
                <img src={userimg || "@/assets/default_user.png"} alt="user" />
              </div>
            )}
            <div className="inactive-user-info">
              {!streamManager.stream.videoActive && (
                <p className="inactive-icon">
                  <i className="fas fa-video-slash"></i>
                </p>
              )}
              {!streamManager.stream.audioActive && (
                <p className="inactive-icon">
                  <i className="fas fa-microphone-slash"></i>
                </p>
              )}
            </div>
          </div>
          <div className="user-name">
            <span>{username}</span>
          </div>
        </div>
      </UserVideoContainer>
    );
  }
}

export default UserVideo;
