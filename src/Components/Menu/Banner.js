import styled from "styled-components";
import bgImg from "../../image/sushi/8.jpg";

export const Banner = styled.div `
  width: 100%;
  height: 100vh;
  margin-top: -80px;
  background-image: url(${bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 200px;
`;