import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Overlay = styled.div`
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
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  padding: 10px 15px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }
  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalInner>
          <TopWrapper>
            <ModalHeader>{openItem.name}</ModalHeader>
            <Price>
              {openItem.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "AED",
              })}
            </Price>
          </TopWrapper>
          <Button>Add to cart</Button>
        </ModalInner>
      </Modal>
    </Overlay>
  );
};
