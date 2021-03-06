import React, { useContext } from "react";
import styled from "styled-components";
import { CountItem } from "./CountItem";
import { Button } from "../Style/Button";
import { useCount } from "../Hooks/useCount";
import { totalPriceItems } from "../functions/secondaryFunction";
import { formatCurrency } from "../functions/secondaryFunction";
import { Toppings } from "./Toppings";
import { Choices } from "./Choices";
import { useToppings } from "../Hooks/useToppings";
import { useChoices } from "../Hooks/useChoices";
import { Context } from "../functions/context";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 700px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 450px;
  padding: 10px 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const ModalHeader = styled.h3`
  font-size: 25px;
  color: #281208;
`;

const Price = styled.p`
  font-size: 22px;
  color: #281208;
  font-weight: 400;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Amount = styled.span`
  color: #612d0b;
  font-weight: bold;
`;

// export const totalPriceItems = (order) => order.price * order.count;

export const ModalItem = () => {
  const {
    openItem: { openItem, setOpenItem },
    orders: { orders, setOrders },
    showOrders: { setShowOrder },
  } = useContext(Context);
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />{" "}
        <Content>
          <HeaderContent>
            <ModalHeader> {openItem.name} </ModalHeader>{" "}
            <Price> {formatCurrency(openItem.price)} </Price>{" "}
          </HeaderContent>{" "}
          <CountItem {...counter} />{" "}
          {openItem.toppings && <Toppings {...toppings} />}{" "}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}{" "}
          <TotalPriceItem>
            <span> Price: </span>{" "}
            <Amount> {formatCurrency(totalPriceItems(order))} </Amount>{" "}
          </TotalPriceItem>{" "}
          <Button
            onClick={() => {
              if (isEdit) {
                editOrder();
              } else {
                addToOrder();
              }
              setShowOrder(true);
            }}
            disabled={order.choices && !order.choice}
          >
            {isEdit ? "Edit" : "Add to cart"}{" "}
          </Button>{" "}
        </Content>{" "}
      </Modal>{" "}
    </Overlay>
  );
};
