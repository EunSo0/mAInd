/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { OpenVidu } from "openvidu-browser";
import axios from "axios";
import * as O from "./OnlineMeeting.style.js";
import UserVideoComponent from "./UserVideoComponent";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import HeadsetIcon from "@mui/icons-material/Headset";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import MicOffIcon from "@mui/icons-material/MicOff";
import HeadsetOffIcon from "@mui/icons-material/HeadsetOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import ChatIcon from "@mui/icons-material/Chat";

const OPENVIDU_SERVER_URL = "https://maind.shop:4443";
const OPENVIDU_SERVER_SECRET = "maind0000";
const token = localStorage.getItem("token");

class OnlineMeeting extends Component {
  render() {
    return (
      <O.Container>
        <O.Header>
          <O.StudyTitle>mAInd</O.StudyTitle>
        </O.Header>
        <O.Middle>
          {this.state.session === undefined ? (
            <O.JoinWrapper>
              <O.TxtWrapper>
                <O.TxtList>
                  - 상담에 집중할 수 있는 장소에서 상담을 진행해주세요.
                </O.TxtList>
                <O.TxtList>
                  - 상담 결과는 상담분석 후 상담자의 의견을 추가해
                  전달해드립니다.
                </O.TxtList>
                <O.Txt>
                  본 상담은 녹화되어 결과분석에 이용됩니다. 녹화 영상은 분석에만
                  이용되며 30일간 보관 후 폐기됩니다.
                </O.Txt>
              </O.TxtWrapper>
              <O.ButtonForm onSubmit={this.joinSession}>
                <O.Button name="commit" type="submit" value="상담 시작하기" />
              </O.ButtonForm>
            </O.JoinWrapper>
          ) : null}
          <O.Left>
            <O.VideoContainer>
              {this.state.session !== undefined ? (
                <O.StreamContainerWrapper
                  primary={this.state.isChat}
                  ref={this.userRef}
                >
                  {this.state.publisher !== undefined ? (
                    <O.StreamContainer
                      key={this.state.publisher.stream.streamId}
                    >
                      <UserVideoComponent
                        streamManager={this.state.publisher}
                      />
                    </O.StreamContainer>
                  ) : null}
                  {this.state.subscribers.map((sub) => (
                    <O.StreamContainer key={sub.stream.streamId}>
                      <UserVideoComponent streamManager={sub} />
                    </O.StreamContainer>
                  ))}
                </O.StreamContainerWrapper>
              ) : null}
            </O.VideoContainer>
          </O.Left>
        </O.Middle>
        {this.state.session !== undefined ? (
          <O.Bottom>
            <O.BottomBox>
              <O.Icon
                primary={!this.state.isCamera}
                onClick={() => this.handleToggle("camera")}
              >
                {this.state.isCamera ? (
                  <VideocamOutlinedIcon />
                ) : (
                  <VideocamOffOutlinedIcon />
                )}
              </O.Icon>

              <O.Icon
                primary={!this.state.isMike}
                onClick={() => this.handleToggle("mike")}
              >
                {this.state.isMike ? <MicOutlinedIcon /> : <MicOffIcon />}
              </O.Icon>

              <O.Icon
                primary={!this.state.isSpeaker}
                onClick={() => this.handleToggle("speaker")}
              >
                {this.state.isSpeaker ? <HeadsetIcon /> : <HeadsetOffIcon />}
              </O.Icon>

              <O.Icon primary onClick={this.leaveSession}>
                <CallEndIcon />
              </O.Icon>
            </O.BottomBox>
            <O.ChatIconBox
              onClick={() => this.setState({ isChat: !this.state.isChat })}
            >
              <ChatIcon />
            </O.ChatIconBox>
          </O.Bottom>
        ) : null}
      </O.Container>
    );
  }

