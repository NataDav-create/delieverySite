import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Item = styled.li`
  position: relative;
  width: 400px;
  height: 200px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: #dfaa83;
  font-weight: 400;
  font-size: 22px;
  z-index: 1;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 50%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 1);
    &:after {
      opacity: 0;
    }
  }
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {" "}
    {itemList.map((item) => {
      return (
        <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
          <p> {item.name} </p>{" "}
          <Price>
            {item.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "AED",
            })}
          </Price>{" "}
        </Item>
      );
    })}{" "}
  </List>
);
