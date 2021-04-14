import styled from "styled-components";

export const Button = styled.button `
width: 400px;
margin: 0 auto;
border: none;
outline: none;
padding: 10px 15px;
cursor: pointer;
background-color: #281208;
color: #fff;
font-size: 18px;
transition: all 0.4s;
&:hover {
  background-color: #dfaa83;
  color: #000;
}
&:disabled {
  color: #bbb;
  background-color: #ccc;
  border-color: #aaa;
}
`;