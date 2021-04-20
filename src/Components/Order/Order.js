import React from "react";
import styled from "styled-components";
import { Button } from "../Style/Button";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../functions/secondaryFunction";
import { formatCurrency } from "../functions/secondaryFunction";
import { projection } from "../functions/secondaryFunction";
import closeImg from "../../image/sushi/katana.svg";

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  z-index: 20;
`;
const OrderWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  height: 100%;
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

const rulesData = {
  itemName: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : "no topping"),
  ],
  choice: ["choice", (item) => (item ? item : "no choices")],
};
const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  disply: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBtn = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

export const Order = ({
  orders,
  setOrders,
  setOpenItem,
  authentication,
  logIn,
  firebaseDatabase,
  setShowOrder,
}) => {
  const dataBase = firebaseDatabase();
  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref("orders").push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder,
    });
    setOrders([]);
  };
  const deleteItem = (index) => {
    const newOrder = [...orders];
    newOrder.splice(index, 1);
    setOrders(newOrder);
  };
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
      <OrderWrapper>
        <ButtonClose
          onClick={() => {
            setShowOrder(false);
          }}
        >
          <ImgBtn src={closeImg} alt="burger" />
        </ButtonClose>
        <OrderTitle> Your Order </OrderTitle>{" "}
        <OrderContent>
          {" "}
          {orders.length ? (
            <OrderList>
              {" "}
              {orders.map((order, index) => (
                <OrderListItem
                  key={index}
                  order={order}
                  deleteItem={deleteItem}
                  index={index}
                  setOpenItem={setOpenItem}
                ></OrderListItem>
              ))}{" "}
            </OrderList>
          ) : (
            <EmptyList> There are no orders still </EmptyList>
          )}{" "}
        </OrderContent>{" "}
        <Total>
          <TotalHeading> Total: </TotalHeading> <span> {totalCounter} </span>{" "}
          <TotalPrice> {formatCurrency(total)} </TotalPrice>{" "}
        </Total>{" "}
        <Button onClick={authentication ? sendOrder : logIn}>
          {" "}
          Make an Order{" "}
        </Button>
      </OrderWrapper>
    </OrderStyled>
  );
};
