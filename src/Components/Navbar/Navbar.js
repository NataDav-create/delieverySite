import React, { useContext } from "react";
import styled from "styled-components";
import logoImg from "../../image/sushi/logo.svg";
import signIn from "../../image/sushi/samurai.svg";
import { Context } from "../functions/context";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: rgb(23, 14, 9, 0.7);
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;
const ImgLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Login = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 37px;
  background-color: transparent;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  font-weight: 300;
`;

const SigninBtnImg = styled.img`
  width: 32px;
  margin-bottom: 3px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Logout = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 30px;
`;

const Figure = styled.figure`
  margin: 0 30px;
  font-size: 16px;
`;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1> SushiLand </H1>{" "}
      </Logo>{" "}
      {authentication ? (
        <User>
          <Figure>
            <SigninBtnImg src={signIn} alt={authentication.displayName} />{" "}
            <figcaption> {authentication.displayName} </figcaption>{" "}
          </Figure>{" "}
          <Logout title="logout" onClick={logOut}>
            X{" "}
          </Logout>{" "}
        </User>
      ) : (
        <Login onClick={logIn}>
          <SigninBtnImg src={signIn} alt="signin" />
          Login{" "}
        </Login>
      )}{" "}
    </NavBarStyled>
  );
};
