import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: #eff1ff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: center;
`;

export const StudyTitle = styled.p`
  color: #000;
  font-size: 32px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin: 24px 0;
`;

export const Middle = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const JoinWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
`;
export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TxtList = styled.div`
  font-size: 24px;
  margin: 4px;
`;
export const Txt = styled.div`
  color: #36f;
  margin-top: 24px;
  margin-bottom: 50px;
`;
export const ButtonForm = styled.form`
  display: flex;
  justify-content: center;
`;
export const Button = styled.input`
  width: 350px;
  height: 80px;
  border-radius: 32px;
  border: none;
  background: #36f;
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  text-align: center;
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
  grid-template-columns: ${({ singleParticipant }) =>
    singleParticipant ? "1fr" : "repeat(2, 1fr)"};
  grid-gap: 20px;
  height: 100%;
  padding: 10px;
  @media screen and (max-width: 800px) {
    background-color: ${({ singleParticipant }) =>
      singleParticipant ? "blue" : "red"};
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
