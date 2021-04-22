import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Overlay } from "../Modal/ModalItem";
import { OrderTitle, Total, TotalPrice } from "./Order";
import { Button } from "../Style/Button";
import { projection } from "../functions/secondaryFunction";
import { totalPriceItems } from "../functions/secondaryFunction";
import { formatCurrency } from "../functions/secondaryFunction";
import { Context } from "../functions/context";
import closeImg from "../../image/sushi/katana.svg";
import { ButtonClose, ImgBtn } from "./Order";

const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
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

const sendOrder = (database, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  database.ref("orders").push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
};

export const OrderConfirm = ({ database }) => {
  const {
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    modalThanks: { openModalThanks, setOpenOpenModalThanks },
  } = useContext(Context);
  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );
  // useEffect(() => {
  //   let modalThanks = setTimeout(() => {
  //     setOpenOrderConfirm(false);
  //   }, 1000);
  //   return () => clearInterval(modalThanks);
  // }, [setOpenOrderConfirm]);
  return (
    <Overlay>
      {!openModalThanks && (
        <Modal>
          <ButtonClose
            onClick={() => {
              setOpenOrderConfirm(false);
              setOpenOpenModalThanks(false);
            }}
          >
            <ImgBtn src={closeImg} alt="burger" />
          </ButtonClose>
          <OrderTitle> {authentication.displayName} </OrderTitle>
          <Text>Please Confirm your order</Text>
          <Total>
            <span>Total: </span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </Total>
          <Button
            onClick={() => {
              sendOrder(database, orders, authentication);
              setOrders([]);
              setOpenOpenModalThanks(true);
              setTimeout(() => {
                setOpenOrderConfirm(false);
                setOpenOpenModalThanks(false);
              }, 2000);
            }}
          >
            Confirm
          </Button>
        </Modal>
      )}
      {openModalThanks && (
        <Modal>
          <OrderTitle> {authentication.displayName} </OrderTitle>
          <Text>Thank you for your order</Text>
        </Modal>
      )}
    </Overlay>
  );
};
