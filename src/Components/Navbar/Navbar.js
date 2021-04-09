import React from "react";
import styled from "styled-components";
// import logoImg from "../image/logo.svg";
import logoImg from "../../image/sushi/logo.svg";
// import signIn from "../image/sign.svg";
import signIn from "../../image/sushi/samurai.svg";

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
`;

const SigninBtnImg = styled.img`
  width: 32px;
  margin-bottom: 3px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1> SushiLand </H1>{" "}
    </Logo>{" "}
    <Login>
      <SigninBtnImg src={signIn} alt="signin" />
      Enter{" "}
    </Login>{" "}
  </NavBarStyled>
);
