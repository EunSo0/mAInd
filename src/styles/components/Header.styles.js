import styled from "@emotion/styled";

export const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #e2e2e2;
`;

export const Inner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  font-size: 34px;
  letter-spacing: 1px;
  transition: all 0.4s;
  color: #36f;
  font-weight: 700;
  text-align: center;
  font-family: "Poppins", sans-serif;
  line-height: 36px;
`;
export const LogoTxt = styled.div`
  font-size: 12px;
  color: #36f;
  text-align: center;
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const NavLink = styled.div`
  margin: 0 20px;
  font-size: 18px;
  color: #666;
  font-family: "Montserrat", sans-serif;
  transition: color 0.4s;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #000;
    }
  }
`;

export const Name = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-right: 30px;
`;
export const RoleBtn = styled.div`
  display: flex;
  padding: 8px 18px;
  border-radius: 16px;
  background: #14ae5c;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Login = styled.div`
  background-color: #3366ff;
  color: #fff;
  font-size: 16px;
  padding: 8px 16px;
  margin-left: 50px;
  border-radius: 16px;
  cursor: pointer;
`;
