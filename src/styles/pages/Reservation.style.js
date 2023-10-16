import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 150px;
`;
export const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin: 40px;
`;
export const Txt = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 60px;
`;
export const Step = styled.div`
  width: 355px;
  height: 96px;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
`;
export const WriteBtn = styled.button`
  display: flex;
  width: 390px;
  height: 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: none;
  background: #36f;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  margin: 0 auto;
  margin-top: 80px;
  cursor: pointer;
  margin-bottom: 40px;
`;
