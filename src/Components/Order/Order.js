import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../Style/Button";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../functions/secondaryFunction";
import { formatCurrency } from "../functions/secondaryFunction";
import closeImg from "../../image/sushi/katana.svg";
import { Context } from "../functions/context";

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

export const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

export const Total = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 30px 35px 30px;
  font-weight: 400;
`;

const TotalHeading = styled.h3`
  font-size: 30px;
  flex-grow: 1;
`;

export const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const ButtonClose = styled.button`
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

export const ImgBtn = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

export const Order = () => {
  const {
    auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
    showOrders: { setShowOrder },
  } = useContext(Context);
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
        <ButtonClose onClick={() => setShowOrder(false)}>
          <ImgBtn src={closeImg} alt="burger" />
        </ButtonClose>{" "}
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
                ></OrderListItem>
              ))}{" "}
            </OrderList>
          ) : (
            <EmptyList> There are no orders still </EmptyList>
          )}{" "}
        </OrderContent>{" "}
        {orders.length ? (
          <>
            <Total>
              <TotalHeading> Total: </TotalHeading>{" "}
              <span> {totalCounter} </span>{" "}
              <TotalPrice> {formatCurrency(total)} </TotalPrice>{" "}
            </Total>{" "}
            <Button
              onClick={() => {
                if (authentication) {
                  setOpenOrderConfirm(true);
                } else {
                  logIn();
                }
              }}
            >
              Make an Order{" "}
            </Button>
          </>
        ) : null}
      </OrderWrapper>{" "}
    </OrderStyled>
  );
};
