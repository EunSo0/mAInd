import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #202124;
`;

export const Header = styled.div`
  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: center;
`;

export const StudyTitle = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const Middle = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const Left = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const VideoContainer = styled.div`
  margin-top: 30px;
  height: 77vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StreamContainerWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  height: 100%;
  padding: 10px;
  @media screen and (max-width: 800px) {
    background-color: red;
  }
`;

export const StreamContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 5px;
  min-height: 34vh;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Bottom = styled.div`
  height: 13vh;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const BottomBox = styled.div`
  display: flex;
  height: 100%;
  width: 20%;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #3c4043;
  }

  ${(props) =>
    props.primary &&
    `
      background-color: red;
      color: white;
      &:hover{
          background-color: red;
      }
    `}
`;

export const ChatIconBox = styled.div`
  position: absolute;
  color: white;
  right: 60px;
  top: 50%;
  bottom: 50%;
  cursor: pointer;
`;
