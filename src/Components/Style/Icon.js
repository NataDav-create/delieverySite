import styled from "styled-components";
import burgerImg from "../../image/sushi/yen-shopping-cart.svg";

const ButtonIcon = styled.button`
  position: fixed;
  top: 50%;
  left: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  disply: flex;
  justify-content: center;
  align-items: center;
`;

const BurgerImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const Icon = ({ setShowOrder }) => {
  return (
    <ButtonIcon
      onClick={() => {
        setShowOrder(true);
      }}
    >
      <BurgerImg src={burgerImg} alt="cart" />
    </ButtonIcon>
  );
};
