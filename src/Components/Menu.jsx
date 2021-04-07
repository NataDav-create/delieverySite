import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu2";
import { ListItem } from "./ListItem";
import bgImg from "../image/sushi/1.jpg";
import mainBg from "../image/sushi/bg-5.jpg";

const Container = styled.div`
  width: 1300px;
  padding: 0 15px;
  margin: 0 auto;
`;

const MenuStyled = styled.main`
  background-image: url(${mainBg});
  background-position: center right 20%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 80px;
`;

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: -80px;
  background-image: url(${bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SectionMenu = styled.section`
  padding: 80px 30px;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
    <Container>
      <SectionMenu>
        <h2>Rolls</h2>
        <ListItem itemList={dbMenu.burger} />
      </SectionMenu>
      <SectionMenu>
        <h2>Sushi / Sashimi / Platter</h2>
        <ListItem itemList={dbMenu.other} />
      </SectionMenu>
    </Container>
  </MenuStyled>
);
