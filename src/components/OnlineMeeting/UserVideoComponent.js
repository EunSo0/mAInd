/* eslint-disable react/prop-types */
import React, { Component } from "react";
import styled from "styled-components";
import OpenViduVideoComponent from "./OvVideo";
import "./UserVideo.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default class UserVideoComponent extends Component {
  getNicknameTag() {
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData;
  }

  captureVideoFrame = () => {
    function saveAsJPEG(imageData, filename) {
      // Convert the base64 image data to a Blob object
      const byteCharacters = atob(imageData.split(",")[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/jpeg" });

      // Create a download link
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;

      // Simulate a click event to trigger the download
      link.click();

      // Clean up
      URL.revokeObjectURL(link.href);
      link.remove();
    }

    const videoElement = document.getElementById("videoElement");
    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas
      .getContext("2d")
      .drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL("image/jpeg");

    // Save the captured image as JPEG file
    saveAsJPEG(image, "captured_image.jpg");
  };

  render() {
    return (
      <Container>
        {this.props.streamManager !== undefined ? (
          <div className="streamcomponent">
            <OpenViduVideoComponent
              streamManager={this.props.streamManager}
              id="videoElement"
            />
            <div>
              <p>{this.getNicknameTag()}</p>
              <button onClick={this.captureVideoFrame}>Capture Frame</button>
            </div>
          </div>
        ) : null}
      </Container>
    );
  }
}
