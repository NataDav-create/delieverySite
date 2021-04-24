import React, { useRef, useContext } from "react";
import styled from "styled-components";
import trashImage from "../../image/trash.svg";
import { totalPriceItems } from "../functions/secondaryFunction";
import { formatCurrency } from "../functions/secondaryFunction";
import { Context } from "../functions/context";

const OrderItemStyled = styled.li`
  display: flex;
  align-items: flex-start;
  margin: 15px 0;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
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

const Toppings = styled.div`
  display: flex;
  color: #9a9a9a;
  font-size: 15px;
  font-weight: 300;
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

export const OrderListItem = ({ order, index, deleteItem }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);
  const topping = order.topping
    .filter((item) => item.checked)
    .map((item) => item.name)
    .join(", ");

  const refDeleteButton = useRef(null);

  return (
    <OrderItemStyled
      onClick={(e) =>
        e.target !== refDeleteButton.current &&
        setOpenItem({
          ...order,
          index,
        })
      }
    >
      <ItemNameWrapper>
        <ItemName>
          {" "}
          {order.name} {order.choice}{" "}
        </ItemName>{" "}
        {topping && <Toppings> Toppings: {topping} </Toppings>}{" "}
      </ItemNameWrapper>{" "}
      <span> {order.count} </span>{" "}
      <ItemPrice> {formatCurrency(totalPriceItems(order))} </ItemPrice>{" "}
      <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)} />{" "}
    </OrderItemStyled>
  );
};
