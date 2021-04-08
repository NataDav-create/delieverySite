import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 40px 15px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 35px 30px;
  font-weight: 400;
`;

const TotalHeading = styled.h3`
  font-size: 30px;
  flex-grow: 1;
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

export const Order = () => {
  return (
    <OrderStyled>
      <OrderTitle>Your Order</OrderTitle>
      <OrderContent>
        <OrderList>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrderList>
      </OrderContent>
      <Total>
        <TotalHeading>Total:</TotalHeading>
        <span>6</span>
        <TotalPrice>180</TotalPrice>
      </Total>
      <Button>Make an Order</Button>
    </OrderStyled>
  );
};
