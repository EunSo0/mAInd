import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  border-radius: 8px;
  border-top: 24px solid #36f;
  padding: 28px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 100px;
  margin-right: 30px;
  background-color: #fff;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: end;
`;
export const ProfileTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #36f;
  border-bottom: 1px solid #36f;
  padding: 2px;
  margin-right: 10px;
`;
export const Role = styled.div`
  padding: 4px 16px;
  border-radius: 16px;
  background: #14ae5c;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &.client {
    background: #36f;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const ContentList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;
export const Title = styled.div`
  width: 110px;
  color: #666;
  font-size: 20px;
  font-weight: 400;
  line-height: 2.1rem;
`;
export const Content = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
`;

export const Btn = styled.button`
  border-radius: 8px;
  background: #666;
  padding: 5px 24px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &.none {
    cursor: auto;
  }
`;
