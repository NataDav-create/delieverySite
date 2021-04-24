import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../functions/context";

const OrderMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 100%;
  margin-top: 80px;
  background-color: rgba(182, 124, 93, 0.7);
  cursor: pointer;
  h3 {
    transform: rotate(-90deg);
    display: block;
    margin-top: -80px;
    min-width: 200px;
    font-weight: 300;
    color: #fff;
  }
`;

export const OrderMenuFixed = () => {
  const {
    showOrders: { setShowOrder },
  } = useContext(Context);
  return (
    <OrderMenu onClick={() => setShowOrder(true)}>
      <h3> Your order </h3>
    </OrderMenu>
  );
};
