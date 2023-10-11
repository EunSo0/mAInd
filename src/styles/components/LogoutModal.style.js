import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 64px;
  bottom: 0;
  right: 4.5rem;
  display: flex;
  width: 320px;
  height: 200px;
  padding-top: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  background-color: #fff;
`;
export const Profile = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 72px;
  background-color: grey;
`;
export const Name = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;
export const LogoutBtn = styled.div`
  width: 100%;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  border-top: 1px solid #e2e2e2;
  text-align: center;
  padding: 15px;
  cursor: pointer;
`;
