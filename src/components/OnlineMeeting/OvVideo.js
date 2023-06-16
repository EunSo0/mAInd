/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class OpenViduVideoComponent extends Component {
  constructor(props) {
    super(props); // 컴포넌트 마운트 되기 전 this.props 사용하기 위해 호출
    this.videoRef = React.createRef(); // HTML video 요소를 가져옴
  }

  componentDidUpdate(prevProps) {
    const videoElement = this.videoRef.current;

    if (prevProps && videoElement) {
      this.props.streamManager.addVideoElement(videoElement);
    }
  }

  componentDidMount() {
    const videoElement = this.videoRef.current;

    if (!videoElement) {
      return; // 비디오 요소가 없으면 함수 종료
    }

    if (this.props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(videoElement);
    }
  }

  render() {
    const videoElement = this.videoRef.current;

    if (!videoElement) {
      return <div>Loading...</div>; // 비디오 요소가 없을 때 로딩 상태를 표시하거나 다른 컨텐츠를 반환
    }

    return <video autoPlay={true} ref={this.videoRef} />;
  }
}
