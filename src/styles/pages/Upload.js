import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;
export const Title = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 1200px;
  padding: 64px 380px 48px 380px;
  gap: 64px;
  border-radius: 16px;
  border: 1px solid #868686;
  background: #f4f4f4;
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ListTitle = styled.div`
  width: 100px;
  color: #000;
  font-size: 24px;
`;
export const sessionContent = styled.input`
  width: 150px;
  display: flex;
  flex-direction: row;
  color: #000;
  font-size: 20px;
  text-align: right;
`;
export const selectBtn = styled.input`
  line-height: 2.5rem;
`;
export const UploadBtn = styled.button`
  display: flex;
  height: 56px;
  padding: 18px 136px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  margin: 0 auto;
  border-radius: 16px;
  border: none;
  background: #36f;
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  line-height: 24px;
  cursor: pointer;
`;
