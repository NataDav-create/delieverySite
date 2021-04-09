import React from "react";
import styled from "styled-components";
import trashImage from "../../image/trash.svg";

const OrderItemStyled = styled.li `
  display: flex;
  align-items: flex-end;
  margin: 15px 0;
  font-weight: 400;
  font-size: 18px;
`;

const ItemName = styled.span `
  flex-grow: 1;
  font-size: 22px;
  padding-right: 10px;
`;

const ItemPrice = styled.span `
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button `
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const OrderListItem = ({
  order
}) => ( <
  OrderItemStyled >
  <
  ItemName > {
    order.name
  } < /ItemName> <
  span > 2 < /span> <
  ItemPrice > {
    order.price.toLocaleString("en-IN", {
      style: "currency",
      currency: "AED",
    })
  } <
  /ItemPrice> <
  TrashButton / >
  <
  /OrderItemStyled>
);