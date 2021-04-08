import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu2";
import { ListItem } from "./ListItem";
import mainBg from "../image/sushi/bg-5.jpg";
import { Banner } from "./Banner";

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

const SectionMenu = styled.section`
  padding: 80px 30px;
`;

const MainTitle = styled.h1`
  display: block;
  font-size: 90px;
  color: #fff;
  margin-bottom: 10px;
`;

const MainSubtitle = styled.p`
  color: #fff;
  font-size: 30px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner>
      {" "}
      <MainTitle> Traditional Rolls </MainTitle>
      <MainSubtitle>Original and The Best</MainSubtitle>
    </Banner>
    <Container>
      <SectionMenu>
        <h2> Rolls </h2>{" "}
        <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />{" "}
      </SectionMenu>{" "}
      <SectionMenu>
        <h2> Sushi / Sashimi / Platter </h2>{" "}
        <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />{" "}
      </SectionMenu>{" "}
    </Container>{" "}
  </MenuStyled>
);
