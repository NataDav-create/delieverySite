import React from "react";
import styled from "styled-components";
import trashImage from "../../image/trash.svg";
import { totalPriceItems } from "../functions/secondaryFunction";
import { formatCurrency } from "../functions/secondaryFunction";

const OrderItemStyled = styled.li`
  display: flex;
  align-items: flex-start;
  margin: 15px 0;
  font-weight: 400;
  font-size: 18px;
`;

const ItemNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ItemName = styled.span`
  font-size: 22px;
  padding-right: 10px;
`;

const ItemToppings = styled.div`
  margin-top: 5px;
`;

const ItemTopping = styled.span`
  font-size: 15px;
  font-weight: 300;
  color: #333;
  margin-right: 5px;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
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

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemNameWrapper>
      <ItemName>{order.name}</ItemName>
      <ItemToppings>
        {order.topping.map((item) => {
          if (item.checked) {
            return <ItemTopping>{item.name}</ItemTopping>;
          }
          return true;
        })}
      </ItemToppings>
    </ItemNameWrapper>
    <span> {order.count} </span>{" "}
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>{" "}
    <TrashButton />
  </OrderItemStyled>
);