  constructor(props) {
    super(props);
    this.userRef = React.createRef();

    this.state = {
      sessionName: "SessionA",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined, // 로컬 웹캠 스트림
      subscribers: [], // 다른 사용자의 활성 스트림
      isMike: true,
      isCamera: true,
      isSpeaker: true,
      isChat: false,
    };

    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    // this.leaveSession();
    window.addEventListener("beforeunload", this.onbeforeunload);
    // 스터디방에서 화상회의 입장 -> props로 roomId로 받으면 세션id 업뎃 user 정보 전역변수 가져옴 -> 상태값 업뎃
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onbeforeunload);
  }

  onbeforeunload() {
    this.leaveSession();
  }

  // 화상회의 나갈때
  leaveSession() {
    // --- 7) Leave the session by calling 'disconnect' method over the Session object ---

    const mySession = this.state.session;
    const myPublisher = this.state.publisher;

    if (mySession) {
      mySession.disconnect();
    }

    if (myPublisher) {
      myPublisher.publishVideo(false); // 비디오 중지
      mySession.unpublish(myPublisher);
    }

    // Empty all properties...
    this.OV = null;
    this.setState({
      session: undefined,
      subscribers: [],
      mySessionId: undefined,
      myUserName: "Participant" + Math.floor(Math.random() * 100),
      mainStreamManager: undefined,
      publisher: undefined,
    });
  }

  deleteSubscriber(streamManager) {
    let subscribers = this.state.subscribers;
    let index = subscribers.indexOf(streamManager, 0);
    if (index > -1) {
      subscribers.splice(index, 1);
      this.setState({ subscribers: subscribers });
    }
  }

  handleMainVideoStream(stream) {
    if (this.state.mainStreamManager !== stream) {
      this.setState({ mainStreamManager: stream });
    }
  }

  handleToggle(kind) {
    if (this.state.publisher) {
      switch (kind) {
        case "camera":
          this.setState({ isCamera: !this.state.isCamera }, () => {
            console.log(this.state.publisher);
            this.state.publisher.publishVideo(this.state.isCamera);
          });
          break;

        case "speaker":
          this.setState({ isSpeaker: !this.state.isSpeaker }, () => {
            this.state.subscribers.forEach((s) =>
              s.subscribeToAudio(this.state.isSpeaker)
            );
          });
          break;

        case "mike":
          this.setState({ isMike: !this.state.isMike }, () => {
            this.state.publisher.publishAudio(this.state.isMike);
          });
          break;
      }
    }
  }

  joinSession() {
    this.OV = new OpenVidu(); // OpenVidu 객체를 얻음

    this.OV.setAdvancedConfiguration({
      publisherSpeakingEventsOptions: {
        interval: 50,
        threshold: -75,
      },
    });

    this.setState(
      {
        session: this.OV.initSession(),
      },
      () => {
        let mySession = this.state.session;

        // Session 객체가 각각 새로운 stream에 대해 구독 후, subscribers 상태값 업뎃
        mySession.on("streamCreated", (e) => {
          // OpenVidu -> Session -> 102번째 줄 확인 UserVideoComponent를 사용하기 때문에 2번째 인자로 HTML
          // 요소 삽입X
          let subscriber = mySession.subscribe(e.stream, undefined);
          var subscribers = this.state.subscribers;
          subscribers.push(subscriber);

          this.setState({ subscribers });

          console.log(subscribers);
        });

        // 사용자가 화상회의를 떠나면 Session 객체에서 소멸된 stream을 받아와 subscribers 상태값 업뎃
        mySession.on("streamDestroyed", (e) => {
          this.deleteSubscriber(e.stream.streamManager);
        });

        // 서버 측에서 비동기식 오류 발생 시 Session 객체에 의해 트리거되는 이벤트
        mySession.on("exception", (exception) => {
          console.warn(exception);
        });

        // 발언자 감지
        mySession.on("publisherStartSpeaking", (event) => {
          for (let i = 0; i < this.userRef.current.children.length; i++) {
            if (
              JSON.parse(event.connection.data).clientData ===
              this.userRef.current.children[i].innerText
            ) {
              this.userRef.current.children[i].style.borderStyle = "solid";
              this.userRef.current.children[i].style.borderColor = "#1773EA";
            }
          }
        });

        mySession.on("publisherStopSpeaking", (event) => {
          for (let i = 0; i < this.userRef.current.children.length; i++) {
            if (
              JSON.parse(event.connection.data).clientData ===
              this.userRef.current.children[i].innerText
            ) {
              this.userRef.current.children[i].style.borderStyle = "none";
            }
          }
        });

        this.getToken().then((token) => {
          mySession
            .connect(token, {
              clientData: this.state.myUserName,
            })
            .then(() => {
              let publisher = this.OV.initPublisher(undefined, {
                audioSource: undefined,
                videoSource: undefined, // 웹캠 기본 값으로
                publishAudio: true,
                publishVideo: true,
                resolution: "640x480",
                frameRate: 30,
                insertMode: "APPEND",
                mirror: "false",
              });

              mySession.publish(publisher);

              this.setState({ mainStreamManager: publisher, publisher });
            })
            .catch((error) => {
              console.log("세션 연결 오류", error.code, error.message);
            });
        });
      }
    );
  }

  async getToken() {
    const sessionId = await this.createSession(this.state.mySessionId);
    return await this.createToken(sessionId);
  }

  createSession(sessionId) {
    return new Promise((resolve, reject) => {
      let data = JSON.stringify({ customSessionId: sessionId });

      axios
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
          headers: {
            Authorization: `Basic ${btoa(
              `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`
            )}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          resolve(res.data.id);
        })
        .catch((res) => {
          let error = Object.assign({}, res);

          console.log(res);

          if (error?.response?.status === 409) {
            resolve(sessionId);
          } else if (
            window.confirm(
              'No connection to OpenVidu Server. This may be a certificate error at "' +
                OPENVIDU_SERVER_URL +
                '"\n\nClick OK to navigate and accept it. If no certifica' +
                "te warning is shown, then check that your OpenVidu Server is up and running at" +
                ' "' +
                OPENVIDU_SERVER_URL +
                '"'
            )
          ) {
            window.location.assign(OPENVIDU_SERVER_URL + "/accept-certificate");
          }
        });
    });
  }

  createToken(sessionId) {
    return new Promise((resolve, reject) => {
      let data = {};

      axios
        .post(
          `${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`,
          data,
          {
            headers: {
              Authorization: `Basic ${btoa(
                `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`
              )}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          resolve(res.data.token);
        })
        .catch((error) => reject(error));
    });
  }
}

export default OnlineMeeting;
