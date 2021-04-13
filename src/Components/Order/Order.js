import React from "react";
import styled from "styled-components";
import { Button } from "../Style/Button";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../functions/secondaryFunction";
import { formatCurrency } from "../functions/secondaryFunction";

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
  z-index: 20;
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
  margin: 30px 35px 30px;
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

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders }) => {
  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );
  const totalCounter = orders.reduce(
    (result, order) => order.count + result,
    0
  );
  return (
    <OrderStyled>
      <OrderTitle> Your Order </OrderTitle>{" "}
      <OrderContent>
        {" "}
        {orders.length ? (
          <OrderList>
            {" "}
            {orders.map((order) => (
              <OrderListItem order={order}> </OrderListItem>
            ))}{" "}
          </OrderList>
        ) : (
          <EmptyList> There are no orders still </EmptyList>
        )}{" "}
      </OrderContent>{" "}
      <Total>
        <TotalHeading> Total: </TotalHeading> <span> {totalCounter} </span>{" "}
        <TotalPrice>{formatCurrency(total)}</TotalPrice>{" "}
      </Total>{" "}
      <Button> Make an Order </Button>{" "}
    </OrderStyled>
  );
};
